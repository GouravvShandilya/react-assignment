import React from 'react'
import pic1 from "../utils/pic1.png"
import { CiMenuKebab } from 'react-icons/ci';
import {AiOutlineHeart} from 'react-icons/ai';
import postPic1 from "../utils/postPic1.png"
import {FaRegComment} from 'react-icons/fa6';
import {PiShareFatBold} from 'react-icons/pi';



function Feed() {
    return (
        <div className='w-[100%] h-[90%] bg-[#FFFFFF] flex  flex-col items-center  justify-center rounded-b-xl '>
            <div className='w-[85%] h-[15%]  flex'>
                <div className='w-[15%] h-[100%] flex items-center justify-center '>
                    <img className=' w-[50%]' src={pic1} alt="" />
                </div>
                <div className='w-[70%] h-[100%]  flex items-center'>
                    <div >
                        <h1 className='font-[600] text-[1.5vw] text-[#101010] font-[Gilroy]'>Lara Leones</h1>
                        <h2 className='font-[300] text-[#8D8D8D] text-[0.8vw]  font-[Gilroy]' >@thewallart</h2>
                    </div>
                </div>
                <div className='w-[15%]   h-[100%] flex items-center justify-center '>
                    <CiMenuKebab className='text-[1.6vw]' />
                </div>
            </div>
            <div className='w-[85%] h-[15%]  flex items-center '>
             <p className='font-[Gilroy]'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. <span className='cursor-pointer text-[#FF5E8A]'>Read More</span></p>
            </div>

            <div className='w-[85%] h-[55%] flex items-center justify-center '>
            <img className='w-[100%] h-[100%] bg-cover'  src={postPic1} alt="" />
            </div>
            <div className='w-[85%] h-[15%]  flex gap-1'>
            <div className='  flex items-center justify-center gap-[0.5vw]  w-[10%] h-[100%]'><AiOutlineHeart  className='text-[1.5vw]'/> <h1 className='text-[1.3vw] font-[Gilroy] '>9.8k</h1></div>
            <div className=' flex items-center justify-center gap-[0.5vw]  w-[10%] h-[100%]'><FaRegComment  className='text-[1.5vw]'/><h1 className='text-[1.3vw] font-[Gilroy] '>8.6k</h1></div>
            <div className=' flex items-center justify-center gap-[0.5vw]  w-[10%] h-[100%]'><PiShareFatBold  className='text-[1.5vw]'/><h1 className='text-[1.3vw] font-[Gilroy] '>7.2k</h1></div>
            </div>


        </div>
    )
}

export default Feed
