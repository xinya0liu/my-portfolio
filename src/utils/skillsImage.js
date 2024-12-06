
import html from '../assets/svg/skills/html.svg'
import docker from '../assets/svg/skills/docker.svg'
import css from '../assets/svg/skills/css.svg'

import javascript from '../assets/svg/skills/javascript.svg'
import nextJS from '../assets/svg/skills/nextJS.svg'

import react from '../assets/svg/skills/react.svg'
import typescript from '../assets/svg/skills/typescript.svg'

import bootstrap from '../assets/svg/skills/bootstrap.svg'

import mongoDB from '../assets/svg/skills/mongoDB.svg'
import mysql from '../assets/svg/skills/mysql.svg'

import tailwind from '../assets/svg/skills/tailwind.svg'
import java from '../assets/svg/skills/java.svg'
import matlab from '../assets/svg/skills/matlab.svg'
import python from '../assets/svg/skills/python.svg'
import aws from '../assets/svg/skills/aws.svg'
import git from '../assets/svg/skills/git.svg'
import figma from '../assets/svg/skills/figma.svg'
import sap from '../assets/svg/skills/sap.svg'
import oracle from '../assets/svg/skills/oracle.svg'
import sql from '../assets/svg/skills/sql.svg'


export const skillsImage = (skill) => {
    const skillID = skill.toLowerCase();
    switch (skillID) {
      
        case 'html':
            return html;
        case 'docker':
            return docker;
        case 'css':
            return css;
        case 'javascript':
            return javascript;
        case 'next js':
            return nextJS;
        case 'react':
            return react;
        case 'typescript':
            return typescript;
        case 'bootstrap':
            return bootstrap;
        case 'mongodb':
            return mongoDB;
        case 'mysql':
            return mysql;
        case 'tailwind':
            return tailwind;
        case 'java':
            return java;
        case 'matlab':
            return matlab;
        case 'python':
            return python;
        case 'aws':
            return aws;
        case 'git':
            return git;
        case 'figma':
            return figma;
            case 'sap':
            return sap;
            case 'oracle':
                return oracle;
            case 'sql':
                return sql;
        
        default:
            break;
    }
}
