type InputFieldProps = React.ComponentPropsWithoutRef<'input'>

export function InputField({
  title,
  ...rest
}: InputFieldProps) {
  return (
    <div className='grid gap-1'>
      <p className='font-semibold px-4'>{title}</p>
      <input {...rest}/>
    </div>
  )
}