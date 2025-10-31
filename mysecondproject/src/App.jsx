import './App.css'
import Header from './Header';
import lpu from './assets/lpu.webp'
function App(){
  return(
    <div className=''>
      <Header/>
      <h1>Lovely Professional University</h1>
      <br />
      <p class="text-lg bg-white text-black">Lovely Professional University, also known as LPU, is a private university established in 2005 in Jalandhar, Punjab. LPU is approved by UGC</p>
      <div className='flex justify-center mt-6'>
      <img src={lpu} alt="LPU Campus" className='w-150 h-100 border-amber-200 border-4 rounded-3xl'/>
      </div>   
    </div>
  );
}

export default App;