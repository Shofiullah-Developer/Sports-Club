import React from 'react';
import { Link } from 'react-router-dom';

const League = (props) => {
    const {strTeam,strStadium,idTeam}=props.league;
    
    return (
        <div className="container">
          
                    <div className="card" style={{width: '18rem'}}>
                        <div className="card-body">
                            <h3 className="card-title">{strTeam}</h3>
                            <p className="card-text">{strStadium}</p>
                
                             <Link to={`/league/${idTeam}`} className="btn btn-primary">Explor</Link> 
                        </div>
                    </div>
                </div>    
    );
};

export default League;