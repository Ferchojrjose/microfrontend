export const getColorsList = () => {
    return JSON.parse(localStorage.getItem("colorsList") ?? "[]") || [];
}

export const getLastColor = () => {
    const colorsList = getColorsList();
    return colorsList[0] || "#000000";
}
