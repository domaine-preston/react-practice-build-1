import { h } from 'preact';

const FourOhFour = () => (
  <div className='col-span-full bg-slate-400 rounded-md'>
    <p>404</p>
    <p className='pt-2 pb-4 h1'>Page Not Found</p>
    <a
      className='inline-block button button--primary'
      href='/'
    >
      Continue Shopping
    </a>
  </div>
)

export default FourOhFour