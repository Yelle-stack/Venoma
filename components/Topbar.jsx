import {FaTruck} from 'react-icons/fa';

const Topbar = () => {
  return (
    <div className='bg-primary h-10 text-center text-white'>
      <div className="container mx-auto h-full flex items-center justify-center">
        <div className='flex items-center gap-2'>
          <FaTruck/>
          <p className='text-sm'>Complementary global shipping</p>
        </div>
      </div>
    </div>
  )
}

export default Topbar
