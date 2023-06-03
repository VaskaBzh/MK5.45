export function likeInit() {
    if (document.querySelector(".like")) {
        document.querySelectorAll(".like").forEach(el => {
            el.addEventListener("click", () => {
                el.classList.toggle("like-active");
            })
        })
    }
}