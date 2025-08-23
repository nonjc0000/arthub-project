import React from 'react'
import My_footprint_card from '../components/My_footprint_card'

const My_footprint = () => {
  return (
    <section className='my_footprint_container'>
        <h1 className='titleBox_h1'>
          <img className='titleBox' src="../images/titlebox/my_footprint_titlebox.svg" alt='我的足跡My Footprints' />
        </h1>

    <div className="hr_square_deco">
        
    </div>

<section className="footprint_content_box">

    <aside className="user_sidebar">
        <div className='sidebar_item'>
            <button></button>
            <p>我的足跡</p>
        </div>
        <div className='sidebar_item'>
            <button></button>
            <p>訊息通知</p>
        </div>
        <div className='sidebar_item'>
            <button></button>
            <p>訂單管理</p>
        </div>

    </aside>

    <div className="footprint_content">
        <div className='.footprint_content_topbar'></div>

        <div className='.footprint_result'>
            <My_footprint_card/>
            <My_footprint_card/>
            <My_footprint_card/>
            <My_footprint_card/>
            <My_footprint_card/>
        </div>
    </div>

    <aside className="user_sidebar">
        <svg></svg>
    </aside>
</section>






    </section>
  )
}

export default My_footprint