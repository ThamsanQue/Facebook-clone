import React from "react";
import { Avatar } from "@material-ui/core";
import "../Styles/sideBarRow.css";

function SidebarRow({ src, Icon, title }) {
  return (
    <div className="sidebarRow__">
      {src && <Avatar src={src} />}
      {Icon && <Icon />}
      <h4>{title}</h4>
    </div>
  );
}

export default SidebarRow;
