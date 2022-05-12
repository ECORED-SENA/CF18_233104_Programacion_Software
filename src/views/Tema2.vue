<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span(style="color: #fff") 2
      h1 Capacitación de usuarios
    p.mb-5 Para Aisemberg (2021) la capacitación es “la transferencia de conocimientos que se realiza durante todo el proceso de implementación de un sistema. Dicha transferencia de conocimiento debe realizarse a los integrantes del equipo de implementación, entendiendo como tal al conjunto de los usuarios del sistema y los consultores externos, relacionados con el proceso de implementación”.
    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in-up")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema2/img1.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 La capacitación se realiza mediante la recopilación de la mayor cantidad de información posible del sistema de información, primordialmente, se acude a los manuales técnicos y de usuario disponibles, por lo cual es muy importante estudiar las tecnologías involucradas descritas, según sea el caso y complementar con experiencias propias.
    .row.justify-content-center.mb-5
      .col-lg-8.mb-lg-0
        .tarjeta-avatar(data-aos="zoom-in")
          img(src='@/assets/curso/tema2/img1.svg' alt='AvatarTop')
          .tarjeta.color-acento-contenido
            .p-4
              p Por lo general existen dos tipos de usuario a quienes van dirigidas las capacitaciones:
              ul.lista-ul
                li 
                  i.fas.fa-database(style="color: #F7CB50")
                  | Usuarios operativos para los cuales se brinda el conocimiento de las funcionalidades de acuerdo con el área de negocio y las necesidades del cliente.
                li 
                  i.fas.fa-database(style="color: #F7CB50")
                  | Usuarios de orden consultor a quienes normalmente se les proporcionará el conocimiento de los procesos administrativos, de operación de las distintas áreas e incluso de nivel técnico para soportar.
    p.mb-5 Para llevar a cabo una buena capacitación Aisemberg (2021) hace las siguientes recomendaciones:
    .row.mb-5(data-aos="zoom-in-up")
      .col-lg-4.mb-4.mb-lg-0
        .row.bg-color3
          .col-12
            figure.mb-5
              img(src='@/assets/curso/tema2/img2.png' style="width: 150px").m-auto
            h3.text-center Líder de proyecto
            p Asignar un líder de proyecto (interno o externo) con experiencia en la ejecución de sistemas de gestión, que analice previamente y con detalle el proyecto que deberá tener incluido el plan de capacitación y sus plazos de realización.
      .col-lg-4.mb-4.mb-lg-0
        .row.bg-color3
          .col-12
            figure.mb-5
              img(src='@/assets/curso/tema2/img3.png' style="width: 150px").m-auto
            h3.text-center Personal especializado
            p Solicitar personal especializado para realizar un estudio de las capacidades y aptitudes del personal de la organización.
      .col-lg-4
        .row.bg-color3
          .col-12
            figure.mb-5
              img(src='@/assets/curso/tema2/img4.png' style="width: 150px").m-auto
            h3.text-center Director de proyecto
            p Nombrar un director de proyecto para asegurar el acompañamiento de la dirección, socializar con el equipo de trabajo la visión y los objetivos del negocio y definir los aspectos clave en los procesos de negocio de las distintas áreas involucradas.
    #t_2_1
    .titulo-segundo.color-acento-contenido
      h2 2.1 Técnicas
    .row.align-items-center.mb-5
      .col-lg-6.mb-4.mb-lg-0
        p Según Eslabón (2019)
        p Una de las grandes tareas a cargo de los departamentos de recursos humanos es realizar un seguimiento para conocer cuáles son las necesidades de capacitación dentro de una empresa o de un área de trabajo determinada, una buena organización debe ser capaz de determinar cuáles son las necesidades de capacitación de los colaboradores, para lograr diseñar los planes y programas que las satisfagan, contemplando los aspectos materiales y humanos necesarios.
        p De acuerdo con este concepto, es momento de preguntar ¿cómo se puede llevar a cabo una estrategia acertada de capacitación? 
        p.mb-0 Para ello, se requiere detectar las necesidades de capacitación, pero ¿a qué hace referencia este concepto?
      .col-lg-6
        figure(data-aos="zoom-in-up")
          img(src='@/assets/curso/tema2/img5.png' style="width: 450px").m-auto
    .row.justify-content-center.mb-5
      .col-lg-6
        .bloque-texto-b.color-secundario.p-4
          .bloque-texto-b__texto
            i.fas.fa-quote-left
            h4.mb-0 Eslabón (2019) sostiene que es el proceso orientado a la estructuración y desarrollo de planes o programas para el establecimiento y fortalecimiento de conocimientos o habilidades en los colaboradores de una organización, con la finalidad de aportar en el logro de los objetivos corporativos.
            i.fas.fa-quote-right
    p Cuando se precisan estas necesidades de capacitación es posible ejecutar satisfactoriamente las tareas y responsabilidades que le corresponde a cada uno de los empleados dentro de la organización, así como las limitaciones de la misma organización que pueden afectar el desempeño.
    p.mb-5 Existen dos tipos de necesidades de capacitación:
    .row.mb-5
      .col-12.p-5.bg-color1
        figure(data-aos="zoom-in")
          img(src='@/assets/curso/tema2/img6.png').m-auto
    .row.align-items-center.mb-5
      .col-auto
        figure
          img(src='@/assets/curso/tema1/img13.svg' style="width: 20px").m-auto
      .col-3
        p.mb-0.text-deco1 Tipos de capacitación
    p.mb-5 Las labores de capacitación se clasifican en los siguientes tipos:
    .row.mb-5
      .col-lg-3.p-4.bg-color4
        figure.mb-5
          img(src='@/assets/curso/tema2/img7.png' style="width: 150px").m-auto
        h4.text-center Aprendizaje pasivo
        p El participante es un receptor pasivo de lo que imparte el instructor, ya sea en forma directa o indirecta.
      .col-lg-3.p-4.bg-color5
        figure.mb-5
          img(src='@/assets/curso/tema2/img8.png' style="width: 150px").m-auto
        h4.text-center Aprendizaje activo
        p Exige que el participante piense y actúe para descubrir el conocimiento. El papel del instructor y los medios didácticos consisten solamente en facilitar, guiar y estimular el aprendizaje.
      .col-lg-3.p-4.bg-color4
        figure.mb-5
          img(src='@/assets/curso/tema2/img9.png' style="width: 150px").m-auto
        h4.text-center Capacitación grupal
        p Se proporciona a un grupo de participantes y la enseñanza se imparte en forma colectiva.
      .col-lg-3.p-4.bg-color5
        figure.mb-5
          img(src='@/assets/curso/tema2/img10.png' style="width: 150px").m-auto
        h4.text-center Capacitación individual
        p Se adapta a las características individuales de cada participante, considerando sus potencialidades y limitaciones.
    p.mb-5 Se recomienda analizar muy bien las necesidades y contar con la asesoría de un asesor experto, además, revisar antecedentes o experiencias anteriores para seleccionar el tipo de aprendizaje idóneo en cada caso.
    .row.align-items-center.mb-5
      .col-auto
        figure
          img(src='@/assets/curso/tema1/img13.svg' style="width: 20px").m-auto
      .col-3
        p.mb-0.text-deco1 Técnicas de capacitación
    p.mb-5 Después de clasificar e identificar la capacitación requerida es muy importante, desde el punto de vista metodológico, seleccionar la forma de presentarla, para lo cual se relacionan las siguientes técnicas que corresponden a mecanismos reconocidos y muy utilizados en diferentes organizaciones:
    SlyderB.mb-5(:datos="datosSlyder")
    .row.mb-5(data-aos="zoom-in-up")
      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/tema2/img17.png' alt='AvatarTop')
          .tarjeta.color-primario
            .p-4
              h3.text-center Capacitación organizacional
              p Programa formativo que se realiza mediante seminarios o talleres, con el objetivo de transmitir conocimientos útiles a todo el equipo humano. Importante contar con una plataforma para medir la eficacia de la formación y el progreso de los empleados, sus necesidades y puntos fuertes.
      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/tema2/img18.png' alt='AvatarTop')
          .tarjeta.color-primario
            .p-4
              h3.text-center Comunicación asertiva
              p Se aplica en casos de dificultad comunicativa entre líderes y colaboradores. Es común encontrar falla en las tareas por falta de comprensión de las reglas o por falta de comunicación entre el equipo.
      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/tema2/img19.png' alt='AvatarTop')
          .tarjeta.color-primario
            .p-4
              h3.text-center Formación en liderazgo
              p Identificar perfiles clave que sean líderes de un equipo, para guiar un proyecto, además de mediar, motivar y tomar decisiones complejas. Su objetivo se orienta a la gestión de personas, el manejo de conflictos, la administración de metas y el pensamiento crítico.
      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/tema2/img20.png' alt='AvatarTop')
          .tarjeta.color-primario
            .p-4
              h3.text-center Coaching corporativo
              p Se busca el desarrollo individual y colectivo en la organización, con el foco en un equipo asertivo, de alto desempeño y comprometido en la mejora de resultados. Se pretende que los colaboradores se sientan parte de la empresa para  alcanzar los resultados esperados.
    p.mb-5 Después de clasificar e identificar la capacitación requerida es muy importante, desde el punto de vista metodológico, seleccionar la forma de presentarla, para lo cual se relacionan las siguientes técnicas que corresponden a mecanismos reconocidos y muy utilizados en diferentes organizaciones:
    .separador.mb-5
    #t_2_2
    .titulo-segundo.color-acento-contenido
      h2 2.2 Plan de capacitación
    p Un plan o programa de capacitación se conforma de un conjunto de pasos para el entrenamiento del equipo de trabajo, en el que mediante actividades guiadas se presenta información tanto teórica como práctica sobre algún tema. En este plan de capacitación se identificarán las debilidades del equipo para dirigir las actividades que suplan tales dificultades en un tiempo determinado. Por ello, en la planeación se debe incluir la cantidad de horas a invertir y el personal necesario involucrado tanto de aprendices como de formadores (Da Silva, 2022).
    p.mb-5 Se invita a revisar un ejemplo de los pasos que se deben incluir en el documento de estructura de un plan de capacitación.
    .row.align-items-center.mb-5
      .col-lg-6.mb-4.mb-lg-0
        LineaTiempoD.color-primario
          .row(numero="1" titulo="Necesidades").align-items-center
            .col-lg-6.mb-4.mb-lg-0
              figure
                img(src='@/assets/curso/tema2/img2.svg' style="width: 350px").m-auto
            .col-lg-6
              p.mb-0 ¿Qué conocimientos, habilidades y actitudes deben ser fortalecidas?
          .row(numero="2" titulo="Agente de capacitación").align-items-center
            .col-lg-6.mb-4.mb-lg-0
              figure
                img(src='@/assets/curso/tema2/img3.svg' style="width: 350px").m-auto
            .col-lg-6
              p.mb-0 ¿La capacitación será desarrollada por un agente interno (del mismo equipo de trabajo) o por un agente externo (proveedor)?
          .row(numero="3" titulo="Objetivos").align-items-center
            .col-lg-6.mb-4.mb-lg-0
              figure
                img(src='@/assets/curso/tema2/img4.svg' style="width: 350px").m-auto
            .col-lg-6
              p.mb-0 ¿Para qué capacitar?, ¿qué se desea lograr con la capacitación?
          .row(numero="4" titulo="Audiencia").align-items-center
            .col-lg-6.mb-4.mb-lg-0
              figure
                img(src='@/assets/curso/tema2/img5.svg' style="width: 350px").m-auto
            .col-lg-6
              p.mb-0 ¿Quién debe ser capacitado?, ¿todo el personal o un área específica?
          .row(numero="5" titulo="Formato").align-items-center
            .col-lg-6.mb-4.mb-lg-0
              figure
                img(src='@/assets/curso/tema2/img6.svg' style="width: 350px").m-auto
            .col-lg-6
              p.mb-0 ¿Cómo se realizará?, ¿presencial, en línea o semipresencial?, ¿se cuenta con espacios físicos, con la infraestructura tecnológica o ambas?
          .row(numero="6" titulo="Contenido").align-items-center
            .col-lg-6.mb-4.mb-lg-0
              figure
                img(src='@/assets/curso/tema2/img7.svg' style="width: 350px").m-auto
            .col-lg-6
              p.mb-0 ¿Qué deben aprender los participantes para obtener los conocimientos, habilidades y actitudes que se quieren desarrollar o fortalecer?
          .row(numero="7" titulo="Tipo, modalidad y nivel").align-items-center
            .col-lg-6.mb-4.mb-lg-0
              figure
                img(src='@/assets/curso/tema2/img8.svg' style="width: 350px").m-auto
            .col-lg-6
              p #[b Tipo]: inductivo, preventivo, desarrollo de carrera.
              p.mb-0 #[b Modalidad]: formación, actualización especialización o perfeccionamiento.
          .row(numero="8" titulo="Impacto").align-items-center
            .col-lg-6.mb-4.mb-lg-0
              figure
                img(src='@/assets/curso/tema2/img9.svg' style="width: 350px").m-auto
            .col-lg-6
              p.mb-0 ¿Qué beneficios habrá para la empresa o institución?
          .row(numero="9" titulo="Metodología de desarrollo").align-items-center
            .col-lg-6.mb-4.mb-lg-0
              figure
                img(src='@/assets/curso/tema2/img10.svg' style="width: 350px").m-auto
            .col-lg-6
              p.mb-0 ¿Cómo y con qué se llevará a cabo la formación y el proceso de enseñanza y aprendizaje?
          .row(numero="10" titulo="Inversión").align-items-center
            .col-lg-6.mb-4.mb-lg-0
              figure
                img(src='@/assets/curso/tema2/img11.svg' style="width: 350px").m-auto
            .col-lg-6
              p.mb-0 ¿El costo de lo que se desea implementar se ajusta al presupuesto original?, ¿El costo por un agente de capacitación externo es viable para el presupuesto de la empresa o institución?
      .col-lg-6
        figure(data-aos="zoom-in-up")
          img(src='@/assets/curso/tema2/img15.png' style="width: 450px").m-auto
    .row.justify-content-center.mb-5
      .col-lg-10
        .cajon.color-acento-contenido.p-4
          p De acuerdo con Edgepoint learning (2020), hay que establecer plazos y métodos de implementación, estos deben ser claros y realistas para no jugar con el tiempo de los usuarios, ni la productividad de la empresa. A continuación algunos tips de aporte en este ítem.
    .row.justify-content-center.mb-5
      .col-lg-9
        a.anexo.mb-4(:href="obtenerLink('downloads/Estructura_plan_capacitacion.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p.mb-0 #[b Estructura plan de capacitación]
            p Para lograr un buen plan de capacitación su documento debe contener la siguiente estructura del documento anexo.
    .separador.mb-5
    #t_2_3
    .titulo-segundo.color-acento-contenido
      h2 2.3 Videotutoriales
    p Un videotutorial corresponde a la unión de un video de imágenes con el instructivo en una serie de pasos que se quieren ilustrar para llevar a cabo el aprendizaje en un tema en específico, está orientado a estimular la cultura del autoaprendizaje en un aprendiz y normalmente su construcción suele ser de videos cortos con un máximo de 10 minutos, diseñados de manera atractiva para llamar la atención y retener a los usuarios.
    p.mb-5 Para realizar un videotutorial es necesario realizar un análisis sobre los siguientes aspectos:
    .row.align-items-center.mb-5
      .col-lg-5.mb-4.mb-lg-0
        figure(data-aos="zoom-in-up")
          img(src='@/assets/curso/tema2/img16.png' style="width: 450px").m-auto
      .col-lg-7
        .tarjeta.tarjeta--azul.p-4
          SlyderA
            .row.justify-content-center
              .col-10
                .row.align-items-center.mb-3
                  .col-2
                    figure
                      img(src='@/assets/curso/tema2/img12.svg' style="width: 50px").m-auto
                  .col
                    p.mb-0 Identificar el aprendizaje que se quiere impartir.
                .row.align-items-center.mb-3
                  .col-2
                    figure
                      img(src='@/assets/curso/tema2/img13.svg' style="width: 50px").m-auto
                  .col
                    p.mb-0 ¿A quién va dirigido?
                .row.align-items-center.mb-3
                  .col-2
                    figure
                      img(src='@/assets/curso/tema2/img14.svg' style="width: 50px").m-auto
                  .col
                    p.mb-0 El tema a investigar.
            .row.justify-content-center
              .col-10
                .row.align-items-center.mb-3
                  .col-2
                    figure
                      img(src='@/assets/curso/tema2/img15.svg' style="width: 50px").m-auto
                  .col
                    p.mb-0 La definición de objetivos.
                .row.align-items-center.mb-3
                  .col-2
                    figure
                      img(src='@/assets/curso/tema2/img16.svg' style="width: 50px").m-auto
                  .col
                    p.mb-0 Crear un esquema global del contenido del video.
                .row.align-items-center.mb-3
                  .col-2
                    figure
                      img(src='@/assets/curso/tema2/img17.svg' style="width: 50px").m-auto
                  .col
                    p.mb-0 Redactar un guion con estructura narrativa: inicio, nudo y desenlace.
            .row.justify-content-center
              .col-10
                .row.align-items-center.mb-3
                  .col-2
                    figure
                      img(src='@/assets/curso/tema2/img18.svg' style="width: 50px").m-auto
                  .col
                    p.mb-0 Seleccionar las herramientas tecnológicas de acuerdo con la complejidad de elaboración del video.
                .row.align-items-center.mb-3
                  .col-2
                    figure
                      img(src='@/assets/curso/tema2/img19.svg' style="width: 50px").m-auto
                  .col
                    p.mb-0 Finalmente, lograr una fácil puesta en marcha y facilidades de publicación del video en medios de uso masivo.
    p.text-center.mb-5 Vea algunas buenas prácticas que Mejía (2019) considera conveniente para realizar un videotutorial exitoso:
    .row.justify-content-center.mb-3
      .col-lg-10.p-4.bg-color6.mb-5
        LineaTiempoB.color-acento-botones(:datos="datosLineaTiempoB")
      .col-lg-10
        p Una vez se tiene conocimiento sobre cómo realizar un videotutorial es importante identificar en dónde se puede realizar.  Por costos en licencias, facilidad de uso en diferentes plataformas de sistemas operativos, cantidad de formatos manejados para exportar un video y una comunidad grande de usuarios que comparten para edición de sus archivos de videos, los mejores programas para hacer estos videos son:
    .row.justify-content-center(data-aos="zoom-in")
      .col-lg-3.mb-4
        figure
          img(src='@/assets/curso/tema2/img29.svg' style="width: 250px").m-auto
      .col-lg-3.mb-4
        figure
          img(src='@/assets/curso/tema2/img30.svg' style="width: 250px").m-auto
      .col-lg-3.mb-4
        figure
          img(src='@/assets/curso/tema2/img31.svg' style="width: 250px").m-auto
      .col-lg-3.mb-4
        figure
          img(src='@/assets/curso/tema2/img32.svg' style="width: 250px").m-auto
      .col-lg-3.mb-4
        figure
          img(src='@/assets/curso/tema2/img33.svg' style="width: 250px").m-auto
      .col-lg-3
        figure
          img(src='@/assets/curso/tema2/img34.svg' style="width: 250px").m-auto

</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    datosSlyder: [
      {
        titulo: 'Los instructores deben conocer muy bien el <em>software</em>',
        texto:
          'Los formadores deben ser expertos en el manejo del programa, esto transmite confianza y entusiasmo a los usuarios de la capacitación.<br>Al diseñar la capacitación debe contar con personal profesional en la materia, los cuales tengan facilidad de expresión y buen manejo del público.<br>Si la capacitación es de manera virtual o con videotutoriales asegurarse de contratar personas expertas en la creación de estos recursos, ya que la presentación y la calidad es muy importante.',
        imagen: require('@/assets/curso/tema2/img11.png'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Hacer de la formación una prioridad',
        texto:
          'Hay que establecer acuerdos con los jefes de personal o con los propietarios de las empresas para establecer la capacitación de manera obligatoria, esto evita problemas e inconvenientes a futuro, como volver a agendar capacitaciones y problemas por incorrecto manejo de software o aplicación.',
        imagen: require('@/assets/curso/tema2/img12.png'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Utilizar incentivos en la capacitación',
        texto:
          'Los incentivos motivan y comprometen a los participantes creando un ambiente cálido en el proceso de capacitación, la clave es conocer bien a los empleados por intermedio de los jefes, para algunos basta con un reconocimiento verbal por su dedicación, para otros puede ser un buen refrigerio o golosinas, también se puede hablar con los dueños de la empresa para que los usuarios puedan ser recompensados con horas libres.',
        imagen: require('@/assets/curso/tema2/img13.png'),
        //leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Elegir un formato adecuado para la capacitación',
        texto:
          'En la mayoría de casos las capacitaciones o conferencias son de manera magistral y de poco tiempo, lo cual no es efectivo para ayudar a los usuarios a desarrollar sus nuevas habilidades y que los aplique con eficacia, hay que ser creativos, didácticos y utilizar pausas activas para evitar el desgaste de los usuarios, buscando la aplicabilidad del aprendizaje.',
        imagen: require('@/assets/curso/tema2/img14.png'),
        //leyendaImagen: 'Leyenda de la imagen',
      },
    ],
    datosLineaTiempoB: [
      {
        titulo: '',
        texto:
          'Elija contenidos útiles y de valor para su público. Investiga cuáles son las dudas más frecuentes entre su audiencia y ofrézcales la respuesta a sus preguntas con un video.',
        icono: require('@/assets/curso/tema2/img20.svg'),
      },
      {
        titulo: '',
        texto:
          'Cree un guión sobre la narración que va a ir teniendo en el transcurso del material audiovisual y ensáyelo para evitar equivocaciones al hacer la grabación y realizar múltiples ediciones.',
        icono: require('@/assets/curso/tema2/img21.svg'),
      },
      {
        titulo: '',
        texto:
          'Los videos largos aburren, por lo que su material debe no tener una duración mayor a 10 minutos. Si cree que su video no se podrá desarrollar en ese periodo de tiempo, puede manejarlo por partes o capítulos.',
        icono: require('@/assets/curso/tema2/img22.svg'),
      },
      {
        titulo: '',
        texto:
          'No utilice música de fondo, porque puede distraer al usuario. Al único sonido que se le debe prestar total atención es a su voz.',
        icono: require('@/assets/curso/tema2/img23.svg'),
      },
      {
        titulo: '',
        texto:
          'Utilice un lenguaje claro y sencillo. Las personas que ven su videotutorial posiblemente no tienen un conocimiento avanzado previo y se les dificulte entender algunos conceptos del procedimiento que está explicando.',
        icono: require('@/assets/curso/tema2/img24.svg'),
      },
      {
        titulo: '',
        texto:
          'Compártalo en todas las redes sociales. Este es uno de los recursos al que más provecho le puede sacar. Además de publicarlo en su blog, puede publicarlo en YouTube, Twitter y Facebook y observar la respuesta que generan.',
        icono: require('@/assets/curso/tema2/img25.svg'),
      },
      {
        titulo: '',
        texto:
          'Solo si es un experto en el tema puede  improvisar. Un videotutorial siempre debe estar planificado, desde las capturas de pantalla que mostrará hasta el guion que seguirá. Si considera que sabe desarrollar muy bien el tema sin titubear, ¡adelante! Puede crear su video sin planificación.',
        icono: require('@/assets/curso/tema2/img26.svg'),
      },
      {
        titulo: '',
        texto:
          'Cuide la presentación de su video. No solo es la narración del procedimiento lo que debe cuidar, también debe tener en orden sus imágenes o las capturas de pantalla que va presentando en el transcurso.',
        icono: require('@/assets/curso/tema2/img27.svg'),
      },
      {
        titulo: '',
        texto:
          'Verifique la iluminación de su entorno. En caso de que sus videotutoriales no sean grabaciones de pantallas y tenga que grabar los pasos de algún procedimiento, consiga un espacio para grabar con la iluminación correcta.',
        icono: require('@/assets/curso/tema2/img28.svg'),
      },
    ],
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
