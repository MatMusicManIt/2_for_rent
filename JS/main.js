const slideList = [{
  img: '/IMG/baner__img.jpg'
},

{
  img: '/IMG/baner_2.jpg'
},

{
  img: '/IMG/baner_3.jpg'
}]



const image = document.querySelector('img.slider')
// interfejs 
const time = 4500;
let active = 0;


const changeSlide = () => {
  active++;
  if (active === slideList.length) {
    active = 0
  }
  image.src = slideList[active].img;

}
setInterval(changeSlide, time)


// implementacja



