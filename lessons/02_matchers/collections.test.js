const { getUser, getColors, checkConfig } = require('./collections');

/**
 * LECCIÓN 2: Explorando Matchers (Comparadores)
 * 
 * Conceptos clave:
 * - `toBe` vs `toEqual`: 
 *   - `toBe` compara por referencia (como ===). Da false para dos objetos con las mismas propiedades.
 *   - `toEqual` compara de forma profunda (compara propiedad por propiedad).
 * - `toContain(item)`: Verifica si un elemento está presente en un array.
 * - `toThrow(errorMsg)`: Verifica si una función lanza una excepción.
 */

describe('Lección 2 - Comparadores (Matchers) Avanzados', () => {

  test('debería retornar el usuario correcto (Igualdad profunda)', () => {
    const user = getUser();
    // RETO 1: Esta prueba falla porque usa `toBe`. 
    // Cámbiala para que use `toEqual` y pase con éxito.
    expect(user).toEqual({ id: 1, name: 'Diego', active: true });
  });

  test('debería contener el color verde en el arreglo de colores', () => {
    const colors = getColors();
    // RETO 2: Usa el matcher `.toContain(...)` para validar que el array contiene 'green'.
    // Reemplaza la aserción de abajo.
    expect(colors).toContain('green');
  });

  test('debería lanzar un error si no se pasa configuración', () => {
    // RETO 3: Para verificar si una función lanza un error, debemos pasarle a `expect`
    // una función anónima que ejecute nuestro código.
    // Ejemplo: expect(() => miFuncion()).toThrow('mensaje de error');
    // Corrige la aserción de abajo para verificar que lanza el error 'Config missing'.
    expect(() => checkConfig()).toThrow('Config missing');
  });

});
