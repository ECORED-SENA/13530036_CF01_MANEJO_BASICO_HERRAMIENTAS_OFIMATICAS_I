export default {
  global: {
    Name: 'Uso de herramientas ofimáticas – Microsoft Word',
    Description:
      'Este componente formativo permite reconocer, comprender y aplicar las herramientas del procesador de texto Microsoft Word, mediante el uso de sus funciones principales y herramientas de edición. Desarrolla habilidades para crear documentos formales, organizar información, integrar elementos visuales y presentar contenidos en contextos académicos y laborales.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.png'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.png'),
      },
      {
        clases: ['banner-principal-decorativo-4'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-4.png'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Conceptos básicos de ofimática',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Definición de ofimática ',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Importancia en el entorno y laboral',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Herramientas ofimáticas principales',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Aplicación de la ofimática en contextos reales',
            hash: 't_1_4',
          },
          {
            numero: '1.5',
            titulo: 'Entornos digitales de trabajo',
            hash: 't_1_5',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Procesador de texto – Microsoft Word',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Interfaz y entorno de trabajo',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Cinta de opciones y organización de herramientas',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Visualización del documento',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Navegación y uso básico del entorno',
            hash: 't_2_4',
          },
          {
            numero: '2.5',
            titulo: 'Accesibilidad y personalización básica	',
            hash: 't_2_5',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Pestañas principales del procesador de texto	',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Pestaña inicio',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Pestaña insertar',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Pestaña Dibujar	',
            hash: 't_3_3',
          },
          {
            numero: '3.4',
            titulo: 'Pestaña Diseño',
            hash: 't_3_4',
          },
          {
            numero: '3.5',
            titulo: 'Pestaña Disposición',
            hash: 't_3_5',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Pestañas avanzadas y de gestión del documento',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Pestaña referencias',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Pestañas correspondencia',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'Pestaña revisar',
            hash: 't_4_3',
          },
          {
            numero: '4.4',
            titulo: 'Pestaña vista',
            hash: 't_4_4',
          },
          {
            numero: '4.5',
            titulo: 'Integración de herramientas en el documento',
            hash: 't_4_5',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Caso práctico',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo: 'Descripción del caso',
            hash: 't_5_1',
          },
          {
            numero: '5.2',
            titulo: 'Objetivo del caso práctico',
            hash: 't_5_2',
          },
          {
            numero: '5.3',
            titulo: 'Organización de la información	',
            hash: 't_5_3',
          },
          {
            numero: '5.4',
            titulo: 'Desarrollo del caso práctico',
            hash: 't_5_4',
          },
          {
            numero: '5.5',
            titulo: 'Presentación de resultados',
            hash: 't_5_5',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  glosario: [
    {
      termino: 'Barra de herramientas',
      significado:
        'conjunto de opciones que permiten acceder rápidamente a funciones del programa.',
    },
    {
      termino: 'Documento',
      significado:
        'archivo digital que contiene información estructurada en texto, imágenes u otros elementos.',
    },
    {
      termino: 'Formato',
      significado:
        'conjunto de características visuales aplicadas al texto o al documento para mejorar su presentación.',
    },
    {
      termino: 'Gráfico',
      significado:
        'representación visual de datos que facilita su interpretación y análisis.',
    },
    {
      termino: 'Interfaz',
      significado:
        'medio de interacción entre el usuario y el programa que permite utilizar sus funciones.',
    },
    {
      termino: 'Ofimática',
      significado:
        'conjunto de herramientas informáticas utilizadas para crear, editar y gestionar información en entornos digitales.',
    },
    {
      termino: 'Párrafo',
      significado:
        'unidad de texto compuesta por varias oraciones que desarrollan una idea.',
    },
    {
      termino: 'Procesador de texto',
      significado:
        'programa informático que permite crear, editar y dar formato a documentos digitales.',
    },
    {
      termino: 'Tabla',
      significado:
        'estructura organizada en filas y columnas que permite presentar información de forma ordenada.',
    },
    {
      termino: 'WordArt',
      significado:
        'herramienta que permite aplicar efectos decorativos al texto dentro de un documento.',
    },
  ],
  referencias: [
    {
      referencia: 'Área, M. (2012). La educación en la sociedad digital.',
      link: '',
    },
    {
      referencia:
        'Cabero, J. (2006). Bases pedagógicas del e-learning. RUSC, 3(1). ',
      link: '',
    },
    {
      referencia:
        'Comisión Europea. (2020). DigComp 2.1: The Digital Competence Framework for Citizens.',
      link: 'https://publications.jrc.ec.europa.eu/repository/handle/JRC106281',
    },
    {
      referencia:
        'ESIC Business & Marketing School. (2023). ¿Qué es la ofimática y para qué sirve?. ',
      link:
        'https://www.esic.edu/business/que-es-la-ofimatica-para-que-sirve-c',
    },
    {
      referencia: 'Etecé, E. (2025). Interfaz. Concepto.',
      link: 'https://concepto.de/interfaz/',
    },
    {
      referencia: 'Etecé, E. (2025). Procesador de texto. Concepto.',
      link: 'https://concepto.de/procesador-de-texto/',
    },
    {
      referencia:
        'Instituto Nacional de Tecnologías Educativas y de Formación del Profesorado (INTEF). (s.f.). Competencia digital docente. ',
      link: 'https://intef.es',
    },
    {
      referencia:
        'Microsoft. (s.f.). Ayuda y aprendizaje de Word. Microsoft Support. ',
      link: 'https://support.microsoft.com/es-es/word',
    },
    {
      referencia:
        'Organización Internacional del Trabajo. (s.f.). Competencias digitales en el entorno laboral. ',
      link: 'https://www.ilo.org',
    },
    {
      referencia:
        'Real Academia Española. (s.f.). Interfaz. En Diccionario de la lengua española. ',
      link: 'https://dle.rae.es/interfaz',
    },
    {
      referencia:
        'UNESCO. (2019). Marco de competencias de los docentes en materia de TIC.',
      link: 'https://unesdoc.unesco.org/ark:/48223/pf0000371024 ',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo:
            'Profesional 06. Responsable del ecosistema virtual de recuersos educativos digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Olga Constanza Bermúdez Jaimes',
          cargo: 'Responsable de línea de producción Huila',
          centro: 'Dirección General',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Joinner Enrique Osorio Martinez',
          cargo: 'Experto temático',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Paula Marcela Vidal Quintero',
          cargo: 'Evaluadora instruccional',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Juan Jose Calderon Gutierrez',
          cargo: 'Diseñador de contenidos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Robinson Javier Ordoñez Barreiro',
          cargo: 'Desarrollador <i>full stack</i>',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Alejandro Delgado Acosta',
          cargo: 'Intérprete lenguaje de señas',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Cristhian Giovanni Gordillo Segura',
          cargo: 'Intérprete lenguaje de señas',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Juan Pablo Rojas Polania',
          cargo: 'Animador y productor audiovisual',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Carlos Eduardo Garavito Parada',
          cargo: 'Animador y productor audiovisual',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Maria Carolina Tamayo Lopez',
          cargo: 'Locución',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'German Acosta Ramos',
          cargo: 'Locución',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Fabio Armando Ortiz Reyes',
          cargo: 'Locución',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Aixa Natalia Sendoya Fernández',
          cargo: 'Validador de recursos educativos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Ricardo Oliveros Zambrano',
          cargo: 'Validador de recursos educativos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Anyerson Wilfredo Pizo Ossa',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
