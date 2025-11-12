import { ToastType } from "../types";

export interface ToastMessage {
  id: number;
  message: string;
  type: ToastType;
}
