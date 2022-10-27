import React, { Component } from 'react';
import styled from 'styled-components';
const Wrap = styled.div`
    background-color:white;
    text-align:center;
    font-size:25px;
    text-transform:uppercase;
    padding: 10px;
    margin-left:auto;
    margin-right:auto;
    max-width:1440px;
`
class Footer extends Component {
    render() {
        return (
            <Wrap>
                Thông tin footer
            </Wrap>
        );
    }
}

export default Footer;