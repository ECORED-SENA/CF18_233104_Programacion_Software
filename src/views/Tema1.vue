<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span(style="color: #fff") 1
      h1 Documentación de procesos de implantación
    p.mb-5 Es fundamental porque permite realizar modificaciones necesarias al proyecto sin grandes complicaciones, debido a que en estos documentos se registra todo lo que ocurre en este proceso, desde las especificaciones hasta las actas de entrega, además de ser un instrumento para comunicar los detalles no tan obvios del sistema.
    .row.justify-content-center.mb-5
      .col-lg-10
        .cajon.color-acento-contenido.p-4
          p La documentación es el registro de todos los pasos necesarios “cómo” se realizan; el desarrollo de software es esencialmente un grupo de procesos interrelacionados, por lo cual es importante llevar una correcta documentación de los procesos en los formatos establecidos.
    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in-up")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema1/img1.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Este proceso de implantación es la última fase dentro de la aplicación de una metodología para implementar un proyecto que antes debió considerar una fase de prueba. Aunque todas las labores para llegar a este estado se han realizado arduamente, esta fase de implementación puede considerarse como la más compleja. 
    p Sin embargo, así como en los niveles de construcción y prueba, el grado de dificultad depende de las características tecnológicas utilizadas, en la fase de implementación se apunta hacia el uso de un producto realizado con estándares, con el fin de reducir significativamente los posibles riesgos, de manera que la aplicación se ejecute más fácilmente.
    p.mb-5 En un proceso de implantación intervienen diferentes tipos de usuario, por lo que se requiere documentar este proceso por medio de manuales para cada proceso:
    .row.mb-5(data-aos="zoom-in")
      .col-12.p-5.bg-color1
        figure
          img(src='@/assets/curso/tema1/img2.png').m-auto
    p Así, los manuales de usuario y técnicos comprenden el sistema en conjunto, de manera que permiten establecer la capacitación y transferencia de conocimiento. Se recomienda que dicho proceso se lleve a cabo prestando la máxima atención a los detalles, además de determinar una táctica para la implantación manifestada en un plan completo de administración del proyecto, que fije las acciones requeridas, incluso para la verificación de la utilización de nuevas tecnologías.
    p.mb-5 A continuación se presentan los pasos de una estrategia de implantación unida a su correspondiente documentación:
    .tarjeta.tarjeta--gris.p-4.mb-5
      LineaTiempoC.color-acento-contenido(text-small)
        .row(titulo="1").align-items-center.justify-content-center
          .col-lg-3.mb-4.mb-lg-0
            figure
              img(src='@/assets/curso/tema1/img1.svg' style="width: 250px").m-auto
          .col-lg-7
            p.mb-0 Conferir la responsabilidad de la implantación a un comité técnico y a uno administrativo que resulten apropiados.
        .row(titulo="2").align-items-center.justify-content-center
          .col-lg-3.mb-4.mb-lg-0
            figure
              img(src='@/assets/curso/tema1/img2.svg' style="width: 250px").m-auto
          .col-lg-7
            p.mb-0 Recibir formalmente la versión definitiva del sistema, además de armar y desplegar el sistema según se requiera.
        .row(titulo="3").align-items-center.justify-content-center
          .col-lg-3.mb-4.mb-lg-0
            figure
              img(src='@/assets/curso/tema1/img3.svg' style="width: 250px").m-auto
          .col-lg-7
            p.mb-0 Conducir las pruebas finales de todos los elementos de la versión definitiva e introducir los ajustes que resulten necesarios. Importante probar repetidamente cualquier cambio.
        .row(titulo="4").align-items-center.justify-content-center
          .col-lg-3.mb-4.mb-lg-0
            figure
              img(src='@/assets/curso/tema1/img4.svg' style="width: 250px").m-auto
          .col-lg-7
            p.mb-0 Preparar la documentación necesaria, entre los que se mencionan los manuales técnicos, de usuario y de materiales de capacitación. También, reclutar o designar al personal que operará el sistema.
        .row(titulo="5").align-items-center.justify-content-center
          .col-lg-3.mb-4.mb-lg-0
            figure
              img(src='@/assets/curso/tema1/img5.svg' style="width: 250px").m-auto
          .col-lg-7
            p.mb-0 Capacitar a los usuarios sobre el funcionamiento del nuevo sistema y de ser el caso, conducir campañas de información masiva.
        .row(titulo="6").align-items-center.justify-content-center
          .col-lg-3.mb-4.mb-lg-0
            figure
              img(src='@/assets/curso/tema1/img6.svg' style="width: 250px").m-auto
          .col-lg-7
            p.mb-0 Generar respaldos de los programas e información del sistema según se requiera, además de controlar cualquier proceso de actualización, asegurándose de que se estén utilizando los equipos y programas apropiados.
        .row(titulo="7").align-items-center.justify-content-center
          .col-lg-3.mb-4.mb-lg-0
            figure
              img(src='@/assets/curso/tema1/img7.svg' style="width: 250px").m-auto
          .col-lg-7
            p.mb-0 De ser necesario, asegurar que se encuentren disponibles los sistemas de respaldo. También es importante asegurar que se cuente con fuentes alternas de energía, si es el caso.
        .row(titulo="8").align-items-center.justify-content-center
          .col-lg-3.mb-4.mb-lg-0
            figure
              img(src='@/assets/curso/tema1/img8.svg' style="width: 250px").m-auto
          .col-lg-7
            p.mb-0 Asegurar que se cuente con equipos técnicos y de mantenimiento durante la operación para garantizar el éxito en su operación y respaldar la información según se requiera.
        .row(titulo="9").align-items-center.justify-content-center
          .col-lg-3.mb-4.mb-lg-0
            figure
              img(src='@/assets/curso/tema1/img9.svg' style="width: 250px").m-auto
          .col-lg-7
            p.mb-0 Evaluar la operación del sistema y tener reuniones informativas con los usuarios, además de preparar propuestas para mejorar o reutilizar el sistema.
        .row(titulo="10").align-items-center.justify-content-center
          .col-lg-3.mb-4.mb-lg-0
            figure
              img(src='@/assets/curso/tema1/img10.svg' style="width: 250px").m-auto
          .col-lg-7
            p.mb-0 Dar el mantenimiento al sistema según se requiera y aplicar cualquier mejora aprobada.
    .row.justify-content-center
      .col-lg-10
        p.mb-5.text-center Asimismo, es aconsejable enmarcar estos pasos dentro de los conceptos de impacto organizacional, infraestructura, adecuaciones y capacitación, vea en qué consiste cada uno:
    .row.mb-5(data-aos="zoom-in-up")
      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/tema1/img4.png' alt='AvatarTop')
          .tarjeta.color-primario
            .p-4
              h3.text-center Impacto organizacional
              p Se debe vencer la resistencia natural al cambio en las personas, por lo que se promueve:
              ul.lista-ul
                li 
                  i.fas.fa-database(style="color: #F7CB50")
                  | Gestión al cambio.
                li 
                  i.fas.fa-database(style="color: #F7CB50")
                  | Motivación.
                li 
                  i.fas.fa-database(style="color: #F7CB50")
                  | Comunicación.
      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/tema1/img4.png' alt='AvatarTop')
          .tarjeta.color-primario
            .p-4
              h3.text-center Infraestructura
              p Debe soportar la nueva implementación:
              ul.lista-ul
                li 
                  i.fas.fa-database(style="color: #F7CB50")
                  | Equipos, redes, servidor, aplicación, base de datos.
                li 
                  i.fas.fa-database(style="color: #F7CB50")
                  | 
                  p.mb-0 Despliegue del #[i software].
                li 
                  i.fas.fa-database(style="color: #F7CB50")
                  | 
                  p.mb-0 Pruebas y #[i tuning].
                li 
                  i.fas.fa-database(style="color: #F7CB50")
                  | Perfiles de usuario.
      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/tema1/img5.png' alt='AvatarTop')
          .tarjeta.color-primario
            .p-4
              h3.text-center Adecuaciones
              p Garantiza el funcionamiento del proceso para la mitigación de riesgos y en caso de ser necesario se debe llevar a cabo una depuración de datos o una optimización de procesos.
      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/tema1/img6.png' alt='AvatarTop')
          .tarjeta.color-primario
            .p-4
              h3.text-center Capacitación
              p La capacitación a usuarios se guía preferiblemente por el uso de un prototipo, en el que los usuarios pueden ejecutar sus prácticas con total libertad y sin miedo a equivocarse.
    #t_1_1
    .titulo-segundo.color-acento-contenido
      h2 1.1 Manuales técnicos
    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in-up")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema1/img7.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 En una solución de software o de un sistema de información por procesamiento electrónico de datos, los #[b manuales técnicos] tienen el objetivo de mostrar, informar, esclarecer las estructuras que conforman la aplicación y cómo fue construida. Se dirige, especialmente, al personal técnico: desarrolladores de software, técnicos en sistemas, ingenieros de infraestructura y redes, arquitectos de software e ingenieros de pruebas, entre otros, quienes manejan la aplicación o el componente formativo.
    .row.justify-content-center.mb-5
      .col-lg-10.p-4.bg-color8(data-aos="zoom-in")
        .row.align-items-center
          .col-lg-2.mb-4.mb-lg-0
            figure(data-aos="zoom-in-up")
              img(src='@/assets/curso/tema1/img22.svg' style="width: 70px").m-auto
          .col-lg-10
            p Se recomienda que en su estructura se presenten los siguientes aspectos:
            .row.justify-content-around
              .col-lg-5.bg-color9.mb-4.mb-lg-0
                ul.lista-ul.mt-3
                  li 
                    i.fas.fa-database(style="color: #F7CB50")
                    |
                    p.mb-0.text-small #[b El objetivo y alcance del sistema.]
              .col-lg-5.bg-color9
                ul.lista-ul.mt-3
                  li 
                    i.fas.fa-database(style="color: #F7CB50")
                    |
                    p.mb-0.text-small #[b Una descripción de la base de datos.]
    p.mb-5 Basados en el ciclo de vida del desarrollo de software que normalmente se aplica en la elaboración de los sistemas de información por procesamiento electrónico de datos, es de vital importancia que la documentación técnica y de operaciones de una organización se registre en el manual técnico, el cual llevará una secuencia lógica de implementación para la instalación, configuración y despliegue. Este debe describir como mínimo los siguientes elementos:
    .row.align-items-center.mb-5
      .col-lg-6.mb-4.mb-lg-0
        LineaTiempoD.color-secundario
          p(numero="1" titulo="Objetivos y alcances del sistema") Definir los objetivos del sistema y dividirlos tanto en generales como específicos, dependiendo de los componentes involucrados.
          p(numero="2" titulo="Diseño de reportes y pantallas") Utilizar ilustraciones estándar que faciliten el entendimiento del paso a paso de las actividades a realizar.
          p(numero="3" titulo="Prerequisitos") Dentro de los prerrequisitos de instalación del sistema se encuentran: sistema operativo de los servidores de aplicación y base de datos, marca y versión de la base de datos y de los servidores de aplicación, navegador, configuraciones de seguridad, contenedores, etc.
          p(numero="4" titulo="<em>Frameworks</em> y estándares") Nombres y versiones de los #[i frameworks] y estándares bajo los cuales está construido el sistema.
          p(numero="5" titulo="Diagramas")
            ul.lista-ul
              li 
                i.fas.fa-database(style="color: #F7CB50")
                | Diagramas de caso de uso del sistema.
              li 
                i.fas.fa-database(style="color: #F7CB50")
                | Diagramas ER: modelo entidad relación del sistema.
              li 
                i.fas.fa-database(style="color: #F7CB50")
                | Diagrama de componentes del sistema.
              li 
                i.fas.fa-database(style="color: #F7CB50")
                | Diagrama de servicios expuestos por el sistema.
              li 
                i.fas.fa-database(style="color: #F7CB50")
                | Diagrama de despliegue del sistema.
              li 
                i.fas.fa-database(style="color: #F7CB50")
                | Diagrama de las clases más relevantes del sistema.
              li 
                i.fas.fa-database(style="color: #F7CB50")
                | Diagrama de servicios expuestos por el sistema.
          p.text-small(numero="6" titulo="Diccionario de datos") Diccionario de datos del sistema.
          p.text-small(numero="7" titulo="<em>Scripts</em>") #[i Scripts] de instalación del sistema.
          p.text-small(numero="8" titulo="Referencias") Referenciar la ubicación en la que se encuentra la especificación en alguna de las siguientes formas.
            ul.lista-ul.mt-3
              li 
                i.fas.fa-database(style="color: #F7CB50")
                | Casos de uso del sistema.
              li 
                i.fas.fa-database(style="color: #F7CB50")
                | Historias de usuario.
              li 
                i.fas.fa-database(style="color: #F7CB50")
                | Documento de requerimientos.
              li 
                i.fas.fa-database(style="color: #F7CB50")
                |
                p Acumulado del producto (#[i product backlog] en la herramienta de Gestión de proyectos de desarrollo de #[i software]).
      .col-lg-6
        figure(data-aos="zoom-in-up")
          img(src='@/assets/curso/tema1/img8.png' style="width: 450px").m-auto
    .row.justify-content-center.mb-5
      .col-lg-10
        .cajon.color-acento-contenido.p-4
          p Al mismo tiempo es importante tener en cuenta que según el Ministerio TIC (2018), en este documento queda plasmada toda la información del proyecto de software, con una descripción bien detallada sobre las características técnicas y físicas de cada elemento; este manual va dirigido al administrador del sistema y a otros ingenieros para que puedan hacer un respectivo mantenimiento en caso de que sea necesario; estos también contendrán la siguiente información:
    .titulo-sexto.color-acento-contenido
      p.mb-0 #[b Tabla 1]. Manuales técnicos
    .tabla-b.color-acento-contenido.mb-5
      table
        tr(style="background-color: #F7CB50")
          th(style="width: 30%") Atributo
          th Descripción
        tr
          th Vulgar
          td Nombre completo del sistema de información.
        tr
          th Sigla
          td Sigla o nombre corto bajo el cual se conoce el sistema de información. Si aplica.
        tr
          th Descripción del sistema
          td Descripción funcional del sistema y los servicios que presta.
        tr
          th Versión
          td Versión actual y en producción del sistema de información.
        tr
          th Categoría
          td
            p Indique la categoría del sistema, de acuerdo con la clasificación del Marco de Referencia de Arquitectura Empresarial para la Gestión de TI en el Estado:
            p.mb-0 • Sistema misional
            p.mb-0 • Sistema de apoyo
            p.mb-0 • Portales digitales
            p.mb-0 • Sistema de direccionamiento estratégico
        tr
          th Fabricante
          td Compañía que construyó el sistema de información o nombre del desarrollador.
        tr
          th Fecha de vencimiento del soporte
          td Indique la fecha hasta la cual se tiene el contrato de mantenimiento o soporte.
        tr
          th Sistema operativo
          td Sistema(s) operativos(o) sobre los cuales funciona actualmente el sistema de información.
        tr
          th Lenguaje de programación
          td 
            p.mb-0 Lenguajes de programación y #[i frameworks] sobre los cuales fue construido el sistema de información. Ejemplos, Java 7, C#.Net #[i framework] 4.5, PHP 5.3, etc.
        tr
          th Plataforma de base de datos
          td Ejemplo, #[i Oracle], #[i SQL server], #[i Postgres], #[i MySQL], entre otros.
        tr
          th Documentación técnica y funcional
          td Indique la ubicación (URL) de la documentación detallada técnica y funcional del sistema (arquitectura, manuales, diseños, etc.).
        tr
          th Arquitectura tecnológica
          td #[i Stand alone], #[i Web], cliente servidor, #[i App] móvil, #[i software] as a service (nube), etc.
    .separador.mb-5
    #t_1_2
    .titulo-segundo.color-acento-contenido
      h2 1.2 Manuales de usuario
    p.mb-5 Después de conocer las características del manual técnico revise en qué consiste el manual de usuario y qué aspectos se deben tener en cuenta en su elaboración. Para conocer esta información consulte el siguiente video:
    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    p.mb-5 Entonces, recuerde que de acuerdo con la guía de evidencias y la guía técnica del dominio de sistemas de información que propenden por lograr una implementación exitosa del lineamiento, el manual de usuario debe contener o hacer referencia a los siguientes temas:
    figure.mb-5(data-aos="zoom-in-up")
      img(src='@/assets/curso/tema1/img12.svg' style="width: 750px").m-auto
    .separador.mb-5
    #t_1_3
    .titulo-segundo.color-acento-contenido
      h2 1.3 Manuales de instalación
    p.mb-5 Un manual de instalación de #[i software] corresponde a un documento técnico del paso a paso en orden secuencial y lógico, en donde se describe de manera detallada los componentes necesarios e instrucciones para instalar el #[i software].
    .bloque-texto-a.color-secundario.p-4.p-md-3.mb-5(data-aos="zoom-in-up")
      .row.m-0.align-items-center.justify-content-between
        .col-lg-4.mb-4.mb-lg-0
          figure.mb-5
            img(src='@/assets/curso/tema1/img9.png' style="width: 250px").m-auto
        .col-lg-8
          .bloque-texto-a__texto.p-4
            p Estas instrucciones normalmente deben ir acompañadas de material audiovisual de apoyo como imágenes, videos, gráficos, presentaciones, etc., que se toman preferiblemente de un proceso de instalación real que se ha ejecutado antes de acuerdo con los requisitos del sistema.
    p.mb-5 Estas instrucciones con apoyo gráfico son una guía para realizar el correcto funcionamiento de una aplicación, especialmente para el personal técnico. Asimismo, es necesario considerar los siguientes elementos para la instalación:
    .row.mb-5(data-aos="zoom-in")
      .col-lg-4.mb-4.mb-lg-0
        .row.bg-color2
          .col-12
            figure.mb-5
              img(src='@/assets/curso/tema1/img10.png' style="width: 150px").m-auto
            h3.text-center Componentes
            p Conjunto de elementos de #[i hardware], #[i software] e infraestructura de red requeridos por el sistema de información.
      .col-lg-4.mb-4.mb-lg-0
        .row.bg-color2
          .col-12
            figure.mb-5
              img(src='@/assets/curso/tema1/img11.png' style="width: 150px").m-auto
            h3.text-center Pasos de instalación
            p Se ordenan lógicamente para garantizar el funcionamiento del sistema, incluye comandos de ejecución, configuración y parametrización de datos.
      .col-lg-4
        .row.bg-color2
          .col-12
            figure.mb-5
              img(src='@/assets/curso/tema1/img12.png' style="width: 150px").m-auto
            h3.text-center #[i Rollback]
            p Definir el proceso de marcha atrás en la ejecución de alguno de los pasos, en caso de ser necesario.
    p.text-center.mb-5 Entonces, además de lo anterior #[b ¿qué otros componentes se incluyen en el manual de instalación?]
    .row.align-items-center.mb-5
      .col-auto
        figure
          img(src='@/assets/curso/tema1/img13.svg' style="width: 20px").m-auto
      .col-3
        p.mb-0.text-deco1 Requisitos del sistema
    p Se debe detallar qué tipo de #[i hardware] o #[i firmware] se necesita para instalar este #[i software], se especifica el sistema operativo Mac OS X o #[i Windows] 10 en el que puede funcionar. 
    p.mb-5 A continuación se presentan los requisitos mínimos para instalar el sistema operativo #[i Windows] 11 según #[i Microsoft] (2021):
    .titulo-sexto.color-acento-contenido
      p.mb-0 #[b Tabla 2]. Elementos de instalación
    .tabla-b.color-acento-contenido.mb-5
      table
        tr
          th(style="width: 15%")
            figure
              img(src='@/assets/curso/tema1/img14.svg' style="width: 30px").m-auto
          th(style="width: 20%") Procesador
          td
            p.mb-0 1 #[i giga Hertz] (GHz) o más rápido con 2 o más núcleos en un procesador de 64 #[i bits] compatible o sistema en un #[i chip] (SoC).
        tr
          th
            figure
              img(src='@/assets/curso/tema1/img15.svg' style="width: 30px").m-auto
          th RAM
          td 4 gigabytes (GB).
        tr
          th
            figure
              img(src='@/assets/curso/tema1/img16.svg' style="width: 30px").m-auto
          th Almacenamiento
          td
            p.mb-0 Dispositivo de almacenamiento de 64 GB o más. Nota: para más información, consulte abajo en “Más información sobre los requisitos de espacio de almacenamiento para mantener #[i Windows] 11 actualizado”.
        tr
          th
            figure
              img(src='@/assets/curso/tema1/img17.svg' style="width: 30px").m-auto
          th
            p.mb-0 #[b #[i Firmware] del sistema]
          td
            p.mb-0 UEFI, compatible con arranque seguro.
        tr
          th
            figure
              img(src='@/assets/curso/tema1/img18.svg' style="width: 30px").m-auto
          th Tarjeta gráfica
          td
            p.mb-0 Compatible con DirectX 12 o posterior con controlador WDDM 2.0.
        tr
          th
            figure
              img(src='@/assets/curso/tema1/img19.svg' style="width: 30px").m-auto
          th Pantalla
          td
            p.mb-0 Pantalla de alta definición (720p) de más de 9" en diagonal, con canal de 8 bits por color.
        tr
          th
            figure
              img(src='@/assets/curso/tema1/img20.svg' style="width: 30px").m-auto
          th
            p.mb-0 #[b Conexión a Internet y cuenta de #[i Microsoft]]
          td
            p #[i Windows] 11 #[i Home] requiere conexión a Internet y una cuenta de #[i Microsoft].
            p El cambio fuera de #[i Windows] 11 en modo S también requiere conexión a Internet.
            p.mb-0 Para todas las ediciones de #[i Windows] 11 se requiere acceso a Internet para poder realizar actualizaciones, así como para descargar y aprovechar algunas de las características. Para algunas características se requiere una cuenta de #[i Microsoft].
        tr
          th
            figure
              img(src='@/assets/curso/tema1/img21.svg' style="width: 30px").m-auto
          th TPM
          td
            p.mb-0 Módulo de plataforma segura (TPM) versión 2.0.
        tr
          th
          th
          td
            p #[i Windows] 11 Home requiere conexión a Internet y una cuenta de #[i Microsoft].
            p.mb-0 Para todas las ediciones de #[i Windows] 11 se requiere acceso a Internet para poder realizar actualizaciones, así como para descargar y aprovechar algunas de las características. Para algunas características se requiere una cuenta de #[i Microsoft].
    .row.align-items-center.mb-5
      .col-auto
        figure
          img(src='@/assets/curso/tema1/img13.svg' style="width: 20px").m-auto
      .col-10.col-lg-6
        p.mb-0.text-deco1 Descripción general de las características del sistema o del producto
    p.mb-5 Se describen las características básicas del #[i software] o del producto en cuestión, por lo general se usa una lista o una tabla.
    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in-up")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema1/img13.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Ejemplo, en un #[i software] de telefonía IP (comunicación), se debe indicar cuántas líneas admite el software, cuántos usuarios y contraseñas admite, el tipo de base de datos que necesita, cuántas zonas o particiones soporta, etc.
    p De acuerdo a UGUR (2009), son importantes los datos de contacto del desarrollador, de la empresa que creó la solución informática o del departamento de atención al cliente, dado el caso que se presente alguna duda relacionada con el producto, garantía, registro, etc.
    p.mb-5 También, en este apartado se incluye cualquier exención de responsabilidad legal, divulgaciones, advertencias de agencias gubernamentales oficiales, información de registro, etc.
    .row.align-items-center.mb-5
      .col-auto
        figure
          img(src='@/assets/curso/tema1/img13.svg' style="width: 20px").m-auto
      .col-4
        p.mb-0.text-deco1 Configuración mínima de inicio rápido
    p.mb-5 En algunos tipos de #[i software] se publica una guía de “inicio rápido” independiente, además se explica cómo identificar e interpretar cualquier sistema o códigos de #[i hardware] y números de serie que vienen con el producto. Así, se deben incluir gráficos del paso a paso de cómo instalar el #[i software] y mostrar las conexiones de cableado correctas, en caso de que se trate de alguna instalación física.
    .row.justify-content-center.mb-5
      .col-lg-10
        .cajon.color-acento-contenido.p-4
          p Si se realizan todas las sugerencias en este manual se fomentará la lealtad del cliente, ya que se generan altos niveles de satisfacción y se minimizan las llamadas al departamento de atención al cliente.
    .row.align-items-center.mb-5
      .col-auto
        figure
          img(src='@/assets/curso/tema1/img13.svg' style="width: 20px").m-auto
      .col-4
        p.mb-0.text-deco1 Configuraciones de instalación
    p Es común que un #[i software] de aplicación tenga una instalación “típica” y una “excepcional” o una “diseñada por el cliente”. En ocasiones, esta instalación también se denomina “implementación” en la documentación del producto.
    p.mb-5 A continuación se invita a conocer los componentes mínimos que se incluirán en la estructura de un manual de instalación:
    .row.justify-content-center
      .col-lg-4
        a.anexo.mb-4(:href="obtenerLink('downloads/Formato_instalacion.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p #[b Anexo]. Formato de instalación

</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
