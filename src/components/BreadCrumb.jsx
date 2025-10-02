新增在components/BreadCrumb.jsx


import { Link } from "react-router-dom";




const BreadCrumb = ({ items }) => {
  return (
    <nav className="breadcrumb" aria-label="breadcrumb">
      <ul className="breadcrumb__list">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
         
          return (
            <li
              key={index}
              className={`breadcrumb__item ${isLast ? 'breadcrumb__item--active' : ''}`}
            >
              {!isLast && item.to ? (
                <>
                  <Link to={item.to} className="breadcrumb__link">
                    {item.label}
                  </Link>
                  <span className="breadcrumb__separator">/</span>
                </>
              ) : (
                <span className="breadcrumb__text">{item.label}</span>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
};


export default BreadCrumb;

