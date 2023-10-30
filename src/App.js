import "./App.css"
import Menu from "./Components/Menu";
import Logo from "./Components/Logo";
import Feed2 from "./Components/Feed2";
import Feed from "./Components/Feed";
import Person from "./Components/Person";
import Person2 from "./Components/Person2";
import Person3 from "./Components/Person3";
import Person4 from "./Components/Person4";
import { AiOutlineSearch } from 'react-icons/ai';
import { LuSettings2 } from 'react-icons/lu';


function App() {
  return (
    <div className="w-[100vw] h-[100vh] bg-[#F5F5F5] flex justify-between">

      {/*left part */}
      <div className="w-[20%] h-[100%] flex flex-col justify-between pt-[1.5vh] ">
        <Logo />
        <Menu />
      </div>


      {/* mid part */}
      <div className="w-[55%] h-[100%] bg-[#F5F5F5] flex flex-col justify-between pt-[1.5vh]">
        <div className='w-[100%] h-[10%]  rounded-xl flex bg-[#FFFFFF]'>
          <div className='w-[80%] h-[100%]'>
            <form action="" className='w-[100%] h-[100%] '>
              <div className='w-[100%] h-[100%]  flex '>
                <input className=' outline-none relative w-[100%] h-[100%] pl-[5vw] text-[#9A9A9E] rounded-l-xl font-[Gilroy]' type="text" placeholder="Search here..." />
                <AiOutlineSearch className='absolute top-9 left-[25%] text-[2vw] text-[#9A9A9E] ' />
              </div>
            </form>
          </div>
          <div className='w-[20%] h-[100%]  rounded-r-xl'>
            <button className=' w-[100%] h-[100%] flex items-center justify-center gap-2 text-[#303030] font-[Gilroy]'>
              <LuSettings2 className='text-[#303030]' />
              Filters
            </button>
          </div>
        </div>

        {/* scrollable part */}
        <div id="feed" className='w-[100%] h-[85%] overflow-auto  rounded-t-xl '>
          <div className="my-2 w-[100%] h-[100%]">
            <Feed />
          </div>
          <div className="my-2 w-[100%] h-[100%]">
            <Feed2 />
          </div>

        </div>

      </div>

      {/* rightpart */}

      <div className="w-[20%] h-[100%] flex flex-col items-center justify-between pt-[1.5vh]">
        <div className=" w-[95%] h-[10%]  rounded-xl bg-[#88C2BB]">
          <button className="h-[100%] w-[100%] font-[Gilroy] font-[600] text-white tracking-wide">Become a Seller</button>
        </div>

        <div className="w-[100%] h-[5%]  flex gap-[1.5vw] ">
          <button className="font-[Gilroy] text-[#000000]  font-[500] text-[1vw]">Artists</button>
          <button className="font-[Gilroy] text-[#8D8D8D] font-[500]  text-[1vw]">photographers</button>
        </div>

        <div className="w-[100%] h-[75%]  flex flex-col items-center gap-2">
          <Person />
          <Person2 />
          <Person3 />
          <Person4 />

        </div>

      </div>

    </div>
  );
}

export default App;
