// BlogSelect.jsx - 圖示問題診斷版本
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const BlogSelect = ({ selectedCategory, onCategoryChange, isInPostPage }) => {
  const [isMobile, setIsMobile] = useState(false);

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

  // 檢測螢幕尺寸
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 640);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // 圖示載入錯誤處理
  const handleImageError = (e, categoryName) => {
    console.error(`圖示載入失敗: ${categoryName}`, e.target.src);
    // 可以設定備用圖示或隱藏圖示
    e.target.style.display = 'none';
  };

  // 圖示載入成功
  const handleImageLoad = (e, categoryName) => {
    console.log(`圖示載入成功: ${categoryName}`, e.target.src);
  };

  return (
    <div className="blog-select">
      <ul>
        {categories.map((category) => (
          <li key={category.name}>
            {isInPostPage ? (
              <Link
                to={`/blog?category=${encodeURIComponent(category.name)}`}
                className={selectedCategory === category.name ? 'active' : ''}
              >
                <img
                  src={category.icon}
                  alt={category.name}
                  className="category-icon"
                  onError={(e) => handleImageError(e, category.name)}
                  onLoad={(e) => handleImageLoad(e, category.name)}
                  // 手機版強制顯示屬性
                  style={isMobile ? {
                    display: 'block !important',
                    width: '16px !important',
                    height: '16px !important',
                    opacity: '1 !important',
                    flexShrink: 0
                  } : {}}
                />
                <span className="category-name">{category.name}</span>
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
                {/* 圖示診斷版本 */}
                <img
                  src={category.icon}
                  alt={category.name}
                  className="category-icon"
                  onError={(e) => handleImageError(e, category.name)}
                  onLoad={(e) => handleImageLoad(e, category.name)}
                  // 偵錯用：檢查圖示路徑
                  onLoad={() => console.log(`Icon loaded: ${category.icon}`)}
                  // 手機版強制樣式
                  style={isMobile ? {
                    display: 'block',
                    width: '16px',
                    height: '16px',
                    opacity: '1',
                    flexShrink: '0',
                    marginRight: '4px'
                  } : {}}
                />
                <span className="category-name">{category.name}</span>
              </a>
            )}
          </li>
        ))}
      </ul>

      {/* 偵錯用：顯示當前狀態 */}
      {isMobile && process.env.NODE_ENV === 'development' && (
        <div style={{ fontSize: '10px', color: '#999', padding: '4px' }}>
          DEBUG: Mobile mode, Icons should be 16px
        </div>
      )}
    </div>
  );
};

export default BlogSelect;

// 替代解決方案：使用 CSS 背景圖
export const BlogSelectWithBgIcons = ({ selectedCategory, onCategoryChange, isInPostPage }) => {
  const categories = [
    { name: "所有文章", icon: "1" },
    { name: "布作服飾", icon: "2" },
    { name: "文創設計", icon: "3" },
    { name: "生活風格", icon: "4" },
    { name: "插畫紙品", icon: "5" },
    { name: "美食飲品", icon: "6" },
    { name: "居家療癒", icon: "7" },
    { name: "二手選物", icon: "8" },
    { name: "飾品配件", icon: "9" },
  ];

  return (
    <div className="blog-select">
      <ul>
        {categories.map((category) => (
          <li key={category.name}>
            <a
              href="#"
              className={selectedCategory === category.name ? 'active' : ''}
              onClick={(e) => {
                e.preventDefault();
                onCategoryChange(category.name);
              }}
            >
              {/* 使用 CSS 背景圖替代 img 標籤 */}
              <div
                className="category-icon"
                style={{
                  backgroundImage: `url('./images/blog/blogselect/${category.icon}.svg')`,
                  backgroundSize: 'contain',
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'center',
                  width: '16px',
                  height: '16px',
                  flexShrink: 0
                }}
                title={category.name}
              />
              <span className="category-name">{category.name}</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};