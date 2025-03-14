export default class Panetone{
    constructor(raio,altura){
        this.raio = raio
        this.altura = altura
    }
    calcularVolume(){
        return Math.PI * (this.raio * this.raio) * this.altura       
    }

    calcularDensidade(){
        return calcularMassa * this.calcularVolume
    }

    calcularMassa(){
        return this.calcularVolume * this.calcularDensidade

    }
}