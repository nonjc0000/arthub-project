import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Review_card from '../components/Review_card'
import PageTop from '../components/PageTop';
import ScrollToTop from '../components/ScrollToTop'




const arrReview = [
  {
    id: 1,
    img: "./images/Event_info/dog_pic.png",
    name: "布萊恩",
    date: "2025/06/05",
    review: "太棒了!",
    like_num: 23,
  },
  {
    id: 2,
    img: "./images/Event_info/dog_pic.png",
    name: "叫我第一名",
    date: "2025/06/05",
    review: "老闆很親切",
    like_num: 43,
  },
  {
    id: 3,
    img: "./images/Event_info/dog_pic.png",
    name: "好餓阿",
    date: "2025/06/05",
    review: "😋",
    like_num: 12,
  },
];




const Event_info = () => {
  // 小圖換大圖
  const [curImg, setCurImg] = useState(0);




  // 留言相關狀態
  const [reviews, setReviews] = useState(arrReview);
  const [newComment, setNewComment] = useState('');
  const [sortBy, setSortBy] = useState('newest'); // 'popular', 'oldest', 'newest'
  const [activeSortBtn, setActiveSortBtn] = useState('newest');




  const arrPhotos = [
    {
      imgName: "./images/Stall_info/kayle-kaupanger-J8ksCswaBYo-unsplash.jpg"
    },
    {
      imgName: "./images/Stall_info/grigorii-shcheglov-tCLgdsF4IVk-unsplash_11zon.jpg"
    },
    {
      imgName: "./images/Stall_info/jonathan-borba-PTBqz_jdM2s-unsplash.jpg"
    }


  ];




  // 新增留言功能
  const handleAddComment = () => {
    if (newComment.trim() === '') return;




    const newReview = {
      id: reviews.length + 1,
      img: "./images/Event_info/dog_pic.png", // 預設頭像
      name: "莊可蓮", // 可以改成登入用戶的名稱
      date: new Date().toISOString().split('T')[0].replace(/-/g, '/'), // 當前日期
      review: newComment,
      like_num: 0,
    };




    // 新留言加到最前面
    setReviews([newReview, ...reviews]);
    setNewComment(''); // 清空輸入框
  };




  // 處理 Enter 鍵送出
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleAddComment();
    }
  };




  // 排序留言功能
  const getSortedReviews = () => {
    let sortedReviews = [...reviews];




    switch (sortBy) {
      case 'popular':
        // 按讚數由高到低排序
        return sortedReviews.sort((a, b) => b.like_num - a.like_num);




      case 'oldest':
        // 按日期由舊到新排序（假設 id 越小越舊）
        return sortedReviews.sort((a, b) => a.id - b.id);




      case 'newest':
      default:
        // 按日期由新到舊排序（假設 id 越大越新）
        return sortedReviews.sort((a, b) => b.id - a.id);
    }
  };




  // 處理排序按鈕點擊
  const handleSortChange = (sortType) => {
    setSortBy(sortType);
    setActiveSortBtn(sortType);
  };




  // 處理按讚數更新（從 Review_card 回調）
  const handleLikeUpdate = (reviewId, newLikeCount) => {
    setReviews(prevReviews =>
      prevReviews.map(review =>
        review.id === reviewId
          ? { ...review, like_num: newLikeCount }
          : review
      )
    );
  };




  return (
    <main className='event_info_main'>
      <ScrollToTop />






      {/* 標題 */}
      <h1 className='titleBox_h1'>
        <img className='titleBox' src="./images/titlebox/event_titlebox.svg" alt='市集分類Market Type' />
      </h1>






      <div className='box_center'>
        <article className='info_box'>




          {/* 市集基本資訊 */}
          <section className='event_info_container'>




            {/* 照片區 */}
            <div className='pic_box'>




              {/* 大圖 */}
              <div className='main_pic'>
                <img src={arrPhotos[curImg].imgName} alt={`市集照片 ${curImg + 1}`} />
              </div>




              {/* 縮圖 */}
              <div className='thumbnail'>
                {arrPhotos.map((p, idx) => (
                  <button
                    key={p.imgName}
                    type="button"
                    className={idx === curImg ? 'thumb active' : 'thumb'}
                    onClick={() => setCurImg(idx)}
                    aria-label={`顯示第 ${idx + 1} 張`}
                  >
                    <img src={p.imgName} alt={`縮圖 ${idx + 1}`} />
                  </button>
                ))}
              </div>
            </div>




            {/* 市集名稱&時間&tag */}
            <div className='info'>
              <div>
                {/* 名稱 */}
                <h2 className='event_name'>台北 - 夏日微光季</h2>












                {/* 時間 */}
                <div className='time'>
                  <p>活動時間</p>
                  <p>2025/07/18</p>
                </div>




                {/* 位置 */}
                <div className='place'>
                  <p>活動位置</p>
                  <p>西門紅樓</p>
                  <a href="https://maps.app.goo.gl/z6zAFv1n4QU7WZYP6">
                    <img src="./images/Event_info/icon_pin.svg" alt="地點裝飾" />
                  </a>
                </div>
              </div>
              <div className='btn-box'>
                {/* 攤位地圖&攤位登記按鈕 */}
                <div className='stall_btn_box'>
                  <Link to='/Stall_map'>
                    <figure>
                      <img src="./images/Event_info/btn_stallMap.svg" alt="攤位地圖" />
                      <p>攤位地圖</p>
                    </figure>
                  </Link>
                  <Link to='/Stall_register'>
                    <figure>
                      <img src="./images/Event_info/btn_stallRegister.svg" alt="輸入攤位資訊" />
                      <div className='column'>
                        <p>輸入攤位資訊</p>
                        <p>(商家專屬)</p>




                      </div>
                    </figure>
                  </Link>
                </div>
                {/* 市集tag */}
                <div className='type_box'>
                  <p className='title'>市集類型</p>
                  <div className="tag_box">
                    <Link
                      to='/Find_type?type=美食飲品'
                      onClick={() => sessionStorage.setItem('navigatedFromHome', 'true')}
                    >
                      <p>美食飲品</p>
                    </Link>
                    <Link
                      to='/Find_type?type=文創設計'
                      onClick={() => sessionStorage.setItem('navigatedFromHome', 'true')}
                    >
                      <p>文創設計</p>
                    </Link>
                    <Link
                      to='/Find_type?type=飾品配件'
                      onClick={() => sessionStorage.setItem('navigatedFromHome', 'true')}
                    >
                      <p>飾品配件</p>
                    </Link>
                    <Link
                      to='/Find_type?type=二手選品'
                      onClick={() => sessionStorage.setItem('navigatedFromHome', 'true')}
                    >
                      <p>二手選品</p>
                    </Link>
                  </div>
                </div>
              </div>








            </div>












          </section>




          {/* 市集詳細內容 */}
          <section className='detail_info_container'>




            {/* 裝飾線 */}
            <figure className='deco_line'>
              <img src="./images/Event_info/deco_line.svg" alt="點點裝飾圖案" />
            </figure>




            <h4>活動資訊</h4>




            <figure className='detail_pic'>
              <img src="./images/Stall_info/mehrsa-MYqhyDFHiBo-unsplash_11zon.jpg" alt="市集照片" />
            </figure>




            {/* 文字說明區 */}
            <article className='info_desc'>




              <p className='title'>市集活動邀你一起感受生活的溫度</p>




              <p className='content'>
                這不只是一場市集，更是一場充滿故事與靈感的相遇。
                <br />
                我們邀請你走出日常，走進這個充滿創意、手感與人情味的空間──來自全台各地的手作職人、文創品牌、美食攤位、生活選物，以及街頭藝人和現場音樂演出，共同打造屬於每個人的慢生活片刻。
              </p>




              <ul className='content'>
                <span className='content'>現場亮點包含：</span>
                <li>超過 50+ 攤位 集結手作飾品、插畫文創、植栽香氛、原創設計</li>
                <li>在地風味與人氣甜點，讓味蕾也一起旅行</li>
                <li>限時快閃活動與品牌小禮物，不容錯過</li>
                <li>假日午後限定，溫柔系 live 音樂演出</li>
                <li>親子友善、毛孩可入場，一起共享療癒時光</li>
              </ul>




              <p className='content'>
                活動時間：（建議填入：例如 8/10-8/11，週六日 11:00 - 18:00）
                <br />
                活動地點：（建議填入地點 + 附近地標）
                <br />
                入場方式：免費參加，無需預約
                <br />
                不管你是熱愛手作的人、文青生活愛好者，還是只是想找個地方放鬆喘口氣，這裡都有屬於你的一角。來一場與人、物、風景的溫柔相遇吧。
              </p>




            </article>




          </section>




          {/* 市集評論區 */}
          <section className='review_container'>




            {/* 留言輸入框 */}
            <div className='review_input_box'>
              <img className='profile_pic' src="./images/blog/avatar.svg" alt="頭貼" />
              <div className='input'>
                <input
                  type="text"
                  value={newComment}
                  onChange={(e) => setNewComment(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="分享你的想法..."
                />
                <button onClick={handleAddComment}>
                  <img src="./images/Event_info/btn_enter.svg" alt="送出按鈕" />
                </button>
              </div>
            </div>




            {/* 留言控制按鈕 */}
            <div className='review_btn_box'>
              <p>留言區 ({reviews.length})</p>
              <div className='btn_box'>
                <button
                  className={activeSortBtn === 'popular' ? 'active' : ''}
                  onClick={() => handleSortChange('popular')}
                >
                  熱門
                </button>
                <button
                  className={activeSortBtn === 'oldest' ? 'active' : ''}
                  onClick={() => handleSortChange('oldest')}
                >
                  由舊至新
                </button>
                <button
                  className={activeSortBtn === 'newest' ? 'active' : ''}
                  onClick={() => handleSortChange('newest')}
                >
                  由新至舊
                </button>
              </div>
            </div>




            {/* 評論結果 */}
            <div className='event_review_box'>
              {getSortedReviews().map((review) => {
                return (
                  <Review_card
                    key={review.id}
                    id={review.id}
                    img={review.img}
                    name={review.name}
                    date={review.date}
                    review={review.review}
                    like_num={review.like_num}
                    onLikeUpdate={handleLikeUpdate}
                  />
                );
              })}
            </div>
          </section>
        </article>
      </div>




      {/* <PageTop /> */}
    </main>
  )
}




export default Event_info







