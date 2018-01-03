/**
 * ++++++++++++++++++++++++++++++++++++++++++++++++++++++++
 * Kindly respect the People
 * Everything is Respectful in Nature... :)
 * Be Good and spend life  happily.....
 *  _        _______  _______  _______  _______ _________   _______ _________ _        _______
 * ( (    /|(  ____ \(  ____ \(  ____ )(  ___  )\__    _/  (  ____ \\__   __/( (    /|(  ____ \|\     /|
 * |  \  ( || (    \/| (    \/| (    )|| (   ) |   )  (    | (    \/   ) (   |  \  ( || (    \/| )   ( |
 * |   \ | || (__    | (__    | (____)|| (___) |   |  |    | (_____    | |   |   \ | || |      | (___) |
 * | (\ \) ||  __)   |  __)   |     __)|  ___  |   |  |    (_____  )   | |   | (\ \) || | ____ |  ___  |
 * | | \   || (      | (      | (\ (   | (   ) |   |  |          ) |   | |   | | \   || | \_  )| (   ) |
 * | )  \  || (____/\| (____/\| ) \ \__| )   ( ||\_)  )    /\____) |___) (___| )  \  || (___) || )   ( |
 * |/    )_)(_______/(_______/|/   \__/|/     \|(____/     \_______)\_______/|/    )_)(_______)|/     \|
 *
 *
 * This is global JavaScript file
 *
 * This file contains all global level variable and function
 * which needs to call in separate modular file
 *
 * Also this file contains all global level settings variable too
 *
 * The superScraper is global variable to get and set JavaScript Application Settings
 *
 * @todo:// Code Clean up, Minification & Optimization ...
 *
 * ++++++++++++++++++++++++++++++++++++++++++++++++++++++++
 */
// jQuery alias
$ = jQuery;
// jQuery document object
var $document = $(document);
// check if internet connection enable
var is_online = window.navigator.onLine;
// htaccess check
var htaccess = $.trim($('#htaccess').val());
// Export button in table
var $btnExportExcel = $("#btnExport");
// Main top progress bar
var $loadingContainer = $('.progress-bar');
// Total no of Instagram links
var totalRequestUrl = 0;
// Application starting index
var currentMasterIndex = 1;
// Application starting progress value
var currentMasterProgress = 0;
// App debug flag
var logInfo = true;
// Search Flag
var isFilter = false;
// htaccess check
var htaccess = $.trim($('#is_htaccess_enable').val());
// chart flag
var is_chart_created = false;
// top navigation hide
var navBarForm = $(".form-inline");
// modal close
var booClose = $(".close");
// default #hash tag
var keyContainer = ["#digitaslbi"];
// counter
var currentIndex = 0;
// get account max-min setting
var chkOpt = $("input[name='infoopt']:checked").val();
// Config Object Settings
var Config = {
    // current search action
    action: 'account',
    // get minimum (Link, Biography, Followers, Following) or maximum account information
    infoFullMin: chkOpt,
    // ajax url
    urlRequest: "includes/AjaxServices.php",
    // user internet connection status
    userAgentStatus: is_online,
    // search button selector
    btnSearch: '#btnSearch',
    // input search text
    txtSearch: '#txtSearch',
    // form input template
    queryFormTemplate: '#query-form-template',
    // Search Details Section
    searchFormContainer: "#search-form-section",
    // Chart Section
    searchFormChartContainer: "#search-form-chart-section",
    // label:- top navigation indicators selectors
    lblCountSearchAccounts: '#CountSearchAccounts .badge.badge-pill',
    lblCountSearchHashtags: '#CountSearchHashtags .badge.badge-pill',
    lblSumOfTotalLikes: '#SumOfTotalLikes .badge.badge-pill',
    lblSumOfTotalComments: '#SumOfTotalComments .badge.badge-pill',
    lblSumOfTotalShare: '#SumOfTotalShare .badge.badge-pill',
    lblSumOfTotalPosts: '#SumOfTotalPosts .badge.badge-pill',
    // canvasjs chart template
    chartTemplate: '#chart-template',
    // off line error message if internet off
    offlineMsg: 'Please enable Internet Connection. You are off-line',
    // label:- top navigation indicators values
    queryAccounts: 1,
    queryHashtags: 1,
    queryLikes: 1,
    queryComments: 1,
    queryKeywords: 1,
    queryPosts: 1,
    // get Config item
    getItem: function(item) {
        if (this[item].toString()) {
            _l('Item found: ' + item);
            return this[item].toString();
        } else {
            _l('Item not found: ' + item);
            return false;
        }
    },
    // set Config item
    setItem: function(item, value) {
        if (this[item]) {
            _l('Item found and set value: ' + item + ' : ' + value);
            this[item] = value;
        }
    }
};
// Application log method
var _l = function(data_object_array) {
    if (logInfo === true) {
        console.log(data_object_array);
    }
};
// global aja error handling
$(document).ajaxError(function(event, jqxhr, settings, thrownError) {
    errStr = '';
    errStr += '<div class="alert alert-danger alert-dismissable">';
    errStr += '  <a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>';
    errStr += '  <strong>Error in Request: </strong> ' + thrownError;
    errStr += '</div>';
    $(".error-handling .container-fluid").html(errStr).parent().removeClass('hide');
});
/**
 * Main application progress bar
 * @return {[type]} [description]
 */
var stateProgress = function() {
    // debugger message console
    _l('currentMasterIndex: ' + currentMasterIndex);
    _l('currentMasterProgress: ' + currentMasterProgress);
    // update progress bar
    // $loadingContainer.attr({
    //     'aria-valuenow': currentMasterProgress
    // }).attr('style', 'width:' + currentMasterProgress + '%').html('Process Completed ' + currentMasterProgress + '%, Now fetching comments & likes');
};
/**
 * Table to Excel Export data
 * @param  {[type]} elid [description]
 * @return {[type]}      [description]
 */
function fnExcelReport(elid) {
    //getting data from our div that contains the HTML table
    var data_type = 'data:application/vnd.ms-excel';
    var table = document.getElementById(elid);
    var tab_text = "<table border='2px'>";
    for (j = 0; j < 1; j++) {
        tab_text += "<tr bgcolor='#87AFC6'>" + table.rows[j].innerHTML + "</tr>";
    }
    for (j = 1; j < table.rows.length; j++) {
        tab_text += "<tr>" + table.rows[j].innerHTML + "</tr>";
    }
    tab_text = tab_text + "</table>";
    //remove if u want links in your table
    tab_text = tab_text.replace(/<A[^>]*>|<\/A>/g, "");
    // remove if u want images in your table
    tab_text = tab_text.replace(/<img[^>]*>/gi, "");
    // removes input params
    tab_text = tab_text.replace(/<input[^>]*>|<\/input>/gi, "");
    return data_type + ', ' + encodeURIComponent(tab_text);
}
/**
 * Main Instagram JavaScript Object
 */
var Instagram = function() {
    this.stateError = false;
    this.txtProgressState = 0;
    this.info = [];
    this.urlInstagram = "https://www.instagram.com";
    this.urlInstagramNext = null;
    this.InstaJSON = null;
    this.currentIndex = 0;
    this.currentIndexPost = 0;
    this.isSearchingForNext = false;
    this.errorContainer = $(".user-error");
    this.infoContainer = $(".user-info");
    this.tableWrapper = $("#search-account-table");
    this.tableContentWrapper = $("#search-account-table.table-striped tbody");
    this.txtIndicator = $('.txt-progress');
    this.sendRequestUrl = Config.getItem('urlRequest');
    this.infoFullMin = Config.getItem('infoFullMin');
};
/**
 * Get User's account information from
 * Instagram JSON and set in Object Property
 */
Instagram.prototype.setAccount = function() {
    // ++++++++++++++++++++++++++++++++++++++
    // get user's personal data from json
    // ++++++++++++++++++++++++++++++++++++++
    if (this.isSearchingForNext === false) {
        this.info = [];
        this.info.Biography = this.InstaJSON.user.biography;
        this.info.UserName = this.InstaJSON.user.username;
        this.info.FullName = this.InstaJSON.user.full_name;
        this.info.Posts = this.InstaJSON.user.media.count;
        this.info.Followers = this.InstaJSON.user.followed_by.count;
        this.info.Following = this.InstaJSON.user.follows.count;
        this.info.AccountHref = this.urlInstagram + '/' + this.InstaJSON.user.username;
    }
    // check if information request is full or minimum
    if (this.infoFullMin != 'min') {

        // show label
        var post_index = Math.ceil(this.info.Posts / 12);
        this.eventHandler("Likes & Comments: " + this.currentIndexPost + "/" + post_index + ", " + this.info.FullName);
        this.txtProgressState = Math.ceil(this.currentIndexPost * 100) / post_index;
        // +++++++++++++++++++++++++++++++++++
        // get users social data from json
        // +++++++++++++++++++++++++++++++++++
        // collectors empty arrays
        var Nodes = this.InstaJSON.user.media.nodes,
            likes = [],
            comments = [],
            views = [],
            likes_sum = 0,
            comments_sum = 0,
            views_sum = 0;
        // setters
        $.each(Nodes, function(index, node) {
            likes.push(node.likes.count);
            comments.push(node.comments.count);
            views.push((node.video_views) ? node.video_views : 0);
        });
        // filters and sum, likes
        $.each(likes, function() {
            likes_sum += parseInt(this) || 0;
        });
        // comments
        $.each(comments, function() {
            comments_sum += parseInt(this) || 0;
        });
        // video views
        $.each(views, function() {
            views_sum += parseInt(this) || 0;
        });
        // set all values of sum
        if (this.isSearchingForNext === false) {
            this.info.TotalLikes = likes_sum;
            this.info.TotalComments = comments_sum;
            this.info.TotalViews = views_sum;
        } else {
            // add in previous values
            this.info.TotalLikes = parseInt(this.info.TotalLikes) + likes_sum;
            this.info.TotalComments = parseInt(this.info.TotalComments) + comments_sum;
            this.info.TotalViews = parseInt(this.info.TotalViews) + views_sum;
        }
        // check if next id available to get next result set
        if (this.InstaJSON.user.media.page_info.has_next_page === true) {
            this.urlInstagramNext = Nodes[Nodes.length - 1].id;
            this.currentIndexPost += 1;
            this.isSearchingForNext = true;
        } else {
            this.currentIndexPost = 1;
            this.isSearchingForNext = false;
        }
    }
    // safe values set fall-back values
    if (typeof this.info.TotalLikes == 'undefined') {
        this.info.TotalLikes = 0;
    }
    if (typeof this.info.TotalComments == 'undefined') {
        this.info.TotalComments = 0;
    }
    if (typeof this.info.TotalViews == 'undefined') {
        this.info.TotalViews = 0;
    }
};
/**
 * Create Table data row with User's information
 * @return {[type]} [description]
 */
Instagram.prototype.buildViews = function() {
    var row = '';
    row += '<tr class="info-row">';
    row += '<td><input class="tbl-chk" type="checkbox"></td>';
    row += '<td><a target="_blank" href="' + this.info.AccountHref + '">' + this.info.UserName + '</a></td>';
    row += '<td>' + this.info.Biography + '</td>';
    row += '<td>' + this.info.Followers + '</td>';
    row += '<td>' + this.info.Following + '</td>';
    row += '<td>' + this.info.Posts + '</td>';
    row += '<td>' + this.info.TotalLikes + '</td>';
    row += '<td>' + this.info.TotalComments + '</td>';
    row += '<td>' + this.info.TotalViews + '</td>';
    row += '<td>';
    row += '<a data-placement="top" data-toggle="tooltip" title="Edit">';
    row += '<button class="btn btn-primary btn-xs" data-title="Edit" data-toggle="modal" data-target="#edit"><span class="glyphicon glyphicon-pencil"></span></button>';
    row += '</a> ';
    row += '<a data-placement="top" data-toggle="tooltip" title="Delete">';
    row += '<button class="btn btn-danger btn-xs" data-title="Delete" data-toggle="modal" data-target="#delete"><span class="glyphicon glyphicon-trash"></span></button>';
    row += '</a>';
    row += '</td>';
    row += '</tr>';
    return row;
};
/**
 * Instagram wrong link error handler
 * @param  {[type]} errors [description]
 * @return {[type]}        [description]
 */
Instagram.prototype.errorHandler = function(errors) {
    this.errorContainer.html(errors);
};
/**
 * Small label indicator success/false/error
 * @param  {[type]} label       [description]
 * @param  {[type]} error_class [description]
 * @return {[type]}             [description]
 */
Instagram.prototype.eventHandler = function(label, error_class) {
    if (typeof error_class == 'undefined') {
        this.txtIndicator.eq(this.currentIndex).css({
            'width': this.txtProgressState + '%',
            'border-top': '2px solid green'
        });
        this.infoContainer.eq(this.currentIndex).html(label);
    } else {
        this.txtIndicator.eq(this.currentIndex).css({
            'width': this.txtProgressState + '%',
            'border-top': '2px solid red'
        });
        this.infoContainer.eq(this.currentIndex).removeClass('label-info').addClass(error_class).html(label);
    }
};
/**
 * Start the application script process
 * @param  {[type]} link [description]
 * @return {[type]}      [description]
 */
Instagram.prototype.initNow = function(link, _send_payload) {
    // cache main object
    var $this = this;
    // set default payload object
    if (!_send_payload) {
        _send_payload = {
            iUrl: link,
            request_action: 'search_account'
        };
    }
    // you said promise
    return $.post($this.sendRequestUrl, _send_payload, function(data, textStatus, xhr) {
        // set var counter
        var masterProgress = 0;
        // if any error in ajax response
        if (window._sharedData.error) {
            // set error flag
            $this.stateError = true;
            // show error message
            $this.errorHandler(window._sharedData.error);
            // error percentage
            masterProgress = Math.floor(((currentMasterIndex) / (totalRequestUrl)) * 100);
            // get over all percentage
            currentMasterProgress = masterProgress;
            // update master progress bar
            stateProgress();
            // increase master index value
            currentMasterIndex++;
            // break the bone
            return false;
        } else {
            // handle success response
            $this.InstaJSON = window._sharedData.entry_data.ProfilePage.shift();
            // check private account status
            if ($this.InstaJSON.user.is_private === true) {
                // update label text
                $this.eventHandler("This is Private account: " + $this.InstaJSON.user.full_name, 'label-danger');
                return false;
            }
            // set error flag false
            $this.stateError = false;
            // get/set users data
            $this.setAccount();
            // if next result set found with max id
            if ($this.isSearchingForNext === true) {
                // next ajax call
                var _send_payload = {
                    // send user name with loop next request
                    keyword: $this.info.UserName,
                    // request filter
                    request_action: 'search_account',
                    // next request id
                    max_id: $this.urlInstagramNext
                };
                // send ajax request again
                $this.initNow($this.info.UserName, _send_payload);
            } else {
                // increase master index value
                currentMasterIndex++;
                // calculate work status
                masterProgress = Math.floor(((currentMasterIndex) / (totalRequestUrl)) * 100);
                // set next request false
                $this.isSearchingForNext = false;
                // reset index post
                $this.currentIndexPost = 1;
                // set txt progress bar
                $this.txtProgressState = 0;
                // update label text
                $this.eventHandler("Likes & Comments Done..." + $this.info.FullName, 'label-success');
                // debugger message console
                _l('Current Index ' + $this.currentIndex);
                _l('totalRequestUrl ' + totalRequestUrl);
                _l('Current% ' + masterProgress);
                // update master progress bar value
                currentMasterProgress = masterProgress;
                // call progress bar
                stateProgress();
                // show values rows in table
                $this.tableContentWrapper.append($this.buildViews());
            }
        }
    });
};
/**
 * ++++++++++++++++++++++++++++++++++++++++++++++++++++++++
 * Kindly respect the People
 * Everything is Respectful in Nature... :)
 * Be Good and spend life  happily.....
 *  _        _______  _______  _______  _______ _________   _______ _________ _        _______
 * ( (    /|(  ____ \(  ____ \(  ____ )(  ___  )\__    _/  (  ____ \\__   __/( (    /|(  ____ \|\     /|
 * |  \  ( || (    \/| (    \/| (    )|| (   ) |   )  (    | (    \/   ) (   |  \  ( || (    \/| )   ( |
 * |   \ | || (__    | (__    | (____)|| (___) |   |  |    | (_____    | |   |   \ | || |      | (___) |
 * | (\ \) ||  __)   |  __)   |     __)|  ___  |   |  |    (_____  )   | |   | (\ \) || | ____ |  ___  |
 * | | \   || (      | (      | (\ (   | (   ) |   |  |          ) |   | |   | | \   || | \_  )| (   ) |
 * | )  \  || (____/\| (____/\| ) \ \__| )   ( ||\_)  )    /\____) |___) (___| )  \  || (___) || )   ( |
 * |/    )_)(_______/(_______/|/   \__/|/     \|(____/     \_______)\_______/|/    )_)(_______)|/     \|
 *
 *
 * This is global JavaScript file
 *
 * This file contains all global level variable and function
 * which needs to call in separate modular file
 *
 * Also this file contains all global level settings variable too
 *
 * The superScraper is global variable to get and set JavaScript Application Settings
 *
 * ++++++++++++++++++++++++++++++++++++++++++++++++++++++++
 */
$document.ready(function() {

    $("input[name='infoopt']").on('change', function() {
        chkOpt = $(this).val();
        Config.setItem('infoFullMin', chkOpt);
    });

    /**
     * ============================================================================================
     */
    $("[data-toggle=tooltip]").tooltip();
    /**
     * [description]
     * @param  {[type]} $ [description]
     * @return {[type]}   [description]
     */
    (function($) {
        $.fn.flash = function(message) {
            if (typeof message == 'undefined') {
                $('.container.preloader').addClass('hide');
            } else {
                $('.container.preloader').removeClass('hide').find('.progress-bar.progress-bar-striped').html(message);
            }
        };
    }(jQuery));
    /**
     * ============================================================================================
     */
    /**
     * ++++++++++++++++++++++++++++++++++++++++++++++++++++++++
     * Happy: Word Emo Analytic Cloud
     * @type {Array}
     * ++++++++++++++++++++++++++++++++++++++++++++++++++++++++
     */
    var good = [{
        text: '#Lovely',
        weight: 10
    }, {
        text: '#Good',
        weight: 11
    }, {
        text: '#Excellent',
        weight: 12
    }, {
        text: '#Wowmade',
        weight: 13
    }, {
        text: '#wow',
        weight: 14
    }, {
        text: '#Philadelphia',
        weight: 15
    }, {
        text: '#NewDone',
        weight: 16
    }, {
        text: '#Best',
        weight: 17
    }];
    // execute happy
    $('.wow').jQCloud(good, {
        shape: 'elliptic',
        autoResize: true,
        height: 350
    });
    /**
     * ============================================================================================
     */
    /**
     * ++++++++++++++++++++++++++++++++++++++++++++++++++++++++
     * Bad: Word Emo Analytic Cloud
     * @type {Array}
     * ++++++++++++++++++++++++++++++++++++++++++++++++++++++++
     */
    var bad = [{
        text: '#SoBad',
        weight: 21
    }, {
        text: '#Nope',
        weight: 22
    }, {
        text: '#DoNotWorks',
        weight: 23
    }, {
        text: '#Useless',
        weight: 24
    }, {
        text: '#SoPoor',
        weight: 25
    }, {
        text: '#AnotherBad',
        weight: 26
    }, {
        text: '#ServiceOff',
        weight: 27
    }, {
        text: '#Ban',
        weight: 28
    }];
    /**
     * ============================================================================================
     */
    // execute bad
    $('.oh').jQCloud(bad, {
        colors: ["#800026", "#bd0026", "#e31a1c", "#fc4e2a", "#fd8d3c"],
        shape: 'elliptic',
        autoResize: true,
        height: 350
    });
    /**
     * ============================================================================================
     */
    /**
     * ++++++++++++++++++++++++++++++++++++++++++++++++++++++++
     * Instagram Super Search Object
     * @type {Array}
     * ++++++++++++++++++++++++++++++++++++++++++++++++++++++++
     */
    var superScraper = function() {};
    /**
     * ============================================================================================
     */
    /**
     * Internet Connection Status and Template
     */
    superScraper.prototype.setOfflineMode = function() {
        if (this.userAgentStatus == fasle) {
            var template = $('#offline-template').html();
            $('.wrapper').html(template);
        }
    };
    /**
     * ============================================================================================
     */
    /**
     * Class download is for download data in excel from table by table id
     * use table id in a tag as data-id attr
     * use same table id in table tag as id attr
     * @return {[type]}     [description]
     */
    $(document).on('click', 'a.download', function() {
        _l('Download triggered....');
        // a tag
        var _this = $(this);
        // table id
        var data = _this.data('id');
        // export to excel
        var elData = fnExcelReport(data);
        // create download button and trigger
        _this.attr('download', 'ExcelExport-' + new Date().getTime() + '.xls').attr('href', elData).attr('target', '_blank');
    });
    /**
     * ============================================================================================
     */
    // search input type object
    var queryText = $(Config.getItem('txtSearch'));
    // auto complete query text
    queryText.typeahead({
        multiple: true,
        source: keyContainer,
        autoSelect: true,
        minLength: 0,
        items: 20,
        showHintOnFocus: true,
        dupChecker: true,
    });
    /**
     * ============================================================================================
     */
    queryText.change(function() {
        var current = queryText.typeahead("getActive");
        if (current) {
            // Some item from your model is active!
            if (current.name == queryText.val()) {
                // This means the exact match is found. Use toLowerCase() if you want case insensitive match.
            } else {
                // This means it is only a partial match, you can either add a new item
                // or take the active if you don't want new items
            }
        } else {
            // Nothing is active so it is a new value (or maybe empty value)
        }
    });
    /**
     * ============================================================================================
     */
    // ajax action loader
    $document.ajaxStart(function() {
        $('body').flash('Please wait...request in progress');
    }).ajaxStop(function() {
        $('body').flash();
    });
    /**
     * ============================================================================================
     */
    /** on modal close */
    booClose.modal("hide");
    /**
     * ============================================================================================
     */
    /** tool tip code */
    $("body").tooltip({
        selector: "[rel=tooltip]",
        trigger: "hover"
    });
    /**
     * ============================================================================================
     */
    /** zoom effect on image post */
    $document.delegate('*[data-toggle="lightbox"]', "click", function(event) {
        event.preventDefault();
        $(this).ekkoLightbox();
    });
    /**
     * ============================================================================================
     */
    // random color for chart
    function hexColor() {
        var hexaPattern = 0xffffff - Math.floor(Math.random() * 0x1000000);
        return "#" + ("000000" + hexaPattern.toString(16)).substr(-6);
    }
    /**
     * ============================================================================================
     */
    // display the chart
    function showChart(options) {
        var el = "chart_" + new Date().getTime();
        CanvasJS.addColorSet("customColorSet", [
            hexColor(),
            hexColor(),
            hexColor(),
            hexColor(),
            hexColor(),
            hexColor()
        ]);
        el = new CanvasJS.Chart(options.chartId, {
            animationDuration: 800,
            animationEnabled: true,
            backgroundColor: "transparent",
            colorSet: "customColorSet",
            theme: "theme2",
            legend: {
                fontFamily: "calibri",
                fontSize: 14,
                horizontalAlign: "left",
                verticalAlign: "center",
                itemTextFormatter: function(e) {
                    return e.dataPoint.name + ": " + e.dataPoint.y;
                }
            },
            title: {
                dockInsidePlotArea: true,
                fontSize: 20,
                fontWeight: "normal",
                horizontalAlign: "center",
                verticalAlign: "center",
                text: options.count
            },
            toolTip: {
                cornerRadius: 0,
                fontStyle: "normal"
            },
            data: [{
                innerRadius: "80%",
                radius: "90%",
                legendMarkerType: "square",
                showInLegend: true,
                startAngle: 90,
                type: "doughnut",
                dataPoints: [{
                    y: options.likes,
                    name: "Likes"
                }, {
                    y: options.comments,
                    name: "Comments"
                }, {
                    y: options.keywords,
                    name: "Keywords"
                }]
            }]
        });
        // render all chart
        el.render();
        // set flag
        is_chart_created = true;
    }
    /**
     * ============================================================================================
     */
    // chart customization if needed resize
    function customizeCharts(chart) {
        if (typeof chart !== "undefined") {
            if ($(window).outerWidth() >= 1920) {
                chart.options.legend.fontSize = 14;
                chart.options.legend.horizontalAlign = "left";
                chart.options.legend.verticalAlign = "center";
                chart.options.legend.maxWidth = null;
            } else if ($(window).outerWidth() < 1920 && $(window).outerWidth() >= 1200) {
                chart.options.legend.fontSize = 14;
                chart.options.legend.horizontalAlign = "left";
                chart.options.legend.verticalAlign = "center";
                chart.options.legend.maxWidth = 140;
            } else if ($(window).outerWidth() < 1200 && $(window).outerWidth() >= 992) {
                chart.options.legend.fontSize = 12;
                chart.options.legend.horizontalAlign = "center";
                chart.options.legend.verticalAlign = "top";
                chart.options.legend.maxWidth = null;
            } else if ($(window).outerWidth() < 992) {
                chart.options.legend.fontSize = 14;
                chart.options.legend.horizontalAlign = "center";
                chart.options.legend.verticalAlign = "bottom";
                chart.options.legend.maxWidth = null;
            }
            chart.render();
        }
    }
    /**
     * ============================================================================================
     */
    // collect all words
    function getKeyContainer() {
        keyContainer = keyContainer.filter(onlyUnique);
        return keyContainer;
    }
    /**
     * ============================================================================================
     */
    // filter keyword by uniqueness
    function onlyUnique(value, index, self) {
        return self.indexOf(value) === index;
    }
    /**
     * ============================================================================================
     */
    // call chart
    function renderAllCharts() {
        if (is_chart_created === true) {
            for (var i = 0; i < allCharts.length; i) {
                customizeCharts(allCharts[i]);
            }
        }
    }
    /**
     * ============================================================================================
     */
    /**
     * Core & Helper Functions for JavaScript
     * array sum
     */
    $.sum = function($array) {
        var ret = 0;
        $.each($array, function(i, val) {
            ret += val;
        });
        return ret;
    };
    /**
     * ============================================================================================
     */
    // Instagram Search object
    var InstagramSearch = function(option) {
        this.filterKeywords = option.filterKeywords;
        this.keyWordsGroupCountValue = [];
        this.container = option.container || false;
        this.keyword = option.keyword || false;
        this.template = option.template || false;
        this.callback = option.callback || false;
        this.viewData = {};
        this.chartOptions = {};
        this.sumOfTotalLikes = option.sumOfTotalLikes;
        this.sumOfTotalComments = option.sumOfTotalComments;
        this.sumOfTotalShare = option.sumOfTotalShare;
        this.sumOfTotalPosts = option.sumOfTotalPosts;
        this.src = "";
        this.caption = "";
        this.like = 0;
        this.comment = 0;
        this.name = "";
        this.count = 0;
        this.tblSummery = [];
        this.keywordSummery = [];
        this.imgSrcTemplate = [];
        this.setIndex = 0;
        this.requestUrl = Config.getItem('urlRequest');
        this.dataJson = {};
        this.isNextOn = false;
        this.sumOfCount = 0;
        this.sumOfLikes = 0;
        this.sumOfPosts = 0;
        this.sumOfComments = 0;
        this._self = this;
        this.nextId = false;
        this.maxRequestNo = 4;
        this.requestRecursiveCycle = true;
        this.limitRequest = 0;
        this.action = option.action ? option.action : 'search_info';
        // return self object
        return this;
    };
    /**
     * ============================================================================================
     */
    // initialize Instagram Search Object
    InstagramSearch.prototype.initStart = function() {
        // special to collect this keyword
        var _self = this;
        /** each data normal post */
        return $.post(_self.requestUrl, {
            // send key word
            keyword: _self.keyword,
            // send next id
            next: _self.nextId,
            // send action filter
            request_action: _self.action
        }, function(json) {
            // if any error in ajax response
            if (window._sharedData.error) {
                // break the bone
                return false;
            } else {
                // handle success response
                json = window._sharedData.entry_data.ProfilePage.shift();
            }
            // store all json data in class property
            _l(json);
            // json in to local var
            _self.dataJson = json;
            // if next id present in json
            if (_self.dataJson.tag.media.page_info.has_next_page === true) {
                // set next flag true
                _self.isNextOn = true;
                // get max or next id for next request
                _self.nextId = _self.dataJson.tag.media.page_info.end_cursor;
            } else {
                // no next request
                _self.isNextOn = false;
            }
            // parse the json data
            _self.buildMediaPost(json);
            // parse most popular posts, only for once
            if (_self.limitRequest < 1) {
                // top post media pop up
                _self.buildTopPostMedia(json);
            }
            // next request
            _self.onCallNextRequest();
        });
    };
    /**
     * ============================================================================================
     */
    // Check if hash tag Exist
    InstagramSearch.prototype.findHashtags = function findHashtags(searchText) {
        if (searchText) {
            var regexp = /\B\#\w\w+\b/g;
            result = searchText.match(regexp);
            if (result) {
                return result;
            } else {
                return [];
            }
        } else {
            return [];
        }
    };
    /**
     * ============================================================================================
     */
    // Count Words by Group
    InstagramSearch.prototype.keyWordsGroupCount = function(arrObj) {
        var _self = this;
        arrObj.forEach(function(item, index) {
            if (_self.keyWordsGroupCountValue[item]) {
                _self.keyWordsGroupCountValue[item].push(1);
            } else {
                _self.keyWordsGroupCountValue[item] = [1];
            }
        });
    };
    /**
     * ============================================================================================
     */
    // build the template view
    InstagramSearch.prototype.buildTemplateView = function() {
        var _self = this;
        // dynamic chart name
        var _chart = "chart-view-" + new Date().getTime();
        // count each keyword occurrence
        this.keyWordsGroupCount(keyContainer);
        // serial no, temp var
        var inc = 1;
        var tmpArr = [];
        // build keyword summery
        Object.keys(this.keyWordsGroupCountValue.sort()).forEach(function(item, index) {
            tmpArr.push({
                name: item,
                val: this.keyWordsGroupCountValue[item].length
            });
        }, this);
        // sort array max to min order
        tmpArr.sort(function(a, b) {
            return b.val - a.val;
        });
        // build keyword summer table
        tmpArr.forEach(function(item, index) {
            _self.keywordSummery.push({
                sno: inc++,
                keyword: item.name,
                key_count: item.val
            });
        }, this);
        // view template value
        this.viewData = {
            container: _chart,
            title: this.name,
            "table-summery": this.tblSummery,
            "key-table-summery": this.keywordSummery,
            "img-thumbs": this.imgSrcTemplate
        };
        // result render
        this.container.append(Mustache.render(this.template, this.viewData));
        // options
        this.chartOptions = {
            chartId: _chart,
            count: this.count,
            likes: this.like,
            comments: this.comment,
            keywords: Object.keys(this.keyWordsGroupCountValue).length
        };
    };
    /**
     * ============================================================================================
     */
    // build media top post image
    InstagramSearch.prototype.buildMediaPost = function(json) {
        var _self = this;
        // tag name
        _self.name = json.tag.name;
        // no of total posts
        _self.count = json.tag.media.count;
        // sum of all posts on each click
        _self.sumOfCount += parseInt(_self.count) || 0;
        // get result media
        $.each(json.tag.media.nodes, function(index, val) {
            // image path
            _self.src = val.thumbnail_src;
            // post text
            _self.caption = val.caption;
            // comment text
            _self.comment += parseInt(val.comments.count) || 0;
            // sum of like
            _self.like += parseInt(val.likes.count) || 0;
            // collect all keywords
            _self.findHashtags(val.caption).forEach(function(hashtag) {
                //if(_self.filterKeywords.indexOf(hashtag) === -1){
                _self.filterKeywords.push(hashtag);
                //}
            }, this);
        });
    };
    /**
     * ============================================================================================
     */
    // build top media comments
    InstagramSearch.prototype.buildTopPostMedia = function(json) {
        var _self = this;
        // get result top
        $.each(json.tag.top_posts.nodes, function(index, val) {
            // table row no
            var sr = index + 1;
            // image path
            _self.src = val.thumbnail_src;
            // post text
            _self.caption = val.caption;
            // comment text
            _self.comment += parseInt(val.comments.count) || 0;
            // sum of like
            _self.like += parseInt(val.likes.count) || 0;
            // collect all keywords
            _self.findHashtags(val.caption).forEach(function(hashtag) {
                //if(_self.filterKeywords.indexOf(hashtag) === -1){
                _self.filterKeywords.push(hashtag);
                //}
            }, this);
            // is video
            if (val.is_video === true) {
                // img preview gallery
                _self.imgSrcTemplate.push({
                    img_src: _self.src,
                    likes_img: val.likes.count,
                    comments_img: val.comments.count,
                    video_views: parseInt(val.video_views) || 0
                });
            } else {
                // img preview gallery
                _self.imgSrcTemplate.push({
                    img_src: val.thumbnail_src,
                    likes_img: val.likes.count,
                    comments_img: val.comments.count
                });
            }
            // build table summer
            _self.tblSummery.push({
                no: sr,
                posts: val.caption,
                likes_count: val.likes.count,
                comments_count: val.comments.count
            });
        });
    };
    /**
     * ============================================================================================
     */
    // set top navigation counters
    InstagramSearch.prototype.buildSummarizeCount = function(elOptions) {
        // get all likes count
        this.sumOfLikes += this.like;
        // get all comment count
        this.sumOfComments += this.comment;
        // get all posts count
        this.sumOfCount += this.count;
        // get all posts count
        this.sumOfPosts += this.count;
        // update top summery section with grand counts, show all sum value in top bar
        this.sumOfTotalLikes.text(parseInt(this.sumOfTotalLikes.text()) + this.sumOfLikes);
        this.sumOfTotalComments.text(parseInt(this.sumOfTotalComments.text()) + this.sumOfComments);
        this.sumOfTotalShare.text(parseInt(this.sumOfTotalShare.text()) + Object.keys(this.keyWordsGroupCountValue).length);
        this.sumOfTotalPosts.text(parseInt(this.sumOfTotalPosts.text()) + this.sumOfPosts);
    };
    /**
     * ============================================================================================
     */
    // next request call
    InstagramSearch.prototype.onCallNextRequest = function() {
        // special to collect this keyword
        var _self = this;
        // set limit
        _self.limitRequest++;
        // if next is on
        if (_self.isNextOn && _self.requestRecursiveCycle && _self.limitRequest < _self.maxRequestNo) {
            // call next request
            _self.initStart();
        } else {
            // template data settings
            _self.buildTemplateView();
            // finally call the output
            _self.buildSummarizeCount();
            // render callback/chart
            _self.callback(_self.chartOptions);
        }
    };
    /**
     * ============================================================================================
     */
    // APP Instance
    var APP = new superScraper();
    // Cache values
    var hashtagsValues = parseInt(Config.getItem('queryHashtags')) - 1;
    var accountsValues = parseInt(Config.getItem('queryAccounts')) - 1;
    // Click search
    $(Config.getItem('btnSearch')).click(function(e) {
        // form template
        var template = $(Config.getItem('queryFormTemplate')).html();
        // optional, speeds up future uses
        Mustache.parse(template);
        // text result container
        var txtContainer = $(Config.getItem('searchFormContainer'));
        // search text
        var searchQuery = $(Config.getItem('txtSearch')).val();
        // if not empty
        if (searchQuery) {
            var instanceOfSuperScraper = new superScraper();
            var tagListArray = searchQuery.split(' ');
            var elIndex = 0;
            var rendered;
            // for each search item
            $.each(tagListArray, function(i, val) {
                // for hash tags
                if (tagListArray[i].indexOf('#') === 0) {
                    // set form input with search values
                    rendered = Mustache.render(template, {
                        action: 'hashtag',
                        value: val,
                        indicator: 'txt-progress-none',
                        'input_action': 'txt-insta-none',
                        'user_indicator': 'user-info-none',
                    });
                    // append view
                    txtContainer.append(rendered);
                    // count hash tag
                    hashtagsValues++;
                    // object settings
                    var option = {
                        filterKeywords: keyContainer,
                        sumOfTotalLikes: $(Config.getItem('lblSumOfTotalLikes')),
                        sumOfTotalComments: $(Config.getItem('lblSumOfTotalComments')),
                        sumOfTotalShare: $(Config.getItem('lblSumOfTotalShare')),
                        sumOfTotalPosts: $(Config.getItem('lblSumOfTotalPosts')),
                        container: $(Config.getItem('searchFormChartContainer')),
                        keyword: val.replace("#", "") || "digitaslbi",
                        template: $(Config.getItem('chartTemplate')).html(),
                        action: 'search_info',
                        callback: showChart
                    };
                    // start fetching...
                    var InstaObject = new InstagramSearch(option).initStart();
                }
                // for accounts
                if (tagListArray[i].indexOf('@') === 0) {
                    // set form input with search values
                    rendered = Mustache.render(template, {
                        action: 'instagram',
                        value: val,
                        indicator: 'txt-progress',
                        'input_action': 'txt-insta',
                        'user_indicator': 'user-info',
                    });
                    // append view
                    txtContainer.append(rendered);
                    accountsValues++;
                    // check internet connections
                    if (!is_online) {
                        alert(Config.getItem('offlineMsg'));
                        return;
                    }
                    // request for filter
                    if ($.trim(val)) {
                        _l(val);
                        val = val.replace(/\@/, '', val);
                        // set filter flag
                        isFilter = true;
                        // new Object Instagram
                        var appHandler = new Instagram();
                        // set internal index
                        appHandler.currentIndex = elIndex;
                        // update label blue info
                        appHandler.eventHandler("Getting data, please wait....");
                        // call Instagram object
                        appHandler.initNow(null, {
                            keyword: val,
                            request_action: 'search_account',
                            next: 'false'
                        }).done(function(data) {
                            if (!appHandler.stateError) {
                                // promise action can be done here
                            } else {
                                // reset index post master
                                appHandler.currentIndexPost = 1;
                                // if any error
                                appHandler.eventHandler("Error in Instagram profile link, wrong link", "label-danger");
                            }
                        });
                    }
                    elIndex++;
                }
            });
            // update labels
            Config.setItem('queryHashtags', (hashtagsValues));
            // update labels
            Config.setItem('queryAccounts', (accountsValues));
            // update search numbers
            $(Config.getItem('lblCountSearchHashtags')).html(hashtagsValues);
            $(Config.getItem('lblCountSearchAccounts')).html(accountsValues);
        }
    });
});