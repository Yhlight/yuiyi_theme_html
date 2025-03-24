document.addEventListener('click', event => {
    const count = 10
    const totalAngle = 360
    const angleBase = totalAngle / count

    for (let i = 0; i < count; i++) {
        const innerTextRandom = ["🍡", "🌸", "⭐", "✨"]
        const fontSizeRandom = parseInt(Math.random() * 7 + 24)

        const angle = Math.random() * angleBase + (i * angleBase)
        const distance = parseInt(Math.random() * 31 + 60)
        const translateX = Math.cos(angle * Math.PI / 180) * distance
        const translateY = -Math.sin(angle * Math.PI / 180) * distance

        const yuiyi = document.createElement("div")
        yuiyi.innerText = innerTextRandom[parseInt(Math.random() * (innerTextRandom.length))]
        yuiyi.classList.add("yuiyi")
        yuiyi.style.fontSize = `${fontSizeRandom}px`
        yuiyi.style.position = "absolute"
        yuiyi.style.top = event.pageY + "px"
        yuiyi.style.left = event.pageX + "px"
        yuiyi.style.zIndex = "10"
        yuiyi.style.transition = "all 0.75s cubic-bezier(.6,.28,0,.8)"
        yuiyi.style.userSelect = "none"
        yuiyi.style.pointerEvents = "none"
        // yuiyi.style.cssText=``
        document.body.appendChild(yuiyi)

        setTimeout(() => {
            yuiyi.style.transform = `translateX(${translateX}px) translateY(${translateY}px)`
            yuiyi.style.scale = 0.75
            yuiyi.style.opacity = "0.0"
            setTimeout(() => {
                document.body.removeChild(yuiyi)
            }, 1000)
        }, 0)
    }
})