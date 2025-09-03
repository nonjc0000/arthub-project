import React from 'react'
import Button from '../components/Button'


const Home = () => {


  return (
    <>
      {/* 首頁第一區塊 */}
      <main>
        <section className='home-bg'>
          <div className='home-wrap'>
            <div className='home-top'>
              <div className='home-heading'>
                <h2>周末不知道去哪?<br />就從一場市集開始吧!</h2>
                <img className='arrow' src="./images/home/home_arrow.svg" alt="首頁箭頭" />
              </div>
              <div className='stall-wrap'>
                <div className='stall-item'>
                  <div className='stall-first'>
                    <a href="#"><img src="./images/home/home-find_type.svg" alt="找類型攤位" /></a>
                  </div>
                  <div className='stall-second'>
                    <a href="#"><img src="./images/home/home-find_map.svg" alt="找地圖攤位" /></a>
                  </div>
                  <div className='stall-third'>
                    <a href="#"><img src="./images/home/home-find-schedule.svg" alt="找行程攤位" /></a>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="date-box">
                <p>7</p>
                <div className='slash'></div>
                <div className='date-item'>
                  <p>22</p>
                  <p className="weekday">TUE.</p>
                  <p className='weather'><img src="./images/home/陰天.svg" alt="陰天" /></p>
                  <p className='temptemperature'>25°C<span className='situation'>多雲</span></p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* 首頁第二區塊 */}
        <section>
          <div>
            <div className='home-hot'>
              <h3>熱門主題</h3>
              <p>Popular subject</p>
            </div>
            {/* 圖片區塊 */}
            <div className='pic-wrap'>
              <div className='home-pic'>
                <div className='home-pic-fsb'>
                  <div className='home-pic-item'>
                    <a href="#"><img className='type-img-one' src="./images/home/home-pic-01.svg" alt="種類圖01" /></a>
                    <a href="#"><img className='type-img-tw' src="./images/home/home-pic-02.svg" alt="種類圖02" /></a>
                  </div>
                  <div className='type-img-th'>
                    <a href="#"><img src="./images/home/home-pic-03.svg" alt="種類圖03" /></a>
                  </div>
                </div>
                <div className='home-pic-se'>
                  <div className='type-img-fo'>
                    <a href="#"><img src="./images/home/home-pic-04.svg" alt="種類圖04" /></a>
                  </div>
                  <div>
                    <a href="#"><img className='type-img' src="./images/home/home-pic-05.svg" alt="種類圖05" /></a>
                    <a href="#"><img src="./images/home/home-pic-06.svg" alt="種類圖06" /></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* 第三區塊 */}
        <section>
          <div className='home-blog'>
            <h3>這不是一張單純的活動地圖，<br />而是你與生活靈感之間的導航線。</h3>
          </div>
          <div className='home-blog-item'>
            <div className='home-left-img'>
              <img src="./images/home/左下圖片.svg" alt="左下圖片.svg" />
            </div>
            <div className='home-right-blog'>
              <div className='home-right-txt'>
                <h3>部落格</h3>
                <p>Blog</p>
              </div>
            </div>
          </div>
          <div className='home-button'>
            <Button />
          </div>
        </section>
      </main>
    </>
  )
}


export default Home

