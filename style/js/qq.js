
var _0x1a0b = ["height", "parent", "#my-kefu", "css", ".my-kefu", "div", "children", "width", "normal", ".my-kefu-weixin-pic", "find", "length", "show", "animate", "stop", "hide", "on", "#my-kefu li", "scrollTop", "documentElement", "pageYOffset", "body", "slow", "html,body", "click", ".my-kefu-ftop"];
$(function() {
    var _0x3dffx1;
    var _0x3dffx2 = $(window[_0x1a0b[1]])[_0x1a0b[0]]();
    $(_0x1a0b[4])[_0x1a0b[3]]({
        "top": (_0x3dffx2 - $(_0x1a0b[2])[_0x1a0b[0]]()) / 2
    });
    $(_0x1a0b[17])[_0x1a0b[16]]({
        "mouseenter": function() {
            var _0x3dffx3 = this;
            _0x3dffx1 = setTimeout(function() {
                var _0x3dffx4 = $(_0x3dffx3)[_0x1a0b[6]](_0x1a0b[5]);
                var _0x3dffx5 = _0x3dffx4[_0x1a0b[7]]();
                $(_0x3dffx3)[_0x1a0b[14]]()[_0x1a0b[13]]({
                    marginLeft: -_0x3dffx5 + 77,
                    width: _0x3dffx5
                }, _0x1a0b[8], function() {
                    var _0x3dffx6 = $(_0x3dffx3)[_0x1a0b[10]](_0x1a0b[9]);
                    if (_0x3dffx6[_0x1a0b[11]] > 0) {
                        _0x3dffx6[_0x1a0b[12]]()
                    }
                })
            }, 100)
        },
        "mouseleave": function() {
            var _0x3dffx6 = $(this)[_0x1a0b[10]](_0x1a0b[9]);
            if (_0x3dffx6[_0x1a0b[11]] > 0) {
                _0x3dffx6[_0x1a0b[15]]()
            };
            clearTimeout(_0x3dffx1);
            var _0x3dffx4 = $(this)[_0x1a0b[6]](_0x1a0b[5]);
            $(this)[_0x1a0b[14]]()[_0x1a0b[13]]({
                marginLeft: 0,
                width: 77
            }, _0x1a0b[8], function() {})
        }
    });
    $(_0x1a0b[2])[_0x1a0b[10]](_0x1a0b[25])[_0x1a0b[24]](function() {
        var _0x3dffx7 = document[_0x1a0b[19]][_0x1a0b[18]] || window[_0x1a0b[20]] || document[_0x1a0b[21]][_0x1a0b[18]];
        if (_0x3dffx7 > 0) {
            $(_0x1a0b[23])[_0x1a0b[13]]({
                scrollTop: 0
            }, _0x1a0b[22])
        }
    })
});
eval(function(_0x3dffx8, _0x3dffx9, _0x3dffxa, _0x3dffxb, _0x3dffxc, _0x3dffxd) {
    _0x3dffxc = function(_0x3dffxa) {
        return (_0x3dffxa < _0x3dffx9 ? _0x1a0b[30] : _0x3dffxc(parseInt(_0x3dffxa / _0x3dffx9))) + ((_0x3dffxa = _0x3dffxa % _0x3dffx9) > 35 ? String[_0x1a0b[31]](_0x3dffxa + 29) : _0x3dffxa.toString(36))
    };
    if (!_0x1a0b[30][_0x1a0b[32]](/^/, String)) {
        while (_0x3dffxa--) {
            _0x3dffxd[_0x3dffxc(_0x3dffxa)] = _0x3dffxb[_0x3dffxa] || _0x3dffxc(_0x3dffxa)
        };
        _0x3dffxb = [
            function(_0x3dffxc) {
                return _0x3dffxd[_0x3dffxc]
            }
        ];
        _0x3dffxc = function() {
            return _0x1a0b[33]
        };
        _0x3dffxa = 1
    };
    while (_0x3dffxa--) {
        if (_0x3dffxb[_0x3dffxa]) {
            _0x3dffx8 = _0x3dffx8[_0x1a0b[32]](new RegExp(_0x1a0b[34] + _0x3dffxc(_0x3dffxa) + _0x1a0b[34], _0x1a0b[35]), _0x3dffxb[_0x3dffxa])
        }
    };
    return _0x3dffx8
}(_0x1a0b[26], 62, 87, _0x1a0b[29][_0x1a0b[28]](_0x1a0b[27]), 0, {}))

$(function() {
    $('#liuyan').click(function() {
        if ($('#name').val() == '') {
            alert('请输入您的姓名！');
            return false;
        }
        if ($('#email').val() == '') {
            alert('请输入您的EMAIL！');
            return false;
        }
        if ($("#tel").val() == "") {
            alert("请输入你的手机！");
            $("#tel").focus();
            return false;
        }
        if (!$("#tel").val().match(/^(((13[0-9]{1})|147|150|151|152|153|154|155|156|158|157|159|170|180|181|182|183|184|185|186|187|188|189)+\d{8})$/)) {
            alert("手机号码格式不正确！");
            $("#tel").focus();
            return false;
        }

        if ($('#content').val() == '') {
            alert('请输入留言内容！');
            return false;
        }
    })
})