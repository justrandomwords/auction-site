'use client'

import PrimaryButton from "@/app/_components/PrimaryButton";
import { FormEvent, useState } from "react";
import { InputField } from "./InputField";
import { FormType, FormValues } from "./types";
import { useEdgeStore } from "@/lib/edgestore";
import { APIurl } from "../../../api/backendAPI";

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
  const [ files, setFiles ] = useState<FileList>();
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
    const images = formData.get('images')
    const duration = formData.get('duration')
  
    fetch(`${APIurl}/create-auc`, {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify({
          title: title,
          start_price: startPrice,
          description: description,
          images: JSON.stringify(parameterForm.images),
          duration: duration,
      }),
      credentials: 'include',
      })
      .then(response => response.json())
      .then(data => {
        if (!data.success)
          alert('Сталася помилка')
          console.log(data)
      })
      .catch(error => console.error('Помилка', error));
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
            value={parameterForm.duration} 
            onChange={updateParameterForm}
            title='Duration' 
          />
        </div>
        <InputField 
          name='description' 
          title='Description'
          value={parameterForm.description} 
          onChange={updateParameterForm}
        />
        <InputField 
          name='images' 
          title='Images' 
          type='file' 
          onChange={e => {
            if(e.target.files)
              setFiles(e.target.files)
          }}
          multiple
        />
        <div onClick={async () => {
          if (files) {
            const URLs: string[] = []; 

            Array.from(files).map(async (file) => {
              const res = await edgestore.AuctionsImages.upload({ file });
              URLs.push(res.url);
            });

            console.log(URLs);

            setParameterForm(prevParameterForm => ({
              ...prevParameterForm,
              images: URLs,
            }))
          }
        }}>
          Upload
        </div>
      </div>
      <div className='flex justify-between'>
        <PrimaryButton className='bg-secondary text-white px-8' onClick={closeClick}>Cancel</PrimaryButton>
        <PrimaryButton className='bg-primary px-8'>{title}</PrimaryButton>
      </div>
    </form>
  )
}