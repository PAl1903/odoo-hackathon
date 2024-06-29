import React from 'react'
import './Counters.css'
import NumberCounter from 'number-counter'

const Counters = () => {
  return (
    <div className='counter'>
      <div className='counter-1'>
        <div className='count-1'>
          <span className='number'>
            {<NumberCounter end={60} start={0} delay='3' />}
          </span>
          <br></br>
          <span className='desc'>Years Experience</span>
        </div>
        <div className='count-2'>
          <span className='number'>
            <NumberCounter end={1060} start={0} delay='3' />
          </span>
          <br></br>
          <span className='desc'>Total Furnitures</span>
        </div>
      </div>
      <div className='counter-2'>
        <div className='count-3'>
          <span className='number'>
            <NumberCounter end={2590} start={0} delay='3' />
          </span>
          <br></br>
          <span className='desc'>Happy Customers</span>
        </div>
        <div className='count-4'>
          <span className='number'>
            <NumberCounter end={67} start={0} delay='3' />
          </span>
          <br></br>
          <span className='desc'>Total Customers</span>
        </div>
      </div>
    </div>
  )
}

export default Counters;
