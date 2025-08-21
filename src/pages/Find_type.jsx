import React from 'react'
import Find_type_card from '../components/Find_type_card'

const Find_type = () => {




  return (
        <section className='find_type_main'>
            <div className='find_type_content_box'>
                <form className='type_search-box'>
                    <search></search>
                    <select name="find_type_city" id="find_type_city">
                        <option value="#">選擇縣市</option>
                    </select>
                    <select name="find_type_area" id="find_type_area">
                        <option value="#">選擇地區</option>
                    </select>
                    <p>篩選</p>
                    <div className='find_type_btn_box'>
                        <button>所有時間</button>
                        <button>現在活動</button>
                        <button>當週活動</button>
                        <button>篩選日期</button>
                    </div>
                    <select name="" id="">
                        <option value="#">活動類型</option>
                    </select>
                </form>
            </div>
            <div className='find_type_result'>
                <Find_type_card/>
            </div>
        </section>
  )
}

export default Find_type