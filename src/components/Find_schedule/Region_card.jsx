import Button from "../Button";
import { Link } from "react-router-dom";
import "/src/sass/components/_Region_card.scss";

const Region_card = ({ img, btnName, btnUrl }) => {
  return (
    <div className="region_card">
      <img src={img} className="region_card_img" alt="" />
      <Link to={btnUrl} className="btn_top">
        {btnName}
      </Link>
      <Link to={btnUrl} className="btn_right">
        <Button />
      </Link>
    </div>
  );
};
export default Region_card;
