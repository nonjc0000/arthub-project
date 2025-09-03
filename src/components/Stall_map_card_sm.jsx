import React from 'react'


const Stall_map_card_sm = () => {
  return (
    <article className='sm_card_show'>


      <div className='sm_card_wrap'>


        <div className='top'>
          {/* 喜歡 */}
          <figure className='like'><img src="./images/Stall_map/icon_like.svg" alt="" /><p>12</p></figure>
          {/* 標號 */}
          <div className='num'>
            <p >編號</p>
          </div>
        </div>


      </div>


      <div className='body'>
          <div className='title'>
            <p>攤位名稱</p>
          </div>
          <div className='tag_box'>
            <p>#標籤</p>
            <p>#標籤</p>
            <p>#標籤</p>
          </div>
      </div>
    </article>
  )
}


export default Stall_map_card_sm

