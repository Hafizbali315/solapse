import { useState } from 'react'

import Logo from '../assets/Logo.png'
import HamburgerIcon from '../assets/HamburgerIcon.png'

const Navbar = () => {
	const [showMobileMenu, setShowMobileMenu] = useState(false)

	return (
		<div className="navbar">
			<div className="logo">
				<img src={Logo} alt="" />
			</div>

			<ul className="lg_links">
				<li>
					<a className="link" href="#trade">
						Trade
					</a>
				</li>
				<li>
					<a className="link" href="#swap">
						Swap
					</a>
				</li>
				<li>
					<a className="link" href="#leverage">
						Leverage
					</a>
				</li>
				<li>
					<a className="link" href="#buy-solapse">
						Buy SOLAPE
					</a>
				</li>
				<li>
					<a className="link" href="#token">
						Token
					</a>
				</li>
				<li>
					<a className="link" href="#airdrops">
						Airdrops
					</a>
				</li>
				<li>
					<a className="link" href="#Markets">
						Markets
					</a>
				</li>
				<li>
					<a className="link" href="#Help">
						Help
					</a>
				</li>
			</ul>
			<div className="connect">
				<button>Connect</button>
			</div>

			{showMobileMenu ? (
				<div className="hamburger_icon" onClick={() => setShowMobileMenu(false)}>
					{' '}
					X{' '}
				</div>
			) : (
				<div className="hamburger_icon" onClick={() => setShowMobileMenu(true)}>
					<img src={HamburgerIcon} alt="" />
				</div>
			)}

			{showMobileMenu && (
				<div className="mobile_menu">
					<ul className="mobile_links">
						<li>
							<a className="link" href="#trade">
								Trade
							</a>
						</li>
						<li>
							<a className="link" href="#swap">
								Swap
							</a>
						</li>
						<li>
							<a className="link" href="#leverage">
								Leverage
							</a>
						</li>
						<li>
							<a className="link" href="#buy-solapse">
								Buy SOLAPE
							</a>
						</li>
						<li>
							<a className="link" href="#token">
								Token
							</a>
						</li>
						<li>
							<a className="link" href="#airdrops">
								Airdrops
							</a>
						</li>
						<li>
							<a className="link" href="#Markets">
								Markets
							</a>
						</li>
						<li>
							<a className="link" href="#Help">
								Help
							</a>
						</li>
						<li className="connect">
							<button>Connect</button>
						</li>
					</ul>
				</div>
			)}
		</div>
	)
}

export default Navbar
