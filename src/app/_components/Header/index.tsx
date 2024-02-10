import PrimaryButton from "../PrimaryButton";

export default function Header() {
  return (
    <header className='flex justify-between items-center min-h-[5.6rem] bg-[#FFFDEF] shadow-[0_0_2rem_0.1rem_rgba(0,0,0,0.08)] px-12 font-medium z-10'>
      <div>Site Name</div>
      <div className='flex gap-6'>
        <PrimaryButton className='bg-white'>Log in</PrimaryButton>
        <PrimaryButton className='bg-primary'>Registration</PrimaryButton>
      </div>
    </header>
  )
}