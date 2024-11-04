import MainPageCenterNews from "./MainPageCenterNews";
import RightNowSection from "./RightNowSection";

export default function CentredContent(): JSX.Element {
  return (
      <div className="centred__news">
        <RightNowSection id={1}/>
        <MainPageCenterNews id={5}/>
        <MainPageCenterNews id={6}/>
        <MainPageCenterNews id={7}/>
        <MainPageCenterNews id={8}/>
        <MainPageCenterNews id={9}/>
      </div>
  );
}
