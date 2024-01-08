import logo from '/src/assets/img/logo.png';
function Logo() {
    return (
        <div>
            <a className='flex items-center space-x-[15px] py-[28px]' href="#">
                <img src={logo} alt="" />
                <span className='text-primary font-bold text-[18px]'>Aster News</span>
            </a>
        </div>
    );
}

export default Logo;