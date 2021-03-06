import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
//eslint-disable-next-line
import { css } from "styled-components/macro";
import { SectionHeading } from "components/misc/Headings.js";

import defaultCardImage from "../../images/shield-icon.svg";

import { ReactComponent as SvgDecoratorBlob3 } from "../../images/svg-decorator-blob-3.svg";

import FastIconImage from "../../images/fast-icon.svg";
import SimpleIconImage from "../../images/simple-icon.svg";
import LaptopIconImage from "../../images/laptop_chromebook_black_24dp.svg";
import MachineIconImage from "../../images/precision_manufacturing_black_24dp.svg";
import StarIconImage from "../../images/star_black_24dp.svg";
import InsightsIconImage from "../../images/insights_black_24dp.svg";
import LocationIconImage from "../../images/place_black_24dp.svg"



const Container = tw.div`relative`;

const ThreeColumnContainer = styled.div`
  ${tw`flex flex-col items-center md:items-stretch md:flex-row flex-wrap md:justify-center max-w-screen-xl mx-auto py-20 md:py-24`}
`;
const Heading = tw(SectionHeading)`w-full`;

const Column = styled.div`
  ${tw`md:w-1/2 lg:w-1/3 px-6 flex`}
`;

const Card = styled.div`
  ${tw`flex flex-col mx-auto max-w-xs items-center px-6 py-10 border-2 border-dashed border-primary-500 rounded-lg mt-12`}
  .imageContainer {
    ${tw`border-2 border-primary-500 text-center rounded-full p-6 flex-shrink-0 relative`}
    img {
      ${tw`w-8 h-8`}
    }
  }

  .textContainer {
    ${tw`mt-6 text-center`}
  }

  .title {
    ${tw`mt-2 font-bold text-xl leading-none text-primary-500`}
  }

  .description {
    ${tw`mt-3 font-semibold text-secondary-100 text-sm leading-loose`}
  }
`;

const DecoratorBlob = styled(SvgDecoratorBlob3)`
  ${tw`pointer-events-none absolute right-0 bottom-0 w-64 opacity-25 transform translate-x-32 translate-y-48 `}
`;

export default () => {
  /*
   * This componets has an array of object denoting the cards defined below. Each object in the cards array can have the key (Change it according to your need, you can also add more objects to have more cards in this feature component):
   *  1) imageSrc - the image shown at the top of the card
   *  2) title - the title of the card
   *  3) description - the description of the card
   *  If a key for a particular card is not provided, a default value is used
   */

  const cards = [
    {
      imageSrc: LaptopIconImage,
      title: "Software Ceramill",
      description: "Em nossa sala design CAD disponibilizamos 6 m??quinas, todas com software Ceramill instalado com diversos m??dulos para diferentes planejamentos."
    },
    { imageSrc: MachineIconImage, title: "Ceramill-Motion 2", description: "Em nossa sala produ????o CAM dispoibilizamos uma fresadora 5 eixos, a qual trabalha a seco e com irriga????o, para diferentes aplica????es | Ceramill-Motion 2." },
    { imageSrc: StarIconImage, title: "Impress??o 3D | Nextdent 5100 Ceramill", description: "Sistema de impress??o 3D mais r??pido e preciso para flexibilidade e produtividade m??ximas." },
    { imageSrc: InsightsIconImage, title: "Scanner de Alto Desempenho | Ceramill MAP 600", description: "Solu????es inteligentes e eficientes do Scanner da Amann Girrbach permitem um scaneamento preciso das mais diversas indica????es." },
    { imageSrc: FastIconImage, title: "Mais Velocidade", description: "Internet de alta velocidade via Wi-fi e tamb??m via cabo de rede." },
    { imageSrc: LocationIconImage, title: "??tima Localiza????o", description: "Localiza????o privilegiada, possibilitando f??cil acesso e mais mobilidade para voc??." }
  ];

  return (
    <Container>
      <ThreeColumnContainer>
        <Heading>Conhe??a nosso <span tw="text-primary-500">espa??o</span></Heading>
        {cards.map((card, i) => (
          <Column key={i}>
            <Card>
              <span className="imageContainer">
                <img src={card.imageSrc || defaultCardImage} alt="" />
              </span>
              <span className="textContainer">
                <span className="title">{card.title || "Fully Secure"}</span>
                <p className="description">
                  {card.description || "Lorem ipsum donor amet siti ceali ut enim ad minim veniam, quis nostrud. Sic Semper Tyrannis. Neoas Calie artel."}
                </p>
              </span>
            </Card>
          </Column>
        ))}
      </ThreeColumnContainer>
      <DecoratorBlob />
    </Container>
  );
};
