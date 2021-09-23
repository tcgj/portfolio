import * as React from "react";

import "../../css/navbar.css";
import { NavButton, SocialButton } from "../buttons";

type NavInfo = {
    text: string;
    to: string;
};

type SocialInfo = {
    icon: string;
    to: string;
};

const navList = [
    {
        text: "Home",
        to: "/"
    },
    {
        text: "Projects",
        to: "/#projects"
    },
    {
        text: "About",
        to: "/#about"
    }
];

const socialList = [
    {
        icon: "devicon-github-original",
        to: "https://github.com/tcgj"
    },
    {
        icon: "devicon-linkedin-plain",
        to: "https://www.linkedin.com/in/terence-chong-guang-jun-60810b166/"
    }
];

const generateNavLinks = (navList: NavInfo[]) => {
    return navList.map(({ text, to }: NavInfo, index: number) => (
        <NavButton to={to} key={index}>
            {text}
        </NavButton>
    ));
};


const generateSocials = (socialList: SocialInfo[]) => {
    return socialList.map(({ icon, to }: SocialInfo, index: number) => (
        <SocialButton to={to} icon={icon} key={index}>
        </SocialButton>
    ));
};

export const Navbar = () => {
    return (
        <header>
            <nav>
                {generateNavLinks(navList)}
            </nav>
            <div className="social">
                {generateSocials(socialList)}
            </div>
        </header>
    );
};
