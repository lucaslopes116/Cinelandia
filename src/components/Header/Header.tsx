import { SearchIcon, BellIcon } from '@chakra-ui/icons'
import './style.css'

export function Header() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        position: 'fixed',
        width: '100%',
        height: '68px',
        paddingLeft: '52px',
        paddingRight: '52px',
        zIndex: 2,
      }}
    >
      <div style={{ alignItems: 'center', flex: 1 }}>
        <a href="/">
          <p>Cinelândia</p>
        </a>
        <ul style={{ display: 'flex', gap: '14px', listStyleType: 'none' }}>
          <li
            style={{
              cursor: 'pointer',
              fontSize: '14px',
              fontWeight: 500,
              marginLeft: '30px',
            }}
          >
            Início
          </li>
          <li style={{ cursor: 'pointer', fontSize: '14px' }}>Séries</li>
          <li style={{ cursor: 'pointer', fontSize: '14px' }}>Filmes</li>
          <li style={{ cursor: 'pointer', fontSize: '14px' }}>Bombando</li>
          <li style={{ cursor: 'pointer', fontSize: '14px' }}>Minha lista</li>
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
