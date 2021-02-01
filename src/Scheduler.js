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
    {/* <Col align="center" vertical-align="middle">
        <Image width="70%" src={calendar}/>
    </Col> */}
    <Col>
    <iframe src="https://calendar.google.com/calendar/embed?height=600&amp;wkst=1&amp;bgcolor=%23ffffff&amp;ctz=America%2FLos_Angeles&amp;src=ZWRoYnZqa2lzNDFhMmEwaGI0ZGdmYW1kMGtAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&amp;color=%23AD1457&amp;showNav=1&amp;showDate=0&amp;showPrint=0" 
        width="800" 
        height="600" 
        frameBorder="0" 
        scrolling="yes"></iframe>
    </Col>
</Container>
);
}