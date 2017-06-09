const BBallStatusCode = {
    EMPTY: 0, // 空
    NOT_STARTED: 1, // 未开始
    SECTION_1: 2, // 第一节
    SECTION_2: 3, // 第二节
    MID: 4, // 中场
    SECTION_3: 5, // 第三节
    SECTION_4: 6, // 第四节
    OVERTIME_1: 7, // 加时1
    OVERTIME_2: 8, // 加时2
    OVERTIME_3: 9, // 加时3
    OVERTIME_4: 10, // 加时4
    ENDED: 11, // 已结束
    CHANGED: 12, // 改期
    BREAK_TIME: 13 // 休息时间
};

export default {
    'BBallStatusName': {
        [BBallStatusCode.MID]: '中场休息',
        [BBallStatusCode.ENDED]: '完场',
        [BBallStatusCode.CHANGED]: '改期'
    },
    BBallStatusCode: BBallStatusCode
};