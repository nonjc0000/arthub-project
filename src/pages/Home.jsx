import Button from '../components/Button';
import PageTop from '../components/PageTop';
import HomeCard from '../components/HomeCard';
import { Link } from 'react-router-dom';
import ScrollToTop from '../components/ScrollToTop';
import { useState } from 'react';






const Home = () => {


  const [birdPosition, setBirdPosition] = useState({ x: 20, y: 20 });


  const handleClick = (e) => {
    // 獲取點擊位置相對於視窗的百分比
    const x = (e.clientX / window.innerWidth) * 100;
    const y = (e.clientY / window.innerHeight) * 100;
    setBirdPosition({ x, y });
  };






  return (
    <>
      <ScrollToTop />
      {/* 首頁第一區塊 */}
      <main onClick={handleClick}>
        <section className='home-bg'>
          <div className='home-bird' style={{
            left: `${birdPosition.x}%`,
            top: `${birdPosition.y}%`,
          }}>
              <img src="./images/cursor.gif" alt="cursor" />
          </div>


          <div className='home-wrap'>
            <div className='home-top'>
              <div className='home-heading'>
                <h2>周末不知道去哪?<br />就從一場市集開始吧!</h2>
                <img className='arrow' src="./images/home/home_arrow.svg" alt="首頁箭頭" />
              </div>
              <div className='stall-wrap'>
                <div className='stall-item'>
                  <div className='stall-first'>
                    <Link to="/Find_type"><img src="./images/home/home-find_type.svg" alt="找類型攤位" /></Link>
                  </div>
                  <div className='stall-second'>
                    <Link to="/Find_map"><img src="./images/home/home-find_map.svg" alt="找地圖攤位" /></Link>
                  </div>
                  <div className='stall-third'>
                    <Link to="/Find_schedule"><img src="./images/home/home-find-schedule.svg" alt="找行程攤位" /></Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* 日期 */}
        <section>
          <div className='home-date'>
            <div className="date-box">
              <p>7</p>
              <div className='slash'></div>
              <div className='date-item'>
                <p>22</p>
                <p className="weekday">TUE.</p>
                <p className='weather'><img src="./images/home/cloudy-day.png" alt="陰天" /></p>
                <p className='temptemperature'>25°C<span className='situation'>多雲</span></p>
              </div>
            </div>
            <div className='home-dec'>
              <img className='home-dec-im' src="./images/home/home-decoration-1.svg" alt="" />
            </div>
          </div>
        </section>
        {/* 首頁第二區塊 */}
        <section>
          <div className='home-hot-wrap'>
            <div className='home-drink'><img src="./images/home/drink.svg" alt="drink" /></div>
            <div className='home-ring'><img src="./images/home/ring.svg" alt="ring" /></div>
            <div className='home-hat'><img src="./images/home/hat.svg" alt="hat" /></div>
            <div className='home-book'><img src="./images/home/book.svg" alt="book" /></div>
            <div className='home-dec-im-tw'><img src="./images/home/home-decoration-2.svg" alt="home-decoration-2.svg" /></div>
            <div className='home-hot'>
              <h3>熱門主題</h3>
              <p>Popular subject</p>
            </div>
            {/* 圖片區塊 */}
            <div className='pic-wrap'>
              <div className='home-pic'>
                <div className='home-pic-fsb'>
                  <div className='home-pic-item'>
                    <div className='home-type-one'>
                      <Link to="/Find_type?type=美食飲品"
                        onClick={() => { sessionStorage.setItem('navigatedFromHome', 'true'); }}>
                        <img src="./images/home/home-pic-01.png" alt="種類圖01" />
                        <div className="text">
                          <p>美食飲品<br /><span>Food and Beverages</span></p>
                        </div>
                      </Link>
                    </div>
                    <div className='home-type-two'>
                      <Link to="/Find_type?type=居家療育"
                        onClick={() => { sessionStorage.setItem('navigatedFromHome', 'true'); }}>
                        <img src="./images/home/home-pic-02.png" alt="種類圖02" />
                        <div className="text-two">
                          <p>居家療育<br /><span>Home therapy</span></p>
                        </div>
                      </Link>
                    </div>
                  </div>
                  <div className='home-type-three'>
                    <Link to="/Find_type?type=生活風格"
                      onClick={() => { sessionStorage.setItem('navigatedFromHome', 'true'); }}>
                      <img src="./images/home/home-pic-03.png" alt="種類圖03" />
                      <div className="text-three">
                        <p>生活風格<br /><span>Daily trifles</span></p>
                      </div>
                    </Link>
                  </div>
                </div>
                <div className='home-pic-se'>
                  <div className='type-img-fo'>
                    <div className='home-type-four'>
                      <Link to="/Find_type?type=布作服飾"
                        onClick={() => { sessionStorage.setItem('navigatedFromHome', 'true'); }}>
                        <img src="./images/home/home-pic-04.png" alt="種類圖04" />
                        <div className="text-four">
                          <p>布作服飾<br /><span>Handmade Fashion</span></p>
                        </div>
                      </Link>
                    </div>
                  </div>
                  <div className='type-img'>
                    <div className='home-type-five'>
                      <Link to="/Find_type?type=飾品配件"
                        onClick={() => { sessionStorage.setItem('navigatedFromHome', 'true'); }}>
                        <img src="./images/home/home-pic-05.png" alt="種類圖05" />
                        <div className="text-five">
                          <p>飾品配件<br /><span>Accessory</span></p>
                        </div>
                      </Link>
                    </div>
                    <div className='home-type-six'>
                      <Link to="/Find_type?type=插畫紙品"
                        onClick={() => { sessionStorage.setItem('navigatedFromHome', 'true'); }}>
                        <img src="./images/home/home-pic-06.png" alt="種類圖06" />
                        <div className="text-six">
                          <p>插畫紙品<br /><span>Hand drawn items</span></p>
                        </div>
                      </Link>
                    </div>
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
          <div>
            <div className='home-blog-item'>
              <div className='home-left-img'>
                <figure>
                  <div className='bear'>
                    <img src="./images/home/bear.svg" alt="bear" />
                  </div>
                  <div className='crocodile'>
                    <img src="./images/home/crocodile-pic.svg" alt="普通2魚" />
                  </div>
                  <img src="./images/home/Left-bottom-pic.png" alt="左下圖片.svg" />
                </figure>
              </div>
              <div className='home-right-blog'>
                <div className="pic-dog">
                  <img src="./images/home/person_or_dog.svg" alt="person_or_dog" />
                </div>
                <div className='home-right-txt'>
                  <h3>部落格</h3>
                  <p>Blog</p>
                </div>
                <div className='homecard-ob'>
                  <HomeCard />
                </div>
                <div className='home-button'>
                  <Link to="/blog">
                    <Button />
                  </Link>
                </div>
              </div>
            </div>
            {/* 底下的路 */}
            <div className='home-road'>
              <div className='home-sign'>
                <img src="./images/home/Road-drawn.svg" alt="路牌插圖" />
              </div>
            </div>
          </div>
          <PageTop />
          <div className='home-road-independ'>
            <figure>
              <img src="./images/home/Home-road.svg" alt="Home-road" />
            </figure>
          </div>
        </section>
      </main>
    </>
  )
}
















export default Home













































