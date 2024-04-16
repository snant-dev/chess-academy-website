import React from "react";
import { Accordion, AccordionItem } from "@nextui-org/react";

export const FAQs = () => {
  const itemClasses = {
    trigger: "text-lg",
  };

  const faqsContent = [
    {
      title:
        '¿Cómo funciona la selección del "Camino" de aprendizaje en la academia?',
      content: `Hemos creado diferentes caminos de aprendizaje con la intención de
        adaptarnos mejor a tus necesidades y objetivos. ¿Eres alguien que
        busca mejorar en competencias de torneos y alcanzar un alto
        rendimiento en el ajedrez? ¿O tal vez prefieres aprender, mejorar tus
        habilidades o tener un nuevo pasatiempo de una manera más relajada
        y divertida? Sea cual fuere tu motivación, nuestros diferentes caminos
        están diseñados para brindarte una experiencia de aprendizaje
        personalizada y gratificante, guiándote hacia el camino (trayecto) que
        mejor se ajuste a tus metas y preferencias en el mundo del ajedrez.`,
    },
    {
      title:
        '¿Cuáles son los diferentes "Caminos" disponibles y qué características tiene cada uno?',
      content: `Actualmente, ofrecemos dos caminos en nuestra academia de ajedrez
      online: 1) Ajedrez para la Vida: Para aquellos que buscan disfrutar del
      ajedrez como un pasatiempo relajado y mejorar habilidades como la
      lógica y la concentración. 2) Ajedrez de Competición: Dirigido a
      quienes desean competir a un nivel más alto, con entrenamiento
      intensivo y la guía de ajedrecistas titulados de alto rendimiento.
      Próximamente, habrá nuevos caminos disponibles. ¡Mantente atento a
      nuestras actualizaciones!`,
    },
    {
      title: '¿Puedo cambiar de "Camino" una vez que haya elegido uno?',
      content:
        'Sí, los estudiantes tienen la flexibilidad de cambiar de "Camino". Si en algún momento no te sientes cómodo con el camino que elegiste inicialmente, simplemente comunícate con tu profesor para solicitar el cambio. Estamos comprometidos en brindarte una experiencia de aprendizaje satisfactoria y adaptada a tus necesidades, por lo que estamos aquí para ayudarte a encontrar el camino que mejor se ajuste a tus objetivos y preferencias en el ajedrez.',
    },
    {
      title: '¿Cómo se organizan las clases según el "Camino" elegido?',
      content: `Las clases se organizan de la siguiente manera según el "Camino"
      elegido. Clases Grupales: En estas clases, contarás con compañeros
      que hayan elegido el mismo "Camino" que tú y que tengan un nivel de
      juego similar. Esta dinámica permite crear un ambiente de aprendizaje
      colaborativo y motivador, donde podrás compartir experiencias y retos
      con otros estudiantes que comparten tus intereses y metas en el
      ajedrez. Clases Individuales: En las clases individuales, tendrás la
      libertad de elegir con qué profesor tener la clase y acordar el día que
      mejor se ajuste a tu horario. Esta opción te brinda la flexibilidad de
      recibir una atención personalizada y enfocada en tus necesidades
      específicas de aprendizaje, adaptando el contenido y el ritmo de las
      clases según tus requerimientos y objetivos en el ajedrez. En ambas
      modalidades, nuestro objetivo es proporcionarte una experiencia de
      aprendizaje efectiva y adaptada a tu estilo, maximizando tu progreso y
      disfrute en el mundo del ajedrez.`,
    },
    {
      title: "¿Cuántos estudiantes hay en cada clase grupal?",
      content:
        'En nuestras clases grupales, cada una cuenta con un máximo de 15 alumnos que comparten el mismo "Camino" y tienen un nivel de juego similar. Esta organización nos permite garantizar un ambiente de aprendizaje dinámico y participativo, donde todos los estudiantes puedan recibir una atención personalizada y aprovechar al máximo las sesiones de aprendizaje en grupo.',
    },
    {
      title: "¿Cuál es la duración y frecuencia de las clases grupales?",
      content:
        'La duración de nuestras clases grupales es de 60 minutos. La frecuencia de las clases grupales puede variar según el plan seleccionado y el "Camino" elegido, y estará especificada en la información detallada de cada curso.',
    },
    {
      title:
        "¿Qué tipo de planes de membresía ofrecen y cuáles son sus beneficios?",
      content: `Ofrecemos tres tipos de planes de membresía.
    Plan Básico:
        Una clase grupal por semana.
        Participación en un evento online por mes.
        Acceso a los materiales de clase.
        Mini-clase de posicionamiento de nivel (una única vez).
        
    Plan Intermedio:
        Todo lo incluido en el Plan Básico, excepto superposiciones.
        Dos clases grupales por semana.
        Participación en todos los eventos online.

    Plan Premium:
        Todo lo incluido en el Plan Intermedio, excepto superposiciones.
        Una clase privada con un profesor a elección por semana.

    Cada plan está diseñado para brindarte una experiencia de aprendizaje única y adaptada a tus necesidades y preferencias en el ajedrez. Elige el plan que mejor se ajuste a tus objetivos y disfruta de todos sus beneficios.
        `,
    },
    {
      title: "¿Es posible probar una clase antes de inscribirse?",
      content:
        "Lamentablemente, no es posible probar una clase antes de inscribirse en nuestra academia de ajedrez online. Sin embargo, tenemos materiales gratuitos disponibles que te permitirán comenzar tu camino. Te invitamos a explorar nuestros cursos gratuitos, streams y contenido del canal de Youtube para descubrir todo lo que nuestra academia tiene para ofrecerte en el mundo del ajedrez.",
    },
    {
      title: "¿Qué sucede si no puedo asistir a una clase programada?",
      content:
        "Es responsabilidad de cada alumno contar con la disponibilidad necesaria para participar en la clase en el horario programado. Sin embargo, en caso de no poder asistir, recibirás los materiales utilizados en la misma para que puedas revisarlos y mantener tu aprendizaje al día. De esta manera, te aseguramos que no te perderás ningún contenido importante y podrás continuar tu progreso en el ajedrez.",
    },
    {
      title:
        '¿Cómo se realiza el seguimiento del progreso del estudiante en su "Camino" de aprendizaje?',
      content:
        'El seguimiento del progreso del estudiante en su "Camino" de aprendizaje estará a cargo de nuestro equipo de profesores. Ellos estarán atentos a tus avances y evaluarán tus habilidades para asegurarse de que estés alcanzando tus objetivos en el ajedrez de manera efectiva y satisfactoria. Nuestro compromiso es garantizar tu desarrollo continuo y éxito en tu camino de aprendizaje.',
    },
    {
      title:
        "¿Ofrecen algún tipo de sistema de becas o ayudas para personas que no cuentan con los recursos necesarios para acceder a la academia?",
      content:
        'En nuestra academia, estamos comprometidos con la accesibilidad y la igualdad de oportunidades en la educación del ajedrez. Por ello, ofrecemos un sistema de becas y ayudas para aquellas personas que no cuenten con los recursos necesarios para acceder a nuestros "Caminos". Si estás interesado/a en conocer más detalles sobre nuestro programa de becas, te invitamos a ponerte en contacto con nuestro equipo de atención al cliente, quienes estarán encantados de proporcionarte toda la información necesaria para que puedas beneficiarte de estas oportunidades. Estamos comprometidos en hacer que el ajedrez sea accesible para todos.',
    },
  ];

  return (
    <Accordion itemClasses={itemClasses}>
      {faqsContent.map((faq) => (
        <AccordionItem key={faq.title} aria-label={faq.title} title={faq.title}>
          <p className="leading-relaxed text-left text-pretty">{faq.content}</p>
        </AccordionItem>
      ))}
    </Accordion>
  );
};
