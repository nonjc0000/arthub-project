import React from 'react'
import { Link } from 'react-router-dom'




const Event_info = () => {
  return (
    <main className='event_info_main'>


          {/* 標題 */}
          <h1 className='titleBox_h1'>
            <img className='titleBox' src="./images/titlebox/find_type_titlebox.svg" /* style={{ width: '510px' }} */ alt='市集分類Market Type' />
          </h1>
      <article className='info_box'>


        {/* 市集基本資訊 */}
        <section className='event_info_container'>




          {/* 市集全部資訊 */}
          <div className='info_box'>


            {/* 照片區 */}
            <div className='pic_box'>
             
              {/* 大圖 */}
              <div className='main_pic'>
                <img src="./images/Find_schedule/east_slide_01.jpg" alt="市集照片" />
              </div>


              {/* 縮圖 */}
              <div className='thumbnail'>
                <img src="./images/Find_schedule/east_slide_02.jpg" alt="市集照片" />
                <img src="./images/Find_schedule/east_slide_03.jpg" alt="市集照片" />
                <img src="./images/Find_schedule/east_slide_04.jpg" alt="市集照片" />
                <img src="./images/Find_schedule/east_slide_05.jpg" alt="市集照片" />
              </div>


            </div>


            {/* 市集名稱&時間&tag */}
            <div className='info_etc'>


              {/* 名稱 */}
              <h3 className='event_name'>台北-閃亮生活</h3>


              {/* 時間 */}
              <div className='time&place'>
                <p>活動時間</p>
                <p>2025/07/18</p>
              </div>




              {/* 位置 */}
              <div className='time&place'>
                <p>活動位置</p>
                <p>西門紅樓</p>
                <img src="./images/Event_info/icon_point.svg" alt="地點裝飾" />
              </div>


              {/* 市集tag */}
              <div className='type_box'>
                <title>市集類型</title>
                <div className="tag_box">
                  <Link to='/Find_type'>手做體驗</Link>
                  <Link to='/Find_type'>有機農產</Link>
                  <Link to='/Find_type'>植栽花藝</Link>
                  <Link to='/Find_type'>二手商品</Link>
                  <Link to='/Find_type'>流動餐車</Link>
                  <Link to='/Find_type'>服飾配件</Link>
                  <Link to='/Find_type'>有機農產</Link>
                  <Link to='/Find_type'>有機農產</Link>
                </div>
              </div>


            </div>


            {/* 攤位地圖&攤位登記按鈕 */}
            <div className='stall_btn_box'>
              <Link to='/Stall_map'><img src="./images/Event_info/btn_stallMap.svg" alt="攤位地圖" /><span>攤位地圖</span></Link>
              <Link to='/Stall_register'><img src="./images/Event_info/btn_stallRegister.svg" alt="輸入攤位資訊" /><span>輸入攤位資訊</span><span>(商家專屬)</span></Link>
            </div>
          </div>
        </section>


        {/* 市集詳細內容 */}
        <section></section>


        {/* 市集評論區 */}
        <section></section>
      </article>
    </main>
  )
}


export default Event_info

