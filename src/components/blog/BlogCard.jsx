import React from "react";

function BlogCard({ img, title, excerpt, tags = [] }) {
    return (
        <div className="blog-card">
            <div className="img-box">
                <img src={img} alt={title} />
                <div className="badge">熱門</div>
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