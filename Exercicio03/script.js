 
 function iniciar(){
    var iniciotxt = document.querySelector('input#start')
    var inicionumber = Number(iniciotxt.value)
    
    var fimtxt = document.querySelector('input#end')
    var fimnumber = Number(fimtxt.value)

    var passotxt = document.querySelector('input#step')
    var passonumber= Number(passotxt.value)

    var cont = ''

    var conf = document.querySelector('p#confira')
    var res = document.querySelector('p#resultado')
    

    if (inicionumber == 0 || fimnumber == 0 ||passonumber == 0 ) {

        window.alert('Dados não preenchidos serão obtidos como 0!')
        conf.innerHTML = `Contando de ${passonumber} em ${passonumber}, de ${inicionumber} até ${fimnumber}: `
        res.innerHTML = " "
        for (cont = inicionumber; cont <= fimnumber; cont+=passonumber){
             res.innerHTML += `👉  ${cont} ` 
            } 
        res.innerHTML += ` 🔚`
    } else  { 
        conf.innerHTML = `Contando de ${passonumber} em ${passonumber}, de ${inicionumber} até ${fimnumber}: `
        res.innerHTML = " "
        
        for (cont = inicionumber; cont <= fimnumber; cont+=passonumber){
            res.innerHTML += `👉  ${cont} ` 
           } 
        res.innerHTML += ` 🔚`
    }
                
 }