import React from 'react'




const Stall_register = () => {
  return (
    <main className='stall_register_main'>
      <section className='stall_register'>


        {/* 標題 */}
        <h1 className='titleBox_h1'>
          <img className='titleBox' src="./images/titlebox/stall_register_titlebox.svg" style={{ width: '510px' }} alt='市集分類Market Type' />
        </h1>


        <div className='stall_num'>
          <p className='event_name'>夏末微光季</p>
          <div className='all_btn_box'>
            <div className='btn_box1'>
              <button><img src="./images/Stall_register/btn_stall.svg" alt="" /></button>
              <button><img src="./images/Stall_register/btn_stall.svg" alt="" /></button>
              <button><img src="./images/Stall_register/btn_stall.svg" alt="" /></button>
              <button><img src="./images/Stall_register/btn_stall.svg" alt="" /></button>
              <button><img src="./images/Stall_register/btn_stall.svg" alt="" /></button>
              <button><img src="./images/Stall_register/btn_stall.svg" alt="" /></button>
            </div>
            <div className='column'>
              <div className='btn_box2'>
                <button><img src="./images/Stall_register/btn_stall.svg" alt="" /></button>
                <button><img src="./images/Stall_register/btn_stall.svg" alt="" /></button>
                <button><img src="./images/Stall_register/btn_stall.svg" alt="" /></button>
                <button><img src="./images/Stall_register/btn_stall.svg" alt="" /></button>
                <button><img src="./images/Stall_register/btn_stall.svg" alt="" /></button>
                <button><img src="./images/Stall_register/btn_stall.svg" alt="" /></button>
              </div>


              <div className='row'>


                <div className='btn_box3'>
                  <button><img src="./images/Stall_register/btn_stall.svg" alt="" /></button>
                  <button><img src="./images/Stall_register/btn_stall.svg" alt="" /></button>
                  <button><img src="./images/Stall_register/btn_stall.svg" alt="" /></button>
                  <button><img src="./images/Stall_register/btn_stall.svg" alt="" /></button>
                  <button><img src="./images/Stall_register/btn_stall.svg" alt="" /></button>
                  <button><img src="./images/Stall_register/btn_stall.svg" alt="" /></button>
                </div>
                <div className='btn_box4'>
                  <button><img src="./images/Stall_register/btn_stall.svg" alt="" /></button>
                  <button><img src="./images/Stall_register/btn_stall.svg" alt="" /></button>
                  <button><img src="./images/Stall_register/btn_stall.svg" alt="" /></button>
                  <button><img src="./images/Stall_register/btn_stall.svg" alt="" /></button>
                  <button><img src="./images/Stall_register/btn_stall.svg" alt="" /></button>
                  <button><img src="./images/Stall_register/btn_stall.svg" alt="" /></button>
                </div>
              </div>
            </div>
          </div>


          <div className='left'>
            <div className='type'>
              <p className='handmade'>手做</p>
              <p className='food'>美食</p>
              <p className='clothes'>服飾</p>
              <p className='pet'>寵物</p>
              <p className='plant'>植栽</p>
            </div>


          </div>
        </div>


        <div className='register'>
          <p className='title'>填寫資訊</p>
          <div className='register_box'>
            <p className='register_stall_num'>攤位編號:XX</p>
            <form className='register_form' id='type_serch' method="post" accept-charset="UTF-8">


              <div className='contact'>


                <div className="input">
                  <label>商家名稱</label><input type="text" placeholder='請輸入名稱' />
                </div>
                <div className="input">
                  <label>電子信箱</label><input type="text" placeholder='請輸入電子信箱' />
                </div>


                <p className='checkbox_title'>類別</p>
                <div className='checkbox'>
                  <div className="type_box">
                    <input type="checkbox" name="類別" id="type" />
                    <label for="type">類別</label>


                  </div>
                  <div className="type_box">
                    <input type="checkbox" name="類別" id="type" />
                    <label for="type">類別</label>


                  </div>
                  <div className="type_box">
                    <input type="checkbox" name="類別" id="type" />
                    <label for="type">類別</label>


                  </div>
                  <div className="type_box">
                    <input type="checkbox" name="類別" id="type" />
                    <label for="type">類別</label>


                  </div>
                  <div className="type_box">
                    <input type="checkbox" name="類別" id="type" />
                    <label for="type">類別</label>


                  </div>
                  <div className="type_box">
                    <input type="checkbox" name="類別" id="type" />
                    <label for="type">類別</label>


                  </div>
                  <div className="type_box">
                    <input type="checkbox" name="類別" id="type" />
                    <label for="type">類別</label>


                  </div>
                  <div className="type_box">
                    <input type="checkbox" name="類別" id="type" />
                    <label for="type">類別</label>


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
                    <label >攤位介紹圖片</label>
                    <input type="file" id="input" />
                  </div>
                  <div className='file_box'>
                    <label >主辦方申請證明</label>
                    <input type="file" id="input" />
                  </div>
                </div>
              </div>
            </form>
            <button >審核</button>
          </div>
        </div>
      </section>
    </main>
  )
}




export default Stall_register







