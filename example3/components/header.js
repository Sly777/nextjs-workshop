import Link from 'next/link'

const linkStyle = {
  marginRight: 15
}

const Header = () => (
    <nav>
        <Link href="/">
          <a style={linkStyle}>Ana sayfa</a>
        </Link>
        <Link href="/about">
          <a style={linkStyle}>Hakkimizda</a>
        </Link>
    </nav>
)

export default Header