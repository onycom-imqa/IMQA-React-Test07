import React from "react";
import "./HeaderOption.css";
import { Avatar } from "@material-ui/core";
import {useIMQA} from "imqa-react-sdk";

const HeaderOption = ({ Icon, title, avatar, click, displayName }) => {
    const IMQARef = useIMQA(); // 삽입
  return (
      <div ref={IMQARef}>
    <div className='headerOption'>
      {Icon && <Icon className='headerOption_icon' onClick={click} />}
      {(avatar || displayName) && (
        <Avatar className='headerOption_avatar' src={avatar}>
          {displayName[0]}
        </Avatar>
      )}
      <h3 className='headerOption_title'>{title}</h3>
    </div>
    </div>
  );
};

export default HeaderOption;
