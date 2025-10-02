import React, { useState } from 'react'
import { Link } from 'react-router-dom'




const Stall_register = () => {
  // 步驟控制
  const [currentStep, setCurrentStep] = useState(1);
 
  // 表單狀態
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    categories: [],
    fbLink: '',
    igLink: '',
    webLink: '',
    introImage: null,
    applicationProof: null
  });




  // 選中的攤位編號
  const [selectedStallNumber, setSelectedStallNumber] = useState(null);




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
        ? [...prev.categories, value]
        : prev.categories.filter(cat => cat !== value)
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




  // 步驟1：選擇攤位後繼續
  const handleStepOneNext = () => {
    if (!selectedStallNumber) {
      alert("請選擇攤位編號");
      return;
    }
    setCurrentStep(2);
  };




  // 步驟2：表單驗證並提交
  const handleFormSubmit = () => {
    // 驗證必填欄位
    if (!formData.name.trim()) {
      alert("請填寫商家名稱");
      return;
    }
   
    if (!formData.email.trim()) {
      alert("請填寫電子信箱");
      return;
    }
   
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      alert("請填寫正確的電子信箱格式");
      return;
    }




    if (formData.categories.length === 0) {
      alert("請至少選擇一個類別");
      return;
    }




    if (!formData.introImage) {
      alert("請上傳攤位介紹圖片");
      return;
    }
   
    if (!formData.applicationProof) {
      alert("請上傳主辦方申請證明");
      return;
    }
   
    // 驗證通過，前往完成頁面
    setCurrentStep(3);
  };




  // 返回上一步
  const handleBack = () => {
    setCurrentStep(currentStep - 1);
  };




  return (
    <main className='stall_register_main'>
      <section className='stall_register'>
        {/* 標題 */}
        <h1 className='titleBox_h1'>
          <img
            className='titleBox'
            src="./images/titlebox/register_titlebox.svg"
            style={{ width: '510px' }}
            alt='攤位登記'
          />
        </h1>




        {/* 步驟指示器 */}
        <div className='step_indicator'>
          <div className={`step ${currentStep >= 1 ? 'active' : ''}`}>
            <div className='step_circle'>1</div>
            <p>選擇攤位</p>
          </div>
          <div className='step_line'></div>
          <div className={`step ${currentStep >= 2 ? 'active' : ''}`}>
            <div className='step_circle'>2</div>
            <p>填寫資訊</p>
          </div>
          <div className='step_line'></div>
          <div className={`step ${currentStep >= 3 ? 'active' : ''}`}>
            <div className='step_circle'>3</div>
            <p>完成登記</p>
          </div>
        </div>




        {/* 步驟1: 選擇攤位 */}
        {currentStep === 1 && (
          <>
            <div className='stall_num'>
              <p className='event_name'>夏日微光季</p>
              <div className='all_btn_box'>
              {/* 第1排: 01 02 空 空 07 08 09 10 11 12 */}
              <div className='stall_row'>
                <div className={`stall_btn ${selectedStallNumber === '01' ? 'selected' : ''}`} onClick={() => handleStallClick('01')}>
                  <p>01</p>
                </div>
                <div className={`stall_btn ${selectedStallNumber === '02' ? 'selected' : ''}`} onClick={() => handleStallClick('02')}>
                  <p>02</p>
                </div>
                <div className='stall_empty'></div>
                <div className='stall_empty'></div>
                <div className={`stall_btn ${selectedStallNumber === '07' ? 'selected' : ''}`} onClick={() => handleStallClick('07')}>
                  <p>07</p>
                </div>
                <div className={`stall_btn ${selectedStallNumber === '08' ? 'selected' : ''}`} onClick={() => handleStallClick('08')}>
                  <p>08</p>
                </div>
                <div className={`stall_btn ${selectedStallNumber === '09' ? 'selected' : ''}`} onClick={() => handleStallClick('09')}>
                  <p>09</p>
                </div>
                <div className={`stall_btn ${selectedStallNumber === '10' ? 'selected' : ''}`} onClick={() => handleStallClick('10')}>
                  <p>10</p>
                </div>
                <div className={`stall_btn ${selectedStallNumber === '11' ? 'selected' : ''}`} onClick={() => handleStallClick('11')}>
                  <p>11</p>
                </div>
                <div className={`stall_btn ${selectedStallNumber === '12' ? 'selected' : ''}`} onClick={() => handleStallClick('12')}>
                  <p>12</p>
                </div>
              </div>




              {/* 第2排: 03 04 空 空 空 空 空 空 空 空 */}
              <div className='stall_row'>
                <div className={`stall_btn ${selectedStallNumber === '03' ? 'selected' : ''}`} onClick={() => handleStallClick('03')}>
                  <p>03</p>
                </div>
                <div className={`stall_btn ${selectedStallNumber === '04' ? 'selected' : ''}`} onClick={() => handleStallClick('04')}>
                  <p>04</p>
                </div>
                <div className='stall_empty'></div>
                <div className='stall_empty'></div>
                <div className='stall_empty'></div>
                <div className='stall_empty'></div>
                <div className='stall_empty'></div>
                <div className='stall_empty'></div>
                <div className='stall_empty'></div>
                <div className='stall_empty'></div>
              </div>




              {/* 第3排: 05 06 空 13 14 15 空 19 20 21 */}
              <div className='stall_row'>
                <div className={`stall_btn ${selectedStallNumber === '05' ? 'selected' : ''}`} onClick={() => handleStallClick('05')}>
                  <p>05</p>
                </div>
                <div className={`stall_btn ${selectedStallNumber === '06' ? 'selected' : ''}`} onClick={() => handleStallClick('06')}>
                  <p>06</p>
                </div>
                <div className='stall_empty'></div>
                <div className={`stall_btn ${selectedStallNumber === '13' ? 'selected' : ''}`} onClick={() => handleStallClick('13')}>
                  <p>13</p>
                </div>
                <div className={`stall_btn ${selectedStallNumber === '14' ? 'selected' : ''}`} onClick={() => handleStallClick('14')}>
                  <p>14</p>
                </div>
                <div className={`stall_btn ${selectedStallNumber === '15' ? 'selected' : ''}`} onClick={() => handleStallClick('15')}>
                  <p>15</p>
                </div>
                <div className='stall_empty'></div>
                <div className={`stall_btn ${selectedStallNumber === '19' ? 'selected' : ''}`} onClick={() => handleStallClick('19')}>
                  <p>19</p>
                </div>
                <div className={`stall_btn ${selectedStallNumber === '20' ? 'selected' : ''}`} onClick={() => handleStallClick('20')}>
                  <p>20</p>
                </div>
                <div className={`stall_btn ${selectedStallNumber === '21' ? 'selected' : ''}`} onClick={() => handleStallClick('21')}>
                  <p>21</p>
                </div>
              </div>




              {/* 第4排: 空 空 空 16 17 18 空 22 23 24 */}
              <div className='stall_row'>
                <div className='stall_empty'></div>
                <div className='stall_empty'></div>
                <div className='stall_empty'></div>
                <div className={`stall_btn ${selectedStallNumber === '16' ? 'selected' : ''}`} onClick={() => handleStallClick('16')}>
                  <p>16</p>
                </div>
                <div className={`stall_btn ${selectedStallNumber === '17' ? 'selected' : ''}`} onClick={() => handleStallClick('17')}>
                  <p>17</p>
                </div>
                <div className={`stall_btn ${selectedStallNumber === '18' ? 'selected' : ''}`} onClick={() => handleStallClick('18')}>
                  <p>18</p>
                </div>
                <div className='stall_empty'></div>
                <div className={`stall_btn ${selectedStallNumber === '22' ? 'selected' : ''}`} onClick={() => handleStallClick('22')}>
                  <p>22</p>
                </div>
                <div className={`stall_btn ${selectedStallNumber === '23' ? 'selected' : ''}`} onClick={() => handleStallClick('23')}>
                  <p>23</p>
                </div>
                <div className={`stall_btn ${selectedStallNumber === '24' ? 'selected' : ''}`} onClick={() => handleStallClick('24')}>
                  <p>24</p>
                </div>
                </div>
              </div>
            </div>
           
            <div className='step_actions'>
              <button className='next_btn' onClick={handleStepOneNext}>
                下一步
              </button>
            </div>
          </>
        )}




        {/* 步驟2: 填寫資訊 */}
        {currentStep === 2 && (
          <div className='register'>
            <p className='title'>填寫資訊</p>
            <div className='register_box'>
              <p className='register_stall_num'>攤位編號: {selectedStallNumber}</p>
              <form className='register_form'>
                <div className='contact'>
                  <div className="input">
                    <label>商家名稱 <span style={{color: '#ed972e'}}>*</span></label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder='請輸入名稱'
                    />
                  </div>
                  <div className="input">
                    <label>電子信箱 <span style={{color: '#ed972e'}}>*</span></label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder='請輸入電子信箱'
                    />
                  </div>




                  <p className='checkbox_title'>類別 <span style={{color: '#ed972e'}}>*</span></p>
                  <div className='checkbox'>
                    {['手作', '美食', '服飾', '寵物', '植栽', '文創', '二手', '其他'].map((type, index) => (
                      <div className="type_box" key={index}>
                        <input
                          type="checkbox"
                          value={type}
                          id={`type${index + 1}`}
                          checked={formData.categories.includes(type)}
                          onChange={handleCheckboxChange}
                        />
                        <label htmlFor={`type${index + 1}`}>{type}</label>
                      </div>
                    ))}
                  </div>
                </div>




                <div className='contact'>
                  <div className="input">
                    <label>社群連結</label>




                    <div className='social'>
                      <figure>
                        <img src="./images/Stall_register/icon_fb.svg" alt="Facebook" />
                      </figure>
                      <input
                        type="text"
                        name="fbLink"
                        value={formData.fbLink}
                        onChange={handleInputChange}
                        placeholder='請輸入連結'
                      />
                    </div>




                    <div className='social'>
                      <figure>
                        <img src="./images/Stall_register/icon_ig.svg" alt="Instagram" />
                      </figure>
                      <input
                        type="text"
                        name="igLink"
                        value={formData.igLink}
                        onChange={handleInputChange}
                        placeholder='請輸入連結'
                      />
                    </div>




                    <div className='social'>
                      <figure className='web'>
                        <img src="./images/Stall_register/icon_web.svg" alt="Website" />
                      </figure>
                      <input
                        type="text"
                        name="webLink"
                        value={formData.webLink}
                        onChange={handleInputChange}
                        placeholder='請輸入連結'
                      />
                    </div>
                  </div>
                 
                  <div className='file'>
                    <div className='file_box'>
                      <label>攤位介紹圖片 <span style={{color: '#ed972e'}}>*</span></label>
                      <input
                        type="file"
                        id="input1"
                        name="introImage"
                        onChange={handleInputChange}
                        accept="image/*"
                      />
                    </div>
                    <div className='file_box'>
                      <label>主辦方申請證明 <span style={{color: '#ed972e'}}>*</span></label>
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
             
              <div className='step_actions'>
                <button className='back_btn' onClick={handleBack}>
                  上一步
                </button>
                <button className='submit_btn' onClick={handleFormSubmit}>
                  提交審核
                </button>
              </div>
            </div>
          </div>
        )}




        {/* 步驟3: 完成登記 */}
        {currentStep === 3 && (
          <div className='completion_page'>
            <div className='completion_content'>
              <div className='success_icon'>
                <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="60" cy="60" r="55" fill="#4CAF50" stroke="#4CAF50" strokeWidth="2"/>
                  <path d="M35 60L52 77L85 44" stroke="white" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h2>登記完成!</h2>
              <p className='completion_message'>
                您已成功申請攤位編號 <strong>{selectedStallNumber}</strong>
              </p>
              <p className='completion_desc'>
                我們已收到您的申請資料，將於3個工作天內審核完畢。
                <br />
                審核結果將寄送至您的電子信箱: <strong>{formData.email}</strong>
              </p>
             
              <div className='completion_info'>
                <div className='info_item'>
                  <p className='info_label'>商家名稱</p>
                  <p className='info_value'>{formData.name}</p>
                </div>
                <div className='info_item'>
                  <p className='info_label'>攤位編號</p>
                  <p className='info_value'>{selectedStallNumber}</p>
                </div>
                <div className='info_item'>
                  <p className='info_label'>申請類別</p>
                  <p className='info_value'>{formData.categories.join(', ')}</p>
                </div>
              </div>




              <div className='completion_actions'>
                <Link to='/'>
                  <button className='home_btn'>返回首頁</button>
                </Link>
                <Link to='/Event_info'>
                  <button className='event_btn'>查看市集資訊</button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </section>
    </main>
  )
}




export default Stall_register





