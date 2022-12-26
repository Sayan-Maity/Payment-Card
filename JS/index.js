const cleaveCC = new Cleave('#cardNumber', {
  creditCard: true,
  delimiter: '-',
  onCreditCardTypeChanged: function (type) {
    const cardBrand = document.getElementById('cardBrand'),
      visa = 'fa fa-cc-visa',
      mastercard = 'fa fa-cc-mastercard',
      amex = 'fa fa-cc-amex',
      diners = 'fa fa-cc-diners',
      jcb = 'fa fa-cc-jcb',
      discover = 'fa fa-cc-discover';

    switch (type) {
      case 'visa':
        cardBrand.setAttribute('class', visa);
        break;
      case 'mastercard':
        cardBrand.setAttribute('class', mastercard);
        break;
      case 'amex':
        cardBrand.setAttribute('class', amex);
        break;
      case 'diners':
        cardBrand.setAttribute('class', diners);
        break;
      case 'jcb':
        cardBrand.setAttribute('class', jcb);
        break;
      case 'discover':
        cardBrand.setAttribute('class', discover);
        break;
      default:
        cardBrand.setAttribute('class', '');
        break;
    }
  },
});
var cleave = new Cleave('#cardExpiry', {
  date: true,
  datePattern: ['m', 'y'],
});

var cleave = new Cleave('#cardCcv', {
  blocks: [3],
  uppercase: true,
});
