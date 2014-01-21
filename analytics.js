var _gaq = _gaq || [];

angular.module('angular-google-analytics', []).run(
    ['gglAnalytics',
        function (gglAnalytics) {
            gglAnalytics;   //needed, not to remove the dependency if minification is set to remove unused parameters
            _gaq.push(['_setAccount', GA-ID]);  // insert google analytics ID

            var ga = document.createElement('script');
            ga.type = 'text/javascript';
            ga.async = true;
            ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
            var s = document.getElementsByTagName('script')[0];
            s.parentNode.insertBefore(ga, s);
}])
.service('gglAnalytics',
    ['$rootScope', '$window', '$location',
        function ($rootScope, $window, $location) {
            function track() {
                var path = $location.path();
                $window._gaq.push(['_trackPageview', path]);
            }

            //fire on each route change
            $rootScope.$on('$viewContentLoaded', track);

            return null;
}]);