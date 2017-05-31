/**
 * Created by lichun on 2016/9/19.
 */

import {Scroller} from 'scroller';
export default {
    bind: function (el, binding, vnode) {
        let requestAnimationFrame = window.requestAnimationFrame || ((cb) => setTimeout(cb, 16.7));
        vnode.context.$on('initscroll', function (args) {
            requestAnimationFrame(() => {
                (($) => {
                    const side = $('.e-side table');
                    const header = $('.e-header table');
                    const scroll = $('.e-scroll');
                    const scrollContent = $('.e-scroll table');

                    const transform = typeof document.body.style.transform !== 'undefined' ? 'transform' : 'webkitTransform';

                    let flag = 0;
                    const scrollerObj = new Scroller(function(left, top, zoom) {
                        let doMove = () => {
                            flag = 0;
                            scrollContent.style[transform] = 'translate3d(' + (-left) + 'px,' + (-top) + 'px,0) scale(' + zoom + ')';
                            header.style[transform] = 'translate3d(' + (-left) + 'px,0,0) scale(' + zoom + ')';
                            side.style[transform] = 'translate3d(0,' + (-top) + 'px,0) scale(' + zoom + ')';
                        };
                        if (flag === 0) {
                            flag = 1;
                            requestAnimationFrame(doMove);
                        }
                    }, {
                        scrollingX: true,
                        scrollingY: true,
                        bouncing: false
                        // animating: false,

                    });

                    let cwidth = scroll.offsetWidth;
                    let cheight = scroll.offsetHeight;
                    let iwidth = scrollContent.offsetWidth;
                    let iheight = scrollContent.offsetHeight;

                    scrollerObj.setDimensions(cwidth, cheight, iwidth, iheight);

                    this.scroll = scroll;
                    this.touchstartHandler = function(e) {
                        scrollerObj.doTouchStart(e.touches, e.timeStamp);
                        e.preventDefault();
                    };

                    el.addEventListener('touchstart', this.touchstartHandler, false);

                    this.touchmoveHandler = function(e) {
                        if (cheight !== scroll.offsetHeight) {
                            scrollerObj.setDimensions(cwidth, scroll.offsetHeight, iwidth, iheight);
                        }
                        scrollerObj.doTouchMove(e.touches, e.timeStamp, e.scale);
                    };

                    el.addEventListener('touchmove', this.touchmoveHandler, false);

                    this.touchendHandler = function(e) {
                        scrollerObj.doTouchEnd(e.timeStamp);
                    };
                    el.addEventListener('touchend', this.touchendHandler, false);

                    this.touchcancelHandler = function(e) {
                        scrollerObj.doTouchEnd(e.timeStamp);
                    };
                    el.addEventListener('touchcancel', this.touchcancelHandler, false);
                })((qstr) => {
                    return el.querySelector(qstr);
                });
            });
        }.bind(binding));
    },
    unbind(el, binding) {
        if (binding) {
            el.removeEventListener('touchstart', binding.touchstartHandler);
            el.removeEventListener('touchmove', binding.touchmoveHandler);
            el.removeEventListener('touchend', binding.touchendHandler);
            el.removeEventListener('touchcancel', binding.touchcancelHandler);
        }
    }
};
