import React from 'react'
import { Link } from 'react-router-dom'

const Find_type_card = () => {
    return (
        <div className='find_type_card'>
            <Link to='/stall_map'>
                <div className='find_type_card_wrap'>
                    <div className='top'>
                        <div className='date'>
                            <figure>
                                <img src="./images/Find_type/icon_date.svg" alt="日曆裝飾圖片" />
                                <p>07/14-07/15</p>
                            </figure>
                            <figure>
                                <img src="./images/Find_type/icon_time.svg" alt="時間裝飾圖片" />
                                <p>12:00~20:00</p>
                            </figure>
                        </div>
                        <button className='like_button'>
                            <img src="./images/Find_type/likeBtn_fill.svg" alt="" />
                        </button>
                    </div>
                    <div className='find_type_tag_box'>
                        <button>#地區</button>
                        <button>#類別</button>
                        <button>#類別</button>
                    </div>
                </div>
                <div className='find_type_card_desc'>
                    <h2>Funtasty有趣市集</h2>
                    <p>品味生活、豐富有趣、寵物友善，有趣團隊集合理念一致、充滿熱情的職人，打造一個凝聚群體共好的聚落。支持餐車文化展現年輕世代活力和多元性，竭誠為民眾帶來具質感的市集體驗。</p>
                </div>
            </Link>
        </div>
    )
}

export default Find_type_card