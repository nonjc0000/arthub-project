import React, { useState } from 'react'
import { Link } from 'react-router-dom'






const Find_type_card = ({ id, name, date, time, tag, desc, district }) => {
    // 處理愛心按鈕點擊
      const [isLiked, setIsLiked] = useState(false);
    const handleLike = () => {
        let newLikeCount;


        if (isLiked) {
            setIsLiked(false);
        } else {
            setIsLiked(true);
        }


        setLikes(newLikeCount);


       
    };
    return (
        <div className='find_type_card'>
            <Link to='/Event_info'>
                <div className='find_type_card_wrap'>
                    <div className='top'>
                        <div className='date'>
                            <figure>
                                <img src="./images/Find_type/icon_date.svg" alt="日曆裝飾圖片" />
                                <p>{date}</p>
                            </figure>
                            <figure>
                                <img className='icon_time' src="./images/Find_type/icon_time.svg" alt="時間裝飾圖片" />
                                <p>{time}</p>
                            </figure>
                        </div>
                        {/* <button
                            className={`like_button ${isLiked ? 'liked' : ''}`}
                            onClick={handleLike}
                            type="button"
                            aria-label={isLiked ? '取消按讚' : '按讚'}
                        >
                            <img
                                src={isLiked ? "./images/Event_info/btn_like_active.svg" : "./images/Event_info/btn_like.svg"}
                                alt="愛心按鈕"
                            />
                        </button> */}
                    </div>
                    <div className='find_type_tag_box'>
                        <div className='tag_wrapper'>
                            <button>#{district}</button>
                            {tag.map((singleTag, index) => (
                                <button key={index}>#{singleTag}</button>
                            ))}
                        </div>
                    </div>
                </div>
                <div className='find_type_card_desc'>
                    <h2>{name}</h2>
                    <p>{desc}</p>
                </div>
            </Link>
        </div>
    )
}




export default Find_type_card





