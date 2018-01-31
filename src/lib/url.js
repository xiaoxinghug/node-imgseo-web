    let url = "";
    if (location.host.indexOf('test-g.meituan.com') >-1){
        url = '//test.i.meituan.com/wedding/ajax/m/wedpiclib';
    }else if (location.host.indexOf('dianping') >-1){
        url = '//m.dianping.com/wedding/ajax/m/wedpiclib';
    }else if (location.host.indexOf('51ping') >-1){
        url = '//m.51ping.com/wedding/ajax/m/wedpiclib';
    }else if (location.host.indexOf('localhost:8080') >-1){
        url = '//test.i.meituan.com/wedding/ajax/m/wedpiclib';
    }else {
        url = '//i.meituan.com/wedding/ajax/m/wedpiclib';
    }
    
module.exports = url