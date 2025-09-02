import TravelCard from "../components/Find_schedule/TravelCard";
import { useEffect, useState } from "react";


const arrData = [
  {
    image: "./images/Find_schedule/north_travel01.jpg",
    title: "華山設計漫遊日｜風格選物 × 咖啡散步 × 文創市集",
    description:
      "走進華山文創園區，來一場設計與風格的慢步旅行。從早餐咖啡展覽節奏、逛展覽、市集與手作選物，感受城市裡輕又充滿創意的日常片段。",
    rating: "4.5 非常好 (5)",
    price: "NT $890 起",
    url: "/Trip",
  },
  {
    image: "./images/Find_schedule/north_travel02.jpg",
    title: "板橋老新交融日｜歷史走讀 × 藝文市集 × 家庭悠遊",
    description:
      "串起板橋的老街與新藝文空間，體驗在地文化、親子共遊與手作創意市集。結合慢散步與動手玩，適合一家大小或在地生活觀察愛好者。",
    rating: "4.7 超讚 (8)",
    price: "NT $1200 起",
    url: "/Trip",
  },
  {
    image: "./images/Find_schedule/north_travel03.jpg",
    title: "大稻埕風格微旅｜巷弄選物 × 小型市集 × 河岸夕陽",
    description:
      "走進大稻埕的老街巷弄，探索復古與創意交會的城市風景。安排選物、手作與黃昏碼頭的散步，讓一日旅行成為儀式感滿分的生活片段。",
    rating: "4.7 超讚 (8)",
    price: "NT $1200 起",
    url: "/Trip",
  },
];


const Find_schedule_region_north = () => {
  // 1) 圖片資料
  const images = [
    { url: "./images/Find_schedule/north_slide_01.jpg", title: "photo-1" },
    { url: "./images/Find_schedule/north_slide_02.jpg", title: "photo-2" },
    { url: "./images/Find_schedule/north_slide_03.jpg", title: "photo-3" },
    { url: "./images/Find_schedule/north_slide_04.jpg", title: "photo-4" },
    { url: "./images/Find_schedule/north_slide_05.jpg", title: "photo-5" },
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
      <div className="region_title">
        <h1>北部地區</h1>
      </div>


      {/* 輪播 */}
      <div className="region_carousel">
        <button onClick={prevSlide} aria-label="上一張">
          <img src="./images/Find_schedule/LeftArrow.svg" alt="LeftArrow" />
        </button>
        <img
          src={images[currentIndex].url}
          alt={images[currentIndex].title || `輪播圖片 ${currentIndex + 1}`}
          className="carousel-image"
        />
        <button onClick={nextSlide} aria-label="下一張">
          <img src="./images/Find_schedule/RightArrow.svg" alt="RightArrow" />
        </button>
      </div>


      <div className="region_introduction">
        <p className="region_txt">
          北部｜城市交會的靈感地帶
          <br />
          以台北為中心，北部聚集了最多元的創意市集與設計品牌。
          <br />
          文創園區、老宅市集、巷弄裡的風格選物店，每一次逛街都像是
          <br />
          一場風格的展演。
          <br />
          適合愛探索的你，也適合從城市中找靈感的生活者。
        </p>
      </div>


      <div className="travelCard">
        <TravelCard data={arrData} />
      </div>
    </div>
  );
};


export default Find_schedule_region_north;
