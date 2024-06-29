import React from 'react'
import './SubNavbar.css'
const SubNavbar = () => {
  return (
    <div className='SubNavbar'>
      <div className="box1"></div> 
               <div className="box2">
                <div className="pickUp">
                    <label for="username">pick-up</label><br />
                  <input type='text' className='field' name='pick-up' id="id_email"></input>
                </div>

                <div className="dropOff">
                    <label for="username">drop-off</label><br />
                    <input type="text" className="field" name="drop-off" id="id_email"></input>
                </div>

                <div className="pickUpDate">
                    <label for="username">pick-up-date</label><br />
                    <input type="date" className="field" name="pick-up-date" id="id_email"></input>
                </div>

                <div className="dropOffDate">
                    <label for="username">drop-off-date</label><br />
                    <input type="date" className="field" name="drop-off-date" id="id_email"></input>
                </div>

                <div className="pickUpTime">
                    <label for="username">pick-up-time</label><br />
                    <input type="time" className="field" name="pick-up-time" id="id_email"></input>
                </div>

                <div className="dropOffTime">
                    <label for="username">drop-off-time</label><br />
                    <input type="time" className="field" name="drop-off-time" id="id_email"></input>
                </div>
               </div> 
    </div>
  )
}

export default SubNavbar