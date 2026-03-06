import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

const serikBio = [
    {
        heading: null,
        text: 'Он не любит, когда близкие называют его по имени. Для своих он - Сико. (Исключение - семья, родственники и незнакомые люди.)'
    },
    {
        heading: null,
        text: 'Он человек гордый. Немного жадный - и сам это признаёт. Закрытый. Почти никого близко не подпускает. Доверяет не всем - и считает это скорее плюсом.'
    },
    {
        heading: 'Интуиция',
        text: 'У него очень сильная интуиция. Он внимательно изучает каждого человека, анализирует в голове, замечает мелочи. Чувствует, когда ему врут. И чаще всего его интуиция его не подводит - в итоге человек оказывается именно таким, каким он его изначально почувствовал.'
    },
    {
        heading: 'Принципы',
        text: 'Он живёт по многим принципам. Иногда даже сам забывает, откуда они у него появились. Но в сложные моменты всё равно поступает именно по ним.'
    },
    {
        heading: 'Будущее',
        text: 'Он слишком много думает о будущем. Особенно о карьере и имуществе. Он не хочет всю жизнь работать «на кого-то» - хочет работать на себя. Хочет в молодости купить квартиры, открыть бизнесы, создать активы, которые будут приносить доход. Его цель - чтобы в будущем его дети ни в чём не нуждались. Чтобы у них было наследство. Чтобы они жили легче, чем он.'
    },
    {
        heading: 'Образ жизни',
        text: 'Он не курит, не пьёт (и надеется, что так будет всегда). Любит работать. Любит сладкое, особенно белый шоколад - но часто ест до тех пор, пока не надоест. Он не любит, когда его долго обнимают. Он сам по себе. Может гулять один, поехать куда-то один, сидеть один - и ему не скучно.'
    },
    {
        heading: 'Поддержка',
        text: 'Он говорит, что не любит поддерживать людей и не умеет это делать. Но если человеку действительно тяжело - он делает исключение.'
    },
    {
        heading: 'Вкусы',
        text: 'Ему нравится актриса Адина Бажан. Из музыки слушает Billie Eilish, Lana Del Rey, Жанар Дугалова, Асик и многое другое. Он верит в дружбу между девушкой и парнем.'
    },
    {
        heading: 'Любовь',
        text: 'Он никому не показывает свою любовь. Не знает почему - может, стесняется, а может, просто такой характер. Но в глубине души он очень сильно любит своих близких людей - что бы они ни сделали.'
    },
    {
        heading: 'Дружба',
        text: 'У него маленький круг друзей. И если кто-то уходит из его жизни после многих лет общения - он не может легко забыть и отпустить. Это его самый большой минус. Он ревнует даже своих друзей. Не любит знакомить старых друзей с новыми. И почти не рассказывает о своей семье.'
    },
];

const friends = [
    {
        name: 'Томми',
        detail: 'Знакомы с 2023 года.',
        text: 'Серик доверяет ему, потому что уверен - Томми никому ничего не расскажет. Томми добрый. Спокойный. Его «белоснежный» друг. Серик всегда говорил, что у него нет самого близкого друга среди парней - и откровенно это признаёт. Но в глубине души он считает, что именно Томми - самый близкий друг в его жизни.'
    },
    {
        name: 'Рома',
        detail: 'Знакомы с 2023 года.',
        text: 'Рому он тоже считает близким другом, но никогда прямо об этом не говорит. Они часто ссорятся, ругаются, обижаются друг на друга. Серик при Роме - душнила. Цепляется к каждому слову, может специально спорить, из-за этого Рома бесится. И иногда Серик этим наслаждается. Но сколько бы они ни ругались - в конце концов всё забывается, и они снова общаются так, будто ничего не было. Серик доверяет Роме, но не так, как Томми. Потому что Рома может случайно что-то рассказать в разговоре. Тем не менее, Рома знает о Серике многое - и Серик о Роме тоже.'
    },
    {
        name: 'Перизат',
        detail: 'Знакомы с 2014 года.',
        text: 'Тут уже без слов. Они выросли вместе. С детства рядом. Много лет дружбы. Почти никогда не ссорятся и не обижаются. Если в жизни Серика что-то происходит - первым делом он рассказывает именно ей. Полное доверие. Столько поддержки, сколько было от неё, было не от каждого. Он очень ценит её и боится потерять.'
    },
    {
        name: 'Арай',
        detail: 'Знакомы с 2021-2022 года.',
        text: 'С ней он очень хорошо общается уже 5 лет. В детстве пересекались, их братья общались, семьи знают друг друга. Но по-настоящему близкое общение началось последние годы. Серик не рассказывает ей всё так, как Перизат. Но доверяет сильно. Иногда он делится, и в трудные моменты она поддерживает его. За это он её ценит.'
    },
];

const liyaStory = [
    {
        heading: 'Лия',
        text: 'У него была кошка — Лия. И он её очень сильно любил.\n\nСначала родители не разрешали заводить кошку. Но Серик стоял на своём. Спорил. Доказывал. Говорил: «Вы живёте в другом городе, я — в другом». И в итоге добился своего.\n\nКогда он был в Кызылорде, начал искать котёнка. Нашёл, забронировал и договорился, что заберёт в августе — как раз купил билеты в Астану.'
    },
    {
        heading: 'Поиски',
        text: 'Через неделю ему сообщили, что котёнка продали. Он расстроился. Начал искать заново — и нашёл её. Белая, пушистая, вислоухая шиншилла, дорогая порода. Голубые глаза. Ухоженная. Девочка.'
    },
    {
        heading: 'Случайность',
        text: 'Он написал хозяйке. Она ответила: «Если заберёте сегодня — можете забрать. У детей аллергия».\n\nСерик сказал, что прилетит в августе. Через некоторое время она написала, что уже продала.\n\nОн снова расстроился. Писал ей, надеялся, что она передумает. Но она стояла на своём.'
    },
    {
        heading: 'Находка',
        text: 'Через время он снова наткнулся на объявление — но уже с другим номером. Он написал и понял, что это муж той самой хозяйки. Оказалось, кошку ещё не продали.'
    },
    {
        heading: 'Встреча',
        text: 'И тогда Серик сразу договорился, что заберёт её сегодня. Попросил подругу забрать котёнка. Поменял билеты с августа на июль.\n\nРодителям он сказал, что это мальчик — потому что ранее они разрешили только кота.\n\nКогда прилетел в Астану — признался, что это девочка.'
    },
    {
        heading: 'Семья',
        text: 'Через год Лия родила четырёх котят. Серик их продал.'
    },
    {
        heading: 'Прощание',
        text: 'Летом он планировал переехать в другую квартиру и хотел забрать Лию с собой. Но в последние дни она начала болеть, её тошнило. Он испугался. Передумал рисковать. И отдал её в хорошие руки. Он до сих пор по ней скучает.'
    }
];


const otherFriends = ['Айбек', 'Алдияр', 'Елжас', 'Акема', 'Аружан', 'Агыбай', 'Санджар'];

export default function Serik() {
    return (
        <div className="bg-[#fafafa] text-gray-900 min-h-[100dvh] font-sans antialiased relative">

            {/* Top Accent */}
            <div className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#1e2a4a] via-[#2e4080] to-[#1e2a4a] z-50" />


            {/* Hero */}
            <div className="relative min-h-screen flex flex-col justify-center items-start px-10 md:px-20 pt-24 pb-16 overflow-hidden">
                <img
                    src="/srk.png"
                    alt="Serik"
                    className="absolute top-[7%] left-0 w-40 opacity-70 select-none pointer-events-none md:hidden"
                    loading="lazy"
                    decoding="async"
                />
                <div className="absolute top-[12%] md:top-[40%] right-0 text-[30vw] font-black text-[#1e2a4a]/4 leading-none select-none pointer-events-none tracking-tighter pr-4">
                    S.
                </div>
                <div className="relative z-10 max-w-2xl">
                    <p className="text-[10px] font-black uppercase tracking-[0.6em] text-[#2e4080] mb-8">
                        О Serik Sisembaev
                    </p>
                    <h1 className="font-display text-7xl md:text-9xl font-bold italic tracking-tighter text-gray-900 leading-none mb-4">
                        Сико.
                    </h1>
                    <div className="h-[2px] w-24 bg-[#1e2a4a]/15 mt-8 mb-10 rounded-full" />
                    <p className="text-gray-400 font-medium text-sm leading-relaxed max-w-md">
                        Он не любит, когда близкие называют его по имени. Для своих он - Сико.
                    </p>
                </div>
            </div>

            {/* Bio */}
            <div className="max-w-3xl mx-auto px-10 md:px-20 pb-20 flex flex-col gap-10">
                <div className="h-[1px] bg-gray-200 mb-2" />
                {serikBio.map((item, i) => (
                    <div key={i} className="flex flex-col md:flex-row gap-4 md:gap-10 items-start">
                        <div className="md:w-32 shrink-0">
                            {item.heading && (
                                <span className="text-[8px] font-black uppercase tracking-[0.4em] text-[#2e4080]/60">
                                    {item.heading}
                                </span>
                            )}
                        </div>
                        <p className="text-gray-500 text-sm leading-loose flex-1 border-l-2 border-[#1e2a4a]/6 pl-6">
                            {item.text}
                        </p>
                    </div>
                ))}

                {/* Friends Section */}
                <div className="h-[1px] bg-gray-200 mt-8 mb-2" />
                <p className="text-[10px] font-black uppercase tracking-[0.6em] text-[#2e4080] mb-2">
                    Его близкие друзья
                </p>

                {friends.map((f, i) => (
                    <div key={i} className="flex flex-col md:flex-row gap-4 md:gap-10 items-start">
                        <div className="md:w-32 shrink-0 flex flex-col gap-1">
                            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[#2e4080]/80">{f.name}</span>
                            {f.detail && <span className="text-[8px] text-gray-400 font-medium">{f.detail}</span>}
                        </div>
                        <p className="text-gray-500 text-sm leading-loose flex-1 border-l-2 border-[#1e2a4a]/6 pl-6">
                            {f.text}
                        </p>
                    </div>
                ))}

                {/* Other Friends */}
                <div className="flex flex-col md:flex-row gap-4 md:gap-10 items-start mt-2">
                    <div className="md:w-32 shrink-0">
                        <span className="text-[8px] font-black uppercase tracking-[0.4em] text-[#2e4080]/60">Остальные</span>
                    </div>
                    <div className="flex-1 border-l-2 border-[#1e2a4a]/6 pl-6">
                        <div className="flex flex-wrap gap-3">
                            {otherFriends.map((name) => (
                                <span key={name} className="text-[10px] font-black uppercase tracking-[0.3em] px-4 py-2 rounded-full border border-gray-200 bg-white text-gray-400">
                                    {name}
                                </span>
                            ))}
                        </div>
                        <p className="text-gray-400 text-sm leading-loose mt-4">
                            Они - просто друзья. Но самые близкие - это те четверо.
                        </p>
                    </div>
                </div>

                {/* Liya Section */}
                <div className="h-[1px] bg-gray-200 mt-8 mb-2" />
                <p className="text-[10px] font-black uppercase tracking-[0.6em] text-[#2e4080] mb-2">
                    Лия
                </p>

                {liyaStory.map((item, i) => (
                    <div key={i} className="flex flex-col md:flex-row gap-4 md:gap-10 items-start">
                        <div className="md:w-32 shrink-0">
                            {item.heading && (
                                <span className="text-[8px] font-black uppercase tracking-[0.4em] text-[#2e4080]/60">
                                    {item.heading}
                                </span>
                            )}
                        </div>
                        <p className="text-gray-500 text-sm leading-loose flex-1 border-l-2 border-[#1e2a4a]/6 pl-6 whitespace-pre-wrap">
                            {item.text}
                        </p>
                    </div>
                ))}


                <div className="h-[1px] bg-gray-200 mt-8" />
            </div>
            <Footer />
        </div>
    );
}
