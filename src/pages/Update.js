import React from 'react';
import styled from 'styled-components';
import ball from '../ball.png';

const StyledH6 = styled.h6`
font-size: 13px;
color : #44696C;
`;

function Update() {

  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "left",
      background: "rgba(255,250,240,0.7)",
      margin: "0 auto",
      padding: "2rem",
      width: "75%",
      borderRadius: "0.5rem",
    }}>
      <div>
        <img src={ball} style={{ width: "50px", height: "50px" }}></img>
        <a href="https://pokemongolive.com/ko/post/" style ={{textDecoration:'none'}}> 업데이트</a>
      </div>
      <div>
        <StyledH6>20. 9. 17.
         <div><a href="https://pokemongolive.com/ko/post/jessie-james-leaving/" style ={{textDecoration:'none'}}>로사, 로이가 떠나기 전에 배틀하세요!</a></div>
        </StyledH6>
        <div>
          <StyledH6>20. 9. 3.
         <div><a href="https://pokemongolive.com/ko/post/communityday-sept20/" style ={{textDecoration:'none'}}>9월 「Pokémon GO 커뮤니티 데이」에서 대량발생하는 포켓몬은 폴리곤!</a></div>
          </StyledH6>
        </div>
        <div>
          <StyledH6>20. 8. 31.
         <div><a href="https://pokemongolive.com/ko/post/mega-september-event/" style ={{textDecoration:'none'}}>포켓몬을 메가진화시키고 「메가 9월」 이벤트를 즐기세요!</a></div>
          </StyledH6>
        </div>
        <div>
          <StyledH6>20. 8. 31.
         <div><a href="https://pokemongolive.com/ko/post/remoteraidmegas2020/" style ={{textDecoration:'none'}}>프렌드와 함께 더 많은 메가레이드에 참가하자! 「리모트 레이드패스」 3개가 1 포켓코인으로 판매 중</a></div>
          </StyledH6>
        </div>
        <div>
          <StyledH6>20. 8. 28.
         <div><a href="https://pokemongolive.com/ko/post/ios10-ios11-android5-discontinued-support/" style ={{textDecoration:'none'}}>Android 5, iOS 10, iOS 11, iPhone 5s, iPhone 6에 대한 「Pokémon GO」 지원 중단</a></div>
          </StyledH6>
        </div>
        <div>
          <StyledH6>20. 8. 27.
         <div><a href="https://pokemongolive.com/ko/post/megaevolution-launch/" style ={{textDecoration:'none'}}>「메가진화」가 옵니다! 「메가이상해꽃」, 「메가거북왕」, 「메가리자몽」 그리고 「레이드배틀」 등이 등장!</a></div>
          </StyledH6>
        </div>

      </div>
    </div>

  );

}
export default Update;
