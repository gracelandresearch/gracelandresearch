const header_html = `<header id="nav" class="header header-1">
  <div class="header-wrapper">
  <div class="container-m-30 clearfix">
    <div class="logo-row">
    
    <!-- LOGO --> 
    <div class="logo-container-2">
        <div class="logo-2">
          <a href="index.html" class="clearfix">
            <img src="images/logosgrc/Banner10x.png" class="logo-img" alt="Logo">
          </a>
        </div>
      </div>
    <!-- BUTTON --> 
    <div class="menu-btn-respons-container">
      <button type="button" class="navbar-toggle btn-navbar collapsed" data-toggle="collapse" data-target="#main-menu .navbar-collapse">
        <span aria-hidden="true" class="icon_menu hamb-mob-icon"></span>
      </button>
    </div>
   </div>
  </div>

  <!-- MAIN MENU CONTAINER -->
  <div class="main-menu-container">
    
      <div class="container-m-30 clearfix"> 
      
        <!-- MAIN MENU -->
        <div id="main-menu">
          <div class="navbar navbar-default" role="navigation">

          <!-- MAIN MENU LIST -->
          <nav class="collapse collapsing navbar-collapse right-1024">
            <ul class="nav navbar-nav">
              
              <!-- MENU ITEM -->
`

const menu_1 = [
  `<li class="">`, 
  `<li class=" current">`
];

const menu_2 = `<a href="index.html"><div class="main-menu-title">HOME</div></a>
              </li>`

const menu_3 = [
  `<li class="parent">`, 
  `<li class="parent current">`
];

const menu_4 = `  <a href="about.html"><div class="main-menu-title">ABOUT</div></a>
                  <ul class="sub">
                  
                  <li><a href="about.html#abstract">MISSION</a></li>
                  
                  <li><a href="about.html#method">METHODOLOGY</a></li>

                  <li><a href="about.html#services">SERVICES</a></li>
                  
                  </ul>
                </li>
        `;
const menu_5 = [
  `<li id="menu-contact-info-big" class="parent megamenu">`, 
  `<li id="menu-contact-info-big" class="parent megamenu current">`
];

const menu_6 = `<a href="contact.html"><div class="main-menu-title">CONTACT</div></a>
                <ul class="sub">
                  <li class="clearfix" >
                    <div class="menu-sub-container">

                      <div class="box col-md-3 ">
                        
                        <ul>
                        
                        <li><a href="contact.html">Contact</a></li>

                        <li><a href="contact.html">Careers</a></li>

                        <li><a href="contact.html">Client Portal Login</a></li>
                        <!-- <li><a href="contact2-recaptcha.html">Contact 2 reCAPTCHA<span class="label-new">NEW</span></a></li> -->
                        </ul>
                      </div>
                      
                      <div class="header-contact-bg col-md-4 menu-contact-info">
                        <ul class="contact-list">
                          <li class="contact-loc clearfix">
                            <div class="loc-icon-container">
                              <span aria-hidden="true" class="icon_pin_alt main-menu-contact-icon"></span>
                            </div>
                            <div class="menu-contact-text-container">Pensacola, FL</div>
                          </li>
                          <li class="contact-phone clearfix">
                            <div class="loc-icon-container">
                              <span aria-hidden="true" class="icon_phone main-menu-contact-icon"></span>
                            </div>  
                            <div class="menu-contact-text-container">+1 850.739.1787</div>
                          </li>
                          <li class="contact-mail clearfix" >
                            <div class="loc-icon-container">
                              <span aria-hidden="true" class="icon_mail_alt main-menu-contact-icon"></span>
                            </div>
                            <div class="menu-contact-text-container">             
                              <a class="a-mail" href="mailto:info@gracelandresearch.com">info@gracelandresearch.com</a>
                            </div>  
                          </li>
                        </ul>
                      </div>
                      
                      <div class="col-md-4 menu-map-container hide-max-960 ">
                        <!-- Google Maps -->
                        <div class="google-map-container">
                          <img src="images/map-line.png" alt="alt">
                        </div>
                        <!-- Google Maps / End -->  
                      </div>
                      
                    </div>
                  </li>
                </ul>
              </li>
            
            </ul>
      
          </nav>

          </div>
        </div>
        <!-- END main-menu -->
        
      </div>
      <!-- END container-m-30 -->
    
  </div>
  <!-- END main-menu-container -->
  
  <!-- SEARCH READ DOCUMENTATION -->
  <!-- <ul class="cd-header-buttons">
    <li><a class="cd-search-trigger" href="#cd-search"><span></span></a></li>
  </ul> 
  <div id="cd-search" class="cd-search">
    <form class="form-search" id="searchForm" action="page-search-results.html" method="get">
      <input type="text" value="" name="q" id="q" placeholder="Search...">
    </form>
  </div> -->
  
  </div>
  <!-- END header-wrapper -->
  
</header>`


customElements.define('header-grc', class extends HTMLElement {
  connectedCallback() {
    this.innerHTML = header_html + menu_1[1] + menu_2 + menu_3[0] + menu_4 + menu_5[0] + menu_6;
  }
});

customElements.define('header-grc-contact', class extends HTMLElement {
  connectedCallback() {
    this.innerHTML = header_html + menu_1[0] + menu_2 + menu_3[0] + menu_4 + menu_5[1] + menu_6;
  }
});


customElements.define('header-grc-about', class extends HTMLElement {
  connectedCallback() {
    this.innerHTML = header_html + menu_1[0] + menu_2 + menu_3[1] + menu_4 + menu_5[0] + menu_6;
  }
});
