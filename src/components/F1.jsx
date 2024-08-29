import React from "react";

import documentary from "../assets/img/f1/drive.jpg";
import movie1 from "../assets/img/f1//rushmovie.png";
import movie2 from "../assets/img/f1/F1movie.png";
import game1 from "../assets/img/f1//f12024game.png";
import game2 from "../assets/img/f1/f1-manager-2024-15uhb.jpg";

const F1 = () => {
    return(
        <div id="f1">
            <div className="f1-1">
                <div className="f1-1-img">
                    <img src={documentary} alt=""/>
                </div>
                <div className="f1-1-text">
                    <h2>F1,본능의 질주</h2>
                    <h2>넷플릭스 다큐멘터리</h2>
                    <p>
                        넷플릭스 F1, 본능의 질주 다큐멘터리는 F1을 잘 모르는 사람이 보더라도 흥미롭게 볼 수 있는 작품입니다.
                        시즌1은 2018년을 배경으로 이루어져 있으며 매년 새로운 시즌이 나옵니다 현재(2024년) 시즌6까지 나왔습니다.
                    </p>
                    <p>
                        이 다큐멘터리는 우리가 흔히 알고 있는 상위권팀 페라리, 메르세데스, 레드불 뿐만 아니라 중위권, 하위권까지 모든팀의 이야기를 주로 다룹니다. 드라이버의 이야기 뿐만 아니라 감독과 팀의 정치적인 요소 까지 포함되어 더욱 몰입감을 줍니다.

                    </p>
                    <p>
                        다큐멘터리임에도 불구하고 전혀 지루하지 않으며 실제로 본능의 질주를 보고 포뮬러 1에 입문한 사람들이 적지 않습니다. 노후화되던 팬덤이 넷플릭스를 보는 젊은 층들이 유입되어 포뮬러 1 생태계 자체가 젊어진 데에 큰 기여를 했습니다.속도감이나 경쟁 등을 잘 나타내고 있어 스포츠나 레이싱 등의 장르를 즐기는 사람이라면 강력히 추천하는 다큐멘터리입니다.
                    </p>
                </div>
            </div>
            <div className="f1-2">
                <div className="f1-2-1 f1content">
                    <img src={movie1} alt=""/>
                    <h4>러쉬</h4>
                    <p>2013년에 개봉한 포뮬러 1 1976 시즌을 소재로 한 영화.</p>
                </div>
                <div className="f1-2-2 f1content">
                <img src={movie2} alt=""/>
                <h4>F1</h4>
                <p>포뮬러 1을 소재로 하는 조셉 코신스키 감독의 영화. 브래드 피트 주연.                    
                </p>
                <p>2025년 6월 개봉 예정</p>
                </div>
                <div className="f1-2-3 f1content">
                <img src={game1} alt=""/>
                <h4>F1 24</h4>
                <p>직접 드라이버가되어 레이싱하는 시뮬레이션 레이싱 게임
                </p>
                </div>
                <div className="f1-2-4 f1content">
                <img src={game2} alt=""/>
                <h4>F1 Manager 24</h4>
                <p>F1 레이싱팀을 운영하는 매니지먼트게임</p>
                </div>
            </div>
        </div>
    )
}

export default F1;