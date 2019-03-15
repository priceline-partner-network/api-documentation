Get familiar with the proper booking flow for your site and where to use our API data.

#### Booking a Hotel Flow

##### Merchant 

1. [AutoSuggestV2](/documentation/hotel#/paths/~1getAutoSuggestV2/get)  
Provide a list of suggested cities or airports based on the user's search input
2. [ResultsWithCacheV2](/documentation/hotel)  
Retrieve cached rates and hotel IDs based on the user's search criteria
3. [HotelDetails](/documentation/hotel#/paths/~1getHotelDetails/get) (optional)  
Retrieve all details about the property the user has selected
4. [Rates.Live.Multi](/documentation/hotel#/paths/~1getRates.Live.Multi/get)  
Displaying live property rates and availability for 1 or 2 hotel IDs
5. [ContractRequest](/documentation/hotel#/paths/~1getContractRequest/get)  
Confirms the rate that the user has selected
6. [BookRequest](/documentation/hotel#/paths/~1getBookRequest/post)  
Sends customer and payment information to confirm their property booking
7. [BookDetails](/documentation/hotel#/paths/~1getBookDetailsRequest/get)  
Retrieves the post-book details

##### Closed User Group (CUG)

1. [AutoSuggestV2](/documentation/hotel)  
Provide a list of suggested cities or airports based on the user's search input
2. [Express.Results](/documentation/hotel)  
Returns a list of up to 100 properties matching the search criteria.
3. [Express.MultiContract](/documentation/hotel) (optional)  
Returns multiple applicable rates from the property selected.
4. [Express.Book](/documentation/hotel)  
Passes user and payment information and responds with a success or fail

#### Cancel a Booking

##### Merchant

1. [BookDetails](/documentation/hotel#/paths/~1getExpress.LookUp/post)  
Gets the all details from the booking that was selected
2. [CancelRequest](/documentation/hotel#/paths/~1getExpress.Cancel/get)  
Cancels a booking

#### Important Tips

##### Merchant

- Rates.Live.Multi limited to 5,000 calls per hour.
- Best practice is to leave nothing out. If a function returns it, display it.
- Do not hard code card_type in ContractRequest.
- Total booking days requirement:
    - greater than 1 day
    - less than or equal to 21 days
    - Not more than 329 days in advance.
- Always call run BookDetails after BookRequest so post-book page is displayed for the customer.

##### Closed User Group (CUG)

- Express.Results limited to 5,000 calls per hour
- Full path *Look to Book* ratio limited to 2000:1.
- Total booking days requirement: 
    - greater than 1 day
    - less than or equal to 21 days 
    - Not more than 350 days in advance
- ppn_bundle are not to be cached 
- Clearly display all required information to the traveler such as: price, property_fee, taxes, Cancellation details, Important Information
- If acting as the Merchant or Record, pass a static email address that will receive ALL correspondence related to the reservations.

#### Hotel Insurance Flow - Standalone

This API feature separates the insurance from the product, and allows the purchase of insurance for an unknown hotel booking.

- [Insurance Quote](/documentation/hotel)  
Response will return a block of HTML that can be placed within the front end code and offers insurance to the customer
- [Insurance Purchase](/documentation/hotel)  
If the customer selects "Yes" to buying insurance, *and the hotel reservation was successful*, you can then submit an insurance purchase.
- [Insurance Note Decline](/documentation/hotel)  
If the customer selects "No" to buying insurance, *and the hotel reservation was successful*, it is required that you submit an insurance note decline request.
- [Insurance Lookup](/documentation/hotel)  
Along with the method to retrieve hotel reservation details, an API call can be made to get details on the insurance purchase.




