import React from 'react'


const Review_card = ({ img, name, date, review, like_num }) => {
  return (
    <div className='review_card'>
      <img className='profile_pic' src={img} alt="頭貼" />
      <div className='card_box'>
        <div className='review_box'>
          <div className='regular_info'>
            <p className='name'>{name}</p>
            <p className='date'>{date}</p>
          </div>
          <div className='review_text'>
            <p>{review}</p>
          </div>


        </div>
        <div className='like_box'>
          <button><img src="./images/Event_info/btn_like.svg" alt="愛心按鈕" /></button>
          <p className='like_num'>{like_num}</p>
        </div>
      </div>
    </div>
  )
}


export default Review_card

