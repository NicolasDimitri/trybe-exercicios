const users = [
  { id: 1, name: 'Mark' },
  { id: 2, name: 'Paul' },
];

const findUserById = (id) =>
  new Promise((resolve, reject) => {
    const result = users.find((user) => user.id === id);

    if (result) {
      return resolve(result);
    }

    return reject(new Error(`User with ${id} not found.`));
  });

const getUserName = (userId) => findUserById(userId).then((user) => user.name);

describe('exercicio 2', () => {
  it('Ao buscar por um usuario existente, ele deve ser encontrado', () => {
    expect.assertions(1);
    return getUserName(1).then((nome) => {
      expect(nome).toBe('Mark');
    });
  });
  it('Ao buscar por um usuario inexistente, deve dar um erro de usuario não encontrado', () => {
    expect.assertions(1);
    return getUserName(4).catch((error) => {
      expect(error).toEqual(new Error(`User with 4 not found.`));
    });
  });
});

describe('try/catch async', () => {
  it('Ao buscar por um usuario existente, ele deve ser encontrado', async () => {
    const user = await getUserName(1);
    expect(user).toEqual('Mark');
  });
  it('Ao buscar por um usuario inexistente, ele deve dar erro de usuario não encontrado', async () => {
    expect.assertions(1);
    try {
      await getUserName(5);
    } catch(error) {
      expect(error).toEqual(new Error('User with 5 not found.'))
    }
  })
});
