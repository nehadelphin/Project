Feature: Create New Meering or Client

Scenario: Create Client Buttong Pressed
Given Enter name: "John watson"
And Enter Email: "john@example.com"
And Enter Address: "123 Street Name"
And Enter City: Houston
And Enter State: Texas
And Enter Zip: 77008
And Enter Password: "mypassword"
When All data verified
Then Create Client

Scenario: Add Meeting buttong Pressed
Given Enter Purpose on meeting: "Discuss Vacation Plans"
And Enter Number of Attendees: 6
And Enter Start Date: "02/08/2023 10:00 AM"
And Enter End Date: "02/08/2023 12:00 PM"
And Enter Location: "Main Building"
And Enter Room: "Conferce Room 123"
When All data verified
Then Create Meeting