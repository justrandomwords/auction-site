import { TODO } from "@/app/_components/TODO";

export type FormValues = {
  id: string,
  title: string,
  startPrice: number,
  time: TODO,
}

export type FormType = 'create' | 'update' | undefined;