import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './TeamDetails.css'
import maleImage from '../../Photo/male.png'
import femaleImage from '../../Photo/female.png'

import flagLogo from '../../Icon/flagLogo.png'
import genderLogo from '../../Icon/gender.png'
import foundedLogo from '../../Icon/founded.png'
import sportTypeLogo from '../../Icon/sportType.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitterSquare, faYoutube } from '@fortawesome/free-brands-svg-icons'
const TeamDetails = () => {
    const { teamId } = useParams();
    const [teamInfo, setTeamInfo] = useState([]);
    useEffect(() => {
        fetch(`https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${teamId}`)
            .then(res => res.json())
            .then(data => setTeamInfo(data.teams[0]))
    }, [teamId])

    // const Gender = teamInfo.strGender;
    // console.log(typeof(Gender));

    return (

        <>
            <section>
                {/* <img src={banner} alt="" style={{ height: "500px", width: "100%" }} /> */}
                <img src={teamInfo.strTeamBanner} alt="" style={{ height: "500px", width: "100%" }} />

                <img className="centered" src={teamInfo.strTeamBadge} alt="" />
            </section>

            <section className="team-details">
                <div className="row">
                    <div className="col-md-7 text-white p-5 ">
                        <h3>{teamInfo.strTeam}</h3>
                        <p > <img src={foundedLogo} alt="" style={{ height: "20px" }} /> Founded: {teamInfo.intFormedYear}</p>
                        <p > <img src={flagLogo} alt="" style={{ height: "20px" }} /> Country: {teamInfo.strCountry}</p>
                        <p>  <img src={sportTypeLogo} alt="" style={{ height: "20px" }} /> Sport Type: {teamInfo.strSport}</p>
                        <p>  <img src={genderLogo} alt="" style={{ height: "20px" }} /> Gender: {teamInfo.strGender}</p>

                    </div>
                    <div className="col-md-5 p-4 " >
                        {
                            ( teamInfo.strGender==="Male") 
                            ? <img className="img-fluid" src={maleImage} alt="" /> 
                            : <img className="img-fluid" src={femaleImage}  alt="" />

                        }

                    </div>
                </div>
            </section>
            <section className="px-5">
                <p className="my-3 text-white">{teamInfo.strDescriptionEN}</p>
                <p className="text-white">{teamInfo.strStadiumDescription}</p>
            </section>
            <div className='p-4 text-center footer'>
                <a target="_blank" href={`https://${teamInfo.strTwitter}`} rel="noreferrer"><FontAwesomeIcon icon={faTwitterSquare} className="fa-3x" /></a>
                <a target="_blank" href={`https://${teamInfo.strFacebook}`} rel="noreferrer"><FontAwesomeIcon icon={faFacebook} className="fa-3x" /></a>
                <a target="_blank" href={`https://${teamInfo.strYoutube}`} rel="noreferrer"><FontAwesomeIcon icon={faYoutube} className="fa-3x" /></a>
            </div>

        </>

        // </div>

    );
};

export default TeamDetails;