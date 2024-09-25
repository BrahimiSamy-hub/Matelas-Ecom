import { bg } from '../../assets'

const Hero = () => {
  return (
    <div>
      <img
        src={bg}
        alt=''
        className='h-screen w-screen object-cover'
        loading='lazy'
      />
    </div>
  )
}

export default Hero
