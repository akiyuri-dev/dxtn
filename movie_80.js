//json繝輔ぃ繧､繝ｫ蜿門ｾ�

const movie1 = '6332554441112';
const movie2 = '6332555620112';
const movie3 = '6332555915112';
const movie4 = '6332554343112';
const movie5 = '6333238030112';
const movie6 = '6332556298112';
const movie7 = '6332555318112';
const movie8 = '6332556387112';
const movie9 = '6332556299112';
const movie10 = '6332718055112';

let array = [movie1,movie2,movie3,movie4,
    movie5,movie6,movie7,movie8,movie9,movie10
];

let max = array.length;
let num = Math.floor( Math.random() * max ) ;
console.log("num:",num);
let movie = array[num];
//console.log(movie);

const movieInfo = document.querySelector('.movieInfo');
//console.log(movieInfo);

//莉･荳句､画峩縺吶ｋ縺薙→
const accountId = '6160987583001';
const playerId = 'GZGehFLzm';

movieInfo.innerHTML = `
    <video-js playsinline
    id="6276099295001"
    data-account="${accountId}"
    data-player="${playerId}"
    data-embed="default"
    controls=""
    data-video-id="${movie}"
    data-application-id=""
    class="vjs-fluid video-js audioOnly"
    ></video-js>    `