import React from 'react'
import SearchIcon from '@material-ui/icons/Search';
import {TwitterTimelineEmbed, TwitterTweetEmbed } from 'react-twitter-embed'
import './css/widgets.css';

function Widgets() {
    return (
        <div className="widgets">
            <div className="widgets_input">
                <SearchIcon className="widgets_searchIcon" />
                <input type="text" placeholder="Search Twitter" />
            </div>
            <div className="widgets_widgetContainer">
                <h2>What's happening?</h2>
                <TwitterTweetEmbed tweetId={'1376939363817361413'} /> 
                <TwitterTimelineEmbed 
                    sourceType="profile" 
                    screenName="joshuahclark"
                    options={{height: 400}} 
                />
            </div>
        </div>
    )
}

export default Widgets
