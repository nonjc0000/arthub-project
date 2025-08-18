import React from 'react'


const Find_type = () => {

  function Card() {
    return (
      <div className='card'>
        <div className='cardHeader'>
          <div className='cardTop'>
            <div className='cardDate'>
              <figure>
                <img src="src\images\icon_date.svg" alt="" />
                <p>07/14-07/15</p>
              </figure>
              <figure>
                <img src="src\images\icon_time.svg" alt="" />
                <p>12:00~20:00</p>
              </figure>
            </div>
            {/* <figure className='likeBtn'>
              <img src="src\images\likeBtn_fill.svg" alt="" />
            </figure> */}
          </div>

          <div className='cardTag'>
            <span>#地區</span>
            <span>#類型</span>
            <span>#類型</span>
          </div>
        </div>
        <div className='cardInfo'>
          <h5 className='cardTitle'>
            Funtasty 有趣市集
          </h5>
          <p className='cardText'>
            品味生活、豐富有趣、寵物友善，有趣團隊集合理念一致、充滿熱情的職人，打造一個凝聚群體共好的聚落。支持餐車文化展現年輕世代活力和多元性，竭誠為民眾帶來具質感的市集體驗。
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className='findType'>
      <div className='title'>找類型Search</div>
      <div className='searchTable'>
        <search className='search'>
          <input type="search" />
          <button type='submit'>搜尋</button>
        </search>

        <div className='city'>
          <select name="" id=''>
            <option value="">縣市</option>
            <option value="">基隆市</option>
            <option value="">臺北市</option>
            <option value="">新北市</option>
            <option value="">桃園市</option>
            <option value="">新竹市</option>
            <option value="">新竹縣</option>
            <option value="">苗栗縣</option>
            <option value="">臺中市</option>
            <option value="">彰化縣</option>
            <option value="">南投縣</option>
            <option value="">雲林縣</option>
            <option value="">嘉義市</option>
            <option value="">嘉義縣</option>
            <option value="">臺南市</option>
            <option value="">高雄市</option>
            <option value="">屏東縣</option>
            <option value="">臺東縣</option>
            <option value="">花蓮縣</option>
            <option value="">宜蘭縣</option>
          </select>
        </div>

        <div className='area'>
          <select name="" id=''>
            <option value="">地區</option>
          </select>
        </div>



        <div className='Select'>
          <label>篩選</label>
          <div className='btn'>
            <button>所有時間</button>
            <button>現在活動</button>
            <button>當週活動</button>
            <button>篩選日期</button>
          </div>

        </div>

        <div className='type'>
          <select name="" id="">
            <option value="">活動類型</option>
            <option value="">#</option>
            <option value="">#</option>
            <option value="">#</option>
            <option value="">#</option>
            <option value="">#</option>
            <option value="">#</option>
          </select>
        </div>


      </div>
      <div className='event'>
        <Card />
      </div>
    </div>
  )
}

export default Find_type