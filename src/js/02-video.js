
// 1.Ознакомься с документацией библиотеки Vimeo плеера.

// 2.Добавь библиотеку как зависимость проекта через npm.

// 3.Инициализируй плеер в файле скрипта как это описано в секции pre-existing player, но учти что у тебя плеер добавлен как npm пакет, а не через CDN.

// 4.Разбери документацию метода on() и начни отслеживать событие timeupdate - обновление времени воспроизведения.

// 5.Сохраняй время воспроизведения в локальное хранилище. Пусть ключом для хранилища будет строка "videoplayer-current-time".

// 6.При перезагрузке страницы воспользуйся методом setCurrentTime() для того чтобы возобновить воспроизведение с сохраненной позиции.

// 7.Добавь в проект бибилотеку lodash.throttle и сделай так, чтобы время воспроизведения обновлялось в хранилище не чаще чем раз в секунду.


import Player from "@vimeo/player";
import throttle from "lodash.throttle";


const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const TIME_KEY = `videoplayer-current-time`;
let timeSeconds;

function newThrottleTime(e) {
    const changingTimeInVideo = JSON.stringify(e.seconds);
    localStorage.setItem(TIME_KEY, changingTimeInVideo);
} 

function fixedTime() {
    JSON.parse(localStorage.getItem(TIME_KEY))
    if (JSON.parse(localStorage.getItem(TIME_KEY)) !== 0) {
        return JSON.parse(localStorage.setItem(TIME_KEY, timeSeconds))
    }
    else {
    timeSeconds = 0;
    }
}
// const currentTime = JSON.parse(localStorage.getItem(TIME_KEY))

// function fixedTime() {
//     if (currentTime === null) {
//         localStorage.setItem(TIME_KEY, 0)
//     }
//     player.setCurrentTime(localStorage.getItem(TIME_KEY))
// }

fixedTime();

player.on('timeupdate', throttle(newThrottleTime, 1000));


function resumePlayback() {
    if (JSON.parse(localStorage.getItem(TIME_KEY)) === null) {
        return;
    }
}

resumePlayback()
// player.setCurrentTime(localStorage.getItem(TIME_KEY));
