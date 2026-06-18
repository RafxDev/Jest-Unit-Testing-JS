const { fetchUserData } = require('./api');

/**
 * LECCIÓN 3: Testing de Código Asíncrono
 * 
 * Conceptos clave:
 * - Retorno de Promesas: Si tu prueba devuelve una Promesa, Jest esperará a que se resuelva.
 * - Async/Await: Puedes marcar el callback de tu prueba como `async` y usar `await` dentro.
 * - `.resolves` y `.rejects`: Modificadores especiales de Jest para simplificar aserciones de promesas.
 */

describe('Lección 3 - Testing de Código Asíncrono', () => {

  test('debería resolver con los datos del usuario usando retorno de Promesa', () => {
    // RETO 1: Para que Jest espere la resolución, debes retornar la promesa.
    // Encadena un `.then()` para validar que los datos devueltos coincidan con { id: 1, name: 'Sofia' }.
    // Pista: return fetchUserData(1).then(data => { expect(data).toEqual(...) });
    return fetchUserData (1).then(data => { expect(data).toEqual({ id: 1, name: 'Sofia' }); }); // Modificar esta línea para agregar el .then() con la aserción
  });

  test('debería resolver con los datos del usuario usando async/await', async () => {
    // RETO 2: Convierte esta prueba para que obtenga los datos usando `await`.
    // Luego compara los datos con { id: 1, name: 'Sofia' } usando `.toEqual`.
    const data = await fetchUserData(1); // Reemplaza null por: await fetchUserData(1)
    
    expect(data).toEqual({ id: 1, name: 'Sofia' });
  });

  test('debería fallar con error si el usuario no existe (rejects)', async () => {
    // RETO 3: Verifica que al pedir el usuario con ID 99, la promesa sea rechazada.
    // Puedes usar: await expect(promise).rejects.toThrow('User not found');
    // Reemplaza la línea de abajo para probar el rechazo correctamente.
    await expect(fetchUserData(99)).rejects.toThrow('User not found');
  });

});
