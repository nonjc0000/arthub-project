import React, { useState, useMemo } from "react";
import { Link, useNavigate } from "react-router-dom";
import BlogSelect from "../components/blog/BlogSelect";
import BlogCard from "../components/blog/BlogCard";
import "../sass/all.scss";
import ScrollToTop from '../components/ScrollToTop'
import PageTop from '../components/PageTop';








function Blog() {
  const [currentPage, setCurrentPage] = useState(1);
  const [activeTab, setActiveTab] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("所有文章");








  // 18 篇文章資料，包含不同分類
  const allPosts = [
    {
      id: 1,
      title: "一個下午逛三場市集 台北真的好玩到逛不完！",
      excerpt: "這週末突然興起了「市集一日行」的念頭，早上打開市集平台查了一下，發現台北同一天居然有三場不同風格的市集！於是直接衝一波，從松菸到公館再到…",
      img: "./images/blog/postimg/post_1.jpg",
      tags: ["布作服飾", "生活風格", "插畫紙品"],
      category: ["所有文章", "布作服飾", "插畫紙品"],








    },
    {
      id: 2,
      title: "手沖咖啡的完美比例 市集咖啡師親自傳授",
      excerpt: "在華山市集遇到了一位超有趣的咖啡師，他說手沖咖啡最重要的不是器具，而是對咖啡的理解。今天就來分享他教我的幾個關鍵技巧…",
      img: "./images/blog/postimg/post_2.jpg",
      tags: ["美食飲品", "生活風格"],
      category: ["所有文章", "美食飲品", "生活風格"],
      type: "最新"
    },
    {
      id: 3,
      title: "療癒系手作小物 讓生活多一點溫度",
      excerpt: "最近在信義區的手作市集發現了好多可愛的小物，從羊毛氈娃娃到手工皂，每一樣都讓人愛不釋手。決定來分享幾個超療癒的手作體驗…",
      img: "./images/blog/postimg/post_3.jpg",
      tags: ["文創設計", "居家療癒"],
      category: ["所有文章", "文創設計", "居家療癒"]
    },
    {
      id: 4,
      title: "市集美食大探索 隱藏版攤位報你知",
      excerpt: "台灣市集這麼多，但真正的隱藏版美食你知道幾個？這次要帶大家發掘那些只有老饕才知道的市集小吃，從炭烤串燒到手作甜點，每一攤都是驚喜！",
      img: "./images/blog/postimg/post_4.jpg",
      tags: ["美食飲品"],
      category: ["所有文章", "美食飲品"],
      type: "熱門"
    },
    {
      id: 5,
      title: "職人精神：木工阿伯的手作哲學",
      excerpt: "在松菸市集認識了一位做木工的阿伯，他說每一塊木頭都有自己的性格，要用心去感受。聽他分享手作的故事，真的很感動…",
      img: "./images/blog/postimg/post_5.jpg",
      tags: ["生活風格", "文創設計"],
      category: ["所有文章", "生活風格", "文創設計"]
    },
    {
      id: 6,
      title: "週末市集穿搭指南 怎麼穿最好看又實用",
      excerpt: "逛市集要穿什麼？既要好看又要實用，還要適合拍照。整理了一些市集穿搭的小心機，讓你成為市集最亮眼的那個人…",
      img: "./images/blog/postimg/post_6.jpg",
      tags: ["生活風格", "布作服飾"],
      category: ["所有文章", "布作服飾", "生活風格"]
    },
    {
      id: 7,
      title: "台中市集一日遊 南部市集也很精彩",
      excerpt: "這次南下台中，發現中部的市集有著不一樣的風情。從草悟道到勤美，每個市集都有自己的特色，美食也超級多…",
      img: "./images/blog/postimg/post_7.jpg",
      tags: ["二手選物", "美食飲品"],
      category: ["所有文章", "二手選物", "美食飲品"]
    },
    {
      id: 8,
      title: "手作皮件入門 從零開始學皮革工藝",
      excerpt: "一直很想學皮件製作，這次在市集找到了專業的皮革工藝師傅。從選料到縫製，每個步驟都有學問，來分享我的學習心得…",
      img: "./images/blog/postimg/post_8.jpg",
      tags: ["文創設計", "布作服飾"],
      category: ["所有文章", "文創設計", "布作服飾"]
    },
    {
      id: 9,
      title: "植栽療癒時光 小盆栽大學問",
      excerpt: "最近迷上了多肉植物，在市集遇到了專業的園藝師，才知道養植物有這麼多眉角。分享一些新手養植栽的小技巧…",
      img: "./images/blog/postimg/post_9.jpg",
      tags: ["生活風格", "居家療癒"],
      category: ["所有文章", "居家療癒", "生活風格"],
      type: "熱門"
    },
    {
      id: 10,
      title: "創意市集攤位設計 如何吸引客人目光",
      excerpt: "觀察了這麼多市集攤位，發現成功的攤位都有一些共通點。從擺設到動線，每個細節都影響著生意，來分享一些心得…",
      img: "./images/blog/postimg/post_10.jpg",
      tags: ["飾品配件", "居家療癒"],
      category: ["所有文章", "飾品配件", "居家療癒"]
    },
    {
      id: 11,
      title: "在地小農的故事 有機蔬果背後的堅持",
      excerpt: "這次在農夫市集認識了幾位小農，聽他們分享種植有機蔬果的甘苦談。每一顆番茄、每一把青菜背後都有溫暖的故事…",
      img: "./images/blog/postimg/post_11.jpg",
      tags: ["職人介紹", "美食飲品"],
      category: ["所有文章", "布作服飾", "生活風格"],
      type: "熱門"
    },
    {
      id: 12,
      title: "手工甜點的魔法 糖霜餅乾製作秘訣",
      excerpt: "在甜點市集學到了糖霜餅乾的製作技巧，原來看似簡單的餅乾有這麼多學問。從麵團到裝飾，每個步驟都是藝術…",
      img: "./images/blog/postimg/post_12.jpg",
      tags: ["美食飲品"],
      category: ["所有文章", "美食飲品"]
    },
    {
      id: 13,
      title: "市集攝影技巧 如何拍出IG美照",
      excerpt: "市集是拍照的好地方，但怎麼拍才能拍出讓人按讚的美照？分享一些在市集拍攝的小技巧，讓你的照片更上一層樓…",
      img: "./images/blog/postimg/post_13.jpg",
      tags: ["生活風格"],
      category: ["所有文章", "生活風格"],
      type: "最新"
    },
    {
      id: 14,
      title: "陶瓷工藝的溫度 手捏陶器體驗心得",
      excerpt: "第一次體驗手捏陶器，才發現陶瓷工藝的深度。從揉土到上釉，每個步驟都需要耐心和技巧。分享這次難忘的手作體驗…",
      img: "./images/blog/postimg/post_14.jpg",
      tags: ["文創設計",],
      category: ["所有文章", "文創設計"]
    },
    {
      id: 15,
      title: "市集美食地圖 必吃清單大公開",
      excerpt: "走遍各大市集，終於整理出這份美食地圖！從經典小吃到創意料理，這些攤位絕對不能錯過。收藏起來下次逛市集用…",
      img: "./images/blog/postimg/post_15.jpg",
      tags: ["美食飲品",],
      category: ["所有文章", "美食飲品"]
    },
    {
      id: 16,
      title: "布料拼接藝術 舊衣改造新生命",
      excerpt: "在環保市集學到了布料拼接的技巧，把舊衣服改造成全新的設計。不只環保，還能發揮創意，真的很有成就感…",
      img: "./images/blog/postimg/post_16.jpg",
      tags: ["文創設計", "布作服飾"],
      category: ["所有文章", "布作服飾", "文創設計"]
    },
    {
      id: 17,
      title: "香草植物園 在家打造小香草花園",
      excerpt: "市集的香草攤老闆教了我很多種植香草的技巧，原來在家也能種出茂盛的香草園。分享一些新手種香草的實用心得…",
      img: "./images/blog/postimg/post_17.jpg",
      tags: ["生活風格", "居家療癒"],
      category: ["所有文章", "居家療癒", "生活風格"]
    },
    {
      id: 18,
      title: "手工果醬製作 天然美味自己來",
      excerpt: "跟市集的果醬達人學了手工果醬的製作方法，用當季水果做出來的果醬真的特別香甜。來分享這個簡單又美味的製作過程…",
      img: "./images/blog/postimg/post_18.jpg",
      tags: ["美食飲品"],
      category: ["所有文章", "美食飲品"],
      type: "最新"
    }
  ];








  const postsPerPage = 9;








  const filteredPosts = useMemo(() => {
    let filtered = allPosts;




    // 分類篩選
    if (selectedCategory !== "所有文章") {
      filtered = filtered.filter(post => {
        if (Array.isArray(post.category)) {
          return post.category.includes(selectedCategory);
        }
        return post.category === selectedCategory;
      });
    }




    // 搜尋篩選
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase().trim();
      filtered = filtered.filter(post =>
        post.title.toLowerCase().includes(query) ||
        post.excerpt.toLowerCase().includes(query) ||
        post.tags.some(tag => tag.toLowerCase().includes(query))
      );
    }




    // 排序邏輯
    if (activeTab === "熱門") {
      // 點選熱門：熱門文章排最前，其他按 id 排序
      filtered = filtered.sort((a, b) => {
        if (a.type === "熱門" && b.type !== "熱門") return -1;
        if (b.type === "熱門" && a.type !== "熱門") return 1;
        return a.id - b.id;
      });
    } else if (activeTab === "最新") {
      // 點選最新：最新文章排最前，其他按 id 倒序
      filtered = filtered.sort((a, b) => {
        if (a.type === "最新" && b.type !== "最新") return -1;
        if (b.type === "最新" && a.type !== "最新") return 1;
        return b.id - a.id;
      });
    } else {
      // 初始狀態：熱門最前，最新其次，其他按 id 排序
      filtered = filtered.sort((a, b) => {
        if (a.type === "熱門" && b.type !== "熱門") return -1;
        if (b.type === "熱門" && a.type !== "熱門") return 1;


        if (a.type === "最新" && b.type !== "最新") return -1;
        if (b.type === "最新" && a.type !== "最新") return 1;


        return a.id - b.id;
      });
    }




    return filtered;
  }, [selectedCategory, searchQuery, activeTab]);








  // 計算總頁數
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);








  // 取得當前頁面的文章
  const getCurrentPosts = () => {
    const startIndex = (currentPage - 1) * postsPerPage;
    const endIndex = startIndex + postsPerPage;
    return filteredPosts.slice(startIndex, endIndex);
  };








  // 當篩選條件改變時，回到第一頁
  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };








  const handleSearchChange = (query) => {
    setSearchQuery(query);
    setCurrentPage(1);
  };








  const handleTabChange = (tab) => {
    // 如果點擊的是已選中的頁籤，則取消選擇（回到初始狀態）
    if (activeTab === tab) {
      setActiveTab("");
    } else {
      setActiveTab(tab);
    }
    setCurrentPage(1);
  };








  // 分頁組件
  const BlogPagination = () => {
    if (totalPages <= 1) return null; // 如果只有一頁或沒有文章，不顯示分頁








    const generatePageNumbers = () => {
      const pages = [];
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
      return pages;
    };








    const handlePageChange = (page) => {
      if (page >= 1 && page <= totalPages && page !== currentPage) {
        setCurrentPage(page);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    };








    const pages = generatePageNumbers();








    return (
      <nav className="blog-pagination" aria-label="pagination">
        <button
          className="page-btn prev"
          aria-label="上一頁"
          disabled={currentPage === 1}
          onClick={() => handlePageChange(currentPage - 1)}
        >
          ‹
        </button>








        <div className="track">
          {pages.map((page) => (
            <button
              key={page}
              className={`page-num ${page === currentPage ? 'is-active' : ''}`}
              onClick={() => handlePageChange(page)}
            >
              {page}
            </button>
          ))}
        </div>








        <button
          className="page-btn next"
          aria-label="下一頁"
          disabled={currentPage === totalPages}
          onClick={() => handlePageChange(currentPage + 1)}
        >
          ›
        </button>
      </nav>
    );
  };








  return (
    <div className="blog-page" style={{ backgroundImage: 'url("./images/blog/blog_bg.jpg")' }}>
      <ScrollToTop/>
      {/* 1) 標題 */}
      <header className="blog-hero">
        <h1 className='titleBox_h1'>
          <img className='titleBox' src="./images/blog/blog_sign.svg" /* style={{ width: '510px' }} */ alt='市集地圖Market Map' />
        </h1>
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
      <div className="blog-deco" style={{ backgroundImage: 'url("./images/blog/blog_deco.svg")' }} />








      {/* 4) 黑框主內容區 */}
      <section className="blog-shell">
        <div className="blog-body">
          {/* 左側：類別篩選 */}
          <aside className="blog-select-col">
            <BlogSelect
              selectedCategory={selectedCategory}
              onCategoryChange={handleCategoryChange}
            />
            <div className="blog-illustration">
              <img src="./images/blog/women-two.svg" alt="blog illustration" />
            </div>
          </aside>








          {/* 右側：主要內容 */}
          <main className="blog-panel">
            {/* 上方工具列 */}
            <div className="blog-toolbar">
              <div className="tabs">
                <button
                  className={`tab ${activeTab === "熱門" ? "is-active" : ""}`}
                  onClick={() => handleTabChange("熱門")}
                >
                  <img src="./images/blog/hot.svg" alt="熱門圖示" />
                  熱門
                </button>
                <button
                  className={`tab ${activeTab === "最新" ? "is-active" : ""}`}
                  onClick={() => handleTabChange("最新")}
                >
                  <img src="./images/blog/new.svg" alt="最新圖示" />
                  最新
                </button>
              </div>








              <div className="actions">
                <div className="search">
                  <input
                    type="text"
                    placeholder="搜尋文章"
                    value={searchQuery}
                    onChange={(e) => handleSearchChange(e.target.value)}
                    onKeyPress={(e) => {
                      if (e.key === 'Enter') {
                      }
                    }}
                  />
                  <button className="icon-btn search" aria-label="search" style={{ backgroundImage: 'url("./images/blog/blog_search.svg")' }}>
                  </button>
                </div>
                <Link
                  to="/blog/write"
                  className="icon-btn write"
                  aria-label="撰寫文章"
                  style={{
                    backgroundImage: 'url("./images/blog/blog_write.png")',
                    backgroundSize: '25px 25px'
                  }}
                >
                </Link>
              </div>
            </div>








            {/* 搜尋結果提示 */}
            {(searchQuery || selectedCategory !== "所有文章") && (
              <div className="filter-info">
                找到 {filteredPosts.length} 篇文章
                {searchQuery && ` (搜尋: "${searchQuery}")`}
                {selectedCategory !== "所有文章" && ` (分類: ${selectedCategory})`}
              </div>
            )}








            {/* 卡片網格 */}
            <div className="blog-grid">
              {getCurrentPosts().length > 0 ? (
                getCurrentPosts().map((post) => (
                  <BlogCard key={post.id} {...post} type={post.type} />
                ))
              ) : (
                <div className="no-results">
                  <p>沒有找到符合條件的文章</p>
                </div>
              )}
            </div>








            {/* 分頁導航 */}
            <BlogPagination />
          </main>
        </div>
      </section>
      <div className="blog-footer-actions">
        <PageTop />
      </div>
    </div>
  );
}








export default Blog;








// #                       _oo0oo_
// #                      o8888888o
// #                      88" . "88
// #                      (| -_- |)
// #                      0\  =  /0
// #                    ___/`---'\___
// #                  .' \\|     |# '.
// #                 / \\|||  :  |||# \
// #                / _||||| -:- |||||- \
// #               |   | \\\  -  #/ |   |
// #               | \_|  ''\---/''  |_/ |
// #               \  .-\__  '-'  ___/-. /
// #             ___'. .'  /--.--\  `. .'___
// #          ."" '<  `.___\_<|>_/___.' >' "".
// #         | | :  `- \`.;`\ _ /`;.`/ - ` : | |
// #         \  \ `_.   \_ __\ /__ _/   .-` /  /
// #     =====`-.____`.___ \_____/___.-`___.-'=====
// #                       `=---='
// #
// #
// #     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// #
// #                      佛祖保佑        













