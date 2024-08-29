import React, { useState } from "react";

import {Teamdata} from "../data/team.js";

const Team = () => {

    const [teamActivel, setteamActivel] = useState(-1);
    const teamAl = (index) => {
        setteamActivel(index === teamActivel ? -1 : index);
    }
    const [teamActiver, setteamActiver] = useState(-1);
    const teamAr = (index) => {
        setteamActiver(index === teamActiver ? -1 : index);
    }
    const teamleft = Teamdata.filter(left => left.id % 2 === 1)
    const teamright = Teamdata.filter(left => left.id % 2 === 0)



    return(
        <div id="team">
            <div className="team-cover">
                <div className="team-left">
                    {teamleft.map((Teamdata,i) => (
                            <div className={`team-wrap ${Teamdata.class} ${
                                i === teamActivel ? "active" : ""}`}
                                onClick={()=>teamAl(i)} >
                                <div className="team-h4wrap">
                                    <h4>{Teamdata.kname}</h4>
                                    <h4>{Teamdata.ename}</h4>
                                </div>
                                <img className="team-logo" src={require("../assets/img/team/"+Teamdata.img+".png")} alt=""></img>
                                <p className="team-cname">{Teamdata.cname}</p>
                                <p className="team-carname">{Teamdata.carname}</p>
                                <img className="team-diver1" src={require("../assets/img/team/racer/"+Teamdata.diver1+".png")} alt=""></img>
                                <img className="team-diver2" src={require("../assets/img/team/racer/"+Teamdata.diver2+".png")} alt=""></img>
                                <img className="team-car" src={require("../assets/img/team/car/"+Teamdata.racecar+".png")} alt=""></img>
                            </div>  
                    ))}
                </div>
                <div className="team-right">
                    {teamright.map((Teamdata,i) => (
                        <div className={`team-wrap ${Teamdata.class} ${
                            teamActiver === i ? "active" : ""}`}
                            onClick={()=>teamAr(i)} >
                            <div className="team-h4wrap">
                                <h4>{Teamdata.kname}</h4>
                                <h4>{Teamdata.ename}</h4>
                            </div>
                            <img className="team-logo" src={require("../assets/img/team/"+Teamdata.img+".png")} alt=""></img>
                            <p className="team-cname">{Teamdata.cname}</p>
                            <p className="team-carname">{Teamdata.carname}</p>
                            <img className="team-diver1" src={require("../assets/img/team/racer/"+Teamdata.diver1+".png")} alt=""></img>
                            <img className="team-diver2" src={require("../assets/img/team/racer/"+Teamdata.diver2+".png")} alt=""></img>
                            <img className="team-car" src={require("../assets/img/team/car/"+Teamdata.racecar+".png")} alt=""></img>
                        </div>  
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Team;