/*-------------------metodos para la creación de los inputs------------------*/
const add1 = document.getElementById('addInputCircuit');
const divinputsSerie = document.getElementById('inputsSerie');
add1.addEventListener('click', e => {
    let div = document.createElement('div')
    div.innerHTML = `<label>R2</label>
                    <input type="number" name="" id="" autocomplete="off" required> <button class="btnDelete" id="deleteButton" onclick='deletes0(this)'> X </button>`
    divinputsSerie.appendChild(div)
    updateTotal();
})
const add2 = document.getElementById('addInputParalele');
const divinputsParalele = document.getElementById('inputsParalele');
add2.addEventListener('click', e => {
    let div = document.createElement('div')
    div.innerHTML = `<label>R2</label>
                    <input type="number" name="" id="" autocomplete="off" required> <button class="btnDelete" id="deleteButton" onclick='deletes1(this)'> X </button>`
    divinputsParalele.appendChild(div)
    updateTotal();
})

const add3 = document.getElementById('addInputCircuitCap');
const divinputsSerieCap = document.getElementById('inputsSerieCap');
add3.addEventListener('click', e => {
    let div = document.createElement('div')
    div.innerHTML = `<label>C2</label>
                    <input type="number" name="" id="" autocomplete="off" required> <button class="btnDelete" id="deleteButton" onclick='deletes2(this)'> X </button>`
    divinputsSerieCap.appendChild(div)
    updateTotal();
})
const add4 = document.getElementById('addInputParaleleCap');
const divinputsParaleleCap = document.getElementById('inputsParaleleCap');
add4.addEventListener('click', e => {
    let div = document.createElement('div')
    div.innerHTML = `<label>C2</label>
                    <input type="number" name="" id="" autocomplete="off" required> <button class="btnDelete" id="deleteButton" onclick='deletes3(this)'> X </button>`
    divinputsParaleleCap.appendChild(div)
    updateTotal();
})


/*-------------- metodos para eliminar inputs-------*/
const deletes0 = (e) => {
    const divFather = e.parentNode;
    divinputsSerie.removeChild(divFather);
    
    updateTotal();
}

const deletes1 = (e) => {
    const divFather = e.parentNode;
    divinputsParalele.removeChild(divFather);
    updateTotal();
}
const deletes2 = (e) => {
    const divFather = e.parentNode;
    divinputsSerieCap.removeChild(divFather);
    
    updateTotal();
}

const deletes3 = (e) => {
    const divFather = e.parentNode;
    divinputsParaleleCap.removeChild(divFather);
    updateTotal();
}

/*------metodos para actualizar número de inputs----*/
const updateTotal = () => {
    let divsSerie = divinputsSerie.children ;
    let divsParalele = divinputsParalele.children;
    let divsSerieCap = divinputsSerieCap.children ;
    let divsParaleleCap = divinputsParaleleCap.children;
    total0 = 1;
    total1 = 1;
    total2 = 1;
    total3 = 1;
    if(divsSerie.length != 0){
    for(let i = 0; i < divsSerie.length; i++){
        divsSerie[i].children[0].innerHTML = "R"+total0++;
    }
    if(divsParalele.length != 0){
        for(let i = 0; i < divsParalele.length; i++){
            divsParalele[i].children[0].innerHTML = "R"+total1++;
        }
    }
    if(divsSerieCap.length != 0){
        for(let i = 0; i < divsSerieCap.length; i++){
            divsSerieCap[i].children[0].innerHTML = "C"+total2++;
        }
    }
    if(divsParaleleCap.length != 0){
        for(let i = 0; i < divsParaleleCap.length; i++){
            divsParaleleCap[i].children[0].innerHTML = "C"+total3++;
        }
    }
    }
}

/*-------------------------animaciones y cambio de ventanas-------------------------------- */


/*------Zonas generales--------*/
const btnRest = document.getElementById('btnRest');
const btnCap = document.getElementById('btnCap');
const sliderCalcRest = document.getElementById('sliderCalcRest');
const sliderCalcCapa = document.getElementById('sliderCalcCapa');

btnRest.addEventListener('click', (e) => {
    sliderCalcCapa.style.display = 'none';
    sliderCalcRest.style.display = 'block';
    sliderCalcRest.style.animation = 'animate1 0.9s ease';
});

btnCap.addEventListener('click', (e) => {
    sliderCalcRest.style.display = 'none';
    sliderCalcCapa.style.display = 'block';
    sliderCalcCapa.style.animation = 'animate1 0.9s ease';
});

/*------Zonas de calculo--------*/
const btnSerieRest = document.getElementById('btnSerie')
const btnParaleleRest = document.getElementById('btnParalele')
const sliderSerieRest = document.getElementById('sliderSerie')
const sliderParaleleRest = document.getElementById('sliderParalele')

btnSerieRest.addEventListener('click', (e) => {
    sliderParaleleRest.style.display = 'none'
    sliderSerieRest.style.display ='flex';
    sliderSerieRest.style.animation = 'animate 0.5s ease';
})
btnParaleleRest.addEventListener('click', (e) => {
    sliderSerieRest.style.display ='none';
    sliderParaleleRest.style.display = 'flex'
    sliderParaleleRest.style.animation = 'animate 0.5s ease';
})

const btnSerieCap = document.getElementById('btnSerieCap');
const btnParaleleCap = document.getElementById('btnParaleleCap');
const sliderSerieCap = document.getElementById('sliderSerieCap');
const sliderParaleleCap = document.getElementById('sliderParaleleCap');

btnSerieCap.addEventListener('click', (e) => {
    sliderParaleleCap.style.display = 'none';
    sliderSerieCap.style.display = 'flex';
    sliderSerieCap.style.animation = 'animate 0.5s ease';
});

btnParaleleCap.addEventListener('click', (e) => {
    sliderSerieCap.style.display = 'none';
    sliderParaleleCap.style.display = 'flex';
    sliderParaleleCap.style.animation = 'animate 0.5s ease';
});



