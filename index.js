//Use the express library. require express module and create an app object
let express = require('express');
let app = express();
app.use(express.static('public'));

let gardenPaths = {
    "nounVerbConfusion": [
        {
            subject: "The old", 
            verb: "man",
            objectState: "the boat."
        }, 
        {
            subject: "Fat people", 
            verb: "eat",
            objectState: "accumulates."
        },
        {
            subject: "The horse", 
            verb: "raced past",
            objectState: "the barn fell."
        },
        {
            subject: "The men who", 
            verb: "whistle",
            objectState: "tune pianos."
        },
        {
            subject: "The cotton clothing", 
            verb: "is usually made",
            objectState: "of grows in Mississippi."
        },
    ],

    "buffer": [
        {
            subject: "The postman delivered junk mail", 
            verb: "threw it in",
            objectState: "the trash."
        },
        {
            subject: "The patient", 
            verb: "persuaded",
            objectState: "the doctor that he was having trouble with to leave."
        },
        {
            subject: "The building blocks the sun", 
            verb: "shining on",
            objectState: "the house faded are red"
        }

    ],

    "semanticSatiation": [
        {
            noun: "The business people like",
            verb: "left",
            subject: "fat people",
            status: "wanting for nothing",
            verb: "wanted for",
            noun: "the firm",
            verb: "ship",
            subject: "the young man"
        },

        {
            noun: "The firm friends",
            verb: "run",
            subject: "can can",
            status: "the firm",
            verb: "friends",
            noun: "the people",
            verb: "saw run",
            subject: "the poor firm poorly"
        }

    ]}

//Serve public folder
app.use('/', express.static('public'));

//define routes
app.get('/', (request, response) => {
    //console.log("A request to '/' was made!");
    response.send("You're here. Where all paths begin.");
});
// response.send sends a text

app.get('/about', (request, response) => {
    //console.log("A request to '/about' was made!");
    response.send("Ye be dragons. This page is a sea of garden paths");
});

app.get('/gardenpath', (request, response) => {
    response.json(gardenPaths);
})



// // response.send sends a text
// app.post('/', (request, response) => {
//     //console.log("a POST request to the homepage was made")
//     response.send('POST request to the homepage');
// });
// //Post Method route, attached to an instance of the express class

//Define a route. This defines a static route called
app.get('/gardenpath', (request, response) => {
    //console.log("A request to '/' was made!");
    //console.log(request);
    response.json(gardenPaths);
    });
// response.send sends another text

// Route with query param
app.get('/gardenPaths/:gardenPath', (request, response) => {
    console.log(req.param.gardenPaths);
    let sentence = req.params.gardenPaths;
    let gardenPath_sentence;
    let user_obj;
    for(let i=0;i<gardenPaths.data.length;i++) {
        if(sentence == gardenPaths.nounVerbConfusion[i].noun) {
            gardenPath_sentence = gardenPaths.nounVerbConfusion[i];
}
}
console.log(gardenPath_sentence);
if(gardenPath_sentence) {
    response.json(gardenPath_sentence);
} else {
    response.json({status: "info not present"});
}
});

app.get('/test', (req,res) => {
    // console.log(req)
    console.log(req.query)
    res.send('hello')
});


// Tell where the server should listen
app.listen(3000, () => {
    console.log("app is listening at localhost:3000")
});
    

// app.get('/data', (request, response) => {
//         console.log("A request to '/data' was made!");
//         console.log(request.path);
//         response.json(myData);
//         });
// // response.json sends data


// credit
//https://onwords.substack.com/p/in-search-of-the-perfect-garden-path