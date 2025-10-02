import React, { useState, useMemo, useRef } from 'react'
import stall from '../data/stall.json'


const Stall_map = () => {
  const [arrStall, setArrStall] = useState(stall.map(s => ({
    ...s,
    likes: Math.floor(Math.random() * 50) + 5,
    reviews: [],
    isLiked: false
  })));
 
  const [selectedStall, setSelectedStall] = useState(null);
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('全部');
  const [sortBy, setSortBy] = useState('編號');
  const [reviewInput, setReviewInput] = useState('');
 
  // 地圖控制相關 state
  const [scale, setScale] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
 
  // 使用 ref 來追蹤拖移狀態，避免 state 更新導致的延遲
  const dragStartRef = useRef({ x: 0, y: 0 });
  const hasMovedRef = useRef(false);
  const lastPositionRef = useRef({ x: 0, y: 0 });
  const mapRef = useRef(null);


  const categories = ['全部', '#手作', '#美食', '#服飾', '#寵物', '#植栽'];


  const stallLayout = [
    ['01', '02', null, null, '07', '08', '09', '10', '11', '12'],
    ['03', '04', null, null, null, null, null, null, null, null],
    ['05', '06', null, '13', '14', '15', null, '19', '20', '21'],
    [null, null, null, '16', '17', '18', null, '22', '23', '24']
  ];


  const filterStall = useMemo(() => {
    let filtered = arrStall.filter((stall) => {
      const searchLower = search.toLowerCase();
      const matchSearch =
        stall.name.toLowerCase().includes(searchLower) ||
        stall.num.includes(search) ||
        stall.num.replace(/^0+/, '').includes(search);
     
      const matchCategory = selectedCategory === '全部' || stall.tag.some(tag => tag === selectedCategory);
      return matchSearch && matchCategory;
    });


    if (sortBy === '熱門') {
      filtered = [...filtered].sort((a, b) => b.likes - a.likes);
    } else {
      filtered = [...filtered].sort((a, b) => a.num.localeCompare(b.num));
    }


    return filtered;
  }, [search, selectedCategory, sortBy, arrStall]);


  const getStallByNum = (num) => {
    return arrStall.find(stall => stall.num === num);
  };


  const handleStallClick = (num, e) => {
    if (hasMovedRef.current) {
      e?.stopPropagation();
      return;
    }
   
    const stall = getStallByNum(num);
   
    if (selectedStall?.num === num) {
      setSelectedStall(null);
    } else {
      setSelectedStall(stall);
    }
  };


  const handleLike = (stallNum) => {
    setArrStall(prevStalls =>
      prevStalls.map(s =>
        s.num === stallNum
          ? {
              ...s,
              likes: s.isLiked ? s.likes - 1 : s.likes + 1,
              isLiked: !s.isLiked
            }
          : s
      )
    );
   
    if (selectedStall?.num === stallNum) {
      setSelectedStall(prev => ({
        ...prev,
        likes: prev.isLiked ? prev.likes - 1 : prev.likes + 1,
        isLiked: !prev.isLiked
      }));
    }
  };


  const handleAddReview = (stallNum) => {
    if (reviewInput.trim() === '') return;
   
    const newReview = {
      id: Date.now(),
      text: reviewInput,
      date: new Date().toLocaleString('zh-TW', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit'
      })
    };
   
    setArrStall(prevStalls =>
      prevStalls.map(s =>
        s.num === stallNum
          ? { ...s, reviews: [...s.reviews, newReview] }
          : s
      )
    );
   
    if (selectedStall?.num === stallNum) {
      setSelectedStall(prev => ({
        ...prev,
        reviews: [...prev.reviews, newReview]
      }));
    }
   
    setReviewInput('');
  };


  const handleCloseDetail = () => {
    setSelectedStall(null);
    setReviewInput('');
  };


  // 滑鼠事件 - 保持原樣
  const handleMouseDown = (e) => {
    if (e.target.closest('.grid_stall')) {
      return;
    }
   
    setIsDragging(true);
    hasMovedRef.current = false;
    dragStartRef.current = {
      x: e.clientX - position.x,
      y: e.clientY - position.y
    };
    lastPositionRef.current = position;
  };


  const handleMouseMove = (e) => {
    if (!isDragging) return;
   
    const newX = e.clientX - dragStartRef.current.x;
    const newY = e.clientY - dragStartRef.current.y;
   
    if (Math.abs(newX - lastPositionRef.current.x) > 3 ||
        Math.abs(newY - lastPositionRef.current.y) > 3) {
      hasMovedRef.current = true;
    }
   
    setPosition({ x: newX, y: newY });
  };


  const handleMouseUp = () => {
    setIsDragging(false);
    setTimeout(() => {
      hasMovedRef.current = false;
    }, 100);
  };


  // 改善後的觸控事件處理
  const handleTouchStart = (e) => {
    if (e.target.closest('.grid_stall')) {
      return;
    }
   
    const touch = e.touches[0];
    setIsDragging(true);
    hasMovedRef.current = false;
   
    dragStartRef.current = {
      x: touch.clientX - position.x,
      y: touch.clientY - position.y
    };
    lastPositionRef.current = position;
  };


  const handleTouchMove = (e) => {
    if (!isDragging) return;
   
    // 防止頁面滾動和彈跳效果
    e.preventDefault();
   
    const touch = e.touches[0];
    const newX = touch.clientX - dragStartRef.current.x;
    const newY = touch.clientY - dragStartRef.current.y;
   
    // 降低移動閾值，使觸控更靈敏
    if (Math.abs(newX - lastPositionRef.current.x) > 2 ||
        Math.abs(newY - lastPositionRef.current.y) > 2) {
      hasMovedRef.current = true;
    }
   
    // 使用 requestAnimationFrame 來平滑更新位置
    requestAnimationFrame(() => {
      setPosition({ x: newX, y: newY });
    });
  };


  const handleTouchEnd = () => {
    setIsDragging(false);
    setTimeout(() => {
      hasMovedRef.current = false;
    }, 100);
  };


  const handleZoomIn = () => {
    setScale(prev => Math.min(prev + 0.2, 2));
  };


  const handleZoomOut = () => {
    setScale(prev => Math.max(prev - 0.2, 0.5));
  };


  const handleResetView = () => {
    setScale(1);
    setPosition({ x: 0, y: 0 });
    lastPositionRef.current = { x: 0, y: 0 };
  };


  const handleWheel = (e) => {
    e.preventDefault();
    const delta = e.deltaY > 0 ? -0.1 : 0.1;
    setScale(prev => Math.max(0.5, Math.min(2, prev + delta)));
  };


  return (
    <main className='stall_map_google_main'>
      <h1 className='titleBox_h1'>
        <img
          className='titleBox'
          src="./images/titlebox/event_titlebox.svg"
          style={{ width: '510px' }}
          alt='攤位地圖'
        />
      </h1>


      <div className='map_container'>
        <aside className='sidebar'>
          <div className='search_section'>
            <div className='search_box'>
              <input
                type="text"
                placeholder='搜尋攤位名稱或編號...'
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <img src="./images/find_map/magnifier.svg" alt="搜尋" />
            </div>


            <div className='filter_controls'>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                {categories.map((cat) => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
             
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
              >
                <option value="編號">依編號</option>
                <option value="熱門">找熱門</option>
              </select>
            </div>
          </div>


          <div className='content_area'>
            {selectedStall ? (
              <div className='stall_detail'>
                <button className='close_btn' onClick={handleCloseDetail}>
                  <img src="./images/Stall_map/icon_close.svg" alt="關閉" />
                </button>
               
                <div className='detail_header'>
                  <div className='detail_image'>
                    <img src={selectedStall.imgUrl} alt={selectedStall.name} />
                  </div>
                  <div className='detail_info'>
                    <div className='detail_num'>#{selectedStall.num}</div>
                    <div className='detail_like'>
                      <img src="./images/Stall_map/icon_like.svg" alt="喜歡" />
                      <span>{selectedStall.likes}</span>
                    </div>
                  </div>
                </div>


                <div className='detail_body'>
                  <h2>{selectedStall.name}</h2>
                 
                  <div className='detail_tags'>
                    {selectedStall.tag.map((tag, index) => (
                      <span key={index} className='tag'>{tag}</span>
                    ))}
                  </div>


                  <div className='detail_actions'>
                    <button
                      className={`recommend_btn ${selectedStall.isLiked ? 'liked' : ''}`}
                      onClick={() => handleLike(selectedStall.num)}
                    >
                      <img src="./images/Stall_map/icon_like.svg" alt="推薦" />
                      {selectedStall.isLiked ? '已推薦' : '推薦'} ({selectedStall.likes})
                    </button>
                   
                    <div className='social_links'>
                      <a href='#'><img src="./images/Stall_map/icon_ins.svg" alt="Instagram" /></a>
                      <a href='#'><img src="./images/Stall_map/icon_fb.svg" alt="Facebook" /></a>
                      <a href='#'><img src="./images/Stall_map/icon_web.svg" alt="Website" /></a>
                    </div>
                  </div>


                  <div className='review_section'>
                    <h3>評論 ({selectedStall.reviews.length})</h3>
                    <div className='review_input'>
                      <input
                        type="text"
                        placeholder='寫評論...'
                        value={reviewInput}
                        onChange={(e) => setReviewInput(e.target.value)}
                        onKeyPress={(e) => {
                          if (e.key === 'Enter') {
                            handleAddReview(selectedStall.num);
                          }
                        }}
                      />
                      <button
                        className='submit_review_btn'
                        onClick={() => handleAddReview(selectedStall.num)}
                      >
                        送出
                      </button>
                    </div>
                   
                    {selectedStall.reviews.length > 0 ? (
                      <div className='reviews_list'>
                        {selectedStall.reviews.map((review) => (
                          <div key={review.id} className='review_item'>
                            <div className='review_header'>
                              <span className='review_author'>莊可蓮</span>
                              <span className='review_date'>{review.date}</span>
                            </div>
                            <p className='review_text'>{review.text}</p>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <p className='no_review'>尚無評論,成為第一個評論的人！</p>
                    )}
                  </div>
                </div>
              </div>
            ) : (
              <div className='stall_list'>
                <h2>所有攤位 ({filterStall.length})</h2>
                <div className='list_items'>
                  {filterStall.map((stall) => (
                    <div
                      key={stall.id}
                      className='list_item'
                      onClick={(e) => handleStallClick(stall.num, e)}
                    >
                      <div className='item_image'>
                        <img src={stall.imgUrl} alt={stall.name} />
                      </div>
                      <div className='item_info'>
                        <div className='item_header'>
                          <span className='item_num'>#{stall.num}</span>
                          <span className='item_like'>
                            <img src="./images/Stall_map/icon_like.svg" alt="喜歡" />
                            {stall.likes}
                          </span>
                        </div>
                        <h3>{stall.name}</h3>
                        <div className='item_tags'>
                          {stall.tag.slice(0, 3).map((tag, index) => (
                            <span key={index}>{tag}</span>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </aside>


        <div className='map_area'>
          <div className='map_controls'>
            <button className='control_btn' onClick={handleZoomIn} title="放大">
              <span style={{ fontSize: '20px', fontWeight: 'bold' }}>+</span>
            </button>
            <button className='control_btn' onClick={handleZoomOut} title="縮小">
              <span style={{ fontSize: '20px', fontWeight: 'bold' }}>−</span>
            </button>
            <button className='control_btn' onClick={handleResetView} title="重置">
              <span style={{ fontSize: '16px', fontWeight: 'bold' }}>⟲</span>
            </button>
          </div>


          <div
            className='map_wrapper'
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            onWheel={handleWheel}
            style={{
              cursor: isDragging ? 'grabbing' : 'grab',
              touchAction: 'none',
              WebkitUserSelect: 'none',
              userSelect: 'none'
            }}
          >
            <div
              className='stall_grid'
              ref={mapRef}
              style={{
                transform: `translate(${position.x}px, ${position.y}px) scale(${scale})`,
                transformOrigin: 'center center',
                transition: isDragging ? 'none' : 'transform 0.1s ease-out',
                willChange: 'transform'
              }}
            >
              {stallLayout.map((row, rowIndex) => (
                <div key={rowIndex} className='grid_row'>
                  {row.map((stallNum, colIndex) => {
                    if (stallNum === null) {
                      return <div key={colIndex} className='grid_empty'></div>;
                    }
                   
                    const stallData = getStallByNum(stallNum);
                    const isSelected = selectedStall?.num === stallNum;
                   
                    return (
                      <div
                        key={colIndex}
                        className={`grid_stall ${isSelected ? 'selected' : ''}`}
                        onClick={(e) => handleStallClick(stallNum, e)}
                      >
                        <div className='stall_icon'>
                          <img src="./images/Stall_map/stall.svg" alt={`攤位${stallNum}`} />
                          <span className='stall_number'>{stallNum}</span>
                        </div>
                       
                        {stallData && (
                          <div className='hover_card'>
                            <div className='hover_card_header'>
                              <span className='hover_num'>#{stallData.num}</span>
                              <span className='hover_like'>
                                <img src="./images/Stall_map/icon_like.svg" alt="喜歡" />
                                {stallData.likes}
                              </span>
                            </div>
                            <h4>{stallData.name}</h4>
                            <div className='hover_tags'>
                              {stallData.tag.map((tag, index) => (
                                <span key={index}>{tag}</span>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};


export default Stall_map;



