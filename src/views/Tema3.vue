<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span(style="color: #fff") 3
      h1 Labores finales del proceso de implantación
    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in-up")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema3/img1.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Las labores de pruebas, acta de entrega y mantenimiento de #[i software] son las que se realizan para garantizar la entrega del producto de #[i software] instalado y configurado de manera correcta.  En las actas se registran tanto la persona que entrega el producto como el cliente que lo recibe, además, se informa a los clientes sobre las políticas y mecanismo de implementación de labores de garantía y de mantenimiento de #[i software].
    #t_3_1
    .titulo-segundo.color-acento-contenido
      h2 3.1 Pruebas y actas de entrega
    .row.align-items-center.mb-5
      .col-lg-5.mb-4.mb-lg-0
        figure(data-aos="zoom-in-up")
          img(src='@/assets/curso/tema3/img2.png' style="width: 450px").m-auto
      .col-lg-7
        p Al momento de realizar la entrega de la solución informática esta debió ser probada de manera interna por los desarrolladores para examinar la correcta funcionalidad de todos sus procesos, permitiendo conocer la calidad del mismo, así como los posibles fallos que se puedan presentar a corto, medio o largo plazo, con el fin de lograr predecir su comportamiento durante la implantación, su grado de manejabilidad y lo amigable que pueda ser su interfaz gráfica.
        p En el caso de los usuarios, las pruebas van dadas por las necesidades y el contexto que representa a cada uno de los clientes, en otras palabras, la misma prueba no puede servir para todos los escenarios, porque puede ser que una prueba para un #[i software] específico sea la adecuada, pero en otro puede llegar a ser perjudicial. En el caso puntual de los clientes se debe hacer una prueba de funcionamiento y rendimiento en el sitio, bajo las condiciones y entorno de la empresa, con las funciones y datos reales, esta prueba debe ser ejecutada y analizada por las dos partes, se puede hacer  en una sola jornada o si el cliente lo desea se puede hacer dos días o hasta en una semana, solo así, el cliente sentirá la seguridad de firmar el acta de entrega a satisfacción.
    .row.justify-content-center.mb-5
      .col-lg-10
        .cajon.color-acento-contenido.p-4
          p Las pruebas como las actas de entrega se presentan en los formatos establecidos por la organización para los cuales se realizan y se especifican el conjunto de pruebas realizadas, también se pueden referenciar a manera de anexo. En dichos documentos se debe establecer las firmas de los participantes tanto de los que entregan como de los que reciben, especificando fechas, estado y componentes entregados.
    p.mb-5 Estos documentos son muy importantes porque se constituyen en la evidencia de los compromisos adquiridos entre el cliente y el proveedor, que normalmente se expresan bajo un contrato. Apoyan la memoria histórica de lo realizado durante el proyecto sobre todo en la parte de pruebas, lo que es de especial atención cuando en una organización se presentan altos índices de rotación de personal.
    .row.justify-content-center.mb-5
      .col-lg-7
        a.anexo.mb-4(:href="obtenerLink('downloads/Acta_entrega.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p.mb-0 #[b Acta de entrega]
            p Se invita a conocer el siguiente ejemplo de acta de entrega.
    .separador.mb-5
    #t_3_2
    .titulo-segundo.color-acento-contenido
      h2 3.2 Mantenimiento de #[i software]
    p El eje central de este apartado es indicar cómo se debe realizar el mantenimiento del #[i software] de forma adecuada, de tal manera que la calidad del aplicativo no se deteriore como resultado del uso, debe enfocarse en la siguiente pregunta: ¿cómo debe mantenerse el #[i software] para preservar su fiabilidad?
    p.mb-4 Esta es la fase que se presenta dentro del ciclo de vida de desarrollo de #[i software] después de la fase de puesta en producción o implementación del producto, se caracteriza por:
    ul.lista-ul.mb-4
      li 
        i.fas.fa-database(style="color: #F7CB50")
        | Permitir la posibilidad de agregar mejoras al proyecto entregado.
      li 
        i.fas.fa-database(style="color: #F7CB50")
        | Optimizar el proyecto entregado, así como también la corrección de defectos.
      li 
        i.fas.fa-database(style="color: #F7CB50")
        | En el momento de detectar los defectos deben ser ingresados en el sistema de rastreo de defectos.
    p.mb-5 El mantenimiento de #[i software] se puede clasificar en los siguientes tipos, los cuales se diferencian por el porcentaje aproximado respecto del conjunto de mantenimiento:
    .row.mb-5(data-aos="zoom-in")
      .col-lg-3.p-4.bg-color4
        figure.mb-5
          img(src='@/assets/curso/tema3/img3.png' style="width: 150px").m-auto
        h4.text-center Mantenimiento evolutivo
        p Equivale a un 60% y pretende la implementación de nuevos requisitos.
      .col-lg-3.p-4.bg-color5
        figure.mb-5
          img(src='@/assets/curso/tema3/img4.png' style="width: 150px").m-auto
        h4.text-center Mantenimiento adaptativo
        p Equivale a un 18% y pretende adaptar el #[i software] a cambios en su ecosistema tecnológico (sistemas operativos, servidores de aplicaciones, bases de datos etc.).
      .col-lg-3.p-4.bg-color4
        figure.mb-5
          img(src='@/assets/curso/tema3/img5.png' style="width: 150px").m-auto
        h4.text-center Mantenimiento correctivo
        p Equivale a un 17% y se orienta a la corrección de errores del #[i software] detectados durante su uso.
      .col-lg-3.p-4.bg-color5
        figure.mb-5
          img(src='@/assets/curso/tema3/img6.png' style="width: 150px").m-auto
        h4.text-center Mantenimiento preventivo
        p Equivale a un 5% y pretende facilitar mantenimientos futuros, por ejemplo, verificación de las precondiciones.
    .row.justify-content-center
      .col-lg-10.p-4.bg-color7(data-aos="zoom-in")
        .row.align-items-center
          .col-auto
            figure
              img(src='@/assets/curso/tema3/img1.svg' style="width: 60px").m-auto
          .col
            p.mb-0.text-white Recuerde que el mantenimiento de #[i software] es una de las actividades más comunes en la ingeniería de #[i software], que consiste en el proceso de mejora y optimización del #[i software] desplegado (revisión del programa y corrección de los defectos).

</template>

<script>
export default {
  name: 'Tema3',
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
