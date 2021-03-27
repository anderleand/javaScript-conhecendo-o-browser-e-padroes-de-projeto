var campos = document.querySelectorAll('input')

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

    tdVolume.textContent = campos[1].value * campos[2].value
    
    console.log(`Campo Quantidade ${campos[1].value}`)
    console.log(`Campo Valor ${campos[2].value}`)
    console.log(`Campo Volume ${tdVolume.textContent}`)

    tr.appendChild(tdVolume)
    tbody.appendChild(tr)

    campos[0].value = '' //Data
    campos[1].value = '1' //Quantidade
    campos[2].value = '0.0' //Valor

    campos[0].focus()

})