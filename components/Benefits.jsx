import Image from "next/image";

const Benefits = () => {
  return (
    <section className="mt-24 pt-18 min-h-33.75 hero-benefits-bg bg-no-repeat bg-cover relative overflow-hidden">
      <div className="container mx-auto flex flex-col">
        {/* text */}
        <div className="relative flex flex-col md:flex-row justify-between gap-6 md:gap-48 text-gray-300">
          {/* item 1 */}
          <div className="flex-1 flex flex-col gap-6 w-full max-w-[90%]">
           <div>
            <div className="flex items-center justify-start gap-2 mb-4">
              <Image  
              src={"/assets/icons/trophy.svg"} 
              width={24} 
              height={24} 
              alt=""
              />
              <h6 className="uppercase text-white font-extrabold">
                Performance Excellence
              </h6>
              </div>
              <p>
                Crafted from high-performance materials for unmatched durability and comfort.
              </p>
          </div>
          <div>
            <div className="flex items-center justify-start gap-2 mb-4">
              <Image  
              src={"/assets/icons/design.svg"} 
              width={24} 
              height={24} 
              alt=""
              />
              <h6 className="uppercase text-white font-extrabold">
                Stylish Design
              </h6>
              </div>
              <p className="xl:max-w-[320px] xl:mr-auto">
                From classic essentials to cutting-edge trends, our apparel blends fashion with function seamlessly.
              </p>
          </div>
         </div>
          {/* item 2 */}
           <div className="flex-1 flex flex-col gap-6 w-full max-w-[90%]">
           <div>
            <div className="flex items-center justify-start xl:justify-end gap-2 mb-4">
              <Image  
              src={"/assets/icons/build.svg"} 
              width={24} 
              height={24} 
              alt=""
              />
              <h6 className="uppercase text-white font-extrabold">
                Build to last
              </h6>
              </div>
              <p className="xl:text-right">
                Designed to withstand the rigors of active lifestyles, ensuring longevity.
              </p>
            </div>
            <div>
            <div className="flex items-center justify-start xl:justify-end gap-2 mb-4">
              <Image  
              src={"/assets/icons/check.svg"} 
              width={24} 
              height={24} 
              alt=""
              />
              <h6 className="uppercase text-white font-extrabold">
                Wide Selection
              </h6>
              </div>
              <p className="xl:text-right xl:max-w-[72.5%] xl:ml-auto">
                Explore a diverse range of products tailored to meet every athlete's needs.
              </p>
            </div>
          </div>
        </div>
        {/* img */}
        <div className="w-full h-70 xl:h-auto xl:absolute top-0 bottom-0 left-0 right-0">
          {/* logo bg */}
          <div className="w-full h-full flex justify-center items-end relative">
            <Image 
            src={"/assets/img/benefits/s1.png"} 
            width={916} 
            height={604} 
            alt="" 
            className="absolute xl:top-16 z-50"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
