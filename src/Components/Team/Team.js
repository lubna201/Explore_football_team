import React from 'react';
import { useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowCircleRight } from '@fortawesome/free-solid-svg-icons'
import './Team.css';
import { Button } from 'react-bootstrap';


const Team = (props) => {
    const { strTeam, strSport, strTeamBadge, idTeam } = props.team;
    let history = useHistory();
    const handleClick = (teamId) => {
        history.push(`/team/${teamId}`);
    }
    return (
        <div className="col">
            {
                <div className="team">
                    <div>
                        <img src={strTeamBadge} alt="" className="im" />
                    </div>
                    <div>
                        <h1 className="team-name">{strTeam}</h1>
                        <p><small>Sports Type: {strSport}</small></p>
                        <Button variant="primary" className="main-button"
                            onClick={() => handleClick(idTeam)}
                        >Explore <FontAwesomeIcon icon={faArrowCircleRight} /></Button>
                    </div>
                </div>
            }
        </div>
    );
};

export default Team;