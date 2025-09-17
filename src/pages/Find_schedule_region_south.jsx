import TravelCard from "../components/Find_schedule/TravelCard";
import { useEffect, useState } from "react";
import ScrollToTop from '../components/ScrollToTop'


const arrData = [
  {
    image: "./images/Find_schedule/north_travel01.jpg",
    title: "駁二藝術特區 × 哈瑪星｜港邊藝術與鐵道風情",
    description:
      "從駁二市集開始，欣賞手作、文創品牌，接著漫步哈瑪星鐵道文化園區，體驗港邊的歷史與設計。晚上走到棧貳庫或西子灣，看夕陽、吹海風，完美收尾。",
    rating: "4.5 非常好 (5)",
    price: "NT $890 起",
    url: "/Trip",
  },
  {
    image: "./images/Find_schedule/north_travel02.jpg",
    title: "台南藍晒圖 × 正興街｜老宅裡的青春創意",
    description:
      "上午在藍晒圖文創園區逛市集，感受塗鴉與設計小店氛圍。午後轉往正興街、小西門一帶尋寶，冰品、特色甜點一網打盡。晚上可散步至台南孔廟或府中街，感受古城夜色。",
    rating: "4.7 超讚 (8)",
    price: "NT $1200 起",
    url: "/Trip",
  },
  {
    image: "./images/Find_schedule/north_travel03.jpg",
    title: "鹽埕大舞台 × 愛河之心｜老城街頭的藝文脈動",
    description:
      "在鹽埕區市集感受在地藝術與街頭表演，午後沿著愛河之心散步或搭乘小船，欣賞城市水岸風景。傍晚可延伸到六合夜市或美麗島光之穹頂，體驗南部熱鬧的夜生活。",
    rating: "4.7 超讚 (8)",
    price: "NT $1200 起",
    url: "/Trip",
  },
];


const Find_schedule_region_south = () => {
  // 1) 圖片資料
  const images = [
    { url: "./images/Find_schedule/south_slide_01.jpg", title: "photo-1" },
    { url: "./images/Find_schedule/south_slide_02.jpg", title: "photo-2" },
    { url: "./images/Find_schedule/south_slide_03.jpg", title: "photo-3" },
    { url: "./images/Find_schedule/south_slide_04.jpg", title: "photo-4" },
    { url: "./images/Find_schedule/south_slide_05.jpg", title: "photo-5" },
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
        <h1>南部地區</h1>
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
          南部的市集，就是一場熱情與生活的展演。
          <br />
          從高雄港邊的風格市集、台南老屋裡的創意展，到屏東的文化市集，
          <br />
          每一場都有濃濃的在地味與人情味。
          <br />
          適合喜歡人群、喜歡熱鬧、也喜歡邊逛邊吃邊聊的你。
        </p>
      </div>


      <div className="travelCard">
        <TravelCard data={arrData} />
      </div>
    </div>
  );
};


export default Find_schedule_region_south;


