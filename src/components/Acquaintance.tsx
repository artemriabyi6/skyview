 import React from 'react';
import { motion } from 'framer-motion';
import photo1 from '../assets/photo1.webp';

interface AcquaintanceProps {
  sectionRef: React.RefObject<HTMLElement | null>;
}

const Acquaintance: React.FC<AcquaintanceProps> = ({ sectionRef }) => {
  return (
    <section className="acquaintance" ref={sectionRef}>
      <div className="container">
        <motion.div
          className="acquaintance-text-block"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, amount: 0.4 }}
        >
          <h2 className="acquaintance-title">
            SkyView Cinema — <br />
            <span>
              ваш кінотеатр під <br /> відкритим небом <br /> у Чернівцях
            </span>
          </h2>
          <p className="acquaintance-text">
            SkyView Cinema — це не просто кінотеатр, це досвід. Уявіть собі:
            вечірнє небо, комфортні місця, якісний звук і найкращі кінофільми.
            Ми створили простір, де можна відчути магію кіно у найромантичнішій
            атмосфері.
          </p>
        </motion.div>

        <motion.div
          className="acquaintance-img-block"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true, amount: 0.4 }}
        >
          <img src={photo1} alt="SkyView Cinema ззовні" loading='lazy'/>
        </motion.div>
      </div>
    </section>
  );
};

export default Acquaintance;
