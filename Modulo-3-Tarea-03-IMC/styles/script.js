const boton = document.getElementById("submit")
boton.addEventListener("click", capturarDatos)

function calcularImc(peso, altura) {
    return (peso / (altura ** 2));
}
function capturarDatos() {
    let sexo = document.fimc.sexo.value;
    let edad = document.fimc.age.value;
    let peso = document.fimc.weigth.value;
    let altura = document.fimc.higth.value;
    guardarLocalStorage(sexo, edad, peso, altura);
    peso = Number(peso);
    altura = Number(altura);

    function guardarLocalStorage(sexo, edad, peso, altura) {
        localStorage.setItem('Sexo', sexo)
        localStorage.setItem('Edad', edad)
        localStorage.setItem('Peso', peso)
        localStorage.setItem('Altura', altura)
    }

    imcr = calcularImc(peso, altura);
    document.getElementById("results-fimc").innerHTML = imcr.toFixed(2)

    if (imcr < 18.5) document.getElementById("read-r").innerHTML = "Por debajo del peso saludable";
    else if (imcr >= 18.5 && imcr <= 24.9) { document.getElementById("read-r").innerHTML = "Saludable"; }
    else if (imcr >= 25.0 && imcr <= 29.9) { document.getElementById("read-r").innerHTML = 'Con sobrepeso'; }
    else if (imcr > 30 && imcr <= 39.9) { document.getElementById("read-r").innerHTML = "Obesidad"; }
    else if (imcr > 40) { document.getElementById("read-r").innerHTML = "Obesidad"; }
}


fetch('datos.json')
    .then(res => res.json())
    .then((out) => {
        document.querySelector("table tbody").innerHTML = out.map(e => `<tr>
        <td>${e.sexo}</td>
        <td>${e.edad}</td>
        <td>${e.peso}</td>
        <td>${e.altura}</td>
        <td>${calcularImc(e.peso, e.altura).toFixed(2)}</td>
        </tr>`).join('')
    })
