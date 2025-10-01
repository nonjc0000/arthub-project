import React, { useState } from 'react'
import { Link } from 'react-router-dom'


const Find_type_card = ({ name, date, time, tag, desc, district, imgUrl }) => {
    const [isLiked, setIsLiked] = useState(false);
   
    const handleLike = () => {
        if (isLiked) {
            setIsLiked(false);
        } else {
            setIsLiked(true);
        }
    };


    return (
        <div className='find_type_card'>
            <Link to='/Event_info'>
                {/* 使用 inline style 設定背景圖片 */}
                <div
                    className='find_type_card_wrap'
                    style={{
                        backgroundImage: `url(${imgUrl})`
                    }}
                >
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
