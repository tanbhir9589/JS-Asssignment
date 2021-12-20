var name = ['habib','kabir','jamal','kamal','jack','peter','tom','jerry','komol'];
var min = name[0];
function trintFriend(name) {
    for (var i = 0 ; i < name.length ; i++ ){
        var element = name [i] ;
        if(element > min){
            min = element;

        }     
    }
    console.log("Small name is :",min);
    return min;
}
trintFriend(name);