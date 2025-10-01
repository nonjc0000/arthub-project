import TravelCard from "../components/Find_schedule/TravelCard";
import { useEffect, useState } from "react";
import ScrollToTop from "../components/ScrollToTop";
import PageTop from "../components/PageTop"




const arrData = [
  {
    image: "./images/Find_schedule/west_slide_02.jpg",
    title: "審計新村 × 草悟道文創散步｜設計靈感與綠意漫步",
    description:
      "從審計新村市集出發，逛逛文創小店、選物品牌，再延伸至草悟道，午後到國美館欣賞展覽，晚上回到柳川或美村路小店小酌，文青氣息滿滿的一日。",
    rating: "4.5⭐ 非常好 (5)",
    price: "NT $890 起",
    url: "/TripBookingPage",
  },
  {
    image: "./images/Find_schedule/west_slide_05.jpg",
    title: "台中文學館市集 × 綠光聚落｜老宅裡的創意風景",
    description:
      "在台中文學館舉辦的市集，感受人文氛圍，之後步行到綠光計劃聚落，在老宅裡的咖啡館和設計展間穿梭，最後可延伸到忠信市場夜間展演，體驗台中文創的多層次。",
    rating: "4.7⭐ 超讚 (8)",
    price: "NT $1200 起",
    url: "/TripBookingPage",
  },
  {
    image: "./images/Find_schedule/west_slide_01.jpg",
    title: "勤美誠品 × 草悟系市集｜城市核心的藝文生活",
    description:
      "白天在勤美誠品與草悟廣場逛草悟系市集，午後到勤美術館欣賞當代展覽，傍晚沿草悟道散步，晚上可轉往公益路享用特色餐廳，從白天到黑夜都能充滿藝術與風格。",
    rating: "4.7⭐ 超讚 (8)",
    price: "NT $1200 起",
    url: "/TripBookingPage",
  },
];




const Find_schedule_region_west = () => {
  // 1) 圖片資料
  const images = [
    { url: "./images/Find_schedule/west_slide_01.jpg", title: "photo-1" },
    { url: "./images/Find_schedule/west_slide_02.jpg", title: "photo-2" },
    { url: "./images/Find_schedule/west_slide_03.jpg", title: "photo-3" },
    { url: "./images/Find_schedule/west_slide_04.jpg", title: "photo-4" },
    { url: "./images/Find_schedule/west_slide_05.jpg", title: "photo-5" },
  ];




  // 2) 狀態
  const [currentIndex, setCurrentIndex] = useState(0);




  // 3) 切換函式（寫在元件內）
  const nextSlide = () => {
    setCurrentIndex((i) => (i + 1) % images.length);
  };
  const prevSlide = () => {
    setCurrentIndex((i) => (i - 1 + images.length) % images.length);
  };




  // 4) 自動播放（用函式型 setState，不必依賴 currentIndex）
  useEffect(() => {
    const id = setInterval(() => {
      setCurrentIndex((i) => (i + 1) % images.length);
    }, 3500);
    return () => clearInterval(id);
  }, [images.length]);




  return (
    <div className="region_page">
      <ScrollToTop />
      <div className="region_title">
       <h1 className="titleBox_h1">
            <img
              className="titlebox"
              src="./images/titlebox/west.svg"
              alt="活動行程"
            />
          </h1>
      </div>




      {/* 輪播 */}
      <div className="region_carousel">
        <button className="img-btn" onClick={prevSlide} aria-label="上一張">
          <img src="./images/Find_schedule/LeftArrow.svg" alt="LeftArrow" />
        </button>
        <img
          src={images[currentIndex].url}
          alt={images[currentIndex].title || `輪播圖片 ${currentIndex + 1}`}
          className="carousel-image"
        />
        <button className="img-btn" onClick={nextSlide} aria-label="下一張">
          <img src="./images/Find_schedule/RightArrow.svg" alt="RightArrow" />
        </button>
      </div>




      <div className="region_introduction">
        <p className="region_txt">
          中部總是剛剛好——不疾不徐、舒適寬闊。
          <br />
          無論是台中的公園型市集、彰化的手作聚落，
          <br />
          還是南投山城裡的農創小展，都藏著動人的風景與真誠的手工溫度。
          <br />
          來這裡，是放鬆，也是慢慢發現。
        </p>
        <img
          className="womwen-three"
          src="./images/Find_schedule/women-three.svg"
          alt=""
        />
        <img
          className="camera"
          src="./images/Find_schedule/camera.svg"
          alt=""
        />
      </div>




      <div className="travelCard">
        <TravelCard data={arrData} />
        <img
          className="surp-cord"
          src="./images/Find_schedule/surp-cord.svg"
          alt=""
        />
      </div>
       <PageTop />
    </div>
  );
};




export default Find_schedule_region_west;









