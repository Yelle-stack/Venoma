import { FaArrowRight } from "react-icons/fa";

const Cta = () => {
  return (
    <section className="mt-24 bg-accent py-20">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row items-center justify-between">
          <h3 className="h3 text-center mb-6 xl:mb-0">
            Founded with a passion for excellence
          </h3>
          <button className="btn btn-primary gap-2.5">
            Browse our collection <FaArrowRight />
          </button>
        </div>
      </div>
    </section>
  )
};

export default Cta;
