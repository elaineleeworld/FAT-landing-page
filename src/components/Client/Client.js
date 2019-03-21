import React from 'react'
import './Client.css'

class Client extends React.Component {
	constructor(props) {
		super(props)
		console.log('THIS.PROPS', this.props)
	}

	render() {
		const myClient = [
			{ img: require('../../images/Netflix.png') },
			{ img: require('../../images/Disney.png') },
			{ img: require('../../images/AMC.png') },
			{ img: require('../../images/ESPN.png') },
			{ img: require('../../images/Hulu.png') },
			{ img: require('../../images/Samsung.png') },
			{ img: require('../../images/Bud.png') },
			{ img: require('../../images/Nick.png') },
			{ img: require('../../images/UA.png') },
			{ img: require('../../images/Paramount.png') },
			{ img: require('../../images/Nike.png') },
			{ img: require('../../images/Mich.png') },
			{ img: require('../../images/Livenation.png') },
			{ img: require('../../images/abc.png') },
			{ img: require('../../images/Fox.png') }
		]
		return (
			<div className="client-container">
				{myClient.map(function(client, index) {
					return (
						<div key={index} className="client">
							<img className="client-image" src={client.img} alt="client img" />
						</div>
					)
				})}
			</div>
		)
	}
}

export default Client
