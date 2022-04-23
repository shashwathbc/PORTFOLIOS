import "./product.css";

const Product = ({img,link , name}) => {
  return (
    <div className="p">
      <div className="p-browser">
        <div className="p-circle"></div>
        <div className="p-circle"></div>
        <div className="p-circle"></div>
      </div>

      <a href={link} target="_blank" rel="noreferrer">
         <h1>{name}</h1>
        <img src={img} alt="" className="p-img" />
      </a>

     
    </div>
  );
};

export default Product;