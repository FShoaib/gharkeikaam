import React from 'react';
import * as ROUTES from '../constants/routes'
import './Footer.css';

function Footer(props) {
  const { classes } = props;

	return (
	
    <section id="footer">
		<div className="container">
			<div className="row text-center text-xs-center text-sm-left text-md-left">
				<div className="col-xs-12 col-sm-4 col-md-4">
					<ul className="list-unstyled quick-links">
						<li><a href={ROUTES.LANDING}> Home</a></li>
						<li><a href={ROUTES.ABOUT}>About Us</a></li>
						<li><a href={ROUTES.SERVICECHARGES}>Service Charges</a></li>
						<li><a href={ROUTES.CONTACT}>Contact Us</a></li>
					</ul>
				</div>
			</div>
			<div className="row">
				<div className="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-2 text-center text-white">
					<p className="h6">Copyright © 2019 GharKeKaam (Private) Limited. All Rights Reserved.</p>
				</div>
			</div>	
		</div>
	</section>
    );
}


export default Footer;