import * as React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { getImage, GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image"

import "../../css/projects.css"
import { Link } from "../link"
import { ConsoleText } from "../consoletext"
import { useScreenVisible } from "../../hooks/usescreenvisible"
import { useOneWaySwitch } from "../../hooks/useonewayswitch"
import { classNames } from "../../util/util"

type ProjectNodeType = {
    title: string
    caption: string
    description: string
    sites: {
        link: string
        text: string
        icon?: string
    }[]
    background: IGatsbyImageData
    decorations: string[]
}

type ProjectDetailProps = ProjectNodeType & React.ComponentPropsWithoutRef<"div">

const ProjectDetail = ({
    title,
    caption,
    description,
    sites,
    background,
    decorations,
    className,
    ...rest
}: ProjectDetailProps) => {
    const image = getImage(background)

    return (
        <div className={classNames("project-container", className)} {...rest}>
            <div className="project-background">
                {image && (<GatsbyImage image={image} alt="" className="project-image" />)}
            </div>
            <div>
                <h4 className="project-title">{title}</h4>
                <div className="project-caption">{caption}</div>
                <p>{description}</p>
                <div className="project-skills">
                    {decorations.map((d: string, idx: number) => (
                        <span key={idx} className="decoration">{d}</span>
                    ))}
                </div>
            </div>
            <div className="project-links">
                {sites.map(({ link, text, icon }, idx: number) => (
                    <Link to={link} key={idx} className="project-link">
                        {icon && (<i className={classNames("link-icon", icon)} />)}
                        {text}
                    </Link>
                ))}
            </div>
        </div >
    )
}

export const Projects = () => {
    const [sectionRef, isSectionVisible] = useScreenVisible({ threshold: 0.1 })
    const [titleRef, isTitleVisible] = useScreenVisible({ threshold: 1.0 })
    const shouldLoadSection = useOneWaySwitch(isSectionVisible)
    const shouldLoadTitle = useOneWaySwitch(isTitleVisible)

    const { projectList } = useStaticQuery(
        graphql`{
            projectList: allProjectsJson {
                edges {
                    node {
                        title
                        caption
                        description
                        sites {
                            link
                            text
                            icon
                        }
                        background {
                            childImageSharp {
                                gatsbyImageData(
                                    layout: FULL_WIDTH,
                                    quality: 100,
                                    webpOptions: { quality: 100 }
                                    placeholder: BLURRED,
                                    transformOptions: { cropFocus: CENTER }
                                )
                            }
                        }
                        decorations
                    }
                }
            }
        }`
    )

    return (
        <section
            ref={sectionRef}
            className={classNames("projects", shouldLoadSection ? "projects-anim" : "")}
            id="projects"
        >
            <div className="projects-drop-shadow">
                <div className="projects-clip" />
            </div>
            <h3 ref={titleRef} className="projects-header">
                <ConsoleText
                    text="PROJECTS"
                    skipBlink
                    shouldStart={shouldLoadTitle}
                />
            </h3>
            <div className="projects-wrapper">
                {projectList.edges.map(({ node }: { node: ProjectNodeType }, idx: number) => (
                    <ProjectDetail {...node} key={idx} />
                ))}
            </div>
        </section>
    )
}
