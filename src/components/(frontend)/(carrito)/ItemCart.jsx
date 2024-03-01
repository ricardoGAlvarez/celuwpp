import Image from "next/image";
import comida from "../../../../public/comida.jpg";
import Cantidad from "@/components/(frontend)/(carrito)/Cantidad";
import { X } from "lucide-react";
import { useCart } from "@/hooks/useCart";

function ItemCart({ product }) {
  const comidaImg = comida;
  const { addToCart, removeFromCart } = useCart();

  const handleRemoveFromCart = () => {
    removeFromCart(product);
  };


  return (
    <div className="flex mt-5 items-center border-b-2 ">
      <div className="flex w-full">
        <Image
          src={comidaImg}
          width={120}
          height={120}
          className="rounded-xl m-4"
          alt="img"
        ></Image>
        <div className="flex flex-col w-full">
          <div className="flex justify-between">
            <span className="w-11/12 ">{product.nombre}</span>
            <button
              onClick={handleRemoveFromCart }
              className="rounded-xl mb-3 p-0.5 bg-red-500 text-white hover:bg-red-400"
            >
              <X />
            </button>
          </div>
          <span>{product.description}</span>
          <div className="mt-2 gap-3 flex justify-around items-center">
            <Cantidad
              productId={product.id}
            />

          </div>
        </div>
      </div>
    </div>
  );
}

export default ItemCart;
