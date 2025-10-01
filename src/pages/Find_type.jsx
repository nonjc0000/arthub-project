import{ useEffect, useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import Find_type_card from '../components/Find_type_card'
import markets from '../data/market.json'
import cityDistrictData from '../data/taiwan_admin_divisions.json'






const Find_type = () => {
    // URL 參數讀取
    const [searchParams] = useSearchParams();




    // 市集&地區資料
    const [arrMarkets] = useState(markets);
    const cities = Object.keys(cityDistrictData);




    // 地區篩選
    const [selectedCity, setSelectedCity] = useState('');
    const [selectedDistrict, setSelectedDistrict] = useState('');
    const districts = selectedCity ? cityDistrictData[selectedCity] : [];




    // 活動類型篩選 - 預設為空
    const [selectedActivityType, setSelectedActivityType] = useState('');




    // 搜尋
    const [search, setSearch] = useState('');




    // 時間篩選
    const [activeFilter, setActiveFilter] = useState('all');




    // 日期篩選
    const [showDatePicker, setShowDatePicker] = useState(false);
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');




    // 手機版選單展開控制
    const [isMenuExpanded, setIsMenuExpanded] = useState(false);




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
    const isDateInRange = (dateString, rangeStart, rangeEnd = null) => {
        const targetDate = new Date(dateString);
        const targetDateOnly = new Date(targetDate.getFullYear(), targetDate.getMonth(), targetDate.getDate());




        if (rangeEnd) {
            return targetDateOnly >= rangeStart && targetDateOnly <= rangeEnd;
        } else {
            return targetDateOnly.getTime() === rangeStart.getTime();
        }
    };




    // 檢查是否從其他頁面跳轉而來（而非重新整理）
    useEffect(() => {
        const typeFromUrl = searchParams.get('type');




        if (typeFromUrl) {
            // 檢查是否有導航標記（表示是從其他頁面跳轉）
            const navigationFlag = sessionStorage.getItem('navigatedFromHome');




            if (navigationFlag) {
                // 如果是從其他頁面跳轉，設定選項
                setSelectedActivityType(typeFromUrl);
                // 清除標記，避免下次重新整理時誤判
                sessionStorage.removeItem('navigatedFromHome');
            }
            // 如果沒有導航標記（重新整理），則保持預設狀態
        }
    }, [searchParams]);




    // 地區選擇處理
    const handleCityChange = (e) => {
        const newCity = e.target.value;
        setSelectedCity(newCity);
        setSelectedDistrict(''); // 清空行政區選擇
    };




    const handleDistrictChange = (e) => {
        setSelectedDistrict(e.target.value);
    };




    // 活動類型選擇處理
    const handleActivityTypeChange = (e) => {
        setSelectedActivityType(e.target.value);
    };




    // 時間篩選按鈕
    const handleFilterToggle = (filterType) => {
        if (filterType === 'date') {
            // 點擊「篩選日期」按鈕時，切換日期選擇器顯示
            setShowDatePicker(!showDatePicker);
            setActiveFilter(filterType);
        } else {
            // 其他按鈕：切換選取/取消
            setActiveFilter(prev => prev === filterType ? 'all' : filterType);
            setShowDatePicker(false);
            // 清空日期選擇
            setStartDate('');
            setEndDate('');
        }
    };




    // 手機版漢堡選單切換
    const toggleMenu = () => {
        setIsMenuExpanded(!isMenuExpanded);
    };




    // 日期範圍
    const applyDateRange = () => {
        if (startDate || endDate) {
            setActiveFilter('date');
            setShowDatePicker(false);
        }
    };




    // 清除日期範圍
    const clearDateRange = () => {
        setStartDate('');
        setEndDate('');
        setActiveFilter('all');
        setShowDatePicker(false);
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




    // 解析日期範圍函數
    const parseDateRange = (dateString) => {
        if (!dateString) return { start: null, end: null };




        // 處理格式: "2025.07.14-07.15" 或 "2025.07.14"
        const parts = dateString.split('-');




        if (parts.length === 2) {
            // 有日期範圍
            const [startPart, endPart] = parts;
            const [year, month] = startPart.split('.').slice(0, 2);
            const startDay = startPart.split('.')[2];
            const endDay = endPart.split('.')[1] || endPart; // 處理 "07.15" 或 "15"




            return {
                start: new Date(`${year}-${month}-${startDay}`),
                end: new Date(`${year}-${month}-${endDay}`)
            };
        } else {
            // 單一日期
            const date = dateString.replace(/\./g, '-');
            const parsedDate = new Date(date);
            return {
                start: parsedDate,
                end: parsedDate
            };
        }
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
            // 3. 活動類型篩選
            .filter((market) => {
                return selectedActivityType === '' || market.category.includes(selectedActivityType);
            })
            // 4. 關鍵字搜尋
            .filter((market) => {
                if (search === '') return true;
                return market.name.toLowerCase().includes(search.toLowerCase());
            })
            // 5. 時間篩選
            .filter((market) => {
                if (activeFilter === '' || activeFilter === 'all') {
                    return true; // 顯示全部
                }




                // 解析市集的日期範圍
                const { start: mStart, end: mEnd } = parseDateRange(market.date);




                if (!mStart) return true; // 如果沒有日期資料，預設顯示




                switch (activeFilter) {
                    case 'now': // 今天的活動
                        return mStart <= today && mEnd >= today;




                    case 'week': // 本週的活動
                        return mStart <= weekEnd && mEnd >= weekStart;




                    case 'date': // 日期範圍篩選
                        // 如果沒有選擇任何日期，顯示全部
                        if (!startDate && !endDate) return true;




                        const userStart = startDate ? new Date(startDate) : null;
                        const userEnd = endDate ? new Date(endDate) : null;




                        // 如果只有開始日期：顯示活動結束日期在選擇日期之後的活動
                        if (userStart && !userEnd) {
                            return mEnd >= userStart;
                        }
                        // 如果只有結束日期：顯示活動開始日期在選擇日期之前的活動
                        if (!userStart && userEnd) {
                            return mStart <= userEnd;
                        }
                        // 如果有開始和結束日期：顯示有任何重疊的活動
                        if (userStart && userEnd) {
                            return mStart <= userEnd && mEnd >= userStart;
                        }
                        return true;




                    default:
                        return true;
                }
            });
    }, [search, selectedCity, selectedDistrict, selectedActivityType, arrMarkets, activeFilter, startDate, endDate]);








    // 生成提示訊息
    const getNoResultsMessage = () => {
        return '沒有找到符合條件的市集活動';
    };




    return (
        <section className='find_type_main'>
            <h1 className='titleBox_h1'>
                <img className='titleBox' src="./images/titlebox/find_type_titlebox.svg" alt='市集分類Market Type' />
            </h1>
            <div className='find_type_content_box'>




                {/* 搜尋表單 */}
                <form className={`type_search-box ${isMenuExpanded ? 'expanded' : ''}`} id='type_serch' method="post" acceptCharset="UTF-8" onSubmit={handleSubmit}>




                    <div className='search-wrap'>
                        {/* 關鍵字搜尋 */}
                        <div className='search'>
                            <input
                                type="search"
                                name="search"
                                id="search"
                                size="15"
                                placeholder='關鍵字搜尋'
                                value={search}
                                onChange={(e) => { setSearch(e.target.value) }} />
                            <button type="submit" value="搜尋">
                                <img src="./images/find_map/magnifier.svg" alt="搜尋" />
                            </button>
                        </div>
                        <button
                            type="button"
                            className={`search_hamburger ${isMenuExpanded ? 'is-active' : ''}`}
                            onClick={toggleMenu}
                        >
                            <img src="./images/Find_type/icon-hamburger.svg" alt="展開選項" />
                        </button>
                    </div>




                    {/* 可展開的搜尋選項區域 */}
                    <div className='search-options'>
                        {/* 選擇縣市 */}
                        <div className='select'>
                            <select
                                name="city"
                                id="city"
                                value={selectedCity}
                                onChange={handleCityChange}>
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
                                disabled={!selectedCity}>
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




                        {/* 日期選擇器 */}
                        {showDatePicker && (
                            <div className='date-picker-panel'>
                                <div className='date-inputs'>
                                    <div className='date-input-group'>
                                        <label htmlFor="startDate">開始日期</label>
                                        <input
                                            type="date"
                                            id="startDate"
                                            value={startDate}
                                            onChange={(e) => setStartDate(e.target.value)}
                                        />
                                    </div>




                                    <div className='date-input-group'>
                                        <label htmlFor="endDate">結束日期</label>
                                        <input
                                            type="date"
                                            id="endDate"
                                            value={endDate}
                                            min={startDate}
                                            onChange={(e) => setEndDate(e.target.value)}
                                        />
                                    </div>
                                </div>




                                <div className='date-picker-actions'>
                                    <button
                                        type="button"
                                        className="btn-secondary"
                                        onClick={clearDateRange}
                                    >
                                        清除
                                    </button>
                                    <button
                                        type="button"
                                        className="btn-primary"
                                        onClick={applyDateRange}
                                    >
                                        確認
                                    </button>
                                </div>
                            </div>
                        )}




                        <div className='select'>
                            <select
                                name="activityType"
                                id="activityType"
                                value={selectedActivityType}
                                onChange={handleActivityTypeChange}>
                                <option value="">活動類型</option>
                                <option value="布作服飾">布作服飾</option>
                                <option value="文創設計">文創設計</option>
                                <option value="生活風格">生活風格</option>
                                <option value="插畫紙品">插畫紙品</option>
                                <option value="美食飲品">美食飲品</option>
                                <option value="居家療育">居家療育</option>
                                <option value="二手選品">二手選品</option>
                                <option value="飾品配件">飾品配件</option>
                            </select>
                        </div>
                    </div>
                </form>




                <div className='result_box'>
                    <div className='find_type_result'>
                        {filteredMarkets.length > 0 ? (
                            filteredMarkets.map((market) => (
                                <Find_type_card {...market} key={market.id} />
                            ))
                        ) : (
                            <div className='no_results_message'>
                                <div className='no_results_icon'>
                                    <img src="./images/decorations/deco-normal_allegator.svg" alt="沒有結果" />
                                </div>
                                <h3>找不到市集活動</h3>
                                <p>{getNoResultsMessage()}</p>
                                <div className='suggestions'>
                                    <p>建議您可以：</p>
                                    <ul>
                                        <li>調整搜尋條件</li>
                                        <li>嘗試其他縣市或地區</li>
                                        <li>檢查關鍵字是否正確</li>
                                    </ul>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    )
}




export default Find_type











