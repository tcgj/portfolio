import * as React from "react";

import "../css/consoletext.css";
import { classNames } from "../util/util";

type CursorProps = {
    cursorType: "box" | "underscore";
    iterations: number | "infinite";
    delay?: number;
    shouldStart?: boolean;
} & React.ComponentPropsWithoutRef<"span">;

type ConsoleTextProps = {
    text: string;
    delay?: number;
    shouldStart?: boolean;
    skipBlink?: boolean;
} & React.ComponentPropsWithoutRef<"span">;

export const CursorBlinker = ({
    cursorType,
    iterations,
    delay = 0,
    shouldStart = true,
    style,
    className = "",
    ...rest
}: CursorProps) => {
    return (
        <span
            aria-hidden
            className={classNames(className, "blinker", shouldStart ? `blinker-${cursorType}` : "")}
            style={{
                "--blink-delay": `${delay}s`,
                "--iterations": iterations,
                ...style
            } as React.CSSProperties}
            children="T" // Decent sized character
            {...rest}
        />
    );
};

export const ConsoleText = ({
    text,
    delay = 0,
    shouldStart = true,
    skipBlink = false,
    className = "",
    style,
    ...rest
}: ConsoleTextProps) => {
    const content = React.useMemo(() => {
        return text.split("").map((chr, index) => (
            <span
                aria-hidden
                key={index}
                className={classNames("console-text-char", shouldStart && "console-text-char-anim")}
                style={{
                    "--idx": index,
                    ...style
                } as React.CSSProperties}
            >
                {chr}
            </span>
        ));
    }, [text, shouldStart, style]);

    return (
        <span
            className={classNames(className, "console-text")}
            style={{
                "--delay": `calc(${delay}s + ${skipBlink ? 0 : 2.2}s)`
            } as React.CSSProperties}
            {...rest}
        >
            <span className="sr-only">{text}</span>
            {!skipBlink && (
                <CursorBlinker
                    cursorType="box"
                    iterations={2}
                    shouldStart={shouldStart}
                    className="console-text-blinker"
                />
            )}
            {content}
        </span>
    );
};
