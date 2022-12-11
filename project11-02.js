"use strict";
/*    JavaScript 7th Edition
      Chapter 11
      Project 11-02

      Project to city and state information from a provided postal code
      Author: herbert kigenyi
      Date:   12/4/2022

      Filename: project11-02.js
*/

let postalCode = document.getElementById("postalCode");
let place = document.getElementById("place");
let region = document.getElementById("region");
let country = document.getElementById("country");
/*3.  Within the anonymous function for the postalCode.onblur event handler, add the following: */

postalCode.onblur = function () {


      //3a. Declare the codeValue and countryValue variables setting them equal to the value of the postalCode and country elements, respectively.
      var codeValue = postalCode.value;
      var countryValue = country.value;

      //3b. Set the value of the place and region elements to an empty text string.  These are going to be changed to the values of the JSON file
      place.value = '';
      region.value = '';

      /*3c. Use Fetch to access the API at http://api.zippopotam.us/country/postal - where country is the value of the countryValue variable and
      code is the value of the codeValue variable.*/
      fetch("http://api.zippopotam.us/" + encodeURIComponent(countryValue) + "/" + encodeURIComponent(codeValue))

            //3d. When the Fetch promise is returned, add a then() method to parse the JSON response object.
            .then(response => response.json())

            /*3e. Add another then() method using an arrow function with a single parameter named json. Set the value of the place element to
            place property for the postal code and the region element to the state abbreviation property.*/
            .then(json => {
                  place.value = json.places[0]["place name"];
                  region.value = json.places[0]["state abbreviation"];
            })

            //3f. If the response is rejected, write the error text to the console log.

            .catch((error) => console.log(error));


}

//4.	Save your changes to the file and then open the project11-02.html file in your browser. Enter the postal code 01101 in the Postal Code box and press the Tab key. Verify that Springfield, MA, appears as the place and region.
//5.	Select Spain from the Country list box and enter 30151 in the Postal Code box. Verify that Santo Angel, MU, appears as the place and region.


