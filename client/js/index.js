var campos = document.querySelectorAll('input')


campos.forEach(input => {
    console.log(input)

    if (input.dataset.tipo === 'valor') {
        SimpleMaskMoney.setMask(input, {
           
            prefix: 'R$ ',
            fixed: true,
            fractionDigits: 2,
            decimalSeparator: ',',
            thousandsSeparator: '.',
            cursor: 'end'
        })
    }

    // input.addEventListener('blur', (event) => {
    //     Valida(event.target)
    // })

})
console.log(campos)

var tbody = document.querySelector('[data-tbody]')
document.querySelector('[data-tipo="form"]').addEventListener('submit', (event) => {
    event.preventDefault()

    var tr = document.createElement('tr')

    campos.forEach((campo) => {
        var td = document.createElement('td')
        td.textContent = campo.value
        tr.appendChild(td)
    })

    var tdVolume = document.createElement('td')

    console.log(campos[2].value)
    let valorFormatado = campos[2].value.replace(/\R\$/g, '')
    let valorNumero = valorFormatado
    valorNumero = Number(valorNumero)
    console.log(Number(valorNumero))


    tdVolume.textContent = campos[1].value * valorNumero
    tr.appendChild(tdVolume)

    tbody.appendChild(tr)

    campos[0].value = ''
    campos[1].value = ''
    campos[2].value = ''

    campos[0].focus()

})

// Realizar export futuramente
// function valida(input) {
//     const tipoDeInput = input.dataset.tipo

//     if (validadores[tipoDeInput]) {
//         validadores[tipoDeInput](input)
//     }

//     if (input.validity.valid) {
//         input.parentElement.classList.remove('input-container--invalido')
//         input.parentElement.querySelector('.input-mensagem-erro').innerHTML = ''
//     } else {
//         input.parentElement.classList.add('input-container--invalido')
//         input.parentElement.querySelector('.input-mensagem-erro').innerHTML = mostraMensagemDeErro(tipoDeInput, input)
//     }
// }

// const validadores = {
//     data: input => validaData(input),
//     cpf: input => validaCPF(input),
//     cep: input => recuperarCEP(input),
//     preco: input => validaPreco(input)
// }