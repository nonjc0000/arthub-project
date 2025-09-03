// BlogSelect.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const BlogSelect = ({ selectedCategory, onCategoryChange, isInPostPage }) => {
  const categories = [
    { name: "所有文章", icon: "./images/blog/blogselect/1.svg" },
    { name: "布作服飾", icon: "./images/blog/blogselect/2.svg" },
    { name: "文創設計", icon: "./images/blog/blogselect/3.svg" },
    { name: "生活風格", icon: "./images/blog/blogselect/4.svg" },
    { name: "插畫紙品", icon: "./images/blog/blogselect/5.svg" },
    { name: "美食飲品", icon: "./images/blog/blogselect/6.svg" },
    { name: "居家療癒", icon: "./images/blog/blogselect/7.svg" },
    { name: "二手選物", icon: "./images/blog/blogselect/8.svg" },
    { name: "飾品配件", icon: "./images/blog/blogselect/9.svg" },
  ];

  return (
    <div className="blog-select">
      <ul>
        {categories.map(category => (
          <li key={category.name}>
            {/* 在文章列表頁使用 onClick，在文章頁則使用 Link */}
            {isInPostPage ? (
              <Link
                to={`/blog?category=${encodeURIComponent(category.name)}`}
                className={selectedCategory === category.name ? 'active' : ''}
              >
                <img src={category.icon} alt={category.name} className="category-icon" />
                <span>{category.name}</span>
              </Link>
            ) : (
              <a
                href="#"
                className={selectedCategory === category.name ? 'active' : ''}
                onClick={(e) => {
                  e.preventDefault();
                  onCategoryChange(category.name);
                }}
              >
                <img src={category.icon} alt={category.name} className="category-icon" />
                <span>{category.name}</span>
              </a>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BlogSelect;


// "所有文章",
// "布作服飾",
// "文創設計",
// "生活風格",
// "插畫紙品",
// "美食飲品",
// "居家療癒",
// "二手選物",
// "飾品配件",