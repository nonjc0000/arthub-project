import TravelCard from "../components/Find_schedule/TravelCard";

const arrData = [
  {
    image: "./images/Find_schedule/north_travel01.jpg",
    title: "華山設計漫遊日｜風格選物 × 咖啡散步 × 文創市集",
    description:
      "走進華山文創園區，來一場設計與風格的慢步旅行。從早餐咖啡展覽節奏、逛展覽、市集與手作選物，感受城市裡輕又充滿創意的日常片段。",
    rating: "4.5 非常好 (5)",
    price: "NT $890 起",
  },
  {
    image: "./images/Find_schedule/north_travel02.jpg",
    title: "板橋老新交融日｜歷史走讀 × 藝文市集 × 家庭悠遊",
    description:
      "串起板橋的老街與新藝文空間，體驗在地文化、親子共遊與手作創意市集。結合慢散步與動手玩，適合一家大小或在地生活觀察愛好者。",
    rating: "4.7 超讚 (8)",
    price: "NT $1200 起",
  },
  {
    image: "./images/Find_schedule/north_travel03.jpg",
    title: "大稻埕風格微旅｜巷弄選物 × 小型市集 × 河岸夕陽",
    description:
      "走進大稻埕的老街巷弄，探索復古與創意交會的城市風景。安排選物、手作與黃昏碼頭的散步，讓一日旅行成為儀式感滿分的生活片段。",
    rating: "4.7 超讚 (8)",
    price: "NT $1200 起",
  },
];

const Find_schedule_region_north = () => {
  return (
    <div className="north_page">
      <div className="north_title">
        <h1>北部地區</h1>
      </div>
      <section className="north_introduction">
        <figure className="north_slide">
          <img src="./images/Find_schedule/north_01.jpg" alt="" />
        </figure>
        <p className="north_txt">
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
      </section>
      <div className="travelCard">
        <TravelCard data={arrData} />;
      </div>
    </div>
  );
};

export default Find_schedule_region_north;
