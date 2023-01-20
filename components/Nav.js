import navStyles from '../src/styles/Nav.module.css'
import Link from 'next/link'

export const Nav = () => {
  return (
    <div className={navStyles.nav}>
        <ul>
            <li>
                <Link href='/'>Home</Link>
            </li>
            <li>
                <Link href='/about'>About</Link>
            </li>

        </ul>
    </div>
  )
}
