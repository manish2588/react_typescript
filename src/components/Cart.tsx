type PropTypes = {
  title: string;
  url: string;
};

function Cart({ title, url }: PropTypes) {
  return (
    <div className="cart">
      <h1>{title}</h1>
      <div>
        <img src={url} alt="alt" className="image" />
      </div>
    </div>
  );
}

export default Cart;
