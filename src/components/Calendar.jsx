import React, { useState } from "react";
import schedule from "../data/circuit.json"
import info from "../data/circuitinfo.json"


const Calendar = () => {
        const [active1, setActive1] = useState(-1);
        const tap1 = (index) => {
        setActive1(index === active1 ? -1 : index);
    }

        const [active2, setActive2] = useState(-1);
        const tap2 = (index) => {
        setActive2(index === active2 ? -1 : index);
    }

        const [active3, setActive3] = useState(-1);
        const tap3 = (index) => {
        setActive3(index === active3 ? -1 : index);
    }


        const [active4, setActive4] = useState(-1);
        const tap4 = (index) => {
        setActive4(index === active4 ? -1 : index);
    }

        const [active5, setActive5] = useState(-1);
        const tap5 = (index) => {
        setActive5(index === active5 ? -1 : index);
    }

        const [active6, setActive6] = useState(-1);
        const tap6 = (index) => {
        setActive6(index === active6 ? -1 : index);
    }

        const [active7, setActive7] = useState(-1);
        const tap7 = (index) => {
        setActive7(index === active7 ? -1 : index);
    }


        const [active8, setActive8] = useState(-1);
        const tap8 = (index) => {
        setActive8(index === active8 ? -1 : index);
    }


    return(
        <div id="calendar">
            <div className="calendar-cover">
                <div className="calendar-title">
                    <h2>2024 F1 Schedule</h2>
                    <p>2024 FIA FORMULA ONE WORLD CHAMPIONSHIP™ RACE CALENDAR</p>
                </div>
                <div className="calendar-round">
                    {schedule.round1.map((round1, i) =>(
                        <div key={round1.id}
                            className={`round round${round1.id} ${
                                active1 === i ? "active" : ""}`} 
                            onClick={()=>tap1(i)}>
                            <div className="calendar-flag"></div>
                            <div className="calendar-bg"></div>
                            <p className="calendar-round">Round{round1.id}</p>
                            <h3>{round1.rocation}</h3>
                            <h4>{round1.circuit}</h4>
                            <p className="calendar-day">{round1.day}</p>
                        </div>
                    ))}
                    {info.info1.map((info1, i) =>(                       
                        <div className={`roundinfo info${info1.id} ${
                            i === active1 ? "active" : ""}`} key={info1.id}>
                            <fieldset>
                                <legend>
                                    <div className="circuit-name">
                                        <div className="calendar-flag"></div>
                                        <h5>{info1.name}</h5>
                                        </div>
                                </legend>
                                <div className="circuit-wrap">
                                    <div className="circuit"></div>
                                    <div className="circuit-info">
                                        <div className="circuit-info-1">
                                            <h6>First Grand Prix</h6>
                                            <p className="recordes">{info1.firstgp}</p>
                                        </div>
                                        <div className="circuit-info-1">
                                            <h6>Number of Laps</h6>
                                            <p className="recordes">{info1.laps}</p>
                                        </div>
                                        <div className="circuit-info-1">
                                            <h6>Circuit Length</h6>
                                            <p className="recordes">{info1.length}<span>km</span></p>
                                        </div>
                                        <div className="circuit-info-1">
                                            <h6>Race Distance</h6>
                                            <p className="recordes">{info1.Distance}<span>km</span></p>
                                        </div>
                                        <div className="circuit-info-2">
                                            <h6>Lap Record</h6>
                                            <p className="recordes">{info1.Record}<span>{info1.racer}</span></p>
                                        </div>
                                    </div>
                                </div>
                            </fieldset>
                        </div>
                    ))}
                    {schedule.round2.map((round2, i) =>(
                        <div key={round2.id}
                            className={`round round${round2.id} ${
                            i === active2 ? "active" : ""}`} 
                            onClick={()=>tap2(i)}>
                            <div className="calendar-flag"></div>
                            <div className="calendar-bg"></div>
                            <p className="calendar-round">Round{round2.id}</p>
                            <h3>{round2.rocation}</h3>
                            <h4>{round2.circuit}</h4>
                            <p className="calendar-day">{round2.day}</p>
                        </div>
                    ))}
                    {info.info2.map((info2, i) =>(                       
                        <div className={`roundinfo info${info2.id} ${
                            i === active2 ? "active" : ""}`} key={info2.id}>
                            <fieldset>
                                <legend>
                                    <div className="circuit-name">
                                        <div className="calendar-flag"></div>
                                        <h5>{info2.name}</h5>
                                        </div>
                                </legend>
                                <div className="circuit-wrap">
                                    <div className="circuit"></div>
                                    <div className="circuit-info">
                                        <div className="circuit-info-1">
                                            <h6>First Grand Prix</h6>
                                            <p className="recordes">{info2.firstgp}</p>
                                        </div>
                                        <div className="circuit-info-1">
                                            <h6>Number of Laps</h6>
                                            <p className="recordes">{info2.laps}</p>
                                        </div>
                                        <div className="circuit-info-1">
                                            <h6>Circuit Length</h6>
                                            <p className="recordes">{info2.length}<span>km</span></p>
                                        </div>
                                        <div className="circuit-info-1">
                                            <h6>Race Distance</h6>
                                            <p className="recordes">{info2.Distance}<span>km</span></p>
                                        </div>
                                        <div className="circuit-info-2">
                                            <h6>Lap Record</h6>
                                            <p className="recordes">{info2.Record}<span>{info2.racer}</span></p>
                                        </div>
                                    </div>
                                </div>
                            </fieldset>
                        </div>
                    ))}
                    {schedule.round3.map((round3, i) =>(
                        <div key={round3.id}
                            className={`round round${round3.id} ${
                            i === active3 ? "active" : ""}`} 
                            onClick={()=>tap3(i)}>
                            <div className="calendar-flag"></div>
                            <div className="calendar-bg"></div>
                            <p className="calendar-round">Round{round3.id}</p>
                            <h3>{round3.rocation}</h3>
                            <h4>{round3.circuit}</h4>
                            <p className="calendar-day">{round3.day}</p>
                        </div>
                    ))}
                    {info.info3.map((info3, i) =>(                       
                        <div className={`roundinfo info${info3.id} ${
                            i === active3 ? "active" : ""}`} key={info3.id}>
                            <fieldset>
                                <legend>
                                    <div className="circuit-name">
                                        <div className="calendar-flag"></div>
                                        <h5>{info3.name}</h5>
                                        </div>
                                </legend>
                                <div className="circuit-wrap">
                                    <div className="circuit"></div>
                                    <div className="circuit-info">
                                        <div className="circuit-info-1">
                                            <h6>First Grand Prix</h6>
                                            <p className="recordes">{info3.firstgp}</p>
                                        </div>
                                        <div className="circuit-info-1">
                                            <h6>Number of Laps</h6>
                                            <p className="recordes">{info3.laps}</p>
                                        </div>
                                        <div className="circuit-info-1">
                                            <h6>Circuit Length</h6>
                                            <p className="recordes">{info3.length}<span>km</span></p>
                                        </div>
                                        <div className="circuit-info-1">
                                            <h6>Race Distance</h6>
                                            <p className="recordes">{info3.Distance}<span>km</span></p>
                                        </div>
                                        <div className="circuit-info-2">
                                            <h6>Lap Record</h6>
                                            <p className="recordes">{info3.Record}<span>{info3.racer}</span></p>
                                        </div>
                                    </div>
                                </div>
                            </fieldset>
                        </div>
                    ))}
                    {schedule.round4.map((round4, i) =>(
                        <div key={round4.id}
                            className={`round round${round4.id} ${
                            i === active4 ? "active" : ""}`} 
                            onClick={()=>tap4(i)}>
                            <div className="calendar-flag"></div>
                            <div className="calendar-bg"></div>
                            <p className="calendar-round">Round{round4.id}</p>
                            <h3>{round4.rocation}</h3>
                            <h4>{round4.circuit}</h4>
                            <p className="calendar-day">{round4.day}</p>
                        </div>
                    ))}
                    {info.info4.map((info4, i) =>(                       
                        <div className={`roundinfo info${info4.id} ${
                            i === active4 ? "active" : ""}`} key={info4.id}>
                            <fieldset>
                                <legend>
                                    <div className="circuit-name">
                                        <div className="calendar-flag"></div>
                                        <h5>{info4.name}</h5>
                                        </div>
                                </legend>
                                <div className="circuit-wrap">
                                    <div className="circuit"></div>
                                    <div className="circuit-info">
                                        <div className="circuit-info-1">
                                            <h6>First Grand Prix</h6>
                                            <p className="recordes">{info4.firstgp}</p>
                                        </div>
                                        <div className="circuit-info-1">
                                            <h6>Number of Laps</h6>
                                            <p className="recordes">{info4.laps}</p>
                                        </div>
                                        <div className="circuit-info-1">
                                            <h6>Circuit Length</h6>
                                            <p className="recordes">{info4.length}<span>km</span></p>
                                        </div>
                                        <div className="circuit-info-1">
                                            <h6>Race Distance</h6>
                                            <p className="recordes">{info4.Distance}<span>km</span></p>
                                        </div>
                                        <div className="circuit-info-2">
                                            <h6>Lap Record</h6>
                                            <p className="recordes">{info4.Record}<span>{info4.racer}</span></p>
                                        </div>
                                    </div>
                                </div>
                            </fieldset>
                        </div>
                    ))}
                    {schedule.round5.map((round5, i) =>(
                        <div key={round5.id}
                            className={`round round${round5.id} ${
                                active5 === i ? "active" : ""}`} 
                            onClick={()=>tap5(i)}>
                            <div className="calendar-flag"></div>
                            <div className="calendar-bg"></div>
                            <p className="calendar-round">Round{round5.id}</p>
                            <h3>{round5.rocation}</h3>
                            <h4>{round5.circuit}</h4>
                            <p className="calendar-day">{round5.day}</p>
                        </div>
                    ))}
                    {info.info5.map((info5, i) =>(                       
                        <div className={`roundinfo info${info5.id} ${
                            i === active5 ? "active" : ""}`} key={info5.id}>
                            <fieldset>
                                <legend>
                                    <div className="circuit-name">
                                        <div className="calendar-flag"></div>
                                        <h5>{info5.name}</h5>
                                        </div>
                                </legend>
                                <div className="circuit-wrap">
                                    <div className="circuit"></div>
                                    <div className="circuit-info">
                                        <div className="circuit-info-1">
                                            <h6>First Grand Prix</h6>
                                            <p className="recordes">{info5.firstgp}</p>
                                        </div>
                                        <div className="circuit-info-1">
                                            <h6>Number of Laps</h6>
                                            <p className="recordes">{info5.laps}</p>
                                        </div>
                                        <div className="circuit-info-1">
                                            <h6>Circuit Length</h6>
                                            <p className="recordes">{info5.length}<span>km</span></p>
                                        </div>
                                        <div className="circuit-info-1">
                                            <h6>Race Distance</h6>
                                            <p className="recordes">{info5.Distance}<span>km</span></p>
                                        </div>
                                        <div className="circuit-info-2">
                                            <h6>Lap Record</h6>
                                            <p className="recordes">{info5.Record}<span>{info5.racer}</span></p>
                                        </div>
                                    </div>
                                </div>
                            </fieldset>
                        </div>
                    ))}
                    {schedule.round6.map((round6, i) =>(
                        <div key={round6.id}
                            className={`round round${round6.id} ${
                            i === active6 ? "active" : ""}`} 
                            onClick={()=>tap6(i)}>
                            <div className="calendar-flag"></div>
                            <div className="calendar-bg"></div>
                            <p className="calendar-round">Round{round6.id}</p>
                            <h3>{round6.rocation}</h3>
                            <h4>{round6.circuit}</h4>
                            <p className="calendar-day">{round6.day}</p>
                        </div>
                    ))}
                    {info.info6.map((info6, i) =>(                       
                        <div className={`roundinfo info${info6.id} ${
                            i === active6 ? "active" : ""}`} key={info6.id}>
                            <fieldset>
                                <legend>
                                    <div className="circuit-name">
                                        <div className="calendar-flag"></div>
                                        <h5>{info6.name}</h5>
                                        </div>
                                </legend>
                                <div className="circuit-wrap">
                                    <div className="circuit"></div>
                                    <div className="circuit-info">
                                        <div className="circuit-info-1">
                                            <h6>First Grand Prix</h6>
                                            <p className="recordes">{info6.firstgp}</p>
                                        </div>
                                        <div className="circuit-info-1">
                                            <h6>Number of Laps</h6>
                                            <p className="recordes">{info6.laps}</p>
                                        </div>
                                        <div className="circuit-info-1">
                                            <h6>Circuit Length</h6>
                                            <p className="recordes">{info6.length}<span>km</span></p>
                                        </div>
                                        <div className="circuit-info-1">
                                            <h6>Race Distance</h6>
                                            <p className="recordes">{info6.Distance}<span>km</span></p>
                                        </div>
                                        <div className="circuit-info-2">
                                            <h6>Lap Record</h6>
                                            <p className="recordes">{info6.Record}<span>{info6.racer}</span></p>
                                        </div>
                                    </div>
                                </div>
                            </fieldset>
                        </div>
                    ))}
                    {schedule.round7.map((round7, i) =>(
                        <div key={round7.id}
                            className={`round round${round7.id} ${
                            i === active3 ? "active" : ""}`} 
                            onClick={()=>tap7(i)}>
                            <div className="calendar-flag"></div>
                            <div className="calendar-bg"></div>
                            <p className="calendar-round">Round{round7.id}</p>
                            <h3>{round7.rocation}</h3>
                            <h4>{round7.circuit}</h4>
                            <p className="calendar-day">{round7.day}</p>
                        </div>
                    ))}
                    {info.info7.map((info7, i) =>(                       
                        <div className={`roundinfo info${info7.id} ${
                            i === active7 ? "active" : ""}`} key={info7.id}>
                            <fieldset>
                                <legend>
                                    <div className="circuit-name">
                                        <div className="calendar-flag"></div>
                                        <h5>{info7.name}</h5>
                                        </div>
                                </legend>
                                <div className="circuit-wrap">
                                    <div className="circuit"></div>
                                    <div className="circuit-info">
                                        <div className="circuit-info-1">
                                            <h6>First Grand Prix</h6>
                                            <p className="recordes">{info7.firstgp}</p>
                                        </div>
                                        <div className="circuit-info-1">
                                            <h6>Number of Laps</h6>
                                            <p className="recordes">{info7.laps}</p>
                                        </div>
                                        <div className="circuit-info-1">
                                            <h6>Circuit Length</h6>
                                            <p className="recordes">{info7.length}<span>km</span></p>
                                        </div>
                                        <div className="circuit-info-1">
                                            <h6>Race Distance</h6>
                                            <p className="recordes">{info7.Distance}<span>km</span></p>
                                        </div>
                                        <div className="circuit-info-2">
                                            <h6>Lap Record</h6>
                                            <p className="recordes">{info7.Record}<span>{info7.racer}</span></p>
                                        </div>
                                    </div>
                                </div>
                            </fieldset>
                        </div>
                    ))}
                    {schedule.round8.map((round8, i) =>(
                        <div key={round8.id}
                            className={`round round${round8.id} ${
                            i === active8 ? "active" : ""}`} 
                            onClick={()=>tap8(i)}>
                            <div className="calendar-flag"></div>
                            <div className="calendar-bg"></div>
                            <p className="calendar-round">Round{round8.id}</p>
                            <h3>{round8.rocation}</h3>
                            <h4>{round8.circuit}</h4>
                            <p className="calendar-day">{round8.day}</p>
                        </div>
                    ))}
                    {info.info8.map((info8, i) =>(                       
                        <div className={`roundinfo info${info8.id} ${
                            i === active8 ? "active" : ""}`} key={info8.id}>
                            <fieldset>
                                <legend>
                                    <div className="circuit-name">
                                        <div className="calendar-flag"></div>
                                        <h5>{info8.name}</h5>
                                        </div>
                                </legend>
                                <div className="circuit-wrap">
                                    <div className="circuit"></div>
                                    <div className="circuit-info">
                                        <div className="circuit-info-1">
                                            <h6>First Grand Prix</h6>
                                            <p className="recordes">{info8.firstgp}</p>
                                        </div>
                                        <div className="circuit-info-1">
                                            <h6>Number of Laps</h6>
                                            <p className="recordes">{info8.laps}</p>
                                        </div>
                                        <div className="circuit-info-1">
                                            <h6>Circuit Length</h6>
                                            <p className="recordes">{info8.length}<span>km</span></p>
                                        </div>
                                        <div className="circuit-info-1">
                                            <h6>Race Distance</h6>
                                            <p className="recordes">{info8.Distance}<span>km</span></p>
                                        </div>
                                        <div className="circuit-info-2">
                                            <h6>Lap Record</h6>
                                            <p className="recordes">{info8.Record}<span>{info8.racer}</span></p>
                                        </div>
                                    </div>
                                </div>
                            </fieldset>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Calendar;