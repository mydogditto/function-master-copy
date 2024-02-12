//////////////////////////////////////////////////////////////////////
// Function 1 - Object Values ////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//Should take an object and return its values in an array",
function objectValues(object) {
    // set up an output array
    let output = []
    // loop through the object 
    for(let key in object){
    // push values to the output array
    output.push(object[key])
    // return output array
}
return output 
}

//////////////////////////////////////////////////////////////////////
// Function 2 - Keys to String ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//Should take an object and return all its keys in a string each separated with a space"
function keysToString(object) {
    // convert all keys to an array of strings with Object.keys then use join to turn into a string seporated with a space 
return Object.keys(object).join(" ")


}

//////////////////////////////////////////////////////////////////////
// Function 3 - Values to String /////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//Should take an object and return all its string values in a string each separated with a space"
function valuesToString(object) {
    // initialize output array
    let output = []
    // itterate through object keys
    for( let key in object ){
        // if value is a string
        if(typeof object[key]=== 'string'){
        // push to output array
    output.push(object[key]);
        //return joined output
    }
    } 
    return output.join(" ")
} 
//////////////////////////////////////////////////////////////////////
// Function 4 - Array or Object //////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//Should take one argument and return 'array' if its an array and 'object' if its an object"
function arrayOrObject(collection) {
    // test if the collection is an array if true 
    if(Array.isArray(collection)){
        return "array"
    } else{
         // else return object
        return "object"
    }

}
   


//////////////////////////////////////////////////////////////////////
// Function 5 - Capitalize Word //////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//Should take a string of one word, and 
//return the word with its first letter capitalized"
function capitalizeWord(string) {
// use braket sytax to isolate first letter and run to Upper case set to a variable
let letterFirst = string[0].toUpperCase()
// slilce the rest of the word at the 1 index set to a variable 
let restOfWord = string.slice(1)

// return the joined variables 
return letterFirst + restOfWord
}

//////////////////////////////////////////////////////////////////////
// Function 6 - Capitalize All Words /////////////////////////////////
//////////////////////////////////////////////////////////////////////
//Should take a string of words and 
//return a string with all the words capitalized"
function capitalizeAllWords(string) {
        // convert all words in string to an array using string.split(" ")
        let array = string.split(" ")
       let newArray = []
        // loop over the array
        for(let i = 0; i < array.length; i++){
            // set the result of runing to upperCase on each array[i][0] to a variable 
           let firstLetters = array[i][0].toUpperCase()
       console.log(firstLetters)
           // set the restult of runing slice(1) on array[i] to a varable 
           let restOfWords = array[i].slice(1)
       let wholeWord = firstLetters + restOfWords
       newArray.push(wholeWord)
         
        }
        // return the result of joining the variables 
       let wholeNewWords = newArray.join(" ")
       return wholeNewWords
       }; 
// return the result of joining the variables 


//////////////////////////////////////////////////////////////////////
// Function 7 - Welcome Message //////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//Should take an object with a name property and return 'Welcome <Name>!'",
function welcomeMessage(object) {
    // make variable from the name property
    let name = object.name
    // turn the fist letter to uppercase
    let nameUpper = name[0].toUpperCase()
    // slice the rest of the name set to a varable using slice 
    let restOfWord = name.slice(1)
    // return the whole thing concotinaten using the 2015 syntax 
    return  `Welcome ${nameUpper}${restOfWord}!`
    } 

//////////////////////////////////////////////////////////////////////
// Function 8 - Profile Info /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//Should take an object with a name an a species and return '<Name> is a <Species>'"
//edge case the first letter of name and the first letter of species must be capitalized 
function profileInfo(object) {
let nameUpperFirst = object.name[0].toUpperCase()
let speciesUpper = object.species[0].toUpperCase()
let nameRest = object.name.slice(1)
let speciesRest = object.species.slice(1)
let totalName = nameUpperFirst + nameRest
let totalSpecies = speciesUpper + speciesRest
return `${totalName} is a ${totalSpecies}`

}

//////////////////////////////////////////////////////////////////////
// Function 9 - Maybe Noises /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//Should take an object, if this object has a noises array 
//return them as a string separated by a space, 
//if there are no noises return 'there are no noises'
function maybeNoises(object) {

// if object.noises is an array (Array.isArray) === truthy
if(Array.isArray(object.noises) && object.noises.length !== 0)
// use the join method with a space to concotinate them 
return object.noises.join(" ")
// otherwise return 'there are no noises 
return "there are no noises"
}

//////////////////////////////////////////////////////////////////////
// Function 10 - Has Words ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//Should take a string of words and a word and 
//return true if <word> is in <string of words>, otherwise return false."
function hasWord(string, word) {
// use the includes method to determon if word is in string
if(string.includes(word)){
    // return true 
    return true
} // otherwise return false 
return false 
}

//////////////////////////////////////////////////////////////////////
// Function 11 - Add Friend //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//Should take a name and an object and add the name to the object's friends array then return the object"
function addFriend (name, object) {
 // object.friends.push(name)
 object.friends.push(name)
 // return object 
 return object

}

//////////////////////////////////////////////////////////////////////
// Function 12 - Is Friend ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//Should take a name and an object and 
//return true if <name> is a friend of <object> and false otherwise"
// The function should check to see if name is present in the array at the friends property of the object.
// if yes return true else return false
function isFriend(name, object) {
    // if object is an object with properties and it has an array of friends
    if(object && object.friends && Array.isArray(object.friends)){
 // return true if the input name 
        return object.friends.includes(name)
    } else {
        return false
    }
   
}

//////////////////////////////////////////////////////////////////////
// Function 13 - Non-Friends /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//Should take a name and a list of people, and 
//return a list of all the names that <name> is not friends with"
// should never return an empty list 
// should return an array of names
function nonFriends(name, array) {
// setup an empty array called nonFriends
var nonFriends = [];
// loop through the array
for (var i = 0; i < array.length; i++) {
    // if the friends property of the object does not include input name and object.name does not = name
  if (array[i].friends.includes(name) === false && array[i].name !== name) {
    // push the value of the object.name
    nonFriends.push(array[i].name)

    }

// return array
  } return nonFriends

}

//////////////////////////////////////////////////////////////////////
// Function 14 - Update Object ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//Should take an object, a key and a value. 
//Should update the property <key> on <object> with new <value>. 
//If <key> does not exist on <object> create it."
function updateObject(object, key, value) {
// update/create new key value pair
object[key]= value
return object
}

//////////////////////////////////////////////////////////////////////
// Function 15 - Remove Properties ///////////////////////////////////
//////////////////////////////////////////////////////////////////////
//Should take an object and an array of strings. 
//Should remove any properties on <object> that are listed in <array>"
// if properties on the object match a string in the input array, then remove that value
// from the input object: the string to be removed can be the key or the value
function removeProperties(object, array) {
    // loop through object
    for (let key in object){
        // loop through the array
        for (let i = 0; i < array.length; i++) {
            // test if any keys or values are present by using object.hasOwnProperty(array[i])
          if (object.hasOwnProperty(array[i])) {
            delete object[array[i]];
          }
        }
      }
  }

//////////////////////////////////////////////////////////////////////
// Function 16 - Dedup ///////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//Should take an array and return an array with all the duplicates removed"
function dedup(array) {
// use the spred opporator and the new keyword combined with the Set method to
// return a new array with no duplicets 
return [... new Set(array)]
}

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.objectValues = objectValues;
    module.exports.keysToString = keysToString;
    module.exports.valuesToString = valuesToString;
    module.exports.arrayOrObject = arrayOrObject;
    module.exports.capitalizeWord = capitalizeWord;
    module.exports.capitalizeAllWords = capitalizeAllWords;
    module.exports.welcomeMessage = welcomeMessage;
    module.exports.profileInfo = profileInfo;
    module.exports.maybeNoises = maybeNoises;
    module.exports.hasWord = hasWord;
    module.exports.addFriend = addFriend;
    module.exports.isFriend = isFriend;
    module.exports.nonFriends = nonFriends;
    module.exports.updateObject = updateObject;
    module.exports.removeProperties = removeProperties;
    module.exports.dedup = dedup;
}