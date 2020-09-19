import React from 'react';
import styled from 'styled-components';

const StyleBody = styled.body`
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  font-family: "Roboto","Hiragino Kaku Gothic Pro","Meiryo","Gill Sans","Gill Sans MT","Myriad Pro","DejaVu Sans Condensed",Helvetica,Arial,sans-serif;
  font-size: 16px;
  line-height: 23px;
  color: #44696C;
  margin: 0;
  overflow-x: hidden;
  padding: 0;
  display: block;
  margin: 8px;
  box-sizing: inherit;
  display: block;
`;


const StyleHome = styled.img`
width: 8rem;
height: 8rem;
font-family: "Lato",sans-serif;
margin-left: auto;
margin-right: auto;
display: flex;
justify-content: space-between;
align-items: center;
justify-content: space-between;
align-items: center;
padding: 20px;
vertical-align: middle;
line-height: 5em;
`;

const StyledDiv1 = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
visibility: inherit;
`;

const StyledDiv2 = styled.div`
background: url(https://storage.googleapis.com/nianticweb-media/pokemongo/helper/bond-bubble.svg);
font-family: "Lato",sans-serif;
font-weight: 700;
width: calc(20% + 1vw);
height: calc(100% + 1vw);
color: white;
position: absolute;
left: 13%;
top: 20%;
text-align: center;
vertical-align: left;
line-height: 5em;
background-size: 100%;
background-repeat: no-repeat;
cursor: pointer;
-webkit-animation: push-pulse .8s ease;
animation: push-pulse .8s ease;
font-size: 4vw;
visibility: inherit;

`;

const StyledDiv3 = styled.div`
background: url("https://storage.googleapis.com/nianticweb-media/pokemongo/helper/catch-bubble.svg");
font-family: "Lato",sans-serif;
font-weight: 700;
width: calc(20% + 1vw);
height: calc(100% + 1vw);
top: 29%;
color: white;
position: relative;
left: 39%;
top: 20%;
text-align: center;
vertical-align: middle;
line-height: 5em;
background-size: 100%;
background-repeat: no-repeat;
cursor: pointer;
-webkit-animation: push-pulse .8s ease;
animation: push-pulse .8s ease;
font-size: 4vw;
visibility: inherit;
`;

const StyledDiv4 = styled.div`
background: url("https://storage.googleapis.com/nianticweb-media/pokemongo/helper/battle-bubble.svg");
font-family: "Lato",sans-serif;
font-weight: 700;
width: calc(20% + 1vw);
height: calc(100% + 1vw);
color: white;
position: absolute;
left: 65%;
top: 20%;
text-align: center;
vertical-align: middle;
line-height: 5em;
background-size: 100%;
background-repeat: no-repeat;
cursor: pointer;
-webkit-animation: push-pulse .8s ease;
animation: push-pulse .8s ease;
font-size: 4vw;
    visibility: inherit;
`;

const StyleLabel = styled.label`
font-family: "Lato",sans-serif;
font-weight: 700;
text-align: center;
color: #35959E;
font-size: 30px;
top: 5%;
position: relative;
display: block;
`;

const StyleLabel2 = styled.p`

    color: #44696C;
    font-size: 16px;
    font-family: "Lato",sans-serif;
    text-align: center;
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;

    `;

export default function Play() {
  return (

    <>
      <styledDiv1>
        <StyledDiv2>선물</StyledDiv2>
        <StyledDiv3>포켓몬 잡기</StyledDiv3>
        <StyledDiv4>배틀</StyledDiv4>
      </styledDiv1>  
      <StyleHome src="https://storage.cloud.google.com/nianticweb-media/pokemongo/helper/house-visual.svg"/> 
      <StyleLabel>어디에 있어도 플레이</StyleLabel>
      <StyleLabel2>
                   모험은 어디서나 여러분을 기다리고 있습니다! 밖에서<br/>
                   프렌드와 플레이 하거나, 집에서 플레이하거나 <br/>
                   "Pokémon GO" 세계에서는 할 수 있는 것이 많습니다. <br/>
                   위 카테고리를 탭 하셔서 추천하는 기능 및 어디서라도 <br/>
                   가능한 플레이를 확인해보세요. 최신 정보와 현재 진행 <br/>
                   중인 보너스에 대한 최신 내용은 "Pokémon GO" 내의 <br/>
                   "오늘" 항목에서 확인하세요 .
      </StyleLabel2>
    </>
  )
}

