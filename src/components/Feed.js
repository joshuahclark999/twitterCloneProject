import React, { useState, useEffect } from 'react'
import TweetBox from './TweetBox'
import Post from './Post'
import './css/feed.css';
import db from '../firebase';


function Feed() {
    const [posts, setPosts] = useState([])
    useEffect(() => {
        db.collection('posts').onSnapshot(snapshot =>{
            setPosts(snapshot.docs.map(doc => doc.data()))
        })
    }, [])

    return (
        <div className="feed">
            {/* Header */}
            <div className="feedHeader">
                <h2>Home</h2> 
            </div>
            {/* Tweetbox */}
            <TweetBox  />
            {/* other tweets */}
                
            {posts.map(post => (
                <Post 
                    key={post.id}
                    displayName={post.displayName}
                    userName={post.username}
                    verified={post.verified}
                    timestamp={post.timestamp}
                    content={post.text}
                    avatar={post.avatar}
                    id={post.id}
                />
            ))}
        </div>
    )
}

export default Feed
