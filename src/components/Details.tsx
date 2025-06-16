import { motion } from 'framer-motion';
import DetailCard from "./DetailCard";
import popcorn from "../assets/popcorn.svg";
import photo6 from '../assets/photo6.webp'
import photo2 from '../assets/photo2.webp'
import photo3 from '../assets/photo3.webp'
import photo4 from '../assets/photo4.webp'
import chair from '../assets/chair.svg';
import admission from '../assets/admission.svg';

const Details = () => {
  return (
    <section className="details">
      <div className="container">
        <div className="info-block">
          {[admission, popcorn, chair].map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true, amount: 0.3 }}
              className='motion-block'
            >
              <DetailCard img={img} />
            </motion.div>
          ))}
        </div>

        <div className="img-block">
          {[photo6, photo2, photo3, photo4].map((img, index) => (
            <motion.img
              key={index}
              src={img}
              alt={`Фото ${index + 1}`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true, amount: 0.3 }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Details;
