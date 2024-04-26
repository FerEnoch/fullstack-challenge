import OpenSeaLogo from "../../static/OpenSeaLogo"
import LoginButton from "./LoginButton"

const Navigation = () => {

  return (
    <nav className='py-5 fixed w-full flex flex-row justify-evenly items-center z-10'>
      <div className='inline-block mx-4'>
        <OpenSeaLogo width={40} />
      </div>
      <h1 className='border-r-[1px] pr-5 text-white font-bold cursor-pointer text-3xl'>OpenSea</h1>
      <button className="text-white font-bold cursor-pointer text-1xl">Stats</button>
      <button className="text-white font-bold cursor-pointer text-1xl">Drops</button>
      <button className="text-white font-bold cursor-pointer text-1xl">Create</button>
      <input
        className="bg-white opacity-9 rounded-md px-2 text-black"
        type='text'
        onChange={(e) => console.log(e)}
        placeholder="Search"
      />
      <LoginButton />
      <button >
        Profile
      </button>
      <button>
        Cart
      </button>
    </nav >
  )
}

export default Navigation