import Region_card from "../components/Find_schedule/Region_card";




const arrCards = [
  {
    id: 1,
    img: "./images/Find_schedule/north.png",
    btnName: "北部地區",
    btnUrl: "/North",
  },
  {
    id: 2,
    img: "./images/Find_schedule/west.png",
    btnName: "中部地區",
    btnUrl: "/West",
  },
  {
    id: 3,
    img: "./images/Find_schedule/south.png",
    btnName: "南部地區",
    btnUrl: "/South",
  },
  {
    id: 4,
    img: "./images/Find_schedule/east.png",
    btnName: "東部地區",
    btnUrl: "/East",
  },
];




const Find_schedule = () => {
  return (
    <>
      <div className="container">


        <div className="find_schedule_titlebox">
          <h1 className="titleBox_h1">
            <img
              className="titlebox"
              src="./images/titlebox/find_schedule_titlebox.svg"
              alt="活動行程"
            />
          </h1>
        </div>
        <div className="deco_line">
          <img src="./images/Find_schedule/deco_line.svg" alt="" />
        </div>




        <div className="region">
          {arrCards.map((region) => {
            return (
              <Region_card
                key={region.id}
                img={region.img}
                btnName={region.btnName}
                btnUrl={region.btnUrl}
              />
            );
          })}
        </div>




        <div className="intro_down">
          <div className="txt-background">
            <div className="deco-girl">
              <img src="./images/Find_schedule/girl.svg" alt="" />
            </div>
            <div className="deco-cord">
              <img src="./images/Find_schedule/normal-cord.svg" alt="" />
            </div>
            <div className="txt">
              不只逛市集，還有周邊的景點也可以一起安排，但怎麼安排才最好玩？
              <br />
              我們規劃多種「市集＋週邊景點」的一日遊旅程。
              <br />
              不只是走馬看花，更是一場有節奏的生活探索。
              <br />
              無論你是第一次逛市集，還是資深週末生活家，都可以在這裡找到屬於你的散步提案。
            </div>
          </div>
          <div className="intro_photo">
            <div className="deco-getFun">
              <img src="./images/Find_schedule/getFun.svg" alt="" />
            </div>
            <img src="./images/Find_schedule/intro.png" alt="" />
           
              <div className="road">
                <img className="car-01"src="./images/Find_schedule/car01.svg" alt="" />
              </div>
              <div className="car-go">
                <img src="./images/Find_schedule/car-go.svg" alt="" />
            </div>
          </div>




        </div>
      </div>
    </>
  );
};




export default Find_schedule;

