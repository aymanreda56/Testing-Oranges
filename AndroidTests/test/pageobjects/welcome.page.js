class welcome{

    get backgroundImage () {return $('com.tumblr:id/post_image')}; //compare element id after waiting and scrolling
    get paragraph () {return $('//android.widget.TextView[@index="2"]')}; //loads with correct text
    get tumblrLogo () {return $('~Tumblr-logo')}; //loads with correct text
    get scrollIndicator () {return $('com.tumblr:id/indicator')}; //compare element id after waiting and scrolling

}




module.exports = new welcome();