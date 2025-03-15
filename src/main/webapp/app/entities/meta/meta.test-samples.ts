import { IMeta, NewMeta } from './meta.model';

export const sampleWithRequiredData: IMeta = {
  id: 17187,
  area: 'scorpion where',
  nota: 10267,
};

export const sampleWithPartialData: IMeta = {
  id: 15622,
  area: 'once across likewise',
  nota: 8598,
};

export const sampleWithFullData: IMeta = {
  id: 32703,
  area: 'cinch',
  nota: 19360,
};

export const sampleWithNewData: NewMeta = {
  area: 'pish huddle',
  nota: 15598,
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
