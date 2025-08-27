import React from 'react'
// import "../sass/all.scss";

const Home = () => {
  return (
    <>
      {/* 首頁第一區塊 */}
      <main>
        <section className='home-bg'>
          <div className='home-top home-wrap'>
            <div className='home-heading'>
              <h2>周末不知道去哪?<br />就從一場市集開始吧!</h2>
              <img className='arrow' src="./images/home/home_arrow.svg" alt="首頁箭頭" />
            </div>
            <div className='stall-wrap'>
              <div className='stall-item'>
                <img className='stall-first' src="./images/home/home-find_type.svg" alt="找類型攤位" />
                <img className='stall-second' src="./images/home/home-find_map.svg" alt="找地圖攤位" />
                <img className='stall-third' src="./images/home/home-find-schedule.svg" alt="找行程攤位" />
              </div>
              <div>
                <div className="date-box">
                  <p className="month">07</p>
                  <p className="slash"></p>
                  <p className="day">22</p>
                  <p className="weekday">TUE.</p>
                  <p className='weather'><img src="./images/home/陰天.svg" alt="陰天" /></p>
                  <p className='temptemperature'>25°C</p>
                  <p className='situation'>多雲</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* 首頁第二區塊 */}
        <section>
          <div className='container-home'>
            <div className='home-hot'>
              <h3>熱門主題</h3>
              <p>Popular subject</p>
            </div>
            {/* 圖片區塊 */}
            <div>
              <div>
                <div>
                  
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export default Home