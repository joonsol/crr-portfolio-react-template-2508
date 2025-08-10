import { useContext, useEffect, useRef } from "react"
import { AboutMeContext } from "../context/AboutMeContext"
import { animateSection } from "../animations/scrollAnimations"
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { motion } from "framer-motion"
import "../styles/Aboutme.scss"

const Aboutme = () => {
  const { info, bio,  skills } = useContext(AboutMeContext)

  console.log(info);

  const titleRef = useRef(null);
  // const marqueeRef = useRef(null);
  const hashWrapRef1 = useRef(null);
  const hashWrapRef2 = useRef(null);

  useEffect(() => {
    // 타임라인 설정
    const marqueeTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".Aboutme",
        start: "top 80%",
        end: "bottom top",
        scrub: true,
      },
    });

    // 타임라인에 애니메이션 추가
    marqueeTimeline
      .fromTo(
        hashWrapRef1.current,
        { xPercent: -90 },
        { xPercent: 0 }
      )
      // .fromTo(
      //   marqueeRef.current,
      //   { xPercent: 10 },
      //   { xPercent: 0 }
      // )
      .fromTo(
        hashWrapRef2.current,
        { xPercent: -70 },
        { xPercent: 0 }
      );
  }, []);
  const title = "About me"

  return (
    <section className="Aboutme">
      <div className="in">

        <h1>
          {title}

        </h1>
      <div className="in_wrap">

        <div className="hash_wrap" ref={hashWrapRef1}>
          <div>
            {info.map((item, index) => (
              <span className="info-hash" key={index}>#{item}</span>
            ))}
          </div>
        </div>
        <div className="marquee" >
          <p className="marquee-text outline">{bio}</p>
        </div>
        <div className="hash_wrap" ref={hashWrapRef2}>
          <div>
            {skills.map((item, index) => (
              <span className="info-hash" key={index}>#{item}</span>
            ))}
          </div>
        </div>
      </div>

      </div>

    </section>
  )
}
export default Aboutme
