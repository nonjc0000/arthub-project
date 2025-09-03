// import '../css/all.css'
import Stall_map_card from '../components/Stall_map_card'
import Stall_map_card_sm from '../components/Stall_map_card_sm'
import { useMemo, useState } from 'react'
import $ from 'jquery'
import { useEffect } from 'react'






const Stall_map = () => {
    // 攤位資料
    const arrStall = [
        {
            id: 1,
            name: '食物',
            num: '01',
            tag: '美食',
        },
        {
            id: 2,
            name: '衣服',
            num: '02',
            tag: '服飾',
        },
        {
            id: 3,
            name: '狗狗',
            num: '03',
            tag: '寵物',
        },
        {
            id: 4,
            name: '花',
            num: '04',
            tag: '植栽',
        },
        {
            id: 5,
            name: '蘋果',
            num: '05',
            tag: '美食',
        },
        {
            id: 6,
            name: '貓貓',
            num: '06',
            tag: '寵物',
        },
        {
            id: 7,
            name: '蛋餅',
            num: '07',
            tag: '美食',
        },
        {
            id: 8,
            name: '蕨',
            num: '08',
            tag: '植栽',
        },
        {
            id: 9,
            name: '包包',
            num: '09',
            tag: '服飾',
        },


    ]


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




    // 分類按鈕變色
    const [active,setActive]=useState(false);






    return (
        <main className='stall_map_main'>
            <section className='stall_map_container'>




                {/* 標題 */}
                <h1 className='titleBox_h1'>
                    <img className='titleBox' src="./images/titlebox/find_type_titlebox.svg" style={{ width: '510px' }} alt='市集分類Market Type' />
                </h1>




                {/* 攤位地圖 */}
                <div className='stall_map'>


                    <div className='stalls_1'>


                        <div className='stall_box'>


                            <img src="./images/Stall_map/stall.svg" alt="" />


                            <div className="tooltip_card">
                                <Stall_map_card_sm />
                            </div>


                        </div>


                        <div className='stall_box'>


                            <img src="./images/Stall_map/stall.svg" alt="" />


                            <div className="tooltip_card">
                                <Stall_map_card_sm />
                            </div>


                        </div>


                        <div className='stall_box'>


                            <img src="./images/Stall_map/stall.svg" alt="" />


                            <div className="tooltip_card">
                                <Stall_map_card_sm />
                            </div>


                        </div>




                    </div>
                </div>




                {/* 種類按鈕 */}
                <div className='type_btn_box'>
                    <button onClick={() => setActive(!active)}><img src="./images/Stall_map/btn_handMade.svg" alt="手作按鈕" /><span className={active?'active':''}>手做</span></button>
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







