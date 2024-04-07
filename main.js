(() => {
  function startGame(container, count) {
    let secondCard = null;
    let firstCard = null;

    let arrDoubleNumb = [];
    for (let i = 1; i <= count; i++) {
      arrDoubleNumb.push(i);
      arrDoubleNumb.push(i);
    } 

    let randomArr = [];
    randomArr = arrDoubleNumb;

    let currentIndex = randomArr.length, randomIndex;
    
    while (currentIndex != 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [randomArr[currentIndex], randomArr[randomIndex]] = [randomArr[randomIndex], randomArr[currentIndex]];
    }

    for (let i in randomArr) {
      let card = document.createElement('div');
      card.classList.add('card');
      card.textContent = randomArr[i];
      container.append(card);

      function game() {
        if(firstCard === null) {
          firstCard = card;
          console.log('firstCard === null');
          card.classList.add('open');
        } else if (secondCard === null) {
          secondCard = card;
          console.log('secondCard === null');
          card.classList.add('open');

          if (firstCard.textContent == secondCard.textContent) {
            firstCard.classList.add('success');
            secondCard.classList.add('success');
            firstCard = null;
            secondCard = null;

            console.log('firstCard.textContent == secondCard.textContent');
          }
        } else {
          firstCard.classList.remove('open');
          secondCard.classList.remove('open');
          firstCard = null;
          secondCard = null;
        }

        if (document.querySelectorAll('.card.success').length == randomArr.length) {
          alert('Победа!');
          container.innerHTML = ''
          arrDoubleNumb = []
          randomArr = []
          firstCard = null
          secondCard = null

          
          startGame(container, count);
        }
      }
      card.addEventListener("click", game);
  }
}
  startGame(document.getElementById('container'), 8);
 
})();