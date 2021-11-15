const service = require('./service');

it("testa função do numero aleatorio", () => {
  service.randomNumber = jest.fn().mockReturnValue(10)
  expect(service.randomNumber()).toBe(10);
  expect(service.randomNumber).toBeCalled();
  expect(service.randomNumber).toBeCalledTimes(1)
});

it('restore function', () => {
    service.randomNumber = jest.fn().mockImplementationOnce((a, b) => a / b)
    expect(service.randomNumber(10, 5)).toBe(2)
    expect(service.randomNumber).toHaveBeenCalled()
    expect(service.randomNumber).toHaveBeenCalledWith(10, 5)
    expect(service.randomNumber).toHaveBeenCalledTimes(1)
})

it('função com 3 parametros', () => {
    service.randomNumber = jest.fn().mockImplementationOnce((a, b, c) => a * b * c)
    expect(service.randomNumber(5, 5, 10)).toBe(250)
    service.randomNumber = jest.fn().mockImplementationOnce(a => 2 * a)
    expect(service.randomNumber(5)).toBe(10)
})
