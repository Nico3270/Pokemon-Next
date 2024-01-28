import { CarCounter } from "@/app/shopping-car/components/carCounter";
import { useState } from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Shopping Cart',
    description: 'Contador simple',
    keywords: ["Carrito de compras", "Contador de compras"]
   };



export default function CounterPage() {
    
  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
        <span>Productos en el carrito</span>
        <CarCounter value={5}/>
      
    </div>
  );
}