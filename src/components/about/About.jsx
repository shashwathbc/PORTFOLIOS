import React from 'react';
import "./about.css";
import mee from "../../img/me2.png";

const About = () => {
  return (
    <div className='about'>
        <div className="a-left">

            {/* first card provides us a showdow bg */}
           <div className="a-card bg"></div>
           {/* second card provides us an imgf  */}
           <div className="a-card">
               <img src={mee} alt="" className='a-img' />
           </div>
        </div>
        <div className="a-right">
            <h1 className='a-title'>About Me</h1>
            <p className='a-sub'>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos officia delectus natus temporibus, quae autem impedit fugiat incidunt vel facere quibusdam maiores dolorem atque architecto mollitia dolores, tempore beatae sint maxime voluptatibus ipsum doloribus! Maiores reiciendis ipsa sit aperiam minus. Velit illo laboriosam dignissimos culpa? Excepturi doloribus possimus illum officia!
            </p>

            <p className="a-desc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic temporibus velit veniam natus fugiat sint fugit, sapiente ipsa minima dolorem!
            </p>

            <div className="skill-ratings">
            <p>HTML</p>
<div class="container">
  <div class="skills html">90%</div>
</div>

<p>CSS</p>
<div class="container">
  <div class="skills css">80%</div>
</div>

<p>JavaScript</p>
<div class="container">
  <div class="skills js">65%</div>
</div>

<p>REACT</p>
<div class="container">
  <div class="skills react">80%</div>
</div>
            </div>
        </div>
    </div>
  )
}

export default About