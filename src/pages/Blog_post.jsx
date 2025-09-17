import React, { useMemo, useState } from "react";
import { useParams, Link } from "react-router-dom";
import posts from "../data/posts.json";
import ScrollToTop from '../components/ScrollToTop'


function BlogPost() {
  const { id } = useParams();


  // 取得當前文章
  const post = useMemo(
    () => posts.find((p) => String(p.id) === String(id)),
    [id]
  );


  // ====== 文章「愛心」狀態（本機一人一讚，可收回；仍用 localStorage） ======
  const [postLikeCount, setPostLikeCount] = useState(
    post ? Number(post.likes) || 0 : 0
  );
  const [postLiked, setPostLiked] = useState(() => {
    if (!post) return false;
    const saved = localStorage.getItem(`post:${post.id}:liked`);
    return saved === "1";
  });
  const togglePostLike = () => {
    if (!post) return;
    setPostLikeCount((c) => Math.max(0, c + (postLiked ? -1 : 1)));
    const next = !postLiked;
    setPostLiked(next);
    localStorage.setItem(`post:${post.id}:liked`, next ? "1" : "0");
  };


  // ====== 收藏（切換圖示，不記數；仍用 localStorage） ======
  const [postCollected, setPostCollected] = useState(() => {
    if (!post) return false;
    const saved = localStorage.getItem(`post:${post.id}:collected`);
    return saved === "1";
  });
  const togglePostCollected = () => {
    if (!post) return;
    const next = !postCollected;
    setPostCollected(next);
    localStorage.setItem(`post:${post.id}:collected`, next ? "1" : "0");
  };


  // ====== 留言（不持久化，重整就清空） ======
  // 以原始 posts.json 的留言為初始值；之後只放在 state 中
  const [comments, setComments] = useState(() => (post?.comments ?? []));
  // 針對每則留言的讚數與是否被按讚，也只放在 state
  const [commentLikes, setCommentLikes] = useState(
    (post?.comments ?? []).map((c) => Number(c.likes) || 0)
  );
  const [likedComments, setLikedComments] = useState(
    (post?.comments ?? []).map(() => false)
  );


  // 新增留言輸入框
  const [newComment, setNewComment] = useState("");


  // 送出留言
  const handleAddComment = () => {
    const text = newComment.trim();
    if (!text || !post) return;


    const now = new Date();
    const stamp = `${now.getFullYear()}/${String(now.getMonth() + 1).padStart(2, "0")}/${String(
      now.getDate()
    ).padStart(2, "0")} ${String(now.getHours()).padStart(2, "0")}:${String(
      now.getMinutes()
    ).padStart(2, "0")}`;


    const item = {
      name: "訪客",
      avatar: "/images/blog/avatar.svg", // ✅ public 路徑，確保可讀
      time: stamp,
      text,
      likes: 0,
    };


    // 新留言加到最上面
    setComments((prev) => [item, ...prev]);
    setCommentLikes((prev) => [0, ...prev]);
    setLikedComments((prev) => [false, ...prev]);
    setNewComment("");
  };


  // 單則留言按讚
  const toggleCommentLike = (idx) => {
    setCommentLikes((prev) => {
      const next = [...prev];
      next[idx] = Math.max(0, next[idx] + (likedComments[idx] ? -1 : 1));
      return next;
    });
    setLikedComments((prev) => {
      const next = [...prev];
      next[idx] = !prev[idx];
      return next;
    });
  };


  if (!post) {
    return (
      <div className="post-page-container">
        <div
          className="post-wrapper"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            minHeight: "100vh",
            textAlign: "center",
          }}
        >
          <div className="post-content-panel">
            <p>找不到這篇文章。</p>
            <Link to="/blog">回文章列表</Link>
          </div>
        </div>
      </div>
    );
  }


  return (
    <div
      className="post-page-container"
      style={{ backgroundImage: 'url("./images/blog/blog_bg.jpg")' }}
    >
      <ScrollToTop/>
      <div className="post-wrapper">
        {/* 單欄版面（移除左側篩選欄） */}
        <main className="post-content-panel">
          {/* 返回列表膠囊 */}
          <Link to="/blog" className="back-chip">
            <img src="./images/blog/post_back.svg" alt="返回文章列表" />
          </Link>


          <article className="post-content">
            <div className="post-header">
              <h1 className="post-title">{post.title}</h1>


              <div className="post-meta">
                <div className="author-info">
                  <img
                    src={post.author.avatar}
                    alt={post.author.name}
                    className="avatar"
                  />
                  <span>{post.author.name}</span>
                </div>


                <span className="post-date">{post.dateText}</span>


                <div className="post-stats">
                  {/* Like */}
                  <button
                    type="button"
                    className={`stat-item like ${postLiked ? "active" : ""}`}
                    onClick={togglePostLike}
                    aria-label={postLiked ? "收回讚" : "按讚"}
                    title={postLiked ? "收回讚" : "按讚"}
                  >
                    <img
                      src={
                        postLiked
                          ? "./images/blog/comment_like1.svg"
                          : "./images/blog/comment_like2.svg"
                      }
                      alt="Like"
                    />
                    <span>{postLikeCount}</span>
                  </button>


                  {/* 收藏 */}
                  <button
                    type="button"
                    className={`stat-item collect ${postCollected ? "active" : ""}`}
                    onClick={togglePostCollected}
                    aria-label={postCollected ? "取消收藏" : "加入收藏"}
                    title={postCollected ? "取消收藏" : "加入收藏"}
                  >
                    <img
                      src={
                        postCollected
                          ? "./images/blog/collection1.svg"
                          : "./images/blog/collection.svg"
                      }
                      alt="Collection"
                    />
                    <span>收藏</span>
                  </button>


                  {/* Comment：顯示目前 state 的留言數 */}
                  <button className="stat-item" type="button">
                    <img src="./images/blog/comment.svg" alt="Comment" />
                    <span>{comments.length}</span>
                  </button>


                  {/* Share */}
                  <button className="stat-item" type="button">
                    <img src="./images/blog/share.svg" alt="Share" />
                    <span>分享</span>
                  </button>
                </div>
              </div>
            </div>


            {/* 圓角大圖 */}
            <div className="post-image-box hero-round">
              <img src={post.cover} alt={post.title} />
            </div>


            {/* 文章內文 */}
            <div
              className="post-main-body"
              dangerouslySetInnerHTML={{ __html: post.html }}
            />


            {/* 虛線分隔 */}
            <div className="dashed-sep" />


            {/* 標籤 */}
            <div className="post-tags">
              {post.tags.map((t) => (
                <Link
                  key={t}
                  to={`/blog?tag=${encodeURIComponent(t)}`}
                  className="tag"
                >
                  #{t}
                </Link>
              ))}
            </div>
          </article>


          {/* 留言區 */}
          <section className="comments-section">
            {/* 分隔線裝飾 */}
            <div className="comment-sep">
              <img src="./images/blog/post_deco.svg" alt="分隔線" />
            </div>


            <div className="comment-input-area">
              <div className="input-wrapper">
                <input
                  type="text"
                  className="comment-input"
                  placeholder="留言分享你的想法"
                  value={newComment}
                  onChange={(e) => setNewComment(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleAddComment()}
                />
                <button
                  className="submit-btn"
                  type="button"
                  aria-label="送出留言"
                  onClick={handleAddComment}
                >
                  <img src="./images/blog/summit.svg" alt="送出" />
                </button>
              </div>
            </div>


            <div className="comment-list">
              {comments.map((c, i) => (
                <div key={i} className="comment">
                  <img
                    src={c.avatar}
                    alt={c.name}
                    className="comment-avatar"
                  />
                  <div className="comment-content">
                    <div className="comment-header">
                      <div className="author-time">
                        <span className="comment-author">{c.name}</span>
                        <span className="comment-date">{c.time}</span>
                      </div>


                      <div className="comment-actions">
                        <button
                          type="button"
                          className={`c-like ${likedComments[i] ? "active" : ""}`}
                          onClick={() => toggleCommentLike(i)}
                          aria-label={likedComments[i] ? "收回讚" : "按讚"}
                          title={likedComments[i] ? "收回讚" : "按讚"}
                        >
                          <img
                            src={
                              likedComments[i]
                                ? "./images/blog/comment_like1.svg"
                                : "./images/blog/comment_like2.svg"
                            }
                            alt="like"
                          />
                          <span>{commentLikes[i]}</span>
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
  );
}


export default BlogPost;



