<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="robots" content="noindex, nofollow">
    <title>Instagram | Super Scraper</title>
    <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
      <script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
  <![endif]-->
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link type="text/css" href="./public/bootstrap-3.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
  <link type="text/css" href="./public/font-awesome-4.7.0/css/font-awesome.min.css" rel="stylesheet">
  <link rel="stylesheet" href="./public/jQCloud/dist/jqcloud.min.css">    
  <link type="text/css" href="./public/core/css/core.min.css" rel="stylesheet">
</head>
<body>
    <div class="wrapper">
        <div class="navbar navbar-default navbar-static-top">
            <div class="container-fluid">
                <div class="navbar-header">
                    <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>
                    <a class="navbar-brand" href="javascript:void(0);">
                        <span>
                            <img width="30px" src="./public/core/images/logo.png">
                        </span>Instagram Super Scraper
                    </a>
                </div>
                <div class="navbar-collapse collapse">
                    <ul class="nav navbar-nav navbar-right">
                        <li>
                            <a href="javascript:void(0);">
                                <e aria-expanded="false" data-placement="bottom" id="CountSearchAccounts" rel="tooltip" data-original-title="Total Account Links"> <i class="txt-blue fa fa-link"> </i> <span class="badge badge-pill"> 0 </span></e>
                            </a>
                        </li>
                        <li>
                            <a href="javascript:void(0);">
                                <e aria-expanded="false" data-placement="bottom" id="CountSearchHashtags" rel="tooltip" data-original-title="Total Hashtags"> <i class="txt-important fa fa-hashtag"> </i> <span class="badge badge-pill"> 0 </span></e>
                            </a>
                        </li>
                        <li>
                            <a href="javascript:void(0);">
                                <e aria-expanded="false" data-placement="bottom" id="SumOfTotalLikes" rel="tooltip" data-original-title="Total likes"> <i class="txt-pink fa fa-heart"> </i> <span class="badge badge-pill"> 0 </span></e>
                            </a>
                        </li>
                        <li>
                            <a href="javascript:void(0);">
                                <e aria-expanded="false" data-placement="bottom" id="SumOfTotalComments" rel="tooltip" data-original-title="Total comments"> <i class="txt-info fa fa-comments"> </i> <span class="badge badge-pill"> 0 </span></e>
                            </a>
                        </li>
                        <li>
                            <a href="javascript:void(0);">
                                <e aria-expanded="false" data-placement="bottom" id="SumOfTotalShare" rel="tooltip" title="Total Keywords"> <i class="txt-success fa fa-users"> </i> <span class="badge badge-pill"> 0 </span></e>
                            </a>
                        </li>
                        <li>
                            <a href="javascript:void(0);">
                                <e aria-expanded="false" data-placement="bottom" id="SumOfTotalPosts" rel="tooltip" title="Total posts"> <i class="txt-important fa fa-bullhorn"> </i> <span class="badge badge-pill"> 0 </span> </e>
                            </a>
                        </li>
                    </ul>
                    <form class="navbar-form">
                        <div class="form-group" style="display:inline;">
                            <div class="input-group" style="display:table;">
                                <input class="form-control" id="txtSearch" name="txtSearch" placeholder="Use single space to seprate multiple keyword as #hashtag or @account or both..." autocomplete="off" autofocus="autofocus" type="text" value="#DigitasLBi @pizzabwoy @bigg_boss___11 #BiggBoss #freedomIndia #GreenLights @cpyadav17 @kiran.parmar92" />
                                <span id="btnSearch" class="input-group-addon" style="width:1%; cursor: pointer;">
                                    <i class="glyphicon glyphicon-search"></i>
                                </span>
                            </div>
                        </div>
                    </form>
                </div>
                <!--/.nav-collapse -->
            </div>
        </div>
        <div class="row error-handling hide">
            <div class="container-fluid">
            </div>
        </div>
        <!-- Top Nav Bar -->
        <!-- preloader -->
        <div class="container preloader hide">
            <div class="progress">
                <div class="progress-bar progress-bar-striped active" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style="width: 100%">
                    <span>Please wait<span class="dotdotdot"></span></span>
                </div>
            </div>
        </div>
        <!-- End preloader -->
        <div id="wrapper">
            <div class="main-container">
                <!-- Form Inline -->
                <div class="container-fluid">
                    <div class="row">
                        <div class="panel panel-default">
                            <div class="panel-heading">
                                <i class="fa fa-dashboard"></i> Account Details
                                <div class="col-md-1 pull-right">
                                    <div class="btn-group" id="status" data-toggle="buttons">
                                      <label class="btn btn-default btn-on btn-xs active">
                                          <input type="radio" value="min" name="infoopt" checked="checked">Basic</label>
                                          <label class="btn btn-default btn-off btn-xs ">
                                              <input type="radio" value="full" name="infoopt">Full</label>
                                          </div>
                                      </div>
                                  </div>
                                  <div class="panel-body">
                                    <!-- Social Details -->
                                    <div class="container-fluid">
                                        <div class="col col-md-12">
                                            <div class="row">
                                                <div class="modal-body">
                                                    <div id="search-form-section">
                                                        <!-- section -->
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- End Social Details -->
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="panel panel-default">
                                <div class="panel-heading">
                                    <i class="fa fa-pie-chart"></i> Hashworld Graph
                                </div>
                                <div class="panel-body">
                                    <!-- Social Details -->
                                    <div class="container-fluid">
                                        <div class="col col-md-12">
                                            <div class="row">
                                                <div class="modal-body">
                                                    <div id="search-form-chart-section">
                                                        <!-- section -->
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- End Social Details -->
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- End Form Inline -->
                    <div class="container-fluid">
                        <div class="row">
                            <div class="panel panel-default">
                                <div class="panel-heading">
                                    <i class="fa fa-list-ul"></i> EmoTrends (Dev Status: Future Build)
                                </div>
                                <div class="panel-body">
                                    <!-- Social Details -->
                                    <div class="container-fluid">
                                        <div class="col col-md-12">
                                            <div class="row text-center">
                                                <div class="col col-md-6">
                                                    <h4>Wow! Trending</h4>
                                                    <div class="wow jqcloud"></div>
                                                </div>
                                                <div class="col col-md-6">
                                                    <h4>Ouch! Trending</h4>
                                                    <div class="oh jqcloud"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- End Social Details -->
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- Start Account Analytics -->
                    <div class="container-fluid">
                        <div class="row">
                            <div class="panel panel-default">
                                <div class="panel-heading">
                                    <i class="fa fa-list-ul"></i> Keywords Analytics (Dev Status: Future Build)
                                </div>
                                <div class="panel-body">
                                    <!-- Social Details -->
                                    <div class="container-fluid">
                                        <div class="col col-md-12">
                                            <div class="row">
                                                <div class="col-md-6"></div>
                                                <div class="col-md-6 text-right">
                                                    <a data-id="your-table-id-here" href="javascript:void(0);" class="btn btn-default download"><i class="fa fa-download"></i> Download Data in Excel</a>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col col-md-4">
                                                    <h4>Today Stats:</h4> Comments
                                                    <span class="pull-right strong">- 15%</span>
                                                    <div class="progress">
                                                        <div class="progress-bar progress-bar-danger" role="progressbar" aria-valuenow="15" aria-valuemin="0" aria-valuemax="100" style="width:15%">15%</div>
                                                    </div>
                                                    Likes<span class="pull-right strong">+ 30%</span>
                                                    <div class="progress">
                                                        <div class="progress-bar progress-bar-success" role="progressbar" aria-valuenow="30" aria-valuemin="0" aria-valuemax="100" style="width:30%">30%</div>
                                                    </div>
                                                    Views<span class="pull-right strong">+ 8%</span>
                                                    <div class="progress">
                                                        <div class="progress-bar progress-bar-warning" role="progressbar" aria-valuenow="8" aria-valuemin="0" aria-valuemax="100" style="width:8%">8%</div>
                                                    </div>
                                                </div>
                                                <div class="col col-md-4">
                                                    <h4>Last 7 Days Stats:</h4> Comments
                                                    <span class="pull-right strong">- 15%</span>
                                                    <div class="progress">
                                                        <div class="progress-bar progress-bar-danger" role="progressbar" aria-valuenow="15" aria-valuemin="0" aria-valuemax="100" style="width:15%">15%</div>
                                                    </div>
                                                    Likes<span class="pull-right strong">+ 30%</span>
                                                    <div class="progress">
                                                        <div class="progress-bar progress-bar-success" role="progressbar" aria-valuenow="30" aria-valuemin="0" aria-valuemax="100" style="width:30%">30%</div>
                                                    </div>
                                                    Views<span class="pull-right strong">+ 8%</span>
                                                    <div class="progress">
                                                        <div class="progress-bar progress-bar-warning" role="progressbar" aria-valuenow="8" aria-valuemin="0" aria-valuemax="100" style="width:8%">8%</div>
                                                    </div>
                                                </div>
                                                <div class="col col-md-4">
                                                    <h4>This Month Stats:</h4> Comments
                                                    <span class="pull-right strong">+ 45%</span>
                                                    <div class="progress">
                                                        <div class="progress-bar progress-bar-success" role="progressbar" aria-valuenow="45" aria-valuemin="0" aria-valuemax="100" style="width:45%">45%</div>
                                                    </div>
                                                    Likes<span class="pull-right strong">+ 57%</span>
                                                    <div class="progress">
                                                        <div class="progress-bar progress-bar-success" role="progressbar" aria-valuenow="57" aria-valuemin="0" aria-valuemax="100" style="width:57%">57%</div>
                                                    </div>
                                                    Views<span class="pull-right strong">+ 25%</span>
                                                    <div class="progress">
                                                        <div class="progress-bar progress-bar-success" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" style="width:25%">25%</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- End Social Details -->
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- End Account Analytics -->
                    <!-- Start Table Section-->
                    <div class="container-fluid">
                        <div class="row">
                            <div class="panel panel-default">
                                <div class="panel-heading">
                                    <i class="fa fa-user-circle"></i> Instagram account details
                                </div>
                                <div class="panel-body">
                                    <!-- Social Details -->
                                    <div class="container-fluid">
                                        <div class="row">
                                            <div class="col-md-6"></div>
                                            <div class="col-md-6 text-right">
                                                <a data-id="search-account-table" href="javascript:void(0);" class="btn btn-default download"><i class="fa fa-download"></i> Download Data in Excel</a>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-12">
                                                <div class="table-responsive">
                                                    <table id="search-account-table" class="table table-bordred table-striped">
                                                        <thead>
                                                            <th>
                                                                <input type="checkbox" id="checkall" />
                                                            </th>
                                                            <th>Link</th>
                                                            <th>Biography</th>
                                                            <th>Followers</th>
                                                            <th>Following</th>
                                                            <th>Posts</th>
                                                            <th>Likes</th>
                                                            <th>Comments</th>
                                                            <th>Views</th>
                                                            <th>Actions</th>
                                                        </thead>
                                                        <tbody></tbody>
                                                    </table>
                                                    <div class="clearfix"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="modal fade" id="edit" tabindex="-1" role="dialog" aria-labelledby="edit" aria-hidden="true">
                                        <div class="modal-dialog">
                                            <div class="modal-content">
                                                <div class="modal-header">
                                                    <button type="button" class="close" data-dismiss="modal" aria-hidden="true"><span class="glyphicon glyphicon-remove" aria-hidden="true"></span></button>
                                                    <h4 class="modal-title custom_align" id="Heading">Edit Your Detail</h4>
                                                </div>
                                                <div class="modal-body">
                                                    <div class="form-group">
                                                        <input class="form-control " type="text" placeholder="World">
                                                    </div>
                                                    <div class="form-group">
                                                        <input class="form-control " type="text" placeholder="is">
                                                    </div>
                                                    <div class="form-group">
                                                        <textarea rows="2" class="form-control" placeholder="Beautiful"></textarea>
                                                    </div>
                                                </div>
                                                <div class="modal-footer ">
                                                    <button type="button" class="btn btn-warning btn-lg" style="width: 100%;"><span class="glyphicon glyphicon-ok-sign"></span> Update</button>
                                                </div>
                                            </div>
                                            <!-- /.modal-content -->
                                        </div>
                                        <!-- /.modal-dialog -->
                                    </div>
                                    <div class="modal fade" id="delete" tabindex="-1" role="dialog" aria-labelledby="edit" aria-hidden="true">
                                        <div class="modal-dialog">
                                            <div class="modal-content">
                                                <div class="modal-header">
                                                    <button type="button" class="close" data-dismiss="modal" aria-hidden="true"><span class="glyphicon glyphicon-remove" aria-hidden="true"></span></button>
                                                    <h4 class="modal-title custom_align" id="Heading">Delete this entry</h4>
                                                </div>
                                                <div class="modal-body">
                                                    <div class="alert alert-danger"><span class="glyphicon glyphicon-warning-sign"></span> Are you sure you want to delete this Record?</div>
                                                </div>
                                                <div class="modal-footer ">
                                                    <button type="button" class="btn btn-success"><span class="glyphicon glyphicon-ok-sign"></span> Yes</button>
                                                    <button type="button" class="btn btn-default" data-dismiss="modal"><span class="glyphicon glyphicon-remove"></span> No</button>
                                                </div>
                                            </div>
                                            <!-- /.modal-content -->
                                        </div>
                                        <!-- /.modal-dialog -->
                                    </div>
                                    <!-- End Social Details -->
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- End Table Section-->
                </div>
            </div>
            <footer class="footer">
                <div class="container-fluid">
                    <div class="col-md-12">
                        <div class="col-md-6 pull-left">
                            <a class="label label-danger" href="#" data-toggle="modal" data-target="#credit">Credits</a> | <a class="label label-warning" href="#" data-toggle="modal" data-target="#tnc">Terms of Service</a> | <a class="label label-info" href="#" data-toggle="modal" data-target="#tnc">Privacy</a>
                        </div>
                        <div class="col-md-6 pull-right text-right">
                            <p class="muted">© 2017 Company Name. All rights reserved</p>
                        </div>
                    </div>
                </div>
            </footer>
            <!-- Modal Credit -->
            <div class="modal fade" id="credit" role="dialog">
                <div class="modal-dialog modal-lg">
                    <div class="modal-content">
                        <div class="modal-header">
                            <button type="button" class="close" data-dismiss="modal">&times;</button>
                            <h4 class="modal-title"><i class="fa fa-trophy"></i> Real Heroes, Millions Thanks</h4>
                        </div>
                        <div class="modal-body">
                            <div class="row">
                                <div class="col card card-block col-md-4">
                                    <a target="_new" style="margin-top: 15px;" class="navbar-left text-muted" href="https://jquery.com/">
                                        <span><img src="./public/core/images/jQuery.png"/></span>&nbsp;&nbsp; jQuery
                                    </a>
                                </div>
                                <div class="col card card-block col-md-4">
                                    <a target="_new" style="margin-top: 15px;" class="navbar-left text-muted" href="http://www.getbootstrap.com">
                                        <span><img src="./public/core/images/bootstrap.png"/></span>&nbsp;&nbsp; Bootstrap
                                    </a>
                                </div>
                                <div class="col card card-block col-md-4">
                                    <a target="_new" style="margin-top: 15px;" class="navbar-left text-muted" href="http://www.fontawesome.io">
                                        <span><img src="./public/core/images/font-awesome.png"/></span>&nbsp;&nbsp; Font Awesome
                                    </a>
                                </div>
                                <div class="col card card-block col-md-4">
                                    <a target="_new" style="margin-top: 15px;" class="navbar-left text-muted" href="https://www.instagram.com">
                                        <span><img src="./public/core/images/Instagram.png"/></span>&nbsp;&nbsp; Instagram
                                    </a>
                                </div>
                                <div class="col card card-block col-md-4">
                                    <a target="_new" style="margin-top: 15px;" class="navbar-left text-muted" href="https://canvasjs.com/">
                                        <span><img src="./public/core/images/canvasjs.png"/></span>&nbsp;&nbsp; Canvas JS
                                    </a>
                                </div>
                                <div class="col card card-block col-md-4">
                                    <a target="_new" style="margin-top: 15px;" class="navbar-left text-muted" href="https://mustache.github.io/">
                                        <span><img src="./public/core/images/mustaches.png"/></span>&nbsp;&nbsp; Mustache
                                    </a>
                                </div>
                                <div class="col card card-block col-md-4">
                                    <a target="_new" style="margin-top: 15px;" class="navbar-left text-muted" href="https://twitter.github.io/typeahead.js/">
                                        <span><img src="./public/core/images/typeahead.png"/></span>&nbsp;&nbsp; Twitter Typeahead
                                    </a>
                                </div>
                                <div class="col card card-block col-md-4">
                                    <a target="_new" style="margin-top: 15px;" class="navbar-left text-muted" href="http://mistic100.github.io/jQCloud/demo.html">
                                        <span><img src="./public/core/images/jQCloud.png"/></span>&nbsp;&nbsp; jQClod
                                    </a>
                                </div>
                                <div class="col card card-block col-md-4">
                                    <a target="_new" style="margin-top: 15px;" class="navbar-left text-muted" href="https://github.com/petewarden/ParallelCurl">
                                        <span><img src="./public/core/images/pw.png"/></span>&nbsp;&nbsp; ParallelCurl - (Pete Warden)
                                    </a>
                                </div>
                                <div class="col card card-block col-md-4">
                                    <a target="_new" style="margin-top: 15px;" class="navbar-left text-muted" href="https://github.com/neerajsinghsonu">
                                        <span><img src="./public/core/images/me.png"/></span>&nbsp;&nbsp; Me :|
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
            <!-- End Modal Credit -->
            <div class="modal fade" id="tnc">
                <div class="modal-dialog modal-lg">
                    <div class="modal-content">
                        <div class="modal-header">
                            <a href="javascript:void(0);" data-dismiss="modal" class="class pull-right"><span class="glyphicon glyphicon-remove"></span></a>
                            <h5 class="modal-title"><i class="fa fa-star-o"></i> Whatever our Power is, It should Beautiful... always to Serve not to Take</h5>
                        </div>
                        <div class="modal-body">
                            <div class="row">
                                <div class="col-md-6">
                                    <img src="./public/core/images/tnc.png" class="img-responsive">
                                </div>
                                <div class="col-md-6 text-justify">
                                    <h4>Privacy Policy | Terms &amp; Condition:</h4>
                                    <p>
                                        Instagram Super Scraper, is a learning peace of code. It's developed as sample to help the people who want to build Instagram data scraper or using their API's to get Instagram informations. It may help people who want some data from Instagram. This is not for any Commercial Product or not for Sale or not for Product Build. By using the script/application/code you accepting the application's terms &amp; condition.
                                    </p>
                                    <p>
                                        If you like this application and want to build or want to use with your commercial product then kindly get a valid <a href="https://www.instagram.com/developer/" target="_new"><i class="fa fa-external-link"></i> Instagram APP ID</a> and then use without any worry. Follow the all <a href="https://www.instagram.com/about/legal/terms/api/"><i class="fa fa-external-link"></i> Platform Policy</a> &amp; <a href="https://css-tricks.com/everything-need-know-instagram-api-integration/"><i class="fa fa-external-link"></i> Instagram API Practices</a> to make your own candy.
                                    </p>
                                    <p>
                                        In this application all used brand names and logo are their properties.
                                    </p>
                                    <p>
                                        Kindly don't take interest to breaking something.
                                    </p>
                                    <p>
                                        You all are Stars.... You love everyone.... Built with Love for Love
                                        <br>
                                        <br> <i class="fa fa-handshake-o"></i> Thank you all lovely people
                                    </p>
                                    <div class="space-ten"></div>
                                </div>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-default" data-dismiss="modal"><i class="fa fa-heart txt-pink"></i> Hug Accepted</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Wrapper end here -->
        <!-- start all template here -->
        <script id="offline-template" type="x-tmpl-mustache">
            <div style="margin:10% auto" class="container well">
            <div class="error">
            <div class="error-code m-b-10 m-t-20">Well! The app dose not work in off-line mode <i class="fa fa-warning"></i></div>
            <h3 class="font-bold">Please connect an Internet Connection to get it work.</h3>
            <div class="error-desc">
            Day after Tomorrow, There is More Bright Sun We have seen ever.
            <br/> Try refreshing the page or click the button below to go back to the Homepage.
            <div>
            <a class="btn" href="javascript:window.location.href=\'./\';"> <i class="fa fa-refresh"></i> Reload Page</a>
            </div>
            </div>
            </div>
            </div>
        </script>
        <script id="query-form-template" type="x-tmpl-mustache">
            <div class="col-md-4 {{action}}">
            <div class="form-group">
            <label class="fa fa-{{action}} fa-sm" for="{{action}}"></label>
            <span class="{{user_indicator}} label label-info"></span>
            <div class="input-group">
            <span class="input-group-addon"><input class="chk-input" type="checkbox"/></span>
            <div class="{{indicator}}" style="width: 0%; border-top: 2px solid red;"></div>
            <input class="form-control insta-url {{input_action}}" name="iUrl[]" placeholder="" type="text" value="{{value}}" />
            </div>
            </div>
            </div>
        </script>
        <script id="chart-template" type="x-tmpl-mustache">
            <div class="chart-container col-lg-4">
            <!-- card Block -->
            <div class="card card-block">
            <h4 class="card-title"> <i class="fa fa-hashtag"></i> {{title}} </h4>
            <div class="card-text">
            <div class="chart-pop" id="{{container}}"></div>
            <a title="Top Posts Keywords" rel="tooltip" data-toggle="modal" href="#" data-target="#key_{{container}}" class="btn btn-warning btn-sm top-post"> <i class="fa fa-line-chart"></i> </a>
            <a title="Top Posts Preview" rel="tooltip" data-toggle="modal" href="#" data-target="#modal_{{container}}" class="btn btn-info btn-sm img-preview"> <i class="fa fa-eye"></i> </a>
            </div>
            </div>
            <!-- End Card Block -->
            <!-- Modal -->
            <div class="modal fade" id="key_{{container}}" tabindex="-1" role="dialog" aria-labelledby="key_sel{{container}}" aria-hidden="true">
            <div class="modal-dialog modal-lg container-fluid" role="document">
            <div class="modal-content">
            <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close"> <span aria-hidden="true">&times;</span> </button>
            <h5 class="modal-title" id="key_sel{{container}}">Top Keywords - {{title}}</h5> </div>
            <div class="img-preview-content modal-body">
            <!-- gallery content start -->
            <div class="container mt10">
            <div class="container text-right">
            <a data-id="tbl-mark-{{container}}" href="javascript:void(0);" class="btn btn-default download">
            <i class="fa fa-download"></i> Download Data in Excel</a>
            </div>
            <section class="row">
            <table id="tbl-mark-{{container}}" class="table table-striped table-hover">
            <thead>
            <tr>
            <th>
            <input type="checkbox" name="checkbox"> </th>
            <th>Keyword</th>
            <th>Count</th>
            </tr>
            </thead>
            <tbody> {{#key-table-summery}}
            <tr class="td">
            <td>{{sno}}</td>
            <td>{{keyword}}</td>
            <td>{{key_count}}</td>
            </tr> {{/key-table-summery}} </tbody>
            </table>
            </section>
            </div>
            <!-- end gallery content start -->
            </div>
            <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary">Download Data</button>
            </div>
            </div>
            </div>
            </div>
            <!-- modal close -->
            <!-- Modal -->
            <div class="modal fade" id="modal_{{container}}" tabindex="-1" role="dialog" aria-labelledby="modal_sel{{container}}" aria-hidden="true">
            <div class="modal-dialog" role="document">
            <div class="modal-content">
            <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close"> <span aria-hidden="true">&times;</span> </button>
            <h5 class="modal-title" id="modal_sel{{container}}">Top Post Preview Gallery - {{title}}</h5> </div>
            <div class="img-preview-content modal-body">
            <!-- gallery content start -->
            <div class="container mt40">
            <section class="row">
            <!-- Nav tabs -->
            <ul class="nav nav-tabs" role="tablist">
            <li class="nav-item active"> <a class="nav-link active" data-toggle="tab" href="#{{container}}-table-summery" role="tab">Data Summery</a> </li>
            <li class="nav-item"> <a class="nav-link" data-toggle="tab" href="#{{container}}-view-gallery" role="tab">Post Preview</a> </li>
            </ul>
            <!-- end Nav tabs -->
            <br class="clear">
            <!-- Tab panes -->
            <div class="tab-content">
            <div class="tab-pane active" id="{{container}}-table-summery" role="tabpanel">
            <table id="tbl-top-post-{{container}}" class="table table-striped table-hover">
            <thead>
            <tr>
            <th>
            <input type="checkbox" name="checkbox"> </th>
            <th>Post</th>
            <th>Likes</th>
            <th>Comments</th>
            </tr>
            </thead>
            <tbody> {{#table-summery}}
            <tr class="td">
            <td>{{no}}</td>
            <td>{{posts}}</td>
            <td>{{likes_count}}</td>
            <td>{{comments_count}}</td>
            </tr> {{/table-summery}} </tbody>
            </table>
            </div>
            <div class="tab-pane" id="{{container}}-view-gallery" role="tabpanel">
            <!-- image section -->
            {{#img-thumbs}}
            <article class="col-xs-12 col-sm-6 col-md-2">
            <div class="panel panel-default">
            <div class="panel-body">
            <a href="{{img_src}}" title="{{img_title}}" class="zoom" data-title="{{img_title}}" data-footer="{{img_footer}}" data-type="image" data-toggle="lightbox"> <img class="img-thumbnail" src="{{img_src}}" alt="{{img_title}}" /> <span class="overlay"> <i class="fa fa-arrows-alt"></i> </span> </a>
            </div>
            <div class="panel-footer"> <i class="txt-info fa fa-thumbs-o-up txt-small"> {{likes_img}}</i> <i class="txt-important fa fa-comment-o txt-small"> {{comments_img}}</i> {{#video_views}} <i class="txt-important fa fa-video-camera txt-small"> {{video_views}}</i> {{/video_views}} </div>
            </div>
            </article>
            {{/img-thumbs}}
            <!-- image section -->
            </div>
            </div>
            <!-- Tab panes -->
            </section>
            </div>
            <!-- end gallery content start -->
            </div>
            <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            <a data-id="tbl-top-post-{{container}}" class="btn btn-primary download">Download</a>
            </div>
            </div>
            </div>
            </div>
            <!-- modal close -->
            </div>
        </script>
        <!-- end all template here -->

        <script type="text/javascript" src="./public/jquery/jquery-1.10.2.min.js"></script>
        <script type="text/javascript" src="./public/bootstrap-3.3.0/dist/js/bootstrap.min.js"></script>
        <script type="text/javascript" src="./public/canvasjs/canvasjs.min.js"></script>
        <script type="text/javascript" src="./public/mustache/mustache.min.js"></script>
        <script type="text/javascript" src="./public/jQCloud/dist/jqcloud.min.js"></script>
        <script type="text/javascript" src="./public/typeahead/typeahead.min.js"></script>
        <script type="text/javascript" src="./public/core/js/core.min.js"></script>

    </body>
    </html>
