import { motion } from 'framer-motion';
import photo1 from '../assets/photo1.webp'
import photo2 from '../assets/photo2.webp'
import photo3 from '../assets/photo3.webp'
import photo4 from '../assets/photo4.webp'
import photo5 from '../assets/photo5.webp'
import photo6 from '../assets/photo6.webp'


const Guests = () => {
  const images = [photo1, photo2, photo3, photo4, photo5, photo6];

  return (
    <section className="guests">
      <div className="container">
        <motion.h3
          className="guests-title"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <span>Відвідувачі</span> SkyView Cinema
        </motion.h3>

        <div className="img-block">
          {images.map((img, index) => (
            <motion.img
              loading='lazy'
              key={index}
              src={img}
              alt={`Гість ${index + 1}`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.25 }}
              viewport={{ once: true, amount: 0.3 }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Guests;

