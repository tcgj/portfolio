import * as React from "react"

type RefBoolTuple = [React.MutableRefObject<null>, boolean]

export const useScreenVisible = (options: IntersectionObserverInit): RefBoolTuple => {
    const containerRef = React.useRef(null)
    const [visible, setVisible] = React.useState(false)

    const callback = ([entry]: IntersectionObserverEntry[]) => {
        setVisible(entry.isIntersecting)
    }

    React.useEffect(() => {
        const observer = new IntersectionObserver(callback, options)
        if (containerRef.current)
            observer.observe(containerRef.current!)

        return () => {
            observer.disconnect()
        }
    }, [containerRef, options])

    return [containerRef, visible]
}
