'use strict';

/**
 * @ngdoc directive
 * @name tiBindAttrs
 * @module ngTagsInput
 *
 * @description
 * Binds attributes to expressions. Used internally by tagsInput directive.
 */
tagsInput.directive('tiBindAttrs', function() {
    return function(scope, element, attrs) {
        scope.$watch(attrs.tiBindAttrs, function(value) {
            angular.forEach(value, function(value, key) {
                try {
                    attrs.$set(key, value);
                } catch (ignored) {
                    // workaround for https://github.com/mbenford/ngTagsInput/issues/405
                }
            });
        }, true);
    };
});