function botLikeInstagram () {
  let contador = 0;
  let like = 0;

  document.querySelectorAll('.fr66n > button').forEach((item, idx) => {
    contador++;
  })

	const scrollToEndPage = () => {
    if(contador <= 0) {
      console.log(`Dado um scroll na pagina para carregar mais conteudo!`)
      scrollTo(0, document.querySelector('body').scrollHeight)

			setTimeout(() => {
				this.botLikeInstagram()
			}, 5000)
    }
  }

  setTimeout(() => {
    document.querySelectorAll('.fr66n > button > div > span > svg').forEach((item, idx) => {
      if(document.querySelectorAll('.fr66n > button > div > span > svg')[idx].attributes[0].textContent.trim().toLowerCase() == 'descurtir') {
        contador--;
        console.log(`${idx} - Já deu like pessoa(s)!`)
	scrollToEndPage()
      } else {
        setTimeout(() => {
          let btnLike = document.querySelectorAll('.fr66n > button')[idx]
          btnLike.click();
          like++;
          contador--;
          console.log(`${idx} - Like em ${like} pessoa(s)!`)
          scrollToEndPage()
        }, idx * 10000) 
      }
    })
  }, 7000)
}

this.botLikeInstagram()