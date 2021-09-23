import * as React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { getImage, GatsbyImage } from "gatsby-plugin-image";

import "../../css/about.css";
import { ConsoleText } from "../consoletext";
import { useOneWaySwitch } from "../../hooks/useonewayswitch";
import { useScreenVisible } from "../../hooks/usescreenvisible";

export const About = () => {
    const [titleRef, isTitleVisible] = useScreenVisible({ threshold: 1.0 });
    const shouldLoadTitle = useOneWaySwitch(isTitleVisible);

    const { profile } = useStaticQuery(
        graphql`{
            profile: file(relativePath: {eq: "profile.png"}) {
                childImageSharp {
                    gatsbyImageData(
                        layout: FULL_WIDTH,
                        quality: 100,
                        webpOptions: { quality: 100 }
                        placeholder: TRACED_SVG,
                        tracedSVGOptions: { color: "#44318d", background: "#e98074" },
                        aspectRatio: 1,
                        transformOptions: { cropFocus: ENTROPY }
                    )
                }
            }
        }`
    );
    const img = getImage(profile);

    return (
        <section
            className="about"
            id="about"
        >
            <h3 ref={titleRef} className="about-header">
                <ConsoleText
                    text="ABOUT ME"
                    skipBlink
                    shouldStart={shouldLoadTitle}
                />
            </h3>
            <div className="about-container">
                <div className="about-description">
                    <hr className="horizontal-line hr-top" />
                    <p>
                        Hi there. My name is Terence. I am a software engineer who enjoys figuring out how things work under the hood.
                    </p>
                    <p>
                        I am always interested in new technologies and research — computer graphics being one of my greatest fields of interest.
                    </p>
                    <p>
                        In my spare time, I like to listen to music, pick up a good film or a Netflix series, and learning new skills. I am currently an undergraduate studying Computer Science in the National University of Singapore.
                    </p>
                    <hr className="horizontal-line hr-bottom" />
                </div>
                <div className="about-image">
                    {img && (<GatsbyImage image={img} alt="Picture of Terence Chong" />)}
                </div>
            </div>
        </section>
    );
};
