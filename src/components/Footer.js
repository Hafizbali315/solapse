import Logo from '../assets/Logo.png'

const Footer = () => {
	return (
		<div className="footer">
			<div className="logo_details">
				<div className="logo">
					<img src={Logo} alt="Logo" />
				</div>

				<p>A serum-based Solana DEX built by apes, for other apes.</p>

				<h6>APES. TOGETHER. STRONG.</h6>
			</div>

			<ul className="links">
				<li className="heading">
					<a href="#Platform">Platform</a>
				</li>
				<li>
					<a href="#DEX">DEX</a>
				</li>
				<li>
					<a href="#Swap">Swap</a>
				</li>
				<li>
					<a href="#Markets">Markets</a>
				</li>
				<li>
					<a href="#Airdrops">Airdrops</a>
				</li>
			</ul>

			<ul className="links">
				<li className="heading">
					<a href="#Support">Support</a>
				</li>
				<li>
					<a href="#Docs">Docs</a>
				</li>
				<li>
					<a href="#Contact">Contact</a>
				</li>
				<li>
					<a href="#Request listing">Request listing</a>
				</li>
			</ul>

			<ul className="links">
				<li className="heading">
					<a href="#$SOLAPE">$SOLAPE</a>
				</li>
				<li>
					<a href="#Buy/Sell">Buy/Sell</a>
				</li>
				<li>
					<a href="#Tokenomics">Tokenomics</a>
				</li>
				<li>
					<a href="#Coingecko">Coingecko</a>
				</li>
				<li>
					<a href="#Coinmarketcap">Coinmarketcap</a>
				</li>
			</ul>

			<ul className="links">
				<li className="heading">
					<a href="#Community">Community</a>
				</li>
				<li>
					<a href="#Telegram">Telegram</a>
				</li>
				<li>
					<a href="#Twitter">Twitter</a>
				</li>
				<li>
					<a href="#Discord">Discord</a>
				</li>
				<li>
					<a href="#Medium">Medium</a>
				</li>
			</ul>
		</div>
	)
}

export default Footer
