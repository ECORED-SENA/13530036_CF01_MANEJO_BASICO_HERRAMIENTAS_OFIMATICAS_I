<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 2
      h1 Procesador de texto - Microsoft Word
    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/img9.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 El procesador de texto es una herramienta fundamental para crear, editar y presentar documentos digitales de forma organizada, integrando diversos elementos que facilitan la comunicación escrita. Microsoft Word destaca por su facilidad de uso y variedad de funciones, permitiendo elaborar documentos con formato profesional. Su dominio implica comprender su interfaz y utilizar adecuadamente sus herramientas.
    <!------------------------------------------ SUBTEMA 1 ------------------------------------------>
    #t_2_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.1 Interfaz y entorno de trabajo
    p.mb-5 La interfaz de Word está organizada para facilitar el acceso a sus herramientas. Cada elemento cumple una función específica que contribuye al desarrollo eficiente del documento. A continuación, se presentan los elementos principales:  
    .color___box_1
      .px-5
        .row.justify-content-center
          .col-xl-10
            .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
              h5 Figura 1.
              span Elementos principales de la interfaz y entorno de trabajo
            figure(data-aos="zoom-in").mb-5
              img(src='@/assets/curso/temas/img11.png', alt='La imagen muestra la interfaz de un procesador de texto, destacando sus principales elementos como la barra de herramientas, área de trabajo y barra de estado, que permiten crear, editar y gestionar documentos digitales de manera organizada y eficiente.').m-auto
            AcordionA(tipo="a" clase-tarjeta="tarjeta acordeonA")(data-aos="zoom-in")
              .row(titulo="Barra de título").ajuste-cajaAcordion
                p.mb-3 Ubicada en la parte superior, muestra el nombre del documento y del programa. También contiene los controles de ventana (minimizar, maximizar y cerrar). Permite identificar rápidamente el archivo en uso.
              .row(titulo="Barra de acceso rápido").ajuste-cajaAcordion
                p.mb-3 Contiene accesos directos a funciones frecuentes como guardar, deshacer y rehacer. Puede personalizarse para incluir herramientas adicionales según las necesidades del usuario.
              .row(titulo="Área de trabajo").ajuste-cajaAcordion
                p.mb-3 Es el espacio donde se crea y edita el documento. Permite insertar texto, imágenes, tablas y otros elementos, funcionando como una hoja digital donde se organiza la información.
              .row(titulo="Barra de estado").ajuste-cajaAcordion
                p.mb-3 Se ubica en la parte inferior e informa sobre el número de páginas, la cantidad de palabras, el idioma y el nivel de zoom, facilitando el control del documento durante su edición.      
    <!------------------------------------------ SUBTEMA 2 ------------------------------------------>
    Separador
    #t_2_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.2 Cinta de opciones y organización de herramientas
    p.mb-5  La cinta de opciones es el elemento central del procesador de texto que organiza las herramientas para crear, editar y dar formato a documentos, facilitando el acceso rápido y el trabajo del usuario. 
    .color___box_1
      .px-5
        .row.justify-content-center.mb-5
          .col-xl-10
            .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
              h5 Figura 2.
              span Cinta de opciones y herramientas
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/temas/img12.png', alt='La captura de pantalla muestra la interfaz de un procesador de texto, destacando la cinta de opciones, pestañas principales y grupos de herramientas, que permiten acceder a funciones organizadas para crear, editar y dar formato a documentos de manera eficiente. ').m-auto
        p.mb-5 Acto seguido, se profundizará en la estructura de la cinta de opciones, las pestañas principales y los grupos de herramientas:
        TabsC.color-acento-contenido.mb-0(data-aos="zoom-in")
          .py-3.py-md-4(titulo="Estructura de la cinta de opciones")
            .row.justify-content-center.align-items-center
              .col-xl-5.order-2.order-lg-1
                figure
                  img(src='@/assets/curso/temas/img13.png', alt="" ).m-auto
              .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
                h4.txt--purpura.mb-4 Estructura de la cinta de opciones
                p.mb-0 La cinta de opciones se organiza en tres niveles: pestañas, grupos de herramientas y comandos, lo que permite acceder a las funciones de forma lógica y ordenada. Esta estructura facilita la navegación, la ejecución de tareas y el aprendizaje progresivo del usuario.
          .py-3.py-md-4(titulo="Pestañas principales")
            .row.justify-content-center.align-items-center
              .col-xl-5.order-2.order-lg-1
                figure
                  img(src='@/assets/curso/temas/img14.png', alt="" ).m-auto
              .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
                h4.txt--purpura.mb-4 Pestañas principales
                p.mb-0 Las pestañas de la cinta de opciones organizan las herramientas según su función, facilitando el acceso a tareas específicas. Entre las principales se encuentran Inicio, Insertar, Diseño y Disposición, Referencias, Revisar y Vista, cuyo uso adecuado mejora la eficiencia en la elaboración de documentos.
          .py-3.py-md-4(titulo="Grupos de herramientas")
            .row.justify-content-center.align-items-center
              .col-xl-5.order-2.order-lg-1
                figure
                  img(src='@/assets/curso/temas/img15.png', alt="" ).m-auto
              .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
                h4.txt--purpura.mb-4 Grupos de herramientas
                p.mb-0 Dentro de cada pestaña, las herramientas se organizan en grupos según su función, lo que facilita su identificación y uso. En la pestaña Inicio se destacan Portapapeles, Fuente, Párrafo y Estilos. Esta organización mejora la navegación y optimiza la productividad del usuario.
    <!------------------------------------------ SUBTEMA 3 ------------------------------------------>
    Separador
    #t_2_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.3 Visualización del documento
    p.mb-5 La visualización en Microsoft Word permite ajustar la presentación del documento para facilitar su lectura y edición, mejorando la experiencia de trabajo sin alterar el contenido. Los elementos fundamentales son:
    .fondo___slider.mb-0
      .px-5
        .ajuste-slider(data-aos="zoom-in")
          SlyderA(tipo="b")
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Modos de visualización
                p.mb-0 Microsoft Word ofrece distintos modos de visualización que permiten adaptar la forma de ver el documento según la tarea. Entre los principales se encuentran Diseño de impresión, Modo lectura, Diseño web, Esquema y Borrador, los cuales facilitan la lectura, organización y edición del contenido.
              .col-xl-6
                figure
                  img(src='@/assets/curso/temas/img16.png', alt='' style="max-width: 500px").m-auto
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Uso del zoom
                p.mb-0 El zoom permite ajustar el tamaño de visualización del documento, facilitando la lectura y edición del contenido. Sus funciones incluyen acercar o alejar la información, visualizar detalles específicos y adaptar la vista al tamaño de la pantalla. Su uso es especialmente útil en documentos extensos o para revisar elementos con mayor precisión.
              .col-xl-6
                figure
                  img(src='@/assets/curso/temas/img17.png', alt='' style="max-width: 500px").m-auto
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Elementos de apoyo en la visualización
                p Existen herramientas que facilitan la navegación y organización del documento durante su visualización:
                ul.fa-ul.estilo___ul.mb-0
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | #[b Regla]: permite medir y alinear elementos dentro del documento. 
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | #[b Panel de navegación]: facilita el desplazamiento entre títulos y secciones del documento. 
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | #[b Líneas de cuadrícula]: ayudan a organizar elementos visuales en el documento. 
              .col-xl-6
                figure
                  img(src='@/assets/curso/temas/img18.png', alt='' style="max-width: 500px").m-auto
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Gestión de ventanas
                p Microsoft Word permite trabajar con varios documentos, facilitando su organización y comparación. Dentro de sus funciones está:
                ul.fa-ul.estilo___ul.mb-3
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Abrir varias ventanas del mismo documento. 
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Organizar documentos en pantalla.
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Dividir la vista del documento.
                p.mb-0 Estas opciones mejoran la productividad al trabajar con varios archivos.
              .col-xl-6
                figure
                  img(src='@/assets/curso/temas/img19.png', alt='' style="max-width: 500px").m-auto
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Importancia de la visualización en el trabajo con documentos
                p El uso adecuado de estas herramientas facilita la lectura, edición y organización del contenido.
                p.mb-0 Una correcta visualización del documento contribuye a:
                ul.fa-ul.estilo___ul.mb-3
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Mejorar la comprensión de la información.
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Facilitar la edición del contenido.
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Optimizar el tiempo de trabajo.
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Aumentar la eficiencia en el uso del programa. 
                p.mb-0 Estas herramientas permiten trabajar de forma más organizada y eficiente en contextos académicos y laborales.
              .col-xl-6
                figure
                  img(src='@/assets/curso/temas/img20.png', alt='' style="max-width: 500px").m-auto
    <!------------------------------------------ SUBTEMA 4 ------------------------------------------>
    Separador
    #t_2_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.4 Navegación y uso básico del entorno
    p.mb-5 La navegación en Microsoft Word facilita el desplazamiento y la organización del contenido. A continuación, se presentan las funciones principales:
    .row.justify-content-center.mb-0
      .col-xl-10
        AcordionA(tipo="a" clase-tarjeta="tarjeta acordeonA")(data-aos="zoom-in")
          .row(titulo="Desplazamiento dentro del documento").ajuste-cajaAcordion
            p.mb-3 El desplazamiento permite moverse a través del contenido del documento utilizando diferentes métodos:
            ul.fa-ul.mb-3
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | #[b Desplazamiento vertical y horizontal]: mediante barras de desplazamiento o el uso del mouse. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | #[b Uso del teclado]: mediante teclas como flechas, AvPág, RePág, Inicio y Fin. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | #[b Saltos de página]: permiten moverse entre secciones del documento de forma estructurada. 
          .row(titulo="Búsqueda y localización de información").ajuste-cajaAcordion
            p.mb-3 Microsoft Word permite localizar contenido específico dentro del documento mediante herramientas de búsqueda.
            ul.fa-ul.mb-3
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | #[b Buscar]: permite encontrar palabras o frases dentro del documento. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | #[b Panel de navegación]: muestra una vista estructurada del documento, facilitando el acceso a títulos y secciones. 
            p.mb-3 
          .row(titulo="Selección y manipulación de contenido").ajuste-cajaAcordion
            p.mb-3 La selección de contenido es una acción fundamental para realizar modificaciones dentro del documento.
            ul.fa-ul.mb-3
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | #[b Selección de texto]: permite editar, copiar o eliminar contenido. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | #[b Selección de párrafos o bloques]: facilita la reorganización de la información. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | #[b Arrastrar y soltar]: permite mover contenido dentro del documento de forma rápida. 
          .row(titulo="Uso de atajos y herramientas rápidas").ajuste-cajaAcordion
            p.mb-3 Los atajos de teclado permiten ejecutar acciones de forma rápida, optimizando el tiempo de trabajo.
            p.mb-0 Algunos ejemplos son:
            ul.fa-ul.mb-3
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Ctrl + C (copiar). 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Ctrl + V (pegar). 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Ctrl + X (cortar). 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Ctrl + Z (deshacer). 
            p.mb-3 El uso de estos atajos mejora la productividad y facilita la interacción con el programa.
          .row(titulo="Importancia de la navegación en el trabajo con documentos").ajuste-cajaAcordion
            p.mb-3 El dominio de las herramientas de navegación permite trabajar de manera más eficiente. Una buena navegación contribuye a:
            ul.fa-ul.mb-3
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Reducir el tiempo de trabajo. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Facilitar la localización de información. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Mejorar la organización del contenido. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Optimizar la edición del documento. 
            p.mb-3 En contextos académicos y laborales, estas habilidades son esenciales para el manejo adecuado de la información.
    <!------------------------------------------ SUBTEMA 5 ------------------------------------------>
    Separador
    #t_2_5.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.5 Accesibilidad y personalización básica
    p.mb-5 La accesibilidad y personalización en Word adaptan el entorno al usuario, mejorando la interacción y la inclusión. Estas herramientas son:
    TabsC.color-acento-contenido.mb-0(data-aos="zoom-in")
      .py-3.py-md-4(titulo="Accesibilidad del documento")
        .row.justify-content-center.align-items-center
          .col-xl-5.order-2.order-lg-1
            figure
              img(src='@/assets/curso/temas/img21.png', alt="" ).m-auto
          .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
            h4.txt--purpura.mb-4 Accesibilidad del documento
            p La accesibilidad permite que un documento sea comprendido por todos los usuarios.
            p.mb-0 Microsoft Word ofrece herramientas que permiten:
            ul.fa-ul.estilo___ul.mb-0
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | #[b Comprobar accesibilidad]: detecta problemas en el documento.
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | #[b Texto alternativo]: describe imágenes para lectores de pantalla. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | #[b Títulos estructurados]: facilitan la navegación.
      .py-3.py-md-4(titulo="Lectura y apoyo visual")
        .row.justify-content-center.align-items-center
          .col-xl-5.order-2.order-lg-1
            figure
              img(src='@/assets/curso/temas/img22.png', alt="" ).m-auto
          .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
            h4.txt--purpura.mb-4 Lectura y apoyo visual
            p Existen herramientas que facilitan la lectura del contenido, mejorando la comprensión del documento:
            ul.fa-ul.estilo___ul.mb-3
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | #[b Lectura en voz alta]: permite escuchar el contenido.
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | #[b Modo de concentración]: reduce distracciones.
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | #[b Lector inmersivo]: facilita la lectura.
            p.mb-0 Estas funcionalidades mejoran la experiencia del usuario.
      .py-3.py-md-4(titulo="Personalización del entorno de trabajo")
        .row.justify-content-center.align-items-center
          .col-xl-5.order-2.order-lg-1
            figure
              img(src='@/assets/curso/temas/img23.png', alt="" ).m-auto
          .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
            h4.txt--purpura.mb-4 Personalización del entorno de trabajo
            p Microsoft Word permite adaptar su interfaz según las preferencias del usuario:
            ul.fa-ul.estilo___ul.mb-3
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Personalización de la barra de acceso rápido. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Ajuste del zoom.
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Configuración de idioma.
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Adaptación de herramientas visibles.
            p.mb-0 La personalización permite trabajar de manera más cómoda y eficiente.
      .py-3.py-md-4(titulo="Importancia de la accesibilidad y personalización")
        .row.justify-content-center.align-items-center
          .col-xl-5.order-2.order-lg-1
            figure
              img(src='@/assets/curso/temas/img24.png', alt="" ).m-auto
          .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
            h4.txt--purpura.mb-4 Importancia de la accesibilidad y personalización
            p El uso de estas herramientas mejora la calidad del trabajo y la experiencia del usuario.
            p.mb-0 Permite:
            ul.fa-ul.estilo___ul.mb-3
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Crear documentos más inclusivos. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Facilitar la comprensión de la información.
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Adaptar el entorno a diferentes necesidades.
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Mejorar la productividad.
            p.mb-0 Estas herramientas garantizan información accesible y útil en contextos académicos y laborales.

</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
