import Image from "next/image";
import Link from "next/link"
function Steps() {
  return (
   <div className="w-full p-4 flex justify-center items-center">
     <div className="p-4 bg-green-100  rounded-xl  w-11/12">
      <h2 className="text-center text-2xl font-bold my-5">
        Come bien en tres pasos
      </h2>
      <div className="flex flex-col items-center  gap-x-32 gap-y-10 lg:flex-row lg:justify-center">
        <div className="flex  flex-col items-center w-80">
          <Image
            src="/step1.svg"
            alt="step1"
            width={400}
            height={400}
            className="w-28 h-28 rounded-full"
          ></Image>
          <div className="text-gray-700 p-3 mx-4">
            <h3 className="font-bold text-xl">1. Elegir</h3>
            <p className="ms-3">
              Nuestros chefs cocinan para ti, una carta nueva cada semana.
            </p>
          </div>
        </div>
        <div className="flex  flex-col items-center w-80">
          <Image
            src="/step2.svg"
            alt="step2"
            width={400}
            height={400}
            className="w-28 h-28 rounded-full"
          ></Image>
          <div className="text-gray-700 p-3 mx-4">
            <h3 className="font-bold text-xl">2. Recibe</h3>
            <p className="ms-3">
              Te lo enviamos a domicilio en transporte refrigerado.
            </p>
          </div>
        </div>
        <div className="flex  flex-col items-center w-80">
          <Image
            src="/step3.svg"
            alt="step3"
            width={400}
            height={400}
            className="w-28 h-28 rounded-full"
          ></Image>
          <div className="text-gray-700 p-3 mx-4">
            <h3 className="font-bold text-xl">3. Disfruta</h3>
            <p className="ms-3">
              Recuerda puedes guardar tu comida durante 3 días en tu nevera y la tendrás lista en 3
              minutos.
            </p>
          </div>
        </div>
        
      </div>
      <div className=" flex justify-center">
      <Link href={"/products"} className="bg-orange-400 text-white rounded-xl py-2 px-4 w-64 font-bold text-center">
        REALIZAR UN PEDIDO</Link>
      </div>
    </div>
   </div>
  );
}

export default Steps;
