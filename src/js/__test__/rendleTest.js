import Validator from '../rendle';

test.each([
  ['1abs1', false],
  ['a-b_s', true],
  ['a-b_222s', true],
  ['aaa2222a', false],
  ['aaa22_', false],
])(
  'Проверка работы метода validateUsername со значением (%s)',
  (userName, expected) => {
    expect(Validator.validateUsername(userName)).toBe(expected);
  },
);
