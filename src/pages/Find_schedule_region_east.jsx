import TravelCard from "../components/Find_schedule/TravelCard";
import { useEffect, useState } from "react";
import ScrollToTop from '../components/ScrollToTop'


const arrData = [
  {
    image: "./images/Find_schedule/north_travel01.jpg",
    title: "花蓮東大門夜市 × 太平洋公園｜夜色與海風的交響曲",
    description:
      "下午先到太平洋公園或南濱公園散步，傍晚走進東大門夜市，品嚐花蓮在地小吃，邊聽駐唱邊逛攤位，最後在海邊吹風結束一天。",
    rating: "4.5 非常好 (5)",
    price: "NT $890 起",
  },
  {
    image: "./images/Find_schedule/north_travel02.jpg",
    title: "台東鐵花村 × 鐵道藝術村｜音樂市集與慢城氛圍",
    description:
      "白天到鐵花村文創市集，逛手作小物與原創商品，午後走訪鐵道藝術村，欣賞藝術裝置與老倉庫風情。晚上回到鐵花村草地，聽現場音樂表演，體驗台東獨特的慢活節奏。",
    rating: "4.7 超讚 (8)",
    price: "NT $1200 起",
  },
  {
    image: "./images/Find_schedule/north_travel03.jpg",
    title: "池上市集 × 伯朗大道｜田園間的旅行詩篇",
    description:
      "上午到池上市集採買在地農產、手作選物，午後騎腳踏車漫遊伯朗大道，沉浸在金色稻浪或綠色田園風光中。傍晚可在池上小館用餐，感受東部最純粹的土地味道。",
    rating: "4.7 超讚 (8)",
    price: "NT $1200 起",
  },
];


const Find_schedule_region_east = () => {
  // 1) 圖片資料
  const images = [
    { url: "./images/Find_schedule/east_slide_01.jpg", title: "photo-1" },
    { url: "./images/Find_schedule/east_slide_02.jpg", title: "photo-2" },
    { url: "./images/Find_schedule/east_slide_03.jpg", title: "photo-3" },
    { url: "./images/Find_schedule/east_slide_04.jpg", title: "photo-4" },
    { url: "./images/Find_schedule/east_slide_05.jpg", title: "photo-5" },
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
      <ScrollToTop/>
      <div className="region_title">
        <h1>東部地區</h1>
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
          東部的市集像是自然延伸出的風景。
          <br />
          在花蓮、台東，市集常常與山海為伍，
          <br />
          與原民文化、慢生活、美感手作緊密相連。
          <br />
          一場風格的展演。
          <br />
          適合你放慢腳步，來一趟沒有壓力的風格漫遊。
        </p>
      </div>


      <div className="travelCard">
        <TravelCard data={arrData} />
      </div>
    </div>
  );
};


export default Find_schedule_region_east;


