Partners who join the Priceline Partner Network to sell inventory are required to meet certain display and technical requirements. Prior to the production launch of Priceline inventory, Priceline must certify and sign off that all requirements outlined in this document, and other documents as specified, have been met.

These documents contains screenshots for illustration purposes only. The actual design of the pages is up to the partner; however, the required elements described below must be included in the design. Partners are encouraged to review the [ppndemo.com](http://www.ppndemo.com) website to better understand the requirements below.

-----------

## Search Page

#### Requirements

* Departing Date
  * Cannot be more than 330 days in the future
* Returning Date
  * Cannot be more than 330 days in the future. 
* Number of passengers
  * 8 passengers maximum
* Adults (18+ years)
* Children (2-17 years) 
  * The definition of a child who can fly by themselves varies by carrier and location. The minimum age requirement is returned in the API responses.
  * The PPN system will not book tickets for unaccompanied minors who don’t meet the age requirement at time of departure.  There must be at least 1 adult.
  * The PPN system does not book children fares.  Persons who are older than 2 but under the definition of an adult will still have to pay for an adult fare.
* Infants (<2 years)
  * International – **The PPN system does not process requests for international infants**
    * Lap infants are not allowed on international flights. They must be ticketed at the adult fare.
  * Domestic – PPN will process a domestic infant
    * A lap child is allowed.  
    * The airlines do not require a ticket for an infant, there is no charge.
    * A ticket will not be generated; the PPN system will simply generate a message to the carrier(s) involved advising that the passenger is traveling with an infant

-----------

## Results Page

#### Requirements
* Notification that many airlines charge extra for **baggage fees**
* **List of Itineraries on the initial search results page:**
  * price 
    * total fare is more important to show, base can be shown as secondary number 
  * origin city & airport code
    * can add hover text with full airport name
  * destination city & airport
    * minimally, must be shown on expanded view
  * flight numbers,
    * minimally, must be shown on expanded view
  * number of stops,
  * departure times,
  * arrival times
  * trip duration
- **Selected Itinerary:**
  1. A “collapsed view” of an itinerary must display:
    * Price per Round Trip Per Person
    * City , State and Country (if not the US such as Paris, France)
    * Stops
    * Departure Dates, day of week and times
      * minimally, must be shown on expanded view
    * Layover information 
      * Condensed view must call out a layover
      * Expanded view can have full details
    * Overnight layover information (if applicable)
    * Trip Duration
    * Carrier
    * Codeshare (marketing carrier) information if applicable
  2. Full Flight Details provides additional information about the specific flights
    * Distance flown for each flight
    * Aircraft Type (including jet or non-jet),
    * Total trip distance – entire journey (NON-MANDATORY)
    * Cabin class (First, business, economy)
    * Connecting (layover) time
* **Codeshare**:  must display the operating and marketing carrier of a flight.  Below are important notes regarding codeshare disclosures:
  The U.S. Department of Transportation’s (DOT) Aviation Enforcement Office has provided guidance to airlines and ticket agents about the requirement for notifying passengers if a flight they are selling is being operated under a code-sharing arrangement. The new law makes it clear that when a consumer requests an airline itinerary on the Internet, any code-sharing arrangement must be included on the same screen and next to the itinerary. Under the existing Department rules, code-share disclosure must include the corporate name of the transporting carrier and any other name under which the flight is offered to the public. Disclosure through a hyperlink or when one passes the cursor over a link (“ALT Text”) is not considered compliant with new law. This guidance applies to all pages that reference flight itineraries, such as Fare Results, Details, Contract, etc.
* Notify and highlight if a flight is **overnight** with next day arrival
* If there is a **connection**, name the intermediate connecting airport 
* If a **direct flight** (1 or more stops, no change of plane), disclosure of **stop** is required
* **Long connection** – advise/warn a consumer that their time at a connecting city is extensive.  
* **Interairport** connection – both a warning and highlighting – e.g. flight from New York JFK arrives in Paris – Charles de Gaulle but connects to a flight leaving from Paris – Orly.
* **Open Jaws** – both highlight and provide a warning that the return flight leaves from a different airport then the arrival.
* **International connection**  -  customer should be made aware if a connection is in a foreign  country.  They may not need a visa for the origin or the destination but it is possible that they need a visa for the intermediate/connecting country.

-----------

## Contract Page

The contract page is the last step before the reservation is made.  It must clearly display what the consumer agreed to purchase, the name & preferences of the passenger, the billing information, the agreed charges, and the credit card to be used.

#### Requirements
* Pricing must show **total price** including taxes/fees on the contract page
  * Permissible to show base fare but must always include a total fare
* Notification that many airlines charge extra for **baggage fees**
* Notification that only **e-tickets** will be provided
* **Fare Rules** – must be available for the customer to view on the partner's website (contract page and post reservation lookup pages).  These can be displayed in a popup window as long as the link is easy to find and it’s clear which itinerary the rules apply to.

#### Business Rules

* Only e-Tickets will be available
* Interline itineraries will be charged an extra $7 USD, this fee is non-refundable (even if the ticket is voided).  This fee must have its own line item on the summary of charges section of the contract page (see contract page section of this document).  The fee disclosure is included in the “taxes and fees” disclosure text (see document  “**XML Air FAQs and PopUps**” for all disclosure content).
* Most major credit cards are accepted.  The most commonly accepted credit cards are Visa, Mastercard, AMEX, Discover and Diners
* Credit cards with billing addresses in the following country are accepted:

|Code|Country|
|---|---|
|US|United States|
|CA|Canada|
|CH|China|
|AS|Australia|
|RQ|Puerto Rico|
|KS|Republic of Korea|
|UK|United Kingdom|
|BF|Bahamas|
|MX|Mexico|
|BR|Brazil|
|HK|Hong Kong|
|IN|India|
|GM|Germany|
|JA|Japan|
|TW|Taiwan|
|SN|Singapore|
|FR|France|
|IS|Israel|
|NZ|New Zealand|
|CO|Colombia|
|TH|Thailand|
|RP|Philippines|
|RS|Russia|
|SZ|Switzerland|
|MY|Malaysia|
|JM|Jamaica|
|TU|Turkey|
|SW|Sweden|
|ID|Indonesia|
|IT|Italy|
|VQ|Virgin Islands|
|NL|Netherlands|
|AR|Argentina|
|NO|Norway|
|VM|Vietnam|
|EI|Ireland|
|EC|Ecuador|
|TD|Trinidad and Tobago|
|CI|Chile|
|SP|Spain|
|DR|Dominican Republic|
|AU|Austria|
|PE|Peru|
|BE|Belgium|
|BD|Bermuda|
|VE|Venezuela|
|PM|Panama|
|DA|Denmark|
|PL|Poland|
|CZ|Czech Republic|
|HO|Honduras|
|GT|Guatemala|
|CJ|Cayman Islands|
|UP|Ukraine|
|CS|Costa Rica|
|FI|Finland|
|GR|Greece|
|NU|Nicaragua|
|RO|Romania|
|HU|Hungary|
|GQ|Guam|
|HA|Haiti|
|BL|Bolivia|
|AQ|American Samoa|
|LO|Slovakia|
|IC|Iceland|
|BB|Barbados|
|BH|Belize|
|ES|El Salvador|
|LG|Latvia|
|VG|British Virgin Islands|
|WS|Western Samoa|
|GY|Guyana|
|AC|Antigua & Barbuda|
|PO|Portugal|
|NS|Suriname|
|LU|Luxembourg|
|BU|Bulgaria|
|AA|Aruba|
|EN|Estonia|
|NN|Sint|
|FK|Falkland|
|DM|Dominica|
|UY|Uruguay|
|RI|Serbia|
|MC|Macau|
|HR|Croatia|
|LH|Lithuania|
|NC|New|
|PP|Papua|
|AD|Andorra|
|RM|Marshall|
|SI|Slovenia|
|MD|Moldova|
|GJ|Grenada|
|PS|Palau|
|AV|Anguilla|
|SB|Solomon|
|MT|Malta|
|MN|Monaco|
|TB|Saint|
|TK|Turks|
|TN|Tonga|
|PA|Paraguay|
|GI|Gibraltar|
|UC|Curacao|
|ST|St|
|VC|Saint|
|PN|Pitcairn|
|BO|Belarus|
|NM|Northern|
|NA|Bonaire|
|MK|Macedonia|
|MJ|Montenegro|
|MH|Montserrat|
|FJ|Fiji|
|JE|Jersey|

#### Whitelabel Solution
The API can be used to display availability and at the point where an itinerary is selected, but the user can be directed to our white label (secure.rezserver.com) to complete the booking. The Contract Page up to Confirmation Page and Confirmation Email can be under the white label solution. This allows the developer to take advantage of our white label book path, which is regularly maintained and is up to standard.

In all of our api [availability calls](https://priceline.atlassian.net/wiki/spaces/PPN/pages/42106995/Example+Calls), we return a node called **contract_page_url**, which is a url encoded string that can be browsed to. All connections to this partner should remain the same with the use of the **refid** which should have your branding on configured on our white label for seamless customer experience.

Should the Contract Page be built by the partner, a well-formed contract page should contain the following information:

#### Trip Summary
Complete details of the itinerary (airports, dates, carrier(s), cabin class, fare, fare rules,  etc.)
The fare rules must be made available on this page. It can be with the trip summary, ticket information or in the important information section.  
  **Passenger and Ticket Information**
  Name of passenger, seat preferences, meal preferences (if any) and notification of ticket type.

The following rules apply:
1. Duplicate passenger names are not allowed (identical First/Middle/Last/Suffix entries)
2. Full names are required (at least first and last) 
3. All name fields for the ticket must match the Id/Passport the consumer will use at the airport (First Name, Middle name, Last name, Suffix).
4. TSA Secure Flight information must be collected  for each passenger (DOB and gender)

#### Summary of Charges

A line by line explanation of the charges the customer will receive.  Below is an example of the summary of charges section on the PPN whitelabel.

![Air Summary of Charges](https://raw.githubusercontent.com/priceline-partner-network/api-documentation/master/Assets/Launch%20Requirements/Contract%20Page%20-%20Air%20-%20Summary%20of%20Charges.png)

#### Important Information
Contains important disclosures that the customer must know about prior to making the purchase.  These bullets must be shown to the customer on the contract page.  The underlined words need to have a pop up box explaining the term.  The links to the pop up content are provided below and can also be found in the document titled XML Air FAQs and PopUps.

Note:  there are 4 Static items, 2 conditional items in yellow
* Once confirmed, airline change penalties and restrictions apply.  Most tickets are non-refundable. See your airline’s [full fare rules]() here.
* Airline tickets are non-transferrable.  Name changes or adjustments are not allowed once purchased.
* Airfares and flight availability are not guaranteed until purchased.
* Domestic  / International Flights
  * Domestic: You will be issued electronic tickets.  Remember to bring a valid [government-issued photo ID]() with you to check-in.
  * International You will be issued electronic tickets. All travelers will need a [valid passport]() and you may also need to show additional documentation  at your destination and/or in connecting countries.
* Trip Protection (include this bullet insurance is offered)
  * You added Trip Protection. View [Description of Coverage](), which includes full terms and conditions.
 
`Note:  Disinsection is not misspelled. This is an official US Government term.  Please use it as is and ignore spell checkers.`

#### Hyper Link URLs (Copy + Paste from this source)

baggage fees:
http://secure.rezserver.com/flights/baggage_fees/AA.html?refid=<refid>

government-issued photo ID:  
https://www.priceline.com/Customerservice/faq/ShowHelp.asp?faq=ext(air_id)&negotiatorapp=y

valid passport: 
https://www.priceline.com/Customerservice/faq/ShowHelp.asp?faq=ext(air_id)&negotiatorapp=y

partner airlines: 
https://www.priceline.com/Customerservice/faq/ShowHelp.asp?faq=ext(AIRPOP_PARTNERS)&negotiatorapp=y

airline regulations: 
https://www.priceline.com/Customerservice/faq/ShowHelp.asp?&faq=ext(AIRPOP_ARC)&negotiatorapp=y

disinsection:  
http://www.priceline.com/Customerservice/faq/ShowHelp.asp?faq=ext(AIRPOP_disinsection)&negotiatorapp=y

description of coverage:
http://www.priceline.com/air_description_of_coverage

#### Customer Consent:
1. A check box, initials input box or a submit button with the text title “Agree and Book” (or something similar) are all OK to use to gain the customer’s consent.
2. If an initials box or a checkbox are used, they must be displayed near the important information content **and** the reservation button.  
3. Regardless of the method (input, checkbox or button), the consent line must state (yellow indicates dynamic content):

**I agree to this purchase of `<amount><currency>`  I have read, accept and agree to the airline’s fare rules the terms and conditions and privacy policy.**

Example:
![Book Flight Now](https://raw.githubusercontent.com/priceline-partner-network/api-documentation/master/Assets/Launch%20Requirements/Contract%20Page%20-%20Air%20-%20Book%20Flight%20Now%20Button.png)

**Notes:**
1. Dynamically populate the amount and currency code 
2. **Terms and Conditions** and **Privacy Policy** should be a hyperlink to the appropriate legalese (this content is provided as part of the QA checklist package)

-----------

## Booking Responses

The general outline of responses is as follows:

1. Acceptance of booking – purchase confirmed.
2. Intermediate stage - still working on the booking 
3. Rejection of booking – reasons fall into several categories:
  1. Credit card issues
    * Authorization failed
    * Invalid number
    * Security value failed
    * Card expired
  2. Business rules
    * No international infants
    * Duplicate ticketing –our systems shows the  passenger has already ticketed
    * Same day failure --  departure of first flight must be at least 2 hours from present time and requires a US billing address
    * Child traveler(s) with no adult travelers 
    * Carrier price change (applies to ticketless bookings)
  3. Booking Failures 
    * UN/UC segment response due to availability discrepancy
    * Carrier failure to generate carrier RLOC number / confirmation response
    * Carrier unable to confirm
4. Reject messaging can be either 
  1. A generic rejection  or
  2. A messaged rejection with an explanation of the failure and possible actions to allow a booking/ticket to be made.

-----------

## Confirmation Page

* The customer will receive two charges on their credit card:  
  * One for the ticket (carrier is MOR)
  * One for the processing fee

The general outline of responses is as follows:

- All the same information on the Contract page (minus inputs)
- Acceptance of booking – purchase confirmed.
- Trip Number
- Airline Confirmation 
- Airline Contact Information
- Flight numbers (with seat preference)
- Customer service phone number

-----------

## Confirmation Email

**MUST contain ALL the same information as confirmation page.**

-----------

## Lookup Reservation Page

Must give the customer the ability to look up reservation and view a version of the confirmation page.  Lookup reservation must include trip ID and customer email.  Lookup reservation page must contain the option to resend the itinerary to customers email.
