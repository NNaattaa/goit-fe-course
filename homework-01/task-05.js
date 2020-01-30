const Chn = 'Китай';
const deliveryChn = 100;

const Chl = 'Чили';
const deliveryChl = 250;

const Aus = 'Австралия';
const deliveryAus = 170;

const Ind = 'Индия';
const deliveryind = 80;

const Yam = 'Ямайка';
const deliveryYam = 120;

const userInputCountry = prompt('В какую страну вы хотите оформить доставку?');

switch (userInputCountry && userInputCountry.toLowerCase()) {
  case Chn.toLowerCase():
    console.log(`Доставка в ${Chn} будет стоить ${deliveryChn} кредитов`);
    break;
  case Chl.toLowerCase():
    console.log(`Доставка в ${Chl} будет стоить ${deliveryChl} кредитов`);
    break;
  case Aus.toLowerCase():
    console.log(`Доставка в ${Aus} будет стоить ${deliveryAus} кредитов`);
    break;
  case Ind.toLowerCase():
    console.log(`Доставка в ${Ind} будет стоить ${deliveryind} кредитов`);
    break;
  case Yam.toLowerCase():
    console.log(`Доставка в ${Yam} будет стоить ${deliveryYam} кредитов`);
    break;

  case null:
    console.log('Отменено пользователем');
    break;

  default:
    alert('В вашей стране доставка недоступна!');
}
