export default function Header() {
  return (
    <header className="flex justify-between items-center mb-5">
      <h1 className="font-julius text-3xl md:text-4xl">Arsène</h1>
      <nav>
        <ul className="flex items-center gap-6">
          <li className="uppercase cursor-pointer">home</li>
          <li className="uppercase text-sec-inactive hover:text-main-black cursor-pointer">parfum</li>
        </ul>
      </nav>
    </header> 
  )
}