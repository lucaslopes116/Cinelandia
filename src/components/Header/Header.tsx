import { SearchIcon, BellIcon } from '@chakra-ui/icons'
import './style.css'

export function Header() {
  return (
    <div className="fixed z-20 flex h-[68px] w-full items-center bg-black px-14 text-white">
      <div className="flex flex-1 items-center">
        <a href="/">
          <p>Cinelândia</p>
        </a>
        <ul className="flex gap-[14px]">
          <li className="ml-5 cursor-pointer text-sm font-bold">Início</li>
          <li className="cursor-pointer text-sm">Séries</li>
          <li className="cursor-pointer text-sm">Filmes</li>
          <li className="cursor-pointer text-sm">Bombando</li>
          <li className="cursor-pointer text-sm">Minha lista</li>
        </ul>
      </div>

      <div
        style={{
          alignItems: 'center',
          gap: '15px',
          justifyContent: 'flex-end',
        }}
      >
        <SearchIcon cursor="pointer" fontSize={24} />
        <BellIcon cursor="pointer" fontSize={24} />
      </div>
    </div>
  )
}
