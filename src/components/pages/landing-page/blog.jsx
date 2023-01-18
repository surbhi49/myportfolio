import '../../../assets/styles/index.css';
import blog1 from '../../../assets/images/blog-1.jpg';
import blog2 from '../../../assets/images/blog-2.jpg';
import blog3 from '../../../assets/images/blog-3.jpg';



function Blog(){


     return(
          <>
          <section className='Blog-section'>

          <h1>BLOG & ARTICLE</h1>
          <div class="container">
			<div class="row">
				<div class="col-lg-4 col-md-6 blog-item">
					<div class="single-blog">
						<div class="post-img">
							<a href="#">
								<img src={blog1} alt=""/>
							</a>
						</div>
						<div class="blog-content">
							
							<div class="blog-body-title">
								<h5>Powerful software to grow your business no matter the size</h5>
							</div>
							<div class="blog-body-text">
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt laboris nisi commodo</p>
							</div>
							<div class="blog-btn">		<button>Read Story</button>
							</div>
						</div>
					</div>
				</div>
				<div class="col-lg-4 col-md-6 blog-item">
					<div class="single-blog">
						<div class="post-img">
							<a href="#">
								<img src={blog2} alt=""/>
							</a>
						</div>
						<div class="blog-content">
							
							<div class="blog-body-title">
								<h5>Get sustainable traffic search &amp; convert readers into leads</h5>
							</div>
							<div class="blog-body-text">
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt laboris nisi commodo</p>
							</div>
							<div class="blog-btn">	<button>Read Story</button>
							</div>
						</div>
					</div>
				</div>
				<div class="col-lg-4 col-md-6 blog-item">
					<div class="single-blog">
						<div class="post-img">
							<a href="#">
								<img src={blog3} alt=""/>
							</a>
						</div>
						<div class="blog-content">
							
							<div class="blog-body-title">
								<h5>Promote your content and analyze its performance</h5>
							</div>
							<div class="blog-body-text">
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt laboris nisi commodo</p>
							</div>
							<div class="blog-btn">		<button>Read Story</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
          </section>
          </>
     )
}

export default Blog;