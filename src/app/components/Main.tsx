"use client"
import React, {useEffect, useState} from 'react';
import {Box, Stack} from "@mui/system";
import Slider, {Settings} from "react-slick";
import {Button} from "@mui/material";

const Left = (props: any) => {
        const { onClick } = props;
  return <div className="custom-arrow prev" onClick={onClick}>
          <svg xmlns="http://www.w3.org/2000/svg" width="42" height="41" viewBox="0 0 42 41" fill="none"><circle cx="18.096" cy="18.096" r="19.096" transform="matrix(-1 8.74228e-08 8.74228e-08 1 39.1398 2.00006)" fill="#005EFF" stroke="white" stroke-width="2"></circle><path d="M19.1533 12.5307L11.4451 20.239L19.1533 27.9472" stroke="white" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path><path d="M33.0328 20.2387L11.6605 20.2387" stroke="white" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path></svg>
  </div>
}

const Right = (props: any) => {
        const { onClick } = props;
        return <div className="custom-arrow next" onClick={onClick}>
                <svg xmlns="http://www.w3.org/2000/svg" width="41" height="41" viewBox="0 0 41 41" fill="none"><circle cx="18.096" cy="18.096" r="19.096" transform="matrix(1 0 0 -1 2.64929 38.192)" fill="#005EFF" stroke="white" stroke-width="2"></circle><path d="M24.3242 27.9467L32.0324 20.2385L24.3242 12.5302" stroke="white" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path><path d="M10.4446 20.2387H31.8169" stroke="white" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path></svg>
        </div>
}

const ImageSlider = () => {
        const settings: Settings = {
                prevArrow: <Left />,
                nextArrow: <Right />,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 1,
                dots: true,
        };

        return (
            <div style={{ margin: "auto", padding: "10px 0 60px 0" }}>
                    <Slider {...settings}>
                            <div>
                                    <img alt="Token" loading="eager" width="296" height="296" decoding="async"
                                         data-nimg="1" sizes="100vw"
                                         src="portfolio-img-cropped-1.jpeg"
                                         style={{color: "transparent", borderRadius: "8px", width: "100%", height: "auto"}}/>
                            </div>
                            <div>
                                    <img alt="Token" loading="eager" width="296" height="296" decoding="async"
                                         data-nimg="1" sizes="100vw"
                                         src="portfolio-img-cropped-2.jpeg"
                                         style={{color: "transparent", borderRadius: "8px", width: "100%", height: "auto"}}/>
                            </div>
                            <div>
                                    <img alt="Token" loading="eager" width="296" height="296" decoding="async"
                                         data-nimg="1" sizes="100vw"
                                         src="portfolio-img-cropped-3.jpeg"
                                         style={{color: "transparent", borderRadius: "8px", width: "100%", height: "auto"}}/>
                            </div>
                            <div>
                                    <img alt="Token" loading="eager" width="296" height="296" decoding="async"
                                         data-nimg="1" sizes="100vw"
                                         src="portfolio-img-cropped-4.jpeg"
                                         style={{color: "transparent", borderRadius: "8px", width: "100%", height: "auto"}}/>
                            </div>
                            <div>
                                    <img alt="Token" loading="eager" width="296" height="296" decoding="async"
                                         data-nimg="1" sizes="100vw"
                                         src="portfolio-img-cropped-5.jpeg"
                                         style={{color: "transparent", borderRadius: "8px", width: "100%", height: "auto"}}/>
                            </div>
                            <div>
                                    <img alt="Token" loading="eager" width="296" height="296" decoding="async"
                                         data-nimg="1" sizes="100vw"
                                         src="portfolio-img-cropped-6.png"
                                         style={{color: "transparent", borderRadius: "8px", width: "100%", height: "auto"}}/>
                            </div>
                    </Slider>
            </div>
        );
};

const MarketButton = () => {
        return <button className={"maxmarket-button"} onClick={() => window.open("https://t.me/+lDDavhxzQUk1OWM0", "_blank")}><strong>Max’s Market</strong></button>
}

const FollowButton = ({isRu}: {isRu?: boolean}) => {
        return <Button sx={{
                backgroundColor: "#4A90E2",
        }} variant={"contained"} onClick={() => window.open("https://t.me/+lDDavhxzQUk1OWM0", "_blank")}>
                {isRu ? 'Перейти' : 'Follow'}
        </Button>
}

const Main = () => {

        const [width, setWidth] = useState(0);

        const [language , setLanguage] = useState<string>();

        useEffect(() => {
                setWidth(window.innerWidth)
                const handleResize = () => setWidth(window.innerWidth);

                setLanguage(navigator.language)

                window.addEventListener("resize", handleResize);
                return () => window.removeEventListener("resize", handleResize);
        }, []);

        const isRu = false

    return (
        <>
            <p>
                    <img className={"mobilehide alignnone wp-image-303357 size-full"} src={"top.png"} style={{width: "100%", marginTop: "20px", objectFit: "contain"}}/>
            </p>

            <p><img alt="mobileshow alignnone wp-image-303446 size-full" loading="lazy" width="328" height="328"
                    decoding="async" data-nimg="1" className="mobileshow alignnone wp-image-303446 size-full"
                    sizes="(max-width: 800px) 100vw, 800px"
                    src="image-16.png"
                    style={{color: 'transparent', width: '100%', height: 'auto'}}/>
            </p>

            <blockquote>
                    {isRu ? "Эта история шокирует! Читай до конца, чтобы узнать мой секрет, как избежать крипто-скамов 👀" : "This story is shocking! Read until the end to find out my secret to avoiding crypto scams 👀"}
            </blockquote>

                {isRu ? "Ты знаешь этого" : "Do you know this"}
            <strong> {isRu ? "злодея" : "villain"} </strong>
                {isRu ? "" : "of a man?"}

            <p></p>

            <p>{isRu ? "Познакомься c" : "Meet"} <strong>{isRu ? "Сахилом," : "Sahil"}</strong> {isRu ? "" : "the"} <strong>{isRu ? "серийным мошенником": "serial scammer"}.</strong></p>

            <p>{isRu ? "Этот таинственный персонаж" : "This mysterious figure has"} <strong>{isRu ? "заработал миллионы" : "scammed MILLIONS"}</strong> {isRu ? "на криптовалюте" : "in crypto"}.</p>

            <p>{isRu ? "Ну так…" : "So…"}</p>

            <p>{isRu ? "Как он это делает?" : "How does he do it?"}</p>

            <p>
                <img src={"Tweet.png"} className={"mobilehide alignnone wp-image-303358 size-full"}/>
            </p>

            <p>
                <img src={"TweetMobile.png"} alt="" className={"mobileshow alignnone wp-image-303365 size-full"}/>
            </p>

            <p>{isRu ? "Ты, наверное, видел, как твой любимый знаменитый запускал мемкоин…" : "You’ve probably seen your favorite celebrity launch a memecoin…"}</p>

                {isRu ? <p>А затем график резко <strong>обрушивался</strong> вниз.</p> : <p>And then the chart <strong>crashes</strong> immediately after.</p>}

                {isRu ? <p>Так вот, возможно, <strong>этот человек</strong> стоит за всем этим.</p> : <p>Well, this may be the <strong>man</strong> behind it all.</p>}

            <p>{isRu ? "Сахил создавал токены для Caitlyn Jenner, Rich the Kid, Jason Derulo и многих других." : "Sahil has created coins for Caitlyn Jenner, Rich the Kid, Jason Derulo, and many more."}</p>

                {isRu ? <p>После запуска он <strong>сливает все свои токены</strong>, зарабатывая миллионы долларов.</p> : <p>After launching the token, he <strong>dumps all of his holdings,</strong> making millions of dollars.
                </p>}

            <div className="flexed"></div>

                {isRu ? "Но Сахил – не единственный мошенник в крипте." : "But Sahil isn’t the only scammer in crypto."}

            <p></p>

                {isRu ? <p>К сожалению, в криптопространстве полно <strong>скамов</strong> и <strong>нечестных игроков</strong>.</p> : <p>Unfortunately, the crypto space is full of <strong>scams</strong> and <strong>bad actors.</strong></p>}

                {isRu ? <p>Однако есть и <strong>отличные возможности</strong>, если знаешь, где искать.</p> : <p>However, there are also some <strong>amazing opportunities</strong> if you know where to look.</p>}

                {isRu ?<p>Вот почему я использую канал команды - <MarketButton /> </p> : <p>That’s why I follow <MarketButton />.</p>}

                {isRu ? <p>Он помогают мне инвестировать <strong>безопасно</strong>, бесплатно и находить <strong>перспективные криптопроекты</strong> с реальным потенциалом.</p> : <p>They help me invest <strong>safely, for free</strong>  and find <strong>high-potential crypto projects</strong> with
                        real opportunities.</p>}

                {isRu ? <p>Каждая их рекомендация подкреплена <strong>исследованиями и данными</strong>.</p> :  <p>Every recommendation they share is backed by <strong>research and data.</strong></p>}

                {isRu ? <p>Например, 14 декабря 2023 года они назвали <strong>WIF</strong> по цене <strong>$0,004</strong>.</p> :  <p>For example, on December 14, 2023 they called <strong>WIF</strong> at <strong>$0.004</strong></p>}

                {isRu ? <p>Что было дальше? <strong>Рост на 120 650%</strong> до своего ATH.</p> : <p>FWhat happened next? It skyrocketed by <strong>120,650%</strong> to its all-time high.</p>}

                {isRu ? <p>Я заработал <strong>тысячи</strong> долларов благодаря им.</p> : <p>I made <strong>thousands of dollars</strong> thanks to them.</p>}

                {isRu ? <p><strong>Подпишавшись на их канал - мне это окупилась многократно.</strong></p> : <p><strong>Joining their channel has paid for itself multiple times over.</strong></p>}

                {isRu ? null : <p>Plus, you can try it completely for <strong>free for 7 days!</strong></p>}

                {isRu ? <p><strong>Это не просто обычный канал с криптоисследованиями.</strong></p> : <p><strong>This is NOT just another crypto research channel.</strong></p>}

                {isRu ? <p>Ты знал, что ежегодно на <strong>крипто-скамах теряются миллиарды?</strong></p> : <p>Did you know <strong>BILLIONS are lost to crypto scams</strong> every year?</p>}

                {isRu ? <p>Представь, что ты новичок.</p> : <p>Imagine you are a new investor.</p>}

                {isRu ? <p>Одна ошибка – и все твои вложения исчезли.</p> : <p>One mistake – and all your funds are gone.</p>}

            <p><img alt="mobileshow alignnone wp-image-301874 size-full" loading="lazy" width="337" height="337"
                    decoding="async" data-nimg="1" className="mobileshow alignnone wp-image-301874 size-full"
                    sizes="(max-width: 800px) 100vw, 800px"
                    src="image-1.png"
                    style={{color: "transparent", width: "100%", height: "auto"}}/>
                <img
                    alt="mobilehide alignnone wp-image-301875 size-full" loading="lazy" width="811" height="424"
                    decoding="async" data-nimg="1" className="mobilehide alignnone wp-image-301875 size-full"
                    sizes="(max-width: 800px) 100vw, 800px"
                    src="image-1-1.png"
                    style={{color: "transparent", width: "100%", height: "auto"}}/></p>

                {isRu ? <p>📌 Важно <strong>учиться у профессионалов</strong>, прежде чем инвестировать в крипту.</p> : <p>📌 It is crucial to <strong>learn from professionals</strong> before investing in crypto.</p>}

                {isRu ? <p>Ты готов защитить себя и учиться у лучших?</p> : <p>Are you ready to protect yourself and learn from the best?</p>}

                {isRu ? <p>Экспертная команда <MarketButton /> раскрывает все <strong>секреты</strong>.</p> : <p>The expert team at <MarketButton /> reveals all the <strong>secrets</strong>.</p>}

                {isRu ? <p>🔹 Присоединяйся к каналу <MarketButton />. и просто следи за новостями</p> : <p>🔹 Join <MarketButton /> and just follow the news.</p>}

            <p><img alt="mobilehide alignnone wp-image-303359 size-full" loading="lazy" width="811" height="424"
                    decoding="async" data-nimg="1" className="mobilehide alignnone wp-image-303359 size-full"
                    sizes="(max-width: 800px) 100vw, 800px"
                    src="image-6.png"
                    style={{color: "transparent", width: "100%", height: "auto"}}/></p>

                <Box display={"flex"} justifyContent={"center"}>
                        <FollowButton isRu={isRu} />
                </Box>

                {isRu ? <p>🔹 Торгуй как профи, зарабатывай тысячи, а может и <strong>миллионы</strong>.</p> : <p>🔹 Trade like a pro, earn thousands, maybe even <strong>millions</strong>.</p>}

                {isRu ? <p>Это реально:</p> : <p>This is real:</p>}

                {isRu ? <p>— Истории успеха в <MarketButton /> встречаются постоянно.</p> : <p>— Success stories from <MarketButton /> members happen all the time.</p>}

                {isRu ? <p>— Их прогнозы - аналитика, новостные сводки обгоняют рынок на 1250% в этом году.</p> : <p>— Their forecasts, analytics, and news insights have outperformed the market by 1250% this year.</p>}

                {isRu ? <p>Если бы ты вложил $100 в Dog Wif Hat, когда они его порекомендовали, у тебя было бы $48 067.</p> : <p>If you had invested $100 in Dog Wif Hat when they called it, you would have made $48,067.</p>}

                {isRu ? <p>Доверься мне, это лучшие из лучших.</p> : <p>Trust me, these guys are the best of the best.</p>}

            <p></p>

                {width >= 1010 ? <Stack spacing={2} direction="row" my={3}>
                        <Stack spacing={2}>
                                <img alt="Portfolio Image 1" loading="lazy" width="390" height="220" decoding="async" data-nimg="1"
                                     src="portfolio-img-1.jpeg"
                                     style={{color: "transparent", borderRadius: "8px"}}/>
                                <img alt="Portfolio Image 2" loading="lazy" width="390" height="220" decoding="async" data-nimg="1"
                                     src="portfolio-img-2.jpeg"
                                     style={{color: "transparent", borderRadius: "8px"}}/>
                                <img alt="Portfolio Image 3" loading="lazy" width="390" height="220" decoding="async" data-nimg="1"
                                     src="portfolio-img-3.jpeg"
                                     style={{color: "transparent", borderRadius: "8px"}}/>
                        </Stack>
                        <Stack spacing={2}>
                                <img alt="Portfolio Image 4" loading="lazy" width="390" height="220" decoding="async" data-nimg="1"
                                     src="portfolio-img-4.jpeg"
                                     style={{color: "transparent", borderRadius: "8px"}}/>
                                <img alt="Portfolio Image 5" loading="lazy" width="390" height="220" decoding="async" data-nimg="1"
                                     src="portfolio-img-5.jpeg"
                                     style={{color: "transparent", borderRadius: "8px"}}/>
                                <img alt="Portfolio Image 6" loading="lazy" width="390" height="220" decoding="async" data-nimg="1"
                                     src="portfolio-img-6.jpeg"
                                     style={{color: "transparent", borderRadius: "8px"}}/>
                        </Stack>
                </Stack> :  <ImageSlider />}

                {isRu ? <p>💡 Сообщество <MarketButton />:</p> :  <blockquote><strong>💡<MarketButton /> Community</strong></blockquote>}

                {isRu ? <p>✅ Портфели участников 🚀🚀🚀</p> : <p> ✅ Member portfolios 🚀🚀🚀 </p>}
                {isRu ? <p>✅ Живые ивенты и встречи с экспертами</p> : <p>  ✅ Live events and expert meet-ups </p>}
                {isRu ? <p>✅ Все бесплатно</p> : <p>  ✅ Everything is 100% free </p>}

                {isRu ? <p>Так почему бы не попробовать <MarketButton />?</p> : <p>So why not give <MarketButton /> a try?</p>}

            <p><img alt="mobilehide alignnone wp-image-303360 size-full" loading="lazy" width="811" height="424"
                    decoding="async" data-nimg="1" className="mobilehide alignnone wp-image-303360 size-full"
                    sizes="(max-width: 800px) 100vw, 800px"
                    src="image-7.png"
                    style={{color: "transparent", width: "100%", height: "auto"}}/></p>

            <p><img alt="mobileshow alignnone wp-image-303547 size-full" loading="lazy" width="1080" height="1080"
                    decoding="async" data-nimg="1" className="mobileshow alignnone wp-image-303547 size-full"
                    sizes="(max-width: 800px) 100vw, 800px"
                    src="SP1009_square_7.jpg"
                    style={{color: "transparent", width: "100%", height: "auto"}}/></p>

            {/*<p><img alt="mobilehide alignnone wp-image-303361 size-full" loading="lazy" width="811" height="424"*/}
            {/*        decoding="async" data-nimg="1" className="mobilehide alignnone wp-image-303361 size-full"*/}
            {/*        sizes="(max-width: 800px) 100vw, 800px"*/}
            {/*        src="image-8.png"*/}
            {/*        style={{color: "transparent", width: "100%", height: "auto"}}/></p>*/}

            {/*<p><img alt="mobileshow alignnone wp-image-303368 size-full" loading="lazy" width="337" height="337"*/}
            {/*        decoding="async" data-nimg="1" className="mobileshow alignnone wp-image-303368 size-full"*/}
            {/*        sizes="(max-width: 800px) 100vw, 800px"*/}
            {/*        src="image-13.png"*/}
            {/*        style={{color: "transparent", width: "100%", height: "auto"}}/>*/}
            {/*</p>*/}

            {/*<p><img alt="mobilehide alignnone wp-image-303362 size-full" loading="lazy" width="811" height="424"*/}
            {/*        decoding="async" data-nimg="1" className="mobilehide alignnone wp-image-303362 size-full"*/}
            {/*        sizes="(max-width: 800px) 100vw, 800px"*/}
            {/*        src="image-9.png"*/}
            {/*        style={{color: "transparent", width: "100%", height: "auto"}}/></p>*/}

            {/*<p><img alt="mobileshow alignnone wp-image-303548 size-full" loading="lazy" width="1080" height="1080"*/}
            {/*        decoding="async" data-nimg="1" className="mobileshow alignnone wp-image-303548 size-full"*/}
            {/*        sizes="(max-width: 800px) 100vw, 800px"*/}
            {/*        src="SP1009_square_5.jpg"*/}
            {/*        style={{color: "transparent", width: "100%", height: "auto"}}/></p>*/}

            {/*<p><img alt="mobilehide alignnone wp-image-303363 size-full" loading="lazy" width="812" height="334"*/}
            {/*        decoding="async" data-nimg="1" className="mobilehide alignnone wp-image-303363 size-full"*/}
            {/*        sizes="(max-width: 800px) 100vw, 800px"*/}
            {/*        src="Group-20381-1-1.png"*/}
            {/*        style={{color: "transparent", width: "100%", height: "auto"}}/></p>*/}

            {/*<p><img alt="mobileshow alignnone wp-image-303370 size-full" loading="lazy" width="337" height="609"*/}
            {/*        decoding="async" data-nimg="1" className="mobileshow alignnone wp-image-303370 size-full"*/}
            {/*        sizes="(max-width: 800px) 100vw, 800px"*/}
            {/*        src="Group-20642.png"*/}
            {/*        style={{color: "transparent", width: "100%", height: "auto"}}/></p>*/}

                {isRu ? <p>Одна ошибка может стоить тебе тысячи.</p> : <p>One mistake can cost you thousands.</p>}

                {isRu ? <p>💰 Я начал с $2000 – посмотри на мой портфель после присоединения в канал <MarketButton />.</p> : <p>💰 I started with $2,000 – take a look at my portfolio after joining <MarketButton /></p>}

            <p><img alt="mobilehide alignnone wp-image-303364 size-full" loading="lazy" width="811" height="424"
                    decoding="async" data-nimg="1" className="mobilehide alignnone wp-image-303364 size-full"
                    sizes="(max-width: 800px) 100vw, 800px"
                    src="image-10.png"
                    style={{color: "transparent", width: "100%", height: "auto"}}/></p>

            <p><img alt="mobileshow alignnone wp-image-303638 size-full" loading="lazy" width="1080" height="1080"
                    decoding="async" data-nimg="1" className="mobileshow alignnone wp-image-303638 size-full"
                    sizes="(max-width: 800px) 100vw, 800px"
                    src="Listicle1016_1.jpg"
                    style={{color: "transparent", width: "100%", height: "auto"}}/></p>

                <p></p>

                {isRu ? <p>🔹 Присоединяйся к сообществу <MarketButton />.</p> : <p>🔹 Join the <MarketButton /> community.</p>}
                {isRu ? <p>🔹 Ты ничего не теряешь</p> : <p>🔹 You have nothing to lose..</p>}

                {isRu ? <p>⚡️ <strong>Не рискуй потерять тысячи</strong> на следующей сделке.</p> : <p>⚡️ <strong>Don’t risk losing thousands</strong> on your next trade.</p>}

                <Box display={"flex"} justifyContent={"center"}>
                        <FollowButton isRu={isRu} />
                </Box>

                {/*{isRu ? <p><strong>Что ты ждёшь? Нажми ниже, чтобы зарегистрироваться прямо сейчас!</strong></p> : <p><strong>What are you waiting for? Tap below to sign up now!</strong></p>}*/}
        </>
    );
};

export default Main;
