import React from 'react'
import logo from "../assets/SIH_Logo_Farmer.png"
import {Link} from "react-router-dom"
import {toast} from "react-hot-toast"


const Navbar = (props) => {
    let isLoggedIn = props.isLoggedIn;
    let setIsLoggedIn = props.setIsLoggedIn;

  return (
    <div className='flex justify-between items-center w-11/12 max-w-[1160px] py-4 mx-auto '>

        <Link className='flex flex-row items-center content-center ' to="/"> 
            <img src={logo} alt="Logo" width={60} height={60} loading="lazy"/>
            <p className='font-mono text-white font-bold'>Smart Farmer</p>
        </Link>

        <nav>
            <ul className='text-white flex gap-x-6 font-bold'>
                <li className='hover:text-orange-400 hover:delay-75'>
                    <Link to="/">Home</Link>
                </li>
                <li className='hover:text-orange-400 hover:drop-shadow-xl
                hover:shadow-orange-500 hover:delay-75'>
                    <Link to="/about">About</Link>
                </li>
                <li className='hover:text-orange-400 hover:delay-75'>
                    <Link to="/contact">Contact</Link>
                </li>
                <li className='hover:text-orange-400 hover:delay-75'>
                    <Link to="/community">Community</Link>
                </li>
                {/* <li className='hover:text-orange-400 hover:delay-75'>
                    <Link to="/Government Benefits">Government Benefits</Link>
                </li> */}
            </ul>
        </nav>

        {/* Login - SignUp - LogOut - Dashboard */}
        <div className='flex items-center gap-x-4 font-bold text-white'>
            { !isLoggedIn &&
                <Link to="/login">
                    <button className='  py-[8px] 
                    px-[12px] rounded-[8px] border border-richblack-700'>
                        Log in
                    </button>
                </Link>
            }
            { !isLoggedIn &&
                <Link to="/signup">
                    <button  className='bg-richblack-800  py-[8px] 
                    px-[12px] rounded-[8px] border border-richblack-700'>
                        Sign up
                    </button>
                </Link>
            }
            { isLoggedIn &&
                <Link to="/">
                    <button onClick={() => {
                        setIsLoggedIn(false);
                        toast.success("Logged Out");
                    }}
                    className='bg-richblack-800  py-[8px] 
                    px-[12px] rounded-[8px] border border-richblack-700'>
                        Log Out
                    </button>
                </Link>
            }
            { isLoggedIn &&
                <Link to="/dashboard">
                    <button
                     className='bg-richblack-800  py-[8px] 
                    px-[12px] rounded-[8px] border border-richblack-700'>
                        Dashboard
                    </button>
                </Link>
            }
            {
                <select className='text-black rounded-lg py-2 text-sm' name="languages" id="lang">
                    <option value="marathi">मराठी</option>
                    <option selected="selected" value="english">English</option>
                    <option value="hindi">हिंदी</option>
                    <option value="telgu">తెలుగు</option>
                    <option value="kannad">ಕನ್ನಡ</option>
                </select>
            }
        </div>

        
      
    </div>
  )
}

export default Navbar
