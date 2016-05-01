var Device = require('../models/Device');
var UnUsedPins = require('../models/UnUsedPin');

/*
var freepins;
UnUsedPins.find({}, function(err, found) {
    console.log("err :", err);
    console.log("found :", found[0].pins[1]);
    console.log("found :", found);
    freepins = found[0].pins;
    //console.log('fp '+freepins[0]);

    for (var i = 0; freepins[i] != null; i++) {
        console.log("freepins :", freepins[i]);
    }
});

*/

// JSON format for devices and their pins

var device_id_mapping = {
    'fan1': 17,
    'light1': 27,
    'ac': 22,
    'door1': 4,
    'door2': 5,
    'window1': 6,
    'window2': 13,
    'washing': 19,
    'refrigereator': 26,
    'motor': 18,
    'light2': 23
};


//Function to remove a device


/*
var pin_edit = {

    removeDevice: function(removingDevice) {
        freepins.push(device_id_mapping[removingDevice]);
        delete device_id_mapping[removingDevice];
        console.log(device_id_mapping);
        Device.find({}, function(err, found) {
            if (err) console.log("err, update is not successful " + err);
            else {
                console.log("Device " + removingDevice + " has been removed");
                //found= undefined;
                //found=device_id_mapping;
                delete found[removingDevice];
                console.log(found + " found");
                UnUsedPins.update({ _id: '571fd1d5047905253f72bf7a' }, { $set: { pins: freepins } }, function() { console.log("updated"); });
                //push pin of removing device to unUsedPin

            }
        });
    },
*/

    //Function to add a device

    /*
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

}; */


module.exports = device_id_mapping;
//module.exports = pin_edit;
