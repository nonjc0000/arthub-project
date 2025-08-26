import React from 'react'

const My_footprint_card = () => {
  return (
    <div className="footprint_card">
      <div className='date'>
        <h2>2025</h2>
        <p>6/20 FRI</p>
        <p>|</p>
        <p>6/22 SUN</p>
      </div>
      <div className='location'>
        <h2>《夏日派對》</h2>
        <p>大稻埕碼頭貨櫃市集</p>
      </div>
      <figure className='footprint_img'>
        <img src="./images/My_footprint/market.jpg" alt="" />
      </figure>
    </div>
  )
}

export default My_footprint_card