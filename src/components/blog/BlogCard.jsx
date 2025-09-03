// BlogCard.jsx - RWD 優化版本
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function BlogCard({
    id,
    img,
    title,
    excerpt,
    tags = [],
    type,
    layoutMode = "vertical", // 新增：支援水平/垂直布局
    loading = false // 新增：載入狀態
}) {
    const [isMobile, setIsMobile] = useState(false);
    const [imageLoaded, setImageLoaded] = useState(false);
    const [imageError, setImageError] = useState(false);

    // 檢測螢幕尺寸
    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth <= 640);
        };

        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const getBadgeConfig = (type) => {
        switch (type) {
            case "熱門":
                return {
                    text: "熱門",
                    className: "badge-hot",
                    style: {
                        backgroundColor: "#ED972E",
                        backgroundImage: 'url("./images/blog/hot.svg")',
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "left 8px center",
                        paddingLeft: isMobile ? "26px" : "30px",
                        backgroundSize: isMobile ? "12px" : "14px"
                    }
                };
            case "最新":
                return {
                    text: "最新",
                    className: "badge-new",
                    style: {
                        backgroundColor: "#ED972E",
                        backgroundImage: 'url("./images/blog/new.svg")',
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "left 8px center",
                        paddingLeft: isMobile ? "26px" : "30px",
                        backgroundSize: isMobile ? "14px" : "16px"
                    }
                };
            default:
                return null;
        }
    };

    const badgeConfig = getBadgeConfig(type);

    // 圖片載入處理
    const handleImageLoad = () => {
        setImageLoaded(true);
    };

    const handleImageError = () => {
        setImageError(true);
        setImageLoaded(true);
    };

    // 決定卡片布局類名
    const getCardClassName = () => {
        let className = "blog-card";

        if (loading) {
            className += " skeleton";
        }

        if (isMobile && layoutMode === "horizontal") {
            className += " horizontal";
        }

        return className;
    };

    // 標題截取邏輯（確保在不同螢幕尺寸下都能正確顯示）
    const getTruncatedTitle = () => {
        if (!title) return "";

        let maxLength;
        if (isMobile) {
            maxLength = layoutMode === "horizontal" ? 40 : 50;
        } else {
            maxLength = 60;
        }

        return title.length > maxLength ? title.slice(0, maxLength) + "..." : title;
    };

    // 摘要截取邏輯
    const getTruncatedExcerpt = () => {
        if (!excerpt) return "";

        let maxLength;
        if (isMobile) {
            maxLength = layoutMode === "horizontal" ? 80 : 100;
        } else {
            maxLength = 120;
        }

        return excerpt.length > maxLength ? excerpt.slice(0, maxLength) + "..." : excerpt;
    };

    // 標籤顯示邏輯（手機版限制顯示數量）
    const getVisibleTags = () => {
        if (!Array.isArray(tags)) return [];

        let maxTags;
        if (isMobile) {
            maxTags = layoutMode === "horizontal" ? 2 : 3;
        } else {
            maxTags = 4;
        }

        return tags.slice(0, maxTags);
    };

    // 載入中的骨架屏
    if (loading) {
        return (
            <div className="blog-card-link">
                <div className={getCardClassName()}>
                    <div className="img-box">
                        <div className="skeleton-img"></div>
                    </div>
                    <div className="text-box">
                        <div className="skeleton-title"></div>
                        <div className="skeleton-excerpt"></div>
                        <div className="tags">
                            <div className="skeleton-tag"></div>
                            <div className="skeleton-tag"></div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <Link
            to={`/blog_post/${id}`}
            className="blog-card-link"
            // 輔助功能增強
            aria-label={`閱讀文章：${title}`}
        >
            <article className={getCardClassName()}>
                <div className="img-box">
                    {/* 圖片載入優化 */}
                    <img
                        src={imageError ? "./images/blog/default-post.jpg" : img}
                        alt={title}
                        onLoad={handleImageLoad}
                        onError={handleImageError}
                        loading="lazy" // 原生懶載入
                        style={{
                            opacity: imageLoaded ? 1 : 0,
                            transition: 'opacity 0.3s ease'
                        }}
                    />

                    {/* 圖片載入中的佔位符 */}
                    {!imageLoaded && (
                        <div
                            className="image-placeholder"
                            style={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                width: '100%',
                                height: '100%',
                                background: 'linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%)',
                                backgroundSize: '200% 100%',
                                animation: 'loading 1.5s infinite'
                            }}
                        />
                    )}

                    {/* 徽章 */}
                    {badgeConfig && (
                        <div
                            className={`badge ${badgeConfig.className}`}
                            style={badgeConfig.style}
                            role="img"
                            aria-label={badgeConfig.text}
                        >
                            {badgeConfig.text}
                        </div>
                    )}
                </div>

                <div className="text-box">
                    <h3 title={title}>{getTruncatedTitle()}</h3>
                    <p title={excerpt}>{getTruncatedExcerpt()}</p>

                    <div className="tags" role="list">
                        {getVisibleTags().map((tag, index) => (
                            <span
                                key={index}
                                className="tag"
                                role="listitem"
                                title={`標籤: ${tag}`}
                            >
                                #{tag}
                            </span>
                        ))}

                        {/* 如果有更多標籤被隱藏，顯示 +N */}
                        {tags.length > getVisibleTags().length && (
                            <span
                                className="tag tag-more"
                                title={`還有 ${tags.length - getVisibleTags().length} 個標籤`}
                            >
                                +{tags.length - getVisibleTags().length}
                            </span>
                        )}
                    </div>
                </div>
            </article>
        </Link>
    );
}

// 新增：記憶化組件以提升性能
export default React.memo(BlogCard, (prevProps, nextProps) => {
    // 只有當這些關鍵屬性改變時才重新渲染
    return (
        prevProps.id === nextProps.id &&
        prevProps.title === nextProps.title &&
        prevProps.excerpt === nextProps.excerpt &&
        prevProps.img === nextProps.img &&
        prevProps.type === nextProps.type &&
        JSON.stringify(prevProps.tags) === JSON.stringify(nextProps.tags)
    );
});

// 導出用於不同布局的組件變體
export const BlogCardHorizontal = (props) => (
    <BlogCard {...props} layoutMode="horizontal" />
);

export const BlogCardVertical = (props) => (
    <BlogCard {...props} layoutMode="vertical" />
);