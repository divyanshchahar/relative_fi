// IMPORTING COMPONENETS
import ValueBuilder from "../utils/ValueBuilder";
import CoinImageLoader from "../components/CoinImageLoader";
import PicksImageLoader from "../components/PicksImageLoader";
import LongStringHandler from "../components/LongStringHandler";

type AppProps = {
  id: string;
  name: string;
  price: number;
  change: number;
  tvl: number;
  picks: string[];
};

/**
 * Renders renders a list of crypto assets
 *
 * @param props Detais of Crypto Trade
 * @returns JSX elements to render all the trading information of a crypto asset
 */

function Card(props: AppProps) {
  const { id, name, price, change, tvl, picks } = props;

  const tvlValue = ValueBuilder(tvl);

  return (
    <div className="card" key={id}>
      {/* image of coin */}
      <div className="coin-logo-container-1">
        <div className={`coin-logo-container-2 ${id}fill`}>
          <CoinImageLoader prop={id} />
        </div>
      </div>

      {/* DETAILS OF COINS */}
      <div className="detail-container">
        {/* name */}
        <p className="property-tag">{name}</p>

        {/* price and change */}
        <LongStringHandler props={[price, change]} />

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
