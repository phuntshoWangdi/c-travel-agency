import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Container from "@/components/Container";
import Section from "@/components/Section";
import Carousel from "@/components/Carousel"
import Home from "@/components/Home/Home";
import TourPackages from "@/components/TourPackages/TourPackages";
import CTA from "@/components/CTA";

const BasePage: React.FC = () => {
  return (
    <>
      <Carousel />
      <Container>
        <Home />
        <TourPackages />
        <Section
          id="testimonials"
          title="What Our Guests Say"
          description="Hear from those who have been with us."
        >
          <Testimonials />
        </Section>
        <FAQ />
        <CTA />
      </Container>
    </>
  );
};

export default BasePage;
