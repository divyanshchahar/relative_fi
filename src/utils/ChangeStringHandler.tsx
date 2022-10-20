/**
 * Returns a string generated from percentage change
 *
 * @param change  Positive or negative percent change
 * @returns  A string ending in % preeceded by `change` and either positive or negative symbol
 */

function ChangeStringHandler(change: number): [string, string] {
  if (change > 0) return ["positive", `+ ${change} %`];
  else return ["negative", `${change} %`];
}

export default ChangeStringHandler;
