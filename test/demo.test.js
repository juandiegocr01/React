
describe('pruebas de demostración', () =>{
    test('Esta prueba no debe de fallar', () =>{
        //!que pasa si hay errores
    
        if(1===0){
            throw new Error('No se puede dividir entre 0');
        }
    
        // 1. Inicialización
    
        const mensaje = 'Hola Mundo';
    
        // 2. Estimulo
    
        const mensaje2 = mensaje.trim();
    
        // 3. Observar el resultado ... esperado
    
        expect(mensaje).toBe(mensaje2);
    
    });
});



