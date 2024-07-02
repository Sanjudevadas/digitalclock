import React, { useEffect, useState } from "react";

function DigitalClock() {
const [time,setTime]= useState(new Date())

useEffect(()=>{
  
    const IntervelId= setInterval(()=>{
        setTime(new Date())
    },1000);
    return ()=>{
        clearInterval(IntervelId);
    }

},[])

function FormatTime(){
    let hours=time.getHours();
    const minute=time.getMinutes();
    const seconds=time.getSeconds();
    const Meridiem =hours >=12 ? "PM" : "AM";
     hours = hours%12 || 12;

     return `${hours}:${minute}:${seconds} ${Meridiem}`

}



  return (
    <div className="digitalclock">
      <div className="clock">
        <h2>Digital Clock</h2>
        <span>{FormatTime()}</span>
      </div>
    </div>
  );
}
export default DigitalClock;
