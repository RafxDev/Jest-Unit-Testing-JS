const { sum, subtract } = require('./math');

/**
 * LECCIÓN 1: Fundamentos y Sintaxis Básica
 * 
 * Conceptos clave:
 * - `describe(desc, fn)`: Agrupa pruebas relacionadas.
 * - `test(desc, fn)` o `it(desc, fn)`: Define una prueba individual.
 * - `expect(valorActual)`: Produce una expectativa sobre un valor.
 * - `toBe(valorEsperado)`: Es un "matcher" que compara usando igualdad estricta (===).
 */

describe('Lección 1 - Operaciones Matemáticas Básicas', () => {

  test('debería sumar dos números correctamente', () => {
    // RETO 1: Reemplaza la línea de abajo para que verifique que 2 + 3 es igual a 5.
    // Pista: Usa expect(sum(2, 3)).toBe(5);
    expect(sum(2, 3)).toBeUndefined(); // Cambiar esto
  });

  test('debería restar dos números correctamente', () => {
    // RETO 2: Esta prueba está fallando porque el resultado esperado está mal.
    // Corrige el matcher `.toBe(...)` con el resultado correcto de restar 5 - 2.
    expect(subtract(5, 2)).toBe(10);
  });

});
