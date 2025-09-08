import { Link } from "react-router-dom";


const Trip_travelcard = ({
  id,
  image,
  title,
  subtitle,
  rating,
  reviews,
  attendees,
  price,
  to,
}) => {
  return (
    <div className="tc_card_container">
      <Link className="tc-card" to={to} state={{ id }}>
        <img className="tc-img" src={image} alt={title} loading="lazy" />


        <div className="tc-body">
          <h3 className="tc-title">{title}</h3>
          <p className="tc-sub">{subtitle}</p>


          <div className="tc-meta">
            ⭐ {rating}({reviews}){attendees}
          </div>
          <div className="tc-price">NT ${price}元起</div>
        </div>
      </Link>
    </div>
  );
};


export default Trip_travelcard;



