import OverviewSVG from "../../assets/icons/Overview.svg?react";
import HomeSVG from "../../assets/icons/Home.svg?react";

const AtomIcon = {
  Home: ({ size = 24, color = "currentColor", ...props }) => (
    <HomeSVG width={size} height={size} stroke={color} {...props} />
  ),
  Overview: ({ size = 24, color = "currentColor", ...props }) => (
    <OverviewSVG width={size} height={size} stroke={color} {...props} />
  ),
};

export default AtomIcon;
