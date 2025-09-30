import React from 'react'
import { Link } from 'react-router-dom';
import posts from '../data/posts.json';








const HomeCard = () => {


    const displayPosts = posts.slice(0, 3);
    // const arrCard = [
    //     {
    //         id: 1,
    //         image: "./images/home/home-card.png",
    //         time: "2025.6.15",
    //         name: "某某某",
    //         title1: "城市裡的一場迷你旅行：",
    //         title2: "我在市集中發現的生活靈感",
    //         slug: ""




    //     },
    //     {
    //         id: 2,
    //         image: "./images/home/home-card.png",
    //         time: "2025.6.15",
    //         name: "某某某",
    //         title1: "城市裡的一場迷你旅行：",
    //         title2: "我在市集中發現的生活靈感",
    //         slug: ""
    //     },
    //     {
    //         id: 3,
    //         image: "./images/home/home-card.png",
    //         time: "2025.6.15",
    //         name: "某某某",
    //         title1: "城市裡的一場迷你旅行：",
    //         title2: "我在市集中發現的生活靈感",
    //         slug: ""
    //     }
    // ]
    return (
        <>
            {/* 卡片 */}




            <div className='home-cards-container'>
               
                    {displayPosts.map(blog => (
                        <Link key={blog.id} className="home-card-link" to={`/blog/${blog.id}`}>
                        <div className='home-card'>
                            <div>
                                <img src={blog.cover}  alt="home-card" />
                            </div>
                            <div className='home-card-item'>
                                <p>{blog.title}</p>
                                <div className='home-card-p'>
                                    <p>{blog.dateText}<br />{blog.author.name}</p>
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








 



