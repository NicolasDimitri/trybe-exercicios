const uppercase = require('./exercicio-1');

describe('Testa se a função retorna letras maiusculas', () => {
  it('frase teste', (done) => {
    uppercase('frase teste', (callback) => {
      try {
        expect(callback).toBe('FRASE TESTE');
        done();
      } catch (error) {
        done(error);
      }
    });
  });
});
