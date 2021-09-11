// Parte I:

const order = {
    name: 'Rafael Andrade',
    phoneNumber: '11-98763-1416',
    address: {
      street: 'Rua das Flores',
      number: '389',
      apartment: '701',
    },
    order: {
      pizza: {
        marguerita: {
          amount: 1,
          price: 25,
        },
        pepperoni: {
          amount: 1,
          price: 20,
        }
      },
      drinks: {
        coke: {
          type: 'Coca-Cola Zero',
          price: 10,
          amount: 1,
        }
      },
      delivery: {
        deliveryPerson: 'Ana Silveira',
        price: 5,
      }
    },
    payment: {
      total: 60,
    },
  };
  
  const customerInfo = (order) => {
    // Adicione abaixo as informações necessárias.
    
    // `Olá Ana Silveira, entrega para: Rafael Andrade, Telefone: 11-98763-1416, R. Rua das Flores, Nº: 389, AP: 701`
    let cliente = order.order.delivery.deliveryPerson;
    let clienteEndereco = order.name;
    let telefone = order.phoneNumber;
    let endereco = order.address.street;
    let numeroDeEndereco = order.address.number;
    let numeroDeAp = order.address.apartment;
    let message = `Olá ${cliente}, entrega para: ${clienteEndereco}, Telefone: ${telefone}, ${endereco}, Nº: ${numeroDeEndereco}, AP: ${numeroDeAp}`;
    console.log(message);
  }
  
  customerInfo(order);
  
  const orderModifier = (order) => {
    // Adicione abaixo as informações necessárias.

    let cliente = order.name = "Luiz Silva";
    let pizzas = Object.keys(order.order.pizza);
    let bebidas = order.order.drinks.coke.type;
    let total = order.payment.total = 50;

    let message = `Olá ${cliente}, o total do seu pedido de ${pizzas[0]}, ${pizzas[1]} e ${bebidas} é R$${total},00`;

    console.log(message);
  }
  
  orderModifier(order);

  // Parte II

  const lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
  };
  
  const lesson2 = {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
  };
  
  const lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
  };

  // exercicio 1:

  const adicionaTurno = (lesson, chave, valor) => {
    lesson[`${chave}`] = `${valor}`;
    return lesson;
  }

  adicionaTurno(lesson2, "turno", "noite");
  console.table(lesson2);

  // exercicio 2:

  const chavesDoObj = obj => Object.keys(obj);

  console.log(chavesDoObj(lesson2));

  // exercicio 3:

  const tamanhoDoObj = obj => Object.keys(obj).length;

  console.log(tamanhoDoObj(lesson2));

  // exercicio 4:

  const valoresDoObj = obj => Object.values(obj);

  console.log(valoresDoObj(lesson1));

  // exercicio 5:

  const allLessons = Object.assign({}, {lesson1, lesson2, lesson3});

  console.log(allLessons);

  // Exercicio 6:

const numeroDeEstudantes = () => allLessons.lesson1.numeroEstudantes + allLessons.lesson2.numeroEstudantes + 
allLessons.lesson3.numeroEstudantes;

console.log(numeroDeEstudantes());

// Exercicio 7:

function getValueByNumber(lesson, posicao) {
  return Object.values(lesson)[posicao]
  // return Object.values(allLessons[lesson])[posicao];
};

console.log(getValueByNumber(lesson3, 0));

// Exercicio 8:

function verifyPair(obj, chave, valor) {
  return (obj[chave] === valor) ? true : false;
}

console.log(verifyPair(lesson2, "turno", "noite"));
