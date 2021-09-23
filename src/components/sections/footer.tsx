import * as React from "react";

import "../../css/footer.css";
import { Link } from "../link";
import { classNames } from "../../util/util";

type FooterProps = {
    backToTop?: boolean;
};

export const Footer = ({
    backToTop = false
}: FooterProps) => {
    return (
        <footer className={classNames("footer", backToTop ? "footer-to-top" : "")}>
            <div className="footer-cp">
                Copyright <span aria-hidden>&#169;</span> 2021 Terence Chong
            </div>
            <div className="footer-nav">
                {backToTop && (
                    <Link
                        to="#top"
                        className="link"
                    >
                        Back To Top
                    </Link>
                )}
            </div>
        </footer>
    );
};
