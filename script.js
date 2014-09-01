var main = function() {

    make_grid(10);
    //default cursor in user text field
    document.getElementById('userRows').focus();
    $('.submit').click(function() {
        var n = $('#userRows').val();
        make_grid(n);
    });

    //also submit on enter
    $('#userRows').keypress(function(e) {
        if (e.which == 13) {
            var n = $('#userRows').val();
            make_grid(n);
        }
    });

}

function make_grid(n) {

    //if grid exists, erase to create new
    if ($('#grid').length) {
        $('#grid').remove();
    }

    //max grid height 
    var height = 0.9 * window.innerHeight;

    //create grid
    var grid = document.createElement('table');
    $(grid).attr('id', 'grid');
    $(grid).appendTo('#main-container');

    //final grid n x n dimensions
    var orig_width = $(grid).width();
    var grid_width = Math.min(height, orig_width);
    $(grid).width(grid_width);

    //create squares for grid
    var dim = (1/n) * grid_width;
    for (var i=0; i<n; i++) {
        var row = document.createElement('tr');
        for (var j=0; j<n; j++) { 
            var square = document.createElement('td');
            $(square).addClass('square')
                .appendTo(row)
                .width(dim)
                .height(dim)
        }
        grid.appendChild(row);
    }
    add_effects();
}

function add_effects() {
    $('.square').hover(function() {
          $(this).addClass('fill');
    });
    $('#reset').click(function() {
        $('.square').removeClass('fill');
    });
}

$(document).ready(main);
