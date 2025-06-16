import { motion } from 'framer-motion';
import MovieCard from "./MovieCard";
import stitch from '../assets/stitch.webp';
import spy from '../assets/spy.webp';
import materialists from '../assets/materialists.webp';

interface UpcomingSessionsProps {
  sectionRef: React.RefObject<HTMLElement | null>;
  scrollToSection: (ref: React.RefObject<HTMLElement | null>) => void;
  resRef: React.RefObject<HTMLElement | null>;
}

const UpcomingSessions: React.FC<UpcomingSessionsProps> = ({ sectionRef, scrollToSection, resRef }) => {
  return (
    <section className="upcoming" ref={sectionRef}>
      <div className="container">
        <motion.h2
          className="upcoming-title"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, amount: 0.4 }}
        >
          Найближчі сеанси у <span>SkyView Cinema</span>
        </motion.h2>

        <motion.p
          className="upcoming-subtitle"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true, amount: 0.4 }}
        >
          Обирайте фільм і бронюйте місця просто зараз!
        </motion.p>

        <motion.div
          className="movies-wrapper"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          viewport={{ once: true, amount: 0.4 }}
        >
          <MovieCard scrollToSection={scrollToSection} resRef={resRef} img={spy} />
          <MovieCard scrollToSection={scrollToSection} resRef={resRef} img={stitch} />
          <MovieCard scrollToSection={scrollToSection} resRef={resRef} img={materialists} />
        </motion.div>
      </div>
    </section>
  );
};

export default UpcomingSessions;
