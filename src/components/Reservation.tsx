

import { motion } from 'framer-motion';

interface ReservationProps {
  sectionRef: React.RefObject<HTMLElement | null>;
}

const Reservation: React.FC<ReservationProps> = ({ sectionRef }) => {
  return (
    <section className="reservation" ref={sectionRef}>
      <div className="reservation-overlay">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          SkyView Cinema
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          Бронювання
        </motion.h2>

        <motion.form
          className="reservation-form"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.input
            type="text"
            placeholder="Ім’я"
            required
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            viewport={{ once: true }}
          />
          <motion.input
            type="tel"
            placeholder="Номер телефону"
            required
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            viewport={{ once: true }}
          />
          <motion.input
            type="text"
            placeholder="Назва фільму"
            required
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            viewport={{ once: true }}
          />
          <motion.input
            type="number"
            placeholder="Кількість пуфів"
            required
            min="1"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            viewport={{ once: true }}
          />

          <motion.button
            type="submit"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            viewport={{ once: true }}
          >
            ЗАБРОНЮВАТИ
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
};

export default Reservation;
