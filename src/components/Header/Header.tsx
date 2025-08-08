export default function Header() {
  return (
    <header className="flex justify-between items-center">
      <h1 className="font-julius text-3xl">Arsène</h1>
      <nav>
        <ul className="flex items-center gap-6">
          <li className="uppercase">home</li>
          <li className="uppercase text-sec-inactive">parfum</li>
        </ul>
      </nav>
    </header> 
  )
}