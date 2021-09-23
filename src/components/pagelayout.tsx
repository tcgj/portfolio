import "bootstrap/dist/css/bootstrap.min.css";
import "devicon/devicon.min.css";

import * as React from "react";

import "../css/pagelayout.css";
import { Head } from "./head";
import { Footer } from "./sections/footer";
import { Navbar } from "./sections/navbar";

type PageLayoutProps = {
    children: React.ReactNode;
};

export const PageLayout = ({ children }: PageLayoutProps) => {
    return (
        <>
            <Head />
            <div className="bg" />
            <div className="scroll-area">
                <Navbar />
                <main>
                    {children}
                </main>
                <Footer />
            </div>
        </>
    );
};
