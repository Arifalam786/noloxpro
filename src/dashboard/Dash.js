import React from 'react'
import './Dash.css'
export const Dash = () => {
    return (
        <div className='main_con'>
            {/* navbar */}
            <div className='nav-bar'>            
                <div className='dashboard'>
                    <p className='dash-title'>Dashboard</p>

                </div>

            </div>  
            {/* header    */}
            <div className='header'>
                <h1 className='dash'>Dashboard</h1>
                <input type="text" placeholder="Search here" className='search'/>
                <div className='bell'></div>
                <div className='profile'></div>
            
            </div>
            
            <p className='good'>Good morning, Balram</p>

            {/* Events */}
            <p className='event-title'>Events</p>
            <div className='event-cont'>
                <div className='events'>
                    <div className='event1'> </div>
                    <div className='event2'> </div>
                    
                </div>
                {/* payment */}
                <div className='payment'></div>

                <div className='percent'></div>
                {/* calendar */}
                <div className='date'></div>
                {/* Attendance leaderboard */}
                <p className='atte'>Attendance Leaderboard</p>
                <div className='leaderboard'></div>
                {/* graph */}
                <div className='graph'></div>
                <p className='assign'>Your assignments</p>
                <div className='assign-cont'></div>

            </div>


          

        </div>
    )
}