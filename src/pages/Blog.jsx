import React from "react";
import BlogSelect from "../components/blog/BlogSelect";
import BlogCard from "../components/blog/BlogCard";
import "../sass/all.scss";

function Blog() {
  const posts = Array.from({ length: 9 }, (_, i) => ({
    id: i + 1,
    title: "一個下午逛三場市集 台北真的好玩到逛不完！",
    excerpt:
      "這週末突然興起了「市集一日行」的念頭，早上打開市集平台查了一下，發現台北同一天居然有三場不同風格的市集！於是直接衝一波，從松菸到公館再到…",
    img: "../../images/blog/post-1.jpg",
    tags: ["文創設計", "生活風格", "美食飲品"],
  }));

  return (
    <div className="blog-page">
      {/* 1) 標題 */}
      <header className="blog-hero">
        <h1 className="hero-title"></h1>
      </header>

      {/* 2) 描述段落 */}
      <section className="blog-desc">
        <p className="desc">
          這裡是我們的市集部落格，專門記錄最新活動、逛展攻略、職人介紹、手作體驗與吃喝玩樂提案。
          <br />
          不管你是每週都想跑市集的熱血市集人，還是偶爾想找地方放鬆的週末族，這裡都能找到靈感。
          <br />
          打開這裡，就像打開一條城市風格生活捷徑！
        </p>
      </section>

      {/* 3) 彩色裝飾條 */}
      <div className="blog-deco" aria-hidden="true" />

      {/* 4) 黑框主內容區 */}
      <section className="blog-shell">
        <div className="blog-body">
          {/* 左側：類別篩選 */}
          <aside className="blog-select-col">
            <BlogSelect />
          </aside>

          {/* 右側：主要內容 */}
          <main className="blog-panel">
            {/* 上方工具列 */}
            <div className="blog-toolbar">
              <div className="tabs">
                <button className="tab is-active">熱門</button>
                <button className="tab">最新</button>
              </div>

              <div className="actions">
                <div className="search">
                  <input type="text" placeholder="搜尋文章" />
                  <button className="icon-btn" aria-label="search">
                    🔍
                  </button>
                </div>
                <button className="icon-btn write" aria-label="撰寫文章">
                  ✎
                </button>
              </div>
            </div>

            {/* 卡片網格 */}
            <div className="blog-grid">
              {posts.map((post) => (
                <BlogCard key={post.id} {...post} />
              ))}
            </div>

            {/* 分頁導航 */}
            <nav className="blog-pagination" aria-label="pagination">
              <button className="page-btn prev" aria-label="上一頁">
                ‹
              </button>
              <div className="track">
                <button className="page-num is-active">1</button>
                <button className="page-num">2</button>
                <button className="page-num">3</button>
                <span className="dots">…</span>
                <button className="page-num">10</button>
              </div>
              <button className="page-btn next" aria-label="下一頁">
                ›
              </button>
            </nav>
          </main>
        </div>
      </section>
    </div>
  );
}

export default Blog;