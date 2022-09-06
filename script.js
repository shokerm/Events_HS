function showContentShortCondition(str){
    var x = document.getElementById('paragraph');
    (x.style.display =='none' || x.style.display == '')? (x.innerHTML = str, x.style.display ='block'):x.style.display ='none';
};