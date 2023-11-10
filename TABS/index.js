import { Tabs } from "./Tabs.js";

// Se definen las nuevas opciones y los contenidos en el DOM sin tocar el código
const opcionesCompleta = [
  {
    opcion: "Opcion 1",
    contenido: [
      {
        content1: `<div class="center">
        <h1>Inicio de Sesion</h1>
        <form>
          <div class="inputbox">
            <input type="text" required="required">
            <span>Email</span>
          </div>
          <div class="inputbox">
            <input type="text" required="required">
            <span>Password</span>
          </div>
          <div class="inputbox">
            <input type="button" value="Oprime" >
          </div>
        </form>
      </div>`,
      },
    ],
  },
  {
    opcion: 'Opcion 2',
    contenido: [
      {
        content1: "<p>Hola Mundo</p>",
        img: '<img src="./gif/6oa.gif">',
        parrafo2:"<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit nostrum aliquid magni cilis commodi eveniet natus. Enim, quod.</p>",
        text: "<h1 style='color: blue;'>Ya sirve</h1>",
        btn: "<button class = 'xd'>Presioname</button>",
        vidio: "<iframe src='https://www.youtube.com/embed/1lhZxsMKfEw?si=mhG8AjWSjTzXqsJo'></iframe>" ,

      },
    ],
  },
  {
    opcion: "Opcion 3",
    contenido: [
      {
        content1: "<p>Hola Mundo</p>",
        img2: '<img src="./gif/XOsX.gif">',
        img: '<img src="https://media.giphy.com/media/qteC4zts7t7T9u0hTk/giphy.gif">',
        parrafo2:"<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit nostrum aliquid magni cilis commodi eveniet natus. Enim, quod.</p>",
        text: "<h1 style='color: yellow;'>Desacoplado?</h1>",
        btn: "<button class = 'xd'>Andale</button>",

      },
    ],
  },
  {
    opcion: "Opcion 4",
    contenido: [
      {
        content1:`<p>Hola Mundo</p>`,
        img: '<img src="./gif/Af6V.gif">',
        parrafo2:"<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit nostrum aliquid magni cilis commodi eveniet natus. Enim, quod.</p>",
        text: "<h1 style='color: green;'>Puede ser</h1>",
        btn: "<button class = 'xd'>;)</button>",

      },
    ],
  },
  {
    opcion: "Opcion 5",
    contenido: [
      {
        content1: "<p>Hola Mundo</p>",
        img: '<img src="./gif/6oa.gif">',
        parrafo2:"<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit nostrum aliquid magni cilis commodi eveniet natus. Enim, quod.</p>",
        text: "<h1 style='color: purple;'>No se</h1>",
        btn: "<button class = 'xd'>xd</button>",

      },
    ],
  },

  {
    opcion: "Opcion 6",
    contenido: [
      {
        content1: "hola",
        tab: "<h1>Hola</h1>",
       
      },
    ],
  },  
];


const tabs = new Tabs();
const myTabs = tabs.init(opcionesCompleta);

const body = document.querySelector("body");
body.appendChild(myTabs);
