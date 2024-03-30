import {Button} from "./button.model";

export interface VideoMetadata{
  videoId: string;
  screenColor: string;
  widthRatio: number;
  heightRatio: number;
  menuItems: Button[];
}
