// import InputField from "./InputField";

export default function SignUpForm(){
    return(
    <div className="backdrop-blur bg-white/0 m-5 rounded-3xl drop-shadow-lg shadow-2xl text-gray-100 w-min">

       
        <form action="" method="get" className='p-5 font-mono m-5' >
          
          <h1 className='mb-7'>Sign Up</h1>

          <label htmlFor="">username</label>  <br />
          <input type="text" className='rounded-lg text-black'  /><br />

          <label htmlFor="" >Email</label><br />
          <input type="text" className='rounded-lg text-black'  /><br />

          <label htmlFor="">passwword</label><br />
          <input type="text" className='rounded-lg text-black' /><br />

          <label htmlFor="">Re-Password</label><br />
          <input type="text" className='rounded-lg text-black' />
        <br />
        <div className='mt-3'>
          <input type="button" value="Google" className='mx-1' />
          <input type="button" value="Google" className='mx-1' />
          <input type="button" value="Google" className='mx-1' />
        </div>    
        </form>

</div>
    );
}
 
  