import React, { useEffect, useState } from 'react';
import './App.css';
import Container from 'react-bootstrap/Container';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

import calendar from './assets/calendar_bw.jpg'


export default function Scheduler(){
return (
<Container>
    <p className="App-sm-txt">You can schedule a trial lesson, a regular lesson, or an information meeting.</p>
    <Col align="center" vertical-align="middle">
        <Image width="70%" src={calendar}/>
    </Col>
</Container>
);
}