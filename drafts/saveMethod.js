

===find ====

UnUsedPins.find({}, function(err, found){
    console.log("err :", err);
    console.log("found :", found[0].pins[1]);
    });


==== save ====

var newPin=new UnUsedPins({
pins:[1,2,3]
    });

    newPin.save(function(err,data){
    console.log("error "+err +"  data  "+ data);
    });

