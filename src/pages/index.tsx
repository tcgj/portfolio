import * as React from "react";

import { Intro } from "../components/sections/intro";
import { Projects } from "../components/sections/projects";
import { About } from "../components/sections/about";
import { PageLayout } from "../components/pagelayout";

const Index = () => {
    return (
        <PageLayout>
            <Intro />
            <Projects />
            <About />
        </PageLayout>
    );
};

export default Index;
