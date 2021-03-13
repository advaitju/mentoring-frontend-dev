let value = 5;
let bg = '#aaa';

document.querySelector('h1').addEventListener('click', () => {
  if (bg === '#aaa') {
    bg = '#333';
    document.querySelector('body').style.backgroundColor = bg;
  } else {
    bg = '#aaa';
    document.querySelector('body').style.backgroundColor = bg;
  }
});

