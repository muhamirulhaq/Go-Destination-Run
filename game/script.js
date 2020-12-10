const enemies = document.querySelector(".enemies");
const interval = setInterval(move, 5);

const w = window.innerWidth;
let screenWidth = w > 520 ? 500 : 95 / 100 * (w - 14);

const characterPercentageWidth = 15 * 100 / screenWidth;
const enemiesPercentageWidth = 10 * 100 / screenWidth;

let i = 100;

function move() {
    if(!isCounting) {
        lose();
        if(i <= 0) i = 100;
        enemies.style.left = "calc(" + i + "% - 0.75em)";
        i -= score >= 100 ? score >= 200 ? score >= 300 ? score >= 400 ? score >= 500 ? score >= 600 ? score >= 700 ? score >= 800 ? score >= 900 ? score >= 1000 ? 0.2 : 0.19 : 0.18 : 0.17 : 0.16 : 0.15 : 0.14 : 0.13 : 0.12 : 0.11 : 0.1;
    }
}

const character = document.querySelector(".character");
const klikContoh = document.querySelector(".box");
const miliseconds = 5;

let j = 2;
let topLine = 6;

let isOnTop = false;
let isOnTheGround = true;

const charGif = function() {
    const intervalGif = setInterval(function() {
        character.style.backgroundImage = isCounting ? "url('characterJump.png')" : "url('character.gif')";
        if(!isCounting) clearInterval(intervalGif);
    }, 100);
}();

character.style.backgroundSize = "15px";

function jump() {
    if(isOnTheGround) jumpInterval();
}

function jumpInterval() {
    isOnTheGround = j < 2 ? true : false;
    character.style.backgroundImage = !isOnTheGround ? "url('characterJump.png')" : "url('character.gif')";

    character.style.bottom = j + "em";
    j += isOnTop ? j >= topLine ? -0.004 : -0.1 : 0.1;

    if(j >= topLine) isOnTop = true;
    else if(j < 2) isOnTop = false;

    if(!isOnTheGround) setTimeout(jumpInterval, miliseconds);
}

let value;
let skill;

function lose() {
    if((isOnTheGround && i <= enemiesPercentageWidth + characterPercentageWidth + 3.5 && i > 3) || (!isOnTheGround && i <= enemiesPercentageWidth + characterPercentageWidth + 3.5 && i > 3 && j <= 2.4)) {
        skill = totalScore >= 100 ? totalScore >= 200 ? totalScore >= 300 ? totalScore >= 400 ? totalScore >= 500 ? totalScore >= 600 ? totalScore >= 700 ? "Glorious Mythic" : "Mythic" : "Legend" : "Epic" : "Grandmaster" : "Master" : "Warrior" : "Newbie";
        alert("HASIL :" + "\n\nSkor : " + score + "\nPoin : " + point + "\nTotal Skor : " + totalScore + "\n\nSkill : " + skill);
        i = 100;
        score = 0;
        point = 0;
        pointBox.innerHTML = point;
        window.location = "game.html";
    }
}

const question = [
    "Pantai yang dijuluki sebagai Hawaii-nya Sabang ...",
    "Keindahan Danau ... dengan Pulau Samosir di tengahnya",
    "Lembah curam di kota Bukittinggi ...",
    "Sungai ... terkenal dengan ombak Bono-nya",
    "Kepulauan ... berada di provinsi Kepulauan Riau",
    "Kompleks candi Hindu-Budha di tanah Jambi adalah ... ",
    "Benteng ... berada di Bengkulu",
    "Museum ... berada di Palembang",
    "Pantai ... terletak di Kepulauan Bangka Belitung",
    "Taman Nasional ... tempat konservasi dan pelatihan gajah",
    "Pulau ... terdapat di selat Panaitan Kabupaten Pandeglang Banten",
    "Wilayah Kepulauan ... meliputi gugusan kepulauan di Teluk Jakarta",
    "Danau ... salah satu tempat wisata di Jawa Barat",
    "Pantai paling terkenal yang ada di Sukabumi ...",
    "Kawasan Kota ... Semarang dijuluki dengan The Little Netherlands.",
    "Kepulauan ... dijuluki sebagai Pulau Karibia-nya Jawa",
    "Taman Nasional ... dijuluki sebagai The Kingdom of Butterfly",
    "Pantai ... salah satu objek wisata di Yogyakarta",
    "Objek wisata spot foto di Yogyakarta ...",
    "Air Terjun ... salah satu wisata alam di Kulonprogo",
    "Taman Nasional ... daerah vulkanik terbesar di provinsi Jawa Timur",
    "Kawah ... merupakan danau belerang terbesar di Pulau Jawa",
    "Tugu ... dibangun sebagai penanda garis lintang nol derajat bumi",
    "Pulau ... menduduki peringkat ketiga tempat menyelam bertaraf internasional",
    "Jembatan ... melintang di atas sungai Barito, Kalimantan Selatan",
    "Salah satu objek wisata di Kalimantan Utara adalah pantai ...",
    "Tempat dengan kemewahan surgawi di tenggara pulau Bali ...",
    "Salah satu pura yang ada di Bandung ...",
    "Salah satu dari tiga pulau kecil Kepulauan Gili ...",
    "Gunung ... terletak di Pulau Lombok, Nusa Tenggara Barat",
    "Tempat wisata air terjun ... berada di Sulawesi Selatan",
    "Pantai ... primadona bagi yang berkunjung ke Kota Makassar",
    "Tempat wisata ... dijuluki Kepulauan Tukang Besi di Sulawesi Tenggara",
    "Kepulauan ... terkenal kaya akan terumbu karang di Sulawesi Tengah",
    "Salah satu objek wisata pantai di Sulawesi Barat ...",
    "Kawasan konservasi terumbu karang di Sulawesi Utara ...",
    "Salah satu pantai dengan pemandangan eksotis di Maluku ...",
    "Pulau ... merupakan pulau terbesar di Kepulauan Maluku",
    "... berupa rangkaian 4 gugusan pulau di Papua Barat",
    "Danau ... terbentang antara Kota Jayapura dan Kabupaten Jayapura"
];

const answer = [
    ["A. Pantai Sumurtiga", "B. Pantai Parai Tenggiri"],
    ["A. Danau Toba", "B. Danau Sentani"],
    ["A. Ngarai Sianok", "B. Kawah Putih"],
    ["A. Sungai Tallo", "B. Sungai Kampar"],
    ["A. Kepulauan Seribu", "B. Anambas"],
    ["A. Candi Prambanan", "B. Candi Muaro Jambi"],
    ["A. Fort Marlborough", "B. Somba opu"],
    ["A. Museum Sultan Mahmud Badaruddin", "B. Monumen Mandala"],
    ["A. Siung", "B. Parai Tenggiri"],
    ["A. Taman Nasional Bromo Tengger Semeru", "B. Taman Nasional Way Kambas"],
    ["A. Peucang", "B. Siung"],
    ["A. Seribu", "B. Karimun Jawa"],
    ["A. Kawah Putih", "B. Kawah Ijen"],
    ["A. Pelabuhan Ratu", "B. Pelabuhan Sabang"],
    ["A. Kota Lama", "B. Kota Tua"],
    ["A. Karimun Jawa", "B. Raja Ampat"],
    ["A. Bantimurung", "B. Air Terjun Sedudo"],
    ["A. Siung", "B. Anyer"],
    ["A. Canting Mas Puncak Dipowono", "B. Taman Wisata Puncak Bila"],
    ["A. Air Terjun Kedung Pedut", "B. Air Terjun Parangloe"],
    ["A. Taman Nasional Bromo Tengger Semeru", "B. Taman Nasional Gunung Leuser"],
    ["A. Kawah Ijen", "B. Kawah Putih"],
    ["A. Tugu Khatulistiwa", "B. Monumen Mandala"],
    ["A. Pulau Derawan", "B. Pulau Selayar"],
    ["A. Barito", "B. Canopy Trail Ciwalen"],
    ["A. Pantai Ora", "B. Pantai Batu Lamampu"],
    ["A. Bunaken", "B. Nusa Dua"],
    ["A. Pura Prajapati", "B. Pura Luhur Uluwatu"],
    ["A. Anambas", "B. Gili Trawangan"],
    ["A. Gunung Buntu Karua", "B. Gunung Rinjani"],
    ["A. Air Terjun Berambai", "B. Air Terjun Parangloe"],
    ["A. Pantai Lamaru", "B. Pantai Losari"],
    ["A. Samalona", "B. Wakatobi"],
    ["A. Taman Nasional Kepulauan Seribu", "B. Taman Nasional Kepualauan Togean"],
    ["A. Pantai Pasir Timbul", "B. Pantai Dato Majene"],
    ["A. Pulau Pramuka", "B. Bunaken"],
    ["A. Pantai Kuri", "B. Pantai Ora"],
    ["A. Pulau Barrang Lompo", "B. Halmahera"],
    ["A. Kepulauan Togean", "B. Raja Ampat"],
    ["A. Danau Labuan Cermin", "B. Danau Sentani"]
];

let questionRandom = [
    [0, 11, 23, 3, 24, 5, 26, 17, 28, 19, 20, 12, 15, 18, 22, 21, 36, 7, 30, 35, 29, 38, 10, 37, 2, 9, 1, 25, 32, 14, 31, 4, 33, 13, 6, 8, 34, 39, 16, 27],
    [1, 12, 36, 4, 29, 19, 13, 8, 7, 5, 26, 38, 37, 16, 25, 11, 2, 24, 27, 17, 23, 9, 10, 30, 15, 22, 34, 6, 28, 18, 21, 31, 33, 3, 14, 20, 39, 35, 32, 0],
    [23, 1, 15, 8, 16, 0, 3, 9, 37, 4, 25, 5, 24, 38, 14, 7, 26, 6, 3, 36, 13, 27, 22, 28, 35, 17, 21, 29, 12, 30, 20, 34, 10, 39, 18, 31, 33, 19, 32, 11],
    [32, 2, 7, 10, 19, 39, 35, 4, 38, 6, 23, 16, 33, 31, 12, 8, 22, 17, 24, 13, 3, 30, 21, 15, 37, 25, 18, 29, 11, 36, 34, 28, 5, 26, 9, 14, 1, 0, 27, 20],
    [28, 6, 22, 9, 5, 11, 3, 8, 7, 20, 1, 24, 10, 18, 23, 38, 0, 36, 37, 15, 35, 39, 17, 34, 2, 33, 13, 32, 21, 31, 16, 25, 26, 14, 30, 27, 19, 29, 4, 12],
    [5, 24, 2, 16, 39, 32, 6, 7, 29, 8, 22, 1, 21, 38, 37, 20, 36, 35, 19, 34, 23, 11, 18, 33, 17, 4, 3, 12, 31, 0, 30, 25, 13, 9, 10, 14, 28, 27, 15, 26],
    [17, 8, 19, 25, 34, 1, 0, 31, 3, 27, 12, 10, 11, 39, 14, 38, 13, 37, 16, 36, 15, 35, 18, 4, 6, 33, 20, 32, 7, 2, 22, 30, 21, 29, 24, 9, 23, 28, 26, 5],
    [7, 21, 18, 5, 27, 4, 6, 19, 0, 1, 15, 30, 11, 31, 14, 32, 16, 33, 12, 34, 17, 35, 13, 36, 8, 37, 38, 2, 39, 20, 3, 9, 10, 22, 28, 23, 29, 24, 25, 26],
    [28, 36, 1, 25, 3, 35, 7, 14, 26, 15, 0, 27, 5, 29, 24, 23, 8, 22, 31, 21, 30, 20, 32, 19, 33, 39, 18, 10, 17, 34, 16, 4, 9, 6, 2, 13, 38, 12, 37, 11],
    [19, 11, 7, 6, 12, 4, 3, 13, 1, 0, 29, 28, 14, 27, 16, 26, 2, 25, 30, 24, 15, 23, 5, 22, 21, 17, 31, 32, 38, 18, 33, 8, 39, 34, 10, 35, 9, 37, 36, 20],
];
let irandom = (Math.floor(Math.random() * 100)) % questionRandom.length;

const answerBox1 = document.querySelector(".answerBox1");
const answerBox2 = document.querySelector(".answerBox2");

const questionBox = document.querySelector(".questionBox");
const body = document.querySelector("body");

let x = 0;
function qnaFirstLoad() {
    questionBox.innerHTML = question[questionRandom[irandom][x]];
    answerBox1.innerHTML = answer[questionRandom[irandom][x]][0];
    answerBox2.innerHTML = answer[questionRandom[irandom][x]][1];
}

body.onload = qnaFirstLoad;

const pointBox = document.querySelector(".point");
let point = 0;
function QnA1() {
    if(questionBox.innerHTML === question[0] || questionBox.innerHTML === question[1] || questionBox.innerHTML === question[2] || questionBox.innerHTML === question[6] || questionBox.innerHTML === question[7] || questionBox.innerHTML === question[10] || questionBox.innerHTML === question[11] || questionBox.innerHTML === question[12] || questionBox.innerHTML === question[13] || questionBox.innerHTML === question[14] || questionBox.innerHTML === question[15] || questionBox.innerHTML === question[16] || questionBox.innerHTML === question[17] || questionBox.innerHTML === question[18] || questionBox.innerHTML === question[19] || questionBox.innerHTML === question[20] || questionBox.innerHTML === question[21] || questionBox.innerHTML === question[22] || questionBox.innerHTML === question[23] || questionBox.innerHTML === question[24]) {
        greenPulse(answerBox1);
        jump();
        point++;
    } else {
        redPulse(answerBox1);
        point--;
    }

    pointBox.innerHTML = point;

    x = (x + 1) % question.length;
    questionBox.innerHTML = question[questionRandom[irandom][x]];
    answerBox1.innerHTML = answer[questionRandom[irandom][x]][0];
    answerBox2.innerHTML = answer[questionRandom[irandom][x]][1];
}

function QnA2() {
    if(questionBox.innerHTML === question[3] || questionBox.innerHTML === question[4] || questionBox.innerHTML === question[5] || questionBox.innerHTML === question[8] || questionBox.innerHTML === question[9] || questionBox.innerHTML === question[26] || questionBox.innerHTML === question[27] || questionBox.innerHTML === question[28] || questionBox.innerHTML === question[29] || questionBox.innerHTML === question[30] || questionBox.innerHTML === question[31] || questionBox.innerHTML === question[32] || questionBox.innerHTML === question[33] || questionBox.innerHTML === question[34] || questionBox.innerHTML === question[35] || questionBox.innerHTML === question[36] || questionBox.innerHTML === question[37] || questionBox.innerHTML === question[38] || questionBox.innerHTML === question[39] || questionBox.innerHTML === question[25]) {
        greenPulse(answerBox2);
        jump();
        point++;
    } else {
        redPulse(answerBox2);
        point--;
    }

    pointBox.innerHTML = point;

    x = (x + 1) % question.length;
    questionBox.innerHTML = question[questionRandom[irandom][x]];
    answerBox1.innerHTML = answer[questionRandom[irandom][x]][0];
    answerBox2.innerHTML = answer[questionRandom[irandom][x]][1];
}

answerBox1.onmousedown = QnA1;
answerBox2.onmousedown = QnA2;

const scoreBox = document.querySelector(".score");
let score = 0;
let totalScore;

function newScore() {
    if(!isCounting) {
        score++;
        totalScore = score + point;
        scoreBox.innerHTML = score < 10 ? "000000" + score : score < 100 ? "00000" + score : score < 1000 ? "0000" + score : "000" + score;
        if(score === 9999999) {
            alert("Congratulation!\n\nMax Score!");
            window.location = "game.html";
        }
    }
}

setInterval(newScore, 150);

// ANIMATION FOR FALSE AND RIGHT ANSWER 

const dataColor = ["red", " rgb(53, 53, 53)"];
const data2Color = ["black", "white"];
let iClr = 0;

function redPulse(x) {
    const pulseInterval = setInterval(function() {
        x.style.backgroundColor = dataColor[iClr % dataColor.length];
        x.style.color = data2Color[iClr % data2Color.length];
        iClr++;
        if(iClr === 4) {
            x.style.backgroundColor = "rgb(53, 53, 53)";
            x.style.color = "white";
            iClr = 0;
            clearInterval(pulseInterval);
        }
    }, 100);
}

const dataColor2 = ["lawngreen", "rgb(53, 53, 53)"];
let iClr2 = 0;

function greenPulse(y) {
    const pulseInterval2 = setInterval(function() {
        y.style.backgroundColor = dataColor2[iClr2 % dataColor2.length];
        y.style.color = data2Color[iClr2 % data2Color.length];
        iClr2++;
        if(iClr2 === 4) {
            y.style.backgroundColor = "rgb(53, 53, 53)";
            y.style.color = "white";
            iClr2 = 0;
            clearInterval(pulseInterval2);
        }
    }, 100);
}

const sun = document.querySelector(".sun");
const sunMove = function() {
    let i = 2;
    let j = 3;
    setInterval(function() {
        sun.style.right = i + "%";
        sun.style.top = j + "%";
        i += 0.001;
        j += 0.0001;
    }, 50);
}();

const blackBox = document.querySelector(".blackBox");

const counterBox = document.querySelector(".counter");
let count = 3;
isCounting = true;

const counter = function() {
    const counterInterval = setInterval(function() {
        if(count === 0) {
            clearInterval(counterInterval);
            isCounting = false;
            blackBox.style.display = "none";
        }
        counterBox.innerHTML = count === 0 ? "" : count;
        count--;
    }, 1000)
}();

const fullScreen = document.querySelector(".fullScreen");
function getFullScreen() {
    if(!document.documentElement.requestFullscreen()) document.documentElement.requestFullscreen();
    else document.exitFullscreen();
}

fullScreen.onclick = getFullScreen;

const cloud = document.querySelector(".cloud");
let iCloud = 100;
const cloudPercentageWidth = cloud.offsetWidth * 100 / screenWidth;


setInterval(function() {
    if(!isCounting) {
        cloud.style.left = iCloud + "%";
        iCloud -= 0.1;
        if(iCloud <= 0 - cloudPercentageWidth) iCloud = 100;    
    }
},29);


const cloud2 = document.querySelector(".cloud2");
let iCloud2 = 100;
const cloud2PercentageWidth = cloud2.offsetWidth * 100 / screenWidth;

setTimeout(function() {
    setInterval(function() {
        cloud2.style.left = iCloud2 + "%";
        iCloud2 -= 0.1;
        if(iCloud2 <= 0 - cloud2PercentageWidth) iCloud2 = 100;    
    },25);
},20000);

const cloud3 = document.querySelector(".cloud3");
let iCloud3 = 100;
const cloud3PercentageWidth = cloud3.offsetWidth * 100 / screenWidth;

setTimeout(function() {
    setInterval(function() {
        cloud3.style.left = iCloud3 + "%";
        iCloud3 -= 0.1;
        if(iCloud3 <= 0 - cloud3PercentageWidth) iCloud3 = 100;    
    },30);
},30000);