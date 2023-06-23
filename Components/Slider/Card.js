const Card = ({ renderButtons, img, desc }) => {
  return (
    <CardWrapper>
      <div className="img-container">
        <img src={img} alt="random" />
      </div>

      <div className="content">
        <h2>{desc}</h2>

        {renderButtons()}
      </div>
    </CardWrapper>
  );
};

export default Card;
