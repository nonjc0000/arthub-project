import React, { useState, useMemo } from 'react'
import stall from '../data/stall.json'


const Stall_map = () => {
  // 使用真實攤位資料
  const [arrStall, setArrStall] = useState(stall.map(s => ({
    ...s,
    likes: 12,
    reviews: []
  })));
 
  const [selectedStall, setSelectedStall] = useState(null);
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('全部');
  const [sortBy, setSortBy] = useState('編號');
  const [reviewInput, setReviewInput] = useState('');
 
  const categories = ['全部', '#手作', '#美食', '#服飾', '#寵物', '#植栽'];


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
      filtered = [...filtered].sort(() => Math.random() - 0.5);
    } else {
      filtered = [...filtered].sort((a, b) => a.num.localeCompare(b.num));
    }


    return filtered;
  }, [search, selectedCategory, sortBy, arrStall]);


  const stallLayout = [
    ['01', '02', null, null, '07', '08', '09', '10', '11', '12'],
    ['03', '04', null, null, null, null, null, null, null, null],
    ['05', '06', null, '13', '14', '15', null, '19', '20', '21'],
    [null, null, null, '16', '17', '18', null, '22', '23', '24']
  ];


  const getStallByNum = (num) => {
    return arrStall.find(stall => stall.num === num);
  };


  const handleStallClick = (num) => {
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
        s.num === stallNum ? { ...s, likes: s.likes + 1 } : s
      )
    );
   
    if (selectedStall?.num === stallNum) {
      setSelectedStall(prev => ({ ...prev, likes: prev.likes + 1 }));
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
        {/* 左側面板 */}
        <aside className='sidebar'>
          {/* 搜尋區 */}
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


            {/* 篩選控制 */}
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


          {/* 內容區域 */}
          <div className='content_area'>
            {selectedStall ? (
              <div className='stall_detail'>
                <button className='close_btn' onClick={handleCloseDetail}>
                  <img src="./images/Stall_map/icon_close.svg" alt="關閉" />
                </button>
               
                <div className='detail_header'>
                  <div className='detail_image'>
                    <img src="/images/find_map/festival_img.jpg" alt={selectedStall.name} />
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
                      className='recommend_btn'
                      onClick={() => handleLike(selectedStall.num)}
                    >
                      <img src="./images/Stall_map/icon_like.svg" alt="推薦" />
                      推薦 ({selectedStall.likes})
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
                              <span className='review_author'>匿名用戶</span>
                              <span className='review_date'>{review.date}</span>
                            </div>
                            <p className='review_text'>{review.text}</p>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <p className='no_review'>尚無評論，成為第一個評論的人！</p>
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
                      onClick={() => handleStallClick(stall.num)}
                    >
                      <div className='item_image'>
                        <img src="/images/find_map/festival_img.jpg" alt={stall.name} />
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


        {/* 右側地圖 */}
        <div className='map_area'>
          <div className='stall_grid'>
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
                      onClick={() => handleStallClick(stallNum)}
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
    </main>
  );
};


export default Stall_map;

