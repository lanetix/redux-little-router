// @flow
import type { Location as HistoryLocation } from 'history';

export type Query = { [key: string]: string };
export type Params = { [key: string]: string };

export type LocationOptions = {
  persistQuery?: bool
};

export type Location = HistoryLocation & {
  basename?: string,
  options?: LocationOptions,
  params?: Params,
  previous?: Location,
  query?: Query,
  result?: Object
};

export type Href = string | Location;

export const LOCATION_WILL_CHANGE = 'ROUTER_LOCATION_WILL_CHANGE';
export const LOCATION_CHANGED = 'ROUTER_LOCATION_CHANGED';
export const PUSH = 'ROUTER_PUSH';
export const REPLACE = 'ROUTER_REPLACE';
export const GO = 'ROUTER_GO';
export const GO_BACK = 'ROUTER_GO_BACK';
export const GO_FORWARD = 'ROUTER_GO_FORWARD';
export const BLOCK = 'ROUTER_BLOCK';
export const UNBLOCK = 'ROUTER_UNBLOCK';

export type BareAction = {
  type: 'ROUTER_GO_BACK' | 'ROUTER_GO_FORWARD' | 'ROUTER_UNBLOCK'
};

export type BlockAction = {
  type: 'ROUTER_BLOCK',
  callback: Function
}

export type IndexedAction = {
  type: 'ROUTER_GO',
  payload: number
};

export type LocationAction = {
  type: 'ROUTER_LOCATION_CHANGED' | 'ROUTER_PUSH' | 'ROUTER_REPLACE',
  payload: Location
};

export type RouterAction =
  | BareAction
  | BlockAction
  | IndexedAction
  | LocationAction;
