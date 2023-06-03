import * as backgroup from "./backgroup.js";

export function burgerInit() {
    if (document.querySelector('.burger')) {
        let opened = false
        document.querySelector('.header .burger').addEventListener("click", () => {
            document.querySelector('.nav').classList.toggle("active")
            opened = !opened
            if (opened) {
                backgroup.open();
            } else {
                backgroup.close();
            }
        })
        document.querySelector(".back").addEventListener("click", (e) => {
            if (!e.target.closest(".nav") && opened) {
                document.querySelector('.nav').classList.remove("active")
                opened = false
                backgroup.close();
            }
        })
    }
}