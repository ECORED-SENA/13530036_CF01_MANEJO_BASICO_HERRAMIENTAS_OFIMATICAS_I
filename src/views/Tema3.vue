<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 3
      h1 Pestañas principales del procesador de texto	
    p Las pestañas principales organizan las herramientas del procesador de texto según su función, facilitando el acceso a opciones para crear, editar y dar formato a documentos.
    p.mb-5 En esta unidad se abordarán las pestañas Inicio, Insertar, Dibujar, Diseño y Disposición.
    <!------------------------------------------ SUBTEMA 1 ------------------------------------------>
    #t_3_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 3.1 Pestaña inicio
    p.mb-5  La pestaña Inicio es fundamental en el procesador de texto, ya que reúne las herramientas básicas para editar y dar formato al contenido. Su uso permite organizar la información y mejorar la presentación y comprensión del documento.
    .color___box_1
      .px-5
        .row.justify-content-center.mb-5
          .col-xl-10
            .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
              h5 Figura 3.
              span Pestaña Inicio
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/temas/img25.png', alt='La imagen muestra la pestaña Inicio de un procesador de texto, donde se agrupan herramientas como portapapeles, fuente, párrafo y estilos, que permiten editar, organizar y dar formato al contenido, facilitando la creación de documentos de manera estructurada y eficiente.').m-auto
        p.mb-5 A continuación, se presentan los principales grupos que conforman esta pestaña: 
        TabsC.color-acento-contenido.mb-5(data-aos="zoom-in")
          .py-3.py-md-4(titulo="Grupo de portapapeles")
            .row.justify-content-center.align-items-center
              .col-xl-5.order-2.order-lg-1
                figure
                  img(src='@/assets/curso/temas/img26.png', alt="" ).m-auto
              .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
                h4.txt--purpura.mb-4 Grupo de portapapeles
                p.mb-0 El grupo portapapeles permite copiar, cortar y pegar contenido para reorganizarlo fácilmente dentro del documento y reutilizar información sin necesidad de reescribirla.
          .py-3.py-md-4(titulo="Grupo fuente")
            .row.justify-content-center.align-items-center
              .col-xl-5.order-2.order-lg-1
                figure
                  img(src='@/assets/curso/temas/img27.png', alt="" ).m-auto
              .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
                h4.txt--purpura.mb-4 Grupo fuente
                p.mb-0 El grupo fuente permite modificar la apariencia del texto para resaltar información y mejorar la presentación del documento mediante opciones como tipo, tamaño, color y estilos.
          .py-3.py-md-4(titulo="Grupo párrafo")
            .row.justify-content-center.align-items-center
              .col-xl-5.order-2.order-lg-1
                figure
                  img(src='@/assets/curso/temas/img28.png', alt="" ).m-auto
              .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
                h4.txt--purpura.mb-4 Grupo párrafo
                p.mb-0 El grupo párrafo permite organizar el contenido mediante alineación, listas, interlineado y sangría, mejorando la estructura, presentación y comprensión del texto.
          .py-3.py-md-4(titulo="Grupo estilos")
            .row.justify-content-center.align-items-center
              .col-xl-5.order-2.order-lg-1
                figure
                  img(src='@/assets/curso/temas/img29.png', alt="" ).m-auto
              .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
                h4.txt--purpura.mb-4 Grupo estilos
                p.mb-0 El grupo estilos permite aplicar formatos predefinidos para organizar el contenido, mantener coherencia y estructurar documentos de forma clara y profesional.
    p.mb-5 Seguidamente, se estudiarán las herramientas adicionales:
    .fondo___slider.mb-0
      .px-5
        .ajuste-slider(data-aos="zoom-in")
          SlyderA(tipo="b")
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Edición
                p.mb-0 Esta herramienta permite buscar y reemplazar contenido de forma rápida, siendo útil para modificar términos en documentos extensos.
              .col-xl-6
                figure
                  img(src='@/assets/curso/temas/img31.png', alt='' style="max-width: 500px").m-auto
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Dictar (herramienta de voz)
                p.mb-0 Permite convertir la voz en texto para redactar sin escribir, facilitando la accesibilidad y la toma de notas rápidas.
              .col-xl-6
                figure
                  img(src='@/assets/curso/temas/img32.png', alt='' style="max-width: 500px").m-auto
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Editor
                p.mb-0 Es una herramienta que revisa ortografía, gramática y estilo, mejorando la calidad del documento antes de su entrega.
              .col-xl-6
                figure
                  img(src='@/assets/curso/temas/img33.png', alt='' style="max-width: 500px").m-auto
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Complementos
                p.mb-0 Permiten integrar herramientas externas y ampliar las funciones de Word. En conjunto, los grupos de inicio ayudan a organizar, presentar y estructurar documentos de forma clara y profesional.
              .col-xl-6
                figure
                  img(src='@/assets/curso/temas/img34.png', alt='' style="max-width: 500px").m-auto      
    <!------------------------------------------ SUBTEMA 2 ------------------------------------------>
    Separador
    #t_3_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 3.2 Pestaña insertar
    p.mb-5  La pestaña Insertar permite agregar elementos como tablas, imágenes y gráficos para enriquecer el contenido y mejorar su presentación. Su uso transforma los documentos en materiales más organizados, visuales y funcionales.
    .color___box_1
      .px-5
        .row.justify-content-center.mb-5
          .col-xl-10
            .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
              h5 Figura 4.
              span Pestaña insertar y sus herramientas
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/temas/img35.png', alt='La figura muestra la pestaña Insertar de un procesador de texto, organizada en grupos como páginas, ilustraciones, tablas, vínculos, encabezado y pie de página, texto y símbolos, que permiten agregar y estructurar diversos elementos dentro del documento.').m-auto
        .titles___box_tercer_nivel.mb-5(data-aos="fade-right")
          .col-lg-auto
            figure
              img(src="@/assets/curso/temas/img36.svg" style="max-width: 60px").m-auto
          .col
            h3 Grupo de páginas
        p.mb-5 El grupo páginas permite organizar el documento mediante la inserción de páginas, portadas y divisiones de contenido, mejorando su estructura y presentación. Las funciones que lo conforma son:
    .fondo___slider.mb-5
      .px-5
        .ajuste-slider(data-aos="zoom-in")
          SlyderA(tipo="b")
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Portada
                p.mb-0 Permite insertar una portada prediseñada con datos como título, autor y fecha, mejorando la presentación de informes, trabajos académicos y proyectos.
              .col-xl-6
                .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
                  h5 Figura 5.
                  span Portada
                figure(data-aos="zoom-in")
                  img(src='@/assets/curso/temas/img37.png', alt='La imagen muestra la herramienta de inserción de portadas en un procesador de texto, donde se presentan diferentes diseños predeterminados que permiten estructurar y dar una presentación formal al documento desde su inicio.').m-auto
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Página en blanco
                p.mb-0 Permite insertar una nueva página para agregar contenido o separar secciones, facilitando la organización del documento.
              .col-xl-6
                figure
                  img(src='@/assets/curso/temas/img38.png', alt='' style="max-width: 500px").m-auto
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Salto de página
                p.mb-0 Permite dividir el documento en secciones e iniciar contenido en nuevas páginas, manteniendo el orden estructural de forma profesional.
              .col-xl-6
                figure
                  img(src='@/assets/curso/temas/img39.png', alt='' style="max-width: 500px").m-auto
    .titles___box_tercer_nivel.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/temas/img36.svg" style="max-width: 60px").m-auto
      .col
        h3 Inserción de tablas
    p.mb-5 Las tablas permiten organizar información en filas y columnas, facilitando la visualización y análisis de datos dentro del documento.
    .row.justify-content-center.align-items-center.mb-5
      .col-xl.mb-4.mb-lg-0
        .box___style_2.fit___box_2(data-aos="zoom-in")
          p #[b Funciones principales:]
          ul.fa-ul.estilo___ul.mb-3
            li.mb-0
              span.fa-li
                i.fas.fa-check-circle
              |  Crear tablas con diferentes dimensiones.
            li.mb-0
              span.fa-li
                i.fas.fa-check-circle
              |  Organizar información de forma estructurada. 
            li.mb-0
              span.fa-li
                i.fas.fa-check-circle
              |  Aplicar formato (bordes, colores, estilos). 
          p.mb-0 #[b Aplicación práctica]: se utilizan en informes para presentar datos como listas, registros o comparaciones.
      .col-xl-auto.col-md-9(data-aos="fade-left")
        figure
          img(src='@/assets/curso/temas/img114.png', alt='' ).m-auto
    .color___box_1
      .px-5
        .row.justify-content-center.mb-5
          .col-xl-10
            .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
              h5 Figura 6.
              span Insertar
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/temas/img40.png', alt='La imagen muestra la herramienta de inserción de tablas y calendarios en un procesador de texto, donde se visualizan opciones prediseñadas que permiten organizar información de manera estructurada y facilitar la presentación de datos dentro del documento.').m-auto
        .titles___box_tercer_nivel.mb-5(data-aos="fade-right")
          .col-lg-auto
            figure
              img(src="@/assets/curso/temas/img36.svg" style="max-width: 60px").m-auto
          .col
            h3 Grupo de ilustraciones
        p.mb-5 El grupo de ilustraciones permite insertar elementos visuales como imágenes, formas y gráficos, facilitando la comprensión de la información y mejorando la presentación del documento. Está conformado principalmente por:
    .fondo___slider.mb-5
      .px-5
        .ajuste-slider(data-aos="zoom-in")
          SlyderA(tipo="b")
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Inserción de imágenes
                p.mb-0 Las imágenes complementan el texto, facilitando la comprensión y mejorando la presentación del documento mediante opciones de inserción, ajuste y estilos visuales.
              .col-xl-6
                figure
                  img(src='@/assets/curso/temas/img41.png', alt='' style="max-width: 500px").m-auto
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Inserción de gráficos
                p.mb-0 Los gráficos permiten representar datos de forma visual, facilitando su interpretación y el análisis mediante diferentes tipos y estilos.
              .col-xl-6
                .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
                  h5 Figura 7.
                  span Inserción de gráficos
                figure(data-aos="zoom-in")
                  img(src='@/assets/curso/temas/img42.png', alt='La imagen muestra la herramienta de inserción de gráficos en un procesador de texto, donde se seleccionan diferentes tipos de gráficos para representar datos de forma visual, facilitando el análisis, la organización y la presentación de la información.').m-auto
    .titles___box_tercer_nivel.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/temas/img36.svg" style="max-width: 60px").m-auto
      .col
        h3 Inserción de hipervínculos
    p.mb-5 Los hipervínculos permiten conectar el documento con otros recursos, como páginas web, secciones internas o archivos, facilitando la navegación y el acceso a la información.
    .row.justify-content-center.mb-5
      .col-xl-8
        .box___style_2.fit___box_2(data-aos="zoom-in")
          h5.mb-0 Aplicación práctica:
          p.mb-0 Se utilizan en documentos digitales para ampliar la información o facilitar la navegación.
    .color___box_1
      .px-5
        .row.justify-content-center.mb-5
          .col-xl-10
            .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
              h5 Figura 8.
              span Pantallazo inserción de hipervínculos 
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/temas/img43.png', alt='La imagen muestra la herramienta de inserción de hipervínculos en un procesador de texto, permitiendo enlazar direcciones web, archivos o ubicaciones dentro del documento, facilitando la navegación y el acceso a información adicional de forma rápida y organizada.').m-auto
        .titles___box_tercer_nivel.mb-5(data-aos="fade-right")
          .col-lg-auto
            figure
              img(src="@/assets/curso/temas/img36.svg" style="max-width: 60px").m-auto
          .col
            h3 Grupo de encabezado y pie de página
        p.mb-5 El grupo encabezado y pie de página permite agregar información como títulos, fechas y numeración, facilitando la organización y presentación uniforme del documento en todas sus páginas. Los aspectos más representativos son:
    TabsC.color-acento-contenido.mb-5(data-aos="zoom-in")
      .py-3.py-md-4(titulo="Encabezados y pie de página")
        .row.justify-content-center.align-items-center
          .col-xl-5.order-2.order-lg-1
            .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
              h5 Figura 9.
              span Encabezados y pie de página
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/temas/img44.png', alt='').m-auto
          .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
            h4.txt--purpura.mb-4 Encabezados y pie de página
            p.mb-0 Permiten agregar información como numeración, títulos y fechas en la parte superior e inferior del documento, siendo esenciales en documentos formales.
      .py-3.py-md-4(titulo="Numero de página")
        .row.justify-content-center.align-items-center
          .col-xl-5.order-2.order-lg-1
            .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
              h5 Figura 10.
              span Número de página
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/temas/img45.png', alt='La ilustración muestra la inserción y edición de encabezados y pies de página en un procesador de texto, donde se visualizan opciones para agregar numeración, fechas y otros elementos, facilitando la organización, identificación y presentación uniforme del documento en todas sus páginas.').m-auto
          .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
            h4.txt--purpura.mb-4 Número de página
            p.mb-0 Permite agregar la numeración al documento.
    .titles___box_tercer_nivel.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/temas/img36.svg" style="max-width: 60px").m-auto
      .col
        h3 Grupo de texto
    p El grupo Texto permite insertar y gestionar elementos textuales avanzados dentro del documento, facilitando la organización de la información y la creación de contenidos más dinámicos y estructurados.
    p.mb-5 En el siguiente se presentan las principales herramientas del grupo Texto y su aplicación en la creación de documentos. Se invita al aprendiz a reproducirlo para fortalecer su comprensión y uso adecuado.
    figure(data-aos="zoom-in").mb-5
      .video.mb-1
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption.fit___figcaption-video(data-aos="zoom-in") #[b Video]. Grupo de texto en Word: funciones y aplicaciones.
    .titles___box_tercer_nivel.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/temas/img36.svg" style="max-width: 60px").m-auto
      .col
        h3 Grupo símbolos
    p El grupo Símbolos permite insertar caracteres especiales no disponibles en el teclado, siendo útil en documentos técnicos, académicos y formales.
    p.mb-5 Seguidamente, se presentan las herramientas de inserción de ecuaciones y símbolos para representar información matemática y caracteres especiales en el documento.
    .fondo___slider.mb-5
      .px-5
        .ajuste-slider(data-aos="zoom-in")
          SlyderA(tipo="b")
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Inserción de ecuaciones
                p.mb-0 Permite crear ecuaciones dentro del documento con formato profesional, utilizando elementos como fracciones, exponentes y raíces. Es útil en trabajos académicos, científicos y técnicos para representar información matemática de forma clara y estructurada.
              .col-xl-6
                .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
                  h5 Figura 11.
                  span Ecuaciones y símbolos en Word 
                figure(data-aos="zoom-in")
                  img(src='@/assets/curso/temas/img46.png', alt='La imagen muestra la herramienta de inserción de ecuaciones en un procesador de texto, donde se visualizan opciones para crear expresiones matemáticas con formato estructurado, facilitando la representación de información numérica y simbólica dentro del documento.').m-auto
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Inserción de símbolos
                p.mb-0 Permite insertar caracteres especiales no disponibles en el teclado, como símbolos matemáticos o monetarios, facilitando la elaboración de documentos técnicos, académicos y financieros.
              .col-xl-6
                .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
                  h5 Figura 12.
                  span Inserción de ecuaciones en el procesador de texto
                figure(data-aos="zoom-in")
                  img(src='@/assets/curso/temas/img47.png', alt='La imagen muestra la herramienta de inserción de ecuaciones en un procesador de texto, donde se utilizan opciones y estructuras matemáticas para crear expresiones con formato profesional, facilitando la representación clara de información numérica y simbólica en el documento.').m-auto
    .titles___box_tercer_nivel.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/temas/img36.svg" style="max-width: 60px").m-auto
      .col
        h3 Complementos de firma electrónica
    p.mb-0 Permite insertar firmas digitales para validar la autenticidad e integridad del documento, siendo útil en contratos, documentos administrativos y archivos institucionales.
    <!------------------------------------------ SUBTEMA 3 ------------------------------------------>
    Separador
    #t_3_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 3.3 Pestaña dibujar	
    p.mb-5 La pestaña dibujar permite interactuar con el contenido mediante herramientas gráficas, facilitando la representación visual de la información en contextos educativos, técnicos y creativos.
    .color___box_1
      .px-5
        .row.justify-content-center.mb-5
          .col-xl-10
            .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
              h5 Figura 13.
              span Grupos de herramientas de la pestaña dibujar en Word
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/temas/img48.png', alt='La imagen muestra la pestaña Dibujar de un procesador de texto, donde se organizan herramientas como lápices, resaltadores y opciones de conversión, que permiten interactuar con el contenido, realizar anotaciones y representar información de forma gráfica dentro del documento.').m-auto
        p.mb-5 En este apartado se presentan las herramientas de la pestaña dibujar, que permiten interactuar con el documento mediante anotaciones y elementos gráficos.
        .row.justify-content-center.mb-0
          .col-xl-10
            AcordionA(tipo="a" clase-tarjeta="tarjeta acordeonA")(data-aos="zoom-in")
              .row(titulo="Herramientas de dibujo y anotación").ajuste-cajaAcordion
                p.mb-3 La pestaña dibujar permite crear anotaciones y elementos gráficos directamente en el documento mediante herramientas de entrada manual. Incluye lápices y marcadores para trazar, resaltar y dibujar, siendo útil en explicaciones, correcciones y anotaciones rápidas.
              .row(titulo="Regla").ajuste-cajaAcordion
                p.mb-3 Permite alinear objetos y trazos dentro del documento, facilitando el dibujo de líneas rectas y el ajuste de su inclinación. Su uso mejora la precisión y la organización visual, siendo útil en la elaboración de diagramas y esquemas.
              .row(titulo="Convertir").ajuste-cajaAcordion
                p.mb-3 Permite convertir la escritura manual en texto digital y transformar dibujos en formas o ecuaciones. Es útil para digitalizar notas y facilitar la creación de documentos técnicos y educativos.
              .row(titulo="Grupo insertar").ajuste-cajaAcordion
                p.mb-3 El lienzo de dibujo permite crear un espacio específico para realizar y organizar elementos gráficos dentro del documento, separándolos del texto. Es útil en diagramas, ilustraciones y representaciones visuales.
              .row(titulo="Grupo de reproducción").ajuste-cajaAcordion
                p.mb-3 Permite reproducir el proceso de escritura o dibujo, facilitando la visualización y análisis de su secuencia. Es útil en explicaciones, presentaciones y demostraciones.
              .row(titulo="Grupo ayuda").ajuste-cajaAcordion
                p.mb-3 La ayuda de entrada manuscrita mejora la precisión del trazo y el reconocimiento de la escritura, facilitando su uso en lápiz digital y en procesos de aprendizaje.
    <!------------------------------------------ SUBTEMA 4 ------------------------------------------>
    Separador
    #t_3_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 3.4 Pestaña diseño	
    p.mb-5 La pestaña diseño permite definir la identidad visual del documento y mantener coherencia en sus elementos, facilitando la creación de documentos profesionales sin ajustes manuales constantes.
    .color___box_1
      .px-5
        .row.justify-content-center.mb-5
          .col-xl-10
            .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
              h5 Figura 14.
              span Herramientas de la pestaña diseño en el procesador de texto
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/temas/img49.png', alt='La imagen muestra la pestaña diseño de un procesador de texto, donde se visualizan opciones para aplicar formatos, estilos y fondos de página, permitiendo definir la apariencia del documento y mantener coherencia en su presentación visual.').m-auto
        .titles___box_tercer_nivel.mb-5(data-aos="fade-right")
          .col-lg-auto
            figure
              img(src="@/assets/curso/temas/img36.svg" style="max-width: 60px").m-auto
          .col
            h3 Grupo formato del documento
        p.mb-5 Este grupo permite aplicar estilos generales que modifican automáticamente la apariencia del documento mediante temas, colores, fuentes, espaciado y efectos visuales. A continuación, se presentan las herramientas que lo conforman.
    .fondo___slider.mb-5
      .px-5
        .ajuste-slider(data-aos="zoom-in")
          SlyderA(tipo="b")
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Temas
                p.mb-0 Permiten aplicar un diseño completo al documento, integrando colores, fuentes y estilos para mantener coherencia visual, especialmente en documentos institucionales o empresariales.
              .col-xl-6
                figure
                  img(src='@/assets/curso/temas/img50.png', alt='' style="max-width: 500px").m-auto
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Colores
                p.mb-0 Permite modificar la paleta de colores del documento, ajustando títulos y elementos visuales para adaptarlo a una identidad gráfica específica.
              .col-xl-6
                figure
                  img(src='@/assets/curso/temas/img51.png', alt='' style="max-width: 500px").m-auto
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Fuentes
                p.mb-0 Permite cambiar las fuentes del documento, aplicándolas a títulos y texto para mantener coherencia tipográfica.
              .col-xl-6
                figure
                  img(src='@/assets/curso/temas/img52.png', alt='' style="max-width: 500px").m-auto
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Espaciado entre párrafos
                p.mb-0 Permite ajustar el espacio entre párrafos de forma global, mejorando la legibilidad y la organización del contenido.
              .col-xl-6
                figure
                  img(src='@/assets/curso/temas/img53.png', alt='' style="max-width: 500px").m-auto
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Efectos
                p.mb-0 Permite aplicar efectos visuales para modificar estilos gráficos y mejorar la apariencia del documento.
              .col-xl-6
                figure
                  img(src='@/assets/curso/temas/img54.png', alt='' style="max-width: 500px").m-auto
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Establecer como predeterminada
                p.mb-0 Permite guardar la configuración actual como base para futuros documentos.
              .col-xl-6
                figure
                  img(src='@/assets/curso/temas/img55.png', alt='' style="max-width: 500px").m-auto
    .titles___box_tercer_nivel.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/temas/img36.svg" style="max-width: 60px").m-auto
      .col
        h3 Grupo fondo de página
    p.mb-5 Este grupo permite modificar el fondo del documento, agregando elementos visuales que refuerzan su presentación. Sus herramientas son:
    .row.align-items-center.mb-0
      .col-xl-auto(data-aos="fade-right")
        figure.d-none.d-xl-block
          img(src="@/assets/curso/temas/img30.png", alt="" ).m-auto
      .col-xl
        AcordionA(tipo="a" clase-tarjeta="tarjeta acordeonA")(data-aos="fade-left")
          .row(titulo="Marca de agua").ajuste-cajaAcordion
            p.mb-3 Permite insertar texto o imágenes como fondo del documento, indicando su estado o identidad institucional, especialmente en documentos oficiales o empresariales.
          .row(titulo="Color de página").ajuste-cajaAcordion
            p.mb-3 Permite cambiar el color de fondo del documento para mejorar su apariencia y resaltar el contenido.
          .row(titulo="Bordes de página").ajuste-cajaAcordion
            p.mb-3 Permite agregar bordes al documento para delimitar el contenido y mejorar su presentación.
    <!------------------------------------------ SUBTEMA 5 ------------------------------------------>
    Separador
    #t_3_5.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 3.5 Pestaña disposición
    p.mb-5 Permite organizar el contenido dentro de la página, ajustando la distribución, espacios y elementos gráficos. Su uso garantiza orden, claridad y una adecuada presentación en documentos formales.
    .color___box_1
      .px-5
        .row.justify-content-center.mb-5
          .col-xl-10
            .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
              h5 Figura 15.
              span Pestaña disposición y sus herramientas
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/temas/img56.png', alt='La imagen muestra la pestaña disposición de un procesador de texto, donde se organizan herramientas en grupos como Configuración de página, Párrafo y Organizar, permitiendo ajustar márgenes, espaciado y la distribución de los elementos dentro del documento.').m-auto
        .titles___box_tercer_nivel.mb-5(data-aos="fade-right")
          .col-lg-auto
            figure
              img(src="@/assets/curso/temas/img36.svg" style="max-width: 60px").m-auto
          .col
            h3 Grupo de configuración de página
        p.mb-5 Este grupo permite definir la estructura general del documento. Las herramientas del grupo de configuración son:
    .fondo___slider.mb-5
      .px-5
        .ajuste-slider(data-aos="zoom-in")
          SlyderA(tipo="b")
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Márgenes
                p.mb-0 Permiten definir los espacios en blanco del documento, ajustando los márgenes según normas académicas o requerimientos institucionales.
              .col-xl-6
                figure
                  img(src='@/assets/curso/temas/img57.png', alt='' style="max-width: 500px").m-auto
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Orientación
                p.mb-0 Permite cambiar la orientación de la página a vertical u horizontal, adaptándola al tipo de contenido, como documentos tradicionales o tablas y gráficos amplios.
              .col-xl-6
                figure
                  img(src='@/assets/curso/temas/img58.png', alt='' style="max-width: 500px").m-auto
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Tamaño
                p.mb-0 Permite seleccionar el tamaño del papel, como carta, oficio o A4, según el tipo de documento o requerimientos institucionales.
              .col-xl-6
                figure
                  img(src='@/assets/curso/temas/img59.png', alt='' style="max-width: 500px").m-auto
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Columnas
                p.mb-0 Permite dividir el texto en columnas para organizar el contenido y mejorar la presentación, especialmente en boletines y documentos informativos.
              .col-xl-6
                figure
                  img(src='@/assets/curso/temas/img60.png', alt='' style="max-width: 500px").m-auto
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Saltos
                p.mb-0 Permite dividir el documento en secciones mediante saltos de página, facilitando la organización y estructura de documentos largos.
              .col-xl-6
                figure
                  img(src='@/assets/curso/temas/img61.png', alt='' style="max-width: 500px").m-auto
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Números de línea
                p.mb-0 Permite numerar las líneas del documento, siendo útil en documentos legales y procesos de revisión técnica.
              .col-xl-6
                figure
                  img(src='@/assets/curso/temas/img62.png', alt='' style="max-width: 500px").m-auto
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Guiones
                p.mb-0 Permite dividir palabras automáticamente al final de una línea.
              .col-xl-6
                figure
                  img(src='@/assets/curso/temas/img63.png', alt='' style="max-width: 500px").m-auto
    .titles___box_tercer_nivel.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/temas/img36.svg" style="max-width: 60px").m-auto
      .col
        h3 Grupo párrafo
    p.mb-5 Permite controlar la organización interna del texto dentro del documento. Sus herramientas son:
    .row.justify-content-center.mb-5
      .col-xl-4.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
        .box___style_4.h-100
          .row.justify-content-center.mb-3
            .col-12
              figure.mb-4
                img(src='@/assets/curso/temas/img64.png', alt="" ).m-auto
            h4.text-center Sangría
            p.mb-0 Permite desplazar el texto hacia la derecha o izquierda, ajustando el inicio de los párrafos y organizando visualmente el contenido.
      .col-xl-4.col-md-9(data-aos="fade-left")
        .box___style_4.h-100
          .row.justify-content-center.mb-3
            .col-12
              figure.mb-4
                img(src='@/assets/curso/temas/img65.png', alt="" ).m-auto
            h4.text-center Espaciado
            p.mb-0 Permite definir el espacio entre párrafos, ajustando el espacio antes y después para mejorar la legibilidad en documentos académicos e informes.
    .titles___box_tercer_nivel.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/temas/img36.svg" style="max-width: 60px").m-auto
      .col
        h3 Grupo organizar
    p.mb-5 Este grupo permite manipular la posición de objetos dentro del documento. Sus funciones son:
    .fondo___slider.mb-5
      .px-5
        .ajuste-slider(data-aos="zoom-in")
          SlyderA(tipo="b")
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Posición
                p.mb-0 Permite ubicar elementos en diferentes partes del documento.
              .col-xl-6
                figure
                  img(src='@/assets/curso/temas/img66.png', alt='' style="max-width: 500px").m-auto
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Ajustar texto
                p.mb-0 Permite definir cómo el texto se ajusta alrededor de una imagen o elemento, mediante opciones como cuadrado, estrecho o detrás del texto.
              .col-xl-6
                figure
                  img(src='@/assets/curso/temas/img67.png', alt='' style="max-width: 500px").m-auto
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Traer adelante / Enviar atrás
                p.mb-0 Permite organizar la superposición de objetos.
              .col-xl-6
                figure
                  img(src='@/assets/curso/temas/img68.png', alt='' style="max-width: 500px").m-auto
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Alinear
                p.mb-0 Permite alinear elementos dentro del documento.
              .col-xl-6
                figure
                  img(src='@/assets/curso/temas/img69.png', alt='' style="max-width: 500px").m-auto
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Agrupar
                p.mb-0 Permite unir varios objetos para manipularlos como uno solo.
              .col-xl-6
                figure
                  img(src='@/assets/curso/temas/img70.png', alt='' style="max-width: 500px").m-auto
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Girar
                p.mb-0 Permite rotar elementos dentro del documento.
              .col-xl-6
                figure
                  img(src='@/assets/curso/temas/img71.png', alt='' style="max-width: 500px").m-auto
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Panel de selección
                p.mb-0 Permite visualizar y organizar todos los objetos del documento.
              .col-xl-6
                figure
                  img(src='@/assets/curso/temas/img72.png', alt='' style="max-width: 500px").m-auto
    p.mb-0 La pestaña disposición permite organizar el contenido en la página, mejorando la presentación, la lectura y el cumplimiento de estándares formales.

</template>

<script>
export default {
  name: 'Tema3',
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
