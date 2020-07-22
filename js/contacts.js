ymaps.ready(function () {
    var myMap = new ymaps.Map('map', {
            center: [52.481276, 31.004714],
            zoom: 14
        }, {
            searchControlProvider: 'yandex#search'
        }),

        MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
            '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
        ),

        myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
            hintContent: 'Улица Лепешинского 7',
            balloonContent: 'Улица Лепешинского 7'
        });

        myMap.behaviors
            .disable(['scrollZoom', 'rightMouseButtonMagnifier'])

    myMap.geoObjects
        .add(myPlacemark)
});
