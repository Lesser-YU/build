import React from "react";

import Practice from "../assets/img/progress/practice.png";
import Qualifyung from "../assets/img/progress/Qualifyung.png";
import Race from "../assets/img/progress/Race.png";
import Practice1 from "../assets/img/progress/practice1.png";
import Practice2 from "../assets/img/progress/practice2.png";
import Qualifyung1 from "../assets/img/progress/qualifying1.png";
import Qualifyung2 from "../assets/img/progress/qualifying2.png";
import Race1 from "../assets/img/progress/race1.png";
import Race2 from "../assets/img/progress/race2.png";


const Progress = () => {
    return(
        <div id="progress">
            <div className="progress-cover">
                <div className="prog-1">
                    <div className="prog-wrap">
                        <img src={Practice} alt=""/>
                        <img src={Qualifyung} alt=""/>
                        <img src={Race} alt=""/>
                    </div>
                </div>
                <div className="prog-2 prog-section">
                    <div className="prog-wrap">
                        <div className="prog-title">
                            <img src={Practice} alt=""/>
                        </div>
                        <div className="prog-cont">
                            <div className="prog-cont-left">
                                <img className="prog-cont-img1" src={Practice1} alt=""></img>
                                <img className="prog-cont-img2" src={Practice2} alt=""></img>
                            </div>
                            <div className="prog-cont-right">
                                <p>
                                    프랙티스는 금요일 2회,토요일 1회 총 3회 진행됩니다.
                                </p>
                                <br/>
                                <p>
                                    주로 레이스에서 사용할 타이어의 랩타임(롱런) 테스트와 퀄리파잉(숏런) 
                                    테스트를 하고, 새로운 에어로파츠 테스트를 하며, 
                                    서킷과 드라이버에 맞게 차량 세팅을 합니다.<br/>
                                    <br/>
                                    이 차량 세팅 값은 퀄리파잉부터 레이스 종료까지 절대 변경하지 못합니다. 
                                    프론트윙 각은 레이스 중간중간 조절 가능합니다.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="prog-3 prog-section">
                    <div className="prog-wrap">
                    <div className="prog-title">
                            <img src={Qualifyung} alt=""/>
                        </div>
                        <div className="prog-cont">
                            <div className="prog-cont-left">
                                <img className="prog-cont-img1" src={Qualifyung1} alt=""></img>
                                <img className="prog-cont-img2" src={Qualifyung2} alt=""></img>
                            </div>
                            <div className="prog-cont-right">
                                <p>
                                    예선주행은 토요일 오후에 진행됩니다.
                                </p>
                                <br/>
                                <p>
                                    엔트리되는 레이스카 모두 정해진 시간 동안 자유롭게 서킷을 돌아 가장 
                                    빠른 랩타임을 기록하면 그걸 기준으로 합니다.<br/>
                                    <br/>
                                    Q1에서 5명, Q2에서 5명을 탈락시키며, 탈락된 참가자는 그 세션의 
                                    기록 순서대로 그리드를 배정받게 됩니다. 남은 10대의 경주차들이 Q3를 
                                    치르게 되는데, 여기서 예선 1위인 폴 포지션과 탑 10의 출발 순서가 정해집니다.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="prog-4 prog-section">
                    <div className="prog-wrap">
                    <div className="prog-title">
                            <img src={Race} alt=""/>
                        </div>
                        <div className="prog-cont">
                            <div className="prog-cont-left">
                                <img className="prog-cont-img1" src={Race1} alt=""></img>
                                <img className="prog-cont-img2" src={Race2} alt=""></img>
                            </div>
                            <div className="prog-cont-right">
                                <p>
                                    본선 레이스는 일요일에 진행됩니다.
                                </p>
                                <br/>
                                <p>
                                    그리드에 1등부터 20등까지 나란히 도열한 다음 그리드 후방에서 녹색기가
                                    나오면 5개의 빨간 불이 차례로 켜지고 모두 꺼지는 즉시 동시에 출발합니다.<br/>
                                    <br/>
                                    레이스는 자유 경쟁이며 순위를 끌어올리기 위해서는 앞 레이스 카를 추월해야 
                                    합니다. 레이스 피니쉬 순서대로 상위 10명에게 포인트가 차등하게 주어집니다.<br/>
                                    <br/>
                                    포디움에서 우승한 드라이버의 국가와 팀의 국가가 연주된 후 트로피 증정과 
                                    샴페인 세리머니를 진행하는 것으로 공식 일정이 마무리됩니다.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Progress;