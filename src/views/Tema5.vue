<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 5
      h1 Caso práctico	
    p.mb-5 En esta unidad se desarrollará un caso práctico que incluye todos los pasos requeridos para aplicar los conocimientos adquiridos en ofimática.    
    <!------------------------------------------ SUBTEMA 1 ------------------------------------------>
    #t_5_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 5.1 Descripción del caso
    .bloque-texto-g.bloque-texto-g--inverso.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-0(data-aos="zoom-in")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/img99.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Se requiere elaborar un informe académico utilizando Microsoft Word, aplicando todas las herramientas vistas durante el componente formativo. El documento debe presentar una estructura organizada, incluir elementos visuales y aplicar formatos adecuados que permitan una presentación profesional.
    <!------------------------------------------ SUBTEMA 2 ------------------------------------------>
    Separador
    #t_5_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 5.2 Objetivo del caso práctico
    .row.justify-content-center.mb-0
      .col-xl-8
        .box___style_2.fit___box_2(data-aos="zoom-in")
          p Aplicar las herramientas del procesador de texto para crear un documento completo que integre:
          ul.fa-ul.estilo___ul.mb-0
            li.mb-0
              span.fa-li
                i.fas.fa-check-circle
              |  Formato de texto y párrafo. 
            li.mb-0
              span.fa-li
                i.fas.fa-check-circle
              |  Inserción de elementos (tablas, imágenes, gráficos).
            li.mb-0
              span.fa-li
                i.fas.fa-check-circle
              |  Uso de estilos.
            li.mb-0
              span.fa-li
                i.fas.fa-check-circle
              |  Organización estructurada del contenido.
            li.mb-0
              span.fa-li
                i.fas.fa-check-circle
              |  Herramientas de revisión y presentación.
    <!------------------------------------------ SUBTEMA 3 ------------------------------------------>
    Separador
    #t_5_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 5.3 Organización de la información	
    p.mb-0 La organización de la información consiste en estructurar el documento de manera lógica, definiendo las secciones principales como introducción, desarrollo y conclusión, así como la distribución adecuada de títulos, subtítulos y contenido.
    <!------------------------------------------ SUBTEMA 4 ------------------------------------------>
    Separador
    #t_5_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 5.4 Desarrollo del caso práctico
    p.mb-5 A continuación, se presenta el desarrollo del caso:
    .row.justify-content-center
      .col-lg-10
        PasosA.color-acento-contenido(tipo="n")
          .row.align-items-center
            .col-lg.mb-4.mb-lg-0
              h3 Creación del documento
              p.mb-0 Se inicia creando un nuevo documento en Microsoft Word, asignando un nombre adecuado y guardándolo en una ubicación específica.
            .col-auto(data-aos="zoom-in")
              figure
                img(src='@/assets/curso/temas/img100.png', alt='' style="width: 300px").m-auto
          .row.align-items-center
            .col-auto.mb-4.mb-lg-0(data-aos="zoom-in")
              figure
                img(src='@/assets/curso/temas/img101.png', alt='' style="width: 300px").m-auto
            .col-lg.fit___pasosA-left
              h3 Elaboración de la portada
              p Se inserta una portada utilizando la herramienta de la pestaña Insertar, incluyendo:
              ul.fa-ul.estilo___ul.mb-3
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  |  Título del documento.
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  |  Nombre del autor.
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  |  Fecha. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  |  Institución. 
              p.mb-0 Esto permite dar una presentación formal al documento.
          .row.align-items-center
            .col-lg.mb-4.mb-lg-0
              h3 Redacción del contenido
              p Se desarrolla el documento incluyendo:
              ul.fa-ul.estilo___ul.mb-3
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  |  Introducción.
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  |  Desarrollo.
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  |  Conclusión. 
              p Aplicando:
              ul.fa-ul.estilo___ul.mb-0
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  |  Alineación justificada.
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  |  Interlineado adecuado. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  |  Uso correcto de párrafos. 
            .col-auto(data-aos="zoom-in")
              figure
                img(src='@/assets/curso/temas/img102.png', alt='' style="width: 300px").m-auto
          .row.align-items-center
            .col-auto.mb-4.mb-lg-0(data-aos="zoom-in")
              figure
                img(src='@/assets/curso/temas/img103.png', alt='' style="width: 300px").m-auto
            .col-lg.fit___pasosA-left
              h3 Aplicación de formato de texto
              p Se aplican herramientas de la pestaña Inicio:
              ul.fa-ul.estilo___ul.mb-3
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  |  Negrita para títulos.
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  |  Cursiva para resaltar información. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  |  Cambio de tamaño y tipo de letra.
              p.mb-0 Esto mejora la presentación del contenido.
          .row.align-items-center
            .col-lg.mb-4.mb-lg-0
              h3 Uso de estilos
              p Se aplican estilos como:
              ul.fa-ul.estilo___ul.mb-3
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  |  Título 1.
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  |  Título 2.
              p.mb-0 Esto permite estructurar el documento y generar automáticamente la tabla de contenido.
            .col-auto(data-aos="zoom-in")
              figure
                img(src='@/assets/curso/temas/img104.png', alt='' style="width: 300px").m-auto
          .row.align-items-center
            .col-auto.mb-4.mb-lg-0(data-aos="zoom-in")
              figure
                img(src='@/assets/curso/temas/img105.png', alt='' style="width: 300px").m-auto
            .col-lg.fit___pasosA-left
              h3 Inserción de tabla
              p Se inserta una tabla para organizar información relevante.
              p Se aplica:
              ul.fa-ul.estilo___ul.mb-0
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  |  Bordes.
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Colores. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Alineación. 
          .row.align-items-center
            .col-lg.mb-4.mb-lg-0
              h3 Inserción de imagen
              p Se inserta una imagen relacionada con el contenido.
              p Se ajusta:
              ul.fa-ul.estilo___ul.mb-0
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  |  Tamaño.
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  |  Posición. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  |  Ajuste de texto. 
            .col-auto(data-aos="zoom-in")
              figure
                img(src='@/assets/curso/temas/img106.png', alt='' style="width: 300px").m-auto
          .row.align-items-center
            .col-auto.mb-4.mb-lg-0(data-aos="zoom-in")
              figure
                img(src='@/assets/curso/temas/img107.png', alt='' style="width: 300px").m-auto
            .col-lg.fit___pasosA-left
              h3 Inserción de gráfico
              p Se agrega un gráfico para representar datos.
              p.mb-0 Esto permite mejorar la interpretación de la información.
          .row.align-items-center
            .col-lg.mb-4.mb-lg-0
              h3 Encabezado y pie de página
              p Se insertan elementos como:
              ul.fa-ul.estilo___ul.mb-0
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  |  Encabezado con título del documento.
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  |  Numeración de páginas.
            .col-auto(data-aos="zoom-in")
              figure
                img(src='@/assets/curso/temas/img108.png', alt='' style="width: 300px").m-auto
          .row.align-items-center
            .col-auto.mb-4.mb-lg-0(data-aos="zoom-in")
              figure
                img(src='@/assets/curso/temas/img109.png', alt='' style="width: 300px").m-auto
            .col-lg.fit___pasosA-left
              h3 Tabla de contenido
              p Se genera automáticamente utilizando la pestaña Referencias.
              p.mb-0 Esto permite navegar fácilmente por el documento.
          .row.align-items-center
            .col-lg.mb-4.mb-lg-0
              h3 Revisión del documento
              p Se utilizan herramientas de la pestaña revisar:
              ul.fa-ul.estilo___ul.mb-0
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  |  Corrección ortográfica.
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  |  Comentarios.
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  |  Control de cambios. 
            .col-auto(data-aos="zoom-in")
              figure
                img(src='@/assets/curso/temas/img110.png', alt='' style="width: 300px").m-auto
          .row.align-items-center
            .col-auto.mb-4.mb-lg-0(data-aos="zoom-in")
              figure
                img(src='@/assets/curso/temas/img111.png', alt='' style="width: 300px").m-auto
            .col-lg.fit___pasosA-left
              h3 Configuración de diseño y disposición
              p Se ajustan:
              ul.fa-ul.estilo___ul.mb-3
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  |  Márgenes.
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  |  Orientación. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  |  Espaciado.
              p.mb-0 Esto garantiza una presentación adecuada.
          .row.align-items-center
            .col-lg.mb-4.mb-lg-0
              h3 Resultado esperado
              p El documento final debe:
              ul.fa-ul.estilo___ul.mb-0
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  |  Tener estructura clara.
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  |  Incluir elementos visuales. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  |  Presentar formato profesional. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  |  Ser fácil de leer y navegar.
            .col-auto(data-aos="zoom-in")
              figure
                img(src='@/assets/curso/temas/img112.png', alt='' style="width: 300px").m-auto
    <!------------------------------------------ SUBTEMA 5 ------------------------------------------>
    Separador
    #t_5_5.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 5.5 Presentación de resultados
    p.mb-0 La presentación de resultados consiste en la entrega del documento final, verificando que cumpla con los criterios de estructura, organización, formato y claridad. El documento debe evidenciar la correcta aplicación de las herramientas del procesador de texto y una presentación adecuada para su uso en contextos académicos o laborales.

</template>

<script>
export default {
  name: 'Tema5',
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
