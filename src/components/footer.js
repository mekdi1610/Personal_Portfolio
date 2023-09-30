import React, { Component } from 'react'

export default class Footer extends Component {
	render() {
		return (
			<div>

				<footer>
					<div class="row">

						<div class="col-six tab-full pull-right social">

							<ul class="footer-social">
								<li><a href="https://www.facebook.com/mekdelawitmam"><i class="fa fa-facebook"></i></a></li>
								<li><a href="https://github.com/mekdi1610"><i class="fa fa-github"></i></a></li>
								<li><a href="https://www.linkedin.com/in/mekdelawit-mamushet-101141199"><i class="fa fa-linkedin"></i></a></li>
								<li><a href="https://www.instagram.com/mekdi_md/"><i class="fa fa-instagram"></i></a></li>

							</ul>

						</div>

					

						<div id="go-top">
							<a class="smoothscroll" title="Back to Top" href="#top"><i class="fa fa-long-arrow-up"></i></a>
						</div>

					</div>
				</footer>
			</div>
		)
	}
}
