import React from 'react'
import "./SearchComponent"
import DraftsOutlinedIcon from "@material-ui/icons/DraftsOutlined";
import GroupOutlinedIcon from "@material-ui/icons/GroupOutlined";
import ReceiptOutlinedIcon from "@material-ui/icons/ReceiptOutlined";
import SubComponent from './SubComponent';

function SearchComponent() {
    return (
      <div className="searchComponent">
        <h3>Pages</h3>
        <SubComponent Icon={DraftsOutlinedIcon} name="Mail & Settings" />
        <SubComponent Icon={GroupOutlinedIcon} name="Users & Permissions" />
        <SubComponent Icon={ReceiptOutlinedIcon} name="Transaction Report" />
      </div>
    );
}

export default SearchComponent
