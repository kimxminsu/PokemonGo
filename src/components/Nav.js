import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import logo from '../img/logo.png';

const StyledNav = styled.nav`

display: flex;
align-items: center;
flex-direction: row;
padding: 0 20px;
justify-content: space-between;
position: relative;
box-sizing: inherit;
`;

const Menu = styled.nav`
margin-left:20px;
display:flex;
text-align:right;
font-weight:bold;
padding:0 20px;
tect-align: center;
margin-top:-15px;
`;

const StyledMenu = styled.text`
padding: 0px 2px 9px 4px;
margin: 0% 50% 25% 25%l
text-align: center;

`;

//style속성을 위에쓰면 css처럼 사용가능, 안되는것도 있긴함


export default function Nav(props) {
    return (
        <StyledNav>
            <Link to='/'>
                <img src={logo} style={{ width: "150px", margin: "30px" }} />
            </Link>
            <Menu>
                <Link to='/Play'>
                    <StyledMenu>어디에 있어도 플레이</StyledMenu>
                </Link>
                <Link to='/Play'>
                    <StyledMenu>순위표</StyledMenu>
                </Link>
                <Link to='/Play'>
                    <StyledMenu>이벤트</StyledMenu>
                </Link>
                <Link to='/Update'>
                    <StyledMenu>업데이트</StyledMenu>
                </Link>
                <Link to='/Support'>
                    <StyledMenu>서포트</StyledMenu>
                </Link>
                <Link to='/Update'>
                    <StyledMenu>쿠폰사용</StyledMenu>
                </Link>

            </Menu>

            {props.children}
        </StyledNav>
    )
}