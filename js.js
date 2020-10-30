let u1 = 'cd2239dfc5da7bf418f43205229f2bd0'// AOLIGEIGAN
let p1 = '013c51c369d7e3bb7442e5c3ef67c29f'// JJFBT0000
let u2 = 'acef29994e92b4c9e92e98b613651b99'
let p2 = '90195ef78b13fa12f3310c3f48354b56'
let u3 = 'fe01ce2a7fbac8fafaed7c982a04e229'// demo
let p3 = 'fe01ce2a7fbac8fafaed7c982a04e229'// demo
var us = [u1, u2, u3]
var ps = [p1, p2, u3]
function myFunction() {
    var uu = md5(document.getElementById("username").value);
    var pp = md5(document.getElementById("password").value);
    var su = us.indexOf(uu)
    if (su != '-1') {
        var sp = ps[su]
    }
    if (su != '-1', sp == pp) {
        alert("登录成功");
        window.location.href = "%6C%69%2E%68%74%6D%6C";
    }
    else {
        alert("用户名或密码错误");
    }
}