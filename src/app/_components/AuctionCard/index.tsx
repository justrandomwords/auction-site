'use client'

import { TODO } from "../TODO"
import PrimaryButton from "../PrimaryButton"
import { FormValues } from "@/app/myauctions/_components/ParameterForm/types";

type AuctionCardProps = {
  id: string,
  title: string,
  price: number,
  time: TODO,
  type?: 'view' | 'edit' | 'closed' | 'sold'
  buttonClick?: (values: FormValues) => void,
}

export default function AuctionCard({
  id,
  title,
  price,
  time,
  type='view',
  buttonClick,
}: AuctionCardProps) {
  function test() { // Bad
    if (buttonClick)
      buttonClick({id, title, price, time});
  }

  return (
    <div className={`group bg-gray-50 bg-[url(https://images.dog.ceo/breeds/poodle-standard/n02113799_4499.jpg)] mb-[1.5rem] bg-center bg-cover rounded-lg cursor-pointer
    ${type === 'closed' && 'opacity-50'}`}>
      <div className='relative grid items-end text-background aspect-square bg-gradient-to-t from-secondary/50 px-4 py-2 rounded-lg'>
        <p className={`absolute top-0 right-0 m-4 bg-background text-secondary text-sm font-semibold rounded-full px-3 py-0 
        ${type === 'closed' && 'text-red-500'}
        ${type === 'sold' && 'text-green-500'}`}>
          { 
            type === 'closed' ? 'Closed': 
            type === 'sold' ? 'Sold':
            time
          }
        </p>
        <div>
          <h3>{title}</h3>
          <p className='text-average font-bold'>{price} $</p>
        </div>
        { (type === 'view' || type === 'edit') &&
          <PrimaryButton className='absolute right-4 bottom-[-1.2rem] py-1 bg-secondary group-hover:bg-primary group-hover:text-secondary transition-colors duration-100' onClick={test}>
            { type === 'view' && 'Bit' || type === 'edit' && 'Change'}
          </PrimaryButton>
        }
      </div>
    </div>

  )
} 