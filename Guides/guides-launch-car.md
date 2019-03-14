Partners who join the Priceline Partner Network to sell inventory are required to meet certain display and technical requirements. Prior to the production launch of Priceline inventory, Priceline must certify and sign off that all requirements outlined in this document, and other documents as specified, have been met.

These documents contains screenshots for illustration purposes only. The actual design of the pages is up to the partner; however, the required elements described below must be included in the design. Partners are encouraged to review the [ppndemo.com](http://www.ppndemo.com) website to better understand the requirements below.

-----------

## Important Tips

- Use the specific API key and RefID provided for QA vs Production
- Leave NOTHING out. If a function returns it, display it.
- Do not hard code *card_type* in *ContractRequest*.
- Total booking days requirement
    - greater than 1 day
    - less than or equal to 21 days
    - Not more than 350 days in advance

-----------  

## Results Page

#### Display Requirements
* Pickup/Dropoff information
* Currency
* Base rate
* Total price
* Rental company
* Car type
* Car amenities

-----------

## Contract Page

#### Display Requirements
* Policy information (hidden behind a click)
* Pickup location
	* Time of day
* Dropoff location, if different from above
* Time of day
* Airport terminal information
* Hours of operation
* Rental company
* Car type
* Car amenities
* Mileage
* Free Cancellation banner for post paid rates
* Summary of Charges
	* Base rate(s)
	* Number of days and/or weeks
	* Taxes and Fees
		* Link to Taxes and Fees light box
	* Total price
* Important Information

-----------

## Success Page

#### Display Requirements
* Booking status
* Trip Id
* Rental partner confirmation number
* Map link to pickup location
* Links to change or cancel reservation
	* Canceling reservation produces the Cancellation email
* Links to print or email itinerary
* Pickup location
	* Time of day
* Dropoff location, if different from above
	* Time of day
* Airport terminal information
* Counter directions
* Hours of operation
* Rental company
* Car type
* Summary of Charges
	* Base rate(s)
	* Number of days and/or weeks
	* Taxes and Fees
	* Total price
* Important Information

-----------

## Confirmation Email

#### Display Requirements
* Trip Id
* Rental partner confirmation number
* Pickup location
	* Time of day
* Dropoff location, if different from above
	* Time of day
* Airport terminal information
* Counter directions
* Hours of operation
* Rental company & contact information
* Car type
* Summary of Charges
	* Base rate(s)
	* Number of days and/or weeks
	* Taxes and Fees
	* Total price
* Customer Service number
