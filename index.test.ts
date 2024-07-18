import app from './';

describe('app', () => {
  it('returns true', () => {
    const value: boolean = app();

    expect(value).toEqual(true);
  });
});