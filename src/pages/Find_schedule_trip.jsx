import { Link } from "react-router-dom";
import { useState } from "react";
import schedule from "../data/schedule.json";
import Trip_travelCard from "../components/Find_schedule/Trip_travelCard";


const Find_schedule_trip = () => {
  const [arrSchedule] = useState(schedule);


  const tripImages = [
    "./images/Find_schedule/trip01.png",
    "./images/Find_schedule/trip02.png",
    "./images/Find_schedule/trip03.png",
  ];


  return (
    <div className="findTrip-container">
      <div className="find_schedule_trip_titleBox">
        <h1 className="titleBox_h1">
          <img
            className="trip_titleBox"
            src="/images/titleBox/north_trip_titleBox.svg"
            alt="北部一日遊"
          />
        </h1>
      </div>
      <div className="trip_row">
        <div className="trip-container">
          <div className="staggered-container">
            <div className="staggered-images">
              {tripImages.map((src, index) => (
                <div key={index} className={`image-item image-${index + 1}`}>
                  <img src={src} alt={`華山設計漫遊日 景圖 ${index + 1}`} />
                </div>
              ))}
            </div>
          </div>
        </div>


        <div className="content-section">
          <h1 className="main-title">華山設計漫遊日</h1>
          <p className="subtitle">風格建物 × 咖啡散步 × 文創市集</p>
          <p className="description">
            走進華山文創園區，來一場設計與風格的慢步旅行。從早午餐咖啡展開節奏，逛展覽、市集尋找手作選物，感受城市裡充滿創意的日常片段。
          </p>


          <div className="rating-section">
            <div className="star-rating">
              <span className="star">⭐</span>
              <span className="rating-text">4.8(105)</span>
            </div>
            <span className="participants">200人參加過</span>
          </div>


          <div className="booking-section">
            <span className="price">$800起</span>
            <Link to="/Order" className="btn primary">
              立即訂購
            </Link>
          </div>
        </div>
      </div>
      {/* 中間行程表 */}
      <div className="trip_schedule_container_title">
        <h2>行程介紹</h2>
      </div>
      <div className="trip_schedule_container">
        <div className="trip_schedule_intro">
          <div className="list_time_intro">
            <img src="./images/Find_schedule/gather.png" alt="集合地點" />
            <p>10:00</p>
          </div>
          <div className="list_description_intro">
            <p>捷運善導寺站6號出口集合(捷運站內)</p>
          </div>
          <div className="route_01">
            <img src="./images/Find_schedule/line01.svg" alt="" />
            <p>
              步行<span>7</span>分鐘
            </p>
          </div>
        </div>
        <div className="station_01">
          <div className="list_time">
            <img src="./images/Find_schedule/num01.svg" alt="第一站" />
            <p>10:30</p>
          </div>
          <div className="list_description">
            <h3>在Simple kaffa想用早午餐</h3>
            <p>
              在巷弄中的人氣咖啡館，享受一份精緻早午餐與設計感空間，為一天暖身。
            </p>
          </div>
          <div className="list_images">
            <img src="./images/Find_schedule/food.jpg" alt="" />
          </div>
          <div className="route_02">
            <img src="./images/Find_schedule/line02.svg" alt="" />
            <p>
              步行<span>3</span>分鐘
            </p>
          </div>
        </div>
        <div className="station_02">
          <div className="list_images">
            <img src="./images/Find_schedule/north_travel01.jpg" alt="" />
          </div>
          <div className="list_time">
            <img src="./images/Find_schedule/num02.svg" alt="第二站" />
            <p>12:00</p>
          </div>
          <div className="list_description">
            <h3>華山1914文化創意園區設計巡禮</h3>
            <p>
              參觀當期展覽，從插畫、建築到永續生活，汲取靈感，漫步老菸廠之間。
            </p>
          </div>
          <div className="list_description_extra">
            <h3>華山1914文化創意園區小介紹</h3>
            <p>
              前身為台北酒廠，為臺北市市定古蹟，在1999年起成為提供給藝文界、
              <br />
              非營利組織及個人使用的藝術展覽、音樂表演等文化活動場地，
              <br />
              成為臺北市西區重要的藝文展演場所。
            </p>
          </div>
          <div className="route_03">
            <img src="./images/Find_schedule/line03.svg" alt="" />
            <p>
              步行<span>1</span>分鐘
            </p>
          </div>
        </div>
        <div className="station_03">
          <div className="list_images">
            <img src="./images/Find_schedule/market.jpg" alt="" />
          </div>
          <div className="list_time">
            <img src="./images/Find_schedule/num03.svg" alt="第三站" />
            <p>14:00</p>
          </div>
          <div className="list_description">
            <h3>華山好市_市集</h3>
            <p>
              逛逛限定的風格市集，發掘香氛、手作與原創選物，還有職人故事等你聽。
            </p>
          </div>
          <div className="route_04">
            <img src="./images/Find_schedule/line04.svg" alt="" />
            <p>
              坐車<span>7</span>分鐘
            </p>
          </div>
        </div>
        <div className="station_04">
          <div className="list_time">
            <img src="./images/Find_schedule/num04.svg" alt="第一站" />
            <p>16:00</p>
          </div>
          <div className="list_description">
            <h3>忠泰美術館</h3>
            <p>最後一站文藝補充，欣賞藝術家的創作</p>
          </div>
          <div className="list_images">
            <img src="./images/Find_schedule/museum01.jpg" alt="" />
            <img src="./images/Find_schedule/museum02.jpg" alt="" />
          </div>
          <div className="route_05">
            <img src="./images/Find_schedule/line05.svg" alt="" />
            <p>
              坐車<span>5</span>分鐘
            </p>
          </div>
        </div>
        <div className="station_05">
          <div className="list_time">
            <img src="./images/Find_schedule/num05.svg" alt="第一站" />
            <p>18:00</p>
          </div>
          <div className="list_description">
            <h3>遼寧街夜市</h3>
            <p>用在地夜市結束這趟旅程，從食物中補充能量與情感記憶。</p>
          </div>
        </div>
        <div className="deco_line">
          <img src="./images/Find_schedule/deco_line.svg" alt="" />
        </div>
      </div>
      {/* 下方其他相關行程 */}
      <div className="trip_card_container_title">
        <h3>相關行程</h3>
      </div>
      <div className="trip_card_container">
        {arrSchedule.map((schedule) => (
          <Trip_travelCard {...schedule} key={schedule.id} />
        ))}
      </div>
    </div>
  );
};


export default Find_schedule_trip;
