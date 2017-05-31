export default {
    bind(el, binding, vnode) {
        var cwrap = el.querySelector('.e-scroll table');
        let fragment = document.createDocumentFragment();
        // 趋势线
        function fnDrawChart(selectArr) {
            let drawOne = function (selectStr) {
                let aZuheItmPos = [];
                let nChartCurXw;
                let nChartCurYw;
                var spans = cwrap.querySelector(selectStr || '.on span');

                if (!spans) return;
                var oChartItmW = spans.clientWidth;

                var allOnSpan = cwrap.querySelectorAll(selectStr || '.on span');

                for (let i = 0, len = allOnSpan.length; i < len; i++) {
                    aZuheItmPos[i] = [allOnSpan[i].offsetLeft, allOnSpan[i].offsetTop];
                }

                for (var i = 1; i < aZuheItmPos.length; i++) {
                    nChartCurXw = aZuheItmPos[i][0] - aZuheItmPos[i - 1][0];
                    nChartCurYw = aZuheItmPos[i][1] - aZuheItmPos[i - 1][1];

                    if (!(Math.abs(nChartCurXw) <= oChartItmW + 5 && Math.abs(nChartCurXw) >= oChartItmW - 5)) {
                        if (nChartCurXw > 0) { // 右斜边
                            nChartCurXw = nChartCurXw - oChartItmW;
                            fragment.appendChild(createIEle((aZuheItmPos[i - 1][1] + 10), (aZuheItmPos[i - 1][0] + oChartItmW), Math.sqrt(Math.pow(nChartCurXw, 2) + Math.pow(nChartCurYw, 2)), Math.atan(nChartCurYw / nChartCurXw) / Math.PI * 180, 'zstable-line'));
                        } else if (nChartCurXw < 0) { // 左斜边
                            nChartCurXw = Math.abs(nChartCurXw) - oChartItmW;
                            fragment.appendChild(
                                createIEle(
                                    (aZuheItmPos[i][1] + 10),
                                    (aZuheItmPos[i][0] + oChartItmW),
                                    Math.sqrt(Math.pow(nChartCurXw, 2) + Math.pow(nChartCurYw, 2)),
                                    -Math.atan(nChartCurYw / nChartCurXw) / Math.PI * 180,
                                    'zstable-line'
                                )
                            );
                        } else {
                            nChartCurXw = nChartCurXw - oChartItmW;

                            fragment.appendChild(
                                createIEle(
                                    (aZuheItmPos[i - 1][1] + oChartItmW),
                                    (aZuheItmPos[i][0] + 8),
                                    5,
                                    90,
                                    'zstable-line'
                                )
                            );
                        }
                    } else {
                        if (nChartCurXw > 0) { // 右斜边
                            fragment.appendChild(
                                createIEle(
                                    (aZuheItmPos[i - 1][1] + 10),
                                    (aZuheItmPos[i - 1][0] + oChartItmW),
                                    Math.sqrt(Math.pow(10, 2) * 2),
                                    45,
                                    'zstable-line'
                                )
                            );
                        } else if (nChartCurXw < 0) { // 左斜边
                            fragment.appendChild(
                                createIEle(
                                    (aZuheItmPos[i][1]),
                                    (aZuheItmPos[i][0] + oChartItmW - 10),
                                    Math.sqrt(Math.pow(10, 2) * 2),
                                    -45,
                                    'zstable-line'
                                )
                            );
                        }
                    }
                }
            };
            selectArr.forEach(select => drawOne(select));
            cwrap.appendChild(fragment);
        }

        function clearZsLine() {
            let allZsline = el.querySelectorAll('.zstable-line');
            for (let i = 0, length = allZsline.length; i < length; i++) {
                allZsline[i].parentNode.removeChild(allZsline[i]);
            }
        }
        var transform = typeof document.body.style.transform !== 'undefined' ? 'transform' : 'webkitTransform';
        function createIEle(top, left, width, rotate, clzz) {
            let iEle = document.createElement('i');
            iEle.style.top = top + 'px';
            iEle.style.left = left + 'px';
            iEle.style.width = width + 'px';
            iEle.style[transform] = 'rotate(' + rotate + 'deg)';
            iEle.className = clzz;
            return iEle;
        }

        vnode.context.$on('initzsline', (selectArr) => {
            clearZsLine();
            fnDrawChart(selectArr || ['.on span']);
        });
        vnode.context.$on('clearZsLine', () => {
            clearZsLine();
        });
    }
};