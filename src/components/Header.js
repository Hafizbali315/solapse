import Navbar from './Navbar'

const Header = () => {
	return (
		<div className="header">
			<Navbar />

			<div className="header_tag">
				👋 This page is spefically for attendees of the Solana Miami Event, <span> please read here.</span>
			</div>

			<div className="hero_content">
				<h1>Solape Miami Prize Wheel</h1>

				<ul className="points">
					<li>
						<div className="number">1</div>
						<div className="text">
							Scan a Solape <span>QR code</span>
						</div>
					</li>
					<li>
						<div className="number">2</div>
						<div className="text">
							Connect your <span>Phantom wallet</span>
						</div>
					</li>
					<li>
						<div className="number">3</div>
						<div className="text">
							<span>Claim</span> your prize token
						</div>
					</li>
					<li>
						<div className="number">4</div>
						<div className="text">Find the Solape team IRL</div>
					</li>
					<li>
						<div className="number">5</div>
						<div className="text">
							Redeem token and <span>spin!</span>
						</div>
					</li>
				</ul>

				<button>Claim Prize Token</button>
			</div>
		</div>
	)
}

export default Header
