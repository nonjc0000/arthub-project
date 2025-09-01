const Stall_map = () => {
    return (
        <main className='stall_map_main'>
            <section className='stall_map_container'>

                {/* 標題 */}
                <h1 className='titleBox_h1'>
                    <img className='titleBox' src="./images/titlebox/find_type_titlebox.svg" style={{ width: '510px' }} alt='市集分類Market Type' />
                </h1>

                {/* 攤位地圖 */}
                <div className='stall_map'>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam quia fugiat quis magnam aspernatur minus? Nobis maiores exercitationem, eos fugit deserunt delectus eaque possimus dolores asperiores, in, temporibus cum aliquam.</p>
                </div>

                {/* 種類按鈕 */}
                <div className='type_btn_box'>
                    <button><img src="./images/Stall_map/btn_handMade.svg" alt="手作按鈕" />手做</button>
                    <button><img src="./images/Stall_map/btn_food.svg" alt="食物按鈕" />食物</button>
                    <button><img src="./images/Stall_map/btn_clothes.svg" alt="服飾按鈕" />服飾</button>
                    <button><img src="./images/Stall_map/btn_plant.svg" alt="植栽按鈕" />植栽</button>
                    <button><img src="./images/Stall_map/btn_pet.svg" alt="寵物按鈕" />寵物</button>
                    <button><img src="./images/Stall_map/btn_like.svg" alt="收藏按鈕" />收藏</button>
                </div>

                {/* 攤位搜尋內容 */}
                <div className='stall_search_box'>
                    <form action="" className='stall_search_filter'>

                        {/* 搜尋 */}
                        <div className='search_box'>
                            <input type="search" id='stall_map_search' placeholder='關鍵字搜尋' />
                            <button type="submit" value="搜尋">
                                <img src="./images/find_map/magnifier.svg" alt="搜尋" />
                            </button>
                        </div>


                        {/* 按鈕 */}
                        <div className='btn_box'>
                            <button><img src="./images/Stall_map/icon_findFood.svg" alt="找食物" />找食物</button>
                            <button><img src="./images/Stall_map/icon_findItems.svg" alt="找物品" />找物品</button>
                            <button><img src="./images/Stall_map/icon_findPopular.svg" alt="找熱門" />找熱門</button>
                        </div>


                        {/* 選單 */}
                        <div className='select'>
                            <select name="stall_type" id="stall_type">
                                <option value="#">種類</option>
                            </select>
                        </div>
                    </form>

                    <div className='stall_search_result'>

                    </div>
                </div>
            </section>
        </main>
    )
}
export default Stall_map