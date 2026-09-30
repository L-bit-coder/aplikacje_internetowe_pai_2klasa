function ItemCard({ item, onEdit, onDelete }) {
  return (
    <article className="item-card">
      <div className="item-card__top">
        <span className="item-card__category">{item.category}</span>

        {item.favorite && <span className="item-card__favorite">♥</span>}
      </div>

      <h2>{item.name}</h2>

      <p>Color: {item.color}</p>
      <p>Status: {item.status}</p>

      <div className="item-card__actions">
        <button onClick={() => onEdit(item)}>Edit</button>

        <button className="danger" onClick={() => onDelete(item)}>
          Delete
        </button>
      </div>
    </article>
  );
}

export default ItemCard;
