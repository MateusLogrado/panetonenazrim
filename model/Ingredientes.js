export default class Panetone{
    constructor(peso){
        this.peso = peso
    }

    calcularValorEstimado(){
        
    }

    calcularIngredientes(){
        let comidas =  [["farinha: ", 240]]
                       [["fermento: ", 5]]
                       [["leite: ", 60]]
                       [["ovos: ", 2]]
                       [["manteiga: ", 35]]
                       [["adocante: ", 10]]
                       [["essencia: ", 5]]
                       [["frutas: ", 80]]
                       [["uvas: ", 30]]
                       [["sal: ", 1.5]]

            
        for(let i=0; i<10; i++){
            return (comidas[i][1] * this.peso) / 440 
        }

    }
}