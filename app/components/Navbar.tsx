
export default function Navbar() {
  return (
    <nav className="flex flex-row justify-between items-center">
        <div className="text-5xl font-normal tracking-wide">
            <a href="/">FLAVOURS</a>
        </div>
        <div className="">
            <ul className="flex justify-between  gap-44">
                <li className="text-black uppercase text-xl font-light tracking-wide">
                    <a href="/">Home</a>
                </li>
                <li className="text-black uppercase text-xl font-light tracking-wide">
                    <a href="/about">About</a>
                </li>
                <li className="text-black text-xl uppercase  font-light tracking-wide">
                    <a href="/hire">Hire</a>
                </li>
            </ul>
        </div>
    </nav>
  )
}
