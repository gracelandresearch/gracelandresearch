const newsletter_html = `
<div class="page-section nl-cont">
  <div class="container">
    <div class="relative" >
      <div id="mc_embed_signup" class="nl-form-container clearfix">

        <!-- Begin Mailchimp Signup Form -->
        
        <!--End mc_embed_signup-->
        <form 
          action="https://gracelandresearch.us14.list-manage.com/subscribe/post?u=ae3e7bc84d1d3988bfd00814f&amp;id=5b0fd59d66" 
          method="post" 
          id="mc-embedded-subscribe-form"
          name="mc-embedded-subscribe-form" 
          class="validate" 
          target="_blank" 
          novalidate>

        
          <!-- EDIT THIS ACTION URL (add "post-json?u" instead of "post?u" and appended "&amp;c=?" to the end of this URL) -->
          <input 
            class="email nl-email-input required" 
            type="email" 
            value="" 
            name="EMAIL" 
            id="mce-EMAIL"
            placeholder="Enter your email" required>

          <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
          <div style="position: absolute; left: -5000px;"><input type="text" name="b_ba37086d08bdc9f56f3592af0_e38247f7cc" tabindex="-1" value=""></div>
  
          <input 
            type="submit" 
            value="Subscribe" 
            name="subscribe" 
            id="mc-embedded-subscribe" 

            class="button medium gray">
        </form>
        <div id="notification_container"  ></div>
        <script type='text/javascript' src='//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js'></script><script type='text/javascript'>(function($) {window.fnames = new Array(); window.ftypes = new Array();fnames[0]='EMAIL';ftypes[0]='email';fnames[1]='FNAME';ftypes[1]='text';fnames[2]='LNAME';ftypes[2]='text';fnames[3]='ADDRESS';ftypes[3]='address';fnames[4]='PHONE';ftypes[4]='phone';}(jQuery));var $mcj = jQuery.noConflict(true);</script>
      </div>
    </div>
  </div>
</div>
`

customElements.define('newsletter-grc', class extends HTMLElement {
  connectedCallback() {
    this.innerHTML = newsletter_html;
  }
});