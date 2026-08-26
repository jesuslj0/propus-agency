import type { Metadata } from "next"
import Link from "next/link"
import { contact } from "@/lib/site"

export const metadata: Metadata = {
  title: "Política de Privacidad",
  description:
    "Política de privacidad de Propus. Información sobre el tratamiento de datos personales conforme al RGPD.",
  alternates: {
    canonical: "/legal/privacidad",
  },
}

/*
  TODO — Representante en la Unión Europea (art. 27 RGPD)
  Iberium Group LLC es una entidad estadounidense que ofrece servicios a
  interesados en España, por lo que salvo que resulte aplicable alguna de las
  excepciones del art. 27.2 debe designar por escrito un representante en la
  Unión y publicar sus datos de contacto en esta política.

  Está PENDIENTE de designar. No escribir aquí ningún nombre ni dirección hasta
  que la designación esté formalizada: publicar un representante inexistente es
  peor que no declarar ninguno. Cuando se designe, añadir sus datos al apartado
  «Responsable del tratamiento», junto a los de la entidad.
*/
export default function PrivacidadPage() {
  return (
    <article>
      <h1 className="mb-6 text-3xl font-semibold md:text-4xl">
        Política de Privacidad
      </h1>

      <p className="mb-4 leading-relaxed text-muted-foreground">
        En Propus nos comprometemos a proteger la privacidad de
        nuestros usuarios. Esta política describe cómo recopilamos, utilizamos y
        protegemos tus datos personales de conformidad con el Reglamento General
        de Protección de Datos (RGPD) y la Ley Orgánica 3/2018, de 5 de
        diciembre, de Protección de Datos Personales y garantía de los derechos
        digitales (LOPDGDD).
      </p>

      <h2 className="mt-12 mb-4 text-xl font-semibold md:text-2xl">
        Responsable del tratamiento
      </h2>
      <ul className="mb-4 list-disc space-y-2 pl-6 text-muted-foreground">
        <li>
          <strong className="text-foreground">Identidad:</strong> Iberium Group
          LLC (marca comercial: Propus)
        </li>
        <li>
          <strong className="text-foreground">Domicilio:</strong> 1209 Mountain
          Road PL NE STE R, Albuquerque, New Mexico 87110, EE. UU.
        </li>
        <li>
          <strong className="text-foreground">Correo electrónico:</strong>{" "}
          <a href={contact.emailHref} className="text-foreground underline underline-offset-4">
            {contact.email}
          </a>
        </li>
        <li>
          <strong className="text-foreground">Teléfono:</strong>{" "}
          <a href={contact.phoneHref} className="text-foreground underline underline-offset-4">
            {contact.phoneDisplay}
          </a>
        </li>
      </ul>

      <h2 className="mt-12 mb-4 text-xl font-semibold md:text-2xl">
        Doble rol de Propus: responsable y encargado
      </h2>
      <p className="mb-4 leading-relaxed text-muted-foreground">
        Propus interviene en dos posiciones distintas según el tratamiento de
        que se trate, y es importante que sepas cuál te afecta:
      </p>
      <ul className="mb-4 list-disc space-y-2 pl-6 text-muted-foreground">
        <li>
          <strong className="text-foreground">
            Como responsable del tratamiento,
          </strong>{" "}
          respecto de los datos de sus contactos comerciales y de sus propios
          clientes: las consultas recibidas a través de este sitio web, la
          correspondencia comercial y la gestión de la relación contractual.
          Somos nosotros quienes decidimos las finalidades y los medios de estos
          tratamientos, y a ellos se refiere el resto de esta política salvo
          indicación en contrario.
        </li>
        <li>
          <strong className="text-foreground">
            Como encargado del tratamiento,
          </strong>{" "}
          cuando gestionamos las conversaciones de WhatsApp de un negocio
          cliente mediante nuestro agente de inteligencia artificial. En ese
          caso el responsable del tratamiento es el negocio —por ejemplo, la
          clínica a la que has escrito—, y Propus trata los datos exclusivamente
          por cuenta de dicho negocio, siguiendo sus instrucciones documentadas
          y al amparo de un contrato de encargo del tratamiento conforme al
          artículo 28 del RGPD. Propus no utiliza esas conversaciones para
          finalidades propias.
        </li>
      </ul>
      <p className="mb-4 leading-relaxed text-muted-foreground">
        Si quieres ejercer tus derechos sobre una conversación de WhatsApp,
        puedes dirigirte al negocio con el que conversaste o escribirnos a
        nosotros: trasladaremos tu solicitud al responsable y te indicaremos
        cómo contactar con él. Encontrarás el procedimiento detallado en la
        página de{" "}
        <Link
          href="/legal/eliminacion-de-datos"
          className="text-foreground underline underline-offset-4 transition-colors hover:text-brand-teal"
        >
          eliminación de datos
        </Link>
        .
      </p>

      <h2 className="mt-12 mb-4 text-xl font-semibold md:text-2xl">
        Datos que recopilamos
      </h2>
      <p className="mb-4 leading-relaxed text-muted-foreground">
        Cuando contactas directamente con Propus, recopilamos únicamente los
        datos que nos proporcionas voluntariamente a través de nuestros
        formularios de contacto, por correo electrónico o al reservar una
        llamada con nuestro equipo:
      </p>
      <ul className="mb-4 list-disc space-y-2 pl-6 text-muted-foreground">
        <li>
          <strong className="text-foreground">Datos de contacto:</strong>{" "}
          nombre, dirección de correo electrónico, número de teléfono y mensaje.
        </li>
      </ul>
      <p className="mb-4 leading-relaxed text-muted-foreground">
        No utilizamos herramientas de analítica ni de perfilado en este sitio
        web. Nuestro proveedor de alojamiento puede registrar de forma
        automática datos técnicos de conexión (como la dirección IP) únicamente
        con fines de seguridad y correcto funcionamiento del servicio, sin que
        Propus los emplee para identificarte ni con ninguna otra finalidad.
      </p>

      <h2 className="mt-12 mb-4 text-xl font-semibold md:text-2xl">
        Tratamiento de conversaciones de WhatsApp
      </h2>
      <p className="mb-4 leading-relaxed text-muted-foreground">
        Propus opera agentes de inteligencia artificial sobre WhatsApp por
        cuenta de negocios clientes. Si escribes al número de WhatsApp de uno de
        ellos, se tratan los siguientes datos, siempre bajo la responsabilidad
        de ese negocio y siguiendo sus instrucciones:
      </p>
      <ul className="mb-4 list-disc space-y-2 pl-6 text-muted-foreground">
        <li>
          <strong className="text-foreground">Identificadores:</strong> tu
          número de teléfono y el nombre que muestra tu perfil de WhatsApp.
        </li>
        <li>
          <strong className="text-foreground">Contenido de los mensajes:</strong>{" "}
          el texto y los archivos que intercambias con el negocio, incluida la
          información que facilites voluntariamente en la conversación.
        </li>
        <li>
          <strong className="text-foreground">Metadatos de entrega:</strong>{" "}
          marcas de tiempo y estados de envío, entrega y lectura de cada
          mensaje, necesarios para el funcionamiento del canal.
        </li>
        <li>
          <strong className="text-foreground">Datos de gestión de citas:</strong>{" "}
          la fecha y hora reservada, el servicio solicitado y el profesional
          asignado, cuando la conversación deriva en una cita.
        </li>
      </ul>
      <p className="mb-4 leading-relaxed text-muted-foreground">
        La finalidad de este tratamiento es atender tus consultas y gestionar
        las citas, los recordatorios y las cancelaciones con el negocio. En la
        elaboración de las respuestas puede intervenir un sistema automatizado
        basado en modelos de inteligencia artificial, que procesa el contenido
        de los mensajes para interpretar tu solicitud y responderte. La
        conversación puede ser revisada y continuada en cualquier momento por
        una persona del equipo del negocio.
      </p>

      <h2 className="mt-12 mb-4 text-xl font-semibold md:text-2xl">
        Categorías especiales de datos
      </h2>
      <p className="mb-4 leading-relaxed text-muted-foreground">
        Cuando el negocio cliente pertenece al sector sanitario —por ejemplo,
        una clínica—, las conversaciones pueden contener datos relativos a la
        salud, que el artículo 9 del RGPD considera categorías especiales de
        datos: el motivo de una consulta, el tratamiento que recibes o
        cualquier información clínica que menciones al pedir una cita.
      </p>
      <p className="mb-4 leading-relaxed text-muted-foreground">
        Estos datos se tratan únicamente bajo las instrucciones del responsable
        sanitario y al amparo de las bases jurídicas del artículo 9.2 del RGPD
        que este determine, habitualmente la prestación de asistencia sanitaria
        o tu consentimiento explícito. Propus no los utiliza para ninguna
        finalidad propia ni los emplea para entrenar modelos de inteligencia
        artificial, y se alojan en centros de datos situados en la Unión
        Europea. Puedes consultar las medidas de seguridad aplicadas en el
        apartado correspondiente de esta política. Te recomendamos no facilitar
        por WhatsApp más información clínica de la imprescindible para gestionar
        tu cita.
      </p>

      <h2 className="mt-12 mb-4 text-xl font-semibold md:text-2xl">
        Proveedor de inteligencia artificial
      </h2>
      <p className="mb-4 leading-relaxed text-muted-foreground">
        Las respuestas del asistente se generan con el servicio Azure OpenAI de{" "}
        <strong className="text-foreground">
          Microsoft Ireland Operations Limited
        </strong>
        , que actúa como encargado del tratamiento por cuenta de Propus y, en el
        servicio de agentes de WhatsApp, como subencargado del negocio cliente.
      </p>

      <h3 className="mt-8 mb-3 text-lg font-semibold">
        Dónde se procesan y dónde se almacenan
      </h3>
      <p className="mb-4 leading-relaxed text-muted-foreground">
        El servicio está configurado sobre la zona de datos europea. Conviene
        distinguir dos cosas que no significan lo mismo:{" "}
        <strong className="text-foreground">el procesamiento</strong> de cada
        petición puede realizarse en cualquier centro de datos situado dentro de
        esa zona europea, mientras que{" "}
        <strong className="text-foreground">el almacenamiento</strong>{" "}
        permanece en la geografía del recurso contratado. En ambos casos el
        tratamiento se mantiene dentro de la Unión Europea.
      </p>

      <h3 className="mt-8 mb-3 text-lg font-semibold">
        Tus datos no entrenan sus modelos
      </h3>
      <p className="mb-4 leading-relaxed text-muted-foreground">
        Microsoft se compromete contractualmente a no utilizar el contenido de
        las peticiones ni las respuestas generadas para entrenar, reentrenar ni
        mejorar sus modelos sin autorización. En sus condiciones consta con esta
        redacción: «No prompts or generated content are stored in the content
        classifier models, and prompts and outputs are not used to train,
        retrain, or improve the classifier models without your consent».
      </p>

      <h3 className="mt-8 mb-3 text-lg font-semibold">
        Supervisión de abusos y retención temporal
      </h3>
      <p className="mb-4 leading-relaxed text-muted-foreground">
        El servicio aplica de forma estándar un mecanismo de supervisión de
        abusos destinado a detectar usos que infrinjan sus condiciones. Por ese
        motivo el proveedor{" "}
        <strong className="text-foreground">
          puede conservar las peticiones y las respuestas durante un máximo de
          30 días
        </strong>
        , y personal autorizado del proveedor puede revisar el contenido que sus
        filtros automáticos hayan marcado. Transcurrido ese plazo, el contenido
        se elimina.
      </p>
      <p className="mb-4 leading-relaxed text-muted-foreground">
        La exención de esta supervisión está reservada a clientes con acuerdo
        empresarial y, a día de hoy, no está disponible para Propus. Lo hacemos
        constar expresamente para que tanto los negocios clientes como las
        personas que conversan con ellos conozcan la configuración real del
        servicio.
      </p>

      <h2 className="mt-12 mb-4 text-xl font-semibold md:text-2xl">
        Decisiones automatizadas
      </h2>
      <p className="mb-4 leading-relaxed text-muted-foreground">
        El asistente de WhatsApp no adopta decisiones automatizadas que
        produzcan efectos jurídicos sobre ti o te afecten significativamente de
        modo similar, en el sentido del artículo 22 del RGPD. Su función es
        informativa y de gestión de citas: no realiza diagnósticos, no emite
        recomendaciones clínicas ni sustituye el criterio de un profesional
        sanitario. Tampoco elabora perfiles con fines publicitarios ni de
        evaluación de tu conducta.
      </p>
      <p className="mb-4 leading-relaxed text-muted-foreground">
        En cualquier momento puedes solicitar la intervención de una persona
        escribiéndolo en la propia conversación o contactando con el negocio por
        sus canales habituales.
      </p>

      <h2 className="mt-12 mb-4 text-xl font-semibold md:text-2xl">
        Finalidad del tratamiento
      </h2>
      <p className="mb-4 leading-relaxed text-muted-foreground">
        Tratamos tus datos personales con las siguientes finalidades:
      </p>
      <ul className="mb-4 list-disc space-y-2 pl-6 text-muted-foreground">
        <li>Responder a tus consultas y solicitudes de información.</li>
        <li>
          Gestionar la relación contractual derivada de la prestación de
          nuestros servicios.
        </li>
        <li>
          Enviarte comunicaciones comerciales sobre nuestros servicios, siempre
          con tu consentimiento previo.
        </li>
        <li>
          Mejorar la experiencia de navegación y el rendimiento de nuestro sitio
          web.
        </li>
      </ul>

      <h2 className="mt-12 mb-4 text-xl font-semibold md:text-2xl">
        Base jurídica del tratamiento
      </h2>
      <p className="mb-4 leading-relaxed text-muted-foreground">
        El tratamiento de tus datos se fundamenta en las siguientes bases
        legales del artículo 6.1 del RGPD:
      </p>
      <ul className="mb-4 list-disc space-y-2 pl-6 text-muted-foreground">
        <li>
          <strong className="text-foreground">Consentimiento (Art. 6.1.a):</strong>{" "}
          cuando nos envías un formulario de contacto o aceptas recibir
          comunicaciones comerciales.
        </li>
        <li>
          <strong className="text-foreground">
            Ejecución contractual (Art. 6.1.b):
          </strong>{" "}
          cuando el tratamiento es necesario para la prestación de los servicios
          contratados.
        </li>
        <li>
          <strong className="text-foreground">
            Interés legítimo (Art. 6.1.f):
          </strong>{" "}
          para la mejora de nuestros servicios y la seguridad del sitio web.
        </li>
      </ul>
      <p className="mb-4 leading-relaxed text-muted-foreground">
        En el tratamiento de las conversaciones de WhatsApp, en el que Propus
        actúa como encargado, la base jurídica la determina el negocio cliente
        en su condición de responsable del tratamiento —habitualmente la
        ejecución de un contrato o la prestación de asistencia sanitaria—, y
        Propus trata los datos al amparo del contrato de encargo previsto en el
        artículo 28 del RGPD.
      </p>

      <h2 className="mt-12 mb-4 text-xl font-semibold md:text-2xl">
        Destinatarios de los datos
      </h2>
      <p className="mb-4 leading-relaxed text-muted-foreground">
        No cedemos tus datos personales a terceros para finalidades propias de
        estos, salvo obligación legal. Sí recurrimos a proveedores de servicios
        que acceden a los datos como encargados del tratamiento por cuenta de
        Propus, siempre bajo contrato que les obliga a tratarlos únicamente
        conforme a nuestras instrucciones y a garantizar su seguridad:
      </p>
      <ul className="mb-4 list-disc space-y-2 pl-6 text-muted-foreground">
        <li>
          <strong className="text-foreground">Contabo GmbH</strong>{" "}
          (Welfenstraße 22, 81541 Múnich, Alemania), con{" "}
          <strong className="text-foreground">Contabo France SAS</strong> (2 rue
          Taunus, 67630 Lauterbourg, Francia) como subencargado para la
          operación del centro de datos: alojan los sistemas de orquestación y
          la aplicación de gestión desarrollada por Propus, incluida la base de
          datos donde residen las conversaciones y las citas.{" "}
          <strong className="text-foreground">
            El tratamiento se realiza en territorio de la Unión Europea.
          </strong>
        </li>
        <li>
          <strong className="text-foreground">
            Microsoft Ireland Operations Limited
          </strong>{" "}
          (Azure OpenAI): procesa el contenido de los mensajes para generar las
          respuestas del asistente, en las condiciones detalladas en el apartado
          anterior.
        </li>
        <li>
          <strong className="text-foreground">WhatsApp Ireland Limited</strong>{" "}
          (Merrion Road, Dublin 4, D04 X2K5, Irlanda): presta la plataforma
          WhatsApp Business a través de la cual se transmiten los mensajes.
        </li>
        <li>
          <strong className="text-foreground">Google Ireland Limited</strong>:
          gestiona nuestro correo electrónico y la herramienta de reserva de
          llamadas. Si reservas una llamada con nosotros, los datos que facilitas
          al hacerlo se tratan en dicha plataforma conforme a sus condiciones de
          tratamiento de datos.
        </li>
        <li>
          <strong className="text-foreground">DigitalOcean</strong>: aloja este
          sitio web en su región LON1, en Londres (Reino Unido). Este alojamiento{" "}
          <strong className="text-foreground">
            no contiene datos de pacientes
          </strong>
          : únicamente sirve las páginas del sitio y recibe los mensajes del
          formulario de contacto.
        </li>
      </ul>
      <p className="mb-4 leading-relaxed text-muted-foreground">
        En el servicio de agentes de WhatsApp, donde Propus actúa como encargado
        del tratamiento, la cadena de tratamiento es la siguiente: el negocio
        cliente —por ejemplo, la clínica— es el responsable del tratamiento;
        Propus es su encargado; y{" "}
        <strong className="text-foreground">WhatsApp Ireland Limited</strong>{" "}
        (Merrion Road, Dublin 4, D04 X2K5, Irlanda), proveedor de la plataforma
        WhatsApp Business en el Espacio Económico Europeo, interviene como
        subencargado del tratamiento. Los proveedores de infraestructura y de
        modelos de inteligencia artificial mencionados arriba intervienen
        igualmente como subencargados en este servicio. La incorporación de
        cualquier subencargado requiere la autorización del responsable en los
        términos del artículo 28.2 del RGPD.
      </p>

      <h2 className="mt-12 mb-4 text-xl font-semibold md:text-2xl">
        Transferencias internacionales
      </h2>
      <p className="mb-4 leading-relaxed text-muted-foreground">
        Este apartado recoge tres situaciones distintas que conviene no
        confundir, porque afectan a datos diferentes y se amparan en garantías
        diferentes.
      </p>

      <h3 className="mt-8 mb-3 text-lg font-semibold">
        1. La entidad responsable está constituida en Estados Unidos
      </h3>
      <p className="mb-4 leading-relaxed text-muted-foreground">
        Iberium Group LLC, la entidad titular de la marca Propus, está
        constituida en los Estados Unidos, con domicilio en Albuquerque, Nuevo
        México. Por esta estructura societaria existe una transferencia
        internacional de datos fuera del Espacio Económico Europeo, con
        independencia de dónde se encuentren los servidores. Esta transferencia
        se ampara en las cláusulas contractuales tipo aprobadas por la Comisión
        Europea mediante la Decisión de Ejecución (UE) 2021/914, complementadas
        con la minimización de la información transferida y con el compromiso de
        notificar y oponernos a cualquier requerimiento de acceso por parte de
        autoridades de terceros países que resulte contrario al Derecho de la
        Unión.
      </p>

      <h3 className="mt-8 mb-3 text-lg font-semibold">
        2. Este sitio web está alojado en Reino Unido
      </h3>
      <p className="mb-4 leading-relaxed text-muted-foreground">
        Las páginas de propus.ink se sirven desde la región LON1 de
        DigitalOcean, en Londres. Reino Unido se encuentra fuera de la Unión
        Europea, pero cuenta con una decisión de adecuación de la Comisión
        Europea, lo que significa que ofrece un nivel de protección equivalente
        y que la transferencia no requiere garantías adicionales. Este
        alojamiento no contiene datos de pacientes: únicamente el sitio web y
        los mensajes del formulario de contacto.
      </p>

      <h3 className="mt-8 mb-3 text-lg font-semibold">
        3. El tratamiento operativo ocurre dentro de la Unión Europea
      </h3>
      <p className="mb-4 leading-relaxed text-muted-foreground">
        Las conversaciones de WhatsApp, las citas y el resto de datos tratados
        por cuenta de los negocios clientes se procesan y se almacenan{" "}
        <strong className="text-foreground">
          íntegramente dentro de la Unión Europea
        </strong>
        : en la infraestructura de Contabo para la orquestación y la base de
        datos, y en la zona de datos europea de Azure OpenAI para la generación
        de respuestas. Para estos datos no se produce ninguna transferencia
        fuera de la Unión.
      </p>
      <p className="mb-4 leading-relaxed text-muted-foreground">
        En el servicio de agentes de WhatsApp, la determinación y la
        formalización de estas garantías corresponde al negocio cliente en su
        condición de responsable del tratamiento, con la asistencia de Propus.
        Puedes solicitarnos información sobre las garantías aplicadas escribiendo
        a{" "}
        <strong className="text-foreground">{contact.email}</strong>.
      </p>

      <h2 className="mt-12 mb-4 text-xl font-semibold md:text-2xl">
        Plazo de conservación
      </h2>
      <p className="mb-4 leading-relaxed text-muted-foreground">
        Conservaremos tus datos personales durante el tiempo necesario para
        cumplir con la finalidad para la que fueron recogidos, así como para
        cumplir con las obligaciones legales aplicables. Los plazos difieren
        según el tipo de dato:
      </p>
      <ul className="mb-4 list-disc space-y-2 pl-6 text-muted-foreground">
        <li>
          <strong className="text-foreground">
            Datos de contacto comercial
          </strong>{" "}
          (formularios, correo electrónico y reservas de llamada): se conservan
          durante un máximo de 2 años desde la última comunicación, salvo que
          exista una relación contractual vigente.
        </li>
        <li>
          <strong className="text-foreground">
            Conversaciones de WhatsApp y datos de gestión de citas:
          </strong>{" "}
          el criterio general acordado con los negocios clientes es conservarlas
          durante{" "}
          <strong className="text-foreground">
            doce meses desde el último mensaje
          </strong>
          , salvo que el responsable del tratamiento fije un plazo distinto en el
          contrato de encargo. En todo caso se conservan mientras se mantenga
          vigente la prestación del servicio. Finalizada la relación con el
          negocio cliente, suprimimos o le devolvemos los datos conforme a sus
          instrucciones y al artículo 28.3.g) del RGPD, salvo que debamos
          conservarlos por obligación legal.
        </li>
        <li>
          <strong className="text-foreground">
            Datos de facturación y documentación contractual:
          </strong>{" "}
          se conservan durante los plazos exigidos por la normativa mercantil y
          tributaria aplicable.
        </li>
      </ul>
      <p className="mb-4 leading-relaxed text-muted-foreground">
        Las conversaciones de WhatsApp{" "}
        <strong className="text-foreground">
          no constituyen historia clínica
        </strong>{" "}
        ni forman parte de ella. Son un canal de comunicación y de gestión de
        citas. La historia clínica de cada paciente es responsabilidad del
        centro sanitario, se conserva en sus propios sistemas y se rige por la
        normativa sanitaria que le resulte aplicable, con plazos distintos de los
        indicados aquí.
      </p>
      <p className="mb-4 leading-relaxed text-muted-foreground">
        Transcurridos estos plazos, los datos se bloquean y quedan a disposición
        exclusiva de las autoridades competentes para atender las posibles
        responsabilidades derivadas del tratamiento, hasta su prescripción, tras
        la cual se suprimen.
      </p>

      <h2 className="mt-12 mb-4 text-xl font-semibold md:text-2xl">
        Derechos del usuario
      </h2>
      <p className="mb-4 leading-relaxed text-muted-foreground">
        Como titular de los datos, puedes ejercer en cualquier momento los
        siguientes derechos:
      </p>
      <ul className="mb-4 list-disc space-y-2 pl-6 text-muted-foreground">
        <li>
          <strong className="text-foreground">Acceso:</strong> conocer qué datos
          personales tratamos sobre ti.
        </li>
        <li>
          <strong className="text-foreground">Rectificación:</strong> solicitar
          la corrección de datos inexactos o incompletos.
        </li>
        <li>
          <strong className="text-foreground">Supresión:</strong> solicitar la
          eliminación de tus datos cuando ya no sean necesarios.
        </li>
        <li>
          <strong className="text-foreground">Oposición:</strong> oponerte al
          tratamiento de tus datos en determinadas circunstancias.
        </li>
        <li>
          <strong className="text-foreground">Portabilidad:</strong> recibir tus
          datos en un formato estructurado y de uso común.
        </li>
        <li>
          <strong className="text-foreground">Limitación:</strong> solicitar la
          limitación del tratamiento en los supuestos previstos por la ley.
        </li>
      </ul>
      <p className="mb-4 leading-relaxed text-muted-foreground">
        Para ejercer cualquiera de estos derechos, envía un correo electrónico a{" "}
        <strong className="text-foreground">{contact.email}</strong> o llámanos
        al <strong className="text-foreground">{contact.phoneDisplay}</strong>,
        indicando el derecho que deseas ejercer y adjuntando una copia de tu
        documento de identidad.
      </p>
      <p className="mb-4 leading-relaxed text-muted-foreground">
        Si lo que quieres es que eliminemos tus datos, incluidos los de una
        conversación de WhatsApp con un negocio cliente, sigue el procedimiento
        detallado en la página de{" "}
        <Link
          href="/legal/eliminacion-de-datos"
          className="text-foreground underline underline-offset-4 transition-colors hover:text-brand-teal"
        >
          eliminación de datos
        </Link>
        . Cuando el responsable del tratamiento sea el negocio cliente,
        trasladaremos tu solicitud a dicho responsable y te informaremos de su
        identidad para que puedas dirigirte directamente a él.
      </p>
      <p className="mb-4 leading-relaxed text-muted-foreground">
        Asimismo, tienes derecho a presentar una reclamación ante la Agencia
        Española de Protección de Datos (AEPD) en{" "}
        <span className="text-foreground">www.aepd.es</span> si consideras que
        el tratamiento de tus datos no se ajusta a la normativa vigente.
      </p>

      <h2 className="mt-12 mb-4 text-xl font-semibold md:text-2xl">
        Seguridad
      </h2>
      <p className="mb-4 leading-relaxed text-muted-foreground">
        Adoptamos las medidas técnicas y organizativas adecuadas para garantizar
        la seguridad de tus datos personales y evitar su alteración, pérdida,
        tratamiento o acceso no autorizado, teniendo en cuenta el estado de la
        tecnología, la naturaleza de los datos y los riesgos a los que están
        expuestos. En concreto, aplicamos las siguientes:
      </p>
      {/*
        AVISO PARA QUIEN EDITE ESTE APARTADO
        Aquí solo se enumeran medidas efectivamente implantadas. No añadir
        ninguna que no lo esté: declarar una medida inexistente en una política
        de privacidad es una infracción en sí misma, y este servicio trata datos
        de salud.

        Redacción ampliada, PENDIENTE de implantación. Reponer cada punto en la
        lista de abajo únicamente cuando esté operativo y verificado:
          - Cifrado de los datos en reposo en la base de datos de conversaciones.
          - Copias de seguridad periódicas con verificación de restauración.
          - Registro de accesos a los datos de pacientes, con retención y
            revisión periódica de los registros.
          - Separación lógica de los datos de cada negocio cliente.
      */}
      <ul className="mb-4 list-disc space-y-2 pl-6 text-muted-foreground">
        <li>
          <strong className="text-foreground">
            Cifrado de las comunicaciones en tránsito
          </strong>{" "}
          mediante TLS, tanto en el acceso a este sitio web como en el
          intercambio de datos entre los sistemas que intervienen en el
          servicio.
        </li>
        <li>
          <strong className="text-foreground">Acceso restringido</strong> a los
          paneles de administración de los proveedores, limitado al personal
          autorizado y protegido con autenticación de doble factor.
        </li>
        <li>
          <strong className="text-foreground">
            Alojamiento en la Unión Europea
          </strong>{" "}
          de los datos de pacientes, en los centros de datos indicados en el
          apartado de destinatarios.
        </li>
      </ul>

      <h2 className="mt-12 mb-4 text-xl font-semibold md:text-2xl">
        Cookies
      </h2>
      <p className="mb-4 leading-relaxed text-muted-foreground">
        Este sitio web no instala cookies propias ni de terceros: únicamente
        utiliza el almacenamiento local de tu navegador para recordar tus
        preferencias de visualización. Para más información, consulta nuestra{" "}
        <Link
          href="/legal/cookies"
          className="text-foreground underline underline-offset-4 transition-colors hover:text-brand-teal"
        >
          Política de Cookies
        </Link>
        .
      </p>

      <h2 className="mt-12 mb-4 text-xl font-semibold md:text-2xl">
        Modificaciones
      </h2>
      <p className="mb-4 leading-relaxed text-muted-foreground">
        Nos reservamos el derecho a modificar esta política de privacidad en
        cualquier momento. Cualquier cambio será publicado en esta página con la
        fecha de actualización correspondiente. Te recomendamos revisarla
        periódicamente.
      </p>

      <p className="mt-16 text-sm text-muted-foreground">
        Última actualización: 27 de agosto de 2026
      </p>
    </article>
  )
}
