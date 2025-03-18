document.addEventListener('click', event => {
    const yuiyi = document.createElement("div")
    yuiyi.innerText = "🍡"
    yuiyi.classList.add("yuiyi")
    yuiyi.style.fontSize = "24px"
    yuiyi.style.position = "absolute"
    yuiyi.style.top = event.pageY + "px"
    yuiyi.style.left = event.pageX + "px"
    yuiyi.style.zIndex = "10"
    yuiyi.style.transition = "all 1s linear"
    yuiyi.style.userSelect = "none"
    document.body.appendChild(yuiyi)

    setTimeout(() => {
        yuiyi.style.transform = "translateY(-60px)"
        yuiyi.style.opacity = "0.0"
        setTimeout(() => {
            document.body.removeChild(yuiyi)
        }, 1000)
    }, 0)
})