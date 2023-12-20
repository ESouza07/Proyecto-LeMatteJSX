const productos = [
    {
      id: "torpedo",
      nombre: "Mate Torpedo",
      descripcion: "Comodo agarre y hermoso a la vista",
      stock: 10,
      precio: 8000,
      imagen: "./public/images/matetorpedo.jpg",
      categoria: "mates"
    },
    {
      id: "trenzado",
      nombre: "Mate Trenzado",
      descripcion: "Destaca por su estetica y su fabricacion manual",
      stock: 2,
      precio: 7500,
      imagen: "./public/images/matetrenzado.jpg",
      categoria: "mates"
    },
    {
      id: "imperial",
      nombre: "Mate Imperial",
      descripcion: "De gran tamaño, ideal para compartir",
      stock: 6,
      precio: 15000,
      imagen: "./public/images/mateimperial.jpg",
      categoria: "mates"
    },
    {
      id: "super",
      nombre: "Mate Super Imperial",
      descripcion: "De gran tamaño, destaca por su cincelado",
      stock: 10,
      precio: 20000,
      imagen: "./public/images/matesuperimperial.jpg",
      categoria: "mates"
    },
    {
      id: "tucangua",
      nombre: "Yerba Tucangua",
      descripcion: "Suave y con poco palo, para su mayor sabor",
      stock: 7,
      precio: 3400,
      imagen: "./public/images/yerbatucan.png",
      categoria: "yerbas"
    },
    {
      id: "reiverde",
      nombre: "Yerba Rei Verde",
      descripcion: "De las mejores cosechas del pais",
      stock: 9,
      precio: 4000,
      imagen: "./public/images/yerbareiverde.png",
      categoria: "yerbas"
    },
    {
      id: "vieja",
      nombre: "Yerba Picada Vieja",
      descripcion: "Muchos años en el mercado demuestran su gran sabor",
      stock: 15,
      precio: 5000,
      imagen: "./public/images/yerbavieja.png",
      categoria: "yerbas"
    },
    {
      id: "canarias",
      nombre: "Yerba Canarias",
      descripcion: "La mejor yerba del mercado, traida desde Brasil",
      stock: 20,
      precio: 8000,
      imagen: "./public/images/yerbacanaria.png",
      categoria: "yerbas"
    },
    {
      id: "termo1",
      nombre: "Termo Autocebante ",
      descripcion: "Comodo, para gente que toma mate laburando",
      stock: 4,
      precio: 10000,
      imagen: "/public/images/termo1.png",
      categoria: "termos"
    },
    {
      id: "termo2",
      nombre: "Termo Media Manija",
      descripcion: "Comodo y canchero, tipico de futbolista",
      stock: 10,
      precio: 20000,
      imagen: "/public/images/termo2.png",
      categoria: "termos"
    },
    {
      id: "termo3",
      nombre: "Termo Stanley 1L",
      descripcion: "Reconocida marca a nivel mundial, conserva la temperatura hasta 48hs",
      stock: 5,
      precio: 45000,
      imagen: "/public/images/termo3.png",
      categoria: "termos"
    },
    {
      id: "termo4",
      nombre: "Termo Stanley Mate System",
      descripcion: "Reconocida marca a nivel mundial, conserva la temperatura hasta 48hs",
      stock: 10,
      precio: 90000,
      imagen: "/public/images/termo4.png",
      categoria: "termos"
    },
  ];
  
  const obtenerProductos = new Promise((resolve, reject) => {
    //Simulamos un retraso de red
    setTimeout(() => {
      resolve(productos);
    }, 2000);
  });
  
  export default obtenerProductos