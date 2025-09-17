import Button from '../components/Button';
import PageTop from '../components/PageTop';
import HomeCard from '../components/HomeCard';
import { Link } from 'react-router-dom';
import ScrollToTop from '../components/ScrollToTop'
import Clarity from '@microsoft/clarity';


const Home = () => {

  // 熱點分析
  const projectId = "tc4d2awk9v";
  Clarity.init(projectId);
  Clarity.identify('');


  return (
    <>
      <ScrollToTop />
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
                    <div>
                      <a className='home-type-one' href="#">
                        <img src="./images/home/home-pic-01.png" alt="種類圖01" />
                        <div class="text">
                          <p>美食<br /><span>Food</span></p>
                        </div>
                      </a>
                    </div>
                    <div className='home-type-two'>
                      <a href="#">
                        <img src="./images/home/home-pic-02.png" alt="種類圖02" />
                        <div class="text-two">
                          <p>植物<br /><span>Plant</span></p>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div className='home-type-three'>
                    <a href="#">
                      <img src="./images/home/home-pic-03.png" alt="種類圖03" />
                      <div class="text-three">
                        <p>生活小品<br /><span>Daily trifles</span></p>
                      </div>
                    </a>
                  </div>
                </div>
                <div className='home-pic-se'>
                  <div className='type-img-fo'>
                    <div className='home-type-four'>
                      <a href="#">
                        <img src="./images/home/home-pic-04.png" alt="種類圖04" />
                        <div class="text-four">
                          <p>服飾<br /><span>Apparel</span></p>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div className='type-img'>
                    <div className='home-type-five'>
                      <a href="#">
                        <img src="./images/home/home-pic-05.png" alt="種類圖05" />
                        <div class="text-five">
                          <p>手做飾品<br /><span>Accessory</span></p>
                        </div>
                      </a>
                    </div>
                    <div className='home-type-six'>
                      <a href="#">
                        <img src="./images/home/home-pic-06.png" alt="種類圖06" />
                        <div class="text-six">
                          <p>手繪商品<br /><span>Hand drawn items</span></p>
                        </div>
                      </a>
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
                    <img src="./images/home/普通2魚.svg" alt="普通2魚" />
                  </div>
                  <img src="./images/home/左下圖片.png" alt="左下圖片.svg" />
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
                  <Button />
                </div>
              </div>
            </div>
            {/* 底下的路 */}
            <div className='home-road'>
              <div className='home-sign'>
                <img src="./images/home/路牌插圖.svg" alt="路牌插圖" />
              </div>
            </div>
          </div>
          <PageTop />
        </section>
      </main>
    </>
  )
}




export default Home









