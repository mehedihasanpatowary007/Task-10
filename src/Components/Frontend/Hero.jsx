import heroBanner from '../../assets/Banner.png'
const Hero = () => {
    return (
        <div className='containers mt-4'>
            <img className='w-full rounded' src={heroBanner} alt="" />
        </div>
    );
};

export default Hero;