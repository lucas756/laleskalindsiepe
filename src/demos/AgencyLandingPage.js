import React from "react";
import tw from "twin.macro"; //eslint-disable-line
import { css } from "styled-components/macro"; //eslint-disable-line
import AnimationRevealPage from "helpers/AnimationRevealPage.js";

import Hero from "components/hero/BackgroundAsImage.js";
import Features from "components/features/DashedBorderSixFeatures";
import MainFeature from "components/features/TwoColSingleFeatureWithStats2.js";
import MainFeature2 from "components/features/TwoColWithTwoFeaturesAndButtons.js";
import Portfolio from "components/cards/PortfolioTwoCardsWithImage.js";
import Blog from "components/blogs/ThreeColSimpleWithImageAndDashedBorder.js";
import Testimonial from "components/testimonials/TwoColumnWithImageAndProfilePictureReview.js";
import FAQ from "components/faqs/SimpleWithSideImage.js";
import ContactUsForm from "components/forms/TwoColContactUsWithIllustrationFullForm.js";
import Footer from "components/footers/MiniCenteredFooter.js";
import customerSupportIllustrationSrc from "images/customer-support-illustration.svg";
import LaleskaImage from "../images/Laleska Lindsiepe.jpeg";
import JuliaImage from "../images/Julia.jpeg";
import AntonioImage from "../images/Antonio.jpeg";
import CoLABImage from "../images/CoLAB.jpeg";
import Pricing from "components/pricing/TwoPlansWithDurationSwitcher.js";
import SubscribeNewsLetterForm from "components/forms/SimpleSubscribeNewsletter.js";






export default () => (
  <AnimationRevealPage>
    <Hero about="about"  />
    <span id="about"></span>
    <MainFeature />
    <Features />
    <MainFeature2 />
    {/* <Portfolio /> */}
    <Testimonial
      subheading=""
      heading={
        <>
          Nossos clientes <span tw="text-primary-500">nos recomendam.</span>
        </>
      }
      description=""
      testimonials={[
        {
          imageSrc:
            "http://pplware.sapo.pt/wp-content/uploads/2016/05/sala_01-720x494.jpg",
          profileImageSrc: LaleskaImage,
          quote:
            "Ambiente confortável, facilidade nos processos, experiência incrível! Quero ressaltar a boa infraestrutura do Coworking, impressionada.",
          customerName: "Laleska Lindsiepe",
          customerTitle: "Técnica em Prótese Dentária"
        },
        {
          imageSrc: CoLABImage,
          profileImageSrc: JuliaImage,
          quote:
            "Gostaria de parabenizar a empresa pela agilidade de atendimento, competência e comprometimento. Máquinas em perfeito condicionamento, sistema extremamente funcional!",
          customerName: "Julia Barbosa",
          customerTitle: "Técnica em Prótese Dentária"
        },
        {
          imageSrc:
            "https://static.hbt.triider.com.br/photos/project/medium/perspectiva-foto-realista_568905.jpg",
          profileImageSrc: AntonioImage,
          quote:
            "Através do coworking me aprimorei no fluxo digital, hoje me sinto seguro para investir.",
          customerName: "Antonio Achilles",
          customerTitle: "Técnico em Prótese Dentária"
        }
      ]}
      textOnLeft={true}
    />
    {/* <FAQ
      imageSrc={customerSupportIllustrationSrc}
      imageContain={true}
      imageShadow={false}
      subheading="FAQs"
      heading={
        <>
          Do you have <span tw="text-primary-500">Questions ?</span>
        </>
      }
    /> */}
    <Pricing />
    <SubscribeNewsLetterForm />
    <Blog />
    <ContactUsForm />
    <Footer />
  </AnimationRevealPage>
);
