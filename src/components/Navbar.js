import React, { useState } from 'react'
import Style from './css/Navbar.css'
import pay from './css/images/pay.svg'
import icon4 from './css/images/icon4.png'
import icon2 from './css/images/icon2.png'
import icon3 from './css/images/users123.png'
import xicon from './css/images/xicon.png'
import { useDispatch } from 'react-redux'


const Navbar = () => {
    const dispatch = useDispatch(
    )
     // turn-on
     const [oned, setOned] = useState(false)
    // let obj = oned ? {sidebar : "sidebar-tab turn-on", main: "main active"} :
    // console.log(obj)
    // const active =  {sidebar : "sidebar-tab turn-on", main: "main active"} 
    // const desable = {sidebar : "sidebar-tab", main: "main"} 
  return (
    <div>
        <div className='main-nav'>
            {/* Logo & Sidebar */}
            <div className="line-logo">
                <div className='sidebar'>
                    <img src={oned? xicon : icon4} onClick={() => {
                        setOned(!oned)
                        if(oned){
                            dispatch({type : "SIDEBAR-DISABLED"})
                        }else{dispatch({type : "SIDEBAR-ACTIVE"})}
                        } }alt="Sidebar" />
                </div>
                <div className='logo' ><a href="/"> <img src={pay}  alt="Logo" /></a>
                </div>
            </div>

            {/* Language & Search & Profile & Language */}
            <div className="add-search-profile-lang">
                <a href="#popup1">
                <div  className='add-post'>Add Post</div>
                </a>
                        <div className='search'>
                            <input type="text" placeholder="  Search..."/>
                            <input type="submit" value={'Search'} />
                        </div>
                        <div className='profile-language'>
                            <div className='profile'>
                                <img src={icon3} alt="profile" />
                            </div>
                            <div className='flag'>
                                <img src={icon2} alt="flag" />
                                
                            </div>

                        </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar