import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './TeamDetails.css'
import { Container, Row, Col, Navbar } from 'react-bootstrap';
import male from './Photo/male.png';
import female from './Photo/female.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClipboardCheck, faFlag, faFutbol, faVenusMars, faGlobe } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faTwitterSquare, faYoutube } from '@fortawesome/free-brands-svg-icons'

const TeamDetails = () => {
    const [teamDetail, setTeamDetail] = useState({});
    let { idTeam } = useParams();
    useEffect(() => {
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${idTeam}`
        fetch(url)
            .then(res => res.json())
            .then(data => setTeamDetail(data.teams[0]))
    }, [idTeam])

    return (
        <div>
            <img src={teamDetail.strTeamBanner} className="top-banner1" alt="topBanner"></img>
            <div className="back">
                <Container className="detail">
                    <Row className="row">
                        <Col sm={8}>
                            <h1>{teamDetail.strTeam}</h1>
                            <p><FontAwesomeIcon icon={faClipboardCheck} /> Founded :{teamDetail.intFormedYear}</p>
                            <p><FontAwesomeIcon icon={faFlag} /> Country : {teamDetail.strCountry}</p>
                            <p><FontAwesomeIcon icon={faFutbol} /> Sport Type : {teamDetail.strSport}</p>
                            <p><FontAwesomeIcon icon={faVenusMars} /> Gender : {teamDetail.strGender}</p>
                        </Col>
                        <Col sm={4}>
                            {(() => {
                                if (teamDetail.strGender === 'Male') {
                                    return (
                                        <img src={male} alt="male"></img>
                                    )
                                }
                                else {
                                    return (
                                        <img src={female} alt="female"></img>
                                    )
                                }
                            })()}

                        </Col>
                    </Row>
                </Container>
                <div className="description">
                    <h3>{teamDetail.strDescriptionEN}</h3>
                </div>

                <div className="social-media">
                    <a target="_blank" rel="noopener noreferrer" href={`https://${teamDetail.strFacebook}`}><FontAwesomeIcon icon={faFacebook} size='3x' /></a>
                    <a target="_blank" rel="noopener noreferrer" href={`https://${teamDetail.strTwitter}`}><FontAwesomeIcon icon={faTwitterSquare} size='3x' /></a>
                    <a target="_blank" rel="noopener noreferrer" href={`https://${teamDetail.strYoutube}`}><FontAwesomeIcon icon={faYoutube} size='3x' /></a>
                    <a target="_blank" rel="noopener noreferrer" href={`https://${teamDetail.strWebsite}`}><FontAwesomeIcon icon={faGlobe} size='3x' /></a>
                </div>
            </div>
        </div>
    );
};

export default TeamDetails;