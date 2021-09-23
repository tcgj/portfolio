import * as React from "react";

import "../css/buttons.css";
import { Link } from "./link";
import { classNames } from "../util/util";

export type NavButtonProps = {
    to: string;
    text?: string;
    className?: string;
};

export type SocialButtonProps = {
    icon: string;
    name: string;
} & Omit<NavButtonProps, "text">;

export const NavButton = ({
    text,
    to,
    className
}: NavButtonProps) => {
    return (
        <Link to={to} className={classNames(className, "btn-nav")}>
            {text}
        </Link>
    );
};

export const SocialButton = ({
    to,
    icon,
    name,
    className
}: SocialButtonProps) => {
    return (
        <div className="btn-social">
            <Link to={to} className={classNames(icon, className, "btn-social-link")} />
            <div className="btn-social-name">{name}</div>
        </div>
    );
};
