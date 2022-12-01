barba.init({
    transitions: [{
        name: 'prueba',
        leave: function (data) {
            var done = this.async();
            document.body.classList.add('loading');
            setTimeout(function () {
                done();
            }, 1000);
        },
        enter:
            function (data) {
                var done = this.async();
                done();
                setTimeout(function () {
                    document.body.classList.remove('loading');
                }, 1000);
            }
    }]
});