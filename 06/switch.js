var agora = (new Date).getDay() /* Função que busca data da máquina com a função que busca o dia da semana dentro da data

0 Domingo
1 Segunda
2 Terça
3 Quarta
4 Quinta
5 Sexta
6 Sabado

*/

console.log(agora)

switch(agora){
    case 0:
        console.log('Dia da semana = Domingo!')
        break
    
    case 1:
        console.log('Dia da semana = Segunda!')
        break
    case 2:
        console.log('Dia da semana = Terça')
        break
    case 3:
        console.log('Dia da semana = Quarta!')
        break
    case 4:
        console.log('Dia da semana = Quinta!')
        break
    case 5:
        console.log('Dia da semana = Sexta!')
        break
    case 6:
        console.log('Dia da semana = Sábado!')
        break
    default:
        console.log('Dia da semana inválido!!')
    }
