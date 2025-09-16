function Verificar(){
    //*ano atual
    const data = new Date()
    //* fullyear pega 4 digitos, 2,0,2,5
    const ano = data.getFullYear()
    const fano = document.getElementById('txtano')
    let res = window.document.getElementById('res')
    //se o ano e comprimento do valor for igual 0 ou maior que o ano atual

    if(fano.value.length == 0 || fano.value > ano){
       window.alert('Verifique os dados e tente novamente!')
    }else{
        const fsex = window.document.getElementsByName('radsex')
        const idade = ano - Number(fano.value)
        res.innerHTML = `O resultado é: ${idade}`
        let genero =''
        //*colocando imagem
         let img = document.createElement('img')
    img.setAttribute('id', 'foto')

        if(fsex[0].checked){
          genero = 'Homem'  
          
          if(idade >=0 && idade < 10){
            //crianca
            img.setAttribute('src', 'foto/crincam.jpg')
        }else if(idade <21){
            //jovem
            img.setAttribute('src', 'foto/garoto 20.jpg ')
        }else if(idade <50){
            //adulto
            img.setAttribute('src', 'foto/homem adulto.jpg')
        }else{
            //velho
            img.setAttribute('src', ' foto/homem velho.jpg')
        }

        }else if(fsex[1].checked){
            genero='Mulher'
            if(idade >=0 && idade < 10){
            //crianca
            img.setAttribute('src','foto/criancag.jpg' )
            
        }else if(idade <21){
            //jovem
            img.setAttribute('src', 'foto/mulher 20.jpg')
        }else if(idade <50){
            //adulto
            img.setAttribute('src', 'foto/mulher adulta.jpg')
        }else{
            //velho
            img.setAttribute('src','foto/mulher velha.jpg' )
        }
            }
            
            res.style.textAlign = 'center'
            res.innerHTML = `Detectamos ${genero} com ${idade} anos`
            //*adicionar um elemento
            res.appendChild(img)
    }
}