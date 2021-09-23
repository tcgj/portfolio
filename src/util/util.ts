export const classNames = (...names: (string | false | null | undefined)[]) => {
    return names.filter(entry => entry).join(" ");
};
