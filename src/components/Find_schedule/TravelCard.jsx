import "/src/sass/components/_TravelCard.scss";

const TravelCard = ({ data }) => {
  return (
    <div className="travel-card-list">
      {data.map((item, index) => (
        <div className="travel-card" key={index}>
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
        </div>
      ))}
    </div>
  );
};

export default TravelCard;
