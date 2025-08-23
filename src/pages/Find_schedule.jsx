import React from "react";
import Region_card from "../components/Find_schedule/Region_card";

const arrCards = [
  {
    id: 1,
    img: "/public/images/Find_schedule/north.png",
    btnName: "北部地區",
    btnUrl: "#",
  },
  {
    id: 2,
    img: "/public/images/Find_schedule/west.png",
    btnName: "中部地區",
    btnUrl: "#",
  },
  {
    id: 3,
    img: "/public/images/Find_schedule/south.png",
    btnName: "南部地區",
    btnUrl: "#",
  },
  {
    id: 4,
    img: "/public/images/Find_schedule/east.png",
    btnName: "東部地區",
    btnUrl: "#",
  },
];

const Find_schedule = () => {
  return (
    <>
      <div className="container">
        <div className="titlebox">
          <h1>
            <img
              src="/public/images/Find_schedule/titlebox.svg"
              alt="活動行程"
            />
          </h1>
        </div>
        <div className="deco_line">
          <img src="/public/images/Find_schedule/deco_line.svg" alt="" />
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
          <div className="txt">
            不只逛市集，還有周邊的景點也可以一起安排，但怎麼安排才最好玩？我們規劃多種「市集＋週邊景點」的一日遊旅程。
            <br />
            不只是走馬看花，更是一場有節奏的生活探索。
            <br />
            無論你是第一次逛市集，還是資深週末生活家，都可以在這裡找到屬於你的散步提案。
          </div>
          <div className="intro_photo">
            <img src="/public/images/Find_schedule/intro.jpg" alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Find_schedule;
