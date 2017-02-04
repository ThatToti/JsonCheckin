
$(document).ready(function(){
    //var input=$('#jsonInput');
    var btnSb=$('#inputSubmit');

    //var params=input.val();
    //console.log(params);

    btnSb.click(function(){
        var input=$('#jsonInput');
        var data=input.val();
        
        $.ajax({
        data:data,
        type:'POST',
        url:'http://127.0.0.1:3000/',
        dataType:'jsonp',
        async:true,
        jsonpCallback:'callback',
        /*beforeSend:function(){
            console.log(data);
        },*/
        success:function(data){
            //var obj=Json.parse(data);
            $('#showContent').html(data);
            console.log('success');
        },
        error:function(jqXHR,textStatus,errorThrown){
            console.log('error'+textStatus+" "+errorThrown);
        }
    });
    });
});

