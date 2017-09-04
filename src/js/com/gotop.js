/**
 * Created by HARVEY on 2017/8/22.
 */
define(function (require, exports) {
    var $=require('../lib/jquery.js');
    function GoTop() {
        this.target=$('<button class="btn">TOP</button>');
        this.creatNode();
        this.bindEvent();
    }

    GoTop.prototype={
        creatNode:function () {
            this.target.css({
                'border': 'none',
                'height': '50px',
                'width': '50px',
                'border-radius': '50%',
                'position': 'fixed',
                'right': '20px',
                'bottom': '20px',
                'background-color': '#fed136',
                'text-align': 'center',
                'font-size': '16px',
                'line-height': '50px',
                'display': 'none'
            });

            $('body').append(this.target)
        },

        bindEvent:function () {
            var that=this;
            $(window).on('scroll',function () {
                if($(this).scrollTop()>300){
                    that.target.fadeIn('fast')
                }
                else {that.target.fadeOut('fast')}
            });

            this.target.on('click',function () {
                $('body').animate({scrollTop:0},500)
            })
        }
    };
    return GoTop;

});
