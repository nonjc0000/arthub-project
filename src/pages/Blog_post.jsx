import React, { useState, useMemo } from "react";
import { useParams, Link } from "react-router-dom";
import posts from "../data/posts.json";
import "../sass/all.scss";
import BlogSelect from "../components/blog/BlogSelect"

function BlogPost() {
  const { id } = useParams();
  const [selectedCategory, setSelectedCategory] = useState("所有文章");
  const [searchQuery, setSearchQuery] = useState("");

  const post = useMemo(
    () => posts.find(p => String(p.id) === String(id)),
    [id]
  );

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const handleSearchChange = (query) => {
    setSearchQuery(query);
  };

  if (!post) {
    return (
      <div className="post-page-container">
        <div className="post-wrapper" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', textAlign: 'center' }}>
          <div className="post-content-panel">
            <p>找不到這篇文章。</p>
            <Link to="/blog">回文章列表</Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="post-page-container">
      <div className="post-wrapper">
        <div className="post-body-container">
          {/* 左側選單欄位，並傳遞搜尋與分類狀態 */}
          <aside className="post-select-col">
            <BlogSelect
              selectedCategory={selectedCategory}
              onCategoryChange={handleCategoryChange}
              searchQuery={searchQuery}
              onSearchChange={handleSearchChange}
            />
          </aside>

          {/* 右側主要內容面板，這裡已移除搜尋框 */}
          <main className="post-content-panel">
            <article className="post-content">
              <div className="post-header">
                <h1 className="post-title">{post.title}</h1>
                <div className="post-meta">
                  <div className="author-info">
                    <img src={post.author.avatar} alt={post.author.name} className="avatar" />
                    <span>{post.author.name}</span>
                  </div>
                  <span className="post-date">{post.dateText}</span>
                  <div className="post-stats">
                    <div className="stat-item">
                      <i className="fa-solid fa-heart"></i>
                      <span>{post.likes}</span>
                    </div>
                    <div className="stat-item">
                      <i className="fa-solid fa-eye"></i>
                      <span>{post.views}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="post-image-box">
                <img src={post.cover} alt={post.title} />
              </div>

              <div
                className="post-main-body"
                dangerouslySetInnerHTML={{ __html: post.html }}
              />

              <div className="post-tags">
                {post.tags.map(t => <span key={t} className="tag">#{t}</span>)}
              </div>
            </article>

            <section className="comments-section">
              <h2>留言區 ({post.comments.length})</h2>
              <div className="comment-input-area">
                <textarea
                  className="comment-input"
                  placeholder="發表你的看法..."
                />
                <button className="submit-btn">送出</button>
              </div>

              <div className="comment-list">
                {post.comments.map((c, i) => (
                  <div key={i} className="comment">
                    <img src={c.avatar} alt={c.name} className="comment-avatar" />
                    <div className="comment-content">
                      <div className="comment-header">
                        <span className="comment-author">{c.name}</span>
                        <span className="comment-date">{c.time}</span>
                        <div className="comment-actions">
                          <button className="like-btn">
                            <i className="fa-solid fa-heart"></i>
                            <span>{c.likes}</span>
                          </button>
                        </div>
                      </div>
                      <p className="comment-text">{c.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
}

export default BlogPost;