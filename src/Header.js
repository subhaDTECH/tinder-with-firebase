import React from 'react';
import "./Header.css";
import PersonIcon from '@material-ui/icons/Person'; 
import { IconButton } from '@material-ui/core';
import ForumIcon from '@material-ui/icons/Forum';
import {Link} from "react-router-dom";
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import {useHistory} from "react-router-dom";

const Header = ({backbutton}) => {
    const history=useHistory();
    return (
        <div className="header">
           
            {backbutton?(
                <IconButton onClick={()=>history.replace(backbutton)} className="header__each_icon" >
                 <ArrowBackIosIcon fontSize="large" />
                </IconButton>
                 
                 ) : (<IconButton>
                     <PersonIcon  fontSize="large"/> 
                    </IconButton>
                     
                     ) }
               
         

            <Link to='/'>
            <IconButton className="header__each_icon">
                <img className="logo" src="https://tse1.mm.bing.net/th?id=OIP.v4oDKKiGhfEClaxac5A4ywHaHa&pid=Api&P=0&w=300&h=300" alt="" />
            </IconButton>
            </Link>
           

            <Link to="/chat">
            <IconButton className="header__each_icon">
               <ForumIcon   fontSize="large"/>
            </IconButton>
            </Link>

           
        </div>
    )
}

export default Header;
