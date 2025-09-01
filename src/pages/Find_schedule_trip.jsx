import { Link } from "react-router-dom"




const Find_schedule_trip = () => {
  return (
    <div>
      <div className="find_schedule_titlebox">
        <h1 className="titleBox_h1">
          <img
            className="titlebox"
            src="./images/titlebox/north_trip.svg"
            alt="活動行程"
          />
        </h1>
      </div>
      {/* 內容區域 */}
      <div className="content-section">
        <h1 className="main-title">華山設計漫遊日</h1>


        <p className="subtitle">
          風格建物 × 咖啡散步 × 文創市集
        </p>


        <p className="description">
          走進華山文創園區，來一場設計與風格的慢步旅行。
          從早午餐咖啡展開節奏，逛展覽、市集尋找手作選物，
          感受城市裡韓式文充滿創意設的日常片段。
        </p>


        <div className="rating-section">
          <div className="star-rating">
            <span className="star">⭐</span>
            <span className="rating-text">4.8(105)</span>
          </div>
          <span className="participants">200人參加過</span>
        </div>


        <div className="booking-section">
          <span className="price">NT $800起</span>
          <Link to ="/Order">
          <button > 立即訂購 </button>
          </Link>
        </div>
      </div>
    </div>
  )
}


export default Find_schedule_trip

