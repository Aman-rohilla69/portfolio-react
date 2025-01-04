import React from 'react'
import mywork_data from '../../Portfolio Data/mywork_data'
import './MyWork.css'
import arrow_icon from '../../Images/arrow.jpg';
function MyWork() {
  return (
    <div id='work' className='mywork'>
      <div className='mywork-title' >
        <h1>My latest work</h1>
      </div>
      <div className='mywork-container' >
       {mywork_data.map((work,index)=>{
        return <img key={index} className='work_img' src={work.w_img} alt='' ></img>
       })}
      </div>
      <div className='mywork-showmore' >
        <p>Show More</p>
        <img className='arrow' src={arrow_icon} alt='arrow icon' ></img>
      </div>
    </div>
  )
}

export default MyWork
