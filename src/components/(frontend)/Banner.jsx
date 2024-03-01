import { CheckCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link"
function Banner() {
  return (
    <div className="flex items-center text-black   p-4  flex-col-reverse lg:flex-row ">
        
        <div className="flex flex-col items-center lg:items-start lg:w-1/2 lg:pl-32 ">
          <h3 className="text-green-600 text-2xl font-semibold lg:text-4xl">
            Come sano toda la semana.
          </h3>
          <ul>
            <li className="flex gap-4 my-2">
              <CheckCircle className="text-green-400" />{" "}
              <p>Envios a domicilio</p>
            </li>
            <li className="flex gap-4 my-2">
              <CheckCircle className="text-green-400" />{" "}
              <p>Pedidos por encargo</p>
            </li>
            <li className="flex gap-4 my-2">
              <CheckCircle className="text-green-400" />{" "}
              <p>Entrega rapida y confiable</p>
            </li>
            <li className="flex gap-4 my-2">
              <CheckCircle className="text-green-400" />{" "}
              <p>Aceptamos transferencias</p>
            </li>
          </ul>
          <Link href={"/products"} className="bg-orange-400 text-white rounded-xl py-2 px-4 w-64 font-bold text-center">
            VER CARTA
          </Link>
        </div>
        <div className="lg:w-1/2 p-4 ">
        <Image
          src="/banner.avif"
          alt="userProfile"
          width={700}
          height={500}
          className="rounded-xl"
        />
      </div>
    </div>
  );
}

export default Banner;
