import React from 'react'
import css from './css/Main.css'
import Post from './css/images/post.png'
import { useSelector } from 'react-redux'



const Main = () => {
    const active = useSelector((state) => {
        return state.Sidebar
    })
    console.log(active)
  return (

    // classes turn-on && active for sidebar
    <div className='flexo'>
        <div className={active.sidebar}>
            <ul>
                <li><a href="#">Cars</a></li>
                <li><a href="#">Games</a></li>
                <li><a href="#">Smoke</a></li>
                <li><a href="#">Works</a></li>
                <li><a href="#">Toys</a></li>
            </ul>
        </div>
        <div className={active.main}>
        <div className="container">
            

                <a href='#' className="content">
                        <div>
                            <img src={Post} alt="Image" />
                            <div className='info-div'>
                                <h2>$2,500</h2>
                                <p>Big House With All...</p>
                            </div>
                        </div>
                        
                </a>
                <a href='#' className="content">
                        <div>
                            <img src={Post} alt="Image" />
                            <div className='info-div'>
                                <h2>$2,500</h2>
                                <p>Big House With All...</p>
                            </div>
                        </div>
                        
                </a>
                <a href='#' className="content">
                        <div>
                            <img src={Post} alt="Image" />
                            <div className='info-div'>
                                <h2>$2,500</h2>
                                <p>Big House With All...</p>
                            </div>
                        </div>
                        
                </a>
                <a href='#' className="content">
                        <div>
                            <img src={Post} alt="Image" />
                            <div className='info-div'>
                                <h2>$2,500</h2>
                                <p>Big House With All...</p>
                            </div>
                        </div>
                        
                </a>
                <a href='#' className="content">
                        <div>
                            <img src={Post} alt="Image" />
                            <div className='info-div'>
                                <h2>$2,500</h2>
                                <p>Big House With All...</p>
                            </div>
                        </div>
                        
                </a>
                <a href='#' className="content">
                        <div>
                            <img src={Post} alt="Image" />
                            <div className='info-div'>
                                <h2>$2,500</h2>
                                <p>Big House With All...</p>
                            </div>
                        </div>
                        
                </a>
    
               
            </div>
            <div className="buttons">
            <button className='next-page-btn'>1</button>
            <button className='next-page-btn'>2</button>
            <button className='next-page-btn'>3</button>
            <button className='next-page-btn'>4</button>
            </div>
        </div>
    </div>
  )
}

export default Main