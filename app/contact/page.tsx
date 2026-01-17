import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Contactform from '@/components/Contactform';

const page = () => {
  return (
    <section className='w-full min-h-screen'>
        <Navbar/>
        <Contactform/>
        <Footer/>
    </section>
  )
}

export default page;