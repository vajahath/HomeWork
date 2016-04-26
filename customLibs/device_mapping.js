var Device= require('../models/Device');
var UnUsedPins=require('../models/UnUsedPin');

UnUsedPins.find({}, function(err, found){
    console.log("err :", err);
    console.log("found :", found[0].pins[1]);
    });



// JSON format for devices and their pins

var device_id_mapping = {
	'fan': 17,
	'bulb': 27,
	'ac': 22
};



//Function to remove a device

var pin_edit={

    removeDevice: function(removingDevice){
        Device.findOneAndRemove({'device':removingDevice},function(err){
            if(err) throw err;
            console.log("Device "+removingDevice+" has been removed");
            console.log(unUsedPin);
            unUsedPin.push(device_id_mapping[removingDevice]);//push pin of removing device to unUsedPin
            Device.find({},function(err,devices){
                if(err) throw err;
                console.log(devices);
                });
            });
        },

    //Function to add a device

    addDevice: function(addingDevice){

        if(unUsedPins[0].pin==null)
            console.log("No Gpio pin is free to assign a new device",unUsedPins[5].hey);

        else{
            var newDevice=new Device({  //Adding new entry to Device
                device:addingDevice,
                pin:unUsedPins[0].pin

                });

            newDevice.save(function(err){  //Create an entry
                if(err) {
                    console.log(err);
                }
                else{
                    console.log("Device "+addingDevice+" has been added successfully");
                   // unUsedPins=unUsedPins.splice(0, 1);
                    console.log(unUsedPins);
                }
            });

            Device.find({},function(err,devices){
                if (err) throw err;
                console.log(devices);
            });

        }
    }
};

module.exports=device_id_mapping;
module.exports=pin_edit;