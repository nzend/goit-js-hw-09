const refs = {
  bodyBackground: document.querySelector('body'),
  startButton: document.querySelector('button[data-start]'),
  stopButton: document.querySelector('button[data-stop]'),
};

let timeoutId = null;
refs.stopButton.disabled = true;

refs.startButton.addEventListener('click', onStartClick);
refs.stopButton.addEventListener('click', onStopClick);

function onStartClick() {
  refs.startButton.disabled = true;
  refs.stopButton.disabled = false;

  timeoutId = setInterval(() => {
    refs.bodyBackground.style.backgroundColor = `${getRandomHexColor()}`;
  }, 1000);
}

function onStopClick() {
  refs.startButton.disabled = false;
  refs.stopButton.disabled = true;
  clearInterval(timeoutId);
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
