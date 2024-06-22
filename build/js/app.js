document.addEventListener('DOMContentLoaded', function() {
    navegacionFija()
    crearGaleria()
})

function navegacionFija() {
    const header = document.querySelector('.header')
    const sobreFestival = document.querySelector('.sobre-festival')
    document.addEventListener('scroll', function() {
        if(sobreFestival.getBoundingClientRect().bottom < 1) {
            header.classList.add('fixed')
        } else {
            header.classList.remove('fixed')
        }
    })
}

function crearGaleria() {
    const galeria = document.querySelector('.galeria-imagenes')
    for(let i = 1; i <= 16; i++) {
        const imagen = document.createElement('IMG')
        imagen.src = `src/img/gallery/full/${i}.jpg`
        imagen.alt = 'Imagen Galería'
        // Event Handler
        imagen.onclick = function() {
            mostrarImagen(i)
        }
        galeria.appendChild(imagen)
    }
}

function mostrarImagen(i) {
    const imagen = document.createElement('IMG')
    imagen.src = `src/img/gallery/full/${i}.jpg`
    imagen.alt = 'Imagen Galería'
    // Generar modal
    const modal = document.createElement('DIV')
    modal.classList.add('modal')
    modal.onclick = cerrarModal
    modal.appendChild(imagen)
    // Boton cerrar modal
    const cerrarModalBtn = document.createElement('BUTTON')
    cerrarModalBtn.textContent = 'X'
    cerrarModalBtn.classList.add('btn-cerrar')
    cerrarModalBtn.onclick = cerrarModal
    modal.appendChild(cerrarModalBtn)
    // Agregar al HTML
    const body = document.querySelector('body')
    body.classList.add('overflow-hidden')
    body.appendChild(modal)
}

function cerrarModal() {
    const modal = document.querySelector('.modal')
    modal.classList.add('fade-out')
    setTimeout(() => {
        modal?.remove()
        const body = document.querySelector('body')
        body.classList.remove('overflow-hidden')
    }, 500)
}