"use client"
import { useState } from "react";
import { useForm } from "react-hook-form";

function AddCategory() {
  const [mostrarContenido, setMostrarContenido] = useState(false);

  const addCategory = () => {
    setMostrarContenido(true);
  };

  const hideModal = () => {
    setMostrarContenido(false);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = handleSubmit(async (data) => {
    const res = await fetch("/api/category", {
      method: "POST",
      body: JSON.stringify({
        categoryName: data.categoryName,

      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (res.ok) {
      hideModal();
    }
  });

  return (
    <div className="my-4">
      <button
        onClick={addCategory}
        className="bg-blue-500 p-2 rounded-xl text-white"
      >
        Agregar Categoria
      </button>
      {mostrarContenido && (
        <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none  ">
          <div className="relative w-auto max-w-md mx-auto my-6">
            <div className="bg-gray-200 rounded-xl shadow-lg p-6 mx-3">
              <h3 className="text-center text-2xl mb-4 text-gray-600">
                Agregar Categoria
              </h3>
              <form onSubmit={onSubmit}>
                <input
                  type="text"
                  placeholder="Nombre del Categoria"
                  id="categoryName"
                  name="categoryName"
                  className="rounded-xl w-full text-black p-2 my-3"
                  {...register("categoryName", {
                    required: {
                      value: true,
                      message: "Campo requerido",
                    },
                  })}
                />
                {errors.categoryName && (
                  <span className="text-red-500">
                    {errors.categoryName.message}
                  </span>
                )}





                <div className="flex justify-between">
                  <button
                    type="submit"
                    className="bg-blue-500 p-2 rounded-xl text-white mt-4 w-full mx-4"
                  >
                    Guardar
                  </button>
                  <button
                    onClick={hideModal}
                    className="bg-red-500 p-2 rounded-xl text-white mt-4 w-full mx-4"
                  >
                    Cancelar
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default AddCategory;
