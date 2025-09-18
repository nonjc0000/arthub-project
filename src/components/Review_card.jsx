import React, { useState, useEffect } from 'react'

const Review_card = ({ id, img, name, date, review, like_num, onLikeUpdate }) => {
  // 管理按讚狀態和數量 - 使用傳入的 like_num 作為初始值
  const [likes, setLikes] = useState(parseInt(like_num) || 0);
  const [isLiked, setIsLiked] = useState(false);

  // 當 like_num prop 改變時更新 likes 狀態（用於排序後重新渲染）
  useEffect(() => {
    setLikes(parseInt(like_num) || 0);
  }, [like_num]);

  // 處理愛心按鈕點擊
  const handleLike = () => {
    let newLikeCount;
   
    if (isLiked) {
      // 如果已經按讚，則取消按讚
      newLikeCount = Math.max(0, likes - 1); // 確保不會小於 0
      setIsLiked(false);
    } else {
      // 如果未按讚，則增加按讚
      newLikeCount = likes + 1;
      setIsLiked(true);
    }
   
    setLikes(newLikeCount);
   
    // 通知父組件更新數據（用於排序功能）
    if (onLikeUpdate) {
      onLikeUpdate(id, newLikeCount);
    }
  };

  // 格式化按讚數顯示（如果數字很大可以簡化顯示）
  const formatLikeCount = (count) => {
    if (count >= 1000) {
      return (count / 1000).toFixed(1) + 'K';
    }
    return count.toString();
  };

  return (
    <div className='review_card'>
      <img className='profile_pic' src='./images/blog/avatar.svg' alt={`${name}的頭貼`} />
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
              src={isLiked 
                ? "./images/Event_info/btn_like_active.svg" 
                : "./images/Event_info/btn_like.svg"
              }
              alt="愛心按鈕"
            />
          </button>
          <p className='like_num' aria-label={`${likes} 個讚`}>
            {formatLikeCount(likes)}
          </p>
        </div>
      </div>
    </div>
  )
}

export default Review_card