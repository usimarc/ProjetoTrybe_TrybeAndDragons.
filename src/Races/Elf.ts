import Race from './Race';

class Elf extends Race {
  private static _instancesCreated = 0;
  private _maxLifePoints = 99;

  static createdRacesInstances(): number {
    this._instancesCreated += 1;
    return this._instancesCreated;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}

export default Elf;