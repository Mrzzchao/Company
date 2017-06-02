/**
 * Created by lichun on 2016/8/5.
 */
import Vue from 'vue';
import VueRouter from 'vue-router';
import Container from '../views/Container.vue';
import SFContainer from '../views/SFContainer.vue';

import DxzsView from '../views/DxzsView.vue';
import JozsView from '../views/JozsView.vue';
import DxxtzsView from '../views/DxxtzsView.vue';
import JoxtzsView from '../views/JoxtzsView.vue';
import ZhiHextzsView from '../views/ZhiHextzsView.vue';
import ZhiHezsView from '../views/ZhiHezsView.vue';

import SSCContainer from '../views/SSCContainer.vue';
import Container1 from '../views/Container1.vue';
import Hc1Container from '../views/Hc1Container.vue';
import Hc1JbzsView from '../views/Hc1JbzsView.vue';
import Hc1SxzsView from '../views/Hc1SxzsView.vue';
import Hc1fwzsView from '../views/Hc1fwzsView.vue';

import SSCZxView from '../views/SSCZxView.vue';

import WzView from '../views/WzView.vue';
import SSCHzzsView from '../views/SSCHzzsView.vue';

import JbzsView from '../views/JbzsView.vue';
import QlcJbzsView from '../views/QlcJbzsView.vue';
import FbzsView from '../views/FbzsView.vue';
import SFHzzsView from '../views/SFHzzsView.vue';// 11选5 12选5 和值走势

import SyxwQ1View from '../views/SyxwQ1View.vue';

import XyscContainer from '../views/XyscContainer.vue';
import XyscQ1View from '../views/XyscQ1View.vue';
import XyscQ2View from '../views/XyscQ2View.vue';
import XyscQ3View from '../views/XyscQ3View.vue';
import XyscJbView from '../views/XyscJbView.vue';
import KlpkContainer from '../views/KlpkContainer.vue';
import KlpkKjhmView from '../views/KlpkKjhmView.vue';
import KlpkhmxtView from '../views/KlpkhmxtView.vue';
import KlpkJbView from '../views/KlpkJbView.vue';

import Df6j1JbView from '../views/Df6j1JbView';

// 六大彩种
import SsqContainer from '../views/SsqContainer.vue';
import SsqJbzsView from '../views/SsqJbzsView.vue';
import SsqQqzsView from '../views/SsqQqzsView.vue';
import SsqHqzsView from '../views/SsqHqzsView.vue';
import SsqHqzdView from '../views/SsqHqzdView.vue';
import SsqHqlbzdView from '../views/SsqHqlbzdView.vue';

import DltContainer from '../views/DltContainer.vue';
import DltJbzsView from '../views/DltJbzsView.vue';
import DltQqzsView from '../views/DltQqzsView.vue';
import DltHqzsView from '../views/DltHqzsView.vue';

import Fc3dContainer from '../views/FcsdContainer.vue';
import Fc3dJbzsView from '../views/FcsdJbzsView.vue';
import PlsContainer from '../views/PlsContainer.vue';
import PlsJbzsView from '../views/PlsJbzsView.vue';
import SdYlzsView from '../views/SdYlzsView.vue';
import SdLrzsView from '../views/SdLrzsView.vue';

import QxPwContainer from '../views/QxPwContainer.vue';
import QxPwWz from '../components/QxPwWz.vue';

// 判断搜狗入口参数

if (typeof window !== 'undefined' && location.search) {
    window.originCount = location.search;
    history.replaceState({}, 0, location.href.replace(location.search, ''));
}
Vue.use(VueRouter);
export default new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/datachart/:area(.*syxw|dlc|shdsyxw)', // 包括所有11选5
            component: SFContainer,
            name: 's5f11',
            children: [
                {
                    path: 'jb.html',
                    component: FbzsView,
                    meta: {
                        num: 11
                    }
                },
                {
                    path: 'q1.html',
                    component: SyxwQ1View,
                    meta: {
                        num: 11
                    }

                },
                {
                    path: 'hz.html',
                    component: SFHzzsView,
                    meta: {
                        num: 31,
                        min: 15
                    }
                },
                {
                    path: '*',
                    meta: {
                        num: 11
                    },
                    redirect: 'jb.html'
                }
            ]
        },

        {
            path: '/datachart/:area(.*ssc)', // 包括所有时时彩
            component: SSCContainer,
            meta: {
                tab: 'hz',
                num: 5
            },
            name: 'ssc',
            children: [
                // 不同path，绑定到同一个组件，也会重新销毁和生成。
                {
                    path: 'zx/jb.html',
                    component: SSCZxView,
                    meta: {
                        wz: 'jb',
                        title: '基本走势'
                    }
                },
                {
                    path: 'zx/ww.html',
                    component: SSCZxView,
                    meta: {
                        wz: 'ww',
                        title: '直选万位'
                    }
                },
                {
                    path: 'zx/qw.html',
                    component: SSCZxView,
                    meta: {
                        wz: 'qw',
                        title: '直选千位'
                    }
                },
                {
                    path: 'zx/bw.html',
                    component: SSCZxView,
                    meta: {
                        wz: 'bw',
                        title: '直选百位'
                    }
                },
                {
                    path: 'zx/sw.html',
                    component: SSCZxView,
                    meta: {
                        wz: 'sw',
                        title: '直选十位'
                    }
                },
                {
                    path: 'zx/gw.html',
                    component: SSCZxView,
                    meta: {
                        wz: 'gw',
                        title: '直选个位'
                    }
                },
                {
                    path: 'hz.html',
                    component: SSCHzzsView,
                    meta: {
                        title: '和值走势'
                    }

                },
                {
                    path: '*',
                    redirect: 'zx/jb.html'
                }
            ]

        },

        {
            path: '/datachart/:area(ahk3|hebk3|gxk3|hbk3|jsk3|henk3|shhk3|qhk3|gsk3|nmgk3|jlk3|fjk3|gzk3)', // 包括所有
            component: Container1,
            name: 'k3',
            meta: {
                zx: true,
                dx: true,
                jo: true
            },
            children: [
                {
                    path: 'zx/2.html',
                    component: WzView,
                    meta: {
                        begin: 0,
                        tit: [1, 2, 3, 4, 5, 6],
                        title: '直选',
                        tabs: ['个位', '十位', '百位']
                    }
                },
                {
                    path: 'zx/1.html',
                    component: WzView,
                    meta: {
                        begin: 6,
                        tit: [1, 2, 3, 4, 5, 6],
                        title: '直选',
                        tabs: ['个位', '十位', '百位']
                    }
                },
                {
                    path: 'zx/0.html',
                    component: WzView,
                    meta: {
                        begin: 12,
                        tit: [1, 2, 3, 4, 5, 6],
                        title: '直选',
                        tabs: ['个位', '十位', '百位']
                    }
                },

                {
                    path: 'dx.html',
                    component: DxxtzsView,
                    meta: {
                        // dxxt: DxxtzsView
                        title: '大小',
                        count: 8,
                        ws: 6
                    }
                },
                {
                    path: 'jo.html',
                    component: JoxtzsView,
                    meta: {
                        title: '奇偶',
                        count: 8,
                        ws: 6
                    }

                },
                {
                    path: '*',
                    redirect: 'zx/2.html',
                    meta: {
                        begin: 0,
                        tit: [1, 2, 3, 4, 5, 6],
                        title: '直选',
                        tabs: ['个位', '十位', '百位']
                    }
                }
            ]

        },

        {
            path: '/datachart/:area(qlc)', // 七乐彩 TODO 奇偶有问题
            name: 'qlc',
            component: Container,
            children: [
                {
                    path: 'jb.html',
                    component: QlcJbzsView
                },
                {
                    path: 'dx.html',
                    component: DxzsView,
                    meta: {
                        openw: 155,
                        num: 7
                    }
                },
                {
                    path: 'jo.html',
                    component: JozsView,
                    meta: {
                        openw: 155,
                        num: 7
                    }
                },
                {
                    path: '*',
                    redirect: 'jb.html'
                }
            ]
        },
        {
            path: '/datachart/:area(ssq)', // 双色球
            name: 'ssq',
            component: SsqContainer,
            children: [
                {
                    path: 'jb.html',
                    component: SsqJbzsView,
                    meta: {
                        blueNum: 33,
                        redNum: 16
                    }
                },
                {
                    path: 'qianqu.html',
                    component: SsqQqzsView,
                    meta: {
                        QianNum: 33,
                        title: 'ssq'

                    }
                },
                {
                    path: 'QqDx.html',
                    component: DxzsView,
                    meta: {
                        openw: 155,
                        num: 6,
                        title: 'ssq'
                    }
                },
                {
                    path: 'QqJo.html',
                    component: JozsView,
                    meta: {
                        openw: 155,
                        num: 6,
                        title: 'ssq'
                    }
                },
                {
                    path: 'QqZh.html',
                    component: ZhiHezsView,
                    meta: {
                        openw: 155,
                        num: 6,
                        title: 'ssq'
                    }
                },
                {
                    path: 'houqu.html',
                    component: SsqHqzsView,
                    meta: {
                        HouNum: 16
                    }
                },
                {
                    path: 'HqCgzd.html',
                    component: SsqHqzdView,
                    meta: {
                        zdNum: 16
                    }
                },
                {
                    path: 'HqLbzd.html',
                    component: SsqHqlbzdView,
                    meta: {
                        zdNum: 9
                        // type: 'lb'
                    }
                },
                {
                    path: '*',
                    meta: {
                        blueNum: 33,
                        redNum: 16
                    },
                    redirect: 'jb.html'
                }
            ]
        },
        {
            path: '/datachart/:area(dlt)', // 大乐透
            name: 'dlt',
            component: DltContainer,
            children: [
                {
                    path: 'jb.html',
                    component: DltJbzsView,
                    meta: {
                        QianNum: 35,
                        HouNum: 12
                    }
                },
                {
                    path: 'qianqu.html',
                    component: DltQqzsView,
                    meta: {
                        QianNum: 35

                    }
                },
                {
                    path: 'houqu.html',
                    component: DltHqzsView,
                    meta: {
                        HouNum: 12

                    }
                },
                {
                    path: 'QqDx.html',
                    component: DxzsView,
                    meta: {
                        openw: 110,
                        num: 5,
                        dxtype: 'dlt'
                    }
                },
                {
                    path: 'QqJo.html',
                    component: JozsView,
                    meta: {
                        openw: 110,
                        num: 5
                    }
                },
                {
                    path: 'QqZh.html',
                    component: ZhiHezsView,
                    meta: {
                        openw: 110,
                        num: 5
                    }
                },
                {
                    path: '*',
                    meta: {
                        QianNum: 35,
                        HouNum: 12
                    },
                    redirect: 'jb.html'
                }
            ]
        },

        {
            path: '/datachart/:area(sd)', // 福彩3D
            name: 'sd',
            component: Fc3dContainer,
            children: [
                {
                    path: 'jb.html',
                    component: Fc3dJbzsView,
                    meta: {
                        title: '基本走势'
                    }
                },
                {
                    path: 'yilou.html',
                    component: SdYlzsView,
                    meta: {
                        title: '遗漏走势'
                    }
                },
                {
                    path: 'lengre.html',
                    component: SdLrzsView,
                    meta: {
                        title: '冷热走势'
                    }
                },
                {
                    path: 'dx.html',
                    component: DxxtzsView,
                    meta: {
                        title: '大小',
                        count: 8,
                        ws: 6
                    }
                },
                {
                    path: 'jo.html',
                    component: JoxtzsView,
                    meta: {
                        title: '奇偶',
                        count: 8,
                        ws: 6
                    }
                },
                {
                    path: 'zh.html',
                    component: ZhiHextzsView,
                    meta: {
                        title: '质合',
                        count: 8,
                        ws: 6
                    }
                },
                {
                    path: '*',
                    meta: {
                        title: '基本走势'
                    },
                    redirect: 'jb.html'
                }
            ]
        },
        {
            path: '/datachart/:area(pls)', // 排列三
            name: 'pls',
            component: PlsContainer,
            children: [
                {
                    path: 'jb.html',
                    component: PlsJbzsView,
                    meta: {
                        title: '基本走势'
                    }
                },
                {
                    path: 'yilou.html',
                    component: SdYlzsView,
                    meta: {
                        title: '遗漏走势'
                    }
                },
                {
                    path: 'lengre.html',
                    component: SdLrzsView,
                    meta: {
                        title: '冷热走势'
                    }
                },
                {
                    path: '*',
                    meta: {
                        title: '基本走势'
                    },
                    redirect: 'jb.html'
                }
            ]
        },
        {
            path: '/datachart/:area(gdhc1)', //
            name: 'gdhc1',
            component: Hc1Container,
            children: [
                {
                    path: 'jb.html',
                    component: Hc1JbzsView,
                    meta: {
                        num: 36
                    }
                },
                {
                    path: 'sx.html',
                    component: Hc1SxzsView,
                    meta: {
                        num: 36
                    }
                },
                {
                    path: 'fw.html',
                    component: Hc1fwzsView,
                    meta: {
                        num: 36
                    }
                },
                {
                    path: '*',
                    meta: {
                        num: 36
                    },
                    redirect: 'jb.html'
                }
            ]
        },

        {
            path: '/datachart/:area(xysc)', // 幸运赛车
            component: XyscContainer,
            name: 'xysc',
            children: [
                {
                    path: 'q1.html',
                    component: XyscQ1View
                },
                {
                    path: 'q2.html',
                    component: XyscQ2View
                },
                {
                    path: 'q3.html',
                    component: XyscQ3View
                },
                {
                    path: 'jb.html',
                    component: XyscJbView
                },
                {
                    path: '*',
                    redirect: 'jb.html'
                }

            ]

        },

        {
            path: '/datachart/:area(bjpkshi)', // bjpkshi
            component: Container1,
            name: 'bjpkshi', // 北京pk十
            meta: {
                zx: true
            },
            children: [
                {
                    path: 'zx/2.html',
                    component: WzView,
                    meta: {
                        begin: 0,
                        tit: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
                        title: '直选',
                        tabs: ['季军', '亚军', '冠军']
                    }
                },
                {
                    path: 'zx/1.html',
                    component: WzView,
                    meta: {
                        begin: 10,
                        tit: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
                        title: '直选',
                        tabs: ['季军', '亚军', '冠军']
                    }
                },
                {
                    path: 'zx/0.html',
                    component: WzView,
                    meta: {
                        begin: 20,
                        tit: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
                        title: '直选',
                        tabs: ['季军', '亚军', '冠军']
                    }
                },

                {
                    path: '*',
                    redirect: 'zx/2.html',
                    meta: {
                        begin: 0,
                        tit: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
                        title: '直选',
                        tabs: ['季军', '亚军', '冠军']
                    }
                }

            ]

        },

        {
            path: '/datachart/:area(henky481|ytdj)', // bjpkshi  ytdj
            component: Container1,
            name: 'henky481', // 河南快赢481 泳坛夺金
            meta: {
                dx: true,
                zx: true,
                jo: true
            },
            children: [
                {
                    path: 'zx/3.html',
                    component: WzView,
                    meta: {
                        begin: 0,
                        tit: [1, 2, 3, 4, 5, 6, 7, 8],
                        title: '直选',
                        tabs: ['蝶泳', '蛙泳', '仰泳', '自由泳']
                    }
                },
                {
                    path: 'zx/2.html',
                    component: WzView,
                    meta: {
                        begin: 8,
                        tit: [1, 2, 3, 4, 5, 6, 7, 8],
                        title: '直选',
                        tabs: ['蝶泳', '蛙泳', '仰泳', '自由泳']
                    }
                },
                {
                    path: 'zx/1.html',
                    component: WzView,
                    meta: {
                        begin: 16,
                        tit: [1, 2, 3, 4, 5, 6, 7, 8],
                        title: '直选',
                        tabs: ['蝶泳', '蛙泳', '仰泳', '自由泳']
                    }
                },
                {
                    path: 'zx/0.html',
                    component: WzView,
                    meta: {
                        begin: 24,
                        tit: [1, 2, 3, 4, 5, 6, 7, 8],
                        title: '直选',
                        tabs: ['蝶泳', '蛙泳', '仰泳', '自由泳']
                    }
                },

                {
                    path: 'jo.html',
                    component: JoxtzsView,
                    meta: {
                        title: '奇偶',
                        count: 16,
                        ws: 8
                    }

                },
                {
                    path: 'dx.html',
                    component: DxxtzsView,
                    meta: {
                        title: '大小',
                        count: 16,
                        ws: 8
                    }

                },

                {
                    path: '*',
                    redirect: 'zx/3.html',
                    meta: {
                        begin: 0,
                        tit: [1, 2, 3, 4, 5, 6, 7, 8],
                        title: '直选',
                        tabs: ['蝶泳', '蛙泳', '仰泳', '自由泳']
                    }
                }

            ]

        },

       /* {
            path: '/datachart/:area(ytdj)',//泳坛夺金
            component: Container1,
            name: 'ytdj',
            meta: {
                dx: true,
                zx: true,
            },
            children: [
                {
                    path: 'zx/3.html',
                    component: WzView,
                    meta: {
                        begin: 0,
                        tit: [1,2,3,4,5,6,7,8],
                        title: '直选',
                        tabs:['千位','百位','十位','个位'],
                    },
                },
                {
                    path: 'zx/2.html',
                    component: WzView,
                    meta: {
                        begin: 8,
                        tit: [1,2,3,4,5,6,7,8],
                        title: '直选',
                        tabs:['千位','百位','十位','个位'],
                    },
                },
                {
                    path: 'zx/1.html',
                    component: WzView,
                    meta: {
                        begin: 16,
                        tit: [1,2,3,4,5,6,7,8],
                        title: '直选',
                        tabs:['千位','百位','十位','个位'],
                    },
                },
                {
                    path: 'zx/0.html',
                    component: WzView,
                    meta: {
                        begin: 24,
                        tit: [1,2,3,4,5,6,7,8],
                        title: '直选',
                        tabs:['千位','百位','十位','个位'],
                    },
                },

                {
                    path: 'dx.html',
                    component: DxxtzsView,
                    meta: {
                        title: '大小',
                        count: 16,
                        ws: 8
                    }

                },
                {
                    path: '*',
                    redirect: 'zx/3.html',
                    meta: {
                        begin: 0,
                        tit: [1,2,3,4,5,6,7,8],
                        title: '直选',
                        tabs:['千位','百位','十位','个位'],
                    },
                },

            ]

        }, */

        {
            path: '/datachart/:area(ssl)', // 包括所有
            component: Container1,
            name: 'ssl',
            meta: {
                dx: true,
                zx: true,
                jo: true
            },
            children: [
                {
                    path: 'zx/2.html',
                    component: WzView,
                    meta: {
                        begin: 0, //
                        tit: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                        title: '直选',
                        tabs: ['个位', '十位', '百位']
                    }
                },
                {
                    path: 'zx/1.html',
                    component: WzView,
                    meta: {
                        begin: 10, //
                        tit: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                        title: '直选',
                        tabs: ['个位', '十位', '百位']
                    }
                },
                {
                    path: 'zx/0.html',
                    component: WzView,
                    meta: {
                        begin: 20, //
                        tit: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                        title: '直选',
                        tabs: ['个位', '十位', '百位']
                    }
                },

                {
                    path: 'dx.html',
                    component: DxxtzsView,
                    meta: {
                        // dxxt: DxxtzsView
                        title: '大小',
                        count: 8,
                        ws: 6
                    }
                },
                {
                    path: 'jo.html',
                    component: JoxtzsView,
                    meta: {
                        title: '奇偶',
                        count: 8,
                        ws: 6
                    }

                },

                {
                    path: '*',
                    redirect: 'zx/2.html',
                    meta: {
                        begin: 0, //
                        tit: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                        title: '直选',
                        tabs: ['百位', '十位', '个位']
                    }
                }
            ]

        },

        {
            path: '/datachart/:area(klsf|hnklsf|gdklsf|chqklsf|ynklsf|bjkzhc)', // 包括所有快乐十分 不包括广西快乐十分
            name: 's8f20',
            component: Container,
            children: [
                {
                    path: 'jb.html',
                    component: JbzsView,
                    meta: {
                        num: 20
                    }
                },
                {
                    path: 'dx.html',
                    component: DxzsView,
                    meta: {
                        openw: 160,
                        num: 8
                    }
                },
                {
                    path: 'jo.html',
                    component: JozsView,
                    meta: {
                        openw: 160,
                        num: 8
                    }
                },
                {
                    path: '*',
                    redirect: 'jb.html',
                    meta: {
                        num: 20
                    }
                }
            ]
        },
        {
            path: '/datachart/:area(zjesxw|hbesxw|qyh)', // 包括所有20选5
            name: 's5f20',
            component: Container,
            children: [
                {
                    path: 'jb.html',
                    component: JbzsView,
                    meta: {
                        num: 20
                    }
                },
                {
                    path: 'dx.html',
                    component: DxzsView,
                    meta: {
                        openw: 110,
                        num: 5
                    }
                },
                {
                    path: 'jo.html',
                    component: JozsView,
                    meta: {
                        openw: 110,
                        num: 5
                    }
                },
                {
                    path: '*',
                    redirect: 'jb.html',
                    meta: {
                        num: 20
                    }
                }
            ]
        },
        {
            path: '/datachart/:area(gxklsf)',
            name: 's5f21',
            component: Container,
            children: [
                {
                    path: 'jb.html',
                    component: JbzsView,
                    meta: {
                        num: 21
                    }
                },

                {
                    path: 'dx.html',
                    component: DxzsView,
                    meta: {
                        openw: 110,
                        num: 5
                    }
                },
                {
                    path: 'jo.html',
                    component: JozsView,
                    meta: {
                        openw: 110,
                        num: 5
                    }
                },
                {
                    path: '*',
                    redirect: 'jb.html',
                    meta: {
                        num: 21
                    }

                }

            ]
        },
        {
            path: '/datachart/:area(.+eexw)', // 包括所有22选5(fjeexw|zyeexw|hljeexw)
            name: 's5f22',
            component: Container,
            children: [
                {
                    path: 'jb.html',
                    component: JbzsView,
                    meta: {
                        num: 22
                    }
                },
                {
                    path: 'dx.html',
                    component: DxzsView,
                    meta: {
                        openw: 110,
                        num: 5
                    }
                },
                {
                    path: 'jo.html',
                    component: JozsView,
                    meta: {
                        openw: 110,
                        num: 5
                    }
                },
                {
                    path: '*',
                    redirect: 'jb.html',
                    meta: {
                        num: 22
                    }

                }
            ]
        },

        {
            path: '/datachart/:area(lnkl12|zjkl12|sckl12)', // 辽宁快乐12（简称为：lnkl12） 、浙江快乐12（简称为：zjkl12）、四川快乐12（简称为：sckl12）
            component: SFContainer,
            name: 's5f12',
            children: [
                {
                    path: 'jb.html',
                    component: FbzsView,
                    meta: {
                        num: 12
                    }
                },
                {
                    path: 'hz.html',
                    component: SFHzzsView,
                    meta: {
                        num: 36,
                        min: 15
                    }
                },
                {
                    path: 'q1.html',
                    component: SyxwQ1View,
                    meta: {
                        num: 12
                    }
                },
                {
                    path: '*',
                    meta: {
                        num: 12
                    },
                    redirect: 'jb.html'
                }
            ]
        },

        {
            path: '/datachart/:area(klsc)', // 广西福彩快乐双彩 6+1  24选7
            component: Container,
            name: 's6f24',
            children: [
                {
                    path: 'jb.html',
                    component: JbzsView,
                    meta: {
                        num: 24
                    }
                },
                {
                    path: 'dx.html',
                    component: DxzsView,
                    meta: {
                        openw: 155,
                        num: 6
                    }
                },
                {
                    path: 'jo.html',
                    component: JozsView,
                    meta: {
                        openw: 155,
                        num: 6
                    }
                },
                {
                    path: '*',
                    meta: {
                        num: 24
                    },
                    redirect: 'jb.html'
                }
            ]
        },

        {
            path: '/datachart/:area(xjsbxq)', // 包括所有18选7  只有新疆福彩18选7
            name: 's7f18',
            component: Container,
            children: [
                {
                    path: 'jb.html',
                    component: JbzsView,
                    meta: {
                        num: 18
                    }
                },
                {
                    path: 'dx.html',
                    component: DxzsView,
                    meta: {
                        openw: 155,
                        num: 7
                    }
                },
                {
                    path: 'jo.html',
                    component: JozsView,
                    meta: {
                        openw: 155,
                        num: 7
                    }
                },
                {
                    path: '*',
                    meta: {
                        num: 18
                    },
                    redirect: 'jb.html'
                }
            ]
        },
        {
            path: '/datachart/:area(.+swxw)', // 包括所有15选5  华东六省,(上海,江苏,浙江,福建,江西,安徽)
            name: 's5f15',
            component: Container,
            children: [
                {
                    path: 'jb.html',
                    component: JbzsView,
                    meta: {
                        num: 15
                    }
                },
                {
                    path: 'dx.html',
                    component: DxzsView,
                    meta: {
                        openw: 110,
                        num: 5
                    }
                },
                {
                    path: 'jo.html',
                    component: JozsView,
                    meta: {
                        openw: 110,
                        num: 5
                    }
                },
                {
                    path: '*',
                    meta: {
                        num: 15
                    },
                    redirect: 'jb.html'
                }
            ]
        },
        {
            path: '/datachart/:area(hbhy2)', // 湖北好运2
            name: 's2f20',
            component: Container,
            children: [
                {
                    path: 'jb.html',
                    component: JbzsView,
                    meta: {
                        num: 20
                    }
                },
                {
                    path: 'dx.html',
                    component: DxzsView,
                    meta: {
                        // openw: 110,
                        num: 2
                    }
                },
                {
                    path: 'jo.html',
                    component: JozsView,
                    meta: {
                        num: 2
                    }
                },
                {
                    path: '*',
                    meta: {
                        num: 20
                    },
                    redirect: 'jb.html'
                }
            ]
        },
        {
            path: '/datachart/:area(hbhy3)', // 湖北好运3
            name: 's3f20',
            component: Container,
            children: [
                {
                    path: 'jb.html',
                    component: JbzsView,
                    meta: {
                        num: 20
                    }
                },
                {
                    path: 'dx.html',
                    component: DxzsView,
                    meta: {
                        num: 3
                    }
                },
                {
                    path: 'jo.html',
                    component: JozsView,
                    meta: {
                        num: 3
                    }
                },
                {
                    path: '*',
                    meta: {
                        num: 20
                    },
                    redirect: 'jb.html'
                }
            ]
        },

        {
            path: '/datachart/:area(xjxlc)', // 新疆喜乐彩
            name: 's7f27',
            component: Container,
            children: [
                {
                    path: 'jb.html',
                    component: JbzsView,
                    meta: {
                        num: 27
                    }
                },
                {
                    path: 'dx.html',
                    component: DxzsView,
                    meta: {
                        openw: 155,
                        num: 7
                    }
                },
                {
                    path: 'jo.html',
                    component: JozsView,
                    meta: {
                        openw: 155,
                        num: 7
                    }
                },
                {
                    path: '*',
                    meta: {
                        num: 27
                    },
                    redirect: 'jb.html'
                }
            ]
        },

        {
            path: '/datachart/:area(ahewxw)', // 安徽福彩25选5
            name: 's5f25',
            component: Container,
            children: [
                {
                    path: 'jb.html',
                    component: JbzsView,
                    meta: {
                        num: 25
                    }
                },
                {
                    path: 'dx.html',
                    component: DxzsView,
                    meta: {
                        openw: 110,
                        num: 5
                    }
                },
                {
                    path: 'jo.html',
                    component: JozsView,
                    meta: {
                        openw: 110,
                        num: 5
                    }
                },
                {
                    path: '*',
                    meta: {
                        num: 25
                    },
                    redirect: 'jb.html'
                }
            ]
        },

        {
            path: '/datachart/:area(xjewxq)', // 新疆福彩25选7
            name: 's7f25',
            component: Container,
            children: [
                {
                    path: 'jb.html',
                    component: JbzsView,
                    meta: {
                        num: 25
                    }
                },
                {
                    path: 'dx.html',
                    component: DxzsView,
                    meta: {
                        openw: 155,
                        num: 7
                    }
                },
                {
                    path: 'jo.html',
                    component: JozsView,
                    meta: {
                        openw: 155,
                        num: 7
                    }
                },
                {
                    path: '*',
                    meta: {
                        num: 25
                    },
                    redirect: 'jb.html'
                }
            ]
        },

        {
            path: '/datachart/:area(gdelxw)', // 广东福彩26选5
            name: 's5f26',
            component: Container,
            children: [
                {
                    path: 'jb.html',
                    component: JbzsView,
                    meta: {
                        num: 26
                    }

                },
                {
                    path: 'dx.html',
                    component: DxzsView,

                    meta: {
                        openw: 110,
                        num: 5
                    }
                },
                {
                    path: 'jo.html',
                    component: JozsView,
                    meta: {
                        openw: 110,
                        num: 5
                    }
                },
                {
                    path: '*',
                    meta: {
                        num: 26
                    },
                    redirect: 'jb.html'
                }
            ]
        },
        {
            path: '/datachart/:area(szfc|lnswxq|xjswxq)', // 辽宁福彩35选7 lnswxq、新疆福彩35选7 xjswxq、深圳风采 szfc
            name: 's7f35',
            component: Container,
            children: [
                {
                    path: 'jb.html',
                    component: JbzsView,
                    meta: {
                        num: 35
                    }

                },
                {
                    path: 'dx.html',
                    component: DxzsView,
                    meta: {
                        openw: 155,
                        num: 7
                    }
                },
                {
                    path: 'jo.html',
                    component: JozsView,
                    meta: {
                        openw: 155,
                        num: 7
                    }
                },
                {
                    path: '*',
                    meta: {
                        num: 35
                    },
                    redirect: 'jb.html'
                }
            ]
        },
        {
            path: '/datachart/:area(fjslxq|gdslxq|hljslxq)', // 福建体彩36选7 fjslxq、广东福彩36选7 gdslxq, hljslxq 黑龙江36选7
            name: 's7f36',
            component: Container,
            children: [
                {
                    path: 'jb.html',
                    component: JbzsView,
                    meta: {
                        num: 36
                    }
                },
                {
                    path: 'dx.html',
                    component: DxzsView,
                    meta: {
                        openw: 155,
                        num: 7
                    }
                },
                {
                    path: 'jo.html',
                    component: JozsView,
                    meta: {
                        openw: 155,
                        num: 7
                    }
                },
                {
                    path: '*',
                    meta: {
                        num: 36
                    },
                    redirect: 'jb.html'
                }
            ]
        },

        /* {
            path: '/datachart/:area(kl8)',//北京快乐8
            name: 's20f80',
            component: Container,
            children: [
                {
                    path: 'jb.html',
                    component: JbzsView,
                    meta: {
                        num: 80
                    },
                },
                {
                    path: 'dx.html',
                    component: DxzsView,
                    meta: {
                        openw: 385,
                        num: 20
                    },
                },
                {
                    path: '*',
                    meta: {
                        num: 80
                    },
                    redirect: 'jb.html'
                },
            ]
        }, */

        {
            path: '/datachart/:area(klpk3)',
            name: 'klpk3',
            component: KlpkContainer,
            children: [
                {
                    path: 'kjhm.html',
                    component: KlpkKjhmView
                },
                {
                    path: 'hmxt.html',
                    component: KlpkhmxtView
                },
                {
                    path: 'jb.html',
                    component: KlpkJbView
                },
                {
                    path: '*',
                    redirect: 'jb.html'
                }
            ]
        },

        {
            path: '/datachart/:area(hbplw|hnd4j1)', // 河北排列五 ， 海南4+1
            component: Container1,
            name: 'hbplw|hnd4j1',
            meta: {
                dx: true,
                zx: true,
                jo: true
            },
            children: [
                {
                    path: 'zx/4.html',
                    component: WzView,
                    meta: {
                        begin: 0, //
                        tit: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                        title: '直选',
                        tabs: ['第五位', '第四位', '第三位', '第二位', '第一位']
                    }
                },
                {
                    path: 'zx/3.html',
                    component: WzView,
                    meta: {
                        begin: 10, //
                        tit: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                        title: '直选',
                        tabs: ['第五位', '第四位', '第三位', '第二位', '第一位']
                    }
                },
                {
                    path: 'zx/2.html',
                    component: WzView,
                    meta: {
                        begin: 20, //
                        tit: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                        title: '直选',
                        tabs: ['第五位', '第四位', '第三位', '第二位', '第一位']
                    }
                },
                {
                    path: 'zx/1.html',
                    component: WzView,
                    meta: {
                        begin: 30, //
                        tit: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                        title: '直选',
                        tabs: ['第五位', '第四位', '第三位', '第二位', '第一位']
                    }
                },
                {
                    path: 'zx/0.html',
                    component: WzView,
                    meta: {
                        begin: 40, //
                        tit: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                        title: '直选',
                        tabs: ['第五位', '第四位', '第三位', '第二位', '第一位']
                    }
                },

                {
                    path: 'dx.html',
                    component: DxzsView,
                    meta: {
                        title: '大小',
                        openw: 100,
                        num: 5
                    }
                },
                {
                    path: 'jo.html',
                    component: JozsView,
                    meta: {
                        title: '奇偶',
                        openw: 100,
                        num: 5
                    }
                },
                {
                    path: '*',
                    redirect: 'zx/4.html',
                    meta: {
                        from: 0,
                        tit: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                        title: '直选',
                        tabs: ['第五位', '第四位', '第三位', '第二位', '第一位']
                    }
                }

            ]

        },

        {
            path: '/datachart/:area(df6j1)', // 华东六省东方6+1
            component: Container1,
            name: 'df6j1', // 华东六省东方6+1
            meta: {
                dx: true,
                jb: true,
                jo: true
            },
            children: [
                {
                    path: 'zx/jb.html',
                    component: Df6j1JbView,
                    meta: {
                        begin: 0,
                        tit: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                        title: '基本',
                        hasJb: true,
                        tabs: ['第七位', '第六位', '第五位', '第四位', '第三位', '第二位', '第一位']
                    }
                },
                {
                    path: 'zx/6.html',
                    component: WzView,
                    meta: {
                        begin: 0,
                        tit: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                        title: '直选',
                        hasJb: true,
                        tabs: ['第七位', '第六位', '第五位', '第四位', '第三位', '第二位', '第一位']
                    }
                },
                {
                    path: 'zx/5.html',
                    component: WzView,
                    meta: {
                        begin: 10,
                        tit: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                        title: '直选',
                        hasJb: true,
                        tabs: ['第七位', '第六位', '第五位', '第四位', '第三位', '第二位', '第一位']

                    }
                },
                {
                    path: 'zx/4.html',
                    component: WzView,
                    meta: {
                        begin: 20,
                        tit: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                        title: '直选',
                        hasJb: true,
                        tabs: ['第七位', '第六位', '第五位', '第四位', '第三位', '第二位', '第一位']
                    }
                },
                {
                    path: 'zx/3.html',
                    component: WzView,
                    meta: {

                        begin: 30,
                        tit: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                        title: '直选',
                        hasJb: true,
                        tabs: ['第七位', '第六位', '第五位', '第四位', '第三位', '第二位', '第一位']
                    }
                },
                {
                    path: 'zx/2.html',
                    component: WzView,
                    meta: {
                        begin: 40,
                        tit: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                        title: '直选',
                        hasJb: true,
                        tabs: ['第七位', '第六位', '第五位', '第四位', '第三位', '第二位', '第一位']
                    }
                },
                {
                    path: 'zx/1.html',
                    component: WzView,
                    meta: {
                        begin: 50,
                        tit: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                        title: '直选',
                        hasJb: true,
                        tabs: ['第七位', '第六位', '第五位', '第四位', '第三位', '第二位', '第一位']
                    }
                },
                {
                    path: 'zx/0.html',
                    component: WzView,
                    meta: {
                        begin: 60,
                        tit: ['鼠', '牛', '虎', '兔', '龙', '蛇', '马', '羊', '猴', '鸡', '狗', '猪'],
                        title: '生肖',
                        hasJb: true,
                        tabs: ['第七位', '第六位', '第五位', '第四位', '第三位', '第二位', '第一位']
                    }
                },
                {
                    path: 'dx.html',
                    component: DxzsView,
                    meta: {
                        title: '大小',
                        openw: 100,
                        num: 6
                    }
                },
                {
                    path: 'jo.html',
                    component: JozsView,
                    meta: {
                        title: '奇偶',
                        openw: 100,
                        num: 6
                    }
                },
                {
                    path: '*',
                    redirect: 'zx/jb.html'
                }

            ]

        },
        {
            path: '/datachart/:area(plw)', // 排列五
            component: QxPwContainer,
            name: 'plw', // 排列五
            children: [
                {
                    path: 'zx/0.html',
                    component: QxPwWz,
                    meta: {
                        title: '基本'
                    }
                },

                {
                    path: 'zx/5.html',
                    component: QxPwWz,
                    meta: {
                        title: '直选',
                        column: 'yilou5'
                    }
                },
                {
                    path: 'zx/4.html',
                    component: QxPwWz,
                    meta: {
                        title: '直选',
                        column: 'yilou4'
                    }
                },
                {
                    path: 'zx/3.html',
                    component: QxPwWz,
                    meta: {
                        title: '直选',
                        column: 'yilou3'
                    }
                },
                {
                    path: 'zx/2.html',
                    component: QxPwWz,
                    meta: {
                        title: '直选',
                        column: 'yilou2'
                    }
                },
                {
                    path: 'zx/1.html',
                    component: QxPwWz,
                    meta: {
                        title: '直选',
                        column: 'yilou1'
                    }
                },
                {
                    path: '*',
                    redirect: 'zx/0.html'
                }

            ]

        },
        {
            path: '/datachart/:area(qxc)', // 七星彩
            component: QxPwContainer,
            name: 'qxc', // 七星彩
            children: [
                {
                    path: 'zx/0.html',
                    component: QxPwWz,
                    meta: {
                        title: '基本'
                    }
                },
                {
                    path: 'zx/6.html',
                    component: QxPwWz,
                    meta: {
                        title: '直选',
                        column: 'yilou6'
                    }
                },
                {
                    path: 'zx/7.html',
                    component: QxPwWz,
                    meta: {
                        title: '直选',
                        column: 'yilou7'
                    }
                },
                {
                    path: 'zx/5.html',
                    component: QxPwWz,
                    meta: {
                        title: '直选',
                        column: 'yilou5'
                    }
                },
                {
                    path: 'zx/4.html',
                    component: QxPwWz,
                    meta: {
                        title: '直选',
                        column: 'yilou4'
                    }
                },
                {
                    path: 'zx/3.html',
                    component: QxPwWz,
                    meta: {
                        title: '直选',
                        column: 'yilou3'
                    }
                },
                {
                    path: 'zx/2.html',
                    component: QxPwWz,
                    meta: {
                        title: '直选',
                        column: 'yilou2'
                    }
                },
                {
                    path: 'zx/1.html',
                    component: QxPwWz,
                    meta: {
                        title: '直选',
                        column: 'yilou1'
                    }
                },
                {
                    path: '*',
                    redirect: 'zx/0.html'
                }

            ]

        },

        {
            path: '/datachart/:area(hbplq|js7ws)', // 河北福彩排列七,江苏体彩7位数,浙江体彩6+1,黑龙江体彩6+1,黑龙江福彩p62
            component: Container1,
            name: 'hbplq|js7ws|zj6j1|hlj6j1|zj6j1', //
            meta: {
                dx: true,
                zx: true,
                jo: true
            },
            children: [
                {
                    path: 'zx/6.html',
                    component: WzView,
                    meta: {
                        begin: 0,
                        tit: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                        title: '直选',
                        tabs: ['第七位', '第六位', '第五位', '第四位', '第三位', '第二位', '第一位']
                    }
                },
                {
                    path: 'zx/5.html',
                    component: WzView,
                    meta: {
                        begin: 10,
                        tit: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                        title: '直选',
                        tabs: ['第七位', '第六位', '第五位', '第四位', '第三位', '第二位', '第一位']

                    }
                },
                {
                    path: 'zx/4.html',
                    component: WzView,
                    meta: {
                        begin: 20,
                        tit: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                        title: '直选',
                        tabs: ['第七位', '第六位', '第五位', '第四位', '第三位', '第二位', '第一位']
                    }
                },
                {
                    path: 'zx/3.html',
                    component: WzView,
                    meta: {

                        begin: 30,
                        tit: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                        title: '直选',
                        tabs: ['第七位', '第六位', '第五位', '第四位', '第三位', '第二位', '第一位']
                    }
                },
                {
                    path: 'zx/2.html',
                    component: WzView,
                    meta: {
                        begin: 40,
                        tit: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                        title: '直选',
                        tabs: ['第七位', '第六位', '第五位', '第四位', '第三位', '第二位', '第一位']
                    }
                },
                {
                    path: 'zx/1.html',
                    component: WzView,
                    meta: {
                        begin: 50,
                        tit: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                        title: '直选',
                        tabs: ['第七位', '第六位', '第五位', '第四位', '第三位', '第二位', '第一位']
                    }
                },
                {
                    path: 'zx/0.html',
                    component: WzView,
                    meta: {
                        begin: 60,
                        tit: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                        title: '直选',
                        tabs: ['第七位', '第六位', '第五位', '第四位', '第三位', '第二位', '第一位']
                    }
                },
                {
                    path: 'dx.html',
                    component: DxzsView,
                    meta: {
                        title: '大小',
                        openw: 100,
                        num: 7
                    }
                },
                {
                    path: 'jo.html',
                    component: JozsView,
                    meta: {
                        title: '奇偶',
                        openw: 100,
                        num: 7
                    }
                },
                {
                    path: '*',
                    redirect: 'zx/6.html',
                    meta: {
                        begin: 0,
                        tit: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                        title: '直选',
                        tabs: ['第七位', '第六位', '第五位', '第四位', '第三位', '第二位', '第一位']
                    }
                }

            ]

        },

        {
            path: '/datachart/:area(zj6j1|hlj6j1|zj6j1|hljp62)', // 浙江体彩6+1,黑龙江体彩6+1,黑龙江福彩p62
            component: Container1,
            name: 'zj6j1|hlj6j1|zj6j1|hljp62', //
            meta: {
                dx: true,
                zx: true,
                jo: true
            },
            children: [
                {
                    path: 'zx/6.html',
                    component: WzView,
                    meta: {
                        begin: 0,
                        tit: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                        title: '直选',
                        tabs: ['第七位', '第六位', '第五位', '第四位', '第三位', '第二位', '第一位']
                    }
                },
                {
                    path: 'zx/5.html',
                    component: WzView,
                    meta: {
                        begin: 10,
                        tit: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                        title: '直选',
                        tabs: ['第七位', '第六位', '第五位', '第四位', '第三位', '第二位', '第一位']

                    }
                },
                {
                    path: 'zx/4.html',
                    component: WzView,
                    meta: {
                        begin: 20,
                        tit: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                        title: '直选',
                        tabs: ['第七位', '第六位', '第五位', '第四位', '第三位', '第二位', '第一位']
                    }
                },
                {
                    path: 'zx/3.html',
                    component: WzView,
                    meta: {

                        begin: 30,
                        tit: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                        title: '直选',
                        tabs: ['第七位', '第六位', '第五位', '第四位', '第三位', '第二位', '第一位']
                    }
                },
                {
                    path: 'zx/2.html',
                    component: WzView,
                    meta: {
                        begin: 40,
                        tit: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                        title: '直选',
                        tabs: ['第七位', '第六位', '第五位', '第四位', '第三位', '第二位', '第一位']
                    }
                },
                {
                    path: 'zx/1.html',
                    component: WzView,
                    meta: {
                        begin: 50,
                        tit: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                        title: '直选',
                        tabs: ['第七位', '第六位', '第五位', '第四位', '第三位', '第二位', '第一位']
                    }
                },
                {
                    path: 'zx/0.html',
                    component: WzView,
                    meta: {
                        begin: 60,
                        tit: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                        title: '直选',
                        tabs: ['第七位', '第六位', '第五位', '第四位', '第三位', '第二位', '第一位']
                    }
                },
                {
                    path: 'dx.html',
                    component: DxzsView,
                    meta: {
                        title: '大小',
                        openw: 100,
                        num: 6
                    }
                },
                {
                    path: 'jo.html',
                    component: JozsView,
                    meta: {
                        title: '奇偶',
                        openw: 100,
                        num: 6
                    }
                },
                {
                    path: '*',
                    redirect: 'zx/6.html',
                    meta: {
                        begin: 0,
                        tit: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                        title: '直选',
                        tabs: ['第七位', '第六位', '第五位', '第四位', '第三位', '第二位', '第一位']
                    }
                }

            ]

        },

        {
            path: '/datachart/:area(sfc)', // 包括所有
            component: Container1,
            name: 'sfc',
            meta: {
                zfb: true,
                sgtj: true
            },
            children: [
                {
                    path: 'zfb/2.html',
                    component: WzView,
                    meta: {
                        begin: 0, //
                        tit: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14],
                        title: '号码分布',
                        tabs: ['0', '1', '3']
                    }
                },
                {
                    path: 'zfb/1.html',
                    component: WzView,
                    meta: {
                        begin: 15, //
                        tit: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14],
                        title: '号码分布',
                        tabs: ['0', '1', '3']
                    }
                },
                {
                    path: 'zfb/0.html',
                    component: WzView,
                    meta: {
                        begin: 30, //
                        title: '号码分布',
                        tabs: ['0', '1', '3'],
                        tit: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]
                    }
                },

                {
                    path: 'sgtj/2.html',
                    component: WzView,
                    meta: {
                        begin: 0, //
                        title: '赛果统计',
                        tabs: ['胜平场数', '胜负场数', '平负场数'],
                        tit: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]
                    }
                },
                {
                    path: 'sgtj/1.html',
                    component: WzView,
                    meta: {
                        begin: 15, //
                        title: '赛果统计',
                        tabs: ['胜平场数', '胜负场数', '平负场数'],
                        tit: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]
                    }
                },
                {
                    path: 'sgtj/0.html',
                    component: WzView,
                    meta: {
                        begin: 30, //
                        title: '赛果统计',
                        tabs: ['胜平场数', '胜负场数', '平负场数'],
                        tit: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]

                    }
                },

                {
                    path: '*',
                    redirect: 'zfb/2.html',
                    meta: {
                        begin: 0,
                        from: 0,
                        ws: 15,
                        title: '号码分布',
                        tabs: ['0', '1', '3']
                    }
                }
            ]

        },

        {
            path: '/datachart/:area(kl8)', // 包括所有
            component: Container1,
            name: 'kl8',
            meta: {
                qj: true

            },
            children: [

                {
                    path: 'qj/8.html',
                    component: WzView,
                    meta: {
                        begin: 0, //
                        from: 1,
                        zsline: false,
                        tit: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
                        ws: 10,
                        title: '区间分布',
                        tabs: ['飞盘', '八区', '七区', '六区', '五区', '四区', '三区', '二区', '一区']
                    }
                },
                {
                    path: 'qj/7.html',
                    component: WzView,
                    meta: {
                        begin: 10, //
                        from: 1,
                        zsline: false,
                        ws: 10,
                        tit: [11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
                        title: '区间分布',
                        tabs: ['飞盘', '八区', '七区', '六区', '五区', '四区', '三区', '二区', '一区']
                    }
                },
                {
                    path: 'qj/6.html',
                    component: WzView,
                    meta: {
                        begin: 20, //
                        from: 1,
                        zsline: false,
                        ws: 10,
                        tit: [21, 22, 23, 24, 25, 26, 27, 28, 29, 30],
                        title: '区间分布',
                        tabs: ['飞盘', '八区', '七区', '六区', '五区', '四区', '三区', '二区', '一区']
                    }
                },
                {
                    path: 'qj/5.html',
                    component: WzView,
                    meta: {
                        begin: 30, //
                        from: 1,
                        zsline: false,
                        ws: 10,
                        tit: [31, 32, 33, 34, 35, 36, 37, 38, 39, 40],
                        title: '区间分布',
                        tabs: ['飞盘', '八区', '七区', '六区', '五区', '四区', '三区', '二区', '一区']
                    }
                },
                {
                    path: 'qj/4.html',
                    component: WzView,
                    meta: {
                        begin: 40, //
                        zsline: false,
                        from: 1,
                        ws: 10,
                        tit: [41, 42, 43, 44, 45, 46, 47, 48, 49, 50],
                        title: '区间分布',
                        tabs: ['飞盘', '八区', '七区', '六区', '五区', '四区', '三区', '二区', '一区']
                    }
                },
                {
                    path: 'qj/3.html',
                    component: WzView,
                    meta: {
                        begin: 50, //
                        zsline: false,
                        from: 1,
                        ws: 10,
                        tit: [51, 52, 53, 54, 55, 56, 57, 58, 59, 60],
                        title: '区间分布',
                        tabs: ['飞盘', '八区', '七区', '六区', '五区', '四区', '三区', '二区', '一区']
                    }
                },
                {
                    path: 'qj/2.html',
                    component: WzView,
                    meta: {
                        begin: 60, //
                        from: 1,
                        zsline: false,
                        ws: 10,
                        tit: [61, 62, 63, 64, 65, 66, 67, 68, 69, 70],
                        title: '区间分布',
                        tabs: ['飞盘', '八区', '七区', '六区', '五区', '四区', '三区', '二区', '一区']
                    }
                },
                {
                    path: 'qj/1.html',
                    component: WzView,
                    meta: {
                        begin: 70, //
                        from: 1,
                        zsline: false,
                        ws: 10,
                        tit: [71, 72, 73, 74, 75, 76, 77, 78, 79, 80],
                        title: '区间分布',
                        tabs: ['飞盘', '八区', '七区', '六区', '五区', '四区', '三区', '二区', '一区']
                    }
                },
                {
                    path: 'qj/0.html',
                    component: WzView,
                    meta: {
                        begin: 80, //
                        from: 1,
                        zsline: true,
                        ws: 10,
                        tit: [1, 2, 3, 4, 5, 10],
                        title: '区间分布',
                        tabs: ['飞盘', '八区', '七区', '六区', '五区', '四区', '三区', '二区', '一区']
                    }
                },

                {
                    path: '*',
                    component: WzView,
                    redirect: 'qj/8.html',
                    meta: {
                        begin: 0, //
                        from: 1,
                        zsline: false,
                        tit: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
                        ws: 10,
                        title: '区间分布',
                        tabs: ['飞盘', '八区', '七区', '六区', '五区', '四区', '三区', '二区', '一区']
                    }
                }

            ]

        }
    ]

});
