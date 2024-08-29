import React from "react";

import logo from "../assets/img/intro/F1-Logo.svg";

const Intro = () => {
    return(
        <section id="intro">
            <div className="intro-wrap">
                <div className="intro-title">
                    <h1 className="intro-logo">
                        <img src={logo} alt="f1로고"/>
                    </h1>
                    <div className="intro-title-text">
                        <p>FIA 포뮬러 1 월드 챔피언십</p>
                        <p>FIA Formula 1 World Championship</p>
                    </div>
                </div>
                <div className="intro-pic"></div>
                <div className="intro-txt">
                    포뮬러 1은 국제 자동차 연맹 FIA에서 주관하는 세계 최고의 서킷 모터 레이싱입니다.
                </div>
            </div>
        </section>

    )
}

export default Intro;