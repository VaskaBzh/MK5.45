export function backLink() {
    if (document.querySelector(".nav_item-back")) {
        console.log(document.querySelector(".nav_item-back"))
        document.querySelector(".nav_item-back").addEventListener("click", (e) => {
            e.preventDefault()
            history.back()
        })
    }
}