export interface BlogPost {
  slug: string
  title: string
  description: string
  date: string
  readingTime: string
  tags: string[]
  content: string
}

export const blogPosts: BlogPost[] = [
  {
    slug: "automatizacion-ia-empresas-albacete",
    title: "Cómo la automatización con IA puede transformar tu empresa en Albacete",
    description:
      "Descubre cómo las pymes y empresas de Albacete pueden aprovechar la inteligencia artificial para automatizar procesos, reducir costes y escalar operaciones.",
    date: "2026-03-29",
    readingTime: "6 min de lectura",
    tags: ["IA", "Automatización", "Albacete", "Pymes"],
    content: `
      <p class="text-muted-foreground leading-relaxed mb-4">
        La inteligencia artificial ha dejado de ser una tecnología exclusiva de las grandes corporaciones. Hoy, las pymes y empresas de Albacete y Castilla-La Mancha tienen a su alcance herramientas de automatización con IA que pueden transformar por completo la manera en que operan, compiten y crecen. En este artículo, exploramos cómo tu negocio puede beneficiarse de esta revolución tecnológica sin necesidad de grandes inversiones ni equipos técnicos internos.
      </p>

      <h2 class="text-xl md:text-2xl font-semibold mt-10 mb-4 text-foreground">¿Qué es la automatización con IA?</h2>
      <p class="text-muted-foreground leading-relaxed mb-4">
        La automatización con inteligencia artificial consiste en utilizar sistemas inteligentes para ejecutar tareas que tradicionalmente requieren intervención humana. A diferencia de la automatización clásica, que sigue reglas fijas y predefinidas, la IA es capaz de aprender, adaptarse y tomar decisiones basadas en datos. Esto significa que puede gestionar procesos complejos como responder a clientes, analizar tendencias de ventas, clasificar documentos o generar informes sin que nadie tenga que supervisarlo constantemente.
      </p>
      <p class="text-muted-foreground leading-relaxed mb-4">
        Herramientas como los agentes inteligentes, los chatbots avanzados o los flujos de automatización con plataformas como n8n y Make permiten que cualquier empresa, independientemente de su tamaño, pueda integrar IA en su día a día de forma práctica y asequible.
      </p>

      <h2 class="text-xl md:text-2xl font-semibold mt-10 mb-4 text-foreground">Beneficios para empresas en Albacete</h2>
      <p class="text-muted-foreground leading-relaxed mb-4">
        Las empresas de Albacete y su entorno operan en un mercado donde la eficiencia marca la diferencia. Estos son los principales beneficios que la automatización con IA puede aportar a tu negocio:
      </p>
      <ul class="list-disc pl-6 space-y-2 text-muted-foreground mb-4">
        <li><strong class="text-foreground font-medium">Reducción de costes operativos:</strong> al eliminar tareas manuales repetitivas, tu equipo puede centrarse en actividades de mayor valor. Menos errores humanos, menos tiempo perdido y menos recursos dedicados a procesos rutinarios.</li>
        <li><strong class="text-foreground font-medium">Mayor eficiencia:</strong> los procesos automatizados se ejecutan en segundos, las 24 horas del día, los 7 días de la semana. Lo que antes llevaba horas ahora se resuelve de forma instantánea.</li>
        <li><strong class="text-foreground font-medium">Escalabilidad sin fricciones:</strong> a medida que tu negocio crece, los sistemas de IA escalan contigo. No necesitas contratar más personal para gestionar más volumen: la automatización absorbe la carga.</li>
        <li><strong class="text-foreground font-medium">Ventaja competitiva:</strong> adoptar IA antes que tu competencia te posiciona como una empresa innovadora. En un mercado local como el de Albacete, esto puede ser un diferenciador decisivo.</li>
        <li><strong class="text-foreground font-medium">Mejor atención al cliente:</strong> chatbots inteligentes y sistemas de respuesta automatizada permiten atender a tus clientes de forma inmediata, personalizada y sin tiempos de espera.</li>
      </ul>

      <h2 class="text-xl md:text-2xl font-semibold mt-10 mb-4 text-foreground">Casos de uso reales</h2>
      <p class="text-muted-foreground leading-relaxed mb-4">
        Para que la teoría cobre sentido, veamos tres ejemplos concretos de cómo la automatización con IA se aplica en empresas similares a las de nuestra región:
      </p>

      <p class="text-muted-foreground leading-relaxed mb-4">
        <strong class="text-foreground font-medium">1. Atención al cliente con chatbot inteligente.</strong> Una tienda online de Albacete recibe decenas de consultas diarias sobre disponibilidad de productos, plazos de envío y devoluciones. Un chatbot basado en IA puede responder automáticamente al 80% de estas preguntas, derivando solo los casos complejos a un agente humano. El resultado: clientes satisfechos las 24 horas y un equipo de soporte que se enfoca en lo que realmente importa.
      </p>
      <p class="text-muted-foreground leading-relaxed mb-4">
        <strong class="text-foreground font-medium">2. Automatización de facturación y administración.</strong> Una gestoría o despacho profesional dedica horas semanales a generar facturas, enviar recordatorios de pago y clasificar documentos. Con un flujo de automatización conectado a su software de gestión, todo esto ocurre automáticamente: la factura se genera, se envía al cliente y se registra en contabilidad sin intervención manual.
      </p>
      <p class="text-muted-foreground leading-relaxed mb-4">
        <strong class="text-foreground font-medium">3. Análisis de datos de ventas.</strong> Un comercio local quiere entender qué productos se venden más en cada temporada, cuáles tienen mejor margen y dónde se pierden ventas. Un sistema de IA analiza los datos históricos, genera informes visuales y sugiere acciones concretas como ajustar stock o lanzar promociones en el momento óptimo.
      </p>

      <h2 class="text-xl md:text-2xl font-semibold mt-10 mb-4 text-foreground">¿Por qué elegir Propus?</h2>
      <p class="text-muted-foreground leading-relaxed mb-4">
        En Propus no somos una consultora genérica que aplica plantillas iguales a todos los clientes. Somos un equipo de emprendedores con raíces en Albacete que entiende las particularidades del tejido empresarial de Castilla-La Mancha. Conocemos los retos de las pymes locales porque los hemos vivido de cerca: la competencia con grandes plataformas, la necesidad de optimizar cada euro invertido y las ganas de crecer sin perder la cercanía con los clientes.
      </p>
      <p class="text-muted-foreground leading-relaxed mb-4">
        Nuestro enfoque combina expertise técnico en inteligencia artificial con un trato cercano y personalizado. Diseñamos soluciones a medida, acompañamos la implementación y nos aseguramos de que la IA genere resultados reales y medibles para tu negocio.
      </p>
      <p class="text-muted-foreground leading-relaxed mb-4">
        Si estás pensando en dar el salto y automatizar tu empresa con inteligencia artificial, nos encantaría escucharte. Agenda una llamada con nuestro equipo y descubre cómo podemos ayudarte a transformar tu negocio.
      </p>
    `,
  },
  {
    slug: "recepcionista-virtual-clinica-dental",
    title: "Recepcionista virtual para clínicas dentales: guía completa (WhatsApp + IA)",
    description:
      "Qué es un agente recepcionista virtual, cómo funciona paso a paso y qué debe incluir el CRM que hay detrás para gestionar la agenda de una clínica dental sin fricciones.",
    date: "2026-05-04",
    readingTime: "9 min de lectura",
    tags: ["Clínicas dentales", "WhatsApp", "IA", "CRM"],
    content: `
      <p class="text-muted-foreground leading-relaxed mb-4">
        Cada vez más clínicas dentales están sustituyendo el teléfono como único canal de reserva por un agente de inteligencia artificial que atiende por WhatsApp las 24 horas del día. Esta guía explica qué es exactamente un recepcionista virtual para clínica dental, cómo funciona por dentro y qué debe tener el sistema que lo sostiene para que la promesa de "agenda que se gestiona sola" sea real y no solo marketing.
      </p>

      <h2 class="text-xl md:text-2xl font-semibold mt-10 mb-4 text-foreground">¿Qué es un recepcionista virtual para clínica dental?</h2>
      <p class="text-muted-foreground leading-relaxed mb-4">
        Un recepcionista virtual es un agente de inteligencia artificial conectado a WhatsApp que conversa con tus pacientes en lenguaje natural para resolver dudas, agendar citas, gestionar cancelaciones y enviar recordatorios, sin que una persona de tu equipo tenga que intervenir en cada mensaje. No es un simple chatbot de respuestas fijas: entiende la intención del paciente, consulta la agenda real de la clínica y actúa en consecuencia.
      </p>
      <p class="text-muted-foreground leading-relaxed mb-4">
        La diferencia frente a un contestador automático o un formulario web es que el paciente escribe como lo haría a un amigo — "necesito una limpieza para la semana que viene" — y el agente entiende, pregunta lo necesario y confirma la cita, todo dentro de la misma conversación de WhatsApp.
      </p>

      <h2 class="text-xl md:text-2xl font-semibold mt-10 mb-4 text-foreground">Por qué una clínica dental lo necesita</h2>
      <p class="text-muted-foreground leading-relaxed mb-4">
        La recepción de una clínica dental compagina varias tareas a la vez: atender al paciente que está en la silla, coger el teléfono, gestionar la agenda de varios profesionales y responder mensajes. Cuando el volumen crece, algo se resiente casi siempre primero: la disponibilidad para nuevos pacientes que contactan fuera de horario o en momentos de máxima ocupación.
      </p>
      <ul class="list-disc pl-6 space-y-2 text-muted-foreground mb-4">
        <li><strong class="text-foreground font-medium">Disponibilidad 24/7:</strong> un paciente que escribe a las 21h con dolor o buscando la primera cita disponible no tiene que esperar a la mañana siguiente para tener respuesta.</li>
        <li><strong class="text-foreground font-medium">Menos huecos vacíos:</strong> al automatizar recordatorios y ofrecer el hueco a otros pacientes cuando alguien cancela, se reduce el tiempo muerto en la agenda.</li>
        <li><strong class="text-foreground font-medium">Recepción liberada para tareas de valor:</strong> tu equipo deja de responder las mismas preguntas repetidas sobre precios, ubicación o tratamientos.</li>
      </ul>

      <h2 class="text-xl md:text-2xl font-semibold mt-10 mb-4 text-foreground">Cómo funciona paso a paso</h2>
      <p class="text-muted-foreground leading-relaxed mb-4">
        Aunque cada implementación se ajusta a la clínica, el flujo habitual de un agente recepcionista dental sigue esta secuencia:
      </p>
      <ul class="list-disc pl-6 space-y-2 text-muted-foreground mb-4">
        <li><strong class="text-foreground font-medium">1. Recepción del mensaje:</strong> el paciente escribe por WhatsApp con una pregunta, una petición de cita o una cancelación.</li>
        <li><strong class="text-foreground font-medium">2. Identificación de la intención:</strong> el agente distingue si se trata de una consulta informativa, una nueva reserva, un cambio o una urgencia.</li>
        <li><strong class="text-foreground font-medium">3. Consulta a la agenda real:</strong> revisa la disponibilidad de cada profesional según el tipo de tratamiento (limpieza, ortodoncia, endodoncia, revisión).</li>
        <li><strong class="text-foreground font-medium">4. Confirmación y registro:</strong> propone hueco, confirma con el paciente y actualiza el CRM sin que nadie tenga que anotarlo manualmente.</li>
        <li><strong class="text-foreground font-medium">5. Seguimiento posterior:</strong> envía recordatorios previos a la cita y, si se libera un hueco por cancelación, contacta a pacientes en espera para cubrirlo.</li>
      </ul>
      <p class="text-muted-foreground leading-relaxed mb-4">
        Puedes ver el detalle técnico completo de cada una de estas fases en nuestra
        <a href="/blog/chatbot-whatsapp-citas-clinica" class="text-foreground underline underline-offset-4 hover:text-brand-teal">guía específica sobre cómo funciona un chatbot de WhatsApp para citas médicas</a>.
      </p>

      <h2 class="text-xl md:text-2xl font-semibold mt-10 mb-4 text-foreground">Qué debe incluir el CRM que hay detrás</h2>
      <p class="text-muted-foreground leading-relaxed mb-4">
        El agente de WhatsApp es la parte visible, pero su fiabilidad depende del sistema que gestiona la información de la clínica. Un CRM dental completo para sostener esta automatización necesita, como mínimo:
      </p>
      <ul class="list-disc pl-6 space-y-2 text-muted-foreground mb-4">
        <li>Agenda por profesional con franjas horarias y duración real de cada tratamiento.</li>
        <li>Ficha de paciente con historial de tratamientos y datos de contacto centralizados.</li>
        <li>Base de conocimiento propia de la clínica: precios, políticas de cancelación, ubicación y preguntas frecuentes.</li>
        <li>Panel de control con las citas del día, pendientes de confirmar y cancelaciones recientes.</li>
      </ul>
      <p class="text-muted-foreground leading-relaxed mb-4">
        Repasamos con más detalle qué debe tener este tipo de software en nuestra
        <a href="/blog/software-gestion-clinica-dental" class="text-foreground underline underline-offset-4 hover:text-brand-teal">guía sobre software de gestión para clínica dental</a>.
      </p>

      <h2 class="text-xl md:text-2xl font-semibold mt-10 mb-4 text-foreground">El impacto real: menos ausencias, más ingresos</h2>
      <p class="text-muted-foreground leading-relaxed mb-4">
        Uno de los beneficios más medibles de automatizar la recepción es la reducción de ausencias no avisadas ("no-shows"). Cada hueco perdido tiene un coste directo en ingresos y un coste indirecto en la planificación del equipo clínico. Analizamos ese impacto con datos concretos en nuestro artículo sobre
        <a href="/blog/reducir-no-shows-clinica-recordatorios" class="text-foreground underline underline-offset-4 hover:text-brand-teal">cómo reducir las ausencias en las citas de tu clínica con recordatorios automáticos</a>.
      </p>

      <h2 class="text-xl md:text-2xl font-semibold mt-10 mb-4 text-foreground">¿Sirve también para clínicas de estética?</h2>
      <p class="text-muted-foreground leading-relaxed mb-4">
        Aunque el caso de uso principal de esta tecnología son las clínicas dentales, el mismo enfoque se adapta a otros negocios que trabajan por cita, como los centros de estética, con particularidades propias en la gestión de bonos y sesiones múltiples. Contamos un caso real en
        <a href="/blog/automatizar-recepcion-clinica-estetica" class="text-foreground underline underline-offset-4 hover:text-brand-teal">cómo automatizamos la recepción de un centro de estética</a>.
      </p>

      <h2 class="text-xl md:text-2xl font-semibold mt-10 mb-4 text-foreground">Cómo elegir el proveedor adecuado</h2>
      <p class="text-muted-foreground leading-relaxed mb-4">
        Antes de contratar un agente recepcionista virtual para tu clínica dental, conviene comprobar cuatro cosas: que se configure con la información real de tu clínica (no con respuestas genéricas), que puedas revisar y aprobar su funcionamiento antes de que hable con pacientes reales, que tenga un plan claro de derivación a una persona cuando no sepa responder, y que el CRM que lo sostiene sea tan sólido como el propio agente conversacional.
      </p>
      <p class="text-muted-foreground leading-relaxed mb-4">
        Si además quieres renovar la puerta de entrada digital de tu clínica, una web bien diseñada y conectada al agente multiplica el efecto: hablamos de ello en
        <a href="/blog/diseno-web-clinica-dental" class="text-foreground underline underline-offset-4 hover:text-brand-teal">cómo el diseño web de tu clínica dental influye en la conversión a primera cita</a>.
      </p>

      <h2 class="text-xl md:text-2xl font-semibold mt-10 mb-4 text-foreground">Siguiente paso</h2>
      <p class="text-muted-foreground leading-relaxed mb-4">
        En Propus hemos desarrollado AutoClinic, el agente recepcionista de WhatsApp y CRM pensado específicamente para clínicas dentales. Puedes conocer todos los detalles en
        <a href="/soluciones/clinicas" class="text-foreground underline underline-offset-4 hover:text-brand-teal">nuestra solución de agente y CRM para clínicas</a>
        o agendar una llamada de 30 minutos para revisar tu caso concreto sin compromiso.
      </p>
    `,
  },
  {
    slug: "chatbot-whatsapp-citas-clinica",
    title: "Chatbot de WhatsApp para citas médicas: cómo funciona técnicamente",
    description:
      "Desglosamos el funcionamiento técnico de un chatbot de WhatsApp para citas médicas: identificación de intención, consulta de agenda, confirmación y gestión de huecos de última hora.",
    date: "2026-05-18",
    readingTime: "6 min de lectura",
    tags: ["WhatsApp", "IA", "Automatización"],
    content: `
      <p class="text-muted-foreground leading-relaxed mb-4">
        "Chatbot de WhatsApp" suena a menú de opciones rígido con botones numerados. Un agente de citas médicas basado en IA funciona de forma muy distinta: entiende lenguaje natural, consulta datos en tiempo real y toma decisiones dentro de reglas que tú defines. Este artículo desglosa, paso a paso, qué ocurre técnicamente desde que un paciente escribe hasta que su cita queda confirmada.
      </p>

      <h2 class="text-xl md:text-2xl font-semibold mt-10 mb-4 text-foreground">1. Recepción del mensaje y comprensión del lenguaje</h2>
      <p class="text-muted-foreground leading-relaxed mb-4">
        El mensaje del paciente llega a través de la API de WhatsApp Business y pasa a un modelo de lenguaje que interpreta la intención: ¿quiere agendar, cancelar, cambiar de fecha o simplemente preguntar algo? A diferencia de un árbol de decisiones con botones, el paciente puede escribir con sus propias palabras — "¿tenéis hueco esta semana para una revisión?" — y el agente entiende la petición sin necesidad de un formato concreto.
      </p>

      <h2 class="text-xl md:text-2xl font-semibold mt-10 mb-4 text-foreground">2. Consulta a la agenda en tiempo real</h2>
      <p class="text-muted-foreground leading-relaxed mb-4">
        Una vez identificada la intención, el agente consulta el sistema de agenda de la clínica: qué profesionales atienden ese tipo de tratamiento, qué huecos hay disponibles y cuánto dura la cita. Esta consulta ocurre en el momento, por lo que el paciente nunca recibe un hueco que en realidad ya está ocupado.
      </p>

      <h2 class="text-xl md:text-2xl font-semibold mt-10 mb-4 text-foreground">3. Confirmación y actualización automática</h2>
      <p class="text-muted-foreground leading-relaxed mb-4">
        Cuando el paciente elige un hueco, el agente lo confirma dentro de la misma conversación y actualiza automáticamente el CRM de la clínica. No hay doble anotación ni riesgo de que la cita quede solo en el móvil de alguien del equipo: el sistema central queda actualizado al instante.
      </p>

      <h2 class="text-xl md:text-2xl font-semibold mt-10 mb-4 text-foreground">4. Gestión de cancelaciones y huecos de última hora</h2>
      <p class="text-muted-foreground leading-relaxed mb-4">
        Si un paciente cancela, el agente libera el hueco de inmediato en el sistema. Cuando la clínica lo permite, el propio agente puede contactar automáticamente a pacientes en lista de espera para ofrecerles ese hueco recién liberado, algo que manualmente casi nunca llega a hacerse a tiempo.
      </p>

      <h2 class="text-xl md:text-2xl font-semibold mt-10 mb-4 text-foreground">5. Reglas de derivación a una persona</h2>
      <p class="text-muted-foreground leading-relaxed mb-4">
        Un buen agente no intenta responder a todo. Se configura con reglas claras de cuándo derivar la conversación a una persona del equipo: urgencias complejas, quejas o cualquier situación fuera del guion definido. El objetivo no es sustituir a tu equipo, sino descargarlo de la parte repetitiva y previsible.
      </p>

      <h2 class="text-xl md:text-2xl font-semibold mt-10 mb-4 text-foreground">Dónde encaja esto en el día a día de una clínica</h2>
      <p class="text-muted-foreground leading-relaxed mb-4">
        Este funcionamiento técnico es la base sobre la que construimos AutoClinic, nuestro agente recepcionista para el sector salud. Si quieres ver cómo se aplica específicamente al caso de las clínicas dentales, con ejemplos de agenda por tipo de tratamiento, puedes leer nuestra
        <a href="/blog/recepcionista-virtual-clinica-dental" class="text-foreground underline underline-offset-4 hover:text-brand-teal">guía completa de recepcionista virtual para clínica dental</a>
        o conocer directamente
        <a href="/soluciones/clinicas" class="text-foreground underline underline-offset-4 hover:text-brand-teal">nuestra solución de agente y CRM para clínicas</a>.
      </p>
    `,
  },
  {
    slug: "reducir-no-shows-clinica-recordatorios",
    title: "Cómo reducir las ausencias (no-shows) en tu clínica con recordatorios automáticos",
    description:
      "Qué le cuesta a una clínica cada cita a la que el paciente no se presenta y cómo los recordatorios automáticos por WhatsApp reducen drásticamente esas ausencias.",
    date: "2026-06-01",
    readingTime: "6 min de lectura",
    tags: ["Clínicas dentales", "WhatsApp", "Automatización"],
    content: `
      <p class="text-muted-foreground leading-relaxed mb-4">
        Una cita a la que el paciente no se presenta —lo que en el sector se conoce como "no-show"— no es solo una molestia de agenda: es un coste económico directo y un hueco de tiempo clínico que ya no se puede recuperar ese día. Este artículo explica por qué ocurre, cuánto cuesta realmente y cómo un sistema de recordatorios automáticos por WhatsApp reduce ese impacto de forma medible.
      </p>

      <h2 class="text-xl md:text-2xl font-semibold mt-10 mb-4 text-foreground">Por qué se producen las ausencias</h2>
      <p class="text-muted-foreground leading-relaxed mb-4">
        La mayoría de ausencias no se deben a mala fe, sino a un motivo mucho más simple: el paciente olvida la cita. Entre que se reserva y el día señalado pueden pasar semanas, y sin un recordatorio cercano en el tiempo, la cita se diluye entre el resto de compromisos del día a día.
      </p>

      <h2 class="text-xl md:text-2xl font-semibold mt-10 mb-4 text-foreground">El coste real de un hueco vacío</h2>
      <p class="text-muted-foreground leading-relaxed mb-4">
        Cuando un paciente no se presenta, la clínica pierde el ingreso de esa cita, pero también el coste de oportunidad: ese hueco podría haberse ofrecido a otro paciente en lista de espera si se hubiera sabido con antelación suficiente que quedaría libre. Multiplicado por varias ausencias a la semana, el impacto en la facturación mensual de una clínica puede ser considerable.
      </p>

      <h2 class="text-xl md:text-2xl font-semibold mt-10 mb-4 text-foreground">Cómo funcionan los recordatorios automáticos</h2>
      <p class="text-muted-foreground leading-relaxed mb-4">
        Un sistema de recordatorios bien configurado no se limita a un único aviso. El patrón que mejores resultados da combina dos momentos:
      </p>
      <ul class="list-disc pl-6 space-y-2 text-muted-foreground mb-4">
        <li><strong class="text-foreground font-medium">Recordatorio 24 horas antes:</strong> da margen suficiente para que el paciente reorganice su agenda o cancele con tiempo si realmente no puede asistir.</li>
        <li><strong class="text-foreground font-medium">Recordatorio 3 horas antes:</strong> actúa como confirmación final y reduce el olvido de última hora, especialmente en primeras citas.</li>
      </ul>
      <p class="text-muted-foreground leading-relaxed mb-4">
        Al enviarse por WhatsApp en lugar de por SMS o llamada, la tasa de apertura es mucho más alta, y el paciente puede responder directamente para confirmar o pedir cambiar la hora sin tener que llamar a la clínica.
      </p>

      <h2 class="text-xl md:text-2xl font-semibold mt-10 mb-4 text-foreground">Qué hacer cuando sí se cancela</h2>
      <p class="text-muted-foreground leading-relaxed mb-4">
        Los recordatorios no eliminan por completo las cancelaciones, pero adelantan el aviso lo suficiente como para poder reaccionar. Si el hueco queda libre con antelación, un agente automatizado puede contactar a otros pacientes en espera y cubrirlo, en lugar de que se quede vacío sin que nadie se entere a tiempo.
      </p>

      <h2 class="text-xl md:text-2xl font-semibold mt-10 mb-4 text-foreground">Recordatorios como parte de un sistema mayor</h2>
      <p class="text-muted-foreground leading-relaxed mb-4">
        Los recordatorios automáticos dan mejor resultado cuando forman parte de un sistema completo de agenda y CRM, no como una herramienta aislada. Explicamos cómo encaja esta pieza dentro del funcionamiento general de un agente recepcionista en nuestra
        <a href="/blog/recepcionista-virtual-clinica-dental" class="text-foreground underline underline-offset-4 hover:text-brand-teal">guía completa de recepcionista virtual para clínica dental</a>,
        y qué debe tener el software que sostiene todo esto en nuestro artículo sobre
        <a href="/blog/software-gestion-clinica-dental" class="text-foreground underline underline-offset-4 hover:text-brand-teal">software de gestión para clínica dental</a>.
      </p>
      <p class="text-muted-foreground leading-relaxed mb-4">
        Si quieres calcular el impacto real de las ausencias en tu clínica y ver cómo AutoClinic las reduce, puedes conocer
        <a href="/soluciones/clinicas" class="text-foreground underline underline-offset-4 hover:text-brand-teal">nuestra solución de agente y CRM para clínicas</a>
        o agendar una llamada sin compromiso.
      </p>
    `,
  },
  {
    slug: "software-gestion-clinica-dental",
    title: "Qué debe tener un software de gestión para clínica dental (checklist)",
    description:
      "Checklist de las funcionalidades imprescindibles que debe tener un software de gestión para clínica dental: agenda, ficha de paciente, base de conocimiento y panel de control.",
    date: "2026-06-15",
    readingTime: "7 min de lectura",
    tags: ["CRM", "Clínicas dentales", "Gestión"],
    content: `
      <p class="text-muted-foreground leading-relaxed mb-4">
        Elegir un software de gestión para una clínica dental no debería reducirse a comparar precios. El sistema que sostiene tu día a día tiene que resolver problemas muy concretos: agenda por profesional, historial de cada paciente, información propia de la clínica y visibilidad clara de lo que ocurre cada día. Este artículo funciona como checklist para evaluar cualquier CRM dental antes de contratarlo.
      </p>

      <h2 class="text-xl md:text-2xl font-semibold mt-10 mb-4 text-foreground">1. Agenda por profesional y tipo de tratamiento</h2>
      <p class="text-muted-foreground leading-relaxed mb-4">
        No todas las citas duran lo mismo ni las puede atender cualquier profesional. Un buen software dental debe permitir configurar horarios individuales por dentista o higienista, y asociar cada tratamiento a su duración real, para que la agenda no se descuadre por citas mal calculadas.
      </p>

      <h2 class="text-xl md:text-2xl font-semibold mt-10 mb-4 text-foreground">2. Ficha de paciente centralizada</h2>
      <p class="text-muted-foreground leading-relaxed mb-4">
        El historial de tratamientos, alergias, próximas citas y datos de contacto de cada paciente debe vivir en un único lugar accesible para todo el equipo, no repartido entre agendas de papel, notas sueltas y la memoria de quien atendió esa visita.
      </p>

      <h2 class="text-xl md:text-2xl font-semibold mt-10 mb-4 text-foreground">3. Base de conocimiento propia de la clínica</h2>
      <p class="text-muted-foreground leading-relaxed mb-4">
        Precios, políticas de cancelación, ubicación y preguntas frecuentes específicas de tu clínica deben poder configurarse dentro del propio sistema. Esto es especialmente importante si el software también alimenta a un agente de atención automatizada: sin esta base de conocimiento, el agente respondería con información genérica en lugar de la tuya.
      </p>

      <h2 class="text-xl md:text-2xl font-semibold mt-10 mb-4 text-foreground">4. Panel de control con visión del día</h2>
      <p class="text-muted-foreground leading-relaxed mb-4">
        Un buen panel debe mostrar de un vistazo las citas de hoy, las solicitudes pendientes de confirmar y las cancelaciones recientes, sin tener que bucear entre pantallas para saber qué está pasando en la clínica en ese momento.
      </p>

      <h2 class="text-xl md:text-2xl font-semibold mt-10 mb-4 text-foreground">5. Gestión de profesionales y servicios editable</h2>
      <p class="text-muted-foreground leading-relaxed mb-4">
        Los servicios de una clínica cambian: se incorporan tratamientos nuevos, se ajustan precios o se suma un profesional al equipo. El software debe permitir actualizar esta información fácilmente, sin depender de soporte técnico externo para cada cambio.
      </p>

      <h2 class="text-xl md:text-2xl font-semibold mt-10 mb-4 text-foreground">6. Capacidad de conectarse a un agente de atención por WhatsApp</h2>
      <p class="text-muted-foreground leading-relaxed mb-4">
        Cada vez es más habitual que este software no funcione solo como herramienta interna, sino como la base de datos que alimenta a un agente conversacional que atiende a los pacientes directamente. Si te interesa este enfoque, en nuestra
        <a href="/blog/recepcionista-virtual-clinica-dental" class="text-foreground underline underline-offset-4 hover:text-brand-teal">guía completa de recepcionista virtual para clínica dental</a>
        explicamos cómo se conecta todo el sistema, y en
        <a href="/blog/chatbot-whatsapp-citas-clinica" class="text-foreground underline underline-offset-4 hover:text-brand-teal">nuestro artículo técnico sobre chatbots de WhatsApp para citas médicas</a>
        entramos en el detalle de funcionamiento.
      </p>

      <h2 class="text-xl md:text-2xl font-semibold mt-10 mb-4 text-foreground">Cómo lo hemos resuelto en AutoClinic</h2>
      <p class="text-muted-foreground leading-relaxed mb-4">
        El CRM de AutoClinic cubre los seis puntos de este checklist y está diseñado específicamente para clínicas dentales. Puedes ver el detalle en
        <a href="/soluciones/clinicas" class="text-foreground underline underline-offset-4 hover:text-brand-teal">nuestra solución de agente y CRM para clínicas</a>
        o agendar una llamada para revisar tu caso concreto.
      </p>
    `,
  },
  {
    slug: "automatizar-recepcion-clinica-estetica",
    title: "Cómo automatizamos la recepción de un centro de estética con IA",
    description:
      "Caso real: cómo adaptamos nuestro agente recepcionista de WhatsApp a un centro de estética, con control de bonos de sesiones e información de tratamientos.",
    date: "2026-06-29",
    readingTime: "6 min de lectura",
    tags: ["Clínicas de estética", "WhatsApp", "IA"],
    content: `
      <p class="text-muted-foreground leading-relaxed mb-4">
        Aunque nuestro caso de uso principal son las clínicas dentales, el mismo agente recepcionista de WhatsApp se adapta a otros negocios que trabajan por cita. Uno de nuestros primeros beta testers fue un centro de estética real, y este artículo cuenta cómo adaptamos la tecnología a sus particularidades: bonos de sesiones, tratamientos recurrentes y picos de demanda por campañas.
      </p>

      <h2 class="text-xl md:text-2xl font-semibold mt-10 mb-4 text-foreground">El reto: no es lo mismo que una clínica dental</h2>
      <p class="text-muted-foreground leading-relaxed mb-4">
        En una clínica dental, la mayoría de citas son puntuales: una limpieza, una revisión, una sesión de ortodoncia programada. En un centro de estética, en cambio, es habitual que las clientas contraten bonos de varias sesiones del mismo tratamiento, y que existan campañas puntuales que disparan el volumen de consultas en pocos días. El agente tenía que adaptarse a ambas realidades sin perder fiabilidad.
      </p>

      <h2 class="text-xl md:text-2xl font-semibold mt-10 mb-4 text-foreground">Control de bonos y sesiones consumidas</h2>
      <p class="text-muted-foreground leading-relaxed mb-4">
        Añadimos al CRM la capacidad de registrar cuántas sesiones incluye el bono contratado por cada clienta y cuántas ha consumido ya. Cuando la clienta escribe para agendar la siguiente sesión, el agente consulta ese dato automáticamente antes de confirmar, evitando errores de conteo que antes se gestionaban a mano en una hoja aparte.
      </p>

      <h2 class="text-xl md:text-2xl font-semibold mt-10 mb-4 text-foreground">Información de tratamientos en la base de conocimiento</h2>
      <p class="text-muted-foreground leading-relaxed mb-4">
        Configuramos la base de conocimiento del centro con la duración, preparación previa y cuidados posteriores de cada tratamiento, para que el agente pudiera responder preguntas informativas habituales — "¿cuánto dura la sesión?", "¿puedo maquillarme después?" — sin necesidad de que una persona del equipo interviniera en cada conversación.
      </p>

      <h2 class="text-xl md:text-2xl font-semibold mt-10 mb-4 text-foreground">Absorbiendo picos de campaña</h2>
      <p class="text-muted-foreground leading-relaxed mb-4">
        Cuando el centro lanza una promoción en redes sociales, el volumen de mensajes por WhatsApp se dispara en cuestión de horas. Al no depender de que una persona responda una a una, el agente mantuvo el mismo tiempo de respuesta (menos de 5 segundos) durante los picos de demanda, algo que hubiera sido imposible de sostener manualmente sin ampliar el equipo de recepción.
      </p>

      <h2 class="text-xl md:text-2xl font-semibold mt-10 mb-4 text-foreground">Resultado</h2>
      <p class="text-muted-foreground leading-relaxed mb-4">
        El centro mantiene hoy el mismo agente en producción, gestionando la agenda de varias cabinas y profesionales en paralelo, con el control de bonos integrado en el propio flujo de conversación. La base técnica es la misma que describimos en nuestra
        <a href="/blog/recepcionista-virtual-clinica-dental" class="text-foreground underline underline-offset-4 hover:text-brand-teal">guía completa de recepcionista virtual para clínica dental</a>
        y en
        <a href="/blog/chatbot-whatsapp-citas-clinica" class="text-foreground underline underline-offset-4 hover:text-brand-teal">nuestro artículo sobre cómo funciona un chatbot de WhatsApp para citas médicas</a>,
        adaptada a las particularidades de un negocio de estética.
      </p>
      <p class="text-muted-foreground leading-relaxed mb-4">
        Si diriges un centro de estética y quieres ver cómo encajaría en tu caso, puedes conocer
        <a href="/soluciones/clinicas" class="text-foreground underline underline-offset-4 hover:text-brand-teal">nuestra solución de agente y CRM para clínicas</a>
        o agendar una llamada sin compromiso.
      </p>
    `,
  },
  {
    slug: "diseno-web-clinica-dental",
    title: "Diseño web para clínica dental: qué convierte una visita en primera cita",
    description:
      "Qué elementos de diseño y contenido hacen que la web de una clínica dental convierta visitas en primeras citas, y cómo conectarla con un agente de WhatsApp.",
    date: "2026-07-06",
    readingTime: "6 min de lectura",
    tags: ["Diseño web", "Clínicas dentales", "Conversión"],
    content: `
      <p class="text-muted-foreground leading-relaxed mb-4">
        Muchas clínicas dentales invierten en atraer visitas a su web —a través de Google o redes sociales— y pierden gran parte de ese esfuerzo porque la propia web no hace fácil el siguiente paso: reservar una cita. Este artículo repasa qué elementos concretos de diseño y contenido marcan la diferencia entre una web que solo informa y una que realmente convierte.
      </p>

      <h2 class="text-xl md:text-2xl font-semibold mt-10 mb-4 text-foreground">La primera impresión se juega en el móvil</h2>
      <p class="text-muted-foreground leading-relaxed mb-4">
        La mayoría de búsquedas de "clínica dental" se hacen desde el móvil, muchas veces con dolor o una necesidad concreta en mente. Si la web tarda en cargar o el texto no se lee bien sin hacer zoom, el paciente potencial abandona antes de llegar a ver un solo tratamiento. La velocidad de carga y el diseño responsive no son un detalle técnico: son la puerta de entrada.
      </p>

      <h2 class="text-xl md:text-2xl font-semibold mt-10 mb-4 text-foreground">Un camino claro hacia la reserva</h2>
      <p class="text-muted-foreground leading-relaxed mb-4">
        Muchas webs de clínicas listan servicios pero no dejan claro cómo dar el siguiente paso. Un botón de reserva visible en cada sección, y no solo en el pie de página, reduce la fricción entre "me interesa" y "he reservado". Esa fricción es exactamente lo que se elimina cuando la web conecta directamente con un agente de WhatsApp: el paciente pulsa un botón y empieza a agendar sin salir de la página ni tener que buscar un teléfono.
      </p>

      <h2 class="text-xl md:text-2xl font-semibold mt-10 mb-4 text-foreground">Contenido que genera confianza</h2>
      <p class="text-muted-foreground leading-relaxed mb-4">
        Una ficha clara de cada tratamiento, con su duración y el profesional que lo realiza, aporta la información que un paciente nuevo necesita antes de decidirse. La confianza también se construye con detalles que muchas webs de clínicas olvidan actualizar: horarios reales, ubicación exacta y profesionales activos en el equipo.
      </p>

      <h2 class="text-xl md:text-2xl font-semibold mt-10 mb-4 text-foreground">SEO local: aparecer cuando te buscan cerca</h2>
      <p class="text-muted-foreground leading-relaxed mb-4">
        Buena parte de las búsquedas relevantes para una clínica dental incluyen una referencia geográfica: "clínica dental" más el nombre de la ciudad o barrio. Sin una estructura técnica pensada para SEO local, la web puede quedar invisible precisamente en las búsquedas con mayor intención de reserva.
      </p>

      <h2 class="text-xl md:text-2xl font-semibold mt-10 mb-4 text-foreground">Web y agente, mejor juntos</h2>
      <p class="text-muted-foreground leading-relaxed mb-4">
        Cuando la web y el agente recepcionista de WhatsApp funcionan como un mismo sistema, el resultado supera a cualquiera de los dos por separado: la web capta y genera confianza, el agente agenda y resuelve dudas al instante. Puedes ver el funcionamiento completo del agente en nuestra
        <a href="/blog/recepcionista-virtual-clinica-dental" class="text-foreground underline underline-offset-4 hover:text-brand-teal">guía de recepcionista virtual para clínica dental</a>.
      </p>
      <p class="text-muted-foreground leading-relaxed mb-4">
        Si quieres ver ejemplos reales de webs que hemos diseñado, visita nuestro
        <a href="/proyectos/web-design" class="text-foreground underline underline-offset-4 hover:text-brand-teal">portfolio de diseño web</a>,
        o descubre cómo lo aplicamos específicamente al sector salud en
        <a href="/servicios/diseno-web-clinicas" class="text-foreground underline underline-offset-4 hover:text-brand-teal">nuestro servicio de diseño web para clínicas</a>.
      </p>
    `,
  },
]

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug)
}

export function getAllPosts(): BlogPost[] {
  return [...blogPosts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  )
}
