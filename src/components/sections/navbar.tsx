import * as React from "react";

import "../../css/navbar.css";
import { NavButton, NavButtonProps, SocialButton, SocialButtonProps } from "../buttons";

const navList: NavButtonProps[] = [
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

const socialList: SocialButtonProps[] = [
    {
        name: "GitHub",
        icon: "devicon-github-original",
        to: "https://github.com/tcgj"
    },
    {
        name: "LinkedIn",
        icon: "devicon-linkedin-plain",
        to: "https://www.linkedin.com/in/terencecgj/"
    }
];

const generateNavLinks = (navList: NavButtonProps[]) => {
    return navList.map(({ text, to }) => (
        <NavButton text={text} to={to} key={text} />
    ));
};


const generateSocials = (socialList: SocialButtonProps[]) => {
    return socialList.map(({ name, icon, to }) => (
        <SocialButton to={to} icon={icon} name={name} key={name} />
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
