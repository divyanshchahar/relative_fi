import ImageIndex from "../assets/images/ImageIndex";

type AppProp = {
  prop: string;
};

/**
 * Loads image of the crypto asset
 *
 * @param prop String containing id of the crypto asset
 * @returns Image for the crypto asset
 */

function CoinImageLoader(prop: AppProp) {
  const { prop: id } = prop;

  const [coinImage] = ImageIndex.filter((item) => item.id === id);

  return <img className="coin-image" src={coinImage.imageUrl} alt="" />;
}

export default CoinImageLoader;
