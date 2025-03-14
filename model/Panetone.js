export default class Panetone {
    constructor(raio, altura) {
        this.raio = raio;
        this.altura = altura;
    }

    calcularVolume() {
        return Math.PI * (this.raio * this.raio) * this.altura;
    }

    calcularDensidade() {
        return this.calcularVolume() / this.calcularVolume();
    }

    calcularMassa() {
        return this.calcularVolume() / this.calcularDensidade();
    }

}