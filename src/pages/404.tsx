import * as React from "react";

import "../css/404.css";
import { Head } from "../components/head";
import { Navbar } from "../components/sections/navbar";
import { Footer } from "../components/sections/footer";

export const Error = () => {
    return (
        <>
            <Head />
            <div className="bg" />
            <div className="scroll-area">
                <Navbar />
                <div className="error">
                    <h1>404</h1>
                    <p>Page Not Found</p>
                </div>
                <Footer />
            </div>
        </ >
    );
};

export default Error;
