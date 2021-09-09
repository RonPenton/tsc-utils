import validate = require('uuid-validate');

export type UuidVersion = 1 | 2 | 3 | 4 | 5;

export type Uuidv1 = string;
export type Uuidv2 = string;
export type Uuidv3 = string;
export type Uuidv4 = string;
export type Uuidv5 = string;

export type Uuid = Uuidv1 | Uuidv2 | Uuidv3 | Uuidv4 | Uuidv5;

export const isUuid = (obj: any): obj is Uuid => validate(obj);
export const isUuidv1 = (obj: any): obj is Uuidv1 => validate(obj, 1);
export const isUuidv2 = (obj: any): obj is Uuidv2 => validate(obj, 2);
export const isUuidv3 = (obj: any): obj is Uuidv3 => validate(obj, 3);
export const isUuidv4 = (obj: any): obj is Uuidv4 => validate(obj, 4);
export const isUuidv5 = (obj: any): obj is Uuidv5 => validate(obj, 5);

export const isUuidVersion = (obj: any, version: UuidVersion): boolean => validate(obj, version);
