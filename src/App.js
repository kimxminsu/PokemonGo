import React from 'react';
import pokeball from './images.jpg';
function App (){

  return(
    <div style={{
      display: "flex", 
      flexDirection: "column", 
      alignItems: "left",
      background: "rgba(255,250,240,0.7)",
      color: "red",
      margin: "0 auto",
      padding: "2rem",
      width: "75%",
      borderRadius: "0.5rem",
      }}>
        <img src = {pokeball}></img>
         <h1 style={{
             fontSize: "1rem"
         }}>업데이트</h1>
         <label>
             <input type="checkbox"/>
             로그인 정보 저장
         </label>
         
  </div>
  );

}
export default App;
