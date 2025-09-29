import React from 'react'
import ScrollToTop from '../components/ScrollToTop'

const About = () => {
    return (
        <main className='about_us_main'>
            <ScrollToTop/>
            {/* Hero Section */}
            <section className='hero_section'>
                <div className='hero_image'>
                    <img src="./images/About/about_img.png" alt="關於我們圖片" />
                </div>
            </section>

            {/* About Us Content */}
            <section className='about_content_section'>
                <div className='about_content_container'>
                    <h2 className='section_title'>關於集藝</h2>
                    
                    <div className='about_description'>
                        <p>
                            便利性指資訊查詢簡單、介面友善、快速找到所需資訊；多樣性展現整合資訊種類豐富、涵蓋範圍廣泛、滿足不同需求。平台在資訊整合技術方面的能力。包括智能分類、資訊更新等特色，強調平台在資訊處理的專業能力。針對使用者體驗的服務保證。包含資訊準確性維護、使用問題協助、功能使用指導、意見回饋處理等服務內容，確保使用者能有效利用平台資源。
                        </p>
                    </div>
                </div>
            </section>

            {/* Company Info Section */}
            <section className='company_info_section'>
                <div className='company_info_container'>
                    <h2 className='section_title'>公司資訊</h2>
                    
                    <div className='info_content'>
                        <div className='info_details'>
                            <div className='info_item'>
                                <span className='info_label'>公司位置</span>
                                <span className='info_value'>110台北市信義區信義路五段18號</span>
                            </div>
                            
                            <div className='info_item'>
                                <span className='info_label'>負責人</span>
                                <span className='info_value'>莊可蓮</span>
                            </div>
                            
                            <div className='info_item'>
                                <span className='info_label'>聯絡電話</span>
                                <span className='info_value'>02-2038-5438</span>
                            </div>
                            
                            <div className='info_item'>
                                <span className='info_label'>營業時間</span>
                                <span className='info_value'>週一至週五 10:00～18:00（國定假日休息）</span>
                            </div>
                            
                            <div className='info_item'>
                                <span className='info_label'>電子郵件</span>
                                <span className='info_value'>contact@jiyi.tw</span>
                            </div>
                            
                            <div className='info_item'>
                                <span className='info_label'>成立時間</span>
                                <span className='info_value'>2023 年 6 月</span>
                            </div>
                            
                            <div className='info_item'>
                                <span className='info_label'>統一編號</span>
                                <span className='info_value'>83149276</span>
                            </div>
                        </div>
                        
                        <div className='map_container'>
                      
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3614.9612646922315!2d121.56350097512129!3d25.035388577815418!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442abfb2687e289%3A0xf2850916c4164b57!2z54Cn5Y6a54KZ54eS54af5oiQ54mb5o6SIOWPsOWMly7kv6HnvqlBVFTlupc!5e0!3m2!1sen!2stw!4v1756886141582!5m2!1sen!2stw" style={{border:'0'}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"/>
                            
                        </div>
                    </div>
                </div>
            </section>

            {/* Decorative Elements */}
            <div className='about_deco_box'>
                <figure className='about_deco1'>
                    <img src="./images/decorations/deco-normal_allegator.svg" alt="鱷魚裝飾" />
                </figure>
            </div>
        </main>
    )
}

export default About