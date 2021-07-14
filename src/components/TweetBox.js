import React, { useState } from 'react'
import { Avatar, Button } from '@material-ui/core';
import db from '../firebase';
import { v4 as uuidv4 } from 'uuid';
import './css/tweeetbox.css'



function TweetBox() {

    const [tweetMessage, setTweetMessage] = useState('');
    const sendTweet = e =>{
        e.preventDefault();
        let id = uuidv4();
        if(!tweetMessage){
            alert('Wait, you have to enter something to tweet');
            return;
            
        };
        db.collection('posts').add({
            displayName: 'Josh',
            username: 'testingUser',
            verified: false,
            text: tweetMessage,
            avatar: 'https://pbs.twimg.com/profile_images/1140482536923176960/NfKT8teP_400x400.jpg',
            id: id
        })
        setTweetMessage('')
    }   
    return (
        <div className="tweetBox">
            <form>
                <div className="tweetBox_input flex">
                    <Avatar src="./img/pfp.jpg" alt="ava"/>
                    <input 
                        placeholder="What's happening?" 
                        value={tweetMessage} 
                        onChange={e => setTweetMessage(e.target.value)}
                        type="text"
                    />
                   
                </div> 
                <Button type="submit"
                    onClick={sendTweet}
                    class="tweetBoxBtn">Tweet</Button>
            </form>
        </div>
    )
}

export default TweetBox
