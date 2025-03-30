const p = document.querySelector('.show-classdemo');
console.log('p', p);

function showClassDemo(item) {
  switch (item) {
    case 'w01_dom_43':
      p.innerHTML = `<iframe src='./demo/w01_dom_43/index.html' width='100%' height='100%' />`;
      break;
    case 'w02_dom_43':
      p.innerHTML = `<iframe src='./demo/w02_dom_43/index.html' width='100%' height='100%' />`;
      break;
    case 'w03_tictactoe_43':
      p.innerHTML = `<iframe src='./demo/w03_tictactoe_43/tictactoe_43.html' width="100%" height="100%" />`;
      break;
    case 'w03_p1_43':
      p.innerHTML = `<iframe src='./demo/w03_basics_43/p1_43/p1_43.html' width="100%" height="100%" />`;
      break;
    case 'w04_p2_43':
      p.innerHTML = `<iframe src='./demo/w04_basics_43/p2_43/p2_43.html' width="100%" height="100%" />`;
      break;
  }
}
