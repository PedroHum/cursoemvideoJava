

function iniciar(){
    let num = document.querySelector('input#ntxt')
    let tab = document.querySelector('select#select')
    
    let p = document.querySelector('p#res')

    if (num.value.length == 0 ){
         p.innerHTML = ' Digite um número para ver sua tabuada'
         tab.innerHTML = ''
    }else {
        let number = Number(num.value)
        p.innerHTML = `Esta é a tabua de ${number}: `
        tab.innerHTML = ''
       
        for (let c = 1; c <= 10; c++){
            let item = document.createElement('option')
            item.text = `${number} x ${c} = ${number*c}` 
            tab.appendChild(item)                      
        }
    }
}