import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Fade from 'react-reveal/Fade';
import badge from '../../assets/svg/education/badge.svg'
 import gpa from '../../assets/svg/education/transcript.svg'

import { ThemeContext } from '../../contexts/ThemeContext';

import edu from '../../assets/svg/education/edu.svg'

import './Education.css'

function EducationCard({ id, institution, course, award,Gpa,startYear, endYear }) {

    const { theme } = useContext(ThemeContext);

    const useStyles = makeStyles((t) => ({
        educationCard : {
            backgroundColor:theme.primary30,
            "&:hover": {
                backgroundColor:theme.primary50,
            },
        },
    }));

    const classes = useStyles();

    return (
        <Fade bottom>
            <div key={id} className={`education-card ${classes.educationCard}`} >
                <div className="educard-img" style={{backgroundColor: theme.primary}}>
                    <img src={theme.type === 'light' ? edu : edu} alt="" />
                </div>
                <div className="education-details">
                    <h6 style={{color: theme.primary}}>{startYear}-{endYear}</h6>
                    <h4 style={{color: theme.tertiary}}>{course}</h4>
                    <h5 style={{color: theme.tertiary80}}>{institution}</h5>
                    {id !==2 &&(
                    <h6 style={{color: theme.tertiary80}}>
                        <img 
                        src={gpa} 
                        alt="Gpa Icon" 
                        style={{
                            width: '16px', 
                            height: '16px', 
                            marginRight: '8px', 
                            verticalAlign: 'middle'
                        }} 
                    />
                        {Gpa}</h6>)}
                        {id !==2 &&(
                     <h6 style={{color: theme.tertiary80}}>
                        <img 
                        src={badge} 
                        alt="Medal Icon" 
                        style={{
                            width: '16px', 
                            height: '16px', 
                            marginRight: '8px', 
                            verticalAlign: 'middle'
                        }} 
                    />
                        {award}</h6>)}
                        
                </div>
            </div>
        </Fade>        
    )
}

export default EducationCard
