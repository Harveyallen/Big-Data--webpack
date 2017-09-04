
    var $ = require('../lib/jquery.js');

    var Carousel=(function () {
        function _Carousel($node) {
            this.$node=$node;
            this.init();
            this.bind();
            this.autoplay();
        }

        _Carousel.prototype.init=function () {
            var $carousel=this.$carousel=this.$node.find('.carousel'),
                $lis=this.$lis=this.$node.find('.carousel>li');
            this.$next=this.$node.find('.next');
            this.$pre=this.$node.find('.pre');
            this.$bullets=this.$node.find('.selector>li');
            this.pageIndex=1,
                this.lock=false,
                this.len=$lis.length,
                this.$imglist=$(".carousel img");
            var $imgwidth=this.imgwidth=document.documentElement.clientWidth,
                $imgheight=this.imgheight=document.documentElement.clientHeight;



            this.$imglist.each(function () {
                this.style.width=$imgwidth+"px";
                this.style.height=$imgheight+"px"
            });
            this.$node.width(this.imgwidth);
            this.$node.height(this.imgheight);
            this.width=this.$imglist.width();
            this.$carousel.css('left',-this.imgwidth);
            $carousel.append($lis.first().clone());
            $carousel.prepend($lis.last().clone());
            console.lg(14);

        };

        _Carousel.prototype.bind=function () {
            var _this=this;
            this.$next.on('click',function () {
                _this.playNext()
            });
            this.$pre.on('click',function () {
                _this.playpre()
            });
            this.$bullets.on('click',function () {
                var index=$(this).index();
                _this.pageIndex=index+1;
                _this.addBullet(_this.pageIndex);
            });


        };

        _Carousel.prototype.playNext=function () {
            if(this.lock)return;
            this.lock=true;
            this.pageIndex++;
            var left=-this.pageIndex*this.width;
            var _this=this;

            this.$carousel.animate({left:left+'px'},function () {
                if(_this.pageIndex>_this.len){
                    _this.$carousel.css('left',-_this.width+'px');
                    _this.pageIndex=1;
                }
                _this.lock=false;
                _this.addBullet(_this.pageIndex);
            })
        };

        _Carousel.prototype.playpre=function () {
            if(this.lock)return;
            this.lock=true;
            this.pageIndex--;
            var left = -this.pageIndex * this.width;
            var _this=this;
            this.$carousel.animate({left: left + 'px'},function () {
                if(_this.pageIndex<=0){
                    _this.$carousel.css('left', -_this.len *_this.width + 'px');
                    _this.pageIndex = _this.len;
                }
                _this.lock=false;
                _this.addBullet(_this.pageIndex);
            })
        };

        _Carousel.prototype.addBullet=function(pageIndex) {
            var _this=this;
            this.$bullets.removeClass('active').eq(pageIndex-1).addClass('active')
            this.$carousel.animate({left:  -pageIndex * _this.width+ 'px'})
        };

        _Carousel.prototype.autoplay=function () {
            var clock=true;
            var _this=this;
            setInterval(function () {
                if(clock){ _this.playNext()}
            },2000);

            this.$node.on('mouseover',function () {
                clock=false;
            });

            this.$node.on('mouseout',function () {
                clock=true;
            })
        };


        return{
            init:function ($ct) {
                $ct.each(function (index,ele) {
                    new _Carousel($(ele))
                })
            }
        }
    })();

    module.exports=Carousel;



