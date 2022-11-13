import React from 'react'
import Hero from "../Components/Hero";
import Blog from "../Components/Blog";
import Content from "../Components/Content";
import Reminder from "../Components/Reminder";
import Coming from "../Components/Coming";
import Schedule from '../Components/Schedule';
import Number from '../Components/Number';
import Availability from '../Components/Availability';
import Appointment from '../Components/Appointment';
import Industry from '../Components/Industry'
import Img from '../Components/Img'
import About from '../Components/About'
import Teams from '../Components/Teams'
import Subscribe from '../Components/Subscribe';


export default function HomePage() {
  return (
    <>
      <Hero></Hero>
      <br></br>
      <Blog></Blog>
      <br></br>
      <Content></Content>
      <br></br>
      <Reminder></Reminder>
      <br></br>
      <Coming></Coming>
      <br></br>
      <Schedule></Schedule>
      <br></br>
      <Number></Number>
      <br></br>
      <Availability></Availability>
      <br></br>
      <br></br>
      <Appointment></Appointment>
      <br></br>
     <Industry></Industry>
     <br></br>
     <Img></Img>
     <br></br>
     <Teams></Teams>
     <br></br>
     <Img></Img>
     <br></br>
     <Subscribe></Subscribe>
     <br></br>
     <About></About>
     <br></br>
    

     
    </>
  )
}
