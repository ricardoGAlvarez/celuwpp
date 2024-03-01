import Image from "next/image";
import Link from "next/link";
function Card({  productName, precio,  category,id }) {
  return (
    <div className=" mt-10 flex justify-center ">
      <div className="">
        <div className="rounded-xl relative border pb-2  shadow-md shadow-gray-400 h-80 flex flex-col justify-between">
          <div className="bg-gray-400 relative overflow-hidden rounded-t-xl">
            {/* <div className="absolute top-2 right-3 z-10">
              <span className={`${className} rounded-full p-1 px-2 text-white`}>
                {estado}
              </span>
            </div> */}
            <Image
              src="/comida.jpg"
              alt="Imagen de plato"
              width={300}
              height={220}
              className="object-contain"
            />
          </div>
          <div className="px-2">
            <h4 className="mt-4 text-xl font-semibold">{productName}</h4>
            <span>{category}</span>
            <div className="flex justify-between mt-2 text-gray-500">              
              <span>$ {precio}</span>
            </div>
            <Link href={`/products/detail/${id}`}>
              <div className="w-full text-center mt-4 px-4 py-2 bg-green-500 text-white rounded-full">
                Ver
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
