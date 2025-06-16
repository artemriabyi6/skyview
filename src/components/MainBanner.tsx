import React from "react";
import { motion } from "framer-motion";

interface MainBannerProps {
  scrollToSection: (ref: React.RefObject<HTMLElement | null>) => void;
  contactRef: React.RefObject<HTMLElement | null>;
  reservationRef: React.RefObject<HTMLElement | null>;
  acquaintanceRef: React.RefObject<HTMLElement | null>;
  upcomingRef: React.RefObject<HTMLElement | null>;
}

const MainBanner: React.FC<MainBannerProps> = ({
  scrollToSection,
  contactRef,
  reservationRef,
  acquaintanceRef,
  upcomingRef,
}) => {
  return (
    <div className="main-banner">
      <div className="container">
        <header>
          <nav>
            <ul>
              <motion.li
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
              >
                <a href="#" onClick={() => scrollToSection(upcomingRef)}>
                  Афіша
                </a>
              </motion.li>
              <motion.li
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
              >
                <a href="#" onClick={() => scrollToSection(acquaintanceRef)}>
                  Про нас
                </a>
              </motion.li>
              <motion.li
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
              >
                <a href="#" onClick={() => scrollToSection(reservationRef)}>
                  Забронювати
                </a>
              </motion.li>
              <motion.li
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
              >
                <a
                  className="special"
                  href="#"
                  onClick={() => scrollToSection(contactRef)}
                >
                  Контакти
                </a>
              </motion.li>
            </ul>
          </nav>
        </header>

        <motion.h1
          className="main-banner-title"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
        >
          SkyView Cinema
        </motion.h1>

        <motion.p
          className="main-banner-text"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
        >
          Кінотеатр під відкритим небом
        </motion.p>
      </div>
    </div>
  );
};

export default MainBanner;
