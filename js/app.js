const navbar = document.getElementById('navbar');
let scrolled = false;

window.onscroll = function () {
  if (window.pageYOffset > 100) {
    navbar.classList.remove('top');
    // if(!scrolled) {
    //   navbar.style.transform = 'translateY(-70px)';
    // }
    // setTimeout(function() {
    //   navbar.style.transform = 'translateY(0)';
    //   scrolled = true;
    // }, 200)
  } else {
    navbar.classList.add('top');
    scrolled = false;
  }
};
var slideIndex=0;
var imageCycle=[
  "img/homepageImages/IMG_3290.JPG",
  "img/homepageImages/IMG_6130.JPG",
  "img/homepageImages/IMG_5951.JPG"
];
 function DisplaySlide(index){
  $(".grid-img").attr("src",imageCycle[index]);
  console.log("here");
 }

 DisplaySlide(slideIndex);

 function SlideChange(slidenumber){
  if(slideIndex==0&&slidenumber==-1){
    slideIndex=2;
  }
  else if(slideIndex==2&&slidenumber==1){
    slideIndex=0;
  }
  else{
    if(slidenumber==1){
      slideIndex++;
    }
    else{
      slideIndex--;
    }
  }
  DisplaySlide(slideIndex);
 }

function hi(){
  alert("hi");
}
$(".back").click(function(){
  SlideChange(-1);
});
$(".next").click(function(){
  SlideChange(1);
});