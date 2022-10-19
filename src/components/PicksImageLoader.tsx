import ImageIndex from "../assets/images/ImageIndex";

type AppProp = {
  prop: string[];
};

/**
 * Renders images of crypto assets
 *
 * @param prop Array of crypto asset ids
 * @returns Images of crypto assets
 */

function PicksImageLoader(prop: AppProp) {
  const picksImages: any[] = [];
  const { prop: picks } = prop;
  picks.forEach((picksItem) => {
    ImageIndex.map((imageItem) => {
      if (imageItem.id === picksItem) {
        picksImages.push(imageItem.imageUrl);
      }
    });
  });
  return (
    <div className="picks-container">
      {picksImages.map((item) => {
        return (
          <img
            className="picks"
            src={item}
            alt="coin to be buy with this trade"
          />
        );
      })}
    </div>
  );
}

export default PicksImageLoader;
