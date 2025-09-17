import React from 'react'
import { Link } from 'react-router-dom'




const Find_type_card = ({id, name, date, time, tag,desc,district}) => {
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
                        <button className='like_button'>
                            <img src="./images/Find_type/likeBtn_fill.svg" alt="" />
                        </button>
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





