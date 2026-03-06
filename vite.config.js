import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Basic in-memory state for development
const globalState = {
  isAizhbEnabled: false
};

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    {
      name: 'state-api',
      configureServer(server) {
        server.middlewares.use((req, res, next) => {
          if (req.url === '/api/state') {
            if (req.method === 'GET') {
              res.setHeader('Content-Type', 'application/json');
              res.end(JSON.stringify(globalState));
              return;
            }
            if (req.method === 'POST') {
              let body = '';
              req.on('data', chunk => { body += chunk; });
              req.on('end', () => {
                try {
                  const data = JSON.parse(body);
                  if (data.isAizhbEnabled !== undefined) globalState.isAizhbEnabled = data.isAizhbEnabled;
                  res.setHeader('Content-Type', 'application/json');
                  res.end(JSON.stringify(globalState));
                } catch (e) {
                  res.statusCode = 400;
                  res.end('Invalid JSON');
                }
              });
              return;
            }
          }
          next();
        });
      }
    }
  ],
})
