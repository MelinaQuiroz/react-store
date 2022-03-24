import React from "react";
import ItemCount from "./ItemCount";

export default function ItemListContainer() {
   //funcion onAdd
    const onAdd = (counter) => {
    if (counter !== 0) {
        console.log("Agregaste" + {counter} + "articulos exitosamente");
    }
  }
  return (
    <>
      <ItemCount stock={5} initial={1} onAdd={onAdd}/>
    </>
  );
}
