import React from 'react'
import './Chart.css'

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from 'recharts'

export default function Chart({ title, data, dataKey, grid }) {
  return (
    <div className='chart'>
      <h3 className='chartTitle'>{title}</h3>
      <ResponsiveContainer width='100%' aspect={4 / 1}>
        <AreaChart data={data}>
          <XAxis dataKey='Month' stroke='white' />
          <YAxis />
          <Area
            type='monotone'
            dataKey={dataKey}
            stroke='#3591ca'
            fill='#3591ca'
          />
          <Tooltip />
          {grid && <CartesianGrid strokeDasharray='5 5' />}
          <Legend />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  )
}
