import React from "react";
import { Link } from "react-router-dom";

function BlogCard({ img, title, excerpt, tags = [], type }) {
    const getBadgeConfig = (type) => {
        switch(type) {
            case "熱門":
                return { text: "熱門", className: "badge-hot" };
            case "最新":
                return { text: "最新", className: "badge-new" };
            default:
                return null;
        }
    };

    const badgeConfig = getBadgeConfig(type);

    return (
            <div className="blog-card">
                <div className="img-box">
                    <img src={img} alt={title} />
                    {badgeConfig && (
                        <div className={`badge ${badgeConfig.className}`}>
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
    );
}

export default BlogCard;