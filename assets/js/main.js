// Capturar evento de submit do formulário
const form = document.querySelector('#formulario');

const img = document.querySelector('#imagem');

form.addEventListener('submit', function(e){
    e.preventDefault();
    const inputPeso = e.target.querySelector('#peso');
    const inputAltura = e.target.querySelector('#altura');

    const peso = Number(inputPeso.value.replace(',', '.'));
    const altura = Number(inputAltura.value.replace(',', '.'));

    if (!peso) {
        setResultado('Peso inválido!', false);
        return;
    }
    
    if(!altura) {
        setResultado('Altura inválida!', false);
        return;
    }

    const imc = getImc(peso, altura);
    const nivelImc = getNivelImc(imc);

    const msg = `Seu IMC é ${imc} (${nivelImc})`;

    setResultado(msg, true);
});

function getNivelImc (imc) {
    const nivel = ['Abaixo do peso', 'Peso normal', 'Sobrepeso', 'Obesidade grau I', 'Obesidade grau II', 'Obesidade grau III'];

    if (imc >= 39.9) { 
        img.src = 'assets/img/imc-obesII.jpg';
        return nivel ['5'];
    }
    if (imc >= 34.9) {
        img.src = 'assets/img/imc-obesII.jpg'
        return nivel ['4'];
    }
    if (imc >= 29.9) { 
        img.src = 'assets/img/imc-obesI.jpg'
        return nivel ['3'];
    }
    if (imc >= 24.9){
        img.src = 'assets/img/imc-acima.jpg';
        return nivel ['2'];
    }
    if (imc >= 18.5) {
        img.src = 'assets/img/imc-norm.jpg';
         return nivel ['1'];
    }
    if (imc < 18.5) {
        img.src = 'assets/img/imc-underw.jpg';
        return nivel ['0'];
    }
}

function getImc(peso, altura) {
    const imc = peso / altura ** 2;
    return imc.toFixed(2);
}

function criaP () {
    const p = document.createElement('p');
    return p;
    return
}

function setResultado(msg, isValid) {
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = '';   

    const p = criaP();

    if(isValid){
         p.classList.add('paragrafo-resultado');
    } else {
        p.classList.add('bad');
    }

    p.innerHTML = msg;
    resultado.appendChild(p);
}