import { IconType } from "react-icons";

export interface IHasIcon {
  icon: IconType;
}

export type IHasIconOptional = Partial<IHasIcon>;
