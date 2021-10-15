function verificar() {
    var anoatual = (new Date).getFullYear()
    var anonasc = document.querySelector('input#txtano')
    var anonascn= Number(anonasc.value)
    var idade = anoatual - anonascn
    var res = document.querySelector('div#res')
    var radsexo = document.getElementsByName('radsex')
    var sexo = ''

    if (anonasc.value.length == 0 || anonasc.value > anoatual ) {
        window.alert('ERRO Verifique o ano digitado.')
    } else {

        var img = document.createElement('img')
        img.setAttribute('id', 'foto' )
        

        if (radsexo[0].checked) {

            sexo = 'masculino'

            if(idade >=0 && idade <10){
                //criança
                img.setAttribute('src', 'bebe_m.jpg')
            }
            else if(idade < 25){
                //jovem
                img.setAttribute('src', 'bebe_m.jpg')
            }
            else if (idade <60){
                //adulto
                img.setAttribute('src', 'bebe_m.jpg')
            }
            else {
                
            }
           
        } else if(radsexo[1].checked) {
            sexo = 'feminino'
        }
        res.appendChild(img)
        res.innerHTML = `Detectamos sexo ${sexo} com ${idade} anos!`
    }
}