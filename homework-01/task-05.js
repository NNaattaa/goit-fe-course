'use strict';

const startMessage = `В какую страну Вы хотите оформить доставку?`;
const CHINA = `китай`;
const deliveryCostChina = `100 кредитов`;
const CHILE = `чили`;
const deliveryCostChile = `250 кредитов`;
const AUSTRALIA = `австралия`;
const deliveryCostAustralia = `170 кредитов`;
const INDIA = `индия`;
const deliveryCostIndia = `80 кредитов`;
const JAMAICA = `ямайка`;
const deliveryCostJamaica = `120 кредитов`;

const request = prompt(`${startMessage}`);

let message;

switch (request.toLowerCase()) {
  case CHINA:
    message = `Доставка в ${CHINA} будет стоить ${deliveryCostChina}`;
    break;

  case CHILE:
    message = `Доставка в ${CHILE} будет стоить ${deliveryCostChile}`;
    break;

  case AUSTRALIA:
    message = `Доставка в ${AUSTRALIA} будет стоить ${deliveryCostAustralia}`;
    break;

  case INDIA:
    message = `Доставка в ${INDIA} будет стоить ${deliveryCostIndia}`;
    break;

  case JAMAICA:
    message = `Доставка в ${JAMAICA} будет стоить ${deliveryCostJamaica}`;
    break;

  default:
    message = `В Вашей стране доставка недоступна!`;
}

// console.log(message);
alert(message);
