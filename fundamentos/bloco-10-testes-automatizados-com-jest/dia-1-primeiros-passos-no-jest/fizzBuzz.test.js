const { it, expect } = require('@jest/globals')
const myFizzBuzz = require('./fizzBuzz')

describe('fizzBuzz', () => {
    it('verifica se o numero é divisivel por 3 e por 5', () => {
        expect(myFizzBuzz(15)).toBe('fizzbuzz')
    })
    it('verifica se o numero é divisivel por 3', () => {
        expect(myFizzBuzz(9)).toBe('fizz')
    })
    it('verifica se o numero é divisivel por 5', () => {
        expect(myFizzBuzz(10)).toBe('buzz')
    })
    it('verifica se o numero quando não é divisivel nem por 5 nem por 3 retorna ele mesmo', () => {
        expect(myFizzBuzz(13)).toBe(13)
    })
    it('verifica se quando inserido um valor que não seja numero, o retorno é false', () => {
        expect(myFizzBuzz("15")).toBe(false)
    })
})