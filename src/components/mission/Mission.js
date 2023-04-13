import React from 'react';

const Mission = ({mission}) => {
    return (
        <div>
            <div>{mission.mission_name}</div>
            <div>{mission.launch_year}</div>
            <img src={mission.links.mission_patch_small} alt=""/>
            <br/>

        </div>
    );
};

export default Mission;