import Button from "../Button";
import "/src/sass/components/_Region_card.scss";

const region_card = ({ img, btnName, btnUrl }) => {
  return (
    <div className="region_card">
      <img src={img} className="region_card_img" alt="" />
      <a href={btnUrl} className="btn_top">
        {btnName}
      </a>
      <a href={btnUrl} className="btn">
        <Button />
      </a>
    </div>
  );
};
export default region_card;
