import React, {useEffect, useState} from 'react';
import {missionService} from "../../axios.service/mission.service";
import Mission from "../mission/Mission";

const Missions = () => {

    let [missions, setMissions] = useState(null);

    useEffect(()=>{
        missionService.getAll()
            .then(value => value.data)
            .then(missions => setMissions(missions))
    },[])

     console.log();

    return (
        <div>
            {
              missions &&  missions.map((mission, index) => <Mission mission={mission} key={index} />)
            }
        </div>
    );
};

export default Missions;