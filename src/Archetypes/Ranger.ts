import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Ranger extends Archetype {
  private static _instancesCreated = 0;
  private _energyType: EnergyType = 'stamina';

  static createdArchetypeInstances(): number {
    this._instancesCreated += 1;
    return this._instancesCreated;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }
}

export default Ranger;