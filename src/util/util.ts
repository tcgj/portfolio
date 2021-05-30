type StringNull = string | undefined

export const classNames = (...names: StringNull[]) => {
    return names.join(" ")
}
