const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

const dragonDamage = () =>
  Math.trunc(Math.random() * (dragon.strength - 15)) + 15;

const warriorDamage = () =>
  Math.trunc(
    Math.random() * (warrior.strength * warrior.weaponDmg - warrior.strength)
  ) + warrior.strength;

const mageDamage = () => {
  let manaCalc = mage.mana;
  if (mage.mana < 15) {
    return "Não possui mana suficiente";
  } else {
    manaCalc = mage.mana - 15;
  }
  return {
    dano:
      Math.floor(Math.random() * (mage.intelligence * 2 - mage.intelligence)) +
      mage.intelligence,
    mana: manaCalc,
  };
};

const gameActions = {
  // Crie as HOFs neste objeto.
  warriorTurn: (callBack) => {
    warrior.damage = callBack();
    dragon.healthPoints -= warrior.damage;
  },
  mageTurn: (callBack) => {
    mage.damage = callBack().dano;
    mage.mana = callBack().mana;
    dragon.healthPoints -= mage.damage;
  },
  dragonTurn: (callBack) => {
    dragon.damage = callBack();
    mage.healthPoints -= dragon.damage;
    warrior.healthPoints -= dragon.damage;
  },
  battleMembers: () => battleMembers,
};

gameActions.warriorTurn(warriorDamage);
gameActions.mageTurn(mageDamage);
gameActions.dragonTurn(dragonDamage);
console.log(dragon.damage);
console.log(mage.healthPoints)
console.log(gameActions.battleMembers())