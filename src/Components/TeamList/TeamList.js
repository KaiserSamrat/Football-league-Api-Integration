import React from 'react';
import { Button, Card} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './TeamList.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import TeamDetails from '../TeamDetails/TeamDetails';
const TeamList = (props) => {
    const{strTeam,strTeamBadge,strLeague,idTeam,strSport} = props.team;
    return (
        <div className="col-md-4 team-container" >
        <Card className="team-info">
            <Card.Img variant="top" src={strTeamBadge} className='team-badge' />
            <Card.Body>
                <div className="text-center">
                    <Card.Title>{strTeam}</Card.Title>
                    <Card.Text>{strSport}</Card.Text>              
                    <Card.Text>{strLeague}</Card.Text>
                    <Button as={Link} to={`/team/${idTeam}`}  variant="primary"  >Explore <FontAwesomeIcon icon={faArrowRight} /></Button>
                    {/* <Button  variant="primary">View Details</Button> */}
                </div>
            </Card.Body>
        </Card>
    </div>
    );
};

export default TeamList;