import clothes from "./clothes.json";
{
  clothes.map((item) => (
    <div key={item.id}>
      <h3>{item.nazwa}</h3>
      <p>Kategoria: {item.kategoria}</p>
      <p>Rozmiar: {item.rozmiar}</p>
      <p>Kolor: {item.kolor}</p>
      <p>Cena: {item.cena} zł</p>
    </div>
  ));
}
