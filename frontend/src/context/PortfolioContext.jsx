// context/PortfolioContext.js
import React, { createContext, useContext } from "react";

// Unsplash IT 관련 랜덤 이미지 URL을 추가한 포트폴리오 데이터
const portfolioData = [
  {
    title: "Enterprise Blockchain",
    desc: "GSAP과 ScrollTrigger 플러그인을 사용해 인터랙션을 구현하는데 포커스를 두고 클론코딩한 사이트입니다.",
    hashtags: ["#PC", "#세미반응형", "#시멘틱 웹", "#GSAP", "#ScrollTrigger"],
    image: "/p0.jpg",
  },
  {
    title: "E-commerce Platform",
    desc: "고객의 쇼핑 경험을 개선하는 기능을 갖춘 반응형 E-commerce 플랫폼입니다.",
    hashtags: ["#모바일", "#반응형", "#UI/UX", "#React", "#Node.js"],
    image: "/p1.jpg",
  },
  {
    title: "Portfolio Website",
    desc: "프론트엔드 개발자로서의 기술과 경험을 보여주기 위한 개인 포트폴리오 웹사이트입니다.",
    hashtags: ["#React", "#CSS", "#JavaScript", "#Responsive Design"],
    image: "/p2.jpg",
  },
  {
    title: "Social Media Dashboard",
    desc: "소셜 미디어 데이터를 시각화하여 사용자 경험을 높이기 위한 대시보드 인터페이스입니다.",
    hashtags: ["#API 통합", "#Vue.js", "#Charts", "#Data Visualization"],
    image: "/p3.jpg",
  },
  {
    title: "Weather App",
    desc: "날씨 API를 연동하여 실시간으로 날씨 정보를 제공하는 반응형 애플리케이션입니다.",
    hashtags: ["#React", "#API 연동", "#CSS", "#Responsive"],
    image: "/p4.jpg",
  },
  {
    title: "Task Management Tool",
    desc: "작업을 관리하고 팀 협업을 촉진하기 위해 디자인된 간단한 작업 관리 툴입니다.",
    hashtags: ["#React", "#Node.js", "#Express", "#MongoDB", "#Fullstack"],
    image: "/p1.jpg",
  },
];

const PortfolioContext = createContext(portfolioData);

export const PortfolioProvider = ({ children }) => {
  return (
    <PortfolioContext.Provider value={portfolioData}>
      {children}
    </PortfolioContext.Provider>
  );
};

export const usePortfolio = () => useContext(PortfolioContext);
