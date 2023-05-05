const { body } = document

const randomColor = () => Math.floor(Math.random() * 256)

const changeBgColor = () => {
    const color = `rgb(${randomColor()}, ${randomColor()}, ${randomColor()})`
    body.style.setProperty('background-color', color)
}

body.addEventListener('click', changeBgColor)
