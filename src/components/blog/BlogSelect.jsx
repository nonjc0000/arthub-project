// BlogSelect.jsx
import React from 'react';

const BlogSelect = ({ selectedCategory, onCategoryChange }) => {
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
    <div className="blog-select">
      <ul>
        {categories.map(category => (
          <li key={category}>
            <a 
              href="#"
              className={selectedCategory === category ? 'active' : ''}
              onClick={(e) => {
                e.preventDefault();
                onCategoryChange(category);
              }}
            >
              {category}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};


        // "所有文章",
        // "布作服飾",
        // "文創設計",
        // "生活風格",
        // "插畫紙品",
        // "美食飲品",
        // "居家療癒",
        // "二手選物",
        // "飾品配件",
export default BlogSelect;