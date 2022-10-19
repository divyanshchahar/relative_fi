/**
 * Returns a string generated from the price of the asset
 *
 * @param args Numeric Value value that needs to be formatted as currency string
 * @returns String formatted as USD currency notion
 */

function ValueBuilder(args: number) {
  let formatter1 = Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 11,
  });

  let formatter2 = Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  let val: string = "";

  if (args < 1) {
    val = formatter1.format(args);
  } else {
    val = formatter2.format(args);
  }

  return val;
}

export default ValueBuilder;
