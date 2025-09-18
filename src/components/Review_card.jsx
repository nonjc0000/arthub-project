import React, { useState } from 'react'


const Review_card = ({ id, img, name, date, review, like_num, onLikeUpdate }) => {
  // 管理按讚狀態和數量
  const [likes, setLikes] = useState(parseInt(like_num) || 0);
  const [isLiked, setIsLiked] = useState(false);


  // 處理愛心按鈕點擊
  const handleLike = () => {
    let newLikeCount;
   
    if (isLiked) {
      // 如果已經按讚，則取消按讚
      newLikeCount = likes - 1;
      setIsLiked(false);
    } else {
      // 如果未按讚，則增加按讚
      newLikeCount = likes + 1;
      setIsLiked(true);
    }
   
    setLikes(newLikeCount);
   
    // 通知父組件更新數據（用於排序）
    if (onLikeUpdate) {
      onLikeUpdate(id, newLikeCount);
    }
  };


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
          <button
            className={`like_button ${isLiked ? 'liked' : ''}`}
            onClick={handleLike}
            type="button"
            aria-label={isLiked ? '取消按讚' : '按讚'}
          >
            <img
              src={isLiked ? "./images/Event_info/btn_like_active.svg" : "./images/Event_info/btn_like.svg"}
              alt="愛心按鈕"
            />
          </button>
          <p className='like_num'>{likes}</p>
        </div>
      </div>
    </div>
  )
}


export default Review_card

