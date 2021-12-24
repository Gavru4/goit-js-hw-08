// привязываю библиотеку проигрователя к файлу JS
import Player from '@vimeo/player';

// вызов метод тротл  для контроля количества раз вызова функци
import throttle from 'lodash.throttle'

// Инициализирую плеер в файле скрипта
const iframe = document.querySelector('iframe');
    const player = new Vimeo.Player(iframe);

    player.on('play', function() {
        console.log('played the video!');
    });

    player.getVideoTitle().then(function(title) {
        console.log('title:', title);
    });

// отслеживаю событие обновления времени воспроизвидения (взято из документации)
const onPlay = function (data) {
    
// Сохраняю время воспроизведения в локальное хранилище и преобразовываю в JSON.
    localStorage.setItem("videoplayer-current-time", JSON.stringify(data.seconds));
  
};
// timeupdate.. время воспроизведения.
player.on('timeupdate', onPlay);

// возвращаю из хранилища ключ со значением
const playTime = localStorage.getItem("videoplayer-current-time");



// метод setCurrentTime() для того чтобы возобновить воспроизведение с сохраненной позиции(документация)
player.setCurrentTime(playTime).then(function(seconds) {
    // seconds = the actual time that the player seeked to
}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
           
            break;

        default:
          
            break;
    }
});