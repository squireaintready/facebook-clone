import React from 'react'
import './StoryReel.css'
import Story from './Story'

function StoryReel() {
    return (
        <div className='storyReel'>
            <Story
                image='https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/kobe-bryant-lakers-1580113536.jpg?crop=1xw:0.6653333333333333xh;center,top&resize=480:*'
                profileSrc='https://www.thehindu.com/sport/other-sports/ygwppn/article30663162.ece/ALTERNATES/LANDSCAPE_1200/THNAKPEOPLE-KOBEBRYANT'
                title='RIP KOBE'
            />
            <Story
                image='https://www.nba.com/images/cms/2020-06/lebron-james-iso-ahs.jpg?w=1920&h=1080'
                profileSrc='https://image-cdn.essentiallysports.com/wp-content/uploads/20200702112824/lebron-james-flexing-1600x901.jpg'
                title='King James'
            />
            <Story
                image='https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Damian_Lillard_against_the_Cleveland_Cavaliers_%28cropped%29.jpg/1200px-Damian_Lillard_against_the_Cleveland_Cavaliers_%28cropped%29.jpg'
                profileSrc='https://cdn.vox-cdn.com/thumbor/28AWK4qVDQ5JalVc_r48xJOZ_aw=/0x0:2000x1233/920x613/filters:focal(797x98:1117x418):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/67225927/blazers.5.png'
                title='Damian Lillard'
            />
            <Story
                image='https://img.bleacherreport.net/img/images/photos/003/763/004/hi-res-7e8eccd1fae7b9f39eb6744752f43bdb_crop_north.jpg?1536723932&w=3072&h=2048'
                profileSrc='https://s.yimg.com/ny/api/res/1.2/7DgK1FSpDHee5sbiU_FehQ--~A/YXBwaWQ9aGlnaGxhbmRlcjtzbT0xO3c9NjQ1O2g9MzYz/https://media.zenfs.com/en-US/nbcsports.com/3aeafd7a985363439afdddaa482d240c'
                title='Luka Doncic'
            />
            <Story
                image='https://sportsnaut.com/wp-content/uploads/2019/12/7E75844F-5E8F-4454-A3F4-0524914C02CD.jpeg'
                profileSrc='https://rocketswire.usatoday.com/wp-content/uploads/sites/29/2018/10/gettyimages-1052932566.jpg?w=1000&h=600&crop=1'
                title='Chris Paul'
            />
            <Story
                image='https://www.nba.com/grizzlies/sites/grizzlies/files/020420-ja-morant-goggles-reaction-1554x884.jpg?cw=700&ch=500&w=879&h=500&x=90&y=0'
                profileSrc='https://cdn.nba.net/nba-drupal-prod/2019-08/grizzlies-ja-morant.jpg'
                title='Ja Morant'
            />
        </div>
    )
}

export default StoryReel 
