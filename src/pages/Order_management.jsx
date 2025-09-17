import React from 'react'
import User_sidebar_left from '../components/User_sidebar_left';
import ScrollToTop from '../components/ScrollToTop'

// 訂單卡片
const Order_card = () => {
    return (
        <div className='order_card'>
            <ScrollToTop/>
            <div className='order_image'>
                <img src="./images/order_management/market1.png" alt="華山設計選物日" />
                <div className='order_date'>
                    <span className='month'>8月</span>
                    <span className='day'>24</span>
                </div>
                <div className='order_status_badge upcoming'>即將到來</div>
            </div>
            <div className='order_info'>
                <h3>華山設計選物日</h3>
                <p className='order_location'>風格選物 × 咖啡散步 × 文創市集</p>
                <div className='order_actions'>
                    <button className='btn_pass'>
                        <div className='btn_content'>
                            <img src="./images/order_management/pass_icon.svg" alt="" />
                            <span>查看憑證</span>
                        </div>
                    </button>
                    <button className='btn_comment'>
                        <div className='btn_content'>
                            <img src="./images/order_management/comment_icon.svg" alt="" />
                            <span>評論</span>
                        </div>
                    </button>
                </div>
            </div>
        </div>
    )
}

// 推薦卡片
const Recommended_card = () => {
    return (
        <div className='recommended_card'>
            <img src="./images/order_management/recommended1.png" alt="大稻埕貓路微章" />
            <div className='recommended_info'>
                <h4>大稻埕風格微旅</h4>
                <div className='recommended_tags'>
                    <span className='tag'>藝文展場</span>
                    <span className='tag'>小型市集</span>
                    <span className='tag'>河岸夕陽</span>
                </div>
                <div className='recommended_rating'>
                    <span className='stars'>★★★★★</span>
                    <span className='rating_text'>4.8(93) | 200人參加過</span>
                </div>
                <p className='price'>NT $800元起</p>
            </div>
        </div>
    )
}

const Order_management = () => {

    return (
        <main className='order_management_main'>
            <h1 className='titleBox_h1'>
                <img className='titleBox' src="./images/titlebox/order_management_titlebox.svg" alt='訂單管理Order Management' />
            </h1>

            <div className="hr_square_deco" style={{ backgroundImage: 'url("./images/decorations/hr_square_deco.svg")' }}></div>

            <section className="order_management_content_box">

                <User_sidebar_left />

                <div className="order_management_content">
                    <div className='order_status_tabs'>
                        <button className='status_tab active'>即將到來</button>
                        <button className='status_tab'>已完成</button>
                        <button className='status_tab'>取消中/已取消</button>
                    </div>

                    <div className='order_content_layout'>
                        <div className='order_list'>
                            <Order_card />
                            <Order_card />
                            <Order_card />
                            <Order_card />
                        </div>

                        <div className='recommended_section'>
                            <h3>屬於你的市集靈感</h3>

                            <Recommended_card />
                            <Recommended_card />
                        </div>
                    </div>
                </div>

            </section>

            <div className='order_management_deco-box'>
                <figure className='order_management_deco1'>
                    <img src="./images/decorations/deco-reading_teddy_bear.svg" alt="閱讀泰迪熊裝飾" />
                </figure>
            </div>

        </main>
    )
}

export default Order_management