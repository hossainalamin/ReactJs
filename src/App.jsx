import React, { useState } from "react";
import Heading from "./Heading";
import Greeting from "./Greeting";
import { Add, Sub, Mul, Div } from './Calculation';
import Card from './Card';
import Cdata from './Cdata'
import Slot from './Slot'
function App() {
    const [count,setState] = useState(0);
    const numInc = ()=>{
        setState(count +1);   
    }
    var time = new Date();
    time = time.toLocaleTimeString()
    const[loadTime,timeFunction] = useState(time)
    const showTime = ()=>{
        timeFunction(new Date().toLocaleTimeString())
    }
    const[timeUpdate,updateCTime] = useState(time)
    const updateTime = ()=>{
        const localTime = new Date().toLocaleTimeString();
        updateCTime(localTime)
    }
    setInterval(updateTime,1000);
    return (
        <>
            <h1><Heading />,<Greeting /></h1>
            <ol>
                <li>{`The summation of two numbers is ${Add(10, 20)}`}</li>
                <li>{`The subtraction of two numbers is ${Sub(30, 20)}`}</li>
                <li>{`The Multiplication of two numbers is ${Mul(10, 20)}`}</li>
                <li>{`The Divission of two numbers is ${Div(10, 20)}`}</li>
            </ol>
            <div className="row ">
                {Cdata.map((val) => {
                    return (
                        <>
                            <Card
                                key={val.id}
                                imgsrc={val.imagesrc}
                                heading={val.heading}
                                detail={val.detail}
                                link={val.link}
                            />
                        </>
                    )

                })}
            </div>
            <h1>🎰 Slot machine game 🎰</h1>
            <Slot
                x="❤️"
                y="❤️"
                z="❤️" />

            <Slot
                x="🧮"
                y="❤️"
                z="🥼" />
            <Slot
                x="🎧"
                y="👶"
                z="🛬" />
            <Slot
                x="❤️"
                y="❤️"
                z="❤️" />
            <h2 style = {{backgroundColor : 'aliceblue',marginTop : '20px',justifyContent : 'center',display : 'flex'}}>{count}</h2>
            <button style={{marginLeft : '500px'}} className = 'btn btn-danger mb-5' onClick={numInc}>Click Me</button>
            <h2 style = {{backgroundColor : "red",marginTop : '20px',justifyContent : 'center',display : 'flex'}}>{loadTime}</h2>
            <button style={{marginLeft : '500px'}} className = 'btn btn-danger mb-5' onClick={showTime}>Show time</button>
            <h2 style = {{backgroundColor : "red",marginTop : '20px',justifyContent : 'center',display : 'flex'}}>{timeUpdate}</h2>
        </>
    );
}
export default App;