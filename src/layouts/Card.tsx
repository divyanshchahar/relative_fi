// IMPORTING COMPONENETS
import ChangeStringHandler from "../utils/ChangeStringHandler";
import ValueBuilder from "../utils/ValueBuilder";
import CoinImageLoader from "../components/CoinImageLoader";
import PicksImageLoader from "../components/PicksImageLoader";

type AppProps = {
  id: string;
  name: string;
  price: number;
  change: number;
  tvl: number;
  picks: string[];
};

/**
 * Renders information for crypto asset
 *
 * @param props Detais of Crypto Trade
 * @returns JSX elements to render all the trading information of a crypto asset
 */

function Card(props: AppProps) {
  const { id, name, price, change, tvl, picks } = props;

  const [changeClass, changeString]: [string, string] =
    ChangeStringHandler(change);

  const priceValue = ValueBuilder(price);
  const tvlValue = ValueBuilder(tvl);

  let formatter = Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  return (
    <div className="card" key={id}>
      {/* image of coin */}
      <div className={`coin-logo-container ${id}fill`}>
        <CoinImageLoader prop={id} />
      </div>

      {/* DETAILS OF COINS */}
      <div className="detail-container">
        {/* name */}
        <p className="property-tag">{name}</p>

        {/* price and change */}
        <div className="text-container-1">
          <div className="price">{priceValue}</div>
          <div className={`small-text ${changeClass}`}>{changeString}</div>
        </div>

        <p className="property-tag">Price</p>

        {/* tvl */}
        <div className="text-container-2">{tvlValue}</div>

        <p className="property-tag">TVL</p>

        {/* picks */}
        <PicksImageLoader prop={picks} />
        <p className="property-tag">Popular Pick</p>
      </div>
    </div>
  );
}

export default Card;
