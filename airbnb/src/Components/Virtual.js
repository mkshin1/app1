import React from 'react'
import '../styles/Virtual.css'
import {AiFillStar} from 'react-icons/ai'
import {MdLocationOn} from 'react-icons/md'
import {BsHouseDoorFill} from 'react-icons/bs'
import {AiOutlineHeart} from 'react-icons/ai'
import {FiShare} from 'react-icons/fi'

function Virtual() {
    return (
        <div className="virtual-container">
            <h1>
            Hotel2Stay Amsterdam: Standard Double Room
            </h1>
            <div className="meta-info">
                <AiFillStar className="star"/> <span>4.72</span>
                <a className="reviews">64 reviews</a>
                <MdLocationOn className="location"/> 
                <span>Amsterdam, Noord-Holland, Netherlands</span>
                <BsHouseDoorFill className="home"/>
                <span>2 guests · 1 bedroom · 1 bed · 1 bath</span>

                
                <a className="share" href="#"> <FiShare /> Share</a>
                <a className="save" href="#"> <AiOutlineHeart /> Save</a>
            </div>

            <div className="home-imgs">

                <div className="lt-img">
                <span>testing</span>
                </div>

                <div className="rt-img">
                
                <div className="rt-img-top">

                <span>testing</span>
                <span>testing</span>
                </div>

                <div className="rt-img-bottom">

                <span>testing</span>
                <span>testing</span>

                </div>
                
                </div>

                

            </div>
        
            
        </div>
    )
}

export default Virtual
