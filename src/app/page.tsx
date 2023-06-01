import SearchIcon from './components/icons/SearchIcon';

const MainPage = () => {
	return (
		<>
			<form className='flex flex-wrap items-center  gap-2 bg-blue-900 p-2 rounded-md'>
				<span className='min-w-[20px]'>
					<SearchIcon className='fill-blue-500' />
				</span>
				<input
					type='text'
					placeholder='Search GitHub Username'
					className='self-stretch flex-1 p-2 rounded-lg bg-transparent placeholder:text-blue-50 outline-none focus:ring-2 focus:ring-blue-500 text-white'
				/>
				<button className='bg-sky-500 rounded-lg py-4 text-white px-4 font-bold '>
					Search
				</button>
			</form>
			<article>content of the page</article>
		</>
	);
};

export default MainPage;
