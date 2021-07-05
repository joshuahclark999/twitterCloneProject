import React from "react";
import SidebarOption from './SidebarOption'
import LanguageIcon from '@material-ui/icons/Language';
import HomeIcon from '@material-ui/icons/Home';
import ExploreIcon from '@material-ui/icons/Explore';
import NotificationsIcon from '@material-ui/icons/Notifications';
import PersonIcon from '@material-ui/icons/Person';
import EmailIcon from '@material-ui/icons/Email';
import SettingsIcon from '@material-ui/icons/Settings';
import Button from '@material-ui/core/Button';
import './css/sidebar.css';

function Sidebar() {
  return( 
    <div className="sidebar">
        {/* logo */}
        <LanguageIcon className="twitter-icon"/>
        <SidebarOption  text="Home" Icon={HomeIcon}/>
        <SidebarOption text="Explore" Icon={ExploreIcon} />
        <SidebarOption text="Notifications" Icon={NotificationsIcon} />
        <SidebarOption  text="Messages" Icon={EmailIcon}/>
        <SidebarOption  text="Profile" Icon={PersonIcon}/>
        <SidebarOption  text="More" Icon={SettingsIcon}/>
        {/* list of sidebar options */}
        <Button variant="outlined" className="sidebarTweet" fullWidth>Tweet</Button>
    </div>
  
  );
}

export default Sidebar;
