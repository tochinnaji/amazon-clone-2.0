import { addToCart, cart, loadFromStorage } from '../data/cart.js';

describe('test suite: addToCart', () => {
  beforeEach(() => {
    spyOn(localStorage, 'setItem');
    spyOn(localStorage, 'getItem').and.callFake(() => {
      return JSON.stringify([{
        productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
        quantity: 1,
        deliveryOptionsId: '1',
      }]);
    });
    cart.length = 0;
  });

  afterEach(() => {
    cart.length = 0;
  });

  it('adds an existing product to the cart', () => {
    loadFromStorage();
    expect(cart.length).toEqual(1);
    expect(cart[0].quantity).toEqual(1);
  });

  it('adds a new product to the cart', () => {
    loadFromStorage();
    addToCart('15b6fc6f-327a-4ec4-896f-486349e85a3d');
    expect(cart.length).toEqual(2);
  });
});