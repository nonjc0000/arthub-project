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
    like_num: "23",
  },
  {
    id: 2,
    img: "./images/Event_info/dog_pic.png",
    name: "叫我第一名",
    date: "2025/06/05",
    review: "老闆很親切",
    like_num: "43",
  },
  {
    id: 3,
    img: "./images/Event_info/dog_pic.png",
    name: "好餓阿",
    date: "2025/06/05",
    review: "😋",
    like_num: "12",
  },




];








const Event_info = () => {


  // 小圖換大圖
  const [curImg, setCurImg] = useState(0);
  const arrPhotos = [
    {
      imgName: "./images/Event_info/pic2.png"
    },
    {
      imgName: "./images/Event_info/pic3.png"
    },
    {
      imgName: "./images/Event_info/pic4.png"
    },
    {
      imgName: "./images/Event_info/pic5.png"
    },
    {
      imgName: "./images/Event_info/pic6.png"
    },
  ]




  return (
    <main className='event_info_main'>
      <ScrollToTop />

      {/* 標題 */}
      <h1 className='titleBox_h1'>
        <img className='titleBox' src="./images/titlebox/find_type_titlebox.svg" /* style={{ width: '510px' }} */ alt='市集分類Market Type' />
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
            < div className='info' >




              {/* 名稱 */}
              <h3 h3 className='event_name' > 台北 - 閃亮生活</h3>


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
















              {/* 市集tag */}
              <div className='type_box'>
                <p className='title'>市集類型</p>
                <div className="tag_box">
                  <Link to='/Find_type'><p>手做體驗</p></Link>
                  <Link to='/Find_type'><p>有機農產</p></Link>
                  <Link to='/Find_type'><p>植栽花藝</p></Link>
                  <Link to='/Find_type'><p>二手商品</p></Link>
                  <Link to='/Find_type'><p>流動餐車</p></Link>
                  <Link to='/Find_type'><p>服飾配件</p></Link>
                  <Link to='/Find_type'><p>有機農產</p></Link>
                  <Link to='/Find_type'><p>有機農產</p></Link>
                </div>
              </div>
















            </div>
















            {/* 攤位地圖&攤位登記按鈕 */}
            <div className='stall_btn_box'>
              <Link to='/Stall_map'><figure><img src="./images/Event_info/btn_stallMap.svg" alt="攤位地圖" /><p>攤位地圖</p></figure></Link>
              <Link to='/Stall_register'><figure><img src="./images/Event_info/btn_stallRegister.svg" alt="輸入攤位資訊" /><p>輸入攤位資訊</p><p>(商家專屬)</p></figure></Link>
            </div>








          </section>
















          {/* 市集詳細內容 */}
          <section className='detail_info_container'>








            {/* 裝飾線 */}
            <figure className='deco_line'><img src="./images/Event_info/deco_line.svg" alt="點點裝飾圖案" /></figure>








            <h4>活動資訊</h4>








            <figure className='detail_pic'><img src="./images/Event_info/pic_1.png" alt="市集照片" /></figure>








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
              <img className='profile_pic' src="./images/Event_info/dog_pic.png" alt="頭貼" />
              <div className='input'>
                <input type="text" />
                <button><img src="./images/Event_info/btn_enter.svg" alt="送出按鈕" /></button>
              </div>
            </div>








            {/* 留言控制按鈕 */}
            <div className='review_btn_box'>
              <p>留言區</p>
              <div className='btn_box'>
                <button>熱門</button>
                <button>由舊至新</button>
                <button>由新至舊</button>
              </div>




            </div>








            {/* 評論結果 */}
            <div className='event_review_box'>
              {arrReview.map((reviews) => {
                return (
                  <Review_card
                    key={reviews.id}
                    img={reviews.img}
                    name={reviews.name}
                    date={reviews.date}
                    review={reviews.review}
                    like_num={reviews.like_num}




                  />
                );
              })}




            </div>
          </section>
        </article>
      </div>


      <PageTop />
    </main>
  )
}
















export default Event_info





































