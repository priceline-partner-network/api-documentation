API Car Requirements Appendix
=============================

This document serves as an explanation of the requirements that API
partners are required to meet in order to go-live. In this document you
will find:

-   An explanation of each requirement

-   Additional information regarding each requirement

-   Details about where each requirement can be found

-   Reasoning behind each requirement

<table border="1" cellspacing="0" cellpadding="0" style="width:100%;max-width:740px;">
 	<tbody>
 		<tr>
 			<td border="1px">
 				<p align="center">
 					<strong>Page</strong>
 				</p>
 			</td>
 			<td border="1px">
 				<p align="center">
 					<strong>Requirement #</strong>
 				</p>
 			</td>
 			<td border="1px">
 				<p align="center">
 					<strong>Requirement</strong>
 				</p>
 			</td>
 			<td border="1px">
 				<p align="center">
 					<strong>Expected Result</strong>
 				</p>
 			</td>
 			<td border="1px">
 				<p align="center">
 					<strong>Additional Information</strong>
 				</p>
 			</td>
 		</tr>
 		<tr>
 			<td border="1px">
 				<p>
 					Results
 				</p>
 			</td>
 			<td border="1px">
 				<p>
 					1.1
 				</p>
 			</td>
 			<td border="1px">
 				<p>
 					Base rate
 				</p>
 			</td>
 			<td border="1px">
 				<p>
 					The base rate (daily or weekly) is displayed for each rate
 				</p>
 			</td>
 			<td border="1px">
 				<ul type="disc">
 					<li>
 						getResultsV3
 					</li>
 					<li>
 						Returned under the "base_rate" &amp; "base_type" nodes
 						under the "price_details" node
 					</li>
 				</ul>
 			</td>
 		</tr>
 		<tr>
 			<td border="1px">
 				<p>
 					Results
 				</p>
 			</td>
 			<td border="1px">
 				<p>
 					1.2
 				</p>
 			</td>
 			<td border="1px">
 				<p>
 					Total price
 				</p>
 			</td>
 			<td border="1px">
 				<p>
 					The total price is displayed for each rate
 				</p>
 			</td>
 			<td border="1px">
 				<ul type="disc">
 					<li>
 						getResultsV3
 					</li>
 					<li>
 						Returned under the "total_price" node within the
 						"price_details" node
 					</li>
 				</ul>
 			</td>
 		</tr>
 		<tr>
 			<td border="1px">
 				<p>
 					Results
 				</p>
 			</td>
 			<td border="1px">
 				<p>
 					1.3
 				</p>
 			</td>
 			<td border="1px">
 				<p>
 					Currency
 				</p>
 			</td>
 			<td border="1px">
 				<p>
 					The correct currency, currency code, &amp; currency symbol
 					are displayed
 				</p>
 			</td>
 			<td border="1px">
 				<ul type="disc">
 					<li>
 						getResultsV3
 					</li>
 					<li>
 						Returned under the "display_currency" &amp;
 						"display_symbol" nodes within the "price_details" node
 					</li>
 				</ul>
 			</td>
 		</tr>
 		<tr>
 			<td border="1px">
 				<p>
 					Results
 				</p>
 			</td>
 			<td border="1px">
 				<p>
 					1.4
 				</p>
 			</td>
 			<td border="1px">
 				<p>
 					Rental Company
 				</p>
 			</td>
 			<td border="1px">
 				<p>
 					The rental company name/logo must be displayed for each
 					rate
 				</p>
 			</td>
 			<td border="1px">
 				<ul type="disc">
 					<li>
 						getResultsV3
 					</li>
 					<li>
 						The rental company is returned under the "name" node
 						within the "partner" node
 					</li>
 					<li>
 						The logo is returned under the "logo" node
 					</li>
 				</ul>
 			</td>
 		</tr>
 		<tr>
 			<td border="1px">
 				<p>
 					Results
 				</p>
 			</td>
 			<td border="1px">
 				<p>
 					1.5
 				</p>
 			</td>
 			<td border="1px">
 				<p>
 					Pickup/Dropoff information
 				</p>
 			</td>
 			<td border="1px">
 			</td>
 			<td border="1px">
 				<ul type="disc">
 					<li>
 						getResultsV3
 					</li>
 					<li>
 						The pickup location is returned under the "location"
 						node within the "pickup" node
 					</li>
 					<li>
 						The dropoff location is returned under the "location"
 						node within the "dropoff" node
 					</li>
 				</ul>
 			</td>
 		</tr>
 		<tr>
 			<td border="1px">
 				<p>
 					Results
 				</p>
 			</td>
 			<td border="1px">
 				<p>
 					1.6
 				</p>
 			</td>
 			<td border="1px">
 				<p>
 					Car type
 				</p>
 			</td>
 			<td border="1px">
 				<p>
 					The car type must be displayed for each rate
 				</p>
 			</td>
 			<td border="1px">
 				<ul type="disc">
 					<li>
 						getResultsV3
 					</li>
 					<li>
 						Returned under the "description" node under the "car"
 						node
 					</li>
 				</ul>
 			</td>
 		</tr>
 		<tr>
 			<td border="1px">
 				<p>
 					Results
 				</p>
 			</td>
 			<td border="1px">
 				<p>
 					1.7
 				</p>
 			</td>
 			<td border="1px">
 				<p>
 					Car amenities
 				</p>
 			</td>
 			<td border="1px">
 				<p>
 					The amenities must be displayed for each rate
 				</p>
 			</td>
 			<td border="1px">
 				<ul type="disc">
 					<li>
 						getResultsV3
 					</li>
 					<li>
 						The amount of passengers is returned under the
 						"passengers" node within the "car" node
 					</li>
 					<li>
 						The amount of suitcases is returned under the "bags'
 						node within the "car" node
 					</li>
 					<li>
 						The transmission information is returned under the
 						"automatic_transmission" node within the "car" node
 					</li>
 					<ul type="circle">
 						<li>
 							"yes" = automatic transmission
 						</li>
 						<li>
 							"no" = manual transmission
 						</li>
 					</ul>
 					<li>
 						The air-conditioning information is returned under the
 						"air_conditioning" node within the "car" node
 					</li>
 					<ul type="circle">
 						<li>
 							"yes" = air-conditioning
 						</li>
 						<li>
 							"no" = no air-conditioning
 						</li>
 					</ul>
 					<li>
 						The mileage information is returned under the "mileage"
 						node within the "price_details" node
 					</li>
 					<ul type="circle">
 						<li>
 							"true" = unlimited mileage
 						</li>
 						<li>
 							"false" = limited mileage
 						</li>
 					</ul>
 				</ul>
 			</td>
 		</tr>
 		<tr>
 			<td border="1px">
 				<p>
 					Results
 				</p>
 			</td>
 			<td border="1px">
 				<p>
 					1.8
 				</p>
 			</td>
 			<td border="1px">
 				<p>
 					Search box
 				</p>
 			</td>
 			<td border="1px">
 				<p>
 					A search box is accessible on the Results page
 				</p>
 			</td>
 			<td border="1px">
 				<ul type="disc">
 					<li>
 						getCarAutoComplete
 					</li>
 				</ul>
 			</td>
 		</tr>
 		<tr>
 			<td border="1px">
 				<p>
 					Contract
 				</p>
 			</td>
 			<td border="1px">
 				<p>
 					2.1
 				</p>
 			</td>
 			<td border="1px">
 				<p>
 					Policy information
 				</p>
 			</td>
 			<td border="1px">
 				<ul type="disc">
 					<li>
 						Credit card disclaimer
 					</li>
 					<li>
 						Acceptable forms of payment link
 					</li>
 					<li>
 						Under 25? link
 					</li>
 					<li>
 						Terms &amp; Conditions
 					</li>
 					<li>
 						Privacy Policy
 					</li>
 				</ul>
 			</td>
 			<td border="1px">
 				<ul type="disc">
 					<li>
 						getPolicy.Car
 					</li>
 					<li>
 						getContractRequest
 					</li>
 					<ul type="circle">
 						<li>
 							Returned under the "car_policy_data" node.
 						</li>
 					</ul>
 				</ul>
 			</td>
 		</tr>
 		<tr>
 			<td border="1px">
 				<p>
 					Contract
 				</p>
 			</td>
 			<td border="1px">
 				<p>
 					2.2
 				</p>
 			</td>
 			<td border="1px">
 				<p>
 					Pickup location
 				</p>
 			</td>
 			<td border="1px">
 				<ul type="disc">
 					<li>
 						The selected pickup location must be displayed
 					</li>
 					<li>
 						Day of the week must be included
 					</li>
 					<li>
 						Time of day must be included
 					</li>
 					<li>
 						The full address must be displayed
 					</li>
 				</ul>
 			</td>
 			<td border="1px">
 				<ul type="disc">
 					<li>
 						getContractRequest
 					</li>
 					<li>
 						Returned under the "pickup_airport_name" and subsequent
 						address/location nodes for airport locations
 					</li>
 					<li>
 						Returned under the "pickup_address" node and subsequent
 						address/location nodes for off-airport (city) locations
 					</li>
 				</ul>
 			</td>
 		</tr>
 		<tr>
 			<td border="1px">
 				<p>
 					Contract
 				</p>
 			</td>
 			<td border="1px">
 				<p>
 					2.3
 				</p>
 			</td>
 			<td border="1px">
 				<p>
 					Dropoff location (if different from pickup)
 				</p>
 			</td>
 			<td border="1px">
 				<ul type="disc">
 					<li>
 						The selected dropoff location must be displayed
 					</li>
 					<li>
 						Day of the week must be included
 					</li>
 					<li>
 						Time of day must be included
 					</li>
 					<li>
 						The full address must be displayed
 					</li>
 				</ul>
 			</td>
 			<td border="1px">
 				<ul type="disc">
 					<li>
 						getContractRequest
 					</li>
 					<li>
 						Returned under the "dropoff_airport_name" and
 						subsequent address/location nodes for airport locations
 					</li>
 					<li>
 						Returned under the "dropoff_address" node and
 						subsequent address/location nodes for off-airport
 						(city) locations
 					</li>
 				</ul>
 			</td>
 		</tr>
 		<tr>
 			<td border="1px">
 				<p>
 					Contract
 				</p>
 			</td>
 			<td border="1px">
 				<p>
 					2.4
 				</p>
 			</td>
 			<td border="1px">
 				<p>
 					Counter directions/airport terminal information
 				</p>
 			</td>
 			<td border="1px">
 				<p>
 					The data returned must be displayed; it can be hidden
 					behind a click
 				</p>
 			</td>
 			<td border="1px">
 				<ul type="disc">
 					<li>
 						getContractRequest
 					</li>
 					<li>
 						Returned under the "shuttle_text" node.
 					</li>
 				</ul>
 			</td>
 		</tr>
 		<tr>
 			<td border="1px">
 				<p>
 					Contract
 				</p>
 			</td>
 			<td border="1px">
 				<p>
 					2.5
 				</p>
 			</td>
 			<td border="1px">
 				<p>
 					Hours of operation
 				</p>
 			</td>
 			<td border="1px">
 				<p>
 					The rental company's hours of operations are displayed
 				</p>
 			</td>
 			<td border="1px">
 				<ul type="disc">
 					<li>
 						getContractRequest
 					</li>
 					<li>
 						Returned under the "open" &amp; "close" nodes within
 						the "pickup_hours_data" node for pickup locations.
 					</li>
 					<li>
 						Returned under the "open" &amp; "close" nodes within
 						the "dropoff_hours_data" node for dropoff locations (if
 						different than pickup).
 					</li>
 				</ul>
 			</td>
 		</tr>
 		<tr>
 			<td border="1px">
 				<p>
 					Contract
 				</p>
 			</td>
 			<td border="1px">
 				<p>
 					2.6
 				</p>
 			</td>
 			<td border="1px">
 				<p>
 					Rental company
 				</p>
 			</td>
 			<td border="1px">
 				<p>
 					The rental company name/logo is displayed
 				</p>
 			</td>
 			<td border="1px">
 				<ul type="disc">
 					<li>
 						getContractRequest
 					</li>
 					<li>
 						The rental company is returned under the "partner_name"
 						node
 					</li>
 					<li>
 						The logo is returned under the "partner_logo" node
 					</li>
 				</ul>
 			</td>
 		</tr>
 		<tr>
 			<td border="1px">
 				<p>
 					Contract
 				</p>
 			</td>
 			<td border="1px">
 				<p>
 					2.7
 				</p>
 			</td>
 			<td border="1px">
 				<p>
 					Car type
 				</p>
 			</td>
 			<td border="1px">
 				<p>
 					The car type is displayed
 				</p>
 			</td>
 			<td border="1px">
 				<ul type="disc">
 					<li>
 						getContractRequest
 					</li>
 					<li>
 						Returned under the "description" node within the
 						"car_info" node
 					</li>
 				</ul>
 			</td>
 		</tr>
 		<tr>
 			<td border="1px">
 				<p>
 					Contract
 				</p>
 			</td>
 			<td border="1px">
 				<p>
 					2.8
 				</p>
 			</td>
 			<td border="1px">
 				<p>
 					Car amenities
 				</p>
 			</td>
 			<td border="1px">
 				<p>
 					The amenities are displayed
 				</p>
 			</td>
 			<td border="1px">
 				<ul type="disc">
 					<li>
 						getContractRequest
 					</li>
 					<li>
 						The amount of passengers is returned under the
 						"passengers" node within the "car_info" node
 					</li>
 					<li>
 						The amount of suitcases is returned under the "bags'
 						node within the "car" node
 					</li>
 					<li>
 						The transmission information is returned under the
 						"automatic_transmission" node within the "car" node
 					</li>
 					<ul type="circle">
 						<li>
 							"yes" = automatic transmission
 						</li>
 						<li>
 							"no" = manual transmission
 						</li>
 					</ul>
 					<li>
 						The air-conditioning information is returned under the
 						"air_conditioning" node within the "car" node
 					</li>
 					<ul type="circle">
 						<li>
 							"yes" = air-conditioning
 						</li>
 						<li>
 							"no" = no air-conditioning
 						</li>
 					</ul>
 				</ul>
 			</td>
 		</tr>
 		<tr>
 			<td border="1px">
 				<p>
 					Contract
 				</p>
 			</td>
 			<td border="1px">
 				<p>
 					2.9
 				</p>
 			</td>
 			<td border="1px">
 				<p>
 					Mileage
 				</p>
 			</td>
 			<td border="1px">
 				<p>
 					The mileage is displayed
 				</p>
 			</td>
 			<td border="1px">
 				<ul type="disc">
 					<li>
 						getContractRequest
 					</li>
 					<li>
 						The mileage information is returned under the "mileage"
 						node within the "price_details" node
 					</li>
 					<ul type="circle">
 						<li>
 							"unlimited" = unlimited mileage
 						</li>
 						<li>
 							"limited" = limited mileage
 						</li>
 					</ul>
 				</ul>
 			</td>
 		</tr>
 		<tr>
 			<td border="1px">
 				<p>
 					Contract
 				</p>
 			</td>
 			<td border="1px">
 				<p>
 					2.1.0
 				</p>
 			</td>
 			<td border="1px">
 				<p>
 					Free cancellation verbiage for post-paid rates
 				</p>
 			</td>
 			<td border="1px">
 				<p>
 					Verbiage or banner is displayed for post paid rates
 				</p>
 			</td>
 			<td border="1px">
 				<p>
 					Front end change for the partner
 				</p>
 			</td>
 		</tr>
 		<tr>
 			<td border="1px">
 				<p>
 					Contract
 				</p>
 			</td>
 			<td border="1px">
 				<p>
 					2.1.1
 				</p>
 			</td>
 			<td border="1px">
 				<p>
 					Summary of Charges
 				</p>
 			</td>
 			<td border="1px">
 				<ul type="disc">
 					<li>
 						The base rate is displayed
 					</li>
 					<li>
 						The number of days/weeks is displayed
 					</li>
 					<li>
 						Extra day rate is displayed when returned
 					</li>
 					<li>
 						The Taxes and Fees is displayed
 					</li>
 					<ul type="circle">
 						<li>
 							Not displayed for prepaid rates, lumped into total
 						</li>
 						<li>
 							"Taxes and Fees" is hyperlinked to a light box that
 							displays additional verbiage
 						</li>
 					</ul>
 					<li>
 						The total is displayed
 					</li>
 					<ul type="circle">
 						<li>
 							Post paid rates display the amount due at counter
 						</li>
 						<li>
 							Prepaid rates display the amount due now
 						</li>
 					</ul>
 					<li>
 						The price disclaimer is displayed
 					</li>
 				</ul>
 			</td>
 			<td border="1px">
 				<ul type="disc">
 					<li>
 						getContractRequest
 					</li>
 					<li>
 						The base rate is returned under the "display_price"
 						node within the "pricing" node.
 					</li>
 					<li>
 						The correct label as well as number of days/weeks are
 						returned under the "type" &amp; "factor" nodes within
 						the "pricing" node.
 					</li>
 					<ul type="circle">
 						<li>
 							Extra day rate is returned under the "type" &amp;
 							"factor" nodes within the 2nd "breakdown" cluster
 						</li>
 						<ul type="square">
 							<li>
 								type = "Extra Day"
 							</li>
 							<li>
 								factor = amount of extra days
 							</li>
 						</ul>
 					</ul>
 					<li>
 						The Taxes and Fees are returned under the
 						"source_total" node within the "taxes_and_fees" node.
 					</li>
 					<ul type="circle">
 						<li>
 							"Taxes and Fees" must be a hyperlink that displays
 							additional verbiage that is returned under the
 							"breakdown_data" node within the "taxes_and_fees"
 							node.
 						</li>
 					</ul>
 					<li>
 						The correct label and total are returned under the
 						"total_label".
 					</li>
 					<ul type="circle">
 						<li>
 							The total will returned under the
 							"prepaid_at_counter" for post paid bookings
 						</li>
 						<li>
 							The total will returned under the
 							"prepaid_at_booking" node for prepaid bookings.
 						</li>
 					</ul>
 					<li>
 						If wanting to display a different currency other than
 						the source (currency used to book), use the "display"
 						nodes instead of the "source" nodes.
 					</li>
 					<li>
 						The Price Disclaimer is a front end change for the
 						partner
 					</li>
 				</ul>
 			</td>
 		</tr>
 		<tr>
 			<td border="1px">
 				<p>
 					Contract
 				</p>
 			</td>
 			<td border="1px">
 				<p>
 					2.1.2
 				</p>
 			</td>
 			<td border="1px">
 				<p>
 					Important Information
 				</p>
 			</td>
 			<td border="1px">
 				<ul type="disc">
 					<li>
 						The Important Information must be displayed for the
 						selected rate
 					</li>
 					<li>
 						Each inventory type has a different set of verbiage
 					</li>
 				</ul>
 			</td>
 			<td border="1px">
 				<ul type="disc">
 					<li>
 						getContractRequest
 					</li>
 					<li>
 						Returned under the "important_information" node, each
 						cluster that returns "mandatory" within the "display"
 						node must be displayed
 					</li>
 					<li>
 						#START_ANCHOR_PARTNERPAYMENTOPTIONS#partner payment
 						options#END_ANCHOR_PARTNERPAYMENTOPTIONS# pulls the
 						"car_policy_data" node.
 					</li>
 					<ul type="circle">
 						<li>
 							"partner payment options" is a hyperlink
 						</li>
 					</ul>
 					<li>
 						#START_ANCHOR_RENTALPOLICYANDRULES#rental policy and
 						rules information#END_ANCHOR_RENTALPOLICYANDRULES#
 						pulls the "car_policy_data" node.
 					</li>
 					<ul type="circle">
 						<li>
 							"rental policy and rules information" is a
 							hyperlink
 						</li>
 					</ul>
 					<li>
 						#START_ANCHOR_TERMSANDCONDITIONS#terms and
 						conditions#END_ANCHOR_TERMSANDCONDITIONS# pulls the
 					</li>
 					<ul type="circle">
 						<li>
 							"terms and conditions" is a hyperlink
 						</li>
 					</ul>
 					<li>
 						#START_ANCHOR_PRIVACYPOLICY#privacy
 						policy#END_ANCHOR_PRIVACYPOLICY# pulls the
 					</li>
 					<ul type="circle">
 						<li>
 							"privacy policy" is a hyperlink
 						</li>
 					</ul>
 					<li>
 						#START_ANCHOR_PREPAID#Pay Now#END_ANCHOR_PREPAID# pulls
 						the
 					</li>
 					<ul type="circle">
 						<li>
 							"Pay Now" is a hyperlink
 						</li>
 					</ul>
 					<li>
 						#START_ANCHOR_PREPAID#Cancellation
 						fees#END_ANCHOR_PREPAID# pulls the
 					</li>
 					<ul type="circle">
 						<li>
 							"Cancellation fees" is a hyperlink
 						</li>
 					</ul>
 				</ul>
 			</td>
 		</tr>
 		<tr>
 			<td border="1px">
 				<p>
 					Success
 				</p>
 			</td>
 			<td border="1px">
 				<p>
 					3.1
 				</p>
 			</td>
 			<td border="1px">
 				<p>
 					Booking status
 				</p>
 			</td>
 			<td border="1px">
 				<p>
 					The status of the reservation is displayed
 				</p>
 			</td>
 			<td border="1px">
 				<ul type="disc">
 					<li>
 						getCarLookUp
 					</li>
 					<li>
 						Returned under the "status" node
 					</li>
 				</ul>
 			</td>
 		</tr>
 		<tr>
 			<td border="1px">
 				<p>
 					Success
 				</p>
 			</td>
 			<td border="1px">
 				<p>
 					3.2
 				</p>
 			</td>
 			<td border="1px">
 				<p>
 					Trip Id
 				</p>
 			</td>
 			<td border="1px">
 				<p>
 					The Trip Id that is returned is displayed
 				</p>
 			</td>
 			<td border="1px">
 				<ul type="disc">
 					<li>
 						getCarLookUp
 					</li>
 					<li>
 						Returned under the "booking_id" node
 					</li>
 				</ul>
 			</td>
 		</tr>
 		<tr>
 			<td border="1px">
 				<p>
 					Success
 				</p>
 			</td>
 			<td border="1px">
 				<p>
 					3.3
 				</p>
 			</td>
 			<td border="1px">
 				<p>
 					Rental company confirmation number
 				</p>
 			</td>
 			<td border="1px">
 				<p>
 					The rental company confirmation number that is returned is
 					displayed
 				</p>
 			</td>
 			<td border="1px">
 				<ul type="disc">
 					<li>
 						getCarLookUp
 					</li>
 					<li>
 						Returned under the "partner_confirmation_number" node
 					</li>
 				</ul>
 			</td>
 		</tr>
 		<tr>
 			<td border="1px">
 				<p>
 					Success
 				</p>
 			</td>
 			<td border="1px">
 				<p>
 					3.4
 				</p>
 			</td>
 			<td border="1px">
 				<p>
 					Map to pickup location
 				</p>
 			</td>
 			<td border="1px">
 				<p>
 					Link to map showing the pickup location is displayed
 				</p>
 			</td>
 			<td border="1px">
 				<ul type="disc">
 					<li>
 						getCarLookUp
 					</li>
 				</ul>
 			</td>
 		</tr>
 		<tr>
 			<td border="1px">
 				<p>
 					Success
 				</p>
 			</td>
 			<td border="1px">
 				<p>
 					3.5
 				</p>
 			</td>
 			<td border="1px">
 				<p>
 					Link to change/cancel reservation
 				</p>
 			</td>
 			<td border="1px">
 				<p>
 					The link can perform the look up or it can lead to a page
 					where the user can look up and make amendments to their
 					reservation
 				</p>
 			</td>
 			<td border="1px">
 				<ul type="disc">
 					<li>
 						getCancelRequest
 					</li>
 				</ul>
 			</td>
 		</tr>
 		<tr>
 			<td border="1px">
 				<p>
 					Success
 				</p>
 			</td>
 			<td border="1px">
 				<p>
 					3.6
 				</p>
 			</td>
 			<td border="1px">
 				<p>
 					Links to print or email itinerary
 				</p>
 			</td>
 			<td border="1px">
 				<p>
 					The links are displayed clearly
 				</p>
 			</td>
 			<td border="1px">
 				<ul type="disc">
 					<li>
 						getResendItinerary
 					</li>
 				</ul>
 			</td>
 		</tr>
 		<tr>
 			<td border="1px">
 				<p>
 					Success
 				</p>
 			</td>
 			<td border="1px">
 				<p>
 					3.7
 				</p>
 			</td>
 			<td border="1px">
 				<p>
 					Pickup location
 				</p>
 			</td>
 			<td border="1px">
 				<ul type="disc">
 					<li>
 						The selected pickup location must be displayed
 					</li>
 					<li>
 						Day of the week must be included
 					</li>
 					<li>
 						Time of day must be included
 					</li>
 					<li>
 						The full address must be displayed
 					</li>
 				</ul>
 			</td>
 			<td border="1px">
 				<ul type="disc">
 					<li>
 						getCarLookUp
 					</li>
 					<li>
 						Returned under the "pickup_name" and subsequent
 						address/location nodes
 					</li>
 				</ul>
 			</td>
 		</tr>
 		<tr>
 			<td border="1px">
 				<p>
 					Success
 				</p>
 			</td>
 			<td border="1px">
 				<p>
 					3.8
 				</p>
 			</td>
 			<td border="1px">
 				<p>
 					Dropoff location (if different from pickup)
 				</p>
 			</td>
 			<td border="1px">
 				<ul type="disc">
 					<li>
 						The selected dropoff location must be displayed
 					</li>
 					<li>
 						Day of the week must be included
 					</li>
 					<li>
 						Time of day must be included
 					</li>
 					<li>
 						The full address must be displayed
 					</li>
 				</ul>
 			</td>
 			<td border="1px">
 				<ul type="disc">
 					<li>
 						getCarLookUp
 					</li>
 					<li>
 						Returned under the "dropoff_name" and subsequent
 						address/location nodes
 					</li>
 				</ul>
 			</td>
 		</tr>
 		<tr>
 			<td border="1px">
 				<p>
 					Success
 				</p>
 			</td>
 			<td border="1px">
 				<p>
 					3.9
 				</p>
 			</td>
 			<td border="1px">
 				<p>
 					Counter directions/airport terminal information
 				</p>
 			</td>
 			<td border="1px">
 				<p>
 					The data returned is displayed; it can be hidden behind a
 					click
 				</p>
 			</td>
 			<td border="1px">
 				<ul type="disc">
 					<li>
 						getCarLookUp
 					</li>
 					<li>
 						Returned under the "shuttle_text" node.
 					</li>
 				</ul>
 			</td>
 		</tr>
 		<tr>
 			<td border="1px">
 				<p>
 					Success
 				</p>
 			</td>
 			<td border="1px">
 				<p>
 					3.1.0
 				</p>
 			</td>
 			<td border="1px">
 				<p>
 					Hours of operation
 				</p>
 			</td>
 			<td border="1px">
 				<p>
 					The rental company's hours of operations are displayed
 				</p>
 			</td>
 			<td border="1px">
 				<ul type="disc">
 					<li>
 						getCarLookUp
 					</li>
 					<li>
 						Returned under the "open" &amp; "close" nodes within
 						the "pickup_hours_data" node for pickup locations.
 					</li>
 					<li>
 						Returned under the "open" &amp; "close" nodes within
 						the "dropoff_hours_data" node for dropoff locations (if
 						different than pickup).
 					</li>
 				</ul>
 			</td>
 		</tr>
 		<tr>
 			<td border="1px">
 				<p>
 					Success
 				</p>
 			</td>
 			<td border="1px">
 				<p>
 					3.1.1
 				</p>
 			</td>
 			<td border="1px">
 				<p>
 					Rental company
 				</p>
 			</td>
 			<td border="1px">
 				<p>
 					The rental company name/logo is displayed
 				</p>
 			</td>
 			<td border="1px">
 				<ul type="disc">
 					<li>
 						getCarLookUp
 					</li>
 					<li>
 						The rental company is returned under the "partner_name"
 						node
 					</li>
 					<li>
 						The logo is returned under the "partner_logo" node
 					</li>
 				</ul>
 			</td>
 		</tr>
 		<tr>
 			<td border="1px">
 				<p>
 					Success
 				</p>
 			</td>
 			<td border="1px">
 				<p>
 					3.1.2
 				</p>
 			</td>
 			<td border="1px">
 				<p>
 					Car type
 				</p>
 			</td>
 			<td border="1px">
 				<p>
 					The car type is displayed
 				</p>
 			</td>
 			<td border="1px">
 				<ul type="disc">
 					<li>
 						getCarLookUp
 					</li>
 					<li>
 						Returned under the "description" node within the
 						"car_info" node
 					</li>
 				</ul>
 			</td>
 		</tr>
 		<tr>
 			<td border="1px">
 				<p>
 					Success
 				</p>
 			</td>
 			<td border="1px">
 				<p>
 					3.1.3
 				</p>
 			</td>
 			<td border="1px">
 				<p>
 					Summary of Charges
 				</p>
 			</td>
 			<td border="1px">
 				<ul type="disc">
 					<li>
 						The base rate is displayed
 					</li>
 					<li>
 						The number of days/weeks is displayed
 					</li>
 					<li>
 						Extra day rate is displayed when returned
 					</li>
 					<li>
 						The Taxes and Fees is displayed
 					</li>
 					<ul type="circle">
 						<li>
 							Not displayed for prepaid rates, lumped into total
 						</li>
 						<li>
 							"Taxes and Fees" is hyperlinked to a light box that
 							displays additional verbiage
 						</li>
 					</ul>
 					<li>
 						The total is displayed
 					</li>
 					<ul type="circle">
 						<li>
 							Post paid rates display the amount due at counter
 						</li>
 						<li>
 							Prepaid rates display the amount due now
 						</li>
 					</ul>
 					<li>
 						The price disclaimer is displayed
 					</li>
 				</ul>
 			</td>
 			<td border="1px">
 				<ul type="disc">
 					<li>
 						getCarLookUp
 					</li>
 					<li>
 						The base rate is returned under the "display_price"
 						node within the "pricing" node.
 					</li>
 					<li>
 						The correct label as well as number of days/weeks are
 						returned under the "type" &amp; "factor" nodes within
 						the "pricing" node.
 					</li>
 					<ul type="circle">
 						<li>
 							Extra day rate is returned under the "type" &amp;
 							"factor" nodes within the 2nd "breakdown" cluster
 						</li>
 					</ul>
 				</ul>
 				<p>
 					o
 				</p>
 				<ul type="disc">
 					<ul type="circle">
 						<ul type="square">
 							<li>
 								type = "Extra Day"
 							</li>
 							<li>
 								factor = amount of extra days
 							</li>
 						</ul>
 					</ul>
 					<li>
 						The Taxes and Fees are returned under the
 						"source_total" node within the "taxes_and_fees" node.
 					</li>
 					<ul type="circle">
 						<li>
 							"Taxes and Fees" must be a hyperlink that displays
 							additional verbiage that is returned under the
 							"breakdown_data" node within the "taxes_and_fees"
 							node.
 						</li>
 					</ul>
 					<li>
 						The correct label and total are returned under the
 						"total_label".
 					</li>
 					<ul type="circle">
 						<li>
 							The total will returned under the
 							"prepaid_at_counter" for post paid bookings
 						</li>
 						<li>
 							The total will returned under the
 							"prepaid_at_booking" node for prepaid bookings.
 						</li>
 					</ul>
 					<li>
 						If wanting to display a different currency other than
 						the source (currency used to book), use the "display"
 						nodes instead of the "source" nodes.
 					</li>
 					<li>
 						The Price Disclaimer is a front end change for the
 						partner
 					</li>
 				</ul>
 			</td>
 		</tr>
 		<tr>
 			<td border="1px">
 				<p>
 					Success
 				</p>
 			</td>
 			<td border="1px">
 				<p>
 					3.1.4
 				</p>
 			</td>
 			<td border="1px">
 				<p>
 					Important Information
 				</p>
 			</td>
 			<td border="1px">
 				<ul type="disc">
 					<li>
 						The Important Information must be displayed for the
 						selected rate
 					</li>
 					<li>
 						Each inventory type has a different set of verbiage
 					</li>
 				</ul>
 			</td>
 			<td border="1px">
 				<ul type="disc">
 					<li>
 						getCarLookUp
 					</li>
 					<li>
 						Returned under the "important_information" node, each
 						cluster that returns "mandatory" within the "display"
 						node must be displayed
 					</li>
 					<li>
 						#START_ANCHOR_PARTNERPAYMENTOPTIONS#partner payment
 						options#END_ANCHOR_PARTNERPAYMENTOPTIONS# pulls the
 						"car_policy_data" node.
 					</li>
 					<ul type="circle">
 						<li>
 							"partner payment options" is a hyperlink
 						</li>
 					</ul>
 					<li>
 						#START_ANCHOR_RENTALPOLICYANDRULES#rental policy and
 						rules information#END_ANCHOR_RENTALPOLICYANDRULES#
 						pulls the "car_policy_data" node.
 					</li>
 					<ul type="circle">
 						<li>
 							"rental policy and rules information" is a
 							hyperlink
 						</li>
 					</ul>
 					<li>
 						#START_ANCHOR_TERMSANDCONDITIONS#terms and
 						conditions#END_ANCHOR_TERMSANDCONDITIONS# pulls the
 					</li>
 					<ul type="circle">
 						<li>
 							"terms and conditions" is a hyperlink
 						</li>
 					</ul>
 					<li>
 						#START_ANCHOR_PRIVACYPOLICY#privacy
 						policy#END_ANCHOR_PRIVACYPOLICY# pulls the
 					</li>
 					<ul type="circle">
 						<li>
 							"privacy policy" is a hyperlink
 						</li>
 					</ul>
 					<li>
 						#START_ANCHOR_PREPAID#Pay Now#END_ANCHOR_PREPAID# pulls
 						the
 					</li>
 					<ul type="circle">
 						<li>
 							"Pay Now" is a hyperlink
 						</li>
 					</ul>
 					<li>
 						#START_ANCHOR_PREPAID#Cancellation
 						fees#END_ANCHOR_PREPAID# pulls the
 					</li>
 					<ul type="circle">
 						<li>
 							"Cancellation fees" is a hyperlink
 						</li>
 					</ul>
 				</ul>
 			</td>
 		</tr>
 		<tr>
 			<td border="1px">
 				<p>
 					Success
 				</p>
 			</td>
 			<td border="1px">
 				<p>
 					3.1.5
 				</p>
 			</td>
 			<td border="1px">
 				<p>
 					Customer Service phone number
 				</p>
 			</td>
 			<td border="1px">
 				<ul type="disc">
 					<li>
 						The correct Customer Service number is displayed
 					</li>
 					<li>
 						The rental company's phone number is displayed
 					</li>
 				</ul>
 			</td>
 			<td border="1px">
 				<ul type="disc">
 					<li>
 						getCarLookUp
 					</li>
 				</ul>
 			</td>
 		</tr>
 		<tr>
 			<td border="1px">
 				<p>
 					Success
 				</p>
 			</td>
 			<td border="1px">
 				<p>
 					3.1.6
 				</p>
 			</td>
 			<td border="1px">
 				<p>
 					Driver name
 				</p>
 			</td>
 			<td border="1px">
 				<p>
 					The driver name entered on the Contract page is displayed
 				</p>
 			</td>
 			<td border="1px">
 				<ul type="disc">
 					<li>
 						getCarLookUp
 					</li>
 				</ul>
 			</td>
 		</tr>
 		<tr>
 			<td border="1px">
 				<p>
 					Conf. Email
 				</p>
 			</td>
 			<td border="1px">
 				<p>
 					4.1
 				</p>
 			</td>
 			<td border="1px">
 				<p>
 					Booking status
 				</p>
 			</td>
 			<td border="1px">
 				<p>
 					The status of the reservation is displayed
 				</p>
 			</td>
 			<td border="1px">
 			</td>
 		</tr>
 		<tr>
 			<td border="1px">
 				<p>
 					Conf. Email
 				</p>
 			</td>
 			<td border="1px">
 				<p>
 					4.2
 				</p>
 			</td>
 			<td border="1px">
 				<p>
 					Trip Id
 				</p>
 			</td>
 			<td border="1px">
 				<p>
 					The Trip Id that is returned is displayed
 				</p>
 			</td>
 			<td border="1px">
 			</td>
 		</tr>
 		<tr>
 			<td border="1px">
 				<p>
 					Conf. Email
 				</p>
 			</td>
 			<td border="1px">
 				<p>
 					4.3
 				</p>
 			</td>
 			<td border="1px">
 				<p>
 					Rental company confirmation number
 				</p>
 			</td>
 			<td border="1px">
 				<p>
 					The rental company confirmation number that is returned is
 					displayed
 				</p>
 			</td>
 			<td border="1px">
 			</td>
 		</tr>
 		<tr>
 			<td border="1px">
 				<p>
 					Conf. Email
 				</p>
 			</td>
 			<td border="1px">
 				<p>
 					4.4
 				</p>
 			</td>
 			<td border="1px">
 				<p>
 					Driver name
 				</p>
 			</td>
 			<td border="1px">
 				<p>
 					The driver name entered on the Contract page is displayed
 				</p>
 			</td>
 			<td border="1px">
 			</td>
 		</tr>
 		<tr>
 			<td border="1px">
 				<p>
 					Conf. Email
 				</p>
 			</td>
 			<td border="1px">
 				<p>
 					4.5
 				</p>
 			</td>
 			<td border="1px">
 				<p>
 					Summary of Charges
 				</p>
 			</td>
 			<td border="1px">
 				<ul type="disc">
 					<li>
 						The base rate is displayed
 					</li>
 					<li>
 						The number of days/weeks is displayed
 					</li>
 					<li>
 						Extra day rate is displayed when returned
 					</li>
 					<li>
 						The Taxes and Fees is displayed
 					</li>
 					<ul type="circle">
 						<li>
 							Not displayed for prepaid rates, lumped into total
 						</li>
 						<li>
 							"Taxes and Fees" is hyperlinked to a light box that
 							displays additional verbiage
 						</li>
 					</ul>
 					<li>
 						The total is displayed
 					</li>
 					<ul type="circle">
 						<li>
 							Post paid rates display the amount due at counter
 						</li>
 						<li>
 							Prepaid rates display the amount due now
 						</li>
 					</ul>
 					<li>
 						The price disclaimer is displayed
 					</li>
 				</ul>
 			</td>
 			<td border="1px">
 			</td>
 		</tr>
 		<tr>
 			<td border="1px">
 				<p>
 					Conf. Email
 				</p>
 			</td>
 			<td border="1px">
 				<p>
 					4.6
 				</p>
 			</td>
 			<td border="1px">
 				<p>
 					Rental company
 				</p>
 			</td>
 			<td border="1px">
 				<p>
 					The rental company name/logo is displayed
 				</p>
 			</td>
 			<td border="1px">
 			</td>
 		</tr>
 		<tr>
 			<td border="1px">
 				<p>
 					Conf. Email
 				</p>
 			</td>
 			<td border="1px">
 				<p>
 					4.7
 				</p>
 			</td>
 			<td border="1px">
 				<p>
 					Car type
 				</p>
 			</td>
 			<td border="1px">
 				<p>
 					The car type is displayed
 				</p>
 			</td>
 			<td border="1px">
 			</td>
 		</tr>
 		<tr>
 			<td border="1px">
 				<p>
 					Conf. Email
 				</p>
 			</td>
 			<td border="1px">
 				<p>
 					4.8
 				</p>
 			</td>
 			<td border="1px">
 				<p>
 					Car amenities
 				</p>
 			</td>
 			<td border="1px">
 				<p>
 					The amenities are displayed
 				</p>
 			</td>
 			<td border="1px">
 			</td>
 		</tr>
 		<tr>
 			<td border="1px">
 				<p>
 					Conf. Email
 				</p>
 			</td>
 			<td border="1px">
 				<p>
 					4.9
 				</p>
 			</td>
 			<td border="1px">
 				<p>
 					Pickup location
 				</p>
 			</td>
 			<td border="1px">
 				<ul type="disc">
 					<li>
 						The selected pickup location must be displayed
 					</li>
 					<li>
 						Day of the week must be included
 					</li>
 					<li>
 						Time of day must be included
 					</li>
 					<li>
 						The full address must be displayed
 					</li>
 				</ul>
 			</td>
 			<td border="1px">
 			</td>
 		</tr>
 		<tr>
 			<td border="1px">
 				<p>
 					Conf. Email
 				</p>
 			</td>
 			<td border="1px">
 				<p>
 					4.1.0
 				</p>
 			</td>
 			<td border="1px">
 				<p>
 					Dropoff location (if different from pickup)
 				</p>
 			</td>
 			<td border="1px">
 				<ul type="disc">
 					<li>
 						The selected dropoff location must be displayed
 					</li>
 					<li>
 						Day of the week must be included
 					</li>
 					<li>
 						Time of day must be included
 					</li>
 					<li>
 						The full address must be displayed
 					</li>
 				</ul>
 			</td>
 			<td border="1px">
 			</td>
 		</tr>
 		<tr>
 			<td border="1px">
 				<p>
 					Conf. Email
 				</p>
 			</td>
 			<td border="1px">
 				<p>
 					4.1.1
 				</p>
 			</td>
 			<td border="1px">
 				<p>
 					Counter directions/airport terminal information
 				</p>
 			</td>
 			<td border="1px">
 				<p>
 					The data returned is displayed
 				</p>
 			</td>
 			<td border="1px">
 			</td>
 		</tr>
 		<tr>
 			<td border="1px">
 				<p>
 					Conf. Email
 				</p>
 			</td>
 			<td border="1px">
 				<p>
 					4.1.2
 				</p>
 			</td>
 			<td border="1px">
 				<p>
 					Customer Service phone number
 				</p>
 			</td>
 			<td border="1px">
 				<ul type="disc">
 					<li>
 						The correct Customer Service number is displayed
 					</li>
 					<li>
 						The rental company's phone number is displayed
 					</li>
 				</ul>
 			</td>
 			<td border="1px">
 			</td>
 		</tr>
 		<tr>
 			<td border="1px">
 				<p>
 					Cancel Email
 				</p>
 			</td>
 			<td border="1px">
 				<p>
 					5.1
 				</p>
 			</td>
 			<td border="1px">
 				<p>
 					Booking status
 				</p>
 			</td>
 			<td border="1px">
 				<p>
 					The status of the reservation is displayed
 				</p>
 			</td>
 			<td border="1px">
 			</td>
 		</tr>
 		<tr>
 			<td border="1px">
 				<p>
 					Cancel Email
 				</p>
 			</td>
 			<td border="1px">
 				<p>
 					5.2
 				</p>
 			</td>
 			<td border="1px">
 				<p>
 					Trip Id
 				</p>
 			</td>
 			<td border="1px">
 				<p>
 					The Trip Id that is returned is displayed
 				</p>
 			</td>
 			<td border="1px">
 			</td>
 		</tr>
 		<tr>
 			<td border="1px">
 				<p>
 					Cancel Email
 				</p>
 			</td>
 			<td border="1px">
 				<p>
 					5.3
 				</p>
 			</td>
 			<td border="1px">
 				<p>
 					Driver name
 				</p>
 			</td>
 			<td border="1px">
 				<p>
 					The driver name entered on the Contract page is displayed
 				</p>
 			</td>
 			<td border="1px">
 			</td>
 		</tr>
 		<tr>
 			<td border="1px">
 				<p>
 					Cancel Email
 				</p>
 			</td>
 			<td border="1px">
 				<p>
 					5.4
 				</p>
 			</td>
 			<td border="1px">
 				<p>
 					Rental company
 				</p>
 			</td>
 			<td border="1px">
 				<p>
 					The rental company name/logo is displayed
 				</p>
 			</td>
 			<td border="1px">
 			</td>
 		</tr>
 		<tr>
 			<td border="1px">
 				<p>
 					Cancel Email
 				</p>
 			</td>
 			<td border="1px">
 				<p>
 					5.5
 				</p>
 			</td>
 			<td border="1px">
 				<p>
 					Car type
 				</p>
 			</td>
 			<td border="1px">
 				<p>
 					The amenities are displayed
 				</p>
 			</td>
 			<td border="1px">
 			</td>
 		</tr>
 		<tr>
 			<td border="1px">
 				<p>
 					Cancel Email
 				</p>
 			</td>
 			<td border="1px">
 				<p>
 					5.6
 				</p>
 			</td>
 			<td border="1px">
 				<p>
 					Pickup location
 				</p>
 			</td>
 			<td border="1px">
 				<ul type="disc">
 					<li>
 						The selected pickup location must be displayed
 					</li>
 					<li>
 						Day of the week must be included
 					</li>
 					<li>
 						Time of day must be included
 					</li>
 					<li>
 						The full address must be displayed
 					</li>
 				</ul>
 			</td>
 			<td border="1px">
 			</td>
 		</tr>
 		<tr>
 			<td border="1px">
 				<p>
 					Cancel Email
 				</p>
 			</td>
 			<td border="1px">
 				<p>
 					5.7
 				</p>
 			</td>
 			<td border="1px">
 				<p>
 					Dropoff location (if different from pickup)
 				</p>
 			</td>
 			<td border="1px">
 				<ul type="disc">
 					<li>
 						The selected dropoff location must be displayed
 					</li>
 					<li>
 						Day of the week must be included
 					</li>
 					<li>
 						Time of day must be included
 					</li>
 					<li>
 						The full address must be displayed
 					</li>
 				</ul>
 			</td>
 			<td border="1px">
 			</td>
 		</tr>
 		<tr>
 			<td border="1px">
 				<p>
 					Cancel Email
 				</p>
 			</td>
 			<td border="1px">
 				<p>
 					5.8
 				</p>
 			</td>
 			<td border="1px">
 				<p>
 					Customer Service phone number
 				</p>
 			</td>
 			<td border="1px">
 				<ul type="disc">
 					<li>
 						The correct Customer Service number is displayed
 					</li>
 					<li>
 						The rental company's phone number is displayed
 					</li>
 				</ul>
 			</td>
 			<td border="1px">
 			</td>
 		</tr>
 	</tbody>
 </table>