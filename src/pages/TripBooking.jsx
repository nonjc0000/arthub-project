import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import Trip_travelCard from "../components/Find_schedule/Trip_travelCard";
import schedule from "../data/schedule.json";


const STOPS = [
  {
    time: "10:30",
    title: "在 simple kaffa 享用早午餐",
    desc: "台北的精品人氣咖啡館，享受一份簡單早午餐與城市美味，為一天充電。",
    img: "./images/Find_schedule/food.jpg",
    note: "提供基礎早午餐一份(若有更換餐點需要補差價)",
    duration: "停留 90 分鐘",
  },
  {
    time: "12:00",
    title: "華山1914文化創意園區 設計展巡禮",
    desc: "參觀當期展覽，從插畫、建築到永續生活，汲取靈感，漫步老菸廠之間。",
    img: "./images/Find_schedule/north_travel01.jpg",
    note: "附正當季展覽門票一張",
    duration: "停留 120 分鐘",
  },
  {
    time: "14:00",
    title: "市集散策",
    desc: "逛設計手作小市集，尋寶限定款，打卡與朋友分享今日的小驚喜。",
    img: "./images/Find_schedule/market.jpg",
    duration: "停留 60 分鐘",
  },
  {
    time: "16:00",
    title: "未來美術館",
    desc: "新媒體藝術展區，探索互動裝置，感受光影與聲響的沉浸體驗。",
    img: "./images/Find_schedule/museum01.jpg",
    duration: "停留 90 分鐘",
  },
  {
    time: "18:00",
    title: "返程與散場",
    desc: "用在地夜市(遼寧街夜市)結束這趟旅程，從食物中補充能量與情感記憶。",
    img: "./images/Find_schedule/nightmarket.jpg",
    duration: "自由安排時間",
  },
];


function RatingStars({ score = 4.8 }) {
  const full = Math.floor(score);
  const half = score - full >= 0.5;
  return (
    <div className="rating">
      {Array.from({ length: full }).map((_, i) => (
        <svg
          key={i}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className="rating__icon"
        >
          <path d="M11.48 3.499a.75.75 0 0 1 1.04 0l2.492 2.43 3.361.488a.75.75 0 0 1 .416 1.28l-2.43 2.37.574 3.343a.75.75 0 0 1-1.088.79L12 12.93l-3.014 1.57a.75.75 0 0 1-1.088-.79l.574-3.342-2.43-2.37a.75.75 0 0 1 .416-1.28l3.36-.489 2.49-2.43Z" />
        </svg>
      ))}
      {half && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className="rating__icon"
        >
          <defs>
            <linearGradient id="half" x1="0" x2="1">
              <stop offset="50%" stopColor="currentColor" />
              <stop offset="50%" stopColor="#e5e7eb" />
            </linearGradient>
          </defs>
          <path
            fill="url(#half)"
            d="M11.48 3.499a.75.75 0 0 1 1.04 0l2.492 2.43 3.361.488a.75.75 0 0 1 .416 1.28l-2.43 2.37.574 3.343a.75.75 0 0 1-1.088.79L12 12.93l-3.014 1.57a.75.75 0 0 1-1.088-.79l.574-3.342-2.43-2.37a.75.75 0 0 1 .416-1.28l3.36-.489 2.49-2.43Z"
          />
        </svg>
      )}
      <span className="rating__text">{score.toFixed(1)}</span>
    </div>
  );
}


function Accordion({ title, children, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className={`acc ${open ? "is-open" : ""}`}>
      <button
        onClick={() => setOpen(!open)}
        className="acc__btn"
        aria-expanded={open}
      >
        <span>{title}</span>
        <span className="acc__icon" aria-hidden>
          {open ? "−" : "+"}
        </span>
      </button>
      <div className="acc__panel" hidden={!open}>
        {children}
      </div>
    </div>
  );
}


export default function TripBookingPage() {
  const [arrSchedule] = useState(schedule);
  const [date, setDate] = useState("");
  const [adult, setAdult] = useState("");
  const [child, setChild] = useState("");
  const priceAdult = 800;
  const priceChild = 600;
  const total = useMemo(
    () => adult * priceAdult + child * priceChild,
    [adult, child]
  );
  // 評論
  const [reviews, setReviews] = useState([
    {
      id: 1,
      author: "Alice",
      rating: 5,
      date: "2025-08-12",
      text: "很棒的行程，導覽詳細，照片也很好拍！",
    },
    {
      id: 2,
      author: "Bob",
      rating: 4,
      date: "2025-07-03",
      text: "餐廳選得很不錯，整體安排舒服。",
    },
  ]);
  const [formName, setFormName] = useState("");
  const [formRating, setFormRating] = useState(5);
  const [formText, setFormText] = useState("");


  const [sortDesc, setSortDesc] = useState(true);
  const [starFilter, setStarFilter] = useState(0);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(2);


  const addReview = () => {
    if (!formText.trim()) return;
    const now = new Date();
    const d = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(
      2,
      "0"
    )}-${String(now.getDate()).padStart(2, "0")}`;
    const newReview = {
      id: now.getTime(),
      author: formName || "匿名",
      rating: formRating,
      date: d,
      text: formText,
    };
    setReviews([newReview, ...reviews]);
    setFormName("");
    setFormRating(5);
    setFormText("");
    setPage(1);
  };


  const sorted = [...reviews].sort((a, b) =>
    sortDesc ? b.date.localeCompare(a.date) : a.date.localeCompare(b.date)
  );
  const filtered = starFilter
    ? sorted.filter((r) => r.rating === starFilter)
    : sorted;
  const paged = filtered.slice(0, page * pageSize);


  const avgRating = (
    reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length
  ).toFixed(1);
  return (
    <div className="page">
      {/* Hero */}
      <section className="hero">
        <div className="container hero__grid">
          <div className="hero__gallery">
            {[
              "./images/Find_schedule/trip01.png",
              "./images/Find_schedule/trip02.png",
              "./images/Find_schedule/trip03.png",
            ].map((src, i) => (
              <div key={i} className="card">
                <img src={src} alt="hero" />
              </div>
            ))}
          </div>
          <div className="hero__text">
            <div className="pill">北部一日遊</div>
            <h1 className="hero__title">華山設計漫遊日</h1>
            <p className="hero__desc">風格建物 × 咖啡散步 × 文創市集</p>
            <p className="description">
              走進華山文創園區，來一場設計與風格的慢步旅行。從早午餐咖啡展開節奏，逛展覽、市集尋找手作選物，感受城市裡充滿創意的日常片段。
            </p>
            <div className="hero__meta">
              <RatingStars score={4.8} />
              <span className="meta__people">200 人參加過</span>
            </div>
            <div className="hero__price">
              <div>
                <div className="price__label">售價</div>
                <div className="price__value">NT {priceAdult} / 人</div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* 行程亮點 */}
      <section id="feature" className="section">
        <div className="container">
          <h2 className="section__title">行程亮點</h2>
          <div className="chips">
            {[
              "老建築再生的設計能量",
              "好拍路線・導覽帶路",
              "小市集挖寶",
              "早午餐 + 展覽 + 美術館一次滿足",
            ].map((t) => (
              <span key={t} className="chip">
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>


      {/* Accordion 區塊 */}
      <section id="accordion" className="section">
        <div className="container">
          <h2 className="section__title">行程資訊</h2>
          {/* 預設關閉：不傳 defaultOpen 即為關閉 */}
          <Accordion title="行程包含">
            <ul>
              <li>專業導覽服務</li>
              <li>行程間的交通</li>
              <li>指定餐廳早午餐一份</li>
              <li>展覽與美術館門票</li>
              <li>行程手冊與路線地圖</li>
              <li>旅遊保險</li>
            </ul>
          </Accordion>
          <Accordion title="不包含">
            <ul>
              <li>個人交通往返集合地點</li>
              <li>個人購物與額外消費</li>
              <li>行程外之餐飲與活動</li>
              <li>其他未明示之費用</li>
            </ul>
          </Accordion>
          <Accordion title="溫馨提醒">
            <ul>
              <li>請穿著舒適好走的鞋子</li>
              <li>建議攜帶水壺，保持水分補充</li>
              <li>如遇下雨請備雨具；行程將視天候調整</li>
              <li>請提前 10 分鐘到集合點報到</li>
            </ul>
          </Accordion>
        </div>
      </section>


      {/* 主體：時間軸 + 訂購卡 */}
      <section id="timeline" className="section">
        <div className="container main">
          {/* Timeline */}
          <div className="timeline">
            {STOPS.map((s, idx) => (
              <article key={idx} className="stop">
                <div className="stop__grid">
                  <div className="stop__time">
                    <strong>{s.time}</strong>
                    <div className="stop__badge">{s.duration}</div>
                  </div>
                  <div className="stop__body">
                    <h3>{s.title}</h3>
                    <p className="hero__desc">{s.desc}</p>
                    {s.note && (
                      <div
                        className="acc__panel"
                        style={{
                          padding: "10px",
                          borderRadius: "12px",
                          background: "#CBD4C1",
                          color: "#39413A",
                          border: "1px solid #fff",
                        }}
                      >
                        {s.note}
                      </div>
                    )}
                    <img className="stop__img" src={s.img} alt={s.title} />
                  </div>
                </div>
              </article>
            ))}
          </div>


          {/* Booking Card */}
          <aside id="book" className="aside">
            <div className="card-box">
              <div className="price__wrap">
                <div className="price__label">方案售價</div>
                <div className="price__value">
                  NT {priceAdult.toLocaleString()}
                </div>
                <div className="price__hint">(成人)；兒童 NT {priceChild}</div>
              </div>


              <div className="field">
                <label className="label">出發日期</label>
                <input
                  type="date"
                  className="input"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                />
              </div>


              <div className="qty">
                <div className="counter">
                  <div>
                    <div className="label">成人</div>
                  </div>
                  <button
                    onClick={() => setAdult((n) => Math.max(1, n - 1))}
                    aria-label="decrease adult"
                  >
                    −
                  </button>
                  <div>{adult}</div>
                  <button
                    onClick={() => setAdult((n) => n + 1)}
                    aria-label="increase adult"
                  >
                    +
                  </button>
                </div>
                <div className="counter">
                  <div>
                    <div className="label">兒童</div>
                  </div>
                  <button
                    onClick={() => setChild((n) => Math.max(0, n - 1))}
                    aria-label="decrease child"
                  >
                    −
                  </button>
                  <div>{child}</div>
                  <button
                    onClick={() => setChild((n) => n + 1)}
                    aria-label="increase child"
                  >
                    +
                  </button>
                </div>
              </div>


              <div className="subtotal">
                <div className="subtotal__row">
                  <span>小計</span>
                  <strong>NT {total.toLocaleString()}</strong>
                </div>
              </div>
              <Link
                to="/Order"
                className="btn-primary"
                disabled={!date || total <= 0}
                onClick={() =>
                  alert(
                    `已加入購物車\n出發日：${date}\n成人：${adult} 兒童：${child}\n總額：NT ${total.toLocaleString()}`
                  )
                }
              >
                立即訂購
              </Link>
            </div>
          </aside>
        </div>
      </section>
      {/* 評論區 */}
      <section id="reviews" className="section">
        <div className="container">
          <h2 className="section__title">
            旅客評論 ({reviews.length} 則，平均 {avgRating}★)
          </h2>


          {/* 工具列 */}
          <div className="review-toolbar">
            <button className="btn" onClick={() => setSortDesc((v) => !v)}>
              日期排序：{sortDesc ? "新→舊" : "舊→新"}
            </button>


            <select
              className="select"
              value={starFilter}
              onChange={(e) => {
                setStarFilter(Number(e.target.value));
                setPage(1);
              }}
            >
              <option value={0}>全部</option>
              <option value={5}>5★</option>
              <option value={4}>4★</option>
              <option value={3}>3★</option>
              <option value={2}>2★</option>
              <option value={1}>1★</option>
            </select>


            <label style={{ marginLeft: "8px" }}>每頁顯示</label>
            <select
              className="select"
              value={pageSize}
              onChange={(e) => {
                setPageSize(Number(e.target.value));
                setPage(1);
              }}
            >
              <option value={2}>2</option>
              <option value={5}>5</option>
              <option value={10}>10</option>
            </select>
          </div>


          <div className="review-form">
            <input
              className="input"
              placeholder="你的名稱 (選填)"
              value={formName}
              onChange={(e) => setFormName(e.target.value)}
            />
            <select
              className="select"
              value={formRating}
              onChange={(e) => setFormRating(Number(e.target.value))}
            >
              {[5, 4, 3, 2, 1].map((s) => (
                <option key={s} value={s}>
                  {s}★
                </option>
              ))}
            </select>
            <textarea
              className="textarea"
              placeholder="分享你的體驗…"
              value={formText}
              onChange={(e) => setFormText(e.target.value)}
            />
            <button className="btn" onClick={addReview}>
              送出評論
            </button>
          </div>


          <div className="review-list">
            {paged.map((r) => (
              <div key={r.id} className="review-item">
                <div className="review-head">
                  <strong>{r.author}</strong> · {r.date} ·{" "}
                  {"★".repeat(r.rating)}
                </div>
                <p className="review-text">{r.text}</p>
              </div>
            ))}
          </div>


          {paged.length < filtered.length && (
            <button className="btn" onClick={() => setPage((p) => p + 1)}>
              載入更多
            </button>
          )}
        </div>
      </section>
      {/* 裝飾線 */}
      <div className="tb-deco-line">
        <img src="./images/Find_schedule/deco_line.svg" alt="" />
      </div>
      {/* 相關行程 */}
      <section className="tb-section">
        <div className="tb-container">
          <h2 className="section__title">你可能也會喜歡</h2>
          <div className="trip_card_container">
            {arrSchedule.slice(0, 4).map((schedule) => (
              <Trip_travelCard {...schedule} key={schedule.id} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}



