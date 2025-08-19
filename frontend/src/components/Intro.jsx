import React, { useEffect, useRef } from "react";
import "../styles/Intro.scss"
import gsap from "gsap";
const Intro = () => {
    const textRefs = useRef([], [], []);

    const paragraphRef = useRef(null);

    useEffect(() => {
        // 각 줄을 순차적으로 애니메이션
        const tl = gsap.timeline();
        textRefs.current.forEach((ref, index) => {
            tl.from(ref, {
                opacity: 0,
                y: 20,
                duration: 0.6,
                delay: index * 0.1, // 각 줄이 순차적으로 나타나도록 딜레이 설정
                ease: "power3.out",
            });
        });

        // 마지막에 <p> 요소 애니메이션 추가
        tl.from(paragraphRef.current, {
            opacity: 0,
            y: 20,
            duration: 0.6,
            ease: "power3.out",
        });
    }, []);

    const texts = [
        "Dive into",
        "the web",
        "universe"]

    return (
        <section className="Intro">
            <div className="in">

                <h1>
                    {texts.map((text, index) => (
                        <div
                            key={index}
                            ref={(el) => (textRefs.current[index] = el)} // 각 줄에 대한 ref 설정
                            style={{ display: "inline-block" }}
                        >
                            {text}
                        </div>
                    ))}
                </h1>
                <p ref={paragraphRef}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia blanditiis perferendis soluta laudantium iste voluptas consequatur! Rerum incidunt architecto deleniti nesciunt similique fugit? Dolorum eveniet, in optio molestiae iste ullam.</p>
            </div>
        </section>
    );
};

export default Intro;
