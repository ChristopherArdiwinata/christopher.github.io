import react from 'react';
import '../App.css';
import profileImage from '../profile-picture.jpg';
import { Link } from 'react-router-dom';
import resume from '../Downloads/Resume_Christopher_Ardiwinata.pdf';


export const HomePage = () => {
  return (
    <div className='d-flex flex-sm-row  flex-column justify-content-between  align-items-center p-2 mt-5 '>
      <div className='w-25 mx-5'>
        <img src={profileImage} alt="face-of-christopher" className='w-100  border rounded justify-content-center align-items-center d-flex' />
      </div>
      <div className='w-50'>
        <h2 className='disappear-when-small'>Hi There !!</h2>
        <div className='text-secondary my-sm-3'>
          <p>My name is Christopher Ardiwinata , I'm a final year Computer Science student at UNSW Sydney</p>
          <br></br>
          <p>I enjoy looking at tech news, playing sports [🏸🏃‍♂️⚽], and enjoy different kinds of food 🍕.</p>
        </div>
        <div className='d-flex grid gap-3'>
          <a href={resume} download="Christopher-Ardiwinata-Resume.pdf">
            <button className='border rounded-pill bg-white text-black p-1 g-col-6 px-3'>Download CV</button>
          </a>
          <Link to="/experience" className='p-1 g-col-6 text-theme-color link-no-line nav-font'>See experiences</Link>
        </div>
      </div>
    </div>
  )
}