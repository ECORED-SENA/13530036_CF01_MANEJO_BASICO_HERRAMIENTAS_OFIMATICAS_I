<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
  
      #Actividad                
        <Actividad :cuestionario="cuestionario"/>
  
  </template>

<script>
import Actividad from 'ecored-pkg-fliz/plugin/components/actividad/Actividad.vue'
export default {
  name: 'ActividadDidactica',
  components: {
    Actividad,
  },
  data: () => ({
    cuestionario: {
      tema: 'Cuestionario sobre el uso del procesador de texto Microsoft Word',
      titulo: 'Cuestionario',
      introduccion:
        '<b> Objetivo:</b> evaluar la comprensión del aprendiz sobre las herramientas, funciones y aplicaciones del procesador de texto Microsoft Word, mediante la resolución de un cuestionario que permita identificar el nivel de apropiación de los conocimientos adquiridos en el componente formativo.',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO.',
      preguntas: [
        {
          id: 1,
          texto: '¿Cuál es el uso principal de Microsoft Word?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Procesa información numérica.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Crear documentos escritos.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Diseñar bases de datos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Analizar datos estadísticos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto: '¿Dónde se visualiza en nombre del archivo del documento?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Barra de estado.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Cinta de opciones.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Barra de títulos.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Panel lateral.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto: '¿En que parte se encuentran los comandos principales?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Barra de estado.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Area del documento.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Cinta de opciones.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Panel de navegación.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto: '¿Qué pestaña permite modificar el formato texto?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Insertar.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Revisar.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Vista.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Inicio.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto: '¿Cuál es la función del área de trabajo?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Redactar contenido.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Guardar el archivo.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Ejecutar contenido.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Mostrar opciones.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 6,
          texto: '¿Qué pestaña utiliza para agregar imágenes?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Inicio.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Insertar.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Diseño.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Revisar.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 7,
          texto: '¿Dónde se corrigen errores ortográficos?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Diseño.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Vista.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Insertar.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Revisar.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 8,
          texto: '¿Qué permite la pestaña disposición?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Configurar página.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Insertar objetos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Revisar texto.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Ver documento.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 9,
          texto: '¿Para qué utilizan las tablas en Word?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Insertar gráficos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Organizar datos.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Diseñar imágenes.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Editar texto.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 10,
          texto: '¿Qué herramienta aplica formatos prediseñados?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Estilos.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Tablas.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: '<i>Zoom.</i>',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Formas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 11,
          texto: '¿Dónde se insertan encabezados y pies de página?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Inicio.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Vista.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Insertar.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Diseño.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 12,
          texto: '¿Qué pestaña controla la visualización del documento?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Inicio.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Insertar.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Diseño.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Vista.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 13,
          texto: '¿Qué permite el control de cambios?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Registrar ediciones.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Insertar imágenes.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Modificar estilos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Crear tablas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 14,
          texto: '¿Cuál es el objetivo de los estilos?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Insertar gráficos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Crear tablas.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Guardar archivos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Unificar formato.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 15,
          texto: '¿Dónde se crea una tabla de contenido?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Insertar.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Referencias.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Revisar.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Vista.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 16,
          texto: '¿Para qué sirve un hipervínculo?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Insertar tablas.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Cambiar formato.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Crear enlaces.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Agregar imágenes.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 17,
          texto: '¿Dónde se agregan comentarios?.',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Inicio.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Insertar.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Vista.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Revisar.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 18,
          texto: '¿Qué muestra la barra de estado?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Información del documento.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Opciones de menú.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Herramientas activas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Diseño del texto.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 19,
          texto: '¿Qué permite la herramienta <em>zoom</em>?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Editar texto.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Insertar objetos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Cambiar formato.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Ajustar vista.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 20,
          texto: '¿Para que se utiliza Word en el trabajo?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Analizar datos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Crear documentos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Programar <em>software</em>.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Diseñar juegos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
