import PrimaryButton from '../PrimaryButton'
import ProfileButton from './ProfileButton';
import Link from 'next/link';

export default async function Header() {
	const data = {user: {name: 'Степан Бандера'}};
	return (
		<header className='flex justify-between items-center min-h-[5.6rem] bg-[#FFFDEF] shadow-[0_0_2rem_0.1rem_rgba(0,0,0,0.08)] px-12 font-medium z-10'>
			<div>Site Name</div>
			{!data ?
				<div className='flex gap-6'>
					<Link className='bg-white' href='/login'>Log in</Link>
					<Link className='bg-primary' href='/register'>Registration</Link>

				</div>
				:
				<>
					<div className='flex gap-8'>
						<Link href='/'>Find auction</Link>
						<Link href='/myauctions'>My auctions</Link>
					</div>
					<ProfileButton fullName={`${data.user?.name}`}/>
				</>
			}
		</header>
	)
}


