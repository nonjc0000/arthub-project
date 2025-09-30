import React from 'react'
import { Link } from 'react-router-dom'

const My_footprint_card = ({ id, name, date, time, tag, day, venue, imgUrl }) => {
  return (
    <Link to="/Event_info" style={{
      color: 'black'
    }}>
      <div className="footprint_card">
        <div className='date'>
          <h2>{date.slice(0, 4)}</h2>
          <p>{`${date.slice(5, 7)}/${date.slice(8, 10)} ${day.slice(0, 3)}`}</p>
          <p>|</p>
          <p>{`${date.slice(11, 13)}/${date.slice(14, 16)} ${day.slice(4, 7)}`}</p>
        </div>
        <div className='location'>
          <h2>{name}</h2>
          <p>{venue}</p>
        </div>
        <figure className='footprint_img'>
          <img src={imgUrl} alt=""/>
        </figure>
      </div>
    </Link>
  )
}

export default My_footprint_card