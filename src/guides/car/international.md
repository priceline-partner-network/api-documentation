# International Car Rates
International car rates are "inclusive" rates, where different options/ancillaries are bundled together and included in the prepaid price. Basically you will need to display the `ancillkkaries` at search time in the car results output, and again at contract/checkout page. You will need to look for an `ancillaries`  element within a details element -- each inclusion should include a description which is what we are showing to users. Here are sample screen shots of our treatment

These rates require driver's age after an eligible rate is selected. Customers' need to fill in their age before they move on to the contract page and book their car. Every eligible rate may or may not have additional fees attached to it based on customer's age.

## Results
A new boolean flag is introduced in the results output `driver_age_required` along with a new output node `ancillaries` that provide the list of facilities attached to the car rate and can be shown as follows at the front end
![Internationa_car_confirm_age](/Users/lbrar/Projects/api-documentation/src/assets/guides/International_car_listing.png)

At frontend, When a rate with `driver_age_required`=`true` is selected, a popup should be shown to confirm driver's age.

Here are few examples how this can be done:

The disclosure about additional fees must be provided with the age popup.

Example one for popup window
![Internationa_car_confirm_age](/Users/lbrar/Projects/api-documentation/src/assets/guides/International_car_confirm_age.png)

Example two for popup window
![Internationa_car_confirm_age](/Users/lbrar/Projects/api-documentation/src/assets/guides/International_car_driver_age_forth.png)

If the customer selects `no`, they should be prompted to enter their age.

Example window one
![Internationa_car_confirm_age](/Users/lbrar/Projects/api-documentation/src/assets/guides/International_car_driver_age_two.png)

Example window two
![Internationa_car_confirm_age](/Users/lbrar/Projects/api-documentation/src/assets/guides/International_car_driver_age_five.png)

The drop down list can be provided, with the ages listed from 18 to 85.
![Internationa_car_confirm_age](/Users/lbrar/Projects/api-documentation/src/assets/guides/International_car_driver_age_three.png)

## ContractRequest
From the above, the customer age should be added to the contract api request through the parameter `driver_age`, due to the provided an additional fee may or may not be added to the rate at the contract page. If that is the case a price increase disclosure must be provided at the top of the contract page.
![Internationa_car_confirm_age](/Users/lbrar/Projects/api-documentation/src/assets/guides/International_car_price_change.png)

An Important thing to note here is that all the additional fees added will be paid later at the counter in the local currency. And so the partial payment functionality must be supported. 

At the front end, a clear difference between amount due at checkout and amount due later at the counter must be shown in the summery of charges as follows:
![Internationa_car_confirm_age](/Users/lbrar/Projects/api-documentation/src/assets/guides/International_car_summary_of_charges.png)

When there is an amount due at the counter listed, this following disclosure must be provided right underneath the `Due at Pick-up` block

`The Pay Later amount is an estimate based on the current exchange rate. You will be charged at the counter in this local currency.`

Also, the `ancillaries` node is again available in the contract output. And should be shown in the details section for car as follows
![Internationa_car_confirm_age](/Users/lbrar/Projects/api-documentation/src/assets/guides/International_car_details.png)

There are no additional changes required for the booking process following these steps, and the user should be able to book the car as usual.
