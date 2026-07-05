import EquationInput from './components/EquationInput';
import TryEquation from './components/TryEquation';
export default function Home() {
  return (
    <div className="flex    items-start  justify-center  font-sans ">
      <main className="flex h-full w-full  flex-col pt-2  justify-center items-center">
        <div className="w-62 mt-4 text-center bg-gray-200 rounded-full text-purple-400 ">
          AI-Powered Math Assistance
        </div>
        <h1 className="font-bold mt-4  text-transparent text-5xl md:text-6xl bg-clip-text bg-linear-to-r from-blue-600 via-purple-600 to-pink-600">
          Math Solver AI{" "}
        </h1>
        <p className="text-center mt-4 text-xl mb-2 text-black">
          Get step-by-step solutions to any math problem with our advanced AI <br></br> technology
        </p>
        <div className='w-[1000px] h-[250px] bg-gray-200  mx-auto p-6 rounded-2xl'>
        <EquationInput />
         <TryEquation />
     
        </div>

      </main>
    </div>
  );
}
