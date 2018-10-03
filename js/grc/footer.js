const footer_html = `
<footer id="footer3" class="page-section pt-80 pb-50 footer2-black">
          <div class="container">
            <div class="row">
            
              <div class="col-md-3 col-sm-3 widget">
                <div class="logo-footer-cont">
                  <a href="index.html">
                    <img class="logo-footer" src="images/logosgrc/Banner10x.png" alt="logo">
                  </a>
                </div>
                <div class="footer-2-text-cont">
                  <address>
                    Pensacola, FL 32502<br>
                    <!-- Los Angeles, CA 90266<br> -->
                  </address>
                </div>
                <div class="footer-2-text-cont">
                  +1 850.739.1787
                </div>
                <div class="footer-2-text-cont">
                  <a class="a-text" href="mailto:info@gracelandresearch.com">info@gracelandresearch.com</a>
                </div>
              </div>
              
              <div class="col-md-3 col-sm-3 widget">
                <h4>NAVIGATE</h4>
                <ul class="links-list bold a-text-cont">
                  <li><a href="index.html">HOME</a></li>
                  <li><a href="about.html">ABOUT</a></li>
                  <li><a href="about.html#services">SERVICES</a></li>
                  <li><a href="#ruminations">RESEARCH</a></li>
                </ul>
              </div>
              
              <div class="col-md-3 col-sm-3 widget">
                <h4>ABOUT US</h4>
                <ul class="links-list a-text-cont" >
                  <li><a href="about.html#abstract">COMPANY</a></li>
                  <li><a href="about.html#method">WHAT WE DO</a></li>
                  <li><a href="#terms">TERMS OF SERVICE</a></li>
                  <li><a href="contact.html#contact">CONTACT</a></li>
                </ul>
              </div>
              
              <div class="col-md-3 col-sm-3 widget">
                <h4>FROM OUR DESK</h4>
                <div id="post-list-footer">

                  <div class="post-prev-title">
                    <h3><a class="a-text"  href="research.html#hidden-cost-reckless">The hidden cost of reckless disruption</a></h3>
                  </div>
                  <div class="post-prev-info">
                    September 21, 2018
                  </div>
                   
                  <div class="post-prev-title">
                    <h3><a class="a-text"  href="research.html#art-of-the-exit">The art of the exit</a></h3>
                  </div>
                  <div class="post-prev-info">
                    September 17, 2018
                  </div>
                   
                  <div class="post-prev-title">
                    <h3><a class="a-text"  href="research.html#beyond-bte">Beyond barriers to entry</a></h3>
                  </div>
                  <div class="post-prev-info">
                     September 04, 2018
                  </div>

                </div>                  
              </div>
            </div>    
            
            <div class="footer-2-copy-cont clearfix">
              <!-- Social Links -->
              <div class="footer-2-soc-a right">
                <!-- <a href="http://themeforest.net/user/abcgomel/portfolio?ref=abcgomel" title="Facebook" target="_blank"><i class="fa fa-facebook"></i></a>

                <a href="http://themeforest.net/user/abcgomel/portfolio?ref=abcgomel" title="Twitter" target="_blank"><i class="fa fa-twitter"></i></a>

                <a href="http://themeforest.net/user/abcgomel/portfolio?ref=abcgomel" title="LinkedIn+" target="_blank"><i class="fa fa-linkedin"></i></a>
 -->
              </div>
              
              <!-- Copyright -->
              <div class="left">
                <a class="footer-2-copy" href="index.html">&copy; Graceland Research 2018</a>
              </div>
              

            </div>
                    
          </div>
        </footer>
`


customElements.define('footer-grc', class extends HTMLElement {
  connectedCallback() {
    this.innerHTML = footer_html;
  }
});