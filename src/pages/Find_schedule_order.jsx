import React, { useState } from 'react'

const Find_schedule_order = () => {

  return (
    <div className='Find_schedule_order_wrap'>
      <div className='breadcrumb'>
        <span>華山設計漫遊日</span>
        <span> &gt; </span>
        <span>填寫資料與付款</span>
        <span> &gt; </span>
        <span className='current'>訂購完成</span>
      </div>

      <form id='order_form' name='order_form' method="post">

        <div className='payment_content'>
          <h2 className='section_title'>付款內容</h2>
          <div className='content_box'>
            <figure>
              <img src="./images/Find_schedule_order/event1.jpg" alt="華山設計漫遊日" />
            </figure>
            <div className='event_info'>
              <h3>華山設計漫遊日</h3>
              <div className='event_meta'>
                <span>📅 2025/07/24</span>
                <span>⏰ 14:20</span>
                <span>👥 1</span>
                <span>TWD 890</span>
              </div>
            </div>
            <div className='expected_amount'>
              <span>應付金額</span>
              <span className='price'>TWD 890</span>
            </div>

            <div className='checkout_amount'>
              <span>結帳金額</span>
              <span className='price'>TWD 890</span>
            </div>
          </div>
        </div>

        <div className='customer_info'>
          <h2>訂購人資訊</h2>
          <div className='content_box'>
            <div className='form_input'>
              <label htmlFor="first_name">名字</label>
              <input type="text" id='first_name' />
            </div>

            <div className='form_input'>
              <label htmlFor="last_name">姓氏</label>
              <input type="text" id='last_name' />
            </div>

            <div className='form_input'>
              <label htmlFor="location">國家/地區</label>
              <input type="text" id='location' />
            </div>

            <div className='form_input'>
              <label htmlFor="tel">聯絡電話</label>
              <input type="tel" id='tel' />
            </div>

            <div className='form_input'>
              <label htmlFor="email">電子郵件信箱</label>
              <input type="email" id='email' />
            </div>
          </div>
        </div>

        <div className='payment_method'>
          <fieldset>
            <div className='form_input'>
              <label htmlFor=""></label>
              <input type="radio" name="" id="" />
            </div>

            <div className='form_input'>
              <label htmlFor=""></label>
              <input type="radio" name="" id="" />
            </div>

            <div className='form_input'>
              <label htmlFor=""></label>
              <input type="radio" name="" id="" />
            </div>
          </fieldset>
        </div>

        <div className='receipt'>
        </div>

        <div className='sum_checkout'>
        </div>

      </form>

      {/* 裝飾元素 */}
      <div className='decoration_box'>
        <figure className='deco1'>
          <img src="./images/decorations/deco-money.svg" alt="金錢裝飾" />
        </figure>
        <figure className='deco2'>
          <img src="./images/decorations/deco-crocodile_shopping.svg" alt="購物鱷魚裝飾" />
        </figure>
      </div>
    </div>
  )
}

export default Find_schedule_order