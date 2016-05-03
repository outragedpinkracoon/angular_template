import { Hero } from './hero';
describe('Hero', () => {
  it('has name 1', () => {
    let hero: Hero = {id: 1, name: 'Super Cat'};
    expect(hero.name).toEqual('Super Cat');
  });
  it('has id 2', () => {
    let hero: Hero = {id: 1, name: 'Super Cat'};
    expect(hero.id).toEqual(1);
  });
});