import '../css/common.css';


const horses = ['Mango', 'Sars', 'Alex', 'Iren', 'Favorite'];

let raceCounter = 0;

const refs = {
  startBtn: document.querySelector('.js-start-race'),
  winnerFeild: document.querySelector('.js-winner'),
  progressFeild: document.querySelector('.js-progress'),
  tableBody: document.querySelector('.js-results-table > tbody'),
};

refs.startBtn.addEventListener('click', onStart);

function onStart() {
    raceCounter += 1;
    const promises = horses.map(horse => run(horse));
    updateWinnerField('');
    updateProgressField('Почався заїзд');
    determinatedWinner(promises);
    waitAll(promises);

}

function determinatedWinner(horsesP) {
  Promise.race(horsesP).then(({ horse, time }) => {
    updateWinnerField(`Переміг ${horse} , фінішував за ${time}`);
    updateResultsTable({ horse, time });
  });
}

function waitAll(horsesP) {
  Promise.all(horsesP).then(x => {
    updateProgressField('Заїзд закінчився');
  });
}
function updateWinnerField(message) {
  refs.winnerFeild.textContent = message;
}
function updateProgressField(message) {
  refs.progressFeild.textContent = message;
}

function updateResultsTable({ horse, time }) {
  const tr = `<tr>
                <td>${raceCounter}</td>
                <td>${horse}</td>
                <td>${time}</td>
            </tr>`;
  refs.tableBody.insertAdjacentHTML('beforeend', tr);
}

// run('name').then(x => {
//   console.log(x);
// });

// console.log(promises);

function run(horse) {
  return new Promise(resolve => {
    const time = getRandomTime(2000, 3500);
    setTimeout(() => {
      resolve({ horse, time });
    }, time);
  });
}

//   .catch(e => {
//     console.log(e);
//   });

function getRandomTime(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
