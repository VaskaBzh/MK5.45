import $ from 'jquery';
import 'jquery-ui-dist/jquery-ui.min.js';

export function rangeInit() {
    if (document.querySelector("#slider-range")) {
        $(function() {
            var min_price = 0; // minimum price
            var max_price = 5900; // maximum price

            $("#slider-range").slider({
                range: true,
                min: min_price,
                max: max_price,
                values: [ min_price, max_price ],
                slide: function(event, ui) {
                    $("#amount_min").val(ui.values[0]);
                    $("#amount_max").val(ui.values[1]);
                },
                stop: function(event, ui) {
                    // When the slider is released, the filtered items can be updated
                    filter_items();
                }
            });

            $("#amount_min").val($("#slider-range").slider("values", 0));
            $("#amount_max").val($("#slider-range").slider("values", 1));
        });

        function filter_items() {
            var min_price = $("#amount_min").val();
            var max_price = $("#amount_max").val();

            // Here, implement your own filter mechanism.
            // For example, if your items are displayed in a list, you can loop through the list and hide the items that are outside of the selected price range.
        }
    }
}