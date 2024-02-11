import { TODO } from "@/app/_components/TODO";

export type FormValues = {
  id: string,
  title: string,
  startPrice: number,
  duration: string,
  status: boolean,
  description: string,
  images: string[],
}

export type FormType = 'create' | 'update' | undefined;