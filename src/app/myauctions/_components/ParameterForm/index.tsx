'use client'

import PrimaryButton from "@/app/_components/PrimaryButton";
import { FormEvent, useState } from "react";
import { InputField } from "./InputField";
import { FormType, FormValues } from "./types";
import { useEdgeStore } from "@/lib/edgestore";

type ParameterFromProps = {
  type: FormType,
  defaultValues: FormValues,
  closeClick: () => void,
}

export default function ParameterFrom({ 
  type, 
  defaultValues,
  closeClick,
}: ParameterFromProps) {
  const title = type && type.charAt(0).toUpperCase() + type.slice(1);

  const [ parameterForm, setParameterForm ] = useState(defaultValues); 
  const [ file, setFile ] = useState<File>();
  const { edgestore } = useEdgeStore();

  function updateParameterForm(e: React.FormEvent<HTMLInputElement>) {
    const { name, value } = e.currentTarget;

    setParameterForm(prevParameterForm => ({
      ...prevParameterForm,
      [name]: value,
    }))
  }


  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
  
    const formData = new FormData(event.currentTarget)
    const title = formData.get('title')
    const startPrice = formData.get('startPrice')
    const status = formData.get('status')
    const description = formData.get('description')
  
    // const response = await fetch('/api/auth/login', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({ title, startPrice, status, description }),
    // })
    // if (response.ok) {
    //   router.push('/profile')
    // } else {
    //   // Handle errors
    // }
    console.log({ title, startPrice, status, description });
  }


  return (
    <form className='grid place-items-center gap-10 w-[37.5rem] px-12 py-8 bg-background rounded-2xl *:w-full' onSubmit={handleSubmit}>
      <h2 className='font-semibold text-center'>{title}</h2>
      <div className='grid gap-4'>
        <InputField 
          name='title' 
          value={parameterForm.title} 
          onChange={updateParameterForm}
          title='Title'
        />
        <div className='grid grid-cols-2 gap-4'>
          <InputField 
            name='startPrice' 
            value={parameterForm.startPrice} 
            onChange={updateParameterForm}
            title='Start price'
          />
          <InputField 
            name='duration' 
            onChange={updateParameterForm}
            title='Duration' 
            type='time'
          />
        </div>
        <InputField 
          name='description' 
          title='Description'
          onChange={updateParameterForm}
        />
        <InputField 
          name='images' 
          title='Images' 
          type='file' 
          onChange={e => {setFile(e.target.files?.[0])}}
          multiple
        />
        <button onClick={async () => {
          if (file) {
            const res = await edgestore.AuctionsImages.upload({ file });
            console.log(res);
            // TODO
          }
        }}>
          Upload
        </button>
      </div>
      <div className='flex justify-between'>
        <PrimaryButton className='bg-secondary text-white px-8' onClick={closeClick}>Cancel</PrimaryButton>
        <PrimaryButton className='bg-primary px-8'>{title}</PrimaryButton>
      </div>
    </form>
  )
}