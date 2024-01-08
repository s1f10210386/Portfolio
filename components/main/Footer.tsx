import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import { Icon, IconButton } from "@mui/material";

const Footer = () => {
  return (
    <div className="w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px] ">
      {/* GitHubアイコンを中央上部に配置 */}
      <div className="flex justify-center">
        <a
          href="https://github.com/s1f10210386"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IconButton color="primary">
            <GitHubIcon />
          </IconButton>
        </a>
      </div>

      <div className="mb-[20px] text-[15px] text-center ">
        &copy; hotaka 2024 Inc. All rights reserved
      </div>
    </div>
  );
};

export default Footer;
