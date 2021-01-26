import React from 'react'
import Card from './Card';
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import DescriptionOutlinedIcon from "@material-ui/icons/DescriptionOutlined";
import DesktopWindowsOutlinedIcon from "@material-ui/icons/DesktopWindowsOutlined";
import PersonOutlinedIcon from "@material-ui/icons/PersonOutlined";

function Report() {
    return (
      <>
        <Card
          Icon={ShoppingCartOutlinedIcon}
          number="3.452"
          description="Item Sales"
        />
        <Card
          Icon={DescriptionOutlinedIcon}
          number="3.452"
          description="New Orders"
        />
        <Card
          Icon={DesktopWindowsOutlinedIcon}
          number="3.452"
          description="Total Products"
        />
        <Card
          Icon={PersonOutlinedIcon}
          number="3.452"
          description="Unique Visitor"
        />
      </>
    );
}

export default Report
