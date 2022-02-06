import React from "react";
import Heading from "./Heading";
import Greeting from "./Greeting";
import {Add,Sub,Mul,Div} from './Calculation';
import Card from './Card';
import Cdata from './Cdata'
function cdata(val){
    return(
        <>
        <Card 
        imgsrc = {val.imagesrc}
        heading = {val.heading}
        detail = {val.detail}
        link = {val.link}
        />
        </>
    )
}
function App(){
    return (
        <>
        <h1><Heading/>,<Greeting/></h1>
        <ol>
            <li>{`The summation of two numbers is ${Add(10,20)}`}</li>
            <li>{`The subtraction of two numbers is ${Sub(30,20)}`}</li>
            <li>{`The Multiplication of two numbers is ${Mul(10,20)}`}</li>
            <li>{`The Divission of two numbers is ${Div(10,20)}`}</li>
        </ol>
        {Cdata.map(cdata)}
        </>
    );
}
export default App;