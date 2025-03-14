import Ingredientes from "../model/Ingredientes.js"
import Panetone from "../model/Panetone.js"

let cal = document.getElementById("cal")
let opcao1 = document.getElementById("180g")
let opcao2 = document.getElementById("440g")
let opcao3 = document.getElementById("700g")



cal.addEventListener("click", ()=>{

    let comidas =  [["farinha: ", 0, 0],
                    ["fermento: ", 0, 0],
                    ["leite: ", 0 ,0],
                    ["ovos: ", 0,0],
                    ["manteiga: ", 0,0],
                    ["adocante: ", 0,0],
                    ["essencia: ", 0,0],
                    ["frutas: ", 0,0],
                    ["uvas: ", 0,0],
                    ["sal: ", 0,0]]


    let raio = Number(document.getElementById("raio").value)
    let altura = Number(document.getElementById("altura").value)
    let peso = Number(document.getElementById("peso").value)
    let quan = Number(document.getElementById("quan").value)

    const panetone = new Panetone(raio, altura)
    const ingrediantes = new Ingredientes(peso)

    let volume = panetone.calcularVolume().toFixed(2)
    let densidade = panetone.calcularDensidade().toFixed(2)
    let massa = panetone.calcularMassa().toFixed(2)

    let farinha = document.getElementById("Farinha")
    let fermento = document.getElementById("Fermento")
    let leite = document.getElementById("Leite")
    let ovo = document.getElementById("Ovos")
    let manteiga = document.getElementById("Manteiga")
    let adocante = document.getElementById("Adocante")
    let essencia = document.getElementById("Essencia")
    let fruta = document.getElementById("Essencia")
    let uvas = document.getElementById("Uvas")
    let sal = document.getElementById("Sal")
    let res = document.getElementById("res")

    for(let i = 0; i < 10; i++){
        comidas[i][1] = ingrediantes.calcularIngredientes(i).toFixed(2)
        comidas[i][2] = ingrediantes.calcularValorEstimado(quan, i).toFixed(2)

    }

    farinha.innerHTML = `${comidas[0][1]} e R$: ${comidas[0][2]}`
    fermento.innerHTML = `${comidas[1][1]} e R$: ${comidas[1][2]}`
    leite.innerHTML = `${comidas[2][1]} e R$: ${comidas[2][2]}`
    ovo.innerHTML = `${comidas[3][1]} e R$: ${comidas[3][2]}`
    manteiga.innerHTML = `${comidas[4][1]} e R$: ${comidas[4][2]}`
    adocante.innerHTML = `${comidas[5][1]} e R$: ${comidas[5][2]}`
    essencia.innerHTML = `${comidas[6][1]} e R$: ${comidas[6][2]}`
    fruta.innerHTML = `${comidas[7][1]} e R$: ${comidas[7][2]}`
    uvas.innerHTML = `${comidas[8][1]} e R$: ${comidas[8][2]}`
    sal.innerHTML = `${comidas[9][1]} e R$: ${comidas[9][2]}`

    res.innerHTML = `Volume = ${volume} <br>`
    res.innerHTML += `densidade = ${densidade} <br>`
    res.innerHTML += `massa = ${massa} <br>`

})

opcao1.addEventListener("click", ()=>{
    let comidas =  [["farinha: ", 0, 0],
                    ["fermento: ", 0, 0],
                    ["leite: ", 0 ,0],
                    ["ovos: ", 0,0],
                    ["manteiga: ", 0,0],
                    ["adocante: ", 0,0],
                    ["essencia: ", 0,0],
                    ["frutas: ", 0,0],
                    ["uvas: ", 0,0],
                    ["sal: ", 0,0]]

                    let raio = Number(document.getElementById("raio").value)
                    let altura = Number(document.getElementById("altura").value)
                    let peso = Number(document.getElementById("peso").value)
                    let quan = Number(document.getElementById("quan").value)
                
                    const panetone = new Panetone(raio, altura)
                    const ingrediantes = new Ingredientes(180)
                
                    let volume = panetone.calcularVolume().toFixed(2)
                    let densidade = panetone.calcularDensidade().toFixed(2)
                    let massa = panetone.calcularMassa().toFixed(2)
                
                    let farinha = document.getElementById("Farinha")
                    let fermento = document.getElementById("Fermento")
                    let leite = document.getElementById("Leite")
                    let ovo = document.getElementById("Ovos")
                    let manteiga = document.getElementById("Manteiga")
                    let adocante = document.getElementById("Adocante")
                    let essencia = document.getElementById("Essencia")
                    let fruta = document.getElementById("Essencia")
                    let uvas = document.getElementById("Uvas")
                    let sal = document.getElementById("Sal")
                    let res = document.getElementById("res")
                
                    for(let i = 0; i < 10; i++){
                        comidas[i][1] = ingrediantes.calcularIngredientes(i).toFixed(2)
                        comidas[i][2] = ingrediantes.calcularValorEstimado(quan, i).toFixed(2)
                
                    }
                
                    farinha.innerHTML = `${comidas[0][1]} e R$: ${comidas[0][2]}`
                    fermento.innerHTML = `${comidas[1][1]} e R$: ${comidas[1][2]}`
                    leite.innerHTML = `${comidas[2][1]} e R$: ${comidas[2][2]}`
                    ovo.innerHTML = `${comidas[3][1]} e R$: ${comidas[3][2]}`
                    manteiga.innerHTML = `${comidas[4][1]} e R$: ${comidas[4][2]}`
                    adocante.innerHTML = `${comidas[5][1]} e R$: ${comidas[5][2]}`
                    essencia.innerHTML = `${comidas[6][1]} e R$: ${comidas[6][2]}`
                    fruta.innerHTML = `${comidas[7][1]} e R$: ${comidas[7][2]}`
                    uvas.innerHTML = `${comidas[8][1]} e R$: ${comidas[8][2]}`
                    sal.innerHTML = `${comidas[9][1]} e R$: ${comidas[9][2]}`
                
                    res.innerHTML = `Volume = ${volume} <br>`
                    res.innerHTML += `densidade = ${densidade} <br>`
                    res.innerHTML += `massa = ${massa} <br>`
})

opcao2.addEventListener("click", ()=>{
    let comidas =  [["farinha: ", 0, 0],
                    ["fermento: ", 0, 0],
                    ["leite: ", 0 ,0],
                    ["ovos: ", 0,0],
                    ["manteiga: ", 0,0],
                    ["adocante: ", 0,0],
                    ["essencia: ", 0,0],
                    ["frutas: ", 0,0],
                    ["uvas: ", 0,0],
                    ["sal: ", 0,0]]

                    let raio = Number(document.getElementById("raio").value)
                    let altura = Number(document.getElementById("altura").value)
                    let peso = Number(document.getElementById("peso").value)
                    let quan = Number(document.getElementById("quan").value)
                
                    const panetone = new Panetone(raio, altura)
                    const ingrediantes = new Ingredientes(400)
                
                    let volume = panetone.calcularVolume().toFixed(2)
                    let densidade = panetone.calcularDensidade().toFixed(2)
                    let massa = panetone.calcularMassa().toFixed(2)
                
                    let farinha = document.getElementById("Farinha")
                    let fermento = document.getElementById("Fermento")
                    let leite = document.getElementById("Leite")
                    let ovo = document.getElementById("Ovos")
                    let manteiga = document.getElementById("Manteiga")
                    let adocante = document.getElementById("Adocante")
                    let essencia = document.getElementById("Essencia")
                    let fruta = document.getElementById("Essencia")
                    let uvas = document.getElementById("Uvas")
                    let sal = document.getElementById("Sal")
                    let res = document.getElementById("res")
                
                    for(let i = 0; i < 10; i++){
                        comidas[i][1] = ingrediantes.calcularIngredientes(i).toFixed(2)
                        comidas[i][2] = ingrediantes.calcularValorEstimado(quan, i).toFixed(2)
                
                    }
                
                    farinha.innerHTML = `${comidas[0][1]} e R$: ${comidas[0][2]}`
                    fermento.innerHTML = `${comidas[1][1]} e R$: ${comidas[1][2]}`
                    leite.innerHTML = `${comidas[2][1]} e R$: ${comidas[2][2]}`
                    ovo.innerHTML = `${comidas[3][1]} e R$: ${comidas[3][2]}`
                    manteiga.innerHTML = `${comidas[4][1]} e R$: ${comidas[4][2]}`
                    adocante.innerHTML = `${comidas[5][1]} e R$: ${comidas[5][2]}`
                    essencia.innerHTML = `${comidas[6][1]} e R$: ${comidas[6][2]}`
                    fruta.innerHTML = `${comidas[7][1]} e R$: ${comidas[7][2]}`
                    uvas.innerHTML = `${comidas[8][1]} e R$: ${comidas[8][2]}`
                    sal.innerHTML = `${comidas[9][1]} e R$: ${comidas[9][2]}`
                
                    res.innerHTML = `Volume = ${volume} <br>`
                    res.innerHTML += `densidade = ${densidade} <br>`
                    res.innerHTML += `massa = ${massa} <br>`
})

opcao3.addEventListener("click", ()=>{
    let comidas =  [["farinha: ", 0, 0],
                    ["fermento: ", 0, 0],
                    ["leite: ", 0 ,0],
                    ["ovos: ", 0,0],
                    ["manteiga: ", 0,0],
                    ["adocante: ", 0,0],
                    ["essencia: ", 0,0],
                    ["frutas: ", 0,0],
                    ["uvas: ", 0,0],
                    ["sal: ", 0,0]]

                    let raio = Number(document.getElementById("raio").value)
                    let altura = Number(document.getElementById("altura").value)
                    let peso = Number(document.getElementById("peso").value)
                    let quan = Number(document.getElementById("quan").value)
                
                    const panetone = new Panetone(raio, altura)
                    const ingrediantes = new Ingredientes(700)
                
                    let volume = panetone.calcularVolume().toFixed(2)
                    let densidade = panetone.calcularDensidade().toFixed(2)
                    let massa = panetone.calcularMassa().toFixed(2)
                
                    let farinha = document.getElementById("Farinha")
                    let fermento = document.getElementById("Fermento")
                    let leite = document.getElementById("Leite")
                    let ovo = document.getElementById("Ovos")
                    let manteiga = document.getElementById("Manteiga")
                    let adocante = document.getElementById("Adocante")
                    let essencia = document.getElementById("Essencia")
                    let fruta = document.getElementById("Essencia")
                    let uvas = document.getElementById("Uvas")
                    let sal = document.getElementById("Sal")
                    let res = document.getElementById("res")
                
                    for(let i = 0; i < 10; i++){
                        comidas[i][1] = ingrediantes.calcularIngredientes(i).toFixed(2)
                        comidas[i][2] = ingrediantes.calcularValorEstimado(quan, i).toFixed(2)
                
                    }
                
                    farinha.innerHTML = `${comidas[0][1]} e R$: ${comidas[0][2]}`
                    fermento.innerHTML = `${comidas[1][1]} e R$: ${comidas[1][2]}`
                    leite.innerHTML = `${comidas[2][1]} e R$: ${comidas[2][2]}`
                    ovo.innerHTML = `${comidas[3][1]} e R$: ${comidas[3][2]}`
                    manteiga.innerHTML = `${comidas[4][1]} e R$: ${comidas[4][2]}`
                    adocante.innerHTML = `${comidas[5][1]} e R$: ${comidas[5][2]}`
                    essencia.innerHTML = `${comidas[6][1]} e R$: ${comidas[6][2]}`
                    fruta.innerHTML = `${comidas[7][1]} e R$: ${comidas[7][2]}`
                    uvas.innerHTML = `${comidas[8][1]} e R$: ${comidas[8][2]}`
                    sal.innerHTML = `${comidas[9][1]} e R$: ${comidas[9][2]}`
                
                    res.innerHTML = `Volume = ${volume} <br>`
                    res.innerHTML += `densidade = ${densidade} <br>`
                    res.innerHTML += `massa = ${massa} <br>`
})