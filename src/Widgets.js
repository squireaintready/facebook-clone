import React from 'react'
import './Widgets.css'

function Widgets() {
    return (
        <div className='widgets'>
            <iframe 
                src='https://www.facebook.com/thatwasepic11/videos/744955649615875/'
                width='340'
                height='100%'
                style={{border:'none', overflow:'hidden'}}
                scrolling='no'
                frameborder='0'
                allowTransparency='true'
                allow='encrypted-media'>
            </iframe>  
        </div>
    )
}

export default Widgets
