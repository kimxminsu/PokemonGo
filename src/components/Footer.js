import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import logo from '../img/logo.png';
import footer from '../img/footer.png';



export default function Footer(props) {
    return (
        <div>
            <img src={footer} style={{width: "full"}}></img>

            { props.children}

        </div >

    )
}