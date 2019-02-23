$(document).ready(function() {
    $('#list').click(function()
    {
        // $(' .item').removeClass('col-12');
        // $(' .item').addClass('col-lg-4');
        $('.item').removeClass('list-group-item');
        $(' .item').addClass('grid-group-item');
    });
        
    $('#grid').click(function()
    {
      
        $(' .item').removeClass('list-group-item');
        $(' .item').addClass('grid-group-item');
        // $(' .item').removeClass('col-lg-4');
        // $(' .item').addClass('col-12');
    });
});