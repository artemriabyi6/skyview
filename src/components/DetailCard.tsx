interface DetailCardProps {
  img: string;
}

const DetailCard: React.FC<DetailCardProps> = ({img}) => {
    return (
    <div className="detail-card">
      <img src={img} alt="Cinema Tickets" className="detail-card-img" loading="lazy" />
      <div className="detail-card-text">
        <em>Перегляд фільмів – безкоштовний</em>
      </div>
    </div>
  );
}
 
export default DetailCard;