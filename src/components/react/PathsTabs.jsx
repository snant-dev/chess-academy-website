import React, { useState } from "react";
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
          tabList: "gap-12 w-full relative rounded-none p-0  border-divider",
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
            <p className="mb-4 leading-loose text-left">
              ¿Te gustaría sumergirte en el fascinante mundo del ajedrez y
              aprender a jugar por puro placer, disfrutando cada partida al
              máximo? ¿O tal vez prefieres hacer del ajedrez tu pasatiempo
              favorito, dedicando tiempo a desafiar tu mente y divertirte con
              cada movimiento? ¿Te interesa mejorar tus habilidades de lógica y
              concentración, beneficiándote en diferentes aspectos de tu vida
              diaria?
            </p>
            <p className="leading-loose text-left">
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
            <p className="mb-4 leading-loose text-left">
              ¿Estás listo para llevar tu juego de ajedrez al siguiente nivel y
              alcanzar el alto rendimiento en competiciones? ¿Te emociona la
              idea de ser guiado por maestros de ajedrez experimentados, que te
              brindarán las estrategias y técnicas necesarias para destacarte en
              cada partida? ¿Buscas la mejora continua, comprometiéndote con la
              disciplina y el entrenamiento requerido para perfeccionar tus
              habilidades y tácticas de juego? ¿Eres de las personas apasionadas
              por la competición, deseando enfrentarte a oponentes de alto nivel
              y demostrar tu habilidad en el tablero?
            </p>
            <p className="leading-loose text-left">
              ¡Descubre el camino "Ajedrez de Competición" y prepárate para
              desafiar tus límites y alcanzar nuevos logros en el apasionante
              mundo del ajedrez competitivo!
            </p>
          </div>
        </Tab>
      </Tabs>
    </div>
  );
};
