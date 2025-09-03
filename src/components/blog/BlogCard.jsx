import React from "react";
import { Link } from "react-router-dom";

function BlogCard({ id, img, title, excerpt, tags = [], type }) {
    const getBadgeConfig = (type) => {
        switch (type) {
            case "熱門":
                return {
                    text: "熱門",
                    className: "badge-hot",
                    style: {
                        backgroundColor: "#ED972E",
                        backgroundImage: 'url("/images/blog/hot.svg")', // 建議用絕對路徑
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "left 10px center",
                        paddingLeft: "30px",
                        backgroundSize: "14px"
                    }
                };
            case "最新":
                return {
                    text: "最新",
                    className: "badge-new",
                    style: {
                        backgroundColor: "#ED972E",
                        backgroundImage: 'url("/images/blog/new.svg")', // 建議用絕對路徑
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "left 10px center",
                        paddingLeft: "30px",
                        backgroundSize: "16px"
                    }
                };
            default:
                return null;
        }
    };

    const badgeConfig = getBadgeConfig(type);

    return (
        <Link to={`/blog_post/${id}`} className="blog-card-link">
            <div className="blog-card">
                <div className="img-box">
                    <img src={img} alt={title} />
                    {badgeConfig && (
                        <div
                            className={`badge ${badgeConfig.className}`}
                            style={badgeConfig.style}  // ← 重點在這裡！
                        >
                            {badgeConfig.text}
                        </div>
                    )}
                </div>
                <div className="text-box">
                    <h3>{title}</h3>
                    <p>{excerpt}</p>
                    <div className="tags">
                        {tags.map((tag, index) => (
                            <span key={index} className="tag">#{tag}</span>
                        ))}
                    </div>
                </div>
            </div>
        </Link>
    );
}

export default BlogCard;