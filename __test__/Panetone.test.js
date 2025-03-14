import Panetone from "../model/Panetone";

describe(" Teste unitario da class Panetone", ()=>{
    test("Calcular do volume ", ()=>{
        const raio = 4
        const altura = 8
        const panetone = new Panetone(raio,altura)
        const volumeEsperado = Math.PI * (raio * raio) * altura
        expect(panetone.calcularVolume()).toBeClose(volumeEsperado, 2)
    })

    test("Calcular da densidade ", ()=>{
        const raio = 4
        const altura = 8
        const panetone = new Panetone(raio,altura)
        const densidadeEsperado = panetone.calcularVolume() * panetone.calcularVolume()
        expect(panetone.calcularDensidade()).toBeClose(densidadeEsperado, 2)
    })

    test("Calcular da densidade ", ()=>{
        const raio = 4
        const altura = 8
        const panetone = new Panetone(raio,altura)
        const massaEsperado = panetone.calcularVolume * panetone.calcularDensidade
        expect(panetone.calcularDensidade()).toBeClose(massaEsperado, 2)
    })
})