import React from "react";
import { Tabs, Tab } from "@nextui-org/react";

export const PathsTabs = () => {
  const [selected, setSelected] = React.useState("amateur");

  return (
    <div className="flex w-full flex-col items-center">
      <Tabs
        aria-label="Options"
        color="primary"
        variant="underlined"
        size="lg"
        classNames={{
          tabList:
            "sm:gap-8 md:gap-12 w-full relative rounded-none p-0  border-divider flex flex-col sm:flex-row",
          cursor: "w-full bg-[#ff8c00]",
          tab: "max-w-fit px-0 h-12 ",
          tabContent: "group-data-[selected=true]:text-[#ff8c00]",
          panel: "w-full mx-auto max-w-screen-md text-center",
        }}
        selectedKey={selected}
        onSelectionChange={setSelected}
      >
        <Tab
          key="amateur"
          title={
            <div className="flex items-center space-x-2">
              <span>Ajedrez para la vida</span>
            </div>
          }
        >
          <div>
            <h3 className="mb-8 mt-4 text-2xl tracking-tight font-extrabold text-gray-900 dark:text-white text-center">
              Ajedrez para la vida
            </h3>
            <p className="mb-4 leading-loose text-justify">
              ¿Te gustaría sumergirte en el fascinante mundo del ajedrez y
              aprender a jugar por puro placer, disfrutando cada partida al
              máximo? ¿O tal vez prefieres hacer del ajedrez tu pasatiempo
              favorito, dedicando tiempo a desafiar tu mente y divertirte con
              cada movimiento? ¿Te interesa mejorar tus habilidades de lógica y
              concentración, beneficiándote en diferentes aspectos de tu vida
              diaria? ¿Te gustaría formar parte de nuestra familia ajedrecística
              compartiendo espacios de encuentro, dialogo, aprendizaje y
              entretenimiento? ¿Quieres ampliar tus conocimientos y conocer la
              multiplicidad de herramientas que te ayudarán a superarte cada
              día?
            </p>
            <p className="leading-loose text-justify">
              Si tu respuesta es ¡Sí! Entonces este es tu camino. ¡Te invitamos
              a explorar el camino "Ajedrez para la Vida" y descubre cómo el
              ajedrez puede ser una experiencia enriquecedora y gratificante
              para ti!
            </p>
          </div>
        </Tab>
        <Tab
          key="competition"
          title={
            <div className="flex items-center space-x-2">
              <span>Ajedrez de competición</span>
            </div>
          }
        >
          <div>
            <h3 className="mb-8 mt-4 text-2xl tracking-tight font-extrabold text-gray-900 dark:text-white text-center">
              Ajedrez de competición
            </h3>
            <p className="mb-4 leading-loose text-justify">
              ¿Estás listo para llevar tu juego de ajedrez al siguiente nivel y
              alcanzar el alto rendimiento en competiciones? ¿Te emociona la
              idea de ser guiado por maestros de ajedrez experimentados, que te
              brindarán las estrategias y técnicas necesarias para destacarte en
              cada partida? ¿Buscas la mejora continua, comprometiéndote con la
              disciplina y el entrenamiento requerido para perfeccionar tus
              habilidades y tácticas de juego? ¿Eres de las personas apasionadas
              por la competición, deseando enfrentarte a oponentes de alto nivel
              y demostrar tu habilidad en el tablero? ¿Quieres que te orientemos
              para usar las mejores herramientas y estrategias para alcanzar un
              título internacional? ¿Te interesa formarte para hacer del ajedrez
              una profesión, perfeccionándote para acompañar en diferentes
              ámbitos, como la dirigencia, el arbitraje, la educación y el
              entrenamiento de alto rendimiento?
            </p>
            <p className="leading-loose text-justify">
              ¡Descubre el camino "Ajedrez de Competición" y prepárate para
              desafiar tus límites y alcanzar nuevos logros en el apasionante
              mundo del ajedrez competitivo!
            </p>
          </div>
        </Tab>
        <Tab
          key="damas"
          title={
            <div className="flex items-center space-x-2">
              <span>El Camino de las Damas</span>
            </div>
          }
        >
          <div>
            <h3 className="mb-8 mt-4 text-2xl tracking-tight font-extrabold text-gray-900 dark:text-white text-center">
              El Camino de las Damas
            </h3>
            <p className="mb-4 leading-loose text-justify">
              En nuestra nueva propuesta nos enfocamos en crear un espacio único
              y agradable para las damas en el ajedrez. Reconocemos el esfuerzo
              y la dedicación de las mujeres en un deporte mayoritariamente
              practicado por hombres, y queremos promover su participación
              activa en todos los niveles del ajedrez.
            </p>
            <p className="mb-4 leading-loose text-justify">
              Este Camino es transversal a los demás. Queremos destacar el
              talento y la capacidad de las mujeres en el ajedrez, fomentando su
              participación como ajedrecistas, entrenadoras, árbitros y líderes
              en la comunidad ajedrecística.
            </p>
            <p className="leading-loose text-justify">
              Si estás buscando un espacio donde puedas disfrutar, entrenarte y
              crecer en un ambiente especialmente diseñado para mujeres y niñas,
              este camino es para ti. Te invitamos a seguirlo con el objetivo de
              superarte cada día y alcanzar tus metas, incluyendo la conquista
              de títulos absolutos en el mundo del ajedrez.
            </p>
          </div>
        </Tab>
      </Tabs>
    </div>
  );
};
