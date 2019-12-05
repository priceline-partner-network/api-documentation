#Merchant Disclosure Rates
We offer discounted prepaid merchant rates that require disclosures at the contract step of the booking flow. Once activated, these rates will appear in your result set with flags to identify them.

The disclosures shown on the contract page communicate to the customer any policies surrounding topics like: Age, Security Deposit, and Rental information. These will act as a gate on your front end to ensure legitimate bookings are being made for these special rates. 


##ResultsRequest
For all of the eligible merchant rates, a flag is present in the car results as `disclosure_required`.

##ResultsV3
ResultsV3 supports legacy output structure, where we join the prepaid and postpaid rates for one vehicle. When it comes to `disclosure_required` flag it will be set to `true` if this vehicle has a prepaid merchant rate along with a postpaid rate. 

Please note that the `disclosure_required` flag is for the prepaid version of that vehicle and that does not mean that the postpaid version of this rate also needs a disclosure at the contract page.

##ContractRequest
A new object of arrays called `disclosure_data` is added to the output.
Here is an example, how the data is returned in the api response

```php
 "disclosureData": [
    {
        "id": "SECURITY_DEPOSIT",
        "name": "Security Deposit Type at pick-up",
        "options": [
            {
                "id": "CREDIT",
                "name": "Credit Card",
                "description": "The credit card presented at the counter must be in the primary driver’s name. The amount of credit required depends on car type, rental period, and optional items. Debit cards cannot be used as credit for car rentals.",
                "supportedAtLocation": true
            },
            {
                "id": "DEBIT",
                "name": "Debit Card",
                "description": "The debit card presented at the counter must be in the primary driver's name. Any funds used for the deposit cannot be accessed until after the car is returned. The amount required depends upon car type, rental period, and optional items.",
                "supportedAtLocation": true,
                "ageGroupRestrictions": [
                    {
                        "ageGroupId": "AGE18TO20",
                        "supportedAtLocation": true
                    },
                    {
                        "ageGroupId": "AGE21TO24",
                        "supportedAtLocation": true
                    },
                    {
                        "ageGroupId": "AGE25ANDOVER",
                        "supportedAtLocation": true
                    }
                ],
                "subOptionKey": "driverDebitCardOption",
                "subOptionText": "Will the driver have proof of round trip travel?",
                "subOptions": [
                    {
                        "id": "ROUNDTRIP",
                        "name": "Proof of round trip travel",
                        "title": "Yes",
                        "supportedAtLocation": true
                    },
                    {
                        "id": "LOCAL",
                        "name": "Local Renter",
                        "title": "No",
                        "description": "If you are using a debit card for the security deposit you must have proof of round trip travel (for example, your airline ticket). Can you use a credit card instead?",
                        "supportedAtLocation": false
                    }
                ]
            }
        ]
    },
    {
        "id": "AGE_GROUP",
        "name": "Driver's age at pick-up",
        "options": [
            {
                "id": "AGE25ANDOVER",
                "minAge": 25,
                "description": "25 and over",
                "supported": true,
                "under25": false,
                "isAdditionalFeeRequired": false
            },
            {
                "id": "AGE21TO24",
                "minAge": 21,
                "description": "21-24",
                "supported": true,
                "under25": true,
                "isAdditionalFeeRequired": true,
                "disclosure": "Advantage Rent-A-Car charges an additional fee at pickup for renters under the age of 25."
            },
            {
                "id": "AGE18TO20",
                "minAge": 18,
                "description": "18-20",
                "supported": true,
                "under25": true,
                "isAdditionalFeeRequired": true,
                "disclosure": "An underage fee will be charged at pickup for renters under the age of 21."
            }
        ]
    },
    {
        "id": "LOCAL_RENTER",
        "name": "Does the driver live within 65.0 miles of John F Kennedy Intl Airport?",
        "options": [
            {
                "id": "LOCAL_RENTER",
                "name": "Yes",
                "description": "Be advised that local renters are subject to mileage restrictions and can only rent certain car classes. Please read the partner policy for details.",
                "radiusDistance": 65,
                "radiusDistanceUnit": "MILE"
            },
            {
                "id": "NOT_LOCAL_RENTER",
                "name": "No",
                "radiusDistance": 65,
                "radiusDistanceUnit": "MILE"
            }
        ]
    }
]
```

Below are some of the example how these disclosure options can be used for front end implementation.

![Disclosure Options at Front End](/Users/lbrar/Projects/api-documentation/src/assets/guides/Car-Disclosure-Questions.png)

There are some warnings and informational messages attached to the certain options selected from the above. These informational / warning messages can be found under options as description for each disclosure returned in the api response returned.

Here are some examples
![Disclosure Messages at Front End](/Users/lbrar/Projects/api-documentation/src/assets/guides/Car-Disclosure-Warning-and-Informational-Messages.png)

Below is a sample screenshot of front end implementation of disclosure options and informational messages to be shown.
![Disclosure Example of Contract Page](/Users/lbrar/Projects/api-documentation/src/assets/guides/Car-Disclosure-Advantage-Example.png)

The book button should be hidden when disclosure requirements are not met and user should not be able to make a booking, but is returned with a descriptive informational message and a link to non-disclosure rates page. 

Here are few examples.

Please note these are the end of page screenshots, so no book button 

When driver does not have a proof of round trip travel
![Disclosure Example of Contract Page](/Users/lbrar/Projects/api-documentation/src/assets/guides/Car-disclosure-debit-no-proof-of-travel.png)


When driver does not meet the age requirements.

![Disclosure Example of Contract Page](/Users/lbrar/Projects/api-documentation/src/assets/guides/Car-disclosure-driver-under-age.png)

Here is an example where the disclosure requirements are met and the user is given a green light to book the car. 

![Disclosure Example of Contract Page](/Users/lbrar/Projects/api-documentation/src/assets/guides/Car-disclosures-met-one.png)
![Disclosure Example of Contract Page](/Users/lbrar/Projects/api-documentation/src/assets/guides/Car-disclosures-met-two.png)

The book button is now accessible to the customer. There are no changes required for the rest of the process.