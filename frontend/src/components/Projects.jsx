import React from 'react'
import project1 from '../assets/nature-website.png';
import project2 from '../assets/amazon.png';
import project3 from '../assets/omnifoodPic.png';
import project4 from '../assets/chatnestPic.png';
import { Card } from './Card';


export const Projects = () => {
  return (
    <div id='projects'>
      <div className='flex xl:grid xl:grid-cols-4 overflow-x-auto no-scrollbar w-[95%] mx-auto'>
        <div className="min-w-[340px] xl:w-[340px] xl:min-w-0">
          <Card image={project1} title="Nature Website" t1="PostgreSQL" t2="Express" t3="React" t4="Nodejs" description="Discover the Beauty of Nature"/>
        </div>

        <div className="min-w-[340px] xl:w-[340px]  xl:min-w-0">
          <Card image={project2} title="Amazon" t1="HTML" t2="CSS" t3="JavScript" description="A full-stack Amazon clone with product browsing, cart functionality"/>
        </div>

        <div className="min-w-[340px] xl:w-[340px]  xl:min-w-0">
          <Card image={project3} title="OmniFood" t1="HTML" t2="CSS" t3="JavScript" description="A healthy meal delivered yo your door every singla day."/>
        </div>

        <div className="min-w-[340px] xl:w-[340px]  xl:min-w-0">
          <Card image={project4} title="ChatNest" t1="MongoDB" t2="Express" t3="React" t4="Nodejs" description="Chat like a family"/>
        </div>
      </div>
    </div>
  )
}
