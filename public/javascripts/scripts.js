
$(document).ready(function(){
    //var input=$('#jsonInput');
    var btnSb=$('#inputSubmit');

    //var params=input.val();
    //console.log(params);

    btnSb.click(function(){
        var repo=$('repo');
        var name=$('name');
        var input=$('#jsonInput');

        var data={
            "repo":repo.val(),
            "name":name.val(),
            "response":input.val()
        };
        
        $.ajax({
        data:data,
        type:'post',
        url:'http://192.168.149.161:8080/addApi',
        /*beforeSend:function(){
            console.log(data);
        },*/
        success:function(data){
            var obj=JSON.stringify(data);
            $('#showContent').html(obj);
            console.log('success');
        },
    });
    });
});

