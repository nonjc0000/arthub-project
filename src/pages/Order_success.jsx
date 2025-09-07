import React from 'react'
import { Link } from 'react-router-dom'

const Order_success = () => {
    return (
        <main className='order_success_main'>
            <div className='success_container'>
                <div className='success_content'>
                    <h1 className='success_title'>交易結果</h1>

                    <div className='success_icon'>
                        <img src="./images/logo_white.svg" alt="集藝logo" />
                    </div>

                    <h2 className='success_message'>訂購成功</h2>

                    <Link to="/" className='back_home_btn'>
                        回首頁
                    </Link>
                </div>

                <figure className='character_hands'>
                    <img src="./images/Order_success/hands_heart.svg" alt="比愛心的手勢" />
                </figure>
            </div>
        </main>
    )
}

export default Order_success