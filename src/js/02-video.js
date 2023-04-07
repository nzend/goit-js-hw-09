import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const currentTime = 'videoplayer-current-time';

player.on('timeupdate', throttle(onPlay, 1000));

function onPlay(evt) {
  localStorage.setItem(currentTime, evt.seconds);
}

setViewPoint();

function setViewPoint() {
  player.setCurrentTime(localStorage.getItem(currentTime));
}
