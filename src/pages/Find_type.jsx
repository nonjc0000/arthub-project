import React from 'react'
import Find_type_card from '../components/Find_type_card'
import '../css/all.css'

const Find_type = () => {




    return (
        <section className='find_type_main'>
            <h1 className='titleBox_h1'>
                <img className='titleBox' src="./images/titlebox/find_type_titlebox.svg" /* style={{ width: '510px' }} */ alt='市集分類Market Type' />
            </h1>
            <div className='find_type_content_box'>

                {/* 搜尋表單 */}
                <form className='type_search-box' id='type_serch' method="post" accept-charset="UTF-8">

                    {/* 關鍵字搜尋 */}
                    <div className='search'>
                        <input type="serch" id='find_type_serch' placeholder='關鍵字搜尋' />
                        <button type="submit" value="搜尋">
                            <img src="./images/find_map/magnifier.svg" alt="搜尋" />
                        </button>
                    </div>

                    {/* 選擇縣市 */}
                    <div className='select'>
                        <select name="find_type_city" id="find_type_city">
                            <option value="#">選擇縣市</option>
                        </select>
                    </div>

                    {/* 選擇地區 */}
                    <div className='select'>
                        <select name="find_type_area" id="find_type_area">
                            <option value="#">選擇地區</option>
                        </select>
                    </div>

                    {/* 按鈕篩選 */}
                    <div className='button_box'>
                        <p>篩選</p>
                        <div className='find_type_btn_box'>
                            <button>所有時間</button>
                            <button>現在活動</button>
                            <button>當週活動</button>
                            <button>篩選日期</button>
                        </div>
                    </div>

                    <div className='select'>
                        <select name="" id="">
                            <option value="#">活動類型</option>
                        </select>
                    </div>
                </form>
                <div className='result_box'>
                    <div className='find_type_result'>
                        <Find_type_card />
                        <Find_type_card />
                        <Find_type_card />
                        <Find_type_card />
                        <Find_type_card />
                        <Find_type_card />
                        <Find_type_card />
                        <Find_type_card />
                        <Find_type_card />
                        <Find_type_card />
                    </div>
                </div>
                <figure className='find_type_img1'><img  src="./images/Find_type/normal_wani.svg" alt="鱷魚裝飾" /></figure>
                <figure className='find_type_img2'><img src="./images/Find_type/road_sign.svg" alt="路牌裝飾" /></figure>
            </div>
        </section>
    )
}

export default Find_type