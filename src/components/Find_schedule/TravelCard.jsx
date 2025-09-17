import { Link } from "react-router-dom";




const TravelCard = ({ data = [] }) => {
  return (
    <div className="travel-card-list">
      {data.map((item, index) => (
        <Link
          to={item.url || "#"}
          className="travel-card"
          key={item.id ?? index}
        >
          {/* 左邊圖片 */}
          <div className="card-image">
            <img src={item.image} alt={item.title} />
          </div>


          {/* 右邊文字 */}
          <div className="card-content">
            <h3 className="card-title">{item.title}</h3>
            <p className="card-description">{item.description}</p>


            <div className="card-footer">
              <span className="card-rating">{item.rating}</span>
              <span className="card-price">{item.price}</span>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};


export default TravelCard;



