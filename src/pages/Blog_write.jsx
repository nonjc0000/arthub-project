import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../sass/all.scss";
import ScrollToTop from '../components/ScrollToTop'


function BlogWrite() {
    const [previewImage, setPreviewImage] = useState(null);
  const navigate = useNavigate();


  // 假資料：登入者
  const user = {
    name: "用戶名稱",
    avatar: "./images/blog/avatar.svg",
  };


  // 側欄分類
  const categories = [
    { key: "布作服飾",   label: "布作服飾", icon: "./images/blog/blogselect/2.svg" },
    { key: "文創設計",    label: "文創設計", icon: "./images/blog/blogselect/3.svg" },
    { key: "生活風格",      label: "生活風格", icon: "./images/blog/blogselect/4.svg" },
    { key: "插畫紙品",     label: "插畫紙品", icon: "./images/blog/blogselect/5.svg" },
    { key: "美食飲品",      label: "美食飲品", icon: "./images/blog/blogselect/6.svg" },
    { key: "居家療癒",      label: "居家療癒", icon: "./images/blog/blogselect/7.svg" },
    { key: "二手選物",    label: "二手選物", icon: "./images/blog/blogselect/8.svg" },
    { key: "飾品配件", label: "飾品配件", icon: "./images/blog/blogselect/9.svg" },
  ];


  // ✅ 改成「複選」：用陣列存
  const [selectedCategories, setSelectedCategories] = useState([]); // e.g. ["clothes", "life"]
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");


  // 加/移除分類
  const toggleCategory = (key) => {
    setSelectedCategories((prev) =>
      prev.includes(key) ? prev.filter((k) => k !== key) : [...prev, key]
    );
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    // 送出資料：selectedCategories 即為複選結果
    // ex: { categories: selectedCategories, title, content }
    alert(`已送出\n分類：${selectedCategories.join(", ") || "未選"}\n標題：${title}`);
    navigate("/blog");
  };


  const handleCancel = () => {
    navigate("/blog");
  };


  return (
    <div className="write-page" style={{ backgroundImage: 'url("./images/blog/blog_bg.jpg")' }}>
      <ScrollToTop/>
      <div className="write-card">
        <img src="./images/blog/book.svg" alt="裝飾圖片" className="book"/>
        {/* 頂部返回 */}
        <div className="write-topbar">
          <Link to="/blog" className="back-chip">
            <img src="./images/blog/post_back.svg" alt="返回文章列表" />
          </Link>
        </div>


        <div className="write-grid">
          {/* 左側：分類選單 */}
          <aside className="write-aside">
            <div className="writer">
              <img src={user.avatar} alt={user.name} className="writer-avatar" />
              <div className="writer-name">{user.name}</div>
            </div>


            <div className="aside-title">選擇發文看板（可複選）</div>


            <ul className="cat-list">
              {categories.map((c) => {
                const active = selectedCategories.includes(c.key);
                return (
                  <li key={c.key}>
                    <button
                      type="button"
                      className={`cat-item ${active ? "is-active" : ""}`}
                      onClick={() => toggleCategory(c.key)}
                      aria-pressed={active}
                    >
                      <img src={c.icon} alt="" />
                      <span>{c.label}</span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </aside>


          {/* 右側：表單 */}
          <main className="write-main">
            <form className="write-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <label className="form-label">文章標題</label>
                <input
                  type="text"
                  className="title-input"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="請輸入文章標題…"
                  maxLength={80}
                />
              </div>


              <div className="form-row">
                <label className="form-label">內容</label>
                <div className="content-box">
                  <textarea
                    className="content-area"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    placeholder="請輸入文章內容…"
                  />
                </div>
              </div>


            {/* 上傳*/}
            <div className="blog_upload-bar">
            {/* 隱藏的 input */}
            <input
                type="file"
                id="uploadInput"
                accept="image/*"
                style={{ display: "none" }}
                onChange={(e) => {
                if (e.target.files && e.target.files[0]) {
                    const file = e.target.files[0];
                    const url = URL.createObjectURL(file);
                    setPreviewImage(url);
                }
                }}
            />
            <button
                type="button"
                className="upload-btn"
                title="上傳圖片"
                onClick={() => document.getElementById("uploadInput").click()}
            >
                <img src="/images/blog/add_image.svg" alt="上傳圖片" />
            </button>
                            {previewImage && (
                <div className="preview-box">
                    <img src={previewImage} alt="預覽圖片" />
                </div>
                )}
            </div>


              <div className="blog_form-actions">
                <button type="button" className="btn btn-ghost" onClick={handleCancel}>
                  取消
                </button>
                <button type="submit" className="btn btn-primary">
                  發佈
                </button>
              </div>
            </form>
          </main>
        </div>
      </div>
    </div>
  );
}


export default BlogWrite;

