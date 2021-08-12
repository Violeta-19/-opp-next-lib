import { Home } from '../index';
test('My Greeter', () => {
  expect(Home('Carl')).toBe('Hello Carl');
});