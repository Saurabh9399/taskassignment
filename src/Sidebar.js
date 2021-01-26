import React from "react";
import "./Sidebar.css";
import SidebarRow from "./SidebarRow";
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import MenuIcon from "@material-ui/icons/Menu";
import InboxIcon from "@material-ui/icons/Inbox";
import FileCopyOutlinedIcon from "@material-ui/icons/FileCopyOutlined";
import ContactMailOutlinedIcon from "@material-ui/icons/ContactMailOutlined";
import ChatBubbleOutlineOutlinedIcon from "@material-ui/icons/ChatBubbleOutlineOutlined";
import PostAddOutlinedIcon from "@material-ui/icons/PostAddOutlined";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";


function Sidebar() {
  return (
    <div className="sidebar">
      <SidebarRow selected Icon={HomeOutlinedIcon} title="Dashboard" />
      <SidebarRow Icon={MenuIcon} title="Menu Layout" />
      <SidebarRow Icon={InboxIcon} title="Inbox" />
      <SidebarRow Icon={FileCopyOutlinedIcon} title="File Manager" />
      <SidebarRow Icon={ContactMailOutlinedIcon} title="Point of Sale" />
      <SidebarRow Icon={ChatBubbleOutlineOutlinedIcon} title="Chat" />
      <SidebarRow Icon={PostAddOutlinedIcon} title="Post" />
      <hr />
      <SidebarRow Icon={ExpandMoreIcon} title="Curd" />
      <SidebarRow Icon={ExpandMoreIcon} title="Users" />
    </div>
  );
}

export default Sidebar;
