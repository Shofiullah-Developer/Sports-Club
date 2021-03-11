import React, { useEffect, useState } from 'react';
import League from '../League/League';

const Home = () => {
    const [leagues,setLeagues]=useState([]);

    useEffect(()=>{
        fetch('https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League')
        .then(res=>res.json())
        .then(data=>setLeagues(data.teams))
        
    },[]);
    
    return (

        <div>
            <h1 style={{textAlign: 'center',background:'turquoise',height:'100px'}}>Sports Club</h1>
        
         <div className="row">
             
             {
                    leagues.map(league=> (
                        <div className="col-md-4">
                            <League league={league}/>
                        </div>
                    ))
                }
            
         </div>
        </div>
        

        
    );
};

export default Home;