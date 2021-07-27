import map from "../../../assets/map.png";

import useStyles from "./useStyles";

const MapComponent = () => {
  const styles = useStyles();

  return <img className={styles.map} src={map} alt="map" />;
};
export default MapComponent;
