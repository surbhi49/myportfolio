import '../../../assets/styles/index.css'; 



function Contact(){


     return(
          <>
           <section className='contact-section'>
               <h1>GET IN TOUCH</h1>
           
           <div class="container">
			<div class="row">
				<div class="col-lg-5 col-md-5">
					<div class="row contact-information">
						<div class="col-lg-12 col-md-12 col-sm-12">
							<div class="contact-info-title">
								<h3>Let's work together</h3>
								<p>I’m available at _</p>
							</div>
						</div>
						<div class="col-lg-12 col-md-12 col-sm-12">
							<div class="contact-details">
								<h6>Phone:</h6>
								<p>+101 443 321 755</p>
							</div>
						</div>
						<div class="col-lg-12 col-md-12 col-sm-12">
							<div class="contact-details">
								<h6>Address:</h6>
								<p>North Thomas Dr.Jamaica, NY 11435.</p>
							</div>
						</div>
						<div class="col-lg-12 col-md-12 col-sm-12">
							<div class="contact-details">
								<h6>Email:</h6>
								<p>demo@example.com</p>
							</div>
						</div>
					</div>
				</div>
				<div class="col-lg-7 col-md-7">
					<p class="form-message"></p>
					<br/>
					<form class="contact-form form" id="contact-form" action="mail.php" method="POST">
						<div class="controls">
							<div class="row">
								<div class="col-lg-6 col-md-12">
									<div class="form">
										<input id="form_name" type="text" name="name" placeholder="Type Your Name" required="required"/>
									</div>
								</div>
								<div class="col-lg-6 col-md-12">
								<div class="form">
										<input id="form_subject" type="text" name="subject" placeholder="Type Your Subject" required="required"/>
									</div>
								</div>
								<div class="col-lg-12 col-md-12">
									<div class="form">
										<input id="form_email" type="email" name="email" placeholder="Type Your Email" required="required"/>
									</div>
								</div>
								<div class="col-md-12">
									<div class="form-text">
										<textarea id="form_message" name="message" placeholder="Type Your Message" rows="4" required="required"></textarea>
									</div>
								</div>
								<div class="col-md-12">
                                             <div className="contact-btn">
									<button  type="submit" class="button" data-text="Send Message"><span>Send Message</span>
									</button>
                                             </div>
								</div>
							</div>
						</div>
					</form>
				</div>
			</div>
		</div>
          </section>
          </>
     )
}

export default Contact;