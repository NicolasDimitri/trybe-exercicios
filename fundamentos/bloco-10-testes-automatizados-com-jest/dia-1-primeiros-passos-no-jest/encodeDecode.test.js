const { it, expect } = require('@jest/globals')
const exp = require('constants')
const functions = require('./encodeDecode')
const { encode, decode } = functions

describe('encode e decode', () => {
    it('teste se encode é uma função', () => {
        expect(typeof encode).toStrictEqual('function')
    })
    it('teste se decode é uma função', () => {
        expect(typeof decode).toStrictEqual('function')
    })
    it('converte a vogal "a" no numero "1"', () => {
        expect(encode('a')).toStrictEqual("1")
    })
    it('converte a vogal "e" no numero "2"', () => {
        expect(encode('e')).toStrictEqual("2")
    })
    it('converte a vogal "i" no numero "3"', () => {
        expect(encode('i')).toStrictEqual("3")
    })
    it('converte a vogal "o" no numero "4"', () => {
        expect(encode('o')).toStrictEqual("4")
    })
    it('converte a vogal "u" no numero "5"', () => {
        expect(encode('u')).toStrictEqual("5")
    })
    it('converte o numero "1" na vogal "a"', () => {
        expect(decode('1')).toStrictEqual('a')
    })
    it('converte o numero "2" na vogal "e"', () => {
        expect(decode("2")).toStrictEqual("e")
    })
    it('converte o numero "3" na vogal "i"', () => {
        expect(decode('3')).toStrictEqual("i")
    })
    it('converte o numero "4" na vogal "o"', () => {
        expect(decode('4')).toStrictEqual("o")
    })
    it('converte o numero "5" na vogal "u"', () => {
        expect(decode('5')).toStrictEqual("u")
    })
    it('verifica quantidade de letras', () => {
        expect(decode('uma frase de teste').length).toStrictEqual(18)
    })
    it('verifica quantidade de letras', () => {
        expect(encode('uma frase de teste').length).toStrictEqual(18)
    })
})