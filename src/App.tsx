import { useRef } from 'react';
import Acquaintance from './components/Acquaintance';
import Contact from './components/Contact';
import Details from './components/Details';
import Guests from './components/Guests';
import MainBanner from './components/MainBanner';
import Reservation from './components/Reservation';
import UpcomingSessions from './components/UpcomingSessions';
import './styles/main.scss';

function App() {
  const contactRef = useRef<HTMLElement | null>(null);
  const reservationRef = useRef<HTMLElement | null>(null);
  const acquaintanceRef = useRef<HTMLElement | null>(null);
  const upcomingRef = useRef<HTMLElement | null>(null);

  const scrollToSection = (ref: React.RefObject<HTMLElement | null>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <MainBanner
        scrollToSection={scrollToSection}
        contactRef={contactRef}
        reservationRef={reservationRef}
        acquaintanceRef={acquaintanceRef}
        upcomingRef={upcomingRef}
      />
      <Acquaintance sectionRef={acquaintanceRef} />
      <UpcomingSessions
        sectionRef={upcomingRef}
        scrollToSection={scrollToSection}
        resRef={reservationRef}
      />
      <Reservation sectionRef={reservationRef} />
      <Details />
      <Guests />
      <Contact sectionRef={contactRef} />
    </>
  );
}

export default App;
