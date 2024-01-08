"use client";

import { Socials } from "@/constants";
import Image from "next/image";
import React from "react";
import BoltIcon from "@mui/icons-material/Bolt";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { Icon, IconButton, useTheme } from "@mui/material";

const Navbar = () => {
  const [value, setValue] = React.useState(0);
  const theme = useTheme();
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div className="w-full h-[60px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 ">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="icon tabs example"
          className="w-full md:w-auto"
        >
          <Tab
            className="px-1 md:px-3"
            icon={<HomeIcon />}
            aria-label="home"
            href="#home"
            style={{
              color: value === 0 ? "#4fc3f7" : theme.palette.primary.main,
            }}
          />
          <Tab
            className="px-1 md:px-3"
            icon={<InfoIcon />}
            aria-label="info"
            href="#introduction"
            style={{
              color: value === 1 ? "#4fc3f7" : theme.palette.primary.main,
            }}
          />
          <Tab
            className="px-1 md:px-3"
            icon={<BoltIcon />}
            aria-label="bolt"
            href="#skills"
            style={{
              color: value === 2 ? "#4fc3f7" : theme.palette.primary.main,
            }}
          />
        </Tabs>

        <a
          href="#home"
          className="h-auto w-auto flex flex-row items-center mr-20"
        >
          <Image
            src="/images/logo.png"
            alt="logo"
            width={80}
            height={60}
            className="font-bold mr-21  hidden md:block text-gray-300"
          />
        </a>

        <div className="flex flex-row  mr-0.5">
          <a
            href="https://github.com/s1f10210386"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconButton color="primary">
              <GitHubIcon />
            </IconButton>
          </a>
          <a
            href="https://twitter.com/ladohada386"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconButton color="primary">
              <TwitterIcon sx={{ marginRight: "2px" }} />
            </IconButton>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
