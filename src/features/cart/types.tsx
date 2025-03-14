import { Medicine } from "../medicine/types";

export interface Item extends Omit<Medicine, "description"> {
  quantity: number;
}
