import React from 'react'

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

      <form id='order_form' name='order_form' action="" method="post">
        <div className='payment_content'></div>

        <div className='customer_info'>
          <input type="text" /><input type="text" /><input type="text" /><input type="text" /><input type="text" />
        </div>

        <fieldset className='payment_method'>
          <input type="radio" name="" id="" /><input type="radio" name="" id="" /><input type="radio" name="" id="" />
        </fieldset>

        <div className='receipt'>
          <input type="text" /><input type="text" />
        </div>

        <div className='sum_checkout'></div>


      </form>
    </div>
  )
}

export default Find_schedule_order