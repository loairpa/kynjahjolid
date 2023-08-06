import {Wheel} from './dist/spin-wheel-esm.js';

window.onload = () => {

  const container = document.querySelector('.wheel-wrapper');
  const answer = document.querySelector('.answer', '.answer');

  const langurTexti = [
    "Eikynja",
    "Eins og jakkaföt með sokkaböndum",
    "Tvíkynja",
    "Hún eins og bátur getur verið hún",
    "Eins og lyktin af nýþvegnum þvotti",
    "Flæðigerva",
    "Eins og tónlist, flæðandi og breytilegt",
    "Karl/kona/kvár",
    "Rauður skítugur hælaskór með gulum blómum",
    "Kynsegin",
    "Eins og dökkblár með smá hint af fjólubláum",
    "Virk í athugasemdum"
]
const props = {
  items: [
    {
      label:"",
      image:'./images/kynin_12/eikynja.svg',
      imageScale: 0.25,
      imageRotation: 90,
      imageRadius:0.6,
    } ,
    {
      label:"",
      image:'./images/kynin_12/jakkafot.svg',
      imageScale: 0.55,
      imageRotation: 90,
      imageRadius:0.6,
    },
    {
      label:"",
      image:'./images/kynin_12/tvikynja.svg',
      imageScale: 0.3,
      imageRotation: 90,
      imageRadius:0.6,
    },
    {
      label:"",
      image:'./images/kynin_12/batur.svg',
      imageScale: 0.55,
      imageRotation: 90,
      imageRadius:0.6,
    },
    {
      label:"",
      image:'./images/kynin_12/nythveginn.svg',
      imageScale: 0.55,
      imageRotation: 90,
      imageRadius:0.6,
    },
    {
      label:"",
      image:'./images/kynin_12/flaedigerva.svg',
      imageScale: 0.35,
      imageRotation: 90,
      imageRadius:0.6,
    },
    {
        label:"",
        image:'./images/kynin_12/tonlist.svg',
        imageScale: 0.55,
        imageRotation: 90,
        imageRadius:0.6,
      },
      {
        label:"",
        image:'./images/kynin_12/karl_kona_kvar.svg',
        imageScale: 0.4,
        imageRotation: 90,
        imageRadius:0.6,
      },
      {
        label:"",
        image:'./images/kynin_12/raudur_skor.svg',
        imageScale: 0.55,
        imageRotation: 90,
        imageRadius:0.6,
      },
      {
        label:"",
        image:'./images/kynin_12/kynsegin.svg',
        imageScale: 0.3,
        imageRotation: 90,
        imageRadius:0.6,
      },
      {
        label:"",
        image:'./images/kynin_12/dokkblar.svg',
        imageScale: 0.55,
        imageRotation: 90,
        imageRadius:0.6,
      },
      {
          label:"",
          image:'./images/kynin_12/virk_athugasemdum.svg',
          imageScale: 0.4,
          imageRotation: 90,
          imageRadius:0.6,
          backgroundColor:  'black', 
          labelColor: 'white'
      },
    ],

    itemLabelColors:['#000'],
    itemBackgroundColors: ['#5bcefa', '#f5a9b8', '#FFf'], 
    itemLabelFont: 'Musikal',
    image: './images/example-0-image.svg',
    radius:1, 
    itemLabelRadius: 0.9,
    itemLabelBaselineOffset:0,
    itemLabelFontSizeMax:100,
    itemLabelRotation: 180,
    itemLabelAlign: 'left',
    pointerAngle:  0,
    borderColor:  '#f9f5e9',
    borderWidth: 5,
    onRest: function(e) { answer.innerHTML = langurTexti[e.currentIndex];},
    onSpin: function(e) {answer.innerHTML = ""},
    onCurrentIndexChange: function(e) {
      play();
      answer.innerHTML = langurTexti[e.currentIndex]; },
  };

  window.wheel = new Wheel(container, props);
  
  window.addEventListener('keyup', (e) => {
    
    if( e.target && e.code == 'Space' )
    {
      const winningItemIndex = Math.round(Math.random()*(props.items.length - 1));
      const easing = null;
      const easingFunction = null;
      const duration = 2600;
      const spinDirection = 1;
      const revolutions = 1;
      wheel.spinToItem(winningItemIndex, duration, true, revolutions, spinDirection, easingFunction);

    }

    if( e.target && e.code=='Enter')
    {
      const winningItemIndex = 11;
      const easing = null;
      const easingFunction = null;
      const duration = 2600;
      const spinDirection = 1;
      const revolutions = 1;
      wheel.spinToItem(winningItemIndex, duration, true, revolutions, spinDirection, easingFunction);
    }

  });

  function play() {
    var audio = new Audio('./sounds/55046_histicks.mp3');
    audio.play();
    audio.re
  }

}