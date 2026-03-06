import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

const aizereBio = [
    {
        heading: 'Суть',
        text: 'Она — человек с невероятной силой духа и искренним сердцем. Сильная, искренняя, красивая и неповторимая. Она — та самая искра, которая зажигает свет даже в самые хмурые дни.'
    },
    {
        heading: 'Характер',
        text: 'Она умеет сочетать в себе мягкость и твердость. Её доброта не знает границ, но у неё есть свои принципы, которые она бережно хранит. Она вдохновляет своей естественностью и умением быть собой.'
    },
    {
        heading: 'Вдохновение',
        text: 'Она — главная муза. Её присутствие в жизни Серика меняет всё: от образа мыслей до глобальных целей. Она не просто поддерживает — она верит так сильно, что в успех невозможно не поверить самому.'
    },
    {
        heading: 'Детали',
        text: 'Она замечает то, что другие пропускают. Тонкие оттенки чувств, красоту момента, мелочи, которые делают жизнь по-настоящему живой. Её мир полон света и тепла.'
    },
    {
        heading: 'Будущее',
        text: 'Она мечтает о многом, и эти мечты всегда наполнены заботой о близких. Она хочет строить жизнь, в которой будет место для творчества, любви и гармонии. Её путь — это путь созидания.'
    },
];

const qualities = [
    {
        name: 'Сильная',
        detail: 'Внутренняя опора',
        text: 'Она способна преодолевать любые трудности, сохраняя при этом удивительную плавность и грацию. Её сила не в громких словах, а в тихой уверенности.'
    },
    {
        name: 'Искренняя',
        detail: 'Честность с собой',
        text: 'В мире масок она остается настоящей. Её слова всегда совпадают с мыслями, а чувства — с делами. Это то, что делает её уникальной.'
    },
    {
        name: 'Красивая',
        detail: 'Внешний и внутренний свет',
        text: 'Эта красота идет изнутри. Её взгляд, улыбка и жесты наполнены теплом, которое чувствуют все вокруг. Она — эстетика в каждом движении.'
    },
    {
        name: 'Неповторимая',
        detail: 'Особенная связь',
        text: 'Таких людей встречают раз в жизни. Она — редкий дар, который Серик бесконечно ценит. Она — его мир, его муза, его жизнь.'
    }
];

const keywords = ['Муза', 'Вдохновение', 'Сияние', 'Гармония', 'Любовь', 'Искренность', 'Сила'];

const essenceStory = [
    {
        heading: 'Связь',
        text: 'Спасибо тебе за то, что ты есть. За твою невероятную поддержку, за твоё безграничное терпение и за то, как ты наполняешь смыслом каждый мой день.\n\nТы — мой вдохновитель, мой самый близкий человек и частичка моей души. Я благодарен судьбе за каждый момент, проведённый рядом с тобой.'
    },
    {
        heading: 'Цитата',
        text: '«Карлос Солис любил свою жену больше всех на свете, не смотря на то что она была тщеславна, эгоистична и капризна. Но в те моменте когда его жене было не легко, Карлос любил ее чуть чуть сильнее»\n\n— by Desperate Housewives'
    }
];

export default function Aizere() {
    return (
        <div className="bg-[#fffcfc] text-gray-900 min-h-[100dvh] font-sans antialiased relative">

            {/* Top Accent - Feminine Gradient */}
            <div className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-rose-900 via-rose-400 to-rose-900 z-50" />


            {/* Hero */}
            <div className="relative min-h-screen flex flex-col justify-center items-start px-10 md:px-20 pt-24 pb-16 overflow-hidden">
                {/* Decorative Flower Background for Mobile */}
                <img
                    src="/aiz.png"
                    alt="Aizere"
                    className="absolute top-[7%] left-0 w-40 opacity-70 select-none pointer-events-none md:hidden"
                    loading="lazy"
                    decoding="async"
                />

                <div className="absolute top-[12%] md:top-[40%] right-0 text-[30vw] font-black text-rose-900 leading-none select-none pointer-events-none tracking-tighter pr-4">
                    A.
                </div>
                <div className="relative z-10 max-w-2xl">
                    <p className="text-[10px] font-black uppercase tracking-[0.6em] text-rose-400 mb-8">
                        О Aizere Nurlanqyzy
                    </p>
                    <h1 className="font-display text-7xl md:text-9xl font-bold italic tracking-tighter text-gray-900 leading-none mb-4">
                        Айзере.
                    </h1>
                    <div className="h-[2px] w-24 bg-rose-900/15 mt-8 mb-10 rounded-full" />
                    <p className="text-gray-400 font-medium text-sm leading-relaxed max-w-md">
                        Она — его муза, его вдохновение и самый близкий человек.
                    </p>
                </div>
            </div>

            {/* Bio Section */}
            <div className="max-w-3xl mx-auto px-10 md:px-20 pb-20 flex flex-col gap-10">
                <div className="h-[1px] bg-gray-200 mb-2" />
                {aizereBio.map((item, i) => (
                    <div key={i} className="flex flex-col md:flex-row gap-4 md:gap-10 items-start">
                        <div className="md:w-32 shrink-0">
                            {item.heading && (
                                <span className="text-[8px] font-black uppercase tracking-[0.4em] text-rose-400/60">
                                    {item.heading}
                                </span>
                            )}
                        </div>
                        <p className="text-gray-500 text-sm leading-loose flex-1 border-l-2 border-rose-900/10 pl-6">
                            {item.text}
                        </p>
                    </div>
                ))}

                {/* Qualities Section (Structural parity with Friends) */}
                <div className="h-[1px] bg-gray-200 mt-8 mb-2" />
                <p className="text-[10px] font-black uppercase tracking-[0.6em] text-rose-400 mb-2">
                    Её качества
                </p>

                {qualities.map((q, i) => (
                    <div key={i} className="flex flex-col md:flex-row gap-4 md:gap-10 items-start">
                        <div className="md:w-32 shrink-0 flex flex-col gap-1">
                            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-rose-900/80">{q.name}</span>
                            {q.detail && <span className="text-[8px] text-rose-300 font-medium">{q.detail}</span>}
                        </div>
                        <p className="text-gray-500 text-sm leading-loose flex-1 border-l-2 border-rose-900/10 pl-6">
                            {q.text}
                        </p>
                    </div>
                ))}

                {/* Keywords (Structural parity with Other Friends) */}
                <div className="flex flex-col md:flex-row gap-4 md:gap-10 items-start mt-2">
                    <div className="md:w-32 shrink-0">
                        <span className="text-[8px] font-black uppercase tracking-[0.4em] text-rose-400/60">Эссенция</span>
                    </div>
                    <div className="flex-1 border-l-2 border-rose-900/10 pl-6">
                        <div className="flex flex-wrap gap-3">
                            {keywords.map((word) => (
                                <span key={word} className="text-[10px] font-black uppercase tracking-[0.3em] px-4 py-2 rounded-full border border-rose-100 bg-white text-rose-300">
                                    {word}
                                </span>
                            ))}
                        </div>
                        <p className="text-gray-400 text-sm leading-loose mt-4">
                            Всё это и даже больше — в одном человеке.
                        </p>
                    </div>
                </div>

                {/* Essence Story (Structural parity with Liya) */}
                <div className="h-[1px] bg-gray-200 mt-8 mb-2" />
                <p className="text-[10px] font-black uppercase tracking-[0.6em] text-rose-400 mb-2">
                    Айзере
                </p>

                {essenceStory.map((item, i) => (
                    <div key={i} className="flex flex-col md:flex-row gap-4 md:gap-10 items-start">
                        <div className="md:w-32 shrink-0">
                            {item.heading && (
                                <span className="text-[8px] font-black uppercase tracking-[0.4em] text-rose-400/60">
                                    {item.heading}
                                </span>
                            )}
                        </div>
                        <p className="text-gray-500 text-sm leading-loose flex-1 border-l-2 border-rose-900/10 pl-6 whitespace-pre-wrap">
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
