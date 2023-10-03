class Tarea {
  constructor(public titulo: string, public estado: string) {}
}

const tarea1 = new Tarea("Hacer la compra", "Pendiente");
const tarea2 = new Tarea("Lavar el coche", "Completada");
const tarea3 = new Tarea("Pagar las facturas", "Pendiente");

const listaDeTareas: Tarea[] = [tarea1, tarea2, tarea3];

console.log("Tareas:");
listaDeTareas.forEach((tarea, index) => {
  console.log(`Tarea ${index + 1}:`);
  console.log(`  Título: ${tarea.titulo}`);
  console.log(`  Estado: ${tarea.estado}`);
  console.log("--------------");
});
