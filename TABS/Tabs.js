export class Tabs {
  constructor(opciones, contenido) {
    this.opciones = opciones;
    this.contenido = contenido;
    this.tabSeleccionado = null;
    this.barra = null;
    this.contenedorTabs = document.createElement("div");
  }

  createTabs() {
    this.contenedorTabs.classList.add("container");

    const contenedorTabs = document.createElement("div");
    contenedorTabs.classList.add("container-tab");
    this.contenedorTabs.appendChild(contenedorTabs);

    const contenedorTexts = document.createElement("div");
    contenedorTexts.classList.add("container-text");
    this.contenedorTabs.appendChild(contenedorTexts);

    this.opciones.forEach((opcion, index) => {
      const div = document.createElement("div");
      div.textContent = opcion;
      contenedorTabs.appendChild(div);
      div.classList.add("tab");

      div.addEventListener("click", (e) => {
        if (this.tabSeleccionado !== null) {
          this.tabSeleccionado.classList.remove("active");
        }
        div.classList.add("active");
        this.tabSeleccionado = div;

        if (this.barra !== null) {
          this.barra.style.width = e.target.offsetWidth + "px";
          this.barra.style.left = e.target.offsetLeft + "px";
        }

        contenedorTexts.innerHTML = "";

        const contenidoSeleccionado = this.contenido[index][0];
        console.log(contenidoSeleccionado);
        const divContenido = document.createElement("div");
        divContenido.classList.add("text");

        if (typeof contenidoSeleccionado === "object") {
          for (const key in contenidoSeleccionado) {
            divContenido.innerHTML += contenidoSeleccionado[key];
          }
        } else {
          divContenido.innerText = contenidoSeleccionado;
        }

        contenedorTexts.appendChild(divContenido);
      });
      return this;
    });

    this.barra = document.createElement("div");
    contenedorTabs.appendChild(this.barra);
    this.barra.classList.add("bar");
    return this;
  }

  agregarPestaña(opcion, contenido) {
    this.opciones.push(opcion);
    this.contenido.push(contenido);

    this.createTabs();
  }

  //Esto me devuelve un div
  renderizar() {
    return this.contenedorTabs;
  }

  getTabsData(opcionesCompleta) {
    const opciones = opcionesCompleta.map((tab) => tab.opcion);
    const contenido = opcionesCompleta.map((tab) => tab.contenido);

    return {
      opciones,
      contenido,
    };
  }

  init(opcionesCompleta) {
    const { opciones, contenido } = this.getTabsData(opcionesCompleta);
    console.log(opciones, contenido);

    this.opciones = opciones;
    this.contenido = contenido;
    return this.createTabs().renderizar();
  }


}

