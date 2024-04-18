const gameContainer = document.querySelector('#game-container');
const snake = document.querySelector('#snake');
const rollButton = document.querySelector('#roll-dice');

let x = 0;
let y = 0;
const moveSnake = (direction) => {
    switch(direction) {
      case 'up':
        if (y > 0) {
          y -= 20;
        }
        break;
      case 'down':
        if (y + 20 < gameContainer.clientHeight - 20) {
          y += 20;
        }
        break;
      case 'left':
        if (x > 0) {
          x -= 20;
        }
        break;
      case 'right':
        if (x + 20 < gameContainer.clientWidth - 20) {
          x += 20;
        }
        break;
    }
  
    snake.style.left = x + 'px';
    snake.style.top = y + 'px';
  };
  
  

rollButton.addEventListener('click', () => {
    const diceRoll = Math.floor(Math.random() * 6) + 1;

    let direction;
    switch (diceRoll) {
        case 1:
        case 2:
            direction = 'up';
            break;
        case 3:
        case 4:
            direction = 'down';
            break;
        case 5:
        case 6:
            direction = 'left';
            break;
        case 7:
        case 8:
            direction = 'right';
            break;

    }
    moveSnake(direction);
});
