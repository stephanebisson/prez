'use strict';

angular.module('prez', [])
    .factory('deck', function () {
        var slides = [],
            p = pointer(slides);

        var ensureId = function (e, nextIndex) {
            if (!e.attr('id')) {
                e.attr('id', 'slide' + nextIndex);
            }
        };

        var toggleVisibility = function (slide) {
            if (slide) {
                var e = $('#' + slide.id),
                    display = e.css('display') === 'block' ? 'none' : 'block';
                e.css({display: display});
            }
        };

        var move = function (action) {
            toggleVisibility(p.getCurrent());
            action();
            toggleVisibility(p.getCurrent());
        };

        return {
            add: function (element) {
                ensureId(element, slides.length);
                slides.push({
                    id: element.attr('id')
                });
            },
            next: function () {
                move(p.moveNext);
            },
            previous: function () {
                move(p.movePrevious);
            }
        };
    })
    .directive('slide', function (deck) {
        return {
            restrict: 'E',
            link: function ($scope, $element) {
                $element.hide();
                deck.add($element);
            }
        };
    })
    .run(function ($document, deck) {
        $document.keydown(function (e) {
            var key = e.keyCode;
            if (key === 32 || key === 39) {
                deck.next();
            } else if (key === 37) {
                deck.previous();
            }
        });
    });