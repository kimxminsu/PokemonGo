import React from 'react';
import styled from 'styled-components';
import bg from '../img/bg.jpg';

const StyledBackground = styled.div`
background: url("https://pokemongolive.com/img/global/bg.jpg") no-repeat center fixed;
background-size: cover;
    display: flex;
    flex-direction: column;
    height: 100vh;
    min-height: 100vh;
    -webkit-font-smoothing: antialiased;
    box-sizing: border-box;
    font-family: "Roboto","Hiragino Kaku Gothic Pro","Meiryo","Gill Sans","Gill Sans MT","Myriad Pro","DejaVu Sans Condensed",Helvetica,Arial,sans-serif;
    font-size: 16px;
    line-height: 23px;
    color: #44696C;
    margin: 0;
    overflow-x: hidden;
    padding: 20px;
    visibility: inherit;
    box-sizing: inherit;

`;

function Background(props) {
  return (
    
    <StyledBackground>
      {props.children}
    </StyledBackground>
  )
}

export default Background;