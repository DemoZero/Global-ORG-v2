export function rolar(ev) {
    const carrossel = document.getElementById('carrossel')
    const baseWidth = document.getElementById("a").clientWidth
    const a = document.getElementById('a')
    const b = document.getElementById('b')
    const c = document.getElementById('c')

    console.log(carrossel.scrollLeft)
    console.log(carrossel.scrollWidth)

    if (ev.target.classList.contains('direito')) {
        if(carrossel.scrollLeft > carrossel.scrollWidth/2) {
            carrossel.scrollBy({
                behavior: 'smooth',
                left: -baseWidth * 3
            })
        }
        carrossel.scrollBy({
            behavior: 'smooth',
            left: baseWidth
        })
    }

    if (ev.target.classList.contains('esquerdo')) {
        if(carrossel.scrollLeft === 0) {
            carrossel.scrollBy({
                behavior: 'smooth',
                left: baseWidth * 3
            })
        }
        carrossel.scrollBy({
            behavior: 'smooth',
            left: -baseWidth
        })
    }

    return
}