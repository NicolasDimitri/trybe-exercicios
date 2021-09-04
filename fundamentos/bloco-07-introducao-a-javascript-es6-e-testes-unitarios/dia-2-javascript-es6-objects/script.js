// Parte I:

function adicionaChave(objeto, chave, valor) {
    objeto[`${chave}`] = `${valor}`
    return objeto;
};

const customer = {
    firstName: 'Roberto',
    age: 22,
    job: 'Teacher',
  };
  
  
  console.table(adicionaChave(customer, "lastName", "Ferreira"));

