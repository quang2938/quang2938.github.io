function datsanbtt(){
    phone();
    khunggiodat();
    sogiochoi();
    songuoichoi();
    sodoichoi();
    tongtien();
    var x = document.getElementById("tenkhach").value;
    if(x==""){
        document.getElementById("canhbao").style.display="block";
        document.getElementById("canhbaoten").style.display="none";
        return false;
    }else if(x!==""&&x.length>50){
        document.getElementById("canhbao").style.display="none";
        document.getElementById("canhbaoten").style.display="block";
        return false;
    }else(x!==""&&x.length<50);{
        document.getElementById("canhbao").style.display="none";
        document.getElementById("canhbaoten").style.display="none"; 
        return false;
        }   
    }
    function phone(){
    var x = document.getElementById("sdt").value;
    if(x==""){
        document.getElementById("canhbao1").style.display="block";    
        document.getElementById("canhbaoten1").style.display="none";
        return false;
    }else if(x!==""&&x.length>50){
        document.getElementById("canhbao1").style.display="none";
        document.getElementById("canhbaoten1").style.display="block"; 
        return false;
    }else(x!==""&&x.length<50);{
        document.getElementById("canhbao1").style.display="none";    
        document.getElementById("canhbaoten1").style.display="none";
        return false;}
    }
function khunggiodat(){
    var x=document.getElementById("khunggio").value;
    if(x==""){
        document.getElementById("canhbao3").style.display='block';
        return false;
    }else{
        document.getElementById("canhbao3").style.display='none';
        return false;
    }
}
function sogiochoi(){
    var x=document.getElementById("sogio").value;
    if(x==""||x==0){
        document.getElementById("canhbao4").style.display='block';
        return false;
    }else if(x!==""&&x<0){
        document.getElementById("canhbao4").style.display='none';
        document.getElementById("canhbaoso").style.display='block';
        return false;
    }else if(x!==""&&x>0){
        document.getElementById("canhbao4").style.display='none';
        document.getElementById("canhbaoso").style.display='none';
        return false;
    }else;{
        return false
    }
}
function songuoichoi(){
    var x=document.getElementById("nguoichoi").value;
    if(x==""||x==0){
        document.getElementById("canhbao5").style.display='block';
        return false;
    }else;{
        document.getElementById("canhbao5").style.display='none';
        return false;
    } 
}
    function sodoichoi(){
        var x=document.getElementById("doichoi").value;
        if(x==""||x==0){
            document.getElementById("canhbao6").style.display='block';
            return false;
        }else if(x!==""&&x<0){
            document.getElementById("canhbao6").style.display='none';
            document.getElementById("canhbaoso1").style.display='block';
            return false;
        }else if(x!==""&&x>0){
            document.getElementById("canhbao6").style.display='none';
            document.getElementById("canhbaoso1").style.display='none';
            return false;
        }else{
            return false;
        }
    }
function tongtien(){
    var khunggio = document.getElementById("khunggio").value;
    var sogio = document.getElementById("sogio").value;
    var tiensan = khunggio*sogio;
    var doichoi = document.getElementById("doichoi").value;
    var dongphuc = document.querySelector('input[id="dvt2CheckBox"]:checked');
        if(dongphuc != null) {
            dongphuc=document.getElementById("dvt2CheckBox").value;
        } else dongphuc = 0;
    var thuedongphuc=doichoi*dongphuc;
    var trongtai = document.querySelector('input[id="dvt3CheckBox"]:checked');
        if(trongtai != null) {
            trongtai=document.getElementById("dvt3CheckBox").value;
        } else trongtai = 0;
    var thuetrongtai=sogio*trongtai;
    if(tenkhach=="" || sdt=="" || khunggio=="" || sogio=="" || nguoichoi=="" || doichoi=="")
    {
        document.getElementById("canhbao7").style.display='block';
    }else{
        document.getElementById("canhbao7").style.display='none';
    }
    document.getElementById("tonggia").innerHTML= tiensan+thuedongphuc+thuetrongtai+"VND"; 
}
$(function(){
    $(document).click(function (event){
        $('.navbar-collapse').collapse('hide');
    });
});
