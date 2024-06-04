import Asesorate from "@/components/asesorate";
import Beca from "./beca";
const BecaAsesorate = () => {
  return (
    <section className="container mt-12">
      <div className="flex flex-col md:flex-row gap-4 justify-between">
        <Asesorate />
        {/* <Beca/> */}
      </div>
    </section>
  );
};

export default BecaAsesorate;
