import { NextResponse } from "next/server";
import db from "@/libs/prisma";

export async function GET() {
    try {
      const data = await db.category.findMany();

      return NextResponse.json(data);
    } catch (error) {
      return NextResponse.json(
        {
          message: 'Ocurrió un error al procesar la solicitud.',
        },
        {
          status: 500,
        }
      );
    }
  }

export async function POST (request){
   try {
      const data = await request.json();

      const categoryFound = await db.category.findUnique({
         where:{
            categoryName: data.categoryName,
         }
      })

      if( categoryFound){
         return NextResponse.json(
            {
               message: "categoria ya existe",
            },
            {
               status: 400,
            }
         )
      }
const newCategory = await db.category.create({
    data: {
      categoryName: data.categoryName,
      categoryId: data.categoryId, // Asegúrate de obtener este valor de tu solicitud
    },
  });

      const {...category} = newCategory;
      return NextResponse.json(category);
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
