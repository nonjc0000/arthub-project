import React from 'react'
import Find_map_card from '../components/Find_map_card'
import Button from '../components/Button'

const Find_map = () => {
  return (
    <>
      <section className='find_map_main'>
        <h1 className='titleBox_h1'>
          <img className='titleBox' src="../images/titlebox/find_map_titlebox.svg" /* style={{ width: '510px' }} */ alt='市集地圖Market Map' />
        </h1>

        <div className='find_map_content_box'>

          <div className='map_search-box'>
            <form name="map_search_filter" id="map_search_filter" method="post" accept-charset="UTF-8">
              {/* 選擇縣市 */}
              <select name="city" id="city">
                <option value="">選擇縣市</option>
                <option value="臺北市">臺北市</option>
                <option value="新北市">新北市</option>
              </select>

              {/* 選擇地區 */}
              <select name="district" id="district">
                <option value="">選擇地區</option>
                <option value="大安區">大安區</option>
                <option value="南港區">南港區</option>
              </select>

              {/* 關鍵字搜尋 */}
              <input type="search" name="search" id="search" size="15" />
              <input type="submit" value="搜尋" />
            </form>

            <div className='map_search_result'>
              <Find_map_card />
              <Find_map_card />
              <Find_map_card />
            </div>
          </div>

          <div className='map_api'>

          </div>

        </div>

        <div className='map_deco-box'>
          <figure className='map_deco1'>
            <img src="../images/decorations/deco-road_sign.svg" alt="路牌裝飾" />
          </figure>

          <figure className='map_deco2'>
            <img src="../images/decorations/deco-raisehand_allegator.svg" alt="" />
          </figure>
        </div>

      </section>


    </>
  )
}

export default Find_map