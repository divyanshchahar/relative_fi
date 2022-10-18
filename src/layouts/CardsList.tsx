// IMPORTING COMPONENTS
import Card from "./Card";

// IMPORTING ASSETS
import trading_data from "../assets/data/trading_data.json";

/**
 * Renders cards
 *
 * @returns
 */

function CardsList() {
  return (
    <div className="card-container">
      {trading_data.map((item) => {
        return (
          <Card
            id={item.id}
            name={item.name}
            price={item.price}
            change={item.change}
            tvl={item.tvl}
            picks={item.picks}
          />
        );
      })}
    </div>
  );
}

export default CardsList;
