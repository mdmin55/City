const Footer = () => {
    return (
        <footer className="flex items-center justify-around gap-2 mb-3 bg-[#9e7c41] h-32 mt-auto">
            <div className="flex items-center justify-center gap-2 mb-3-">
				<img src='./logo.png' alt='logo' className='w-[25px] h-[25px]' />
				<p className="text-white">CityPortal</p>
			</div>
			<br />
			<div className="flex items-center justify-around">
                <p className="text-white mr-2">Тел:+7(888) 543-55-55</p>
                <p className="text-white mr-2">Почта: cityportal@tell.ru</p> 
            </div>
        </footer>
    );
};

export default Footer;
