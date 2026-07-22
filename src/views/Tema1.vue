<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 1
      h1 Conceptos básicos de ofimática
    p La ofimática reúne herramientas digitales que permiten gestionar, procesar y presentar información, facilitando la automatización de tareas y mejorando la productividad, la comunicación y la calidad del trabajo.
    p.mb-5 En esta unidad de aprendizaje se abordará la definición de la ofimática, su importancia, sus herramientas principales, su aplicación en contextos reales y los entornos digitales de trabajo.
    <!------------------------------------------ SUBTEMA 1 ------------------------------------------>
    #t_1_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.1 Definición de ofimática 
    p.mb-5 En primer lugar, se abordará la definición de ofimática y la importancia.
    .box___style_3.mb-0(data-aos="zoom-in")
      .row.align-items-center
        .col-xl-auto
          figure
            img(src='@/assets/curso/temas/img1.png', alt='').m-auto
        .col-xl
          p.mb-0 La ofimática, resultado de la combinación de “oficina” e “informática”, comprende herramientas tecnológicas que automatizan y optimizan tareas como la elaboración de documentos, gestión de datos y comunicación. Facilita la creación, edición y distribución de información digital, integrando diversos recursos y promoviendo eficiencia y trabajo colaborativo.
    <!------------------------------------------ SUBTEMA 2 ------------------------------------------>
    Separador
    #t_1_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.2 Importancia en el entorno y laboral
    p.mb-5 El manejo de herramientas ofimáticas es una competencia clave en la actualidad, ya que facilita la gestión de la información. Su importancia en ámbitos académicos y laborales es la siguiente:
    .fondo___slider.mb-5
      .px-5
        .ajuste-slider(data-aos="zoom-in")
          SlyderA(tipo="b")
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Ámbito académico
                p En el ámbito académico, la ofimática permite:
                ul.fa-ul.estilo___ul.mb-0
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Elaborar trabajos escritos y proyectos de investigación.
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Organizar información de manera estructurada.
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Presentar resultados de forma clara y visual.
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Desarrollar habilidades digitales necesarias para la formación profesional.
              .col-xl-6
                figure
                  img(src='@/assets/curso/temas/img3.png', alt='' style="max-width: 500px").m-auto
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Entorno laboral
                p En el entorno laboral, facilita:
                ul.fa-ul.estilo___ul.mb-0
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | La elaboración de informes y documentos administrativos.
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | El análisis de datos para la toma de decisiones.
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | La comunicación efectiva de resultados.
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | La optimización de procesos mediante herramientas digitales.
              .col-xl-6
                figure
                  img(src='@/assets/curso/temas/img4.png', alt='' style="max-width: 500px").m-auto
    p.mb-0 El uso adecuado de estas herramientas mejora la productividad y fortalece la competitividad en el entorno laboral actual.
    <!------------------------------------------ SUBTEMA 3 ------------------------------------------>
    Separador
    #t_1_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.3 Herramientas ofimáticas principales
    p.mb-5 Las herramientas ofimáticas principales se utilizan para diferentes funciones dentro de la gestión de la información. Entre las más utilizadas se encuentran:
    .row.align-items-center.mb-5
      .col-xl-auto(data-aos="fade-right")
        figure.d-none.d-xl-block
          img(src="@/assets/curso/temas/img113.png", alt="" ).m-auto
      .col-xl
        AcordionA(tipo="a" clase-tarjeta="tarjeta acordeonA")(data-aos="fade-left")
          .row(titulo="Procesador de texto (Microsoft Word)").ajuste-cajaAcordion
            p.mb-3 Permite la creación y edición de documentos escritos. Sus principales funciones incluyen:
            ul.fa-ul.mb-0
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Redacción de textos.
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Aplicación de formato.
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Inserción de tablas, imágenes y gráficos.
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Elaboración de documentos formales.
          .row(titulo="Hoja de cálculo (Microsoft Excel)").ajuste-cajaAcordion
            p.mb-3 Se utiliza para el manejo y análisis de datos. Sus funcionalidades permiten:
            ul.fa-ul.mb-0
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Realizar cálculos mediante fórmulas.
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Organizar información en tablas.
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Generar gráficos.
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Analizar datos para la toma de decisiones.
          .row(titulo="Presentador de diapositivas (Microsoft PowerPoint)").ajuste-cajaAcordion
            p.mb-3 Permite diseñar presentaciones visuales para comunicar información de manera clara. Se utiliza para:
            ul.fa-ul.mb-0
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Exponer ideas.
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Presentar resultados.
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Integrar texto, imágenes y gráficos.
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Aplicar animaciones y efectos visuales.
    p.mb-0 Estas herramientas funcionan de manera complementaria, permitiendo integrar diferentes tipos de información en un mismo flujo de trabajo.
    <!------------------------------------------ SUBTEMA 4 ------------------------------------------>
    Separador
    #t_1_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.4 Aplicación de la ofimática en contextos reales
    p.mb-5 La ofimática se utiliza en múltiples contextos, donde permite resolver necesidades específicas relacionadas con la gestión de la información. Su aplicación se destaca principalmente en:
    .row.justify-content-center.mb-5
      .col-xl-4.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
        .box___style_4.h-100
          .row.justify-content-center.mb-3
            .col-12
              figure.mb-4
                img(src='@/assets/curso/temas/img5.png', alt="" ).m-auto
            h4.text-center Contexto académico
            p Un estudiante puede utilizar herramientas ofimáticas para:
            ul.fa-ul.estilo___ul_2.mb-3
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Redactar un informe en Word.
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Analizar datos en Excel.
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Presentar resultados en PowerPoint.
      .col-xl-4.col-md-9(data-aos="fade-left")
        .box___style_4.h-100
          .row.justify-content-center.mb-3
            .col-12
              figure.mb-4
                img(src='@/assets/curso/temas/img6.png', alt="" ).m-auto
            h4.text-center Contexto laboral
            p Estas herramientas permiten:
            ul.fa-ul.estilo___ul_2.mb-3
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Elaborar reportes administrativos.
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Gestionar bases de datos.
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Presentar información a equipos de trabajo o clientes.
    .row.justify-content-center.mb-5
      .col-xl-8
        .box___style_2.fit___box_2(data-aos="zoom-in")
          p Un ejemplo claro de aplicación es el desarrollo de un informe empresarial, donde se integran diferentes herramientas:
          ul.fa-ul.estilo___ul.mb-0
            li.mb-0
              span.fa-li
                i.fas.fa-check-circle
              |  Se redacta el documento en Word.
            li.mb-0
              span.fa-li
                i.fas.fa-check-circle
              | Se analizan los datos en Excel.
            li.mb-0
              span.fa-li
                i.fas.fa-check-circle
              | Se presentan los resultados en PowerPoint.
    p.mb-0 Este uso integrado demuestra que la ofimática no se limita al manejo individual de herramientas, sino que implica la capacidad de combinarlas para resolver problemas reales de manera eficiente.
    <!------------------------------------------ SUBTEMA 5 ------------------------------------------>
    Separador
    #t_1_5.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.5 Entornos digitales de trabajo
    p Los entornos digitales de trabajo hacen referencia a los espacios virtuales en los que se desarrollan actividades académicas y laborales mediante el uso de herramientas tecnológicas. 
    p.mb-5 En el siguiente pódcast se presentan los aspectos clave de los entornos digitales de trabajo y su importancia en contextos académicos y laborales. Se invita al aprendiz a escucharlo para fortalecer su comprensión.
    .row.align-items-center.m-0.mb-0
      .col-xl
        .row.align-items-center.justify-content-center.box___podcast(data-aos="zoom-in")
          .col-auto.mb-4.mb-lg-0
            figure(data-aos="fade-right")
              img(src="@/assets/curso/temas/img7.svg" style="max-width: 220px").m-auto
          .col
            h4.mb-4 Pódcast
            TarjetaAudio.color-acento-contenido.mb-3(
              texto="Entornos digitales de trabajo: herramientas para la productividad"
              :audio="require('@/assets/componentes/audios/Entornos_digitales_trabajo_herramientas_productividad.mp3')"
              @audio-hover="mostrarIndicadorTarjetaAudio = false"
            )
      .col-xl-auto.d-none.d-xl-block
        figure(data-aos="fade-left")
          img(src="@/assets/curso/temas/img8.jpg" ).m-auto

</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    mostrarIndicadorTarjetaAudio: true,
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
