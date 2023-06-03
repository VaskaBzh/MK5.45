import * as backgroup from "./backgroup.js";

export function filterInit() {
    if (document.querySelector('.filter')) {
        let opened = false
        document.querySelector('.search .burger').addEventListener("click", () => {
            document.querySelector('.filter').classList.add("active")
            opened = true
            backgroup.open();
        })
        document.querySelector(".back").addEventListener("click", (e) => {
            if (!e.target.closest(".filter") && opened) {
                document.querySelector('.filter').classList.remove("active")
                opened = false
                backgroup.close();
            }
        })
        document.querySelector(".filter .cross").addEventListener("click", () => {
            document.querySelector('.filter').classList.remove("active")
            opened = false
            backgroup.close();
        })
    }
}