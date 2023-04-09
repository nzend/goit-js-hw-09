// Описаний в документації
import flatpickr from 'flatpickr';
// Додатковий імпорт стилів
import 'flatpickr/dist/flatpickr.min.css';

import Notiflix from 'notiflix';

const refs = {
  input: document.querySelector('#datetime-picker'),
  startButton: document.querySelector('button[data-start]'),
  days: document.querySelector('span[data-days]'),
  hours: document.querySelector('span[data-hours]'),
  minutes: document.querySelector('span[data-minutes]'),
  seconds: document.querySelector('span[data-seconds]'),
};

refs.startButton.addEventListener('click', () => {
  timer.start();
});

class Timer {
  constructor({ onTick }) {
    this.DateintervalI = null;
    this.onTick = onTick;
  }
  start() {
    refs.startButton.disabled = true;
    if (this.criticalTime <= 0) {
      return;
    }
    const startTime = Date.now();
    this.isActive = true;

    this.intervalId = setInterval(() => {
      const currentTime = Date.now();
      const selectedTime = fp.selectedDates[0].getTime();
      const deltaTime = selectedTime - currentTime;

      const time = convertMs(deltaTime);

      if (Math.floor(deltaTime / 1000) === 0) {
        clearInterval(this.intervalId);
        Notiflix.Notify.success('Timer is over');
      }

      this.onTick(time);
    }, 1000);
  }
}

const timer = new Timer({
  onTick: updateTimerFace,
});

function updateTimerFace({ days, hours, minutes, seconds }) {
  refs.days.textContent = `${days}`;
  refs.hours.textContent = `${hours}`;
  refs.minutes.textContent = `${minutes}`;
  refs.seconds.textContent = `${seconds}`;
}
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,

  buttonStatus: (refs.startButton.disabled = true),
  onClose(selectedDates) {
    if (selectedDates[0].getTime() <= Date.now()) {
      Notiflix.Notify.failure('Please choose a date in the future');
      return;
    }

    refs.startButton.disabled = false;
  },
};

flatpickr(refs.input, options);

const fp = flatpickr(refs.input, options);

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = addLeadingZero(Math.floor(ms / day));
  // Remaining hours
  const hours = addLeadingZero(Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds = addLeadingZero(
    Math.floor((((ms % day) % hour) % minute) / second)
  );

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}
