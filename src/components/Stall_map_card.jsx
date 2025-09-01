import React from 'react'
import { Link } from 'react-router-dom'


const Stall_map_card = () => {
    return (
        <article className='stall_card'>


            <div className='stall_card_wrap'>


                <div className='top'>
                    {/* 喜歡 */}
                    <figure className='like'><img src="./images/Stall_map/icon_like.svg" alt="" /><p>12</p></figure>
                    {/* 標號 */}
                    <div className='num'>


                        <p >01</p>
                    </div>
                </div>


                <div className='bottom'>
                    {/* tag標籤 */}
                    <p>#類別</p>
                    <p>#類別</p>
                    <p>#類別</p>
                </div>


            </div>


            <div className='stall_card_body'>
                <div className='title'>
                    <p >攤位名稱</p>


                </div>
                <div className='stall_card_btn'>


                    <div className='btn_box'>
                        {/* 推薦按鈕 */}
                        <div className='like_btn_box'>
                            <button><img src="./images/Stall_map/icon_like.svg" alt="" />推薦</button>
                        </div>


                        {/* 社群連結按鈕 */}
                        <div className='social_btn_box'>
                            <button><img src="./images/Stall_map/icon_ins.svg" alt="instagram" /></button>
                            <button><img src="./images/Stall_map/icon_fb.svg" alt="facebook" /></button>
                            <button><img src="./images/Stall_map/icon_web.svg" alt="個人網站" /></button>
                        </div>


                    </div>




                    {/* 輸入評論*/}
                    <div className='review_box'>
                        <form action="">
                            <div className='review'>
                                <input type="text" id='stall_review' placeholder='寫評論...' />
                            </div>
                        </form>


                    </div>


                    <div className='stall_card_review'>
                        <p>尚無評論</p>
                    </div>
                </div>
            </div>


        </article>
    )
}


export default Stall_map_card