import { Chat, EmojiFlags, ExpandMore, LocalHospital, People, Storefront, VideoLibrary } from '@material-ui/icons';
import React from 'react';
import "./Sidebar.css";
import SidebarRow from "./SidebarRow";

const Sidebar = () => {
    return (
        <div className="sidebar">
             <SidebarRow src='https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80' title='nitin negi' />
              
             <SidebarRow Icon ={LocalHospital} title="COVID-19 Information Center" />
             <SidebarRow Icon={EmojiFlags} title="Pages" />
             <SidebarRow Icon={People} title="Friends" />
             <SidebarRow Icon={Chat} title="Messenger" />
             <SidebarRow Icon={Storefront} title="Marketplace" />
             <SidebarRow Icon={VideoLibrary} title="Videos" />
             <SidebarRow Icon={ExpandMore} title="Marketplace" />
        </div>
    )
}

export default Sidebar
