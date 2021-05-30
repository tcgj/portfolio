import * as React from "react"

import "../css/buttons.css"
import { Link } from "./link"
import { classNames } from "../util/util"

type NavButtonProps = {
    to: string
} & React.ComponentPropsWithoutRef<"a">

type SocialButtonProps = {
    icon: string
} & NavButtonProps

export const NavButton = ({
    to,
    ...rest
}: NavButtonProps) => {
    return (
        <Link to={to} className="btn-nav" {...rest} />
    )
}

export const SocialButton = ({
    to,
    icon,
    ...rest
}: SocialButtonProps) => {
    return (
        <Link to={to} className={classNames(icon, "btn-social")} {...rest} />
    )
}
