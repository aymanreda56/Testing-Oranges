class Dashboard{

    get dashboardTabBtn () {return $('~DASHBOARD')}; //click and test refresh
    get exploreTabBtn () {return $('~EXPLORE')}; //click
    get notificationsTabBtn () {return $('//android.view.ViewGroup[@resource-id="com.tumblr:id/notification_button_wrapper"]')}; //click
    get accountTabBtn () {return $('~ACCOUNT')}; //click



}





module.exports = new Dashboard ();