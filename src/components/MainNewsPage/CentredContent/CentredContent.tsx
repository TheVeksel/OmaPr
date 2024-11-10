import MainPageCenterNews from "./MainPageCenterNews";
import RightNowSection from "./RightNowSection";

export default function CentredContent(): JSX.Element {
  return (
    <div className="centred__news">
      <RightNowSection id={0} />
      <MainPageCenterNews />
    </div>
  );
}
