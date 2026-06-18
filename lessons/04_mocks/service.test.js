const { sendNotification } = require('./service');

/**
 * LECCIÓN 4: Mocking, Spies y Ciclo de Vida
 * 
 * Conceptos clave:
 * - `jest.fn()`: Crea una función simulada (mock function) que registra cómo fue llamada.
 * - `mockReturnValue(val)`: Define el valor que devolverá la función mock al ser invocada.
 * - `toHaveBeenCalledTimes(n)`: Aserción para comprobar cuántas veces se llamó al mock.
 * - `toHaveBeenCalledWith(...args)`: Aserción para comprobar con qué argumentos fue llamado.
 * - `beforeEach(fn)`: Hook del ciclo de vida que se ejecuta antes de cada test en este describe.
 */

describe('Lección 4 - Mocking y Ciclo de Vida', () => {
  let mockMailerService;

  beforeEach(() => {
    // RETO 1: Inicializa `mockMailerService` como un objeto que tiene un método `send`.
    // Dicho método `send` debe ser una función mock de Jest.
    // Pista: mockMailerService = { send: jest.fn() };
    mockMailerService = { send: jest.fn() }; 
  });

  test('debería enviar la notificación usando el mailerService', () => {
    // Configuramos nuestro mock para que cuando llamen a .send(...) retorne true.
    mockMailerService.send.mockReturnValue(true);

    const result = sendNotification(1, 'Hola Mundo', mockMailerService);

    // Verificamos que el resultado de la función sea lo que devolvió el mock (true)
    expect(result).toBe(true);

    // RETO 2: Verifica que el método `send` de nuestro mockMailerService fue llamado exactamente 1 vez.
    // Pista: Usa el matcher `toHaveBeenCalledTimes` sobre `mockMailerService.send`.
    expect(mockMailerService.send).toHaveBeenCalledTimes(1);

    // RETO 3: Verifica que `send` fue llamado con los argumentos correctos:
    // 1. El correo generado: 'user1@example.com'
    // 2. El mensaje: 'Hola Mundo'
    // Pista: Usa `toHaveBeenCalledWith` sobre `mockMailerService.send`.
    expect(mockMailerService.send).toHaveBeenCalledWith('user1@example.com', 'Hola Mundo');
  });
});
