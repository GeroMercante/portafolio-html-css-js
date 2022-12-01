// FORMULARIO
const $form = document.querySelector('#form');

$form.addEventListener('submit', handleSubmit)

async function handleSubmit(event){
    event.preventDefault()
    const form = new FormData(this)
    const response = await fetch(this.action, {
        method: this.method,
        body: form,
        headers: {
            'Accept': 'application/json'
        }
    })
    if(response.ok){
        this.reset()
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Formulario enviado con éxito! En breve tendrá su respuesta',
            showConfirmButton: false,
            timer: 3500,
        })
    } else {
        Swal.fire({
            icon: 'error',
            title: 'Disculpa',
            text: 'El servicio de formulario está colapsado! Por favor, notifique por algun medio que el formulario no está funcionando',
            footer: '<a href="mailto:geronimomercante00@gmail.com">O ponte en contacto con el dueño del sitio para que pueda solucionarlo</a>'
        })
    }
}
