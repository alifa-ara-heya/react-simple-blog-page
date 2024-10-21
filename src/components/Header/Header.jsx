import profile from '../../assets/profile.png'

const Header = () => {
    return (
        <header className='flex justify-between items-center p-4 mx-4 border-b-2 max-w-5xl'>
            <h1 className="text-4xl ">Knowledge Cafe</h1>
            <img src={profile} alt="" />
        </header>
    );
};

export default Header;