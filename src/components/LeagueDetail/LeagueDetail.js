import React, { useEffect, useState } from 'react'; 
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faFacebookF,faTwitter,faYoutube  } from '@fortawesome/free-brands-svg-icons';
import { faGenderless, faHome, faPassport, faStar } from '@fortawesome/free-solid-svg-icons';



const LeagueDetail = () => {
    const {teamId}=useParams();
    
    const [team,setTeam]=useState({});
    
    useEffect(()=>{
        const url =`https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${teamId}`;
        fetch(url)
        .then(res=>res.json())
        .then(data=>setTeam(data.teams[0]))
    },[])
    let gender=team.strGender;
    let pathImage;
    
    if(gender==="Male"){
        pathImage = '/images/male.png'
    }else{
        pathImage = '/images/female.png'
    }
    
    return (
        <div className="container" style={{background:'#DEE1E6'}}>
            <div className="banner">
                <img style={{width:'100%'}} src={team.strTeamBanner} alt=""/>
                <img className="logo" style={{width:'100px'}} src={team.strTeamBadge} alt=""/>
            </div>
            
            
           <div style={{display: 'flex',background:'white'}}>
                <div style={{width:'400px'}}>
                    <h2>{team.strTeam}</h2>
                    <p><FontAwesomeIcon icon={faStar}/> Founded: {team.intFormedYear}</p>
                    <p><FontAwesomeIcon icon={faHome}/>Country: {team.strCountry}</p>
                    <p><FontAwesomeIcon icon={faPassport}/>Sport Type: {team.strSport}</p>
                    <p><FontAwesomeIcon icon={faGenderless}/>Gender: {team.strGender}</p>
                </div>
                <div>
                    
                    <img style={{height:'200px',width:'450px'}} src={pathImage}  alt="..."/>
                    
                </div> 
           </div>

           <div>
                <p>{team.strDescriptionEN}</p>
                
           </div>
           <div className="d-flex justify-content-center" style={{background:'white'}}>
           <a style={{padding:'10px'}} href={`https://${team.strTwitter}`}><FontAwesomeIcon icon={faTwitter} /></a>
           <a style={{padding:'10px'}} href={`https://${team.strFacebook}`}><FontAwesomeIcon icon={faFacebookF} /></a>
           <a style={{padding:'10px'}} href={`https://${team.strYoutube}`}><FontAwesomeIcon icon={faYoutube} /></a>
           
           </div>
           
        </div>
        
        
    );
};

export default LeagueDetail;