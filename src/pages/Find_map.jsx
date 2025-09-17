import React, { useEffect, useMemo, useState } from 'react'
import Find_map_card from '../components/Find_map_card'
import markets from '../data/market.json'
import Map_api from '../components/Map_api'
import cityDistrictData from '../data/taiwan_admin_divisions.json'

const Find_map = () => {

  // State 管理

  // 市集資料
  // 用 state 存資料
  const [arrMarkets] = useState(markets);

  // 取得縣市資料 (從 JSON 檔案的 key 值)
  const cities = Object.keys(cityDistrictData);

  // 縣市state
  const [selectedCity, setSelectedCity] = useState(''); // 選中的縣市

  // 行政區state
  const [selectedDistrict, setSelectedDistrict] = useState(''); // 選中的行政區

  // 根據選中的縣市取得對應的行政區
  const districts = selectedCity ? cityDistrictData[selectedCity] : [];

  // 當縣市改變時的處理函式 (核心邏輯)
  const handleCityChange = (e) => {
    const newCity = e.target.value;
    setSelectedCity(newCity);
    // 🔑 重要：當縣市改變時，要清空已選的行政區
    setSelectedDistrict('');
  };

  // 當行政區改變時的處理函式
  const handleDistrictChange = (e) => {
    setSelectedDistrict(e.target.value);
  };

  // 搜尋變數，預設為空字串
  const [search, setSearch] = useState('');

  // 建立過濾後的函式
  const filteredMarkets = useMemo(() => {
    return [...arrMarkets]
      // 依據縣市過濾
      .filter((market) => {
        const cityMatch = selectedCity === '' || market.city === selectedCity;
        return cityMatch;
      })

      // 依據行政區過濾  
      .filter((market) => {
        const districtMatch = selectedDistrict === '' || market.district === selectedDistrict;
        return districtMatch;
      })

      // 搜尋關鍵字過濾
      .filter((market) => {
        //保留關鍵字內容
        return market.name.match(search);
      })
  }, [search, selectedCity, selectedDistrict, arrMarkets]);

  return (
    <>
      <main className='find_map_main'>
        <h1 className='titleBox_h1'>
          <img className='titleBox' src="./images/titlebox/find_map_titlebox.svg" /* style={{ width: '510px' }} */ alt='市集地圖Market Map' />
        </h1>

        <section className='find_map_content_box'>

          <div className='map_search-box'>
            <div name="map_search_filter" id="map_search_filter" method="post" acceptharset="UTF-8">
              {/* 選擇縣市 */}
              <div className='select_border'>
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
              <div className='select_border'>
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
                  {/* <option value="大安區">大安區</option>
                  <option value="南港區">南港區</option> */}
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
                  // 綁定搜尋變數
                  value={search}
                  // 當搜尋內容有異動時，更新搜尋變數
                  onChange={(e) => { setSearch(e.target.value) }} />
                <button type="button" value="搜尋"><img src="./images/find_map/magnifier.svg" alt="搜尋" /></button>
              </div>
            </div>

            <div className='map_search_result'>
              {
                filteredMarkets.map((market) =>
                  <Find_map_card {...market} key={market.id} />
                )
              }
            </div>
          </div>

          <div className='map_api'>
            <Map_api />
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