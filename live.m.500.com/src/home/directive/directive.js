var scrollText = {
    bind: function () {

    },
    update: function (el, binding) {
        console.log(binding.oldValue.score !== binding.value.score);
        if (binding.oldValue.score && binding.value.score && binding.oldValue.score !== binding.value.score) {
            el.className = el.className + ' ' + binding.value.class;
            setTimeout(function () {
                el.className = binding.value.oldClass;
            }, binding.value.timeOut * 1000);
        }
    }
};
exports['scroll-text'] = scrollText;
