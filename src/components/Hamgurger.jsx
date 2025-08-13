import React from 'react'
import { PiHamburgerFill } from "react-icons/pi";


const Hamgurger = () => {
  return (
    <div>
    
     <div className='navgation'>
       <span className='active'><PiHamburgerFill/></span>  
            <ul>
                <li><Link to="/Find_type">找類型</Link></li>
                <li><Link to="/Find_map">找地圖</Link></li>
                <li><Link to="/Find_schedule">找行程</Link></li>
                <li><Link to="/Blog">部落格</Link></li>
                <li><Link to="/About">關於我們</Link></li>
                <li><Link to="/User">會員登入</Link></li>
            </ul>
        </div >


    </div>
  )
}

export default Hamgurger