Partners who join the Priceline Partner Network to sell inventory are required to meet certain display and technical requirements. Prior to the production launch of Priceline inventory, Priceline must certify and sign off that all requirements outlined in this document, and other documents as specified, have been met.

These documents contains screenshots for illustration purposes only. The actual design of the pages is up to the partner; however, the required elements described below must be included in the design. Partners are encouraged to review the [ppndemo.com](http://www.ppndemo.com) website to better understand the requirements below.

-----------

## API Usage

* Partners must use all the content provided by the hotel API feed, this includes but is not limited to rate information, hotel name/address, hotel details such as descriptive information, star rating, a list of nearby attractions, a list of directions from different points of interest, a list of the property’s amenities, etc.
* It is expected that all hotel content presented by the partner will be the most current and up to date. The partner will be responsible for all associated costs as a result of stale content.
* The partner is required to use the most current PPN assigned hotel star rating and may not change or display an alternate or old rating.
* The partner is expected to present the most current hotel images from getPhotos and may not house image links.
* Forward distribution of hotel inventory and content by the partner is not allowed, unless with previous consent.

-----------

## Business Rules

* Rooms must be reserved under the name of the person checking into the room.
* The reservation holder must be 21 years of age or older.
* There can be up to 4 rooms booked on the same reservation request (same room types only). If there aren’t enough rooms available at the time of booking, the reservation request will return an error. The card will not be charged.
* Availability searches can be performed for 1 room type only. This is a GDS limitation, they cannot respond with how many rooms are left for a given room type. At booking time, the number of rooms will be validated. If there aren’t enough rooms, the reservation request will return an error. See Room Reservation section for more details.
* Most major credit cards are accepted for merchant reservations. For Booking.com reservations, the hotel property sets the credit card policy and some properties may choose not to accept certain card types. The most commonly accepted credit cards are Visa, Mastercard, AMEX, Discover and Diners

-----------

## Hotel Search
![Hotel Search](https://raw.githubusercontent.com/priceline-partner-network/api-documentation/master/Assets/Launch%20Requirements/Hotel%20Search.png)
=======


#### Requirements 

* Destination
    * Hotel property, city, radius or airport to search

* Check-in Date
    * Check-in date cannot be made more than 329 days in advance of the check in date.
    * Same day reservations can be made until 5 AM the following morning.

* Check-out Date
    * Reservations cannot be longer than 21 nights.

* Number of Rooms
    * There can be up to 4 rooms booked on the same reservation request (same room types only). If there aren’t enough rooms available at the time of booking, the reservation request will return an error. The card will not be charged.

* Number of adults and children (guests)
    * Merchant rates can be searched for single, double, triple or quad occupants (number of adults and number of children will be added up to determine max occupancy level). The room description must be read by the customer to determine if it fits their needs. Send the same number of occupants (adults plus children) in the booking request.

-----------

## Results Page
![Results Page](https://raw.githubusercontent.com/priceline-partner-network/api-documentation/master/Assets/Launch%20Requirements/Hotel%20Results%20Page.png)
=======


* Show all the available hotels within a city/area
* Typically a city level page listing all the available hotels in the city

#### Requirements 
  * Property Name 
  * Room Rate per Night (Avg. Nightly Rate)
  * Property Address (City, State or Country if not US)
  * Promo Date (when applicable)

#### Suggested Additions 
  * Rating 
  * Map 
  * Amenities 
  * Reviews

-----------

## Hotel Details Page
![Hotel Details Page](https://raw.githubusercontent.com/priceline-partner-network/api-documentation/master/Assets/Launch%20Requirements/Hotel%20Details%20Page.png)
=======


* Typically contains hotel name, address, description, amenities, reviews, ratings, etc.

#### Requirements

  * Room Rate (i.e. avg nightly rate) 
  * Rate Description 
  * Room Description (i.e. room title and description of bedding, amenities, etc.)
  * Cancellation Policy 
    * Cancel policies vary by room 
    * Required to be displayed for each available rate
    * Data is passed in on the live rates call

-----------

## Contract Page

![Contract Page](https://raw.githubusercontent.com/priceline-partner-network/api-documentation/master/Assets/Launch%20Requirements/Contract%20Page%20-%20Summary.png)

#### Required Reservation Info

* Property Name & Address 
  * Display of the provided star rating and hotel phone number is recommended
* Room Title 
  * If the rate is a promotional rate, the promo title must be displayed
* Check-in/Check-out Dates
  * Including “day of week” is recommended 
  * Specifying the number of nights is recommended
* Number of Guests 
* Number of Rooms 
* **Important Information** is required to be displayed on every Contract 
  * Data is passed in on the contract call 
  * Information can vary based on inventory, location, etc.
  * Resort/Additional fees must be displayed.

#### Required Charge Information

* Room Rate
* Number of Rooms
* Number of Nights
* Room Subtotal
* Taxes and Fees
  * Must be a hyperlink which displays a pop-up or lightbox with specific legalese content about taxes and fees.
  * For **Merchant rates**: 
    * Display the tax and fee amounts as returned in the API. These values are determined at booking time since the customer is paying for the reservation up front. Note that there is a special “tax display logic” outlined in this document and in the technical document.
  * For **Agency rates**: 
    * To the right of the “Taxes and Fees” line the phrase “May Apply” should be displayed. Since the hotel is the merchant of record, they calculate the amount of Taxes and Fees charged at checkout time, i.e. the exact amount is not known at the time of booking. Therefore, use the phrase “May Apply”. 
* Total Charges
    * For **Merchant rates**: 
        * Use the following label: “Total Charges”
    * For **Agency rates**:
        * Use the following label: “Total Estimated Hotel Charges”
        * The phrase “+applicable taxes” must appear to the right of the amount
        * The amount shown must be displayed in the currency in which the customer will be charged.

#### Recommended Charge Information

* Room Rate Nightly Breakdown
![Room Rates](https://raw.githubusercontent.com/priceline-partner-network/api-documentation/master/Assets/Launch%20Requirements/Contract%20Page%20-%20Room%20Rate.png)
  * When there is a rate change over stay, it is recommended to show the nightly breakdown. It will help ensure the customer is clear on the cancellation penalty.

#### Required Customer Agreement Information
* Captures the customer consent to book and agree to the terms and conditions of the reservation
* Includes links to the Priceline privacy policy and terms and conditions

-----------

## Confirmation Page
![Confirmation Page](https://raw.githubusercontent.com/priceline-partner-network/api-documentation/master/Assets/Launch%20Requirements/Confirmation%20Page.png)
=======


* All of the same information that is displayed on the Contract Page must also be displayed on the Confirmation Page. 

#### Additional Required Information

  * The hotel confirmation number (one per room) must be displayed
  * The hotel phone number must be clearly visible and labeled as the hotel phone number
  * Check-in/Check -Out dates formatted with day of week and date must be clearly visible
  * Room Information 
  * Billing Name: the name of the person who’s credit card was used to pay for the reservation
  * Credit Card Type: (e.g. Visa, MC, AMX, etc.) 
  * Resort/Additional Fees 
  * Cancel Link – there must be an option to cancel the reservation online. If a reservation is non-cancelable, the cancel option on the website should not be shown OR the website must clearly state that the room is not cancelable.

-----------

## Confirmation Email

![Confirmation Email](https://raw.githubusercontent.com/priceline-partner-network/api-documentation/master/Assets/Launch%20Requirements/Confirmation%20Email.png)![Confirmation Email Customer Info](https://raw.githubusercontent.com/priceline-partner-network/api-documentation/master/Assets/Launch%20Requirements/Confirmation%20Email%20Customer%20Info.png)

#### Required Information

* Identical information as the confirmation/accept page

#### Required Important Information 

* All of the policies and disclosures below must be displayed to the customer on the contract page. Some items have special conditions, be sure to read each section carefully. Also, different rate types (e.g. merchant, retail, semi-opaque) have different content. Be sure to incorporate the correct logic in the code for displaying the correct content.
* Age Restriction Disclosure
  * Content for all rate types. (Example: The reservation holder must be 21 years of age or older.)
  * Note: This disclosure is absolutely required, no exceptions. It must be made obvious to the customer during the checkout process that an age requirement exists. The statement can be modified with approval from Priceline’s legal department. The age limit applies to the reservation holder, not the card holder.
* Rate Description
  * For all rate types, use content supplied via the API feed. See element `<RateDesctiption>` (Example: Websaver- Full pre-payment required upon booking.)
  * Note: This is dynamic content from the API element listed above. This disclosure is absolutely required, no exceptions. This content must be displayed on the contract page and not in a popup box, flyover, etc.
* Cancel Policy
  * For all rate types, use content supplied via the API feed. See element `<CancelPolicyDescription>` (Example: For the room type and rate that you’ve selected, you are not allowed to change or cancel your reservation. If you cancel your room, you will still be charged for the full reservation amount.)
  * Note: This is dynamic content from the API element listed above. This disclosure is absolutely required, no exceptions. This content must be displayed on the contract page and non in a popup box, flyover, etc. 

#### Customer Agreement

* A checkbox, initials input box, or a submit button with the text title “Agree and Book” (or something similar) are all OK to use to gain the customer’s consent. 
* If an initials box or checkbox are used, they must be displayed near the important information content AND The reservation button.
* Regardless of the method (input, checkbox or button), the agreement line must state: I have read and agree to abide by the priceline.com terms and conditions and privacy policy.
* The policies are sent in a separate document. 

#### Additional Requirements

![Additional Functions Review Cancel Reservation](https://raw.githubusercontent.com/priceline-partner-network/api-documentation/master/Assets/Launch%20Requirements/Review%20Cancel%20Reservation.png)

* Review Reservation Page
    * Should display the same information as the confirmation page
* Cancel Reservation 
    * An email should be sent to the customer confirming that their reservation was canceled
    * The reservation status, must be clearly displayed after the cancellation is completed (Example: Booking Status: Cancelled)
