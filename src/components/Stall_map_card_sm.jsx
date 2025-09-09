import React from 'react'




const Stall_map_card_sm = ({name,num,tag}) => {
  return (
    <div className='stall_box'>
      <div className='stall_icon'>


      <img src="./images/Stall_map/stall.svg" alt="" />
      </div>
      <div className="tooltip_card">
        <article className='stall_map_card_sm'>




          <div className='sm_card_wrap'>




            <div className='top'>
              {/* 喜歡 */}
              <figure className='like'><img src="./images/Stall_map/icon_like.svg" alt="" /><p>12</p></figure>
              {/* 標號 */}
              <div className='num'>
                <p >{num}</p>
              </div>
            </div>




          </div>




          <div className='body'>
            <div className='title'>
              <p title={name}>{name}</p>
            </div>
            <div className='tag_box'>
              {tag.map((singleTag, index) => (
                <p key={index}>{singleTag}</p>
              ))}
            </div>
          </div>
        </article>


      </div>
    </div>
  )
}




export default Stall_map_card_sm







