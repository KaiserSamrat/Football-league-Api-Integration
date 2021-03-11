import React, { useEffect, useState } from 'react';

import TeamList from './TeamList/TeamList';



const Home = () => {
    const[team,setTeam] = useState([])
    useEffect(()=>{
       const url='https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League'
        fetch(url)
        .then(res=>res.json())
        .then(data=>setTeam(data.teams))
    },[])
    return (
        <div className='row'>
            {
                team.map(team=> <TeamList team={team} ></TeamList>)

            }
           
        </div>
    );
};

export default Home;