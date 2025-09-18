import React, { useMemo, useState } from 'react'
import Find_type_card from '../components/Find_type_card'
import '../css/all.css'
import markets from '../data/market.json'
import cityDistrictData from '../data/taiwan_admin_divisions.json'
import PageTop from '../components/PageTop';


const Find_type = () => {
    // 市集&地區資料
    const [arrMarkets] = useState(markets);
    const cities = Object.keys(cityDistrictData);


    // 地區篩選
    const [selectedCity, setSelectedCity] = useState('');
    const [selectedDistrict, setSelectedDistrict] = useState('');
    const districts = selectedCity ? cityDistrictData[selectedCity] : [];


    // 搜尋
    const [search, setSearch] = useState('');


    // 時間篩選
    const [activeFilter, setActiveFilter] = useState('all');
    const getDateFilters = () => {
        const now = new Date();
        const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
       
        // 本週的開始 (週日)
        const currentDay = now.getDay();
        const weekStart = new Date(today);
        weekStart.setDate(today.getDate() - currentDay);
       
        // 本週的結束 (週六)
        const weekEnd = new Date(weekStart);
        weekEnd.setDate(weekStart.getDate() + 6);


        return { today, weekStart, weekEnd };
    };


    // 檢查日期是否在指定範圍內
    const isDateInRange = (dateString, startDate, endDate = null) => {
        const targetDate = new Date(dateString);
        const targetDateOnly = new Date(targetDate.getFullYear(), targetDate.getMonth(), targetDate.getDate());
       
        if (endDate) {
            return targetDateOnly >= startDate && targetDateOnly <= endDate;
        } else {
            return targetDateOnly.getTime() === startDate.getTime();
        }
    };


   
   
    // 地區選擇處理
    const handleCityChange = (e) => {
        const newCity = e.target.value;
        setSelectedCity(newCity);
        setSelectedDistrict(''); // 清空行政區選擇
    };


    const handleDistrictChange = (e) => {
        setSelectedDistrict(e.target.value);
    };


    // 時間篩選按鈕處理 (可以切換選取/取消)
    const handleFilterToggle = (filterType) => {
        setActiveFilter(prev => prev === filterType ? '' : filterType);
    };


    // 搜尋處理
    const handleSearchChange = (e) => {
        setSearch(e.target.value);
    };


    // 表單提交處理
    const handleSubmit = (e) => {
        e.preventDefault();
        // 防止表單提交刷新頁面
    };


    // 各種資料篩選
    const filteredMarkets = useMemo(() => {
        const { today, weekStart, weekEnd } = getDateFilters();
       
        return [...arrMarkets]
            // 1. 縣市篩選
            .filter((market) => {
                return selectedCity === '' || market.city === selectedCity;
            })
            // 2. 行政區篩選
            .filter((market) => {
                return selectedDistrict === '' || market.district === selectedDistrict;
            })
            // 3. 關鍵字搜尋
            .filter((market) => {
                if (search === '') return true;
                return market.name.toLowerCase().includes(search.toLowerCase());
            })
            // 4. 時間篩選
            .filter((market) => {
                if (activeFilter === '' || activeFilter === 'all') {
                    return true; // 顯示全部
                }


                // 假設 market 物件有 startDate 和 endDate 欄位
                // 格式如: "2025-10-18" 或 "2025.10.18"
                const marketStartDate = market.startDate || market.date;
                const marketEndDate = market.endDate || market.date;


                if (!marketStartDate) return true; // 如果沒有日期資料，預設顯示


                switch (activeFilter) {
                    case 'now': // 今天的活動
                        return isDateInRange(marketStartDate, today) ||
                               (marketEndDate && isDateInRange(marketEndDate, today)) ||
                               (marketEndDate && isDateInRange(today.toISOString().split('T')[0],
                                new Date(marketStartDate), new Date(marketEndDate)));
                   
                    case 'week': // 本週的活動
                        return isDateInRange(marketStartDate, weekStart, weekEnd) ||
                               (marketEndDate && isDateInRange(marketEndDate, weekStart, weekEnd)) ||
                               (marketEndDate && (
                                   new Date(marketStartDate) <= weekEnd &&
                                   new Date(marketEndDate) >= weekStart
                               ));
                   
                    default:
                        return true;
                }
            });
    }, [search, selectedCity, selectedDistrict, arrMarkets, activeFilter]);




    return (
        <section className='find_type_main'>
            <h1 className='titleBox_h1'>
                <img className='titleBox' src="./images/titlebox/find_type_titlebox.svg" /* style={{ width: '510px' }} */ alt='市集分類Market Type' />
            </h1>
            <div className='find_type_content_box'>


                {/* 搜尋表單 */}
                <form className='type_search-box' id='type_serch' method="post" acceptCharset="UTF-8">


                    {/* 關鍵字搜尋 */}
                    <div className='search'>
                        <input
                            type="search"
                            name="search"
                            id="search"
                            size="15"
                            placeholder='關鍵字搜尋'
                            // 綁定搜尋變數
                            value={search}
                            // 當搜尋內容有異動時，更新搜尋變數
                            onChange={(e) => { setSearch(e.target.value) }} />
                        <button type="submit" value="搜尋">
                            <img src="./images/find_map/magnifier.svg" alt="搜尋" />
                        </button>
                    </div>


                    {/* 選擇縣市 */}
                    <div className='select'>
                        <select
                            name="city"
                            id="city"
                            value={selectedCity} // 綁定 state
                            onChange={handleCityChange}> {/* 處理變更 */}


                            <option value="">選擇縣市</option>
                            {
                                cities.map((city, index) => <option value={city} key={index}>
                                    {city}
                                </option>)
                            }


                        </select>
                    </div>


                    {/* 選擇地區 */}
                    <div className='select'>
                        <select
                            name="district"
                            id="district"
                            value={selectedDistrict}
                            onChange={handleDistrictChange}
                            disabled={!selectedCity}> {/* 沒選縣市時禁用 */}
                            <option value="">選擇地區</option>
                            {
                                districts.map((district, index) => <option value={district} key={index}>
                                    {district}
                                </option>)
                            }
                        </select>
                    </div>


                    {/* 按鈕篩選 */}
                    <div className='button_box'>
                        <p>篩選</p>
                        <div className='find_type_btn_box'>
                            <button type="button"
                                className={activeFilter === 'all' ? 'btn active' : 'btn'}
                                onClick={() => handleFilterToggle('all')}>所有時間</button>
                            <button type="button"
                                className={activeFilter === 'now' ? 'btn active' : 'btn'}
                                onClick={() => handleFilterToggle('now')}>現在活動</button>
                            <button type="button"
                                className={activeFilter === 'week' ? 'btn active' : 'btn'}
                                onClick={() => handleFilterToggle('week')}>當週活動</button>
                            <button type="button"
                                className={activeFilter === 'date' ? 'btn active' : 'btn'}
                                onClick={() => handleFilterToggle('date')}>篩選日期</button>
                        </div>
                    </div>


                    <div className='select'>
                        <select name="" id="">
                            <option value="#">活動類型</option>
                            <option value="#">布作服飾</option>
                            <option value="#">文創設計</option>
                            <option value="#">生活風格</option>
                            <option value="#">插畫紙品</option>
                            <option value="#">美食飲品</option>
                            <option value="#">居家療育</option>
                            <option value="#">二手選品</option>
                            <option value="#">飾品配件</option>
                        </select>
                    </div>
                </form>
                <div className='result_box'>
                    <div className='find_type_result'>
                        {
                            filteredMarkets.map((market) =>
                                <Find_type_card {...market} key={market.id} />
                            )
                        }
                    </div>
                </div>
                {/* <figure className='find_type_img1'><img src="./images/Find_type/normal_wani.svg" alt="鱷魚裝飾" /></figure>
                <figure className='find_type_img2'><img src="./images/Find_type/road_sign.svg" alt="路牌裝飾" /></figure> */}
            </div>
            <PageTop />
        </section>
    )
}


export default Find_type

