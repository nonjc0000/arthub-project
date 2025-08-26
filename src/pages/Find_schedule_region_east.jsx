import TravelCard from "../components/Find_schedule/TravelCard";

const arrData = [
  {
    image: "#",
    title: "華山設計漫遊日｜風格選物 × 咖啡散步 × 文創市集",
    description:
      "走進華山文創園區，來一場設計與風格的慢步旅行。從早餐咖啡展覽節奏、逛展覽、市集與手作選物，感受城市裡輕又充滿創意的日常片段。",
    rating: "4.5 非常好 (5)",
    price: "NT $890 起",
  },
  {
    image: "#",
    title: "台北藝文小旅行｜藝文展覽 × 城市散步",
    description:
      "結合藝術展覽與城市探索，一邊欣賞設計作品，一邊漫步在城市巷弄，品味台北的藝文氣息。",
    rating: "4.7 超讚 (8)",
    price: "NT $1200 起",
  },
  {
    image: "#",
    title: "大稻埕風格微旅｜巷弄選物 × 小型市集 × 河岸夕陽",
    description:
      "走進大稻埕的老街巷弄，探索復古與創意交會的城市風景。安排選物、手作與黃昏碼頭的散步，讓一日旅行成為儀式感滿分的生活片段。",
    rating: "4.7 超讚 (8)",
    price: "NT $1200 起",
  },
];

const Find_schedule_region_east = () => {
  return (
    <div>
      <div className="title">
        <h1>東部地區</h1>
      </div>
      <section className="north">
        <figure>
          {/* <img
            src="/images/Find_schedule/beautiful-architecture-building-taipei-city.jpg"
            alt=""
          /> */}
        </figure>
        <p>
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
      </section>
      <div className="travelCard">
        <TravelCard data={arrData} />;
      </div>
    </div>
  );
};

export default Find_schedule_region_east;
