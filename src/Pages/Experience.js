import React from "react";
import datacomPic from '../Resources/datacomPic.jpg';

export const Experience = () => {
  return (
    <div className='d-flex flex-sm-row  flex-column justify-content-between  align-items-center p-2 mt-5 '>
      <div className='w-25 mx-5'>
        <img src={datacomPic} alt="face-of-christopher" className='w-100 scale-15 border rounded justify-content-center ms-3 align-items-center d-flex' />
      </div>
      <div className='w-50 mx-4 sm-move-down'>
        <h2 className=''>Datacom</h2>
        <div className='text-secondary my-sm-3'>
          <p> At the second year of pursuing my degree, I completed my workplacement in Datacom Sydney for 3 months. There, I was taught and
              implemented the double diamond framework and hierarchy principles to better manage pacing of development and create quality UI/UX navigation for elderly users.
              I did manual testing and reasearch with colleagues and project owner. I then
              designed a prototype for secure data access from the web app, by separating data access point from sensitive patient healthcare data.</p>
        </div>
      </div>
    </div>
  )
}