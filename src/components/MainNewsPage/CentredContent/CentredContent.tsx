import MainPageCenterNews from "./MainPageCenterNews";
import RightNowSection from "./RightNowSection";
import MiniNews from "./MiniNews/MiniNews";

export default function CentredContent(): JSX.Element {
  return (
    <div className="centred__news">
      <RightNowSection id={1} />
      <MainPageCenterNews id={6} />
      <MiniNews id={5} />
      <MiniNews id={14} />
      <MainPageCenterNews id={7} />
      <MiniNews id={8} />
      <MainPageCenterNews id={9} />
    </div>
  );
}
