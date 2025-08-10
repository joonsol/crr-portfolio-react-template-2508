// animations/scrollAnimations.js
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const animateSection = (textElements, paragraphElement) => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: textElements[0], // 첫 번째 글자를 기준으로 스크롤 트리거를 설정
        start: "top 80%",
        toggleActions: "play none none none",
        onEnter: () => tl.restart(true),     // 처음 뷰포트에 들어올 때 애니메이션 재시작
        onEnterBack: () => tl.restart(true), // 돌아올 때 애니메이션 재시작
        onLeave: () => tl.pause(0),          // 뷰포트를 떠나면 애니메이션 초기화
      },
    });

    // 첫 번째 애니메이션: 각 글자를 순서대로 위로 올라오도록 설정
    tl.from(textElements, {
      y: 50,
      opacity: 0,
      duration: 1,
      stagger: 0.1,
      ease: "power3.out",
    });

    // 두 번째 애니메이션: <p> 태그가 나타나도록 설정
    tl.from(paragraphElement, {
      y: 20,
      opacity: 0,
      duration: 1.5,
      ease: "power2.out",
    });
  };