const {Given, When, Then} = require('@cucumber/cucumber')     

Given('Enter name: {string}', function (name) {
   console.log(name)
});

Given('Enter Email: {string}', function (email) {
   console.log(email)
});

Given('Enter Address: {string}', function (address) {
   console.log(address)
});

Given('Enter City: {word}', function (city) {
   console.log(city)
});

Given('Enter State: {word}', function (state) {
   console.log(state)
});

Given('Enter Zip: {int}', function (zip) {
   console.log(zip)
});

Given('Enter Password: {word}', function (pwd) {
   console.log(pwd)
});

When('All data verified', function () {
   console.log('All data checked')
});

Then('Create Client', function () {
   console.log('Create Client')
});

Given('Enter Purpose on meeting: {string}', function (purpose) {
   console.log(purpose)
});

Given('Enter Number of Attendees: {int}', function (numattend){
   console.log(numattend)
})
Given('Enter Start Date: {string}', function (sdate) {
   console.log(sdate)
});

Given('Enter End Date: {string}', function (edate) {
   console.log(edate)
});

Given('Enter Location: {string}', function (location) {
   console.log(location)
});

Given('Enter Room: {string}', function (room) {
   console.log(room)
});

Then('Create Meeting', function () {
   console.log("Create Meeting")
});