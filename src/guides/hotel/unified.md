# Unified Hotel Express API Migration Guide

Our new Unified Hotel Express API provides the most efficient way of distributing all available PPN inventory in a single API call.

In addition, several major new features improve the ease of use of the API and expand the number of, variety of, and information on inventory we provide.

Some of this new functionality is optional, and some is required to recognize and accurately and effectively market and sell this new inventory.

We hope this migration guide will provide a good starting point to explain these new opportunities.

## Output Version

This API update introduces a new output version (version 3) which can be used at the `Express.Results`, `Express.Contract` and `Express.MultiContract` calls.

This output version brings two main improvements, both of which are breaking changes that will require development against.

1. **Consistency**  
   Object structures, data types, and hierarchies are now consistent between the calls.  
   Calls increase levels of verbosity and "fill in blanks", rather than retooling the output entirely.
2. **Better Organization**  
   Across calls we now encourage a consistent hierarchy of hotels; a hotel having multiple rooms, and a room having multiple rates.  
   Not only should this be simpler to process, and increase conversion by allowing more buying options earlier in the path, but it allows you to market the inventory more effectively -- allowing customers to visualize the room they're buying, and then decide on the details of the pricing/rate features in that room (cancellation policies, room and board options) that matter to them.
   
More details on these are provided further in this document.
   
Migrating into this updated structure is optional, but recommended.  
As such, we will be defaulting all new partners (i.e. all new refids) into this structure.  
Also, passing `output_version=3` to the `Express.Results` call will imply that output version for any future `Express.Contract` or `Express.MultiContract` call, if no other `output_version` parameter is explicitly supplied to those calls.

To prevent any future regressions (for example, if your account manager provisions a new refid, it will be defaulted into the new output version and potentially not match your existing refids), it is recommended you start being explicit in your requests to `Express.Results`, `Express.Contract` and `Express.MultiContract` by sending a query parameter `output_version=1` to lock in the current response format.

From there, we've left the migration path completely in your control. You may start sending `output_version=3` to any of these calls at any time to test the new format and migrate at your leisure.

## `json2` Format Style

To create a more typical JSON output syntax, the `format=json2` parameter may be sent along with any request.

This differs from our `format=json` syntax by encoding arrays of elements as proper JSON arrays, not as hashmaps.

This is an optional migration, and would be a breaking change that you would need to develop against. We will continue to support the existing `format=json` for the foreseeable future.

For example, something under `format=json`:

```json
{
  "foo": {
    "foo_0": {
      "title": "BAR"
    },
    "foo_1": {
      "title": "ZIM"
    },
    "foo_2": {
      "title": "ZAM"
    }
  }
}
```

would appear as an array in `format=json2`:

```json
{
  "foo": [
    {
      "title": "BAR"
    },
    {
      "title": "ZIM"
    },
    {
      "title": "ZAM"
    }
  ]
}
```

## New Rate Information

Calls that expose rates and rate information (`Express.Results`, `Express.Contract`, `Express.MultiContract`, `Express.Book`, and `Express.LookUp`) have been updated with several new pieces of information.

However, as multiple rate types are now available from a single endpoint, you may need to make business-level decisions based on some of the information below.

### Commission, Distribution, Payment, and Inventory Type

Calls that expose rates and rate information (`Express.Results`, `Express.Contract`, `Express.MultiContract`, `Express.Book`, and `Express.LookUp`) have been updated to indicate the `commission_type`, `distribution_type`, `payment_type`, and the `inventory_type` to inform you of the style of commission, the distribution gating rules, when payment is due, and the underlying inventory, respectively.

You should review your existing implementation and business rules for any assumptions that may have been made in the past about only a single type of inventory appearing through the Express path.

#### `commission_type`

| Value        | Explanation                                                                       |
|--------------|-----------------------------------------------------------------------------------|
| `NET`        | Rate is provided without markup, no commission will be paid on sale of this rate. |
| `COMMISSION` | Rate is provided with a markup, commission will be paid as per your agreement.    |

#### `distribution_type`

| Value                | Explanation                                                                                                                                                                                                                                                                                                                                 |
|----------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `PUBLIC`             | The rate can be sold to the public, in any channel                                                                                                                                                                                                                                                                                         |
| `PRIVATE`            | The rate can only be sold privately, to a channel of a closed group of users                                                                                                                                                                                                                                                               |
| `FLEXIBLE_BENCHMARK` | The rate can be sold to anyone, but if it is sold publicly, it must be sold at minimum, at the value represented in the `benckmark_price` node. If sold privately, the markup is your choice |

#### `payment_type`

| Value      | Explanation                                                                                 |
|------------|---------------------------------------------------------------------------------------------|
| `PREPAID`  | Payment is due at the time of making the reservation.                                       |
| `POSTPAID` | Payment is due at the hotel. Note that a deposit or hold on the card may still be required. |

#### `inventory_type`

Current inventories supported, along with the related types you would _expect_ to see for those inventories.

This is provided as reference only, implementations should always respect the `distribution_type`, `commission_type`, and `payment_type` returned for the rate.

| `inventory_type` | Explanation                             | `distribution_type`                           | `commission_type`      | `payment_type`           |
|------------------|-----------------------------------------|-----------------------------------------------|------------------------|--------------------------|
| `AGD`            | Agoda.com supplied rates                | `PUBLIC`                                      | `COMMISSION`           | `PREPAID`                |
| `BKG`            | Booking.com supplied rates              | `PUBLIC`                                      | `COMMISSION`           | `PREPAID` and `POSTPAID` |
| `RCUG`           | Refundable CUG rates                    | `PRIVATE`                                     | `COMMISSION`           | `PREPAID`                |
| `GCUG`           | Refundable and non-refundable CUG rates | `PRIVATE`                                     | `COMMISSION`           | `PREPAID` and `POSTPAID` |
| `GMER`           | Additional retail rates                 | `PUBLIC`                                      | `COMMISSION`           | `PREPAID` and `POSTPAID` |
| `PCLN`           | Priceline rates                         | `PUBLIC`, `PRIVATE`, and `FLEXBILE_BENCHMARK` | `COMMISSION` and `NET` | `PREPAID` and `POSTPAID` |

### Board Type

Calls that expose rates and rate information (`Express.Results`, `Express.Contract`, `Express.MultiContract`, `Express.Book`, and `Express.LookUp`) have been updated to indicate the `board_type` for the rate.

| Value           | Explanation                                                |
|-----------------|------------------------------------------------------------|
| `NONE`          | Rate is provided with no additional board/meal options     |
| `BREAKFAST`     | Rate is provided with free breakfast                       |
| `ALL_INCLUSIVE` | Rate is provided as all-inclusive, with all meals provided |

### Program Types

Calls that expose rates and rate information (`Express.Results`, `Express.Contract`, `Express.MultiContract`, `Express.Book`, and `Express.LookUp`) have been updated to indicate the `program_types` for the rate.

This info may be useful in marketing the rate.

`program_types` is a list of zero or more of the below, indicating:

| Value              | Explanation                                                                                                     |
|--------------------|-----------------------------------------------------------------------------------------------------------------|
| `MOBILE_EXCLUSIVE` | Rate is provided at a discount for customers on a mobile device                                                 |
| `MEMBER_DEALS`     | Rate is provided for customers logged in as members                                                             |
| `GENIUS`           | Rate is provided for customers as a part of [Booking.com's Genius Program](https://www.booking.com/genius.html) |

## New Features in `Express.Results`

The `Express.Results` endpoint has been updated with several new features.

Some re-development may be required to support multiple types of inventory being available through this endpoint.

### Retail Priced Rates

For rates with retail pricing, you will notice that there aren’t any savings applied in the node `room_data` → `room` → `benchmark_price_details`.

Here is an example of how a retail priced rate will be returned:

```json
{
  "benchmark_price_details": {
    "savings_percentage": 0,
    "baseline_currency": "USD",
    "baseline_price": 123.45,
    "source_currency": "USD",
    "source_price": 123.45,
    "display_currency": "USD",
    "display_price": 123.45
  }
}
```

Contrast this with now a non-retail discounted rate will be returned:

```json
{
  "benchmark_price_details": {
    "savings_percentage": 20,
    "baseline_currency": "USD",
    "baseline_price": 123.45,
    "source_currency": "USD",
    "source_price": 123.45,
    "display_currency": "USD",
    "display_price": 123.45
  }
}
```

Therefore, it will be important to check that:

1. You are not suppressing rates based on `savings_percentage` being above a certain value
2. You are appropriately displaying in cases where `savings_percentage` is 0

### Additional Rate Information

Several new pieces of information are available per rate, which may help you merchandise the inventory.

Use of this data can be considered optional, but may be useful in marketing the rate.

| Node              | Description                                                                                                    |
|-------------------|----------------------------------------------------------------------------------------------------------------|
| `occupancy_limit` | A nullable integer, indicates occupancy limit for the room, `null` indicating the information is unavailable  |
| `available_rooms` | A nullable integer, indicates the number of rooms available, `null` indicating the information is unavailable |
| `promo_data`      | An array, containing promotional data available for the rate                                                   |

### Multiple Rates

In current implementations `Express.Results` has a single room/rate for each hotel.

The ability to have multiple rooms and rates returned can be enabled by sending request parameters `rate_limit={maximum number of rates per hotel}` and `output_version=3`.

For example, [https://api.rezserver.com/api/hotel/getExpress.Results?refid={refid}&api\_key={api\_key}&format=json&city\_id=800049480&check\_in=2019-06-25&check\_out=2019-06-27&rooms=1&adults=2&children=0&output\_version=3&rate\_limit=3](https://api.rezserver.com/api/hotel/getExpress.Results?refid=CHANGEME&api\_key=CHANGEME&format=json&city\_id=800049480&check\_in=2019-06-25&check\_out=2019-06-27&rooms=1&adults=2&children=0&output\_version=3&rate\_limit=3).

Use of this data can be considered optional, but may be useful in providing more purchasing options to your customer earlier in the path.

Please see the section titled [Output Version](#T3V0cHV0IFZlcnNpb24K) for more information on the `output_version` parameter.

In addition the increased number of rates, this allows us to efficiently expose multiple price points and purchasing options for the same underlying room. For example, the same King Bed room may be offered at $100 with no board, at $110 with breakfast, and at $120 with free cancellation.

The hierarchy will move from results having a list of rates that encompass a single rate offering at each hotel:  
`results` → `rate_data ` → `rate_{#}`  
to results having a list of hotels, each hotel having one or more rooms, and each room having one or more rates:  
`results` → `hotel_data` → `hotel_{#}` → `room_data ` → `room_{#}` → `rate_data` → `rate_{#}`

Each rate has its own `ppn_bundle` that can be used to make a `Express.Contract` or `Express.MultiContract` call for that rate (some content omitted for brevity):

```json
{
  "getHotelExpress.Results": {
    "results": {
      ...
      "hotel_data": {
        "hotel_0": {
          "room_data": {
            "room_0": {
              "rate_data": {
                "rate_0": {
                  ...
                  "ppn_bundle": "ABC123",
                  ...
                }
              }
            }
          }
        }
      }
    }
  }
}
```

## New Features in `Express.Contract` and `Express.MultiContract`

In the responses for `Express.Contract` and `Express.MultiContract`, new nodes are introduced to add additional information to some rates.

### Bedding Data

The new `bedding_data` node provides machine-readable information on what types and counts of beds are available in the room.

Use of this data can be considered optional, but may be useful in marketing the rate.

```json
"bedding_data": {
  "bedding_0": {
    "bed_count": 1,
    "bed_type": "KING"
  }
}
```

Where the `bed_type` can be one of:

| `bed_type` | Description                |
|------------|----------------------------|
| `KING`     | A King-size bed            |
| `QUEEN`    | A Queen-size bed           |
| `FULL`     | A full-size bed            |
| `TWIN`     | A twin bed                 |
| `SOFABED`  | A pull-out couch-style bed |

### Room Photos

The new `photos` node lists one or more photograph of the room.

Use of this data can be considered optional, but may be useful in marketing the rate.

```json
"photos": {
  "hotel_id": 123,
  "photo_data": {
    "photo_0": "//priceline.com/images/hotel123.jpg"
  }
}
```

### Rate Important Information

The new `important_information` lists one or more paragraphs of important information about the hotel, room, or rate.

Use of this data to display this information to the customer is strongly encouraged.

```json
"important_information": {
  "info_0": "This booking is Non-Refundable and cannot be amended or modified. If you fail to arrive or cancel the booking, no refund will be given.",
  "info_1": "Free public parking is possible on site (reservation is needed)."
}
```

### Rate Cancellation Policies

The new `cancellation_details` node provides machine-readable cancellation policy information for the rate.

Since new inventory that **does** support cancellation will now appear in the Unified Hotel Express API, you are strongly encouraged to being parsing and displaying this information to the customer.
  
However, if you don't require a machine-readable version, a human-readable summary is provided in the `important_information` node described above.

Please see the section titled [Cancellation](#Q2FuY2VsbGF0aW9uCg==) below for more information on how to process cancellation requests.

```json
"cancellation_details": {
  "cancellation_detail_0": {
    "description": "This booking is Non-Refundable and cannot be amended or modified.",
    "date_after": "2015-09-18T17:00:00-07:00",
    "date_before": "2019-06-06T00:00:00-07:00",
    "penalty_nights": 2,
    "source_currency": "USD",
    "source_amount": 356.28,
    "source_tax": 0,
    "source_processing_fee": 0,
    "source_cancellation_fee": 0,
    "source_refund": 0,
    "source_total_charges": 356.28,
    "display_currency": "USD",
    "display_amount": 356.28,
    "display_tax": 0,
    "display_processing_fee": 0,
    "display_cancellation_fee": 0,
    "display_refund": 0,
    "display_total_charges": 356.28
  }
}
```

### Multiple Rates per Room

In current implementations `Express.MultiContract` has a list of room/rate combinations for each hotel.

By either sending `output_version=3` to the `Express.MultiContract` call, or by using a `ppn_bundle` from `Express.Results` with `output_version=3` sent to it, a consistent hierarchy will be returned between the two calls. Each hotel has one or more rooms, with each room having one or more rates.

This allows us to efficiently expose multiple price points and purchasing options for the same underlying room.  
For example, the same King Bed room may be offered at $100 with no board, at $110 with breakfast, and at $120 with free cancellation.

Use of this data can be considered optional, but may be useful in marketing purchasing options to the customer once they've chosen a room type without overwhelming them with choices.

Please see the section titled [Output Version](#T3V0cHV0IFZlcnNpb24K) for more information on the `output_version` parameter.

The hierarchy will move from results having a list of room/rate combinations:  
`results` → `room_data ` → `room_{#}`  
to results having a hotel, that hotel having one or more rooms, and each room having one or more rates:  
`results` → `hotel_data` → `hotel_0` → `room_data` → `room_{#}` → `rate_data` → `rate_{#}`

Each rate has its own `ppn_book_bundle` that can be used to make an `Express.Contract` or `Express.Book` call for that rate (some content omitted for brevity):

```json
{
  "getHotelExpress.MultiContract": {
    "results": {
      ...
      "hotel_data": {
        "hotel_0": {
          "room_data": {
            "room_0": {
              "rate_data": {
                "rate_0": {
                  ...
                  "ppn_book_bundle": "ABC123",
                  ...
                }
              }
            }
          }
        }
      }
    }
  }
}
```

## Cancellation

Since new inventory that **does** support cancellation will now appear in the Unified Hotel Express API, you are strongly encouraged to update your implementation to support cancellation when available.

### Recognizing a Cancellable Rate from `Express.Contract` and `Express.MultiContract` 

The new `cancellation_details` node provides machine-readable cancellation policy information for the rate.

```json
"cancellation_details": {
  "cancellation_detail_0": {
    "description": "This booking is Non-Refundable and cannot be amended or modified.",
    "date_after": "2015-09-18T17:00:00-07:00",
    "date_before": "2019-06-06T00:00:00-07:00",
    "penalty_nights": 2,
    "source_currency": "USD",
    "source_amount": 356.28,
    "source_tax": 0,
    "source_processing_fee": 0,
    "source_cancellation_fee": 0,
    "source_refund": 0,
    "source_total_charges": 356.28,
    "display_currency": "USD",
    "display_amount": 356.28,
    "display_tax": 0,
    "display_processing_fee": 0,
    "display_cancellation_fee": 0,
    "display_refund": 0,
    "display_total_charges": 356.28
  }
}
```

### Recognizing and Processing a Cancellation Request from `Express.Lookup`

The call `Express.LookUp` has been updated to include cancellation support.  

The new element can be found at `results` → `result` → `actions` → `cancel`:

```json
{
  "getHotelExpress.LookUp": {
    "results": {
      "result": {
        ...
        "actions": {
          "cancel": "ABC123",
          "resend_itinerary": "DEF456"
        }
      }
    }
  }
}
```

When present, this node contains an encoded bundle string that can be used to submit a cancel request for that hotel reservation to the new `Express.Cancel` endpoint.

Sample request:

```bash
curl -X POST \
  https://api.rezserver.com/api/hotel/getExpress.LookUp?refid={refid}&api_key={api_key}&format=json \
  -d 'booking_id=123&email=json@smith.com'
```

### Submitting a Cancellation to `Express.Cancel`

The new call `Express.Cancel` is used to submit a cancel request.

Before attempting to cancel, a reference to the `Express.LookUp` response should check to see that this element at `results` → `result` → `actions` → `cancel` is present.

If not present, this reservation is non-cancellable (as should be reflected in the `important_information` and `cancellation_details` policy text).

If present, this encoded string should be passed into `Express.Cancel` as `ppn_bundle`.

A successful cancellation is determined when the response contains the element `result` → `status` with the value `Cancelled`.

Sample request:

```bash
curl -X POST \
  https://api.rezserver.com/api/hotel/getExpress.Cancel?refid={refid}&api_key={api_key}&format=json \
  -d 'ppn_bundle=ABC123'
```

## Mandatory Property Fees

### Introduction

Some hotel/resort properties charge guests an additional mandatory fee (or set of fees) that are separate from the total price of the stay. These fees are typically collected when the customer arrives at the hotel to check-in. There are also cases where payment for these fees is collected at the time of booking for specific rates.

In the `Express.Results`, `Express.Contract`, and `Express.MultiContract` responses, a new node called `mandatory_fee_details` will provide a breakdown of these fees, if they are applicable to the rate:

```json
{
  "mandatory_fee_details": {
    "source_currency": "USD",
      "source_total": 50.00,
      "display_currency": "USD",
      "display_total": 50.00,
      "breakdown": {
        "prepaid": {
          "source_currency": "USD",
          "source_total": 10.00,
          "display_currency": "USD",
          "display_total": 10.00,
          "breakdown": {
            "fee_0": {
              "type": "City Fee",
              "description": "$5.00 USD per room per night city fee",
              "source_currency": "USD",
              "source_total": 10.00,
              "display_currency": "USD",
              "display_total": 10.00
            }
          }
        },
        "postpaid": {
          "source_currency": "USD",
          "source_total": 40.00,
          "display_currency": "USD",
          "display_total": 40.00,
          "breakdown": {
            "fee_0": {
              "type": "Resort Fee",
              "description": "$15.00 USD per room per night resort fee",
              "source_currency": "USD",
              "source_total": 30.00,
              "display_currency": "USD",
              "display_total": 30.00
            },
            "fee_1": {
              "type": "Cleaning Fee",
              "description": "$5.00 USD per room per night house service fee",
              "source_currency": "USD",
              "source_total": 10.00,
              "display_currency": "USD",
              "display_total": 10.00
            }
          }
        }
	}
  }
}
```

For mandatory fees that are to be paid when the customer checks in (`postpaid`), the total fee value will **not** be included in the total price (in `price_details`), so it would need to be communicated as a separate item outside of the total to inform the customer.

Conversely, for mandatory fees that are to be paid when the customer books (`prepaid`), the total fee value **will** be included in the total price (in `price_details`), so it would need to be communicated as a line item in the summary of charges so as to have the math make sense.

Using the itemized details in `mandatory_fee_details` → `breakdown` → `postpaid`/`prepaid` → `breakdown` can be used to display each individual fee, but is not required.

In the example above, if the `price_details` reflected a subtotal of $210 with $20 taxes, then for a one-room, two-night stay, an example summary of charges could read as:

| Line Item         | Value    |
|-------------------|----------|
| Subtotal          | $210     |
| Taxes             | $20      |
| Property Fees     | $10      |
| **Total Due Now** | **$250** |
| Due At Hotel      | $40      |

Note that, as described above, the `prepaid` fees are calculated as a part of the total due at booking, and the `postpaid` fees are simply communicated that the hotel will collect at check-in.