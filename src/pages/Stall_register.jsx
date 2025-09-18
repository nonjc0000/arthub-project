import React, { useState } from 'react'


const Stall_register = () => {
 
  // 表單狀態
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    applicationProof: null
  });


  // 選中的攤位編號
  const [selectedStallNumber, setSelectedStallNumber] = useState('XX');


  // 處理攤位按鈕點擊
  const handleStallClick = (stallNumber) => {
    setSelectedStallNumber(stallNumber);
  };


  // 處理checkbox變化
  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      categories: checked
        ? [...(prev.categories || []), value]
        : (prev.categories || []).filter(cat => cat !== value)
    }));
  };


  // 處理輸入變化
  const handleInputChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'file' ? files[0] : value
    }));
  };
 
  // 處理表單提交的函數
  const handleSubmit = () => {
    // 驗證攤位編號是否已選擇
    if (selectedStallNumber === 'XX') {
      alert("請選擇攤位編號");
      return;
    }


    // 驗證必填欄位
    if (!formData.name.trim()) {
      alert("請填寫商家名稱");
      return;
    }
   
    if (!formData.email.trim()) {
      alert("請填寫電子信箱");
      return;
    }
   
    // 簡單的電子信箱格式驗證
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      alert("請填寫正確的電子信箱格式");
      return;
    }


    // 驗證類別是否已選擇
    if (!formData.categories || formData.categories.length === 0) {
      alert("請至少選擇一個類別");
      return;
    }


    // 驗證攤位介紹圖片
    if (!formData.introImage) {
      alert("請上傳攤位介紹圖片");
      return;
    }
   
    if (!formData.applicationProof) {
      alert("請上傳主辦方申請證明");
      return;
    }
   
    // 所有驗證通過
    alert("已送出表單");
  };


  return (
    <main className='stall_register_main'>
      <section className='stall_register'>


        {/* 標題 */}
        <h1 className='titleBox_h1'>
          <img className='titleBox' src="./images/titlebox/register_titlebox.svg" style={{ width: '510px' }} alt='市集分類Market Type' />
        </h1>


        <div className='stall_num'>
          <p className='event_name'>夏日微光季</p>
          <div className='all_btn_box'>
            <div className='btn_box1'>
              <div className='stall_btn' onClick={() => handleStallClick('01')}><p>01</p></div>
              <div className='stall_btn' onClick={() => handleStallClick('02')}><p>02</p></div>
              <div className='stall_btn' onClick={() => handleStallClick('03')}><p>03</p></div>
              <div className='stall_btn' onClick={() => handleStallClick('04')}><p>04</p></div>
              <div className='stall_btn' onClick={() => handleStallClick('05')}><p>05</p></div>
              <div className='stall_btn' onClick={() => handleStallClick('06')}><p>06</p></div>
            </div>
            <div className='column'>
              <div className='btn_box2'>
                <div className='stall_btn' onClick={() => handleStallClick('07')}><p>07</p></div>
                <div className='stall_btn' onClick={() => handleStallClick('08')}><p>08</p></div>
                <div className='stall_btn' onClick={() => handleStallClick('09')}><p>09</p></div>
                <div className='stall_btn' onClick={() => handleStallClick('10')}><p>10</p></div>
                <div className='stall_btn' onClick={() => handleStallClick('11')}><p>11</p></div>
                <div className='stall_btn' onClick={() => handleStallClick('12')}><p>12</p></div>
              </div>


              <div className='row'>


                <div className='btn_box3'>
                  <div className='stall_btn' onClick={() => handleStallClick('13')}><p>13</p></div>
                  <div className='stall_btn' onClick={() => handleStallClick('14')}><p>14</p></div>
                  <div className='stall_btn' onClick={() => handleStallClick('15')}><p>15</p></div>
                  <div className='stall_btn' onClick={() => handleStallClick('16')}><p>16</p></div>
                  <div className='stall_btn' onClick={() => handleStallClick('17')}><p>17</p></div>
                  <div className='stall_btn' onClick={() => handleStallClick('18')}><p>18</p></div>
                 
                </div>
                <div className='btn_box4'>
                  <div className='stall_btn' onClick={() => handleStallClick('19')}><p>19</p></div>
                  <div className='stall_btn' onClick={() => handleStallClick('20')}><p>20</p></div>
                  <div className='stall_btn' onClick={() => handleStallClick('21')}><p>21</p></div>
                  <div className='stall_btn' onClick={() => handleStallClick('22')}><p>22</p></div>
                  <div className='stall_btn' onClick={() => handleStallClick('23')}><p>23</p></div>
                  <div className='stall_btn' onClick={() => handleStallClick('24')}><p>24</p></div>
                </div>
              </div>
            </div>
          </div>


          <div className='left'>
            {/* <div className='type'>
              <p className='handmade'>手做</p>
              <p className='food'>美食</p>
              <p className='clothes'>服飾</p>
              <p className='pet'>寵物</p>
              <p className='plant'>植栽</p>
            </div> */}


          </div>
        </div>


        <div className='register'>
          <p className='title'>填寫資訊</p>
          <div className='register_box'>
            <p className='register_stall_num'>攤位編號:{selectedStallNumber}</p>
            <form className='register_form' id='type_serch' method="post" acceptCharset="UTF-8">


              <div className='contact'>


                <div className="input">
                  <label>商家名稱 <span style={{color: 'red'}}>*</span></label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder='請輸入名稱'
                  />
                </div>
                <div className="input">
                  <label>電子信箱 <span style={{color: 'red'}}>*</span></label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder='請輸入電子信箱'
                  />
                </div>


                <p className='checkbox_title'>類別 <span style={{color: 'red'}}>*</span></p>
                <div className='checkbox'>
                  <div className="type_box">
                    <input
                      type="checkbox"
                      value="手作"
                      id="type1"
                      checked={formData.categories?.includes('手作') || false}
                      onChange={handleCheckboxChange}
                    />
                    <label htmlFor="type1">手作</label>
                  </div>
                  <div className="type_box">
                    <input
                      type="checkbox"
                      value="美食"
                      id="type2"
                      checked={formData.categories?.includes('美食') || false}
                      onChange={handleCheckboxChange}
                    />
                    <label htmlFor="type2">美食</label>
                  </div>
                  <div className="type_box">
                    <input
                      type="checkbox"
                      value="服飾"
                      id="type3"
                      checked={formData.categories?.includes('服飾') || false}
                      onChange={handleCheckboxChange}
                    />
                    <label htmlFor="type3">服飾</label>
                  </div>
                  <div className="type_box">
                    <input
                      type="checkbox"
                      value="寵物"
                      id="type4"
                      checked={formData.categories?.includes('寵物') || false}
                      onChange={handleCheckboxChange}
                    />
                    <label htmlFor="type4">寵物</label>
                  </div>
                  <div className="type_box">
                    <input
                      type="checkbox"
                      value="植栽"
                      id="type5"
                      checked={formData.categories?.includes('植栽') || false}
                      onChange={handleCheckboxChange}
                    />
                    <label htmlFor="type5">植栽</label>
                  </div>
                  <div className="type_box">
                    <input
                      type="checkbox"
                      value="文創"
                      id="type6"
                      checked={formData.categories?.includes('文創') || false}
                      onChange={handleCheckboxChange}
                    />
                    <label htmlFor="type6">文創</label>
                  </div>
                  <div className="type_box">
                    <input
                      type="checkbox"
                      value="二手"
                      id="type7"
                      checked={formData.categories?.includes('二手') || false}
                      onChange={handleCheckboxChange}
                    />
                    <label htmlFor="type7">二手</label>
                  </div>
                  <div className="type_box">
                    <input
                      type="checkbox"
                      value="其他"
                      id="type8"
                      checked={formData.categories?.includes('其他') || false}
                      onChange={handleCheckboxChange}
                    />
                    <label htmlFor="type8">其他</label>
                  </div>
                </div>
              </div>


              <div className='contact'>
                <div className="input">


                  <label>社群連結</label>


                  <div className='social'>
                    <figure>
                      <img src="./images/Stall_register/icon_fb.svg" alt="" />
                    </figure>
                    <input type="text" placeholder='請輸入連結' />
                  </div>


                  <div className='social'>
                    <figure>
                      <img src="./images/Stall_register/icon_ig.svg" alt="" />
                    </figure>
                    <input type="text" placeholder='請輸入連結' />
                  </div>


                  <div className='social'>
                    <figure className='web'>
                      <img src="./images/Stall_register/icon_web.svg" alt="" />
                    </figure>
                    <input type="text" placeholder='請輸入連結' />
                  </div>


                </div>
                <div className='file'>
                  <div className='file_box'>
                    <label>攤位介紹圖片 <span style={{color: 'red'}}>*</span></label>
                    <input
                      type="file"
                      id="input1"
                      name="introImage"
                      onChange={handleInputChange}
                      accept="image/*"
                    />
                  </div>
                  <div className='file_box'>
                    <label>主辦方申請證明 <span style={{color: 'red'}}>*</span></label>
                    <input
                      type="file"
                      id="input2"
                      name="applicationProof"
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
              </div>
            </form>
            <button onClick={handleSubmit}>審核</button>
          </div>
        </div>
      </section>
    </main>
  )
}


export default Stall_register



