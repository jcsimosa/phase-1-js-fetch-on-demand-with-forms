const init = () => {
    let form = document.querySelector('form')
    form.addEventListener('submit',(e) => {
        e.preventDefault()
        console.log(e.target.children[1].value)
    } )
}

document.addEventListener('DOMContentLoaded', init);