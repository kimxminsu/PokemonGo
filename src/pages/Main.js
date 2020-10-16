import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Background, Footer, Nav } from '../components';
import ball from '../ball.png';
import googleplay from '../img/googleplay.png';
import appstore from '../img/appstore.png';

const StyledH6 = styled.h6`
font-size: 13px;
color : #44696C;
`;

const StyledH2 = styled.h2`
box-color:#000000;
font-size: 53px;
color: white;
font-weight: 700;
`;

const Button = styled.button`
color: #fff;
    display: inline-block;
    background: linear-gradient(to right, #24CCAA, #A2DB95);
    border-radius: 50px;
    font-size: 16px;
    line-height: 23px;
    padding: 15px 50px;
    font-weight: 500;
    margin:5% 35% 0px 35%;
`;

export default function Main() {
    return (
        <>
            <Background>
                <Nav />
<div>
                <div style={{ width: "50%", height: "50%", float: "left" }}>
                    <div style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "left",
                        background: "rgba(255,250,240,0.7)",
                        margin: "5%",
                        padding: "2rem",
                        width: "75%",
                        borderRadius: "0.5rem",
                    }}>
                        <div>
                            <img src={ball} style={{ width: "50px", height: "50px" }}></img>
                            <a href="https://pokemongolive.com/ko/post/" style={{ textDecoration: 'none' }}> 업데이트</a>
                        </div>

                        <div>
                            <div>
                                <StyledH6>20. 9. 17.
                                    <div><a href="https://pokemongolive.com/ko/post/jessie-james-leaving/"
                                    style={{ textDecoration: 'none' }}>로사, 로이가 떠나기 전에 배틀하세요!</a></div>
                            </StyledH6>
                            </div>
                            <div>
                                <StyledH6>20. 9. 3.
                                    <div><a href="https://pokemongolive.com/ko/post/communityday-sept20/"
                                    style={{ textDecoration: 'none' }}>9월 「Pokémon GO 커뮤니티 데이」에서 대량발생하는 포켓몬은 폴리곤!</a></div>
                                </StyledH6>
                            </div>
                            <div>
                                <StyledH6>20. 8. 31.
                                    <div><a href="https://pokemongolive.com/ko/post/mega-september-event/"
                                    style={{ textDecoration: 'none' }}>포켓몬을 메가진화시키고 「메가 9월」 이벤트를 즐기세요!</a></div>
                                </StyledH6>
                            </div>
                            <div>
                                <StyledH6>20. 8. 31.
                                    <div><a href="https://pokemongolive.com/ko/post/remoteraidmegas2020/"
                                        style={{ textDecoration: 'none' }}>프렌드와 함께 더 많은 메가레이드에 참가하자! 「리모트 레이드패스」 3개가 1 포켓코인으로 판매 중</a></div>
                                </StyledH6>
                            </div>
                            <div>
                                <StyledH6>20. 8. 28.
                                    <div><a href="https://pokemongolive.com/ko/post/ios10-ios11-android5-discontinued-support/"
                                        style={{ textDecoration: 'none' }}>Android 5, iOS 10, iOS 11, iPhone 5s, iPhone 6에 대한 「Pokémon GO」 지원 중단</a></div>
                                </StyledH6>
                            </div>
                            <div>
                                <StyledH6>20. 8. 27.
                                    <div><a href="https://pokemongolive.com/ko/post/megaevolution-launch/"
                                        style={{ textDecoration: 'none' }}>「메가진화」가 옵니다! 「메가이상해꽃」, 「메가거북왕」, 「메가리자몽」 그리고 「레이드배틀」 등이 등장!</a></div>
                                </StyledH6>
                            </div>

                        </div>
                    
                    </div>

                    <div>
                        <img src={googleplay} style={{margin:"0px 5% 0px 10%", width:"30%"}}></img> <img src={appstore} style={{margin:"0px 5% 0px 10%",width:"30%"}}></img><br></br>
                        <Button>게임영상</Button>
                    </div>

                </div>


                <div style={{ width: "50%", margin:"313px 25% 0px 75%"}}>
                    <img src="https://pokemongolive.com/img/homepage/phone.png" ></img>
                </div>
</div>

                <Footer />

            </Background>
        </>
    );

}
