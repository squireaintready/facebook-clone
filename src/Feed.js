import React from 'react'
import './Feed.css'
import StoryReel from './StoryReel'
import MessageSender from './MessageSender'
import Post from './Post'

function Feed() {
    return (
        <div className='feed'>
            <StoryReel/>
            <MessageSender/>            
            
            <Post
                key={123}
                profilePic='https://upload.wikimedia.org/wikipedia/commons/a/a9/Samuel_L._Jackson_2019_by_Glenn_Francis.jpg'
                message='Hi welcome to facebook'
                timestamp='This is a timestamp'
                username={'Samuel S. Jo'}
                image='https://consequenceofsound.net/wp-content/uploads/2020/08/Chadwick-Boseman.png'
            />
            <Post
                key={456}
                profilePic='https://upload.wikimedia.org/wikipedia/commons/a/a9/Samuel_L._Jackson_2019_by_Glenn_Francis.jpg'
                message='Hi welcome to facebook'
                timestamp='This is a timestamp'
                username={'Samuel S. Jo'}
                image='https://consequenceofsound.net/wp-content/uploads/2020/08/Chadwick-Boseman.png'
            />
        </div>
    )
}

export default Feed
