import React from 'react'
import { Link } from 'react-router-dom';




const HomeCard = () => {
    const arrCard = [
        {
            id: 1,
            image: "./images/home/home-card.png",
            time: "2025.6.15",
            name: "某某某",
            title1: "城市裡的一場迷你旅行：",
            title2: "我在市集中發現的生活靈感",
            slug: ""


        },
        {
            id: 2,
            image: "./images/home/home-card.png",
            time: "2025.6.15",
            name: "某某某",
            title1: "城市裡的一場迷你旅行：",
            title2: "我在市集中發現的生活靈感",
            slug: ""
        },
        {
            id: 3,
            image: "./images/home/home-card.png",
            time: "2025.6.15",
            name: "某某某",
            title1: "城市裡的一場迷你旅行：",
            title2: "我在市集中發現的生活靈感",
            slug: ""
        }
    ]
    return (
        <>
            {/* 卡片 */}


            <div className='home-cards-container'>
               
                    {arrCard.map(blog => (
                        <Link key={blog.id} className="home-card-link" to={`/blog/${blog.slug}`}>
                        <div className='home-card'>
                            <div>
                                <img src={blog.image} alt="home-card" />
                            </div>
                            <div className='home-card-item'>
                                <p>{blog.time}<span>{blog.name}</span></p>
                                <div className='home-card-p'>
                                    <p>{blog.title1}<br />{blog.title2}</p>
                                </div>
                            </div>
                        </div>
                        </Link>
                    ))}
            </div>
        </>
    )
}




export default HomeCard




  
