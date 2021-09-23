import * as React from "react";

import "../css/404.css";
import { PageLayout } from "../components/pagelayout";

export const Error = () => {
    return (
        <PageLayout>
            <div className="error">
                <h1>404</h1>
                <p>Page Not Found</p>
            </div>
        </PageLayout>
    );
};

export default Error;
