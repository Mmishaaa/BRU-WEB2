class MainPage {
  start() {
    document.querySelector('.burger').addEventListener('click', this.toggleBurger);
    document.querySelector('.burger_menu').addEventListener('click', this.hideBurger);

  }
  hideBurger(event) {
      if (event.target.closest('li')) {
          document.querySelector('.burger_menu').classList.remove('opened');
          document.querySelector('.burger').classList.remove('burgeroff');
          document.body.classList.remove('noscroll');
      }
  }
  toggleBurger(event) {
      event.target.classList.toggle('burgeroff');
      document.querySelector('.burger_menu').classList.toggle('opened');
      document.body.classList.toggle('noscroll');
  }
}

const mainPage = new MainPage();
mainPage.start();

let options = {
  root: null,
  rootMargin: "5px",
  threshold: 0.5
}

let cb = (entries, observer) => {
  entries.forEach((entry) => {
    if(entry.isIntersecting) {
      console.log("find", entry)
      entry.target.classList.add("active");
      observer.unobserve(entry.target);
    }
  })
}

let observer = new IntersectionObserver(cb, options)
let targets = document.querySelectorAll(".anim")
targets.forEach((target) => {
  observer.observe(target);
});


var images = [
  "./assets//png/image-1.png",
  "./assets//png/image-2.png",
  "./assets//png/image-3.png",
  "./assets//png/image-4.png",
  "./assets//png/image-5.png",
  "./assets//png/image-6.png",
  "./assets//png/image-7.png",
  "./assets//png/image-8.png",
];

var audio = document.getElementById("audio");
var playPauseButton = document.getElementById("play-pause-button");
var imageElement = document.getElementById("image");

var isPlaying = false;

function togglePlayPause() {
  if (isPlaying) {
    audio.pause();
    isPlaying = false;
    playPauseButton.innerHTML = "Play";
  } else {
    audio.play();
    isPlaying = true;
    playPauseButton.innerHTML = "Pause";
  }
  
  changeImage();
}

function changeImage() {
  var randomIndex = Math.floor(Math.random() * images.length);
  var randomImage = images[randomIndex];
  imageElement.src = randomImage;
}
