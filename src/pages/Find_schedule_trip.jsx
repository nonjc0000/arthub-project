import { Link } from "react-router-dom";




const Find_schedule_trip = () => {
  const tripImages = [
    "/images/Find_schedule/trip01.png",
    "/images/Find_schedule/trip02.png",
    "/images/Find_schedule/trip03.png",
  ];




  return (
    <div className="findTrip-container">
      <div className="find_schedule_trip_titlebox">
        <h1 className="titleBox_h1">
          <img
            className="titlebox"
            src="/images/titlebox/north_trip_titlebox.svg"
            alt="北部一日遊"
          />
        </h1>
      </div>
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
  );
};




export default Find_schedule_trip;



