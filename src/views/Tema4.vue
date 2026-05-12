<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 4
      h1 Pestañas avanzadas y de gestión del documento
    p.mb-5 Las pestañas avanzadas permiten revisar, gestionar y optimizar el documento, mejorando su calidad y control en contextos académicos y laborales.
    <!------------------------------------------ SUBTEMA 1 ------------------------------------------>
    #t_4_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 4.1 Pestaña referencias
    p.mb-5 La pestaña referencias permite gestionar elementos como tablas de contenido, citas e índices, facilitando la organización, navegación y correcta citación en documentos académicos y técnicos.
    .color___box_1
      .px-5
        .row.justify-content-center.mb-5
          .col-xl-10
            .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
              h5 Figura 16.
              span Referencias en Word
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/temas/img73.png', alt='La imagen muestra la pestaña Referencias de un procesador de texto, donde se organizan herramientas en grupos como tabla de contenido, notas al pie, citas y bibliografía, títulos e índices, permitiendo estructurar, citar y organizar la información del documento.').m-auto
        p.mb-5 Este contenido desarrolla las herramientas de la pestaña referencias, orientadas a la organización, citación y estructuración de la información.
        .fondo___slider.mb-5
          .px-5
            .ajuste-slider(data-aos="zoom-in")
              SlyderA(tipo="b")
                .row.justify-content-center.align-items-center
                  .col-xl-6.mb-4
                    h4 Grupo tabla de contenido
                    p.mb-0 Permite generar automáticamente la tabla de contenido del documento, organizando su estructura y facilitando la actualización de títulos. Se utiliza en informes, trabajos académicos y proyectos para ubicar rápidamente los temas.
                  .col-xl-6
                    figure
                      img(src='@/assets/curso/temas/img74.png', alt='' style="max-width: 500px").m-auto
                .row.justify-content-center.align-items-center
                  .col-xl-6.mb-4
                    h4 Grupo notas al pie
                    p.mb-0 Permite agregar aclaraciones o referencias mediante notas al pie o al final del documento. Se utiliza en textos académicos e investigaciones para ampliar información sin afectar el contenido principal.
                  .col-xl-6
                    figure
                      img(src='@/assets/curso/temas/img75.png', alt='' style="max-width: 500px").m-auto
                .row.justify-content-center.align-items-center
                  .col-xl-6.mb-4
                    h4 Grupo de citas y bibliografía
                    p.mb-0 Permite gestionar las fuentes del documento mediante citas y bibliografía automática, aplicando estilos como APA. Se utiliza en trabajos académicos e informes para garantizar referencias correctas y evitar el plagio.
                  .col-xl-6
                    figure
                      img(src='@/assets/curso/temas/img76.png', alt='' style="max-width: 500px").m-auto
                .row.justify-content-center.align-items-center
                  .col-xl-6.mb-4
                    h4 Grupo títulos
                    p.mb-0 Permite identificar y organizar elementos del documento mediante títulos, tablas de ilustraciones y referencias cruzadas. Se utiliza en informes y documentos con gráficos para facilitar la identificación y organización del contenido.
                  .col-xl-6
                    figure
                      img(src='@/assets/curso/temas/img77.png', alt='' style="max-width: 500px").m-auto
                .row.justify-content-center.align-items-center
                  .col-xl-6.mb-4
                    h4 Grupo índice
                    p.mb-0 Permite crear índices temáticos mediante el marcado de entradas y su generación automática. Se utiliza en libros y documentos extensos para facilitar la búsqueda de información específica.
                  .col-xl-6
                    figure
                      img(src='@/assets/curso/temas/img78.png', alt='' style="max-width: 500px").m-auto
    p.mb-0 #[b Integración dentro del documento:] permite estructurar el documento de forma académica, facilitando la organización, navegación y validación de la información en trabajos formales.  
    <!------------------------------------------ SUBTEMA 2 ------------------------------------------>
    Separador
    #t_4_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 4.2 Pestañas correspondencia
    p.mb-5 Permite automatizar la creación de documentos personalizados desde una base de datos, facilitando el envío masivo de cartas, etiquetas o correos en contextos administrativos y empresariales.
    .color___box_1
      .px-5
        .row.justify-content-center.mb-5
          .col-xl-10
            .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
              h5 Figura 17.
              span Pestañas correspondencia
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/temas/img79.png', alt='Interfaz de Microsoft Word en la pestaña Correspondencia, donde se visualizan los grupos de herramientas como crear, iniciar combinación de correspondencia, escribir e insertar campos, vista previa de resultados y finalizar, utilizados para automatizar documentos personalizados a partir de datos.').m-auto
        .titles___box_tercer_nivel.mb-5(data-aos="fade-right")
          .col-lg-auto
            figure
              img(src="@/assets/curso/temas/img36.svg" style="max-width: 60px").m-auto
          .col
            h3 Grupo crear
        p.mb-5 Este grupo permite generar documentos básicos de correspondencia. Las herramientas son:
        TabsC.color-acento-contenido.mb-5(data-aos="zoom-in")
          .py-3.py-md-4(titulo="Sobres")
            .row.justify-content-center.align-items-center
              .col-xl-5.order-2.order-lg-1
                figure
                  img(src='@/assets/curso/temas/img80.png', alt="" ).m-auto
              .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
                h4.txt--purpura.mb-4 Sobres
                p.mb-0 Permite crear e imprimir sobres personalizados, ingresando la dirección del destinatario y configurando su formato. Se utiliza en envíos postales y correspondencia formal.
          .py-3.py-md-4(titulo="Etiquetas")
            .row.justify-content-center.align-items-center
              .col-xl-5.order-2.order-lg-1
                figure
                  img(src='@/assets/curso/temas/img81.png', alt="" ).m-auto
              .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
                h4.txt--purpura.mb-4 Etiquetas
                p.mb-0 Permite crear etiquetas para impresión, generando información específica y configurando su tamaño y formato. Se utiliza en el envío de paquetes y la organización de archivos.
    .titles___box_tercer_nivel.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/temas/img36.svg" style="max-width: 60px").m-auto
      .col
        h3 Grupo Iniciar combinación de correspondencia
    p.mb-5 Este grupo permite iniciar el proceso de automatización de documentos. A continuación, se estudiarán las herramientas.
    .row.align-items-center.mb-5
      .col-xl-auto(data-aos="fade-right")
        figure.d-none.d-xl-block
          img(src="@/assets/curso/temas/img30.png", alt="" ).m-auto
      .col-xl
        AcordionA(tipo="a" clase-tarjeta="tarjeta acordeonA")(data-aos="fade-left")
          .row(titulo="Iniciar combinación de correspondencia").ajuste-cajaAcordion
            p Permite crear documentos personalizados combinando una plantilla con una base de datos.
            p Funciones:
            ul.fa-ul.mb-0
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Seleccionar tipo de documento (cartas, etiquetas, sobres).
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Iniciar proceso de combinación.
          .row(titulo="Seleccionar destinatarios").ajuste-cajaAcordion
            p Permite vincular una base de datos al documento.
            p Funciones:
            ul.fa-ul.mb-0
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Importar datos desde Excel u otras fuentes.
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Seleccionar lista de destinatarios.
          .row(titulo="Editar lista de destinatarios").ajuste-cajaAcordion
            p Permite modificar los datos que se utilizarán en la combinación.
            p Funciones:
            ul.fa-ul.mb-0
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Editar la lista de destinatarios.
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Agregar o eliminar registros.
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Corregir información existente.
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Filtrar y ordenar datos.
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Seleccionar los registros que se utilizarán en la combinación.
    .titles___box_tercer_nivel.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/temas/img36.svg" style="max-width: 60px").m-auto
      .col
        h3 Grupo escribir e insertar campos
    p.mb-5 Permite insertar datos personalizados dentro del documento. Está conformado por:
    .fondo___slider.mb-5
      .px-5
        .ajuste-slider(data-aos="zoom-in")
          SlyderA(tipo="b")
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Insertar campos combinados
                p Permite insertar datos variables de una base de datos dentro del documento.
                p Función:
                ul.fa-ul.estilo___ul.mb-0
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Insertar datos como nombre, dirección, etc. 
              .col-xl-6
                figure
                  img(src='@/assets/curso/temas/img82.png', alt='' style="max-width: 500px").m-auto
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Línea de saludo
                p.mb-0 Permite agregar saludos personalizados.
              .col-xl-6
                figure
                  img(src='@/assets/curso/temas/img83.png', alt='' style="max-width: 500px").m-auto
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Bloque de direcciones
                p.mb-0 Permite insertar direcciones completas automáticamente.
              .col-xl-6
                figure
                  img(src='@/assets/curso/temas/img84.png', alt='' style="max-width: 500px").m-auto
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Reglas
                p Permite establecer condiciones dentro del documento.
                p Función:
                ul.fa-ul.estilo___ul.mb-0
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Mostrar contenido según condiciones.
              .col-xl-6
                figure
                  img(src='@/assets/curso/temas/img85.png', alt='' style="max-width: 500px").m-auto
    .titles___box_tercer_nivel.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/temas/img36.svg" style="max-width: 60px").m-auto
      .col
        h3 Grupo vista previa de resultados
    p.mb-5 Permite visualizar cómo quedará el documento final.  
    .row.justify-content-center.align-items-center.mb-5
      .col-xl.mb-4.mb-lg-0
        .box___style_2.fit___box_2(data-aos="zoom-in")
          p Sus funciones son:
          ul.fa-ul.estilo___ul.mb-3
            li.mb-0
              span.fa-li
                i.fas.fa-check-circle
              |  Revisar resultados antes de finalizar.
            li.mb-0
              span.fa-li
                i.fas.fa-check-circle
              |  Navegar entre registros.
            li.mb-0
              span.fa-li
                i.fas.fa-check-circle
              |  Validar información.
      .col-xl-auto.col-md-9(data-aos="fade-left")
        figure
          img(src='@/assets/curso/temas/img115.png', alt='' ).m-auto
    .titles___box_tercer_nivel.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/temas/img36.svg" style="max-width: 60px").m-auto
      .col
        h3 Grupo finalizar
    p.mb-5 Permite completar el proceso de combinación.
    .titles___box_cuarto_nivel.mb-5(data-aos="fade-right")   
      h4.mb-0 Finalizar y combinar
    .row.justify-content-center.align-items-center.mb-5
      .col-xl.mb-4.mb-lg-0
        .box___style_2.fit___box_2(data-aos="zoom-in")
          p Función:
          ul.fa-ul.estilo___ul.mb-3
            li.mb-0
              span.fa-li
                i.fas.fa-check-circle
              |  Generar documentos individuales.
            li.mb-0
              span.fa-li
                i.fas.fa-check-circle
              |  Imprimir resultados.
            li.mb-0
              span.fa-li
                i.fas.fa-check-circle
              |  Enviar por correo.
      .col-xl-auto.col-md-9(data-aos="fade-left")
        figure
          img(src='@/assets/curso/temas/img116.png', alt='' ).m-auto
    p.mb-0 La pestaña Correspondencia permite optimizar procesos de generación de documentos, automatizando tareas repetitivas y reduciendo errores. Su uso es clave en entornos administrativos donde se manejan grandes volúmenes de información personalizada.
    <!------------------------------------------ SUBTEMA 3 ------------------------------------------>
    Separador
    #t_4_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 4.3 Pestaña revisar	
    p.mb-5 La pestaña revisar permite verificar, corregir y mejorar la calidad del documento mediante herramientas de ortografía, comentarios y seguimiento de cambios, garantizando precisión, claridad y accesibilidad en textos formales.
    .color___box_1
      .px-5
        .row.justify-content-center.mb-5
          .col-xl-10
            .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
              h5 Figura 18.
              span Pestaña revisar y sus grupos de herramientas en word
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/temas/img86.png', alt='Interfaz de Microsoft Word en la pestaña Revisar, donde se muestran los grupos de herramientas como revisión, voz, accesibilidad, idioma, comentarios, seguimiento, comparar y proteger, utilizados para corregir, evaluar y mejorar la calidad del documento.').m-auto
        p.mb-5 La pestaña revisar la contiene los siguientes grandes grupos:
        TabsC.color-acento-contenido.mb-5(data-aos="zoom-in")
          .py-3.py-md-4(titulo="Grupo Revisión")
            .row.justify-content-center.align-items-center
              .col-xl-5.order-2.order-lg-1
                figure
                  img(src='@/assets/curso/temas/img87.png', alt="" ).m-auto
              .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
                h4.txt--purpura.mb-4 Grupo revisión
                p Este grupo contiene herramientas orientadas a la corrección del texto. Estas son:
                ul.fa-ul.estilo___ul.mb-0
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | #[b Ortografía y gramática]: detecta errores y sugiere correcciones en documentos formales.
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | #[b Sinónimos]: ofrece palabras alternativas para mejorar la redacción.
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | #[b Contar palabras]: mide la extensión del documento (palabras, caracteres y páginas).
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | #[b Editor]: revisa ortografía, gramática y estilo con sugerencias.
          .py-3.py-md-4(titulo="Grupo Accesibilidad")
            .row.justify-content-center.align-items-center
              .col-xl-5.order-2.order-lg-1
                figure
                  img(src='@/assets/curso/temas/img88.png', alt="" ).m-auto
              .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
                h4.txt--purpura.mb-4 Grupo accesibilidad
                p Permite verificar si el documento cumple con criterios de accesibilidad. Dentro de esta se encuentra:
                ul.fa-ul.estilo___ul.mb-0
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | #[b Comprobar accesibilidad]: identifica problemas de accesibilidad y mejora la inclusión del documento.
          .py-3.py-md-4(titulo="Grupo Comentarios")
            .row.justify-content-center.align-items-center
              .col-xl-5.order-2.order-lg-1
                figure
                  img(src='@/assets/curso/temas/img89.png', alt="" ).m-auto
              .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
                h4.txt--purpura.mb-4 Grupo comentarios
                p.mb-0 Permite agregar observaciones dentro del documento mediante la inserción de comentarios, la revisión de sugerencias y el apoyo al trabajo colaborativo.
          .py-3.py-md-4(titulo="Grupo Seguimiento")
            .row.justify-content-center.align-items-center
              .col-xl-5.order-2.order-lg-1
                figure
                  img(src='@/assets/curso/temas/img90.png', alt="" ).m-auto
              .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
                h4.txt--purpura.mb-4 Grupo seguimiento
                p  Permite registrar cambios realizados en el documento. Estas son:
                ul.fa-ul.estilo___ul.mb-0
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | #[b Control de cambios]: registra y gestiona modificaciones.
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | #[b Comparar]: permite identificar diferencias entre versiones de un documento e integrar cambios.
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | #[b Proteger]: restringe la edición para proteger el contenido del documento.
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | #[b Idioma]: permite configurar el idioma del documento.
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | #[b Traducir]: permite traducir el contenido del documento.
    p.mb-0 #[b Integración dentro del documento:] la pestaña Revisar permite garantizar la calidad del documento antes de su entrega, facilitando la corrección de errores, la colaboración entre usuarios y el control de versiones. Su uso adecuado es clave para asegurar que la información sea clara, precisa y profesional.
    <!------------------------------------------ SUBTEMA 4 ------------------------------------------>
    Separador
    #t_4_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 4.4 Pestaña vista
    p.mb-5 La pestaña vista permite ajustar la visualización del documento para facilitar su lectura, edición y organización, mediante opciones como modos de vista, zoom y gestión de ventanas, mejorando la experiencia de trabajo según las necesidades del usuario.
    .color___box_1
      .px-5
        .row.justify-content-center.mb-5
          .col-xl-10
            .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
              h5 Figura 19.
              span Pestaña vista y funciones 
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/temas/img91.png', alt='Interfaz de la pestaña Vista en Word que muestra sus grupos principales: vistas, modo inmersivo, movimiento de página, opciones de visualización, zoom, ventanas, macros y SharePoint, destacando herramientas para ajustar la visualización, organización y control del documento en pantalla.').m-auto
        p.mb-5 Los grupos que la conformación se detallan a continuación:
        .fondo___slider.mb-5
          .px-5
            .ajuste-slider(data-aos="zoom-in")
              SlyderA(tipo="b")
                .row.justify-content-center.align-items-center
                  .col-xl-6.mb-4
                    h4 Grupo vistas: modo de lectura
                    p Permite optimizar el documento para su lectura al ocultar herramientas innecesarias, facilitando la revisión del contenido sin distracciones. Estas son:
                    ul.fa-ul.estilo___ul.mb-0
                      li.mb-0
                        span.fa-li
                          i.fas.fa-check-circle
                        | #[b Diseño de impresión]: vista del documento para impresión.
                      li.mb-0
                        span.fa-li
                          i.fas.fa-check-circle
                        | #[b Diseño web]: vista como página web.
                      li.mb-0
                        span.fa-li
                          i.fas.fa-check-circle
                        | #[b Esquema]: organización por niveles.
                      li.mb-0
                        span.fa-li
                          i.fas.fa-check-circle
                        | #[b Borrador]: edición rápida sin formato completo.
                  .col-xl-6
                    figure
                      img(src='@/assets/curso/temas/img92.png', alt='' style="max-width: 500px").m-auto
                .row.justify-content-center.align-items-center
                  .col-xl-6.mb-4
                    h4 Grupo inmersivo
                    p Permite mejorar la experiencia de lectura. Dentro de este se encuentran.
                    ul.fa-ul.estilo___ul.mb-0
                      li.mb-0
                        span.fa-li
                          i.fas.fa-check-circle
                        | #[b Concentración]: ocultar elementos para enfocarse en el texto.
                      li.mb-0
                        span.fa-li
                          i.fas.fa-check-circle
                        | #[b Lector inmersivo]: facilitar la lectura mediante herramientas de accesibilidad.
                  .col-xl-6
                    figure
                      img(src='@/assets/curso/temas/img93.png', alt='' style="max-width: 500px").m-auto
                .row.justify-content-center.align-items-center
                  .col-xl-6.mb-4
                    h4 Grupo movimiento de página
                    p Permite definir cómo se desplaza el documento.
                    ul.fa-ul.estilo___ul.mb-0
                      li.mb-0
                        span.fa-li
                          i.fas.fa-check-circle
                        | #[b Vertical]: desplazamiento tradicional hacia abajo.
                      li.mb-0
                        span.fa-li
                          i.fas.fa-check-circle
                        | #[b En paralelo]: visualizar páginas una junto a otra.
                  .col-xl-6
                    figure
                      img(src='@/assets/curso/temas/img94.png', alt='' style="max-width: 500px").m-auto
                .row.justify-content-center.align-items-center
                  .col-xl-6.mb-4
                    h4 Grupo mostrar
                    p Permite visualizar elementos adicionales. Sus funciones son:
                    ul.fa-ul.estilo___ul.mb-3
                      li.mb-0
                        span.fa-li
                          i.fas.fa-check-circle
                        | Mostrar regla.
                      li.mb-0
                        span.fa-li
                          i.fas.fa-check-circle
                        | Mostrar líneas de cuadrícula.
                      li.mb-0
                        span.fa-li
                          i.fas.fa-check-circle
                        | Mostrar panel de navegación.
                    p.mb-0 El panel de navegación permite desplazarse rápidamente entre títulos.
                  .col-xl-6
                    figure
                      img(src='@/assets/curso/temas/img95.png', alt='' style="max-width: 500px").m-auto
                .row.justify-content-center.align-items-center
                  .col-xl-6.mb-4
                    h4 Grupo zoom
                    p Permite ajustar el tamaño de visualización. Estas son:
                    ul.fa-ul.estilo___ul.mb-0
                      li.mb-0
                        span.fa-li
                          i.fas.fa-check-circle
                        | #[b Zoom]: acercar o alejar el documento. 
                      li.mb-0
                        span.fa-li
                          i.fas.fa-check-circle
                        | #[b 100 %]: restablecer tamaño original. 
                  .col-xl-6
                    figure
                      img(src='@/assets/curso/temas/img96.png', alt='' style="max-width: 500px").m-auto
                .row.justify-content-center.align-items-center
                  .col-xl-6.mb-4
                    h4 Grupo ventana
                    p Permite gestionar múltiples documentos. Sus funciones:
                    ul.fa-ul.estilo___ul.mb-3
                      li.mb-0
                        span.fa-li
                          i.fas.fa-check-circle
                        | Abrir nueva ventana.
                      li.mb-0
                        span.fa-li
                          i.fas.fa-check-circle
                        | Organizar ventanas.
                      li.mb-0
                        span.fa-li
                          i.fas.fa-check-circle
                        | Dividir documento.
                      li.mb-0
                        span.fa-li
                          i.fas.fa-check-circle
                        | Cambiar entre ventanas. 
                    p.mb-0 Se utiliza cuando se trabaja con varios documentos simultáneamente.
                  .col-xl-6
                    figure
                      img(src='@/assets/curso/temas/img97.png', alt='' style="max-width: 500px").m-auto
                .row.justify-content-center.align-items-center
                  .col-xl-6.mb-4
                    h4 Herramientas adicionales
                    p Dentro de estas se encuentran las siguientes:
                    ul.fa-ul.estilo___ul.mb-0
                      li.mb-0
                        span.fa-li
                          i.fas.fa-check-circle
                        | #[b Macros]: permite automatizar tareas repetitivas.
                      li.mb-0
                        span.fa-li
                          i.fas.fa-check-circle
                        | #[b Propiedades]: permite visualizar información del documento.
                  .col-xl-6
                    figure
                      img(src='@/assets/curso/temas/img98.png', alt='' style="max-width: 500px").m-auto
    p.mb-0 La pestaña vista permite ajustar la visualización del documento para facilitar su edición, revisión y navegación, mejorando la productividad y eficiencia del usuario.
    <!------------------------------------------ SUBTEMA 5 ------------------------------------------>
    Separador
    #t_4_5.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 4.5 Integración de herramientas en el documento	
    p.mb-5 Integración de herramientas en el documento: proceso que permite utilizar de manera conjunta las diferentes funciones del procesador de texto para crear, organizar y presentar información de forma eficiente y coherente. Forman parte de esta las siguientes herramientas:
    .row.justify-content-center
      .col-xl-10
        AcordionA(tipo="a" clase-tarjeta="tarjeta acordeonA")(data-aos="zoom-in")
          .row(titulo="Creación de documentos").ajuste-cajaAcordion
            p La creación de documentos en un procesador de texto integra herramientas para redactar, organizar y presentar información de forma clara y estructurada, incluyendo el uso de formatos y la adecuada disposición del contenido.
            p.mb-3 La elaboración de documentos básicos consiste en crear archivos con texto organizado, incorporando títulos, subtítulos y párrafos, y se utiliza en trabajos académicos, informes sencillos y documentos administrativos.
          .row(titulo="Aplicación de formato de texto").ajuste-cajaAcordion
            p.mb-3 El formato de texto permite modificar la apariencia del contenido para mejorar su presentación, mediante cambios en tipo y tamaño de letra, así como el uso de estilos y color. Se utiliza para resaltar títulos y destacar información importante.
          .row(titulo="Formato de párrafo").ajuste-cajaAcordion
            p.mb-3 El formato de párrafo permite organizar el contenido del documento mediante la alineación, el interlineado, las listas y la sangría, mejorando la legibilidad y la estructura de la información.
          .row(titulo="Inserción y manejo de elementos").ajuste-cajaAcordion
            p.mb-3 Permite enriquecer el documento incorporando elementos visuales y estructurados como tablas, imágenes y gráficos, que organizan la información, facilitan la lectura y permiten representar datos de forma clara para su análisis.

</template>

<script>
export default {
  name: 'Tema4',
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
