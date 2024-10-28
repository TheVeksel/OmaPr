import CentredContent from "./CentredContent/CentredContent";
import SidedContent from "./SidedContent/SidedContent";
export default function MainNewsPage() {
  return (
    <main>
      <section className="all__news">
        <CentredContent/>
        <SidedContent/>
      </section>
    </main>
  );
}
