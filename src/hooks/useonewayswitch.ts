import * as React from "react"

export const useOneWaySwitch = (isVisible: boolean) => {
    const [shouldLoad, setShouldLoad] = React.useState(isVisible)

    React.useEffect(() => {
        if (!shouldLoad && isVisible)
            setShouldLoad(true)
    }, [isVisible])

    return shouldLoad
}
