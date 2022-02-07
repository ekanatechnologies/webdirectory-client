import React from 'react';

const Dashboard = () => {
  return <div>
      <section class="parallax-section dashboard-header-sec gradient-bg" data-scrollax-parent="true">
    
    <div class="container">

    <div class="dashboard-breadcrumbs breadcrumbs"><a class="breadcrumb-link breadcrumb-home" href="#" title="Home">Home</a><span class="breadcrumb-current breadcrumb-dashboard" title="Dashboard">Dashboard</span></div>        
    <div class="tfp-btn"><span>Your are: </span> <strong>Administrator</strong></div>
    <div class="tfp-det"><p>You are <a>Administrator</a>. Order an membership plan to submit listings.</p><a class="tfp-det-btn color2-bg" href="#">Membership Plans</a></div>
 
    <div class="dashboard-header_conatiner fl-wrap dashboard-header_title">
        <h1>Welcome  : <span>admin</span></h1>        </div>
</div>
<div class="clearfix"></div>
<div class="dashboard-header fl-wrap dashboard-header-sec">
    <div class="container">
        <div class="dashboard-header_conatiner fl-wrap flex-items-center flw-wrap">
            <div class="dashboard-header-avatar">
                <img alt="admin" class="avatar avatar-100 photo lazy loaded" height="100" width="100" data-src="https://ekanatechnologies.in/dev/webdirectories-old/wp-content/plugins/townhub-add-ons/assets/images/avatar.jpg" data-lazy="https://ekanatechnologies.in/dev/webdirectories-old/wp-content/plugins/townhub-add-ons/assets/images/avatar.jpg" src="https://ekanatechnologies.in/dev/webdirectories-old/wp-content/plugins/townhub-add-ons/assets/images/avatar.jpg" data-was-processed="true"/>                                        <a href="#" class="color-bg edit-prof_btn"><i class="fal fa-edit"></i></a>
                                </div>
                            <div class="dashboard-header-stats-wrap">
                <div class="dashboard-header-stats">
                    <div class="swiper-container swiper-container-initialized swiper-container-horizontal" >
                        <div class="swiper-wrapper" >
                           
                            <div class="swiper-slide swiper-slide-active" >
                                <div class="dashboard-header-stats-item">
                                    
                                    <i class="fal fa-map-marked"></i>
                                    Active Listings <span>132</span>                                       
                                </div>
                            </div>

                            
                           
                            <div class="swiper-slide swiper-slide-next">
                                <div class="dashboard-header-stats-item">
                                    <i class="fal fa-chart-bar"></i>
                                    Listing Views <span>5279</span>                                    </div>
                            </div>
                           
                            <div class="swiper-slide" >
                                <div class="dashboard-header-stats-item">
                                    <i class="fal fa-comments-alt"></i>
                                    Total Reviews <span>0</span>                                    </div>
                            </div>
                            
                            <div class="swiper-slide" >
                                <div class="dashboard-header-stats-item">
                                    <i class="fal fa-heart"></i>
                                    Times Bookmarked <span>0</span>                                    </div>
                            </div>
                            
                        </div>
                    <span class="swiper-notification" aria-live="assertive" aria-atomic="true"></span></div>
                </div>
               
                <div class="dhs-controls flex-items-center">
                    <div class="dhs dhs-prev swiper-button-disabled" tabindex="0" role="button" aria-label="Previous slide" aria-disabled="true"><i class="fal fa-angle-left"></i></div>
                    <div class="dhs dhs-next" tabindex="0" role="button" aria-label="Next slide" aria-disabled="false"><i class="fal fa-angle-right"></i></div>
                </div>
            </div>
            
            <a class="add_new-dashboard" href="#">Add Listing <i class="fal fa-layer-plus"></i></a>
                        </div>
    </div>
</div>
    <div class="gradient-bg-figure"></div>
<div class="gradient-bg-figure" ></div>
<div class="circle-wrap" data-scrollax="properties: { translateY: '-200px' }">
    <div class="circle_bg-bal circle_bg-bal_small"></div>
</div>
<div class="circle-wrap" data-scrollax="properties: { translateY: '150px' }">
    <div class="circle_bg-bal circle_bg-bal_big"></div>
</div>
<div class="circle-wrap"  data-scrollax="properties: { translateY: '100px' }">
    <div class="circle_bg-bal circle_bg-bal_big"></div>
</div>
<div class="circle-wrap">
    <div class="circle_bg-bal circle_bg-bal_middle"></div>
</div>
<div class="circle-wrap">
    <div class="circle_bg-bal circle_bg-bal_versmall" data-scrollax="properties: { translateY: '-350px' }"></div>
</div>
<div class="circle-wrap">
    <div class="circle_bg-bal circle_bg-bal_versmall" data-scrollax="properties: { translateY: '-350px' }"></div>
</div>
</section>
<section class="gray-bg main-dashboard-sec" id="sec1">
    <div class="container main-dashboard-container">
        <div class="row main-dashboard-row">
           
            <div class="col-md-3 dashboard-sidebar-col">
                <div class="mob-nav-content-btn color2-bg init-dsmen fl-wrap"><i class="fal fa-bars"></i>Dashboard menu</div>
<div class="clearfix"></div>
<div class="fixed-barss fl-wrap" id="dash_menu">
    <div class="user-profile-menu-wrap fl-wrap block_box">
  
        <div class="user-profile-menu">
            <h3>Main</h3>
            <ul class="no-list-style">
                        <li class="dashboard-menu-li dbscreen-">
            <a href="https://ekanatechnologies.in/dev/webdirectories-old/dashboard/" class="dashboard-menu-link user-profile-act">
                                    <i class="fal fa-chart-line"></i>
                                Dashboard                            </a>
        </li>

                <li class="dashboard-menu-li dbscreen-feed">
            <a href="https://ekanatechnologies.in/dev/webdirectories-old/dashboard/?dashboard=feed" class="dashboard-menu-link">
                                    <i class="fal fa-rss"></i>
                                Your Feed                            </a>
        </li>

                <li class="dashboard-menu-li dbscreen-profile">
            <a href="https://ekanatechnologies.in/dev/webdirectories-old/dashboard/?dashboard=profile" class="dashboard-menu-link">
                                    <i class="fal fa-user-edit"></i>
                                Edit profile                            </a>
        </li>

                <li class="dashboard-menu-li dbscreen-changepass">
            <a href="https://ekanatechnologies.in/dev/webdirectories-old/dashboard/?dashboard=changepass" class="dashboard-menu-link">
                                    <i class="fal fa-key"></i>
                                Change Password                            </a>
        </li>

                    </ul>
        </div>
        
        <div class="user-profile-menu">
            <h3>Listings</h3>
            <ul class="no-list-style">
                        <li class="dashboard-menu-li dbscreen-listings">
            <a href="https://ekanatechnologies.in/dev/webdirectories-old/dashboard/?dashboard=listings" class="dashboard-menu-link">
                                    <i class="fal fa-th-list"></i>
                                My Listings                            </a>
        </li>

                <li class="dashboard-menu-li dbscreen-bookmarks">
            <a href="https://ekanatechnologies.in/dev/webdirectories-old/dashboard/?dashboard=bookmarks" class="dashboard-menu-link">
                                    <i class="fal fa-bookmark"></i>
                                Bookmarks                            </a>
        </li>

                                        <li class="dashboard-menu-li"><a class="dashboard-menu-link" href="https://ekanatechnologies.in/dev/webdirectories-old/submit-listing/"><i class="fal fa-file-plus"></i>Add New</a></li>
                            </ul>
        </div>
      
        <a href="https://ekanatechnologies.in/dev/webdirectories-old/wp-login.php?action=logout&amp;redirect_to=https%3A%2F%2Fekanatechnologies.in%2Fdev%2Fwebdirectories-old%2Fdashboard&amp;_wpnonce=1c1091e493" class="logout_btn color2-bg">Log Out<i class="fas fa-sign-out"></i></a>
    </div>
</div>
<a class="back-tofilters color2-bg custom-scroll-link fl-wrap dashboard-to-top" href="#dash_menu" >Back to Menu<i class="fas fa-caret-up"></i></a><div class="back-to-filter-fixed-spacer"></div>

            </div>
            
            <div class="col-md-9 dashboard-main-col">
                <div class="dashboard-content-wrapper dashboard-content-dashboard">
    <div class="dashboard-content-inner">
                <div class="dashboard-list-box fl-wrap dashboard-substatus">
            <div class="notification-list-item">
                <div class="notification-list-inner">
                    <div class="notification-list-text">
                        <div class="notification-msg"><div class="substatus-status substatus-admin"><i class="fal fa-info green-bg"></i> You are able to submit listings</div></div>
                    </div>
                </div>
            </div>
        </div>
                        <div class="dashboard-title fl-wrap">
            <h3>Your Statistics</h3>
        </div>
        
     
        <div class="list-single-facts dashboard-facts fl-wrap">
            <div class="row">
                                                            </div>
        </div>
        
                        <div class="list-single-main-item fl-wrap block_box">
           
            <div class="chart-wrap fl-wrap">
                <div id="dashboard-chart"><div class="chart-wrap dashboard-item fl-wrap"><div class="chartjs-size-monitor" ><div class="chartjs-size-monitor-expand" ><div ></div></div><div class="chartjs-size-monitor-shrink" ><div ></div></div></div><div class="chart-header fl-wrap"><div class="listsearch-input-item"><select class="chosen-select no-search-select"><option value="week">Week</option><option value="month">Month</option><option value="year">Year</option><option value="alltime">All time</option></select></div><div id="myChartLegend"><ul class="0-legend"></ul></div></div><canvas id="canvas-chart" width="789" height="394"  class="chartjs-render-monitor"></canvas></div></div>
            </div>
            
        </div>
                        <div class="dashboard-title dt-inbox fl-wrap">
            <h3>Recent Activities</h3>
        </div>
        
        <div class="dashboard-list-box  fl-wrap">
             
            <div class="notification-list-item">
                <div class="notification-list-inner">
                    <div class="notification-list-text">
                        <div class="notification-msg">You have no activity.</div>
                    </div>
                </div>
            </div>
            
             

            
        </div>
      

    </div>
</div>
            </div>
            
        </div>
    </div>
</section>
  </div>;
};

export default Dashboard;
