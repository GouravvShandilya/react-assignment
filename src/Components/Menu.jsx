import React, { useState } from 'react'


function Menu() {
    //Use States
    const [newhome, setHome] = useState(true)
    const [newNotification, setNotification] = useState(false)
    const [newHeart, setHeart] = useState(false)
    const [newMessage, setMessage] = useState(false)
    const [newWallet, setWallet] = useState(false)
    const [newFavorite, setFavorite] = useState(false)
    const [newProfile, setProfile] = useState(false)
    const [newSetting, setSetting] = useState(false)

    //Functions
    function homeHandler() {
        if (!newhome) setHome(true)
        if (newNotification) setNotification(false)
        if (newHeart) setHeart(false)
        if (newMessage) setMessage(false)
        if (newWallet) setWallet(false)
        if (newFavorite) setFavorite(false)
        if (newProfile) setProfile(false)
        if (newSetting) setSetting(false)
    }
    function notificationHandler() {
        if (!newNotification) setNotification(true)
        if (newhome) setHome(false)
        if (newHeart) setHeart(false)
        if (newMessage) setMessage(false)
        if (newWallet) setWallet(false)
        if (newFavorite) setFavorite(false)
        if (newProfile) setProfile(false)
        if (newSetting) setSetting(false)
    }
    function heartHandler() {
        if (!newHeart) setHeart(true)
        if (newhome) setHome(false)
        if (newNotification) setNotification(false)
        if (newMessage) setMessage(false)
        if (newWallet) setWallet(false)
        if (newFavorite) setFavorite(false)
        if (newProfile) setProfile(false)
        if (newSetting) setSetting(false)
    }
    function messageHandler() {
        if (!newMessage) setMessage(true)
        if (newhome) setHome(false)
        if (newNotification) setNotification(false)
        if (newHeart) setHeart(false)
        if (newWallet) setWallet(false)
        if (newFavorite) setFavorite(false)
        if (newProfile) setProfile(false)
        if (newSetting) setSetting(false)
    }
    function walletHandler() {
        if (!newWallet) setWallet(true)
        if (newhome) setHome(false)
        if (newNotification) setNotification(false)
        if (newHeart) setHeart(false)
        if (newMessage) setMessage(false)
        if (newFavorite) setFavorite(false)
        if (newProfile) setProfile(false)
        if (newSetting) setSetting(false)
    }
    function favoriteHandler() {
        if (!newFavorite) setFavorite(true)
        if (newhome) setHome(false)
        if (newNotification) setNotification(false)
        if (newHeart) setHeart(false)
        if (newMessage) setMessage(false)
        if (newWallet) setWallet(false)
        if (newProfile) setProfile(false)
        if (newSetting) setSetting(false)
    }
    function profileHandler() {
        if (!newProfile) setProfile(true)
        if (newhome) setHome(false)
        if (newNotification) setNotification(false)
        if (newHeart) setHeart(false)
        if (newMessage) setMessage(false)
        if (newWallet) setWallet(false)
        if (newFavorite) setFavorite(false)
        if (newSetting) setSetting(false)
    }
    function settingHandler() {
        if (!newSetting) setSetting(true)
        if (newhome) setHome(false)
        if (newNotification) setNotification(false)
        if (newHeart) setHeart(false)
        if (newMessage) setMessage(false)
        if (newWallet) setWallet(false)
        if (newFavorite) setFavorite(false)
        if (newProfile) setProfile(false)
    }
    return (


        <div className='w-[100%] h-[85%] bg-[#FFFFFF] rounded-lg first-letter'>
            <div className='w-[100%]  h-[80%] flex flex-col justify-end'>

                {/* Home button */}
                <div className={`${newhome ? 'w-[100%] h-[12%] border-[#88C2BB] flex items-center border-l-[4px]' : 'w-[100%] h-[12%] flex items-center '}`}>
                    <button onClick={homeHandler} className={`${newhome ? "w-[100%] h-[100%]  font-[Gilroy] pl-[2vw] flex items-center text-[#101010] gap-3 " : "w-[100%] h-[100%]   font-[Gilroy] pl-[2vw] flex items-center text-[#8D8D8D] gap-3"}`}>
                        <svg id="home" xmlns="http://www.w3.org/2000/svg" width="16" height="16.892" viewBox="0 0 16 16.892">
                            <path id="Path_27" data-name="Path 27" d="M6.852,16.465H3.392a2.046,2.046,0,0,1-2.038-2.031V7.553a1.271,1.271,0,0,1,.459-.97l.609-.451A.677.677,0,0,0,1.64,5.055h0l-.624.466A2.617,2.617,0,0,0,0,7.553v6.889a3.4,3.4,0,0,0,3.392,3.392h3.46a.677.677,0,1,0,0-1.354Z" transform="translate(0 -0.941)" fill={`${newhome ? '#200e32' : '#8D8D8D'}`} />
                            <path id="Path_28" data-name="Path 28" d="M16.66,6.756a2.6,2.6,0,0,0-.965-2L10.608.678a3.042,3.042,0,0,0-3.829,0L5.166,1.855a.682.682,0,0,0-.155.948.673.673,0,0,0,.942.155L7.589,1.729a1.73,1.73,0,0,1,2.209,0l5.088,4.08a1.254,1.254,0,0,1,.471.963v6.782a1.994,1.994,0,0,1-1.988,2H11.859a.281.281,0,0,1-.28-.281V12.213a1.765,1.765,0,0,0-1.752-1.769H7.618a1.755,1.755,0,0,0-1.244.518,1.775,1.775,0,0,0-.515,1.251v1.17a.663.663,0,1,0,1.325,0v-1.17a.431.431,0,0,1,.122-.308.426.426,0,0,1,.3-.128H9.82a.428.428,0,0,1,.427.429h0v3.065a1.617,1.617,0,0,0,1.612,1.614h1.473a3.33,3.33,0,0,0,3.321-3.339Z" transform="translate(-0.66)" fill={`${newhome ? '#200e32' : '#8D8D8D'}`} />
                        </svg>
                        Home
                    </button>
                </div>

                {/* Notification button */}
                <div className={`${newNotification ? 'w-[100%] h-[12%] border-[#88C2BB] flex items-center border-l-[4px]' : 'w-[100%] h-[12%] flex items-center '}`}>
                    <button onClick={notificationHandler} className={`${newNotification ? "w-[100%] h-[100%]  font-[Gilroy] pl-[2vw] flex items-center text-[#101010] gap-3 " : "w-[100%] h-[100%]   font-[Gilroy] pl-[2vw] flex items-center text-[#8D8D8D] gap-3"}`} >
                        <svg xmlns="http://www.w3.org/2000/svg" width="14.999" height="17.645" viewBox="0 0 14.999 17.645">
                            <path id="notification" d="M8.947,15.5a.68.68,0,0,1,.882-.018.666.666,0,0,1,.09.943,3.14,3.14,0,0,1-2.458,1.219h0l-.192-.008a3.138,3.138,0,0,1-2.258-1.211h0l-.058-.081a.666.666,0,0,1,.148-.862.679.679,0,0,1,.951.089,1.814,1.814,0,0,0,.368.365,1.755,1.755,0,0,0,2.45-.365h.008ZM7.468,0c2.708,0,5.745,1.91,6.09,4.976h0v1.6a3.312,3.312,0,0,0,.783,1.553.592.592,0,0,1,.063.085A3.581,3.581,0,0,1,15,10.022h0l-.023.163a3.653,3.653,0,0,1-.83,2.43,4.311,4.311,0,0,1-2.755,1.359,35.874,35.874,0,0,1-7.827,0A4.263,4.263,0,0,1,.854,12.615,3.6,3.6,0,0,1,0,10.2H0v-.109A3.706,3.706,0,0,1,.643,8.237h0l.063-.078a3.382,3.382,0,0,0,.783-1.553h0v-1.6l.043-.089a.675.675,0,0,1,1.248.229h0v1.6a.4.4,0,0,1,0,.085A4.643,4.643,0,0,1,1.7,8.99a2.23,2.23,0,0,0-.344,1.1h0v.171a2.27,2.27,0,0,0,.517,1.514,2.93,2.93,0,0,0,1.832.869,35.314,35.314,0,0,0,7.577,0,2.937,2.937,0,0,0,1.871-.908,2.247,2.247,0,0,0,.493-1.467h0v-.179a2.314,2.314,0,0,0-.337-1.11,4.646,4.646,0,0,1-1.143-2.158.406.406,0,0,1,0-.085h0V5.131c-.227-2.344-2.583-3.8-4.634-3.8a5.081,5.081,0,0,0-2.489.644h0l-.093.046a.678.678,0,0,1-.592-.041A.665.665,0,0,1,4.384.815,6.4,6.4,0,0,1,7.468,0Z" fill={`${newNotification ? '#200e32' : '#8D8D8D'}`} />
                        </svg>
                        Notifications
                    </button>
                </div>

                {/* Shop button */}
                <div className={`${newHeart ? 'w-[100%] h-[12%] border-[#88C2BB] flex items-center border-l-[4px]' : 'w-[100%] h-[12%] flex items-center '}`}>
                    <button onClick={heartHandler} className={`${newHeart ? "w-[100%] h-[100%]  font-[Gilroy] pl-[2vw] flex items-center text-[#101010] gap-3 " : "w-[100%] h-[100%]   font-[Gilroy] pl-[2vw] flex items-center text-[#8D8D8D] gap-3"}`}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="15.52" height="13.768" viewBox="0 0 15.52 13.768">
                            <path id="heart" d="M16.093,4.579a4.882,4.882,0,0,0-6.334-.5,4.867,4.867,0,0,0-6.334,7.358l4.82,4.828a2.158,2.158,0,0,0,3.027,0l4.82-4.828A4.867,4.867,0,0,0,16.093,4.579ZM15,10.37l-4.82,4.82a.59.59,0,0,1-.838,0L4.52,10.346A3.293,3.293,0,0,1,9.177,5.689a.776.776,0,0,0,1.1,0A3.315,3.315,0,0,1,15,10.346Z" transform="translate(-1.988 -3.121)" fill={`${newHeart ? '#200e32' : '#8D8D8D'}`} />
                        </svg>

                        Shop
                    </button>
                </div>


                {/* Conversation button */}
                <div className={`${newMessage ? 'w-[100%] h-[12%] border-[#88C2BB] flex items-center border-l-[4px]' : 'w-[100%] h-[12%] flex items-center '}`}>
                    <button onClick={messageHandler} className={`${newMessage ? "w-[100%] h-[100%]  font-[Gilroy] pl-[2vw] flex items-center text-[#101010] gap-3 " : "w-[100%] h-[100%]   font-[Gilroy] pl-[2vw] flex items-center text-[#8D8D8D] gap-3"}`}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="17.778" height="16" viewBox="0 0 17.778 16">
                            <path id="message" d="M12.62,0a5.193,5.193,0,0,1,5.158,5.2h0V6.5l-.006.086a.631.631,0,0,1-.623.548h0l-.008-.016-.1-.008a.628.628,0,0,1-.346-.178.636.636,0,0,1-.184-.448h0V5.2A3.946,3.946,0,0,0,12.62,1.275H5.158A3.946,3.946,0,0,0,1.266,5.2h0V10.8a3.946,3.946,0,0,0,3.892,3.921H12.62A3.946,3.946,0,0,0,16.512,10.8a.636.636,0,0,1,1.266,0A5.193,5.193,0,0,1,12.62,16H5.158A5.185,5.185,0,0,1,0,10.8H0V5.2A5.177,5.177,0,0,1,5.158,0H12.62Zm-8.8,4.788a.618.618,0,0,1,.46.138h0l3.7,2.947a1.266,1.266,0,0,0,1.573,0h0L13.2,4.927h.008l.077-.053A.632.632,0,0,1,14,5.917h0L10.34,8.871a2.525,2.525,0,0,1-3.184,0h0L3.491,5.917l-.068-.065a.645.645,0,0,1-.027-.83A.62.62,0,0,1,3.817,4.788Z" fill={`${newMessage ? '#200e32' : '#8D8D8D'}`} />
                        </svg>
                        Conversation
                    </button>
                </div>

                {/* Wallet button */}
                <div className={`${newWallet ? 'w-[100%] h-[12%] border-[#88C2BB] flex items-center border-l-[4px]' : 'w-[100%] h-[12%] flex items-center '}`}>
                    <button onClick={walletHandler} className={`${newWallet ? "w-[100%] h-[100%]  font-[Gilroy] pl-[2vw] flex items-center text-[#101010] gap-3 " : "w-[100%] h-[100%]   font-[Gilroy] pl-[2vw] flex items-center text-[#8D8D8D] gap-3"}`}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="17.778" height="15" viewBox="0 0 17.778 15">
                            <path id="message" d="M12.62,0a5.193,5.193,0,0,1,5.158,5.2h0V6.5l-.006.086a.631.631,0,0,1-.623.548h0l-.008-.016-.1-.008a.628.628,0,0,1-.346-.178.636.636,0,0,1-.184-.448h0V5.2A3.946,3.946,0,0,0,12.62,1.275H5.158A3.946,3.946,0,0,0,1.266,5.2h0V9.8a3.946,3.946,0,0,0,3.892,3.921H12.62A3.946,3.946,0,0,0,16.512,9.8a.636.636,0,0,1,1.266,0A5.193,5.193,0,0,1,12.62,15H5.158A5.185,5.185,0,0,1,0,9.8H0V5.2A5.177,5.177,0,0,1,5.158,0H12.62Z" fill={`${newWallet ? '#200e32' : '#8D8D8D'}`} />
                        </svg>
                        Wallet
                    </button>
                </div>

                {/* Subscription button */}
                <div className={`${newFavorite ? 'w-[100%] h-[12%] border-[#88C2BB] flex items-center border-l-[4px]' : 'w-[100%] h-[12%] flex items-center '}`}>
                    <button onClick={favoriteHandler} className={`${newFavorite ? "w-[100%] h-[100%]  font-[Gilroy] pl-[2vw] flex items-center text-[#101010] gap-3 " : "w-[100%] h-[100%]   font-[Gilroy] pl-[2vw] flex items-center text-[#8D8D8D] gap-3"}`}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="18.056" height="18.055" viewBox="0 0 18.056 18.055">
                            <g id="favorite" transform="translate(-1.181 -1.18)">
                                <path id="Path_34" data-name="Path 34" d="M13.549,16.206a1.477,1.477,0,0,1-.731-.2l-1.732-1a.207.207,0,0,0-.208,0l-1.732,1A1.466,1.466,0,0,1,7,14.352l.533-1.94a.207.207,0,0,0-.058-.207L6.211,11a1.465,1.465,0,0,1,1-2.527h1.3a.208.208,0,0,0,.183-.11l.99-1.833a1.465,1.465,0,0,1,2.578,0h0l.99,1.834a.208.208,0,0,0,.183.11h1.3a1.465,1.465,0,0,1,1,2.527L14.486,12.2a.207.207,0,0,0-.058.207l.533,1.94a1.467,1.467,0,0,1-1.413,1.854Zm-2.566-2.474a1.459,1.459,0,0,1,.73.2l1.732.991a.2.2,0,0,0,.233-.016.2.2,0,0,0,.074-.221l-.533-1.939a1.465,1.465,0,0,1,.4-1.451l1.269-1.205a.2.2,0,0,0,.05-.229.2.2,0,0,0-.191-.128h-1.3a1.466,1.466,0,0,1-1.289-.768l-.989-1.834c-.1-.192-.265-.192-.368,0L9.811,8.959a1.466,1.466,0,0,1-1.289.768H7.216a.2.2,0,0,0-.194.131.2.2,0,0,0,.05.23l1.269,1.2a1.465,1.465,0,0,1,.407,1.447l-.533,1.939a.2.2,0,0,0,.074.221.2.2,0,0,0,.233.016l1.732-1A1.458,1.458,0,0,1,10.983,13.731Z" transform="translate(-0.745 -0.746)" fill={`${newFavorite ? '#200e32' : '#8D8D8D'}`} />
                                <path id="Path_35" data-name="Path 35" d="M10.237,19.236a9.027,9.027,0,1,1,4.445-1.186.628.628,0,0,1-.619-1.093,7.726,7.726,0,1,0-3.826,1.024.628.628,0,1,1,0,1.256Z" fill={`${newFavorite ? '#200e32' : '#8D8D8D'}`} />
                                <path id="Path_36" data-name="Path 36" d="M13.857,22.256a.628.628,0,0,1-.125-1.243,5.619,5.619,0,0,0,.866-.239.628.628,0,0,1,.445,1.172,6.864,6.864,0,0,1-1.059.3.662.662,0,0,1-.127.014Z" transform="translate(-1.963 -3.187)" fill={`${newFavorite ? '#200e32' : '#8D8D8D'}`} />
                            </g>
                        </svg>
                        Subscription
                    </button>
                </div>

                {/* Profile button */}
                <div className={`${newProfile ? 'w-[100%] h-[12%] border-[#88C2BB] flex items-center border-l-[4px]' : 'w-[100%] h-[12%] flex items-center '}`}>
                    <button onClick={profileHandler} className={`${newProfile ? "w-[100%] h-[100%]  font-[Gilroy] pl-[2vw] flex items-center text-[#101010] gap-3 " : "w-[100%] h-[100%]   font-[Gilroy] pl-[2vw] flex items-center text-[#8D8D8D] gap-3"}`}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="12.8" height="16" viewBox="0 0 12.8 16">
                            <path id="profile" d="M4.708,10.214a20.211,20.211,0,0,1,3.454,0,11.945,11.945,0,0,1,1.867.275,3.328,3.328,0,0,1,2.559,1.57,2.4,2.4,0,0,1-.021,2.02A3.384,3.384,0,0,1,9.98,15.655a11.967,11.967,0,0,1-1.86.267A15.586,15.586,0,0,1,6.295,16H6.078a.613.613,0,0,1,0-1.218h.478c.479-.006.962-.028,1.444-.07a11.387,11.387,0,0,0,1.692-.239c.958-.211,1.559-.514,1.748-.915a1.126,1.126,0,0,0,0-.971c-.189-.408-.79-.725-1.727-.915a10.888,10.888,0,0,0-1.72-.246,17.912,17.912,0,0,0-3.251,0,11.478,11.478,0,0,0-1.7.239c-.958.211-1.552.514-1.748.915a1.168,1.168,0,0,0-.1.486,1.2,1.2,0,0,0,.1.493,2.032,2.032,0,0,0,1.4.824h0l.081.022a.612.612,0,0,1-.389,1.161A3.1,3.1,0,0,1,.226,14.085a2.373,2.373,0,0,1,0-2.02A3.33,3.33,0,0,1,2.8,10.481,12.828,12.828,0,0,1,4.708,10.214ZM4.772.326a4.237,4.237,0,0,1,4.641.932,4.308,4.308,0,0,1,.919,4.674,4.254,4.254,0,0,1-8.19-1.645h0l0-.185A4.286,4.286,0,0,1,4.772.326Zm1.621.9a3.031,3.031,0,0,0-2.155.894,3.083,3.083,0,0,0,.984,5.008,3.034,3.034,0,0,0,3.325-.661A3.084,3.084,0,0,0,9.21,3.121,3.048,3.048,0,0,0,6.393,1.225Z" fill={`${newProfile ? '#200e32' : '#8D8D8D'}`} />
                        </svg>

                        My Profile
                    </button>
                </div>

                {/* Settings button */}
                <div className={`${newSetting ? 'w-[100%] h-[12%] border-[#88C2BB] flex items-center border-l-[4px]' : 'w-[100%] h-[12%] flex items-center '}`}>
                    <button onClick={settingHandler} className={`${newSetting ? "w-[100%] h-[100%]  font-[Gilroy] pl-[2vw] flex items-center text-[#101010] gap-3 " : "w-[100%] h-[100%]   font-[Gilroy] pl-[2vw] flex items-center text-[#8D8D8D] gap-3"}`}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16.209" height="17.2" viewBox="0 0 16.209 17.2">
                            <g id="setting" transform="translate(-0.073 -0.178)">
                                <path id="Path_33" data-name="Path 33" d="M15.369,5.228l-.518-.9a1.592,1.592,0,0,0-2.171-.587h0a1.585,1.585,0,0,1-2.171-.564,1.525,1.525,0,0,1-.213-.762h0A1.592,1.592,0,0,0,8.7.778H7.658A1.585,1.585,0,0,0,6.073,2.37h0A1.592,1.592,0,0,1,4.481,3.94a1.524,1.524,0,0,1-.762-.213h0a1.592,1.592,0,0,0-2.171.587l-.556.914A1.592,1.592,0,0,0,1.571,7.4h0a1.592,1.592,0,0,1,0,2.758h0a1.585,1.585,0,0,0-.579,2.164h0l.526.907a1.592,1.592,0,0,0,2.171.617h0a1.577,1.577,0,0,1,2.164.579,1.524,1.524,0,0,1,.213.762h0a1.592,1.592,0,0,0,1.592,1.592H8.7a1.592,1.592,0,0,0,1.592-1.585h0A1.585,1.585,0,0,1,11.887,13.6a1.622,1.622,0,0,1,.762.213h0a1.592,1.592,0,0,0,2.171-.579h0l.549-.914a1.585,1.585,0,0,0-.579-2.171h0a1.585,1.585,0,0,1-.579-2.171A1.562,1.562,0,0,1,14.79,7.4h0a1.592,1.592,0,0,0,.579-2.164h0Z" transform="translate(0 0)" fill="none" stroke={`${newSetting ? '#200e32' : '#8D8D8D'}`} stroke-linecap="round" stroke-linejoin="round" stroke-width="1.2" fill-rule="evenodd" />
                                <circle id="Ellipse_7" data-name="Ellipse 7" cx="2.636" cy="2.636" r="2.636" transform="translate(5.548 6.142)" fill="none" stroke={`${newSetting ? '#200e32' : '#8D8D8D'}`} stroke-linecap="round" stroke-linejoin="round" stroke-width="1.2" />
                            </g>
                        </svg>
                        Settings
                    </button>
                </div>


            </div>

            {/* Logout button */}
            <div className='w-[100%]  h-[20%] flex items-end '>
                <button className=' pl-[2vw]  w-[100%] h-[40%] flex items-center gap-3 font-[Gilroy] text-[#88C2BB]'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="18.894" height="14.5" viewBox="0 0 18.894 14.5">
                        <g id="logout" transform="translate(-1.25 -3.75)">
                            <path id="Path_30" data-name="Path 30" d="M13.114,11.909a.659.659,0,0,0-.659-.659H1.909a.659.659,0,1,0,0,1.318H12.455A.659.659,0,0,0,13.114,11.909Z" transform="translate(0 -0.909)" fill="#88c2bb" fill-rule="evenodd" />
                            <path id="Path_31" data-name="Path 31" d="M5.451,7.458a.659.659,0,0,0-.932,0L1.443,10.534a.659.659,0,0,0,0,.932l3.076,3.076a.659.659,0,0,0,.932-.932L2.841,11l2.61-2.61A.659.659,0,0,0,5.451,7.458Zm7.527-2.39A5.839,5.839,0,0,0,7.77,8.3.659.659,0,0,1,6.594,7.7,7.153,7.153,0,0,1,20.144,11a7.335,7.335,0,0,1-.257,1.931.659.659,0,1,1-1.272-.347A6.02,6.02,0,0,0,18.826,11,5.89,5.89,0,0,0,12.978,5.068ZM6.885,13.411a.659.659,0,0,1,.886.291,5.839,5.839,0,0,0,5.208,3.23,5.765,5.765,0,0,0,3.475-1.16.659.659,0,1,1,.791,1.054,7.083,7.083,0,0,1-4.266,1.424A7.157,7.157,0,0,1,6.594,14.3.659.659,0,0,1,6.885,13.411Z" transform="translate(0)" fill="#88c2bb" fill-rule="evenodd" />
                        </g>
                    </svg>

                    Log out
                </button>
            </div>
        </div >
    )
}

export default Menu
