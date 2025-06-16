import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

interface ContactProps {
  sectionRef: React.RefObject<HTMLElement | null>;
}

const Contact: React.FC<ContactProps> = ({ sectionRef }) => {
  return (
    <section className="contact-section" ref={sectionRef}>
      <motion.h2
        className="contact-title"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        Контактна інформація
      </motion.h2>

      <motion.div
        className="contact-cards"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* Бронювання */}
        <div className="contact-card">
          <motion.h3
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Бронювання
          </motion.h3>
          <p><FaMapMarkerAlt className="icon" /> 123 Anywhere St.,<br />Any City ST 12345</p>
          <p><FaPhoneAlt className="icon" /> 1123–456–7890</p>
          <p><FaEnvelope className="icon" /> hello@reallygreatsite.com</p>
        </div>

        {/* Робочі години */}
        <div className="contact-card">
          <motion.h3
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Робочі години
          </motion.h3>
          <p>Понеділок – П’ятниця<br />17:00 – 23:00</p>
          <p>Субота – Неділя<br />15:00 – 23:00</p>
        </div>

        {/* Соціальні мережі */}
        <div className="contact-card">
          <motion.h3
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            viewport={{ once: true }}
          >
            Соціальні мережі
          </motion.h3>
          <div className="social-icons">
            <FaFacebookF />
            <FaTwitter />
            <FaInstagram />
          </div>
          <button className="photo-button">Познач нас на своїх фото!</button>
        </div>
      </motion.div>

      <motion.p
        className="follow-text"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        Слідкуйте за нами у соцмережах, щоб не пропустити нові кінопокази!
      </motion.p>
    </section>
  );
};

export default Contact;
