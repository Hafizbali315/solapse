import PriceDetailsImg from '../assets/PriceDetailsImg.png'

const PriceDetails = () => {
	return (
		<div className="price_details">
			<div className="left">
				<h2>Prize Details</h2>

				<ul>
					<li>
						<div className="bullet"></div>
						<div className="text">
							<span>100</span> Solape T-Shirts
						</div>
					</li>

					<li>
						<div className="bullet"></div>
						<div className="text">
							<span>30</span> Solape Caps
						</div>
					</li>

					<li>
						<div className="bullet"></div>
						<div className="text">
							<span>20 </span>
							Solape NFT Access Cards
						</div>
					</li>

					<li>
						<div className="bullet"></div>
						<div className="text">
							<span>20 </span> Bundles of 2500 SOLAPE tokens
						</div>
					</li>
				</ul>
			</div>
			<div className="right">
				<img src={PriceDetailsImg} alt="PriceDetailsImg" />
			</div>
		</div>
	)
}

export default PriceDetails
