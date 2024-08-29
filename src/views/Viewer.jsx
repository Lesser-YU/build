import React from "react";
import Intro from "../components/Intro";
import History from "../components/History";
import Calendar from "../components/Calendar";
import Progress from "../components/Progress";
import Team from "../components/Team";
import RaceCar from "../components/RaceCar";
import PopularDriver from "../components/PopularDriver";
import F1 from "../components/F1";


const Viewer = () => {
    return(
        <>
        <Intro/>
        <History/>
        <Calendar/>
        <Progress/>
        <Team/>
        <RaceCar/>
        <PopularDriver/>
        <F1/>
        </>
    )
}



export default Viewer;