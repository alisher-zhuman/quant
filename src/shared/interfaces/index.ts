import { ToastType } from "../types";

export interface ToastMessage {
  id: number;
  message: string;
  type: ToastType;
}

export interface MetadataParams {
  params: Promise<{ locale: string }>;
}
