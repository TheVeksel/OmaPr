import MainPageCenterNews from "./MainPageCenterNews";
import RightNowSection from "./RightNowSection";

export default function CentredContent(): JSX.Element {
  

  return (
      <div>
        <RightNowSection id={1}/>
        <MainPageCenterNews id={2}/>
        <MainPageCenterNews id={7}/>
      </div>
  );
}
