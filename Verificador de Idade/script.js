function verificar() { 
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
        
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            gênero = 'Homem'
            if (idade >=0 && idade < 10) {
              //criança
              img.setAttribute('src', 'menino.jpg')
          } else if (idade < 21) {
              //jovem
              img.setAttribute('src', 'jovempng.png')
          } else if (idade < 50) {
              //adulto
              img.setAttribute('src', 'homem.jpg')
          } else {
              //idoso
              img.setAttribute('src', 'idoso.jpg')
          }
            } 
             {
            if (fsex[1].checked) {
                gênero = 'Mulher'
                if (idade >=0 && idade <10) {
                  //criança
                  img.setAttribute('src', 'menina.jpg')
              } else if (idade <21) {
                  //jovem
                  img.setAttribute('src', 'jovema.jpg')
              } else if (idade <50) {
                  //adulto
                  img.setAttribute('src', 'mulherpng.png')
              } else {
                  //idoso
                  img.setAttribute('src', 'idosa.jpg')
              }
        }
        
        res.style.textAlign = 'center'
        res.innerHTML = `${gênero} com ${idade}. `
        res.appendChild(img)
  
  }
}

}
