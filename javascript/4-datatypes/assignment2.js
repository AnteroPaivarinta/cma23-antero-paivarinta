let number;
const result1 = 10 + number;

number = null;
const result2 = 10 + number;

// A) Ensimmäisessä kohdassa number on undefined-tyyppiä, koska sitä ei ole määritelty. jälkimmäisessä kohdassa se määritellään "null"-arvoksi

const a = true;
const b = false;

const c = a + b;

const d = 10 + a;
const e = 10 + b;

// A on true, B  = false, c = 1, d = 11, e = 10. Silloin kun  boolean-tyyppinen arvo lisätään toiseen lukuun, niin true on arvoltaan  1 ja false on 0. eli 10 +1 = 11 ja 10 + 0 = 10

