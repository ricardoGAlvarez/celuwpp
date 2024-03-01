import { NextResponse } from "next/server";
import db from "@/libs/prisma";

export async function GET(){
   const data = await db.product.findMany()
   return NextResponse.json(data);

}

export async function POST(request) {
   try {
     const data = await request.json();
 
     const productFound = await db.product.findUnique({
       where: {
         productName: data.productName,
       },
     });
 
     if (productFound) {
       return NextResponse.json(
         {
           message: "Producto ya existe",
         },
         {
           status: 400,
         }
       );
     }
 
     const newProduct = await db.product.create({
       data: {
         productName: data.productName,
         description: data.description,
         price: data.price,
         stock: data.stock,
         categories: { connect: { id: data.categoryId } }, // Conectar con la categoría seleccionada
       },
     });
 
     const { id, productName, description, price, stock } = newProduct;
     return NextResponse.json({ id, productName, description, price, stock });
   } catch (error) {
     console.error("Error al procesar la solicitud:", error);
     return NextResponse.json(
       {
         message: "Ocurrió un error al procesar la solicitud.",
       },
       {
         status: 500,
       }
     );
   }
 }
 

 
