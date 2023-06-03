export const open = () => {
    document.querySelector("body").style.overflow = "hidden";
    document.querySelector(".back").classList.add("active");
}
export const close = () => {
    document.querySelector("body").style.overflow = "visible";
    document.querySelector(".back").classList.remove("active");
}