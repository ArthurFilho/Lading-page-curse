var menu = document.querySelector('nav ul');
var menuBar = document.querySelector('nav .menu-icon');
var iconMenu = document.querySelector('nav .menu-icon img');

menuBar.addEventListener('click',function(){

    if (iconMenu.getAttribute("src") == 'image/icon-menu.svg') {
        iconMenu.setAttribute("src","image/icon-close-menu.svg");
    }else{
        iconMenu.setAttribute("src","image/icon-menu.svg");
    }

   menu.classList.toggle('active');
});




// program to get a random item from an array

function getRandomItem(arr) {

    // get random index value
    const randomIndex = Math.floor(Math.random() * arr.length);
  
    // get random item
    const item = arr[randomIndex];
  
    return item;
  }
  //Text
  titleAndTextArr = [
  {textA:'The unhappiest people are those who care the most about what other people think.'},
  {textA: 'Dont dwell on the past, and dont daydream about the future, but concentrate on showing up fully in the present moment.' },
  {textA: 'Life is not so much what you accomplish as what you overcome.' }, 
  {textA: 'Luck happens when hard work and timing and talent intersect.' },
  {textA: 'You never know what the future will bring, so always make the best use of the present.' }, 
  {textA: 'The unhappiest people are those who care the most about what other people think.'},
  {textA: 'Learn how to listen. You cant learn anything when youre talking.' }
];
  
  
   setInterval(
    function generatingAdvice(){

    let text = document.getElementsByClassName("text");
  
    let resultTitleandtext = getRandomItem(titleAndTextArr) 
  
  text[0].innerHTML = resultTitleandtext.textA;
   }, 5000);
  
