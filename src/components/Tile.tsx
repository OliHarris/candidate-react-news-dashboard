import styles from "../assets/styles/Tile.module.scss";

interface TileInterface {
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
  date: string | false;
  heading: string;
  image: {
    description: string;
    url: string;
    width: number;
    height: number;
  };
  link: string;
  summary: string | false;
}

const Tile = ({
  author,
  date,
  heading,
  image,
  link,
  summary,
}: TileInterface) => {
  return (
    // apply styles directly in className
    <li className={styles["tile"]}>
      <div className={styles["tile__wrapper"]}>
        <div className={styles["tile__image-container"]}>
          {/* consider using <figure> element here if not using child <source> inside <picture> */}
          {/* <picture> */}
          {/* styles["tile__figure"] added here and in stylesheet */}
          <figure className={styles["tile__figure"]}>
            <img
              src={image.url}
              // styles["tile__image"] not in stylesheet originally
              className={styles["tile__image"]}
              alt={image.description}
            />
          </figure>
          {/* </picture> */}
        </div>
        <div className={styles["tile__heading-container"]}>
          {/* only one H1 allowed on a page! Use a child span then an anchor */}
          {/* <h1 className={styles["tile__heading"]}>{heading}</h1> */}
          <span className={styles["tile__heading"]}>
            <a
              className={styles["tile__heading-link"]}
              href={"https://www.itv.com/" + link}
              target="_blank"
            >
              {heading}
            </a>
          </span>
          {/* date will not be displayed ever - consider adding UNIX timestamp logic if output required */}
          {!!date && <time className={styles["tile__date"]} dateTime={date} />}
          {!!summary && <p className={styles["tile__summary"]}>{summary}</p>}
          {!!author && author.name}
        </div>
      </div>
    </li>
  );
};

export default Tile;
