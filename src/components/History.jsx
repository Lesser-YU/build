import React from "react";

import history_main1 from "../assets/img/history/main1.png";
import history_main2 from "../assets/img/history/maintrophy.png";
import history_main3 from "../assets/img/history/main3.png";
import hisleft from "../assets/img/history/hisleft.png";
import hiscenter from "../assets/img/history/hiscenter.png";
import hisright from "../assets/img/history/hisright.png";



const History = () => {
    return(
        <section id="history">
            <div id="historywrap">
                <div className="history-1 his-section-wrap">
                    <img src={history_main1} alt="main1"/>
                    <img src={history_main2} alt="main2"/>
                    <img src={history_main3} alt="main3"/>
                </div>
                <div className="history-2 his-section-wrap">
                        <img className="his-cover" src={hisleft} alt=""></img>
                        <div className="his-img-wrap">
                            <div className="his-img"></div>
                        </div>
                        <h2 className="his-title">F1의 역사</h2>
                        <p className="his-text1 his-text">
                            F1은 그 기원이 19세기까지 거슬러 올라가는 통칭 '그랑프리 레이스'를 시작으로,직접적으로는 제2차 세계<br/>
                            대전 직전까지 열렸던 1920-30년대의 유러피안 그랑프리 모터 레이싱(Grand Prix Motor Racing)을<br/> 
                            계승하고 있습니다. 제2차 세계 대전 이후, 새로운 챔피언십 대회는 1950년에 시작되도록 제정되었습니다.
                        </p>
                        <p className="his-text2 his-text">
                            1970~1990년대에 스포츠가 세계적으로 뻗어나가기 전에는 흔히 '레이싱' 하면 생각나는, 남자의 로망을 자극하는<br/> 
                            상남자 스포츠였으나 F1의 세계화와 상업화 이후 그런 이미지는 없어지게 되었습니다.  리버티 미디어의 F1 인수<br/> 
                            이후에는 더욱 엔터테인먼트 쪽으로 크게 발전하여 F1 공식 유튜브 채널과 넷플릭스 시리즈를 통해 접근성이<br/> 
                            매우 향상되었습니다. 2017년 전체 팬의 8%만 여성이였지만 2022년에는 40%까지 비중이 늘었습니다.
                        </p>
                </div>
                <div className="history-3  his-section-wrap">
                    <img className="his-cover" src={hiscenter} alt=""></img>
                        <div className="his-img-wrap">
                            <div className="his-img"></div>
                        </div>
                        <h2 className="his-title">모터 스포츠의 정점</h2>
                        <p className="his-text1 his-text">
                            다른 최상위 클래스의 모터스포츠와 비교해 기술 역량이나 천문학적인<br/> 
                            투자 면에서 F1에 근접한 모터스포츠는 지구상 어디에도 존재하지<br/> 
                            않으며, 평균 성능만 비교해도 서킷이라는 환경 안에서 F1을<br/> 
                            이길 경주차는 그 어디에도 없다고 할 수 있습니다.
                        </p>
                        <p className="his-text2 his-text">
                            차를 직접 만들어서 경쟁한다는 프로토타입 모터스포츠 태동기 철학을<br/> 
                            그대로 유지하고 있는 경우는 F1이 거의 유일하며, 각 팀이 매 시즌 규정<br/>
                            변화에 따라 레이스 카를 직접 만들기는 물론 시즌 중에도 계속해서<br/> 
                            레이스 카에있는 거의 모든 부분을 개량하고 바꾸어 나가면서 경쟁하기를<br/> 
                            고집하고 있어서 모터스포츠 최고봉이라는 명칭에 걸맞다고 할 수 있습니다.
                        </p>
                </div>
                <div className="history-4  his-section-wrap">
                <img className="his-cover" src={hisright} alt=""></img>
                        <div className="his-img-wrap">
                            <div className="his-img"></div>
                        </div>
                        <h2 className="his-title">규모, 경제성</h2>
                        <p className="his-text1 his-text">
                            한국에서는 비인기 종목이지만, F1에서 성공하면 국가적 기념식 때 최고 지도자에게 초청받거나,<br/> 
                            기사 작위를 받거나, 올림픽 개막식 때 오륜기를 들고 나올 정도로 위상이 대단한 스포츠입니다.
                        </p>
                        <p className="his-text2 his-text">
                            그랑프리 하나에 평균 15~20만 명 정도의 관중이 모이며, 특정 드라이버 혹은 특정 팀이<br/> 
                            홈으로 두는 나라에서 그랑프리가 열리기라도 하면 최소 30만 명 정도는 운집합니다.
                        </p>
                        <p className="his-text3 his-text">
                            TV 중계의 규모도 대단한데, 평균 시청자 수는 전 세계적으로 6억 명 정도나 됩니다.<br/> 
                            때문에 프로 스포츠로써 경제적 규모는 천문학적인 수준이며, 팀의 연간 예산이나<br/> 
                            총 운영 비용 및 전체 스폰서십의 규모 또한 상상을 초월합니다.
                        </p>
                </div>
            </div>
        </section>
    )
}

export default History;