import React from "react";
import avatarPic from "../../Images/avatar-icon-images-4.jpg";
import "../../Style/Tictactoe/Player.css";

const Player = (props) => {
    return (
        <div className='content player'>
            <div className='profileName'>
                <img src={avatarPic} alt='avatar' />
                <h2>{props.name}</h2>
            </div>
            <div className='profileInfo'>
                <p>Win Rate: {props.winrate}</p>
                <p>Total matches: {props.matches}</p>
            </div>
        </div>
    );
};

export default Player;
