<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 4
      h1 Pestañas avanzadas y de gestión del documento
    
    
    <!------------------------------------------ SUBTEMA 1 ------------------------------------------>
    Separador
    #t_4_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 4.1 Pestaña referencias


    

      
    <!------------------------------------------ SUBTEMA 2 ------------------------------------------>
    Separador
    #t_4_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 4.2 Pestañas correspondencia




    <!------------------------------------------ SUBTEMA 3 ------------------------------------------>
    Separador
    #t_4_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 4.3 Pestaña revisar	




    <!------------------------------------------ SUBTEMA 4 ------------------------------------------>
    Separador
    #t_4_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 4.4 Pestaña vista




    <!------------------------------------------ SUBTEMA 5 ------------------------------------------>
    Separador
    #t_4_5.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 4.5 Integración de herramientas en el documento	





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
