let recetas = [
    {
        id: 1,
        nombreReceta: "Arroz blanco",
        ingredientes: ["Arroz", "Agua", "Sal", "Aceite", "Cebolla larga"],
        descripcion: "En fuego bajo se pone afritar la cebolla, cuando la cebolla sulte el sabor agregar 2 vasos de agua por cada vaso de arroz y se agrega una cucharada de sal, cuando hierva el agua se agrega el arroz, se espera a que el arroz se seque y se deja en muy bajo el fogon, se tapa y se deja durante 30 minutos y se apaga.",
        categoria: "comida",
        recursos: "https://www.youtube.com/watch?v=hjP2VS1SSm8&ab_channel=TemperoseSabores",
        fechaCreacion: "02-05-2022",
        favorito: false,
        colorCard: "#ff6347"
    },
    {
        id: 2,
        nombreReceta: "Cazuela de marizcos en salsa de ajo",
        ingredientes: ["Arroz", "Agua", "Sal", "Aceite", "Cebolla larga"],
        descripcion: "En fuego bajo se pone afritar la cebolla, cuando la cebolla sulte el sabor agregar 2 vasos de agua por cada vaso de arroz y se agrega una cucharada de sal, cuando hierva el agua se agrega el arroz, se espera a que el arroz se seque y se deja en muy bajo el fogon, se tapa y se deja durante 30 minutos y se apaga.",
        categoria: "comida",
        recursos: "https://www.youtube.com/watch?v=hjP2VS1SSm8&ab_channel=TemperoseSabores",
        fechaCreacion: "02-05-2022",
        favorito: false,
        colorCard: "#ff6347"
    },
    {
        id: 3,
        nombreReceta: "Ceviche",
        ingredientes: ["Arroz", "Agua", "Sal", "Aceite", "Cebolla larga"],
        descripcion: "En fuego bajo se pone afritar la cebolla, cuando la cebolla sulte el sabor agregar 2 vasos de agua por cada vaso de arroz y se agrega una cucharada de sal, cuando hierva el agua se agrega el arroz, se espera a que el arroz se seque y se deja en muy bajo el fogon, se tapa y se deja durante 30 minutos y se apaga.",
        categoria: "comida",
        recursos: "https://www.youtube.com/watch?v=hjP2VS1SSm8&ab_channel=TemperoseSabores",
        fechaCreacion: "02-05-2022",
        favorito: true,
        colorCard: "#ff6347"
    }
]

export function getReceta(id) {
    return recetas.find(
      (receta) => receta.id === id
    );
}