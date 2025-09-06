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
            <div className='event_box'>
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
          <h2 className='section_title'>訂購人資訊</h2>
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
          <h2 className='section_title'>付款方式</h2>
          <fieldset>
            <div className='form_input'>
              <input type="radio" name="payment_method" id="ATM" value={'ATM'} />
              <label htmlFor="ATM">轉帳ATM</label>
            </div>

            <div className='form_input'>
              <input type="radio" name="payment_method" id="credit_card" value={'credit_card'} />
              <label htmlFor="credit_card">信用卡／金融卡</label>
            </div>

            <div className='form_input'>
              <input type="radio" name="payment_method" id="line_pay" value={'line_pay'} />
              <label htmlFor="line_pay">LINE PAY</label>
            </div>
          </fieldset>
        </div>

        <div className='receipt'>
          <h2 className='section_title'>電子發票、收據</h2>
          <div className='content_box'>
            <div className='form_input'>
              <label htmlFor="receipt_type">代收轉付電子收據類型</label>
              <input type="text" id='receipt_type' />
            </div>
          </div>
        </div>

        <div className='sum_checkout'>
          <div className='text'>
            <p>1件商品合計</p>
            <p>TWD 890</p>
          </div>
          <button className='checkout_btn'>確認付款</button>
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