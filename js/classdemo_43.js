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

function showExam(item) {
  switch (item) {
    case 'm1_43':
      p.innerHTML = `<iframe src='./exams/mid1_43/m1_43/src/p1_43.html' width="100%" height="100%" />`;
      break;
    case 'm2_43':
      p.innerHTML = `<iframe src='./exams/mid1_43/m2_43/p2_43.html' width="100%" height="100%" />`;
      break;
    case 'm3_43':
      p.innerHTML = `<iframe src='./exams/mid1_43/m3_43/p3_43.html' width="100%" height="100%" />`;
      break;
    case 'p1_43':
      p.innerHTML = `<iframe src='./exams/quiz1_43/p1_43/src/p1_43.html' width="100%" height="100%" />`;
      break;
    case 'p2_43':
      p.innerHTML = `<iframe src='./exams/quiz1_43/p2_43/src/p2_43.html' width="100%" height="100%" />`;
      break;
    case 'p3_43':
      p.innerHTML = `<iframe src='./exams/quiz1_43/p3_43/p3_43.html' width="100%" height="100%" />`;
      break;
    case 'p4_43':
      p.innerHTML = `<iframe src='./exams/quiz1_43/p4_43/p4_43.html' width="100%" height="100%" />`;
      break;
  }
}
