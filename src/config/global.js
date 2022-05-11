export default {
  global: {
    componenteFormativo:
      'Actividades de documentación y entrega de <em>software</em> en proceso de implantación',
    descripcionCurso:
      'En este componente formativo se presentan los elementos que se incluyen en la documentación para la implantación de <em>software</em>. La fase final de puesta en marcha de un proyecto de <em>software</em> corresponde a la configuración, instalación e integración del <em>software</em> y del <em>hardware</em> como componentes esenciales del montaje en las plataformas, además, de los componentes desarrollados por parte del cliente o propietario.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
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
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Documentación de procesos de implantación',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Manuales técnicos',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Manuales de usuario',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Manuales de instalación',
            hash: 't_1_1',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Capacitación de usuarios',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Técnicas',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Plan de capacitación',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Videotutoriales',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Labores finales del proceso de implantación',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Pruebas y actas de entrega',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Mantenimiento de <em>software</em>',
            hash: 't_3_2',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Sintesis',
        nombreRuta: 'sintesis',
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
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
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
  referencias: [
    {
      referencia:
        'Aisemberg, L. (2021). La capacitación en el proceso de implementación de un sistema. ',
      link:
        'https://www.evaluandosoftware.com/la-capacitacion-en-el-proceso-de-implementacion-de-un-sistema/',
    },
    {
      referencia:
        'Edgepoint learning. (2020). How to train employees on a new system or technology: 5 ',
      link:
        'https://www.edgepointlearning.com/blog/how-to-train-employees-on-new-system/',
    },
    {
      referencia:
        'Da Silva, D. (2017). Plan de capacitación: organiza, idea y aplica en tu negocio. ',
      link:
        'https://www.zendesk.com.mx/blog/plan-de-capacitacion/#:~:text=Un%20plan%20o%20programa%20de,de%20actividades%20te%C3%B3ricas%20o%20pr%C3%A1cticas',
    },
    {
      referencia:
        'DNP. (2020). Guía para la elaboración del manual de usuario de los sistemas de información. ',
      link:
        'https://colaboracion.dnp.gov.co/CDTI/Oficina%20Informatica/Sistemas%20de%20informaci%C3%B3n/Gu%C3%ADas%20Formatos%20Plantillas/Gu%C3%ADa%20para%20la%20Elaboraci%C3%B3n%20del%20Manual%20del%20Usuario%20del%20Sistema.pdf?#:~:text=El%20manual%20de%20usuario%20es,a%20los%20problemas%20m%C3%A1s%20comunes',
    },
    {
      referencia: 'Eslabón. (2019). Tipos y técnicas de capacitación. ',
      link:
        'https://www.eslabon.com.mx/es/articulo/173-tipos-y-tecnicas-de-capacitacion',
    },
    {
      referencia:
        'Mejía, J. (2019). Cómo hacer videotutoriales. Las mejores herramientas y programas gratis. ',
      link:
        'https://www.juancmejia.com/y-bloggers-invitados/como-hacer-videotutoriales-las-mejores-herramientas-y-programas-gratis/',
    },
    {
      referencia:
        'MinTIC. (2018). G.SIS.03 Guía para la construcción del catálogo de sistemas de información. MinTIC. ',
      link: 'https://mintic.gov.co/arquitecturati/630/w3-article-75551.html',
    },
    {
      referencia:
        'Ugur, A. (2009). How to write a software installation guide. ',
      link:
        'https://www.technicalcommunicationcenter.com/online-classes/how-to-write-a-software-installation-guide/',
    },
  ],
  glosario: [
    {
      termino: 'Despliegue',
      significado:
        'Proceso de puesta en marcha o ejecución de <em>software</em>.',
    },
    {
      termino: 'ERP',
      significado:
        ' <em>Enterprise Resource Planning</em> (<em>software</em> de planeación de recursos empresariales).',
    },
    {
      termino: '<em>Frameworks</em>',
      significado: 'Marco de trabajo para llevar a cabo un proyecto.',
    },
    {
      termino: '<em>Product backlog</em>',
      significado: 'Conjunto de requerimientos a resolver.',
    },
    {
      termino: '<em>Rollback</em>',
      significado: 'Marcha atrás de algún proceso o actividad.',
    },
    {
      termino: '<em>Scripts</em>',
      significado:
        'Conjunto de instrucciones para crear objetos de bases de datos.',
    },
  ],
  complementario: [
    {
      texto: 'Castillo, J. (2017). <em>Integración de sistemas</em>.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=V9YM9NeP1_s',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Mario Fernando Meneses Calvache',
        cargo: 'Experto temático',
        centro:
          'Centro de Teleinformática y Producción Industrial - Regional Cauca',
      },
      {
        nombre: 'Adriana López',
        cargo: 'Diseñadora Instruccional',
        centro:
          'Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital',
      },
      {
        nombre: 'Ana Catalina Córdoba Sus',
        cargo: 'Revisora metodológica y pedagógica',
        centro:
          'Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital',
      },
      {
        nombre: 'Carlos Hernán Muñoz',
        cargo: 'Experto temático',
        centro:
          'Centro de Teleinformática y Producción Industrial - Regional Cauca',
      },
      {
        nombre: 'María Fernanda Chacón Castro',
        cargo: 'Diseñadora instruccional',
        centro: 'Centro de Gestión Industrial - Regional Distrito Capital',
      },
      {
        nombre: 'Silvia Milena Sequeda Cárdenas',
        cargo: 'Asesora metodológica',
        centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
      },
      {
        nombre: 'Julia Isabel Roberto',
        cargo: 'Correctora de estilo',
        centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Edison Eduardo Mantilla Cuadros',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Jhon Jairo Urueta Alvarez',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
