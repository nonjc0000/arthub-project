// import '../css/all.css'
import Stall_map_card from '../components/Stall_map_card'
import Stall_map_card_sm from '../components/Stall_map_card_sm'
import { useMemo, useState } from 'react'
import $ from 'jquery'
import { useEffect } from 'react'
import stall from '../data/stall.json'
import ScrollToTop from '../components/ScrollToTop'






const Stall_map = () => {
    // 攤位資料， 用 state 存資料
    const [arrStall] = useState(stall);




    // 搜尋區
    // 搜尋變數，預設為空字串
    const [search, setSearch] = useState('');
    // 建立搜尋的函式
    const filterStall = useMemo(() => {
        //搜尋
        return [...arrStall]
            .filter((stall) => {
                //保留關鍵字內容
                return (stall.name.match(search),
                    stall.num.match(search))
            })
    }, [search]);








    // 按鈕區
    // 記錄已經選中的按鈕
    const [activeButtons, setActiveButtons] = useState([]);




    // 按鈕資料
    const buttonData = [
        { id: 1, type: 'handmade', text: '手做', img: './images/Stall_map/btn_handMade.svg' },
        { id: 2, type: 'food', text: '食物', img: './images/Stall_map/btn_food.svg' },
        { id: 3, type: 'clothes', text: '服飾', img: './images/Stall_map/btn_clothes.svg' },
        { id: 4, type: 'plant', text: '植栽', img: './images/Stall_map/btn_plant.svg' },
        { id: 5, type: 'pet', text: '寵物', img: './images/Stall_map/btn_pet.svg' },
        { id: 6, type: 'like', text: '收藏', img: './images/Stall_map/btn_like.svg' }
    ];




    // 如果點擊的是已選中的按鈕，就取消選中；否則選中它
    const handleButtonClick = (buttonId) => {
        setActiveButtons(prevActiveButtons => {
            // 如果已選中，就移除；如果未選中，就添加
            if (prevActiveButtons.includes(buttonId)) {
                return prevActiveButtons.filter(id => id !== buttonId);
            } else {
                return [...prevActiveButtons, buttonId];
            }
        });
    };
    // 檢查是否選中
    const isButtonActive = (buttonId) => {
        return activeButtons.includes(buttonId);
    };
























    return (
        <main className='stall_map_main'>
            <ScrollToTop/>
            <section className='stall_map_container'>
















                {/* 標題 */}
                <h1 className='titleBox_h1'>
                    <img className='titleBox' src="./images/titlebox/find_type_titlebox.svg" style={{ width: '510px' }} alt='市集分類Market Type' />
                </h1>
















                {/* 攤位地圖 */}
                <div className='stall_map'>








                    <div className='stalls_1'>




                        <div className='stall_wrap1'>
                            {
                                arrStall.slice(0, 6).map((stall) => {
                                    return (
                                        <Stall_map_card_sm
                                            {...stall}
                                        />




                                    )
                                })
                            }




                        </div>




                        <div className='stalls_2'>




                            <div className='stall_wrap2'>
                                {
                                    arrStall.slice(6, 12).map((stall) => {
                                        return (
                                            <Stall_map_card_sm
                                                {...stall}
                                            />




                                        )
                                    })
                                }




                            </div>




                            <div className='stalls_3'>
                                <div className='stall_wrap3'>
                                    {
                                        arrStall.slice(12, 18).map((stall) => {
                                            return (
                                                <Stall_map_card_sm
                                                    {...stall}
                                                />




                                            )
                                        })
                                    }




                                </div>
                                <div className='stall_wrap4'>
                                    {
                                        arrStall.slice(18, 24).map((stall) => {
                                            return (
                                                <Stall_map_card_sm
                                                    {...stall}
                                                />




                                            )
                                        })
                                    }




                                </div>
                            </div>
                        </div>
























                    </div>
                </div>
















                {/* 種類按鈕 */}
                <div className='type_btn_box'>
                    {buttonData.map((button) => (
                        <button
                            key={button.id}
                            className={`btn${button.id}`}
                            onClick={() => handleButtonClick(button.id)}
                        >
                            <img src={button.img} alt={`${button.text}按鈕`} />
                            <span className={isButtonActive(button.id) ? 'active' : ''}>
                                {button.text}
                            </span>
                        </button>
                    ))}
                </div>
















                {/* 攤位搜尋內容 */}
                <div className='stall_search_box'>
                    <form action="" className='stall_search_filter'>
















                        {/* 搜尋 */}
                        <div className='search_box'>
                            <input
                                type="text"
                                id='stall_map_search'
                                placeholder='關鍵字搜尋'
                                value={search}
                                onChange={(e) => { setSearch(e.target.value) }}
                            />
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
                        {
                            filterStall.map((stall) =>








                                <Stall_map_card {...stall} key={stall.id} />
                            )
                        }








                    </div>
                </div>
                <figure className='stall_map_img1'><img src="./images/decorations/deco-bird.svg" alt="鳥裝飾" /></figure>
                <figure className='stall_map_img2'><img src="./images/decorations/deco-drooling-allegator.svg" alt="鱷魚裝飾" /></figure>
                <figure className='stall_map_img3'><img src="./images/decorations/deco-kid&dog.svg" alt="小孩跟狗裝飾" /></figure>
                <figure className='stall_map_img4'><img src="./images/decorations/deco-road.svg" alt="道路裝飾" /></figure>
            </section>
        </main>
    )
}
export default Stall_map









































