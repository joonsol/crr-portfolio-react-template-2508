// context/AboutMeContext.jsx
import React, { createContext, useContext } from "react";

// 전역 데이터 설정
const aboutMeData = {
    info: [
        "LEE JOON",          // 이름
        29,                  // 나이
        "INFJ",              // MBTI
        "United States",     // 출신 국가
        "Software Developer",// 직업
        "Reading",
        "섬세한",
        "열정적인", // 취미
        "이준",          // 이름
        "john.doe@example.com", // 이메일
        "진중한",          // 이름
        "친화력",                  // 나이
        "궁정적",              // MBTI
        "United States",     // 출신 국가
        "Software Developer",// 직업
        "Reading",
        "Hiking",
        "Photography", // 취미
        "john.doe@example.com", // 이메일
        "John Doe",          // 이름
        29,                  // 나이
        "INFJ",              // MBTI
        "United States",     // 출신 국가
        "Software Developer",// 직업
        "Reading",
        "Hiking",
        "Photography", // 취미
        "john.doe@example.com", // 이메일
        "John Doe",          // 이름
        29,                  // 나이
        "INFJ",              // MBTI
        "United States",     // 출신 국가
        "Software Developer",// 직업
        "Reading",
        "Hiking",
        "Photography", // 취미
        "john.doe@example.com", // 이메일
    ],
    bio: "I am a passionate front-end developer with a love for creating beautiful and functional user experiences I am a passionate front-end developer with a love for creating beautiful and functional user experiences.",

    skills: [
        "JavaScript",
        "React",
        "Node.js",
        "CSS",
        "HTML",
        "Figma",
        "Java",
        "Python",
        "Typescript",
        "JavaScript",
        "React",
        "Node.js",
        "CSS",
        "HTML",
        "Figma",
        "Java",
        "Python",
        "Typescript",
    ]
};

// Context 생성
export const AboutMeContext = createContext(aboutMeData); // 올바르게 내보내기

// 데이터를 전역으로 제공하는 Provider 컴포넌트
export const AboutMeProvider = ({ children }) => {
    return (
        <AboutMeContext.Provider value={aboutMeData}>
            {children}
        </AboutMeContext.Provider>
    );
};

// Context 데이터를 가져오는 커스텀 훅
export const useAboutMe = () => useContext(AboutMeContext);
