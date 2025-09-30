import User_sidebar_left from '../components/User_sidebar_left';
import ScrollToTop from '../components/ScrollToTop'

const arrNotif = [
    {
        id: 1,
        year: '2025',
        month: 'Mar',
        date: '08',
        name: '華山文創市集 – 春日手作季',
        desc: '在春暖花開的三月，華山園區聚集超過 80 個手作品牌，從植栽、陶藝到香氛，讓人一次逛到飽。現場還有現場音樂表演與手作體驗課程，適合全家大小同樂。'
    },
    {
        id: 2,
        year: '2025',
        month: 'Apr',
        date: '20',
        name: '台北赤峰街假日市集 – 小吃大亂鬥',
        desc: '赤峰街化身美食一條街！聚集 50 攤以上在地特色美食，從炭烤牛排、異國料理到特色甜點應有盡有。最受歡迎的「手沖咖啡市集」區域，每杯都有不同風味故事。'
    },
    {
        id: 3,
        year: '2025',
        month: 'May',
        date: '11',
        name: '松菸文創手作市集 – 母親節市集',
        desc: '結合母親節主題，推出限定花藝攤位與甜點禮盒。逛市集同時還能參加「親子 DIY 手作坊」，現場人氣甜點攤位「草莓千層蛋糕」依舊大排長龍。'
    },
    {
        id: 4,
        year: '2025',
        month: 'Jun',
        date: '15',
        name: '駁二藝術特區 – 夏日創意市集',
        desc: '駁二藝術特區盛大舉辦夏日市集，超過 100 攤位，包括插畫、文創商品、二手古著。夜晚還有街頭藝人與樂團表演，營造濃厚的夏日藝術氛圍。'
    },
]

// 通知元件
const Notifications_item = ({ id, year, month, date, name, desc }) => {

    return (
        <div className='notification_item'>
            <ScrollToTop />
            <div className='notification_date'>
                <span className='year'>{year}</span>
                <span className='date'>{`${month}.${date}`}</span>
            </div>
            <div className='notification_content'>
                <h3>{name}</h3>
                <p>{desc}</p>
            </div>
        </div>
    )
}

const Notifications = () => {

    return (
        <main className='notifications_main'>
            <h1 className='titleBox_h1'>
                <img className='titleBox' src="./images/titlebox/notifications_titlebox.svg" alt='訊息通知Notifications' />
            </h1>

            <div className="hr_square_deco" style={{ backgroundImage: 'url("./images/decorations/hr_square_deco.svg")' }}></div>

            <section className="notifications_content_box">

                <User_sidebar_left />

                <div className="notifications_content">
                    <div className='notifications_content_header'>
                        <h2>最新消息</h2>
                    </div>

                    <div className='notifications_layout'>
                        <div className='notifications_image'>
                            <img src="./images/Notifications/market_street.jpg" alt="市集街景" />
                        </div>

                        <div className='notifications_list'>
                            {
                                arrNotif.map(notif => <Notifications_item key={notif.id} {...notif} />)
                            }
                        </div>
                    </div>
                </div>

            </section>

            <div className='notifications_deco-box'>
                <figure className='notifications_deco1'>
                    <img src="./images/decorations/deco-reading_teddy_bear.svg" alt="閱讀泰迪熊裝飾" />
                </figure>
            </div>

        </main>
    )
}

export default Notifications