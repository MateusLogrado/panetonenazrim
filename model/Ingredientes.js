export default class Ingrediente{
    constructor(peso){
        this.peso = peso
    }
    calcularValorEstimado(quad, i){
                let valor = [["Farinha de Trigo:", 13.50 / 1000],
                     ["Fermento biológico seco:", 1.79 / 10],
                     ["Leite morno desnatado:",6.49 / 1000],
                     ["Ovos:",12.90 / 12],
                     ["Manteiga sem sal:",16.29 / 200],
                     ["Adoçante culinário:",38.50 / 100],
                     ["Essência de baunilha:",11.90 / 100],
                     ["Frutas cristalizadas:",19.90 / 1000],
                     ["Uvas-passas:",27.90 / 1000],
                     ["Sal:",3.89 / 1000]]

let Quantidade = [["Farinha de trigo:",240],
                  ["Fermento biológico seco:",5],
                  ["Leite morno desnatado:",60],
                  ["Ovos:",2],
                  ["Manteiga sem sal:",35],
                  ["Adoçante culinário:",10],
                  ["Essência de baunilha:",5],
                  ["Frutas cristalizadas:",80],
                  ["Uvas-passas:",30],
                  ["Sal:",1.5]]

        return valor[i][1] * Quantidade[i][1] * quad
    }

    calcularIngredientes(i){
        let comidas =  [["farinha: ", 240],
                       ["fermento: ", 5],
                       ["leite: ", 60],
                       ["ovos: ", 2],
                       ["manteiga: ", 35],
                       ["adocante: ", 10],
                       ["essencia: ", 5],
                       ["frutas: ", 80],
                       ["uvas: ", 30],
                       ["sal: ", 1.5]]

            
            return (comidas[i][1] * this.peso) / 440 

    }
}