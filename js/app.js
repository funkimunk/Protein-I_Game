promise = null;

var app = angular.module('Dashboard', [
    'ui.bootstrap', 
    'ngCookies',
    'Dashboard.controllers',
    'Dashboard.services', 
    'ngRoute',
    'ngResource'
]);
        
app.config(['$routeProvider',function($routeProvider) {
   $routeProvider.
    when('/', {templateUrl: 'partials/menu.html'}).
    when('/Checkin', {templateUrl: 'partials/checkin.html'}).
    when('/Checkout', {templateUrl: 'partials/checkout.html'}).
    when('/Info', {templateUrl: 'partials/info.html'}).
    when('/Help', {templateUrl: 'partials/help.html'}).
    when('/AdminUXJG1THbD9eYgcRF', {templateUrl: 'partials/admin.html'}).
    otherwise({redirectTo: '/'});
}]);


angular.module('Dashboard').directive('ngEnter', function() {
    return function(scope, element, attrs) {
        element.bind("keydown keypress", function(event) {
            if(event.which === 13) {
                scope.$apply(function(){
                    scope.$eval(attrs.ngEnter, {'event': event});
                });

                event.preventDefault();
            }
        });
    };
});
        

function prepareText(inputText){

    inputText = inputText.replace("-", "");
    inputText = inputText.replace(/\s/g,'').trim();
    inputText = inputText.toLowerCase();

    return inputText;

}


function generateBookingRef(refObject){

    return { "bookingref":refObject.txt + refObject.rid + refObject.sdt +refObject.edt };

}

function processResponse(optionSelection){


    alert(optionSelection);

}

function generateBookingObj(refObject, formInfo){

    return { 
        "kid" : refObject.kid+ "",
        "txt" : refObject.txt+ "",
        "bookingref":refObject.txt + refObject.rid + refObject.sdt +refObject.edt + "",
        "sdt" : refObject.sdt + "",
        "edt" : refObject.edt + "",
        "adt" : (new Date().getTime()/1000),
        "email":  formInfo[3].trim()+ "",
        "phone": formInfo[4].trim()+ "",
        "rid": refObject.rid + "",
        "pid": refObject.pid + "",
        "fname" : formInfo[1].trim()+ "", 
        "sname" : formInfo[2].trim()+ "",
        "odv": refObject.odv + ""

    };

}


//The DS for global room info
Questions = 
[
    {
        "type": 1,    
        "Text": "What is the recommended daily intake of protein for an average person?",        
        "heroImg": "./img/01.jpg",
        "answersText": 
            [
                "20 grams", 
                "30 grams",
                "40 grams",
                "50 grams"
            ],
        "answersCorrectness": 
        [
            false, 
            false, 
            false, 
            true
        ],    
    },{
        "type": 1,    
        "Text": "How much protein is in 400g can of chickpeas?",        
        "heroImg": "",
        "answersText": 
            [
                "19 grams", 
                "78 grams",
                "80 grams",
                "20 grams"
            ],
        "answersCorrectness": 
            [
                false, 
                true,
                false, 
                false, 
                
            ],    
    },{
        "type": 1,    
        "Text": "How much protein is in an egg?",        
        "heroImg": "",
        "answersText": 
            [
                "13 grams", 
                "20 grams",
                "5 grams",
                "18 grams"
            ],
        "answersCorrectness": 
            [
                true,
                false,
                false, 
                false, 
            ],    
    },{
        "type": 2,    
        "Text": "Oats contain beta glucans which are proven to lower cholesterol levels. ",        
        "heroImg": "",
        "answersText": 
            [
                "True", 
                "False"              
            ],
        "answersCorrectness": 
            [
                true,
                false
            ],    
    },{
        "type": 3,    
        "Text": "Which nutrient builds and repairs muscles?",        
        "heroImg": "",
        "answersText": 
            [
                "Dairy", 
                "Protein",
                "Vegetables",
                "Fruit",
                "Carbohydrates"
            ],
        "answersCorrectness": 
            [
                false,
                true,
                false,
                false, 
                false, 
            ],    
    },{
        "type": 3,    
        "Text": "Which nutrient is a source of dietary fibre and essential vitamins and minerals?",        
        "heroImg": "",
        "answersText": 
            [
                "Dairy", 
                "Protein",
                "Vegetables",
                "Fruit",
                "Carbohydrates"
            ],
        "answersCorrectness": 
            [
                false,
                false,
                true,
                false, 
                false, 
            ],    
    },{
        "type": 3,    
        "Text": "Which nutrient provides calcium? (which is needed for strong bones and teeth)",        
        "heroImg": "",
        "answersText": 
            [
                "Dairy", 
                "Protein",
                "Vegetables",
                "Fruit",
                "Carbohydrates"
            ],
        "answersCorrectness": 
            [
                true,
                false,
                false,
                false, 
                false, 
            ],    
    },{
        "type": 3,    
        "Text": "Which nutrient provides energy for the body?",        
        "heroImg": "",
        "answersText": 
            [
                "Dairy", 
                "Protein",
                "Vegetables",
                "Fruit",
                "Carbohydrates"
            ],
        "answersCorrectness": 
            [
                false,
                false,
                false, 
                false,  
                true,
            ],    
    },{
        "type": 3,    
        "Text": "Which nutrient provides Vitamin C? (which is needed by the body for repairing tissues)",        
        "heroImg": "",
        "answersText": 
            [
                "Dairy", 
                "Protein",
                "Vegetables",
                "Fruit",
                "Carbohydrates"
            ],
        "answersCorrectness": 
            [
                false,
                false,
                false, 
                true,
                false, 
            ],    
    },{
        "type": 3,    
        "Text": "Can you name the following commonly consumed plant protein?",        
        "heroImg": "",
        "answersText": 
            [
                "Lentils", 
                "Tofu",
                "Edamame ",
                "Peanuts",
                "Chickpeas"
            ],
        "answersCorrectness": 
            [
                true,
                false,
                false, 
                false,
                false, 
            ],    
    },{
        "type": 3,    
        "Text": "Can you name the following commonly consumed plant protein?",        
        "heroImg": "",
        "answersText": 
            [
                "Lentils", 
                "Tofu",
                "Edamame ",
                "Peanuts",
                "Chickpeas"
            ],
        "answersCorrectness": 
            [
                
                false,
                true,
                false, 
                false,
                false, 
            ],    
    },{
        "type": 3,    
        "Text": "Can you name the following commonly consumed plant protein?",        
        "heroImg": "",
        "answersText": 
            [
                "Lentils", 
                "Tofu",
                "Edamame ",
                "Peanuts",
                "Chickpeas"
            ],
        "answersCorrectness": 
            [
             
                false,
                false,    
                true,
                false,
                false, 
            ],    
    },{
        "type": 3,    
        "Text": "Can you name the following commonly consumed plant protein?",        
        "heroImg": "",
        "answersText": 
            [
                "Lentils", 
                "Tofu",
                "Edamame ",
                "Peanuts",
                "Chickpeas"
            ],
        "answersCorrectness": 
            [
            
                false,
                false, 
                false,    
                true,
                false, 
            ],    
    },{
        "type": 3,    
        "Text": "Can you name the following commonly consumed plant protein?",        
        "heroImg": "",
        "answersText": 
            [
                "Lentils", 
                "Tofu",
                "Edamame ",
                "Peanuts",
                "Chickpeas"
            ],
        "answersCorrectness": 
            [
             
                false,
                false, 
                false,
                false,    
                true,
            ],    
    },{
        "type": 3,    
        "Text": "Which meat has the highest protein source?",        
        "heroImg": "",
        "answersText": 
            [
                "Tuna", 
                "Pork chop ",
                "Cod",
                "Chicken",
                "Beef "
            ],
        "answersCorrectness": 
            [
             
                false,
                false, 
                false,
                false,    
                true,
            ],    
    }
    
];


function getRoombyRID(iGlobalRoomInfo, iRid ){

    returnObj = {};

    for (x in iGlobalRoomInfo){

        //Match name
        if(iGlobalRoomInfo[x].id == iRid){
            returnObj = iGlobalRoomInfo[x];
        }            
    }

    return returnObj;
}


