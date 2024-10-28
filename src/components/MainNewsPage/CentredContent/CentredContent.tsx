import MainPageCenterNews from "./MainPageCenterNews";
import RightNowSection from "./RightNowSection";

export default function CentredContent(): JSX.Element {
  

  return (
      <div className="centred__content">
        <RightNowSection id={1}/>
        <MainPageCenterNews id={2}/>
      </div>
  );
}
