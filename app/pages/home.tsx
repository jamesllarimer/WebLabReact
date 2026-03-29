import type { Route } from "./+types/home";
import {Container} from "reactstrap";
import HeroSection from "~/components/heroSection";
import StaffSection from "~/components/staffSection";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Lefty's Appalachian Kitchen" },
    { name: "description", content: "Lefty's Appalachian Kitchen Restaurant Home page" },
  ];
}

export default function Home() {
  return (
      <Container>
      <HeroSection/>
      <StaffSection/>
      </Container>
  ) ;
}
