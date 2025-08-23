import React from 'react'

const Find_type_card = () => {
  return (
    <div className='find_type_card'>
        <a href="#">
            <div find_type_card_wrap>
                <figure>
                    <img src="public\images\icon_date.svg" alt="" />
                    <p>07/14-07/15</p>
                </figure>
                <figure>
                    <img src="public\images\icon_time.svg" alt="" />
                    <p>12:00~20:00</p>
                </figure>
                <img src="public\images\likeBtn_fill.svg" alt="" />
                <div className='find_type_tag_box'>
                    <button>#地區</button>
                    <button>#類別</button>
                    <button>#類別</button>
                </div>
                <div className='find_type_card_desc'>
                    <h2>Funtasty有趣市集</h2>
                    <p>品味生活、豐富有趣、寵物友善，有趣團隊集合理念一致、充滿熱情的職人，打造一個凝聚群體共好的聚落。支持餐車文化展現年輕世代活力和多元性，竭誠為民眾帶來具質感的市集體驗。</p>
                </div>
            </div>
        </a>
    </div>
  )
}

export default Find_type_card