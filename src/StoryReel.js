import React from 'react'
import "./StoryReel.css"
import Story from './Story';

const StoryReel = () => {
    return (
        <div className='storyReel'>
            <Story image="https://firstclasse.com.my/wp-content/uploads/2020/04/Celebrity-fitness-programmes-featured.jpg"
             profileSrc="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
             title="Nitin Negi" />
            <Story image="https://cdn-prod.medicalnewstoday.com/content/images/articles/325/325466/man-walking-dog.jpg"
             profileSrc="https://i.pinimg.com/originals/28/76/9a/28769a7daeb42646434a6fa187c75342.png" 
            title="Ayush Maurya" />
            <Story image="https://static.toiimg.com/thumb/msid-64105233,imgsize-75151,width-400,resizemode-4/64105233.jpg" 
            profileSrc="https://cloudfront-us-east-2.images.arcpublishing.com/reuters/I2G6U5JY5VOBDMAOP3WQEWDLSE.jpg"
             title="Modi" />
            <Story image="https://image.cnbcfm.com/api/v1/image/106545888-1589995017783gettyimages-1175733547.jpeg?v=1613497255&w=678&h=381" 
            profileSrc="https://pbs.twimg.com/profile_images/669103856106668033/UF3cgUk4_400x400.jpg" 
            title="Jeff" />
            <Story image="https://cdn.geekwire.com/wp-content/uploads/2019/01/190110-starship5.jpg"
             profileSrc="https://upload.wikimedia.org/wikipedia/commons/8/85/Elon_Musk_Royal_Society_%28crop1%29.jpg"
              title="Elon" />   
        </div>
    )
}

export default StoryReel;