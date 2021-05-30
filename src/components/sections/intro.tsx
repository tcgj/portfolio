import * as React from "react"

import "../../css/intro.css"
import { ConsoleText, CursorBlinker } from "../consoletext"

export const Intro = () => {
    const [hasAnimationEnded, setHasAnimationEnded] = React.useState(false)
    const [blinkerVisible, setBlinkerVisible] = React.useState(false)

    React.useEffect(() => {
        let timer: NodeJS.Timeout;
        if (hasAnimationEnded)
            timer = setTimeout(() => setBlinkerVisible(true), 1000)

        return () => clearTimeout(timer)
    }, [hasAnimationEnded])

    return (
        <section className="intro">
            <h1 className="intro-name">
                <ConsoleText
                    text="TERENCE CHONG"
                    onAnimationEnd={e => (
                        (e.target as HTMLElement).innerHTML === "G" && setHasAnimationEnded(true)
                    )}
                />
                <CursorBlinker
                    cursorType="underscore"
                    iterations="infinite"
                    shouldStart={blinkerVisible}
                />
            </h1>
            <h2 className="intro-sub">
                <ConsoleText
                    text="Software Engineer"
                    delay={3}
                    skipBlink
                    className="intro-sub-first"
                />
                <ConsoleText
                    text="Computer Graphics Enthusiast"
                    delay={4}
                    skipBlink
                />
            </h2>
        </section>
    )
}
