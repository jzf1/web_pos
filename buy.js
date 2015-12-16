jQuery(document).ready(function(){
    //$('.button').data('data-barcode');
    $('button').on('click',function(){
        var barcode=$(this).data('barcode');

        if (JSON.parse(localStorage.getItem('inputs'))==null){
            var inputs=[];
            inputs.push(barcode);
            localStorage.setItem('inputs',JSON.stringify(inputs));
        } else {
            var inputs=JSON.parse(localStorage.getItem('inputs'));
            inputs.push(barcode);
            localStorage.setItem('inputs',JSON.stringify(inputs));
        }

    });
})