const blog_html = `
        <!-- BLOG 2 -->
        <div id="ruminations" class="page-section pt-110-b-30-cont">
          <div class="container">
                
            <div class="mb-50">
              <h2 class="section-title pr-0">LATEST <span class="bold">RUMINATIONS</span><a href="research.html" class="section-more right">READ MORE</a>
                  </h2>
            </div>
            
            <div class="row">
              
              <!-- Post Item 1 -->
              <div class="col-md-12 wow fadeIn pb-30" >
                <div class="row">
                
                  <div class="col-md-4 blog2-post-title-cont">
                    <div class="post-prev-date-cont">
                      <span class="blog2-date-numb">21</span><span class="blog2-month">September</span>
                    </div>
                    <div class="post-prev-title">
                      <h3><a href="research.html#hidden-cost-reckless">THE HIDDEN COST OF DISRUPTION</a></h3>
                      <div class="post-prev-info">
                        <a href="#">SOCIETY</a><span class="slash-divider">/</span><a href="#staff">STAFF</a>
                      </div>
                    </div>
                  </div>
                    
                  <div class="col-md-8">
                    <div class="blog2-post-prev-text">                     
                      The societal cost of failed disruption affects more than just the challenger. Incumbents, and more importantly, customers suffer. From Theranos to Juicero, we consider the costs borne by all stakeholders when poorly executed attempts at disruption come to bear.
                    </div>
                  </div>
                  
                </div>
              </div>
              
              <!-- Post Item 2 -->
              <div class="col-md-12 wow fadeIn pb-30" >
                <div class="row">
                
                  <div class="col-md-4 blog2-post-title-cont">
                    <div class="post-prev-date-cont">
                      <span class="blog2-date-numb">17</span><span class="blog2-month">September</span>
                    </div>
                    <div class="post-prev-title">
                      <h3><a href="research.html#art-of-the-exit">THE ART OF THE EXIT</a></h3>
                      <div class="post-prev-info">
                        <a href="#">EXIT</a><span class="slash-divider">/</span><a href="#Staff">STAFF</a>
                      </div>
                    </div>
                  </div>
                    
                  <div class="col-md-8">
                    <div class="blog2-post-prev-text">                     
                      Not all firms can last. Admitting that is painful enough to accept, making managers that do so powerful and indispensible. After all, even after managers realize the world before them there is ample opportunity to create (or destroy) value. Hint: don't be the last one out.         
                    </div>
                  </div>
                  
                </div>
              </div>

              <!-- Post Item 3 -->
              <div class="col-md-12 wow fadeIn pb-30" >
                <div class="row">
                
                  <div class="col-md-4 blog2-post-title-cont">
                    <div class="post-prev-date-cont">
                      <span class="blog2-date-numb">04</span><span class="blog2-month">September</span>
                    </div>
                    <div class="post-prev-title">
                      <h3><a href="research.html#beyond-bte">BEYOND BARRIERS TO ENTRY</a></h3>
                      <div class="post-prev-info">
                        <a href="#">STRATEGY</a><span class="slash-divider">/</span><a href="#staff">STAFF</a>
                      </div>
                    </div>
                  </div>
                    
                  <div class="col-md-8">
                    <div class="blog2-post-prev-text">                     
                      The simple Barrier to Entry hypothesis on disruption is too coarse and abstract for real executives running real companies. It's time to consider the truly complex array of drivers in disruptive, and to rule out the red herrings.                  
                    </div>
                  </div>
                  
                </div>
              </div>

            </div>
            
          </div>
        </div>
`


customElements.define('blog-grc', class extends HTMLElement {
  connectedCallback() {
    this.innerHTML = blog_html;
  }
});