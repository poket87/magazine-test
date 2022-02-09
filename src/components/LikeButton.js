import React from "react";

import styled from "styled-components";
import HeartImg from "../assets/heart.png";
import EmptyHeartImg from "../assets/empty-heart.png";

const LikeButton = ({ like, onClick }) => {
  return (
    <React.Fragment>
      <Heart src={like ? HeartImg : EmptyHeartImg} onClick={onClick} />
    </React.Fragment>
  );
};

const Heart = styled.img`
  width: 30px;
  height: 30px;
`;

export default LikeButton;
