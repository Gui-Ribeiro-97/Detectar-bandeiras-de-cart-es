/**
 * Detecta a bandeira do cartão de crédito a partir do número informado.
 * Suporta pelo menos 12 bandeiras diferentes.
 * @param {string} cardNumber - Número do cartão de crédito (apenas dígitos).
 * @returns {string|null} - Nome da bandeira ou null se não reconhecida.
 */
function detectarBandeiraCartao(cardNumber) {
  const bandeiras = [
    { nome: 'Visa', regex: /^4[0-9]{12}(?:[0-9]{3})?$/ },
    { nome: 'Mastercard', regex: /^(5[1-5][0-9]{14}|2(2[2-9][0-9]{12}|[3-6][0-9]{13}|7[01][0-9]{12}|720[0-9]{12}))$/ },
    { nome: 'American Express', regex: /^3[47][0-9]{13}$/ },
    { nome: 'Diners Club', regex: /^3(?:0[0-5]|[68][0-9])[0-9]{11}$/ },
    { nome: 'Elo', regex: /^(4011(78|79)|431274|438935|451416|457393|504175|5067[0-6][0-9]|509[0-9]{3}|627780|636297|636368|650[4-9][0-9]{2}|6516[5-9][0-9]|6550[0-9]{2})[0-9]{10,12}$/ },
    { nome: 'Hipercard', regex: /^(606282|3841)[0-9]{10,12}$/ },
    { nome: 'Aura', regex: /^50[0-9]{14,17}$/ },
    { nome: 'JCB', regex: /^(?:2131|1800|35\d{3})\d{11}$/ },
    { nome: 'Discover', regex: /^6(?:011|5[0-9]{2})[0-9]{12}$/ },
    { nome: 'Maestro', regex: /^(5[06789]|6)[0-9]{0,}$/ },
    { nome: 'Cabal', regex: /^6042[0-9]{12}$/ },
    { nome: 'UnionPay', regex: /^62[0-9]{14,17}$/ },
    { nome: 'Banescard', regex: /^603799[0-9]{10}$/ },
    { nome: 'Sorocred', regex: /^627892[0-9]{10}$/ }
  ];

  const numero = cardNumber.replace(/\D/g, '');
  for (const bandeira of bandeiras) {
    if (bandeira.regex.test(numero)) {
      return bandeira.nome;
    }
  }
  return null;
}

// Exemplo de uso:
console.log(detectarBandeiraCartao('4111111111111111')); // Visa
console.log(detectarBandeiraCartao('5105105105105100')); // Mastercard
console.log(detectarBandeiraCartao('378282246310005'));  // American Express