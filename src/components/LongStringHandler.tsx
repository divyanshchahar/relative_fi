import ChangeStringHandler from "../utils/ChangeStringHandler";
import ValueBuilder from "../utils/ValueBuilder";

type AppProp = {
  props: number[];
};

/**
 * Renders JSX with specific classes for long and short string length.
 *
 * @param props
 * @returns `text-container-long`, `price-long` and `small-text-long` clasees if the combined string length of `priceValue` and
 * `changeValue` is less then 19. Other wise returns `text-container-1`, `price` and `small-text`
 */

function LongStringHandler(props: AppProp) {
  const args = props.props;
  const priceValue = ValueBuilder(args[0]);
  const [changeClass, changeValue] = ChangeStringHandler(args[1]);

  console.log(changeValue);

  if (priceValue.length + changeValue.length > 19) {
    return (
      <div className="text-container-long">
        <div className="price-long">{priceValue}</div>
        <div className={`small-text-long ${changeClass}`}>{changeValue}</div>
      </div>
    );
  } else {
    return (
      <div className="text-container-1">
        <div className="price">{priceValue}</div>
        <div className={`small-text ${changeClass}`}>{changeValue}</div>
      </div>
    );
  }
}

export default LongStringHandler;
