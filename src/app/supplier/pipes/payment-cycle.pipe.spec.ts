import { PaymentCyclePipe } from './payment-cycle.pipe';

describe('PaymentCyclePipe', () => {
  it('create an instance', () => {
    const pipe = new PaymentCyclePipe();
    expect(pipe).toBeTruthy();
  });
});
