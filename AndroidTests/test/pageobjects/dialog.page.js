class Dialog{

    get appBtn() {return $('~App')};
//    get listDialogBtn () {return $('~List Dialog')};
    get activityBtn() {return $('~Activity')};
};

module.exports = new Dialog();