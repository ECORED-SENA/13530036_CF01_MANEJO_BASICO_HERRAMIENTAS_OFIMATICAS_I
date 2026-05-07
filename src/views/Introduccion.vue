<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    .row.justify-content-center.align-items-center.mb-5
      .col-xl.mb-4.mb-lg-0
        .box___style_1(data-aos="zoom-in")
          .row.align-items-center
            .col-xl-auto
              figure
                img(src='@/assets/curso/intro/img1.jpg', alt='').m-auto
            .col-xl
              p.mb-0 En la actualidad, el uso del procesador de texto Microsoft Word es una competencia fundamental en ámbitos académicos, laborales y personales, debido a la necesidad de crear, organizar y presentar información de forma clara, estructurada y profesional. La digitalización ha optimizado la elaboración de documentos, facilitando la redacción, edición e integración de elementos visuales.
      .col-xl-auto.col-md-9(data-aos="fade-left")
        figure
          img(src='@/assets/curso/intro/img2.png', alt='').m-auto
    .row.justify-content-center.align-items-center
      .col-xl.mb-4.mb-lg-0
        .box___style_2(data-aos="zoom-in")
          p.mb-0 Este componente formativo aborda Microsoft Word desde una perspectiva práctica, centrada en el reconocimiento de su interfaz y el uso adecuado de sus herramientas para crear documentos formales. El aprendiz desarrolla habilidades para estructurar información, aplicar formatos pertinentes y mejorar la calidad de sus documentos mediante recursos funcionales.
      .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="fade-left")
        figure
          img(src='@/assets/curso/intro/img3.jpg', alt='').m-auto
      .col-xl
        figure.mb-3.d-none.d-xl-block(data-aos="zoom-in")
          img(src='@/assets/curso/intro/img4.svg', alt='' style="width: 77px")
        p.mb-0 El proceso de aprendizaje es progresivo: inicia con conceptos básicos y avanza hacia herramientas más complejas como tablas, imágenes, gráficos, estilos y automatización. Así, se fortalecen competencias para elaborar documentos profesionales, optimizar procesos y responder a las exigencias del entorno académico y laboral.

</template>

<script>
export default {
  name: 'Introduccion',
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
