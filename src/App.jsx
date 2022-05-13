function App() {
  const persona = {
    nombre: "Juan Daniel",
    apellidoPaterno: "Pedro",
    apellidoMaterno: "Palacios",
    edad: 24,

  };

  const nuevoTelefono = "556 887 2222"

  const { nombre, apellidoPaterno, apellidoMaterno, edad} = persona;
  
  const contactoPersona = {
    telefono : "2871202880",
    email : "dan@gmail.com",
    empresa : "ITTUX",
  }

  const infoPersona = { ...persona, ...contactoPersona, puesto: "Comerciante", nuevoTelefono };

  /*
  console.log (persona);
  console.log (contactoPersona);
  console.log (infoPersona);
*/
  const frutas = ["manzana", "naranja", "fresa", "pera"];
  const vegetales = ["lechuga", "zanahoria", "alcachofa"];
  const carnes = ["res", "cerdo", "pollo", "pescado"];

  const alimentos =[
    ...frutas,
    ...vegetales,
    ...carnes,
    "Cualquier otro alimento"
  ];

  console.table (frutas);
  console.table (vegetales);
  console.table (carnes);
  console.table (alimentos);
  
  return (
  <div className = "App">
    <h3>
      {`Soy ${nombre} ${apellidoPaterno} ${apellidoMaterno}
       y tengo ${edad} años.`}
     </h3>
  
  </div>);
}
export default App;