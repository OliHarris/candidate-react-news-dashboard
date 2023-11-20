import Tile from "../components/Tile";
import styles from "../assets/styles/TileGrid.module.scss";

interface TileGridInterface {
  items: [];
  heading: string;
  showDate: boolean;
  showSummary: boolean;
}

const TileGrid = ({
  items,
  heading,
  // unneccessary booleans removed
  showDate,
  showSummary,
}: TileGridInterface) => {
  return (
    // apply styles directly in className
    <section className={styles["tile-grid"]}>
      {heading && <div className={styles["tile-grid__heading"]}>{heading}</div>}
      {/* change to ul with child list items */}
      <ul className={styles["tile-grid__container"]}>
        {items.map(
          (
            item: {
              title: string;
              link: string;
              summary: string;
              image: {
                description: string;
                url: string;
                width: number;
                height: number;
              };
              bulletLinks: [
                {
                  link: string;
                  label: string;
                  externalUrl: boolean;
                },
                {
                  link: string;
                  label: string;
                  externalUrl: boolean;
                }
              ];
              author: {
                name: string;
                role: string;
                biography: string;
                twitterHandle: string;
                image: {
                  description: string;
                  url: string;
                  width: number;
                  height: number;
                };
                link: string;
                visible: boolean;
              };
              video: {
                id: number;
                type: string;
                poster: {
                  description: string;
                  url: string;
                  width: number;
                  height: number;
                };
                guidance: string;
                isRegionalised: null;
                playerId: string;
                accountId: number;
                policyKey: string;
              };
              externalUrl: boolean;
              displayDate: string;
              label: null;
              tileType: null;
              mediaIcon: string;
            },
            index: number
          ) => (
            // also parse in index for key
            <Tile
              key={index}
              author={item.author}
              date={showDate && item.displayDate}
              heading={item.title}
              image={item.image}
              link={item.link}
              summary={showSummary && item.summary}
            />
          )
        )}
      </ul>
    </section>
  );
};

export default TileGrid;
