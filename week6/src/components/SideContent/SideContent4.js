import React, { Component } from 'react';
import styled from "styled-components";

const Wrap = styled.div`
    background-color: white;
    width: 300px;
    padding:15px;
    margin-bottom:10px;
`
const Heading = styled.h1`
    font-size: 16px;
    text-align: left;
    text-transform: uppercase;
`

class SideContent4 extends Component {
    render() {
        return (
            <Wrap className='Content-right'>
                <Heading>Liên hệ</Heading>
            </Wrap>
        );
    }
}

export default SideContent4;