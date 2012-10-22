var pointer = function (list) {
    var BEFORE_FIRST = -1, 
        AFTER_LAST = -2;
    var index = BEFORE_FIRST;
    return {
        getCurrent: function () {
            if (index !== BEFORE_FIRST && index !== AFTER_LAST) {
                return list[index];
            }
        },
        beforeFirst: function () {
            return index === BEFORE_FIRST;
        },
        afterLast: function () {
            return index === AFTER_LAST;
        },
        moveNext: function () {
            if (index === BEFORE_FIRST) {
                index = 0;
            } else if (index === AFTER_LAST) {
                // nothing
            } else if (index === list.length -1) {
                index = AFTER_LAST;
            } else {
                index += 1;
            }
        },
        movePrevious: function () {
            if (index === BEFORE_FIRST) {
                // nothing
            } else if (index === AFTER_LAST) {
                index = list.length - 1;
            } else if (index === 0) {
                index = BEFORE_FIRST;
            } else {
                index -= 1;
            }
        }
    };
};