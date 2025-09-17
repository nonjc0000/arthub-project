import React, { useEffect, useMemo, useState } from 'react'
import Find_map_card from '../components/Find_map_card'
import markets from '../data/market.json'
import Map_api from '../components/Map_api'
import cityDistrictData from '../data/taiwan_admin_divisions.json'
import ScrollToTop from '../components/ScrollToTop'

const Find_map = () => {
  // State 管理
  const [arrMarkets] = useState(markets);
  const cities = Object.keys(cityDistrictData);
  const [selectedCity, setSelectedCity] = useState('');
  const [selectedDistrict, setSelectedDistrict] = useState('');
  const districts = selectedCity ? cityDistrictData[selectedCity] : [];
  const [search, setSearch] = useState('');

  // 處理篩選變更
  const handleCityChange = (e) => {
    const newCity = e.target.value;
    setSelectedCity(newCity);
    setSelectedDistrict('');
  };

  const handleDistrictChange = (e) => {
    setSelectedDistrict(e.target.value);
  };

  // 建立過濾後的市集資料
  const filteredMarkets = useMemo(() => {
    return [...arrMarkets]
      .filter((market) => {
        const cityMatch = selectedCity === '' || market.city === selectedCity;
        return cityMatch;
      })
      .filter((market) => {
        const districtMatch = selectedDistrict === '' || market.district === selectedDistrict;
        return districtMatch;
      })
      .filter((market) => {
        return market.name.match(search);
      })
  }, [search, selectedCity, selectedDistrict, arrMarkets]);

  // 處理地圖標記點擊事件
  const handleMarkerClick = (poi) => {
    console.log('地圖標記被點擊:', poi);
    // 可以在這裡添加額外的邏輯，例如：
    // - 在左側列表中高亮對應的市集卡片
    // - 滾動到對應的卡片位置
    // - 顯示詳細資訊等
  };

  return (
    <>
      <ScrollToTop />
      <main className='find_map_main'>
        <h1 className='titleBox_h1'>
          <img className='titleBox' src="./images/titlebox/find_map_titlebox.svg" alt='市集地圖Market Map' />
        </h1>

        <section className='find_map_content_box'>
          <div className='map_search-box'>
            <div name="map_search_filter" id="map_search_filter" method="post" acceptCharSet="UTF-8">
              {/* 選擇縣市 */}
              <div className='select_border'>
                <select
                  name="city"
                  id="city"
                  value={selectedCity}
                  onChange={handleCityChange}
                >
                  <option value="">選擇縣市</option>
                  {cities.map((city, index) => (
                    <option value={city} key={index}>
                      {city}
                    </option>
                  ))}
                </select>
              </div>

              {/* 選擇地區 */}
              <div className='select_border'>
                <select
                  name="district"
                  id="district"
                  value={selectedDistrict}
                  onChange={handleDistrictChange}
                  disabled={!selectedCity}
                >
                  <option value="">選擇地區</option>
                  {districts.map((district, index) => (
                    <option value={district} key={index}>
                      {district}
                    </option>
                  ))}
                </select>
              </div>

              {/* 關鍵字搜尋 */}
              <div className='input_border'>
                <input
                  type="search"
                  name="search"
                  id="search"
                  size="15"
                  placeholder='關鍵字搜尋'
                  value={search}
                  onChange={(e) => { setSearch(e.target.value) }}
                />
                <button type="button" value="搜尋">
                  <img src="./images/find_map/magnifier.svg" alt="搜尋" />
                </button>
              </div>
            </div>

            <div className='map_search_result'>
              {filteredMarkets.map((market) => (
                <Find_map_card {...market} key={market.id} />
              ))}
            </div>
          </div>

          <div className='map_api'>
            {/* 傳入篩選後的市集資料給地圖組件 */}
            <Map_api 
              selectedMarkets={filteredMarkets} 
              onMarkerClick={handleMarkerClick}
            />
          </div>
        </section>

        <div className='map_deco-box'>
          <figure className='map_deco1'>
            <img src="./images/decorations/deco-road_sign.svg" alt="路牌裝飾" />
          </figure>
          <figure className='map_deco2'>
            <img src="./images/decorations/deco-raisehand_allegator.svg" alt="" />
          </figure>
        </div>
      </main>
    </>
  )
}

export default Find_map