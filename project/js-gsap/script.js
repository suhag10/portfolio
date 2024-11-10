
const items = document.querySelectorAll('.item');

items.forEach((el) => {
    const image = el.querySelector('img')

    el.addEventListener('mouseenter', (e) => {
        gsap.to(image, { autoAlpha: 1 })
    })

    el.addEventListener('mouseleave', (e) => {
        gsap.to(image, { autoAlpha: 0 })
    })

    el.addEventListener('mousemove', (e) => {
        gsap.set(image, { 
            x: e.offsetX - 200,
            y: e.offsetY - 200
        })
    })
})
