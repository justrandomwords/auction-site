import Link from "next/link";
import PrimaryButton from "../_components/PrimaryButton";

export default function() {
  return (
    <div className='grid place-items-center h-full bg-[color-mix(in_hsl,theme(colors.background),black_2%)]'>
      <form className='grid place-items-center gap-11 w-[29rem] p-12 bg-background shadow-form rounded-2xl *:grid *:items-center *:w-full *:text-center'>
        <h2 className='font-semibold pb-4'>Log in</h2>
        <div className='grid gap-4'>
          <input placeholder='login'/>
          <input type='password' placeholder='password'/>
        </div>
        <div className='grid gap-2'>
          <PrimaryButton className='bg-primary'>Log in</PrimaryButton>
          <p className='text-gray-500'>
            don’t have acount? {' '}
            <Link className='text-gray-800' href='/register'>Register</Link>
          </p>
        </div>
      </form>
    </div>
  )
}