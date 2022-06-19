import React from 'react';
import ReplayIcon from '@material-ui/icons/Replay';
import CloseIcon from '@material-ui/icons/Close';
import StarRateIcon from '@material-ui/icons/StarRate';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FlashOnIcon from '@material-ui/icons/FlashOn';
import { IconButton } from '@material-ui/core';
import "./SwipeButtons.css";
import {Link} from "react-router-dom";

const SwipeButtons = () => {
    return (
        <div className=" swipeButtons">
                   <IconButton className="swipebuttons__reply">
                       <ReplayIcon  fontSize="large"/>
                   </IconButton>
                   <IconButton className="swipebuttons__close">
                       <CloseIcon fontSize="large"/>
                   </IconButton>
                   <IconButton className="swipebuttons__startrate">
                       <StarRateIcon fontSize="large"/>
                   </IconButton>
                   <IconButton className="swipebuttons__fav">
                       <FavoriteIcon fontSize="large"/>
                   </IconButton>
                   <IconButton className="swipebuttons__flash">
                      <FlashOnIcon fontSize="large"/> 
                   </IconButton>
            
        </div>
    )
}

export default SwipeButtons;
