import React from "react";

function BlogSelect() {
    const categories = [
        "所有文章",
        "布作服飾",
        "文創設計",
        "生活風格",
        "插畫紙品",
        "美食飲品",
        "居家療癒",
        "二手選物",
        "飾品配件",
    ];

    return (
        <aside className="blog-select">
            <ul>
                {categories.map((cat, i) => (
                    <li key={i}>
                        <a href="#" className={i === 0 ? "active" : ""}>{cat}</a>
                    </li>
                ))}
            </ul>
        </aside>
    );
}

export default BlogSelect;