# Room ID Grouping
We offer the ability to group rates into common room types. This is beneficial for:
 
 - multi-supply partners to align room rates to their inventory suppliers
 - front-end merchandising of rate display

When this feature is activated (per refid), pre-book requests that expose rates and rate information (`Express.Results`, `Express.Contract`, `Express.MultiContract`) will automatically adjust the output to have rates per room TYPE.
## Example Structure
Here is an example of how room grouping is returned in the api response:

```php
{
   ...
   "results": {
      ...
      "hotel_data": {
         "hotel_0": {
            ...
            "room_data": {
               "id": "DNpLs1gdDk-F_yIqQJq3cQ",
               "rate_data": {
                  "rate_0": {
                     "source": "PPN",
                     "rate_type": "MER",
                     "commission_type": "COMMISSION",
                     "distribution_type": "FLEXIBLE_BENCHMARK",
                     "payment_type": "PREPAID",
                     "board_type": "BREAKFAST",
                     "inventory_type": "PCLN",
                     "program_types": [],
                     "title": "1 King Bed, Various Views, Non-Smoking",
                     "description": "1 King Bed, Various Views, Non-Smoking.",
                     "occupancy_limit": 3,
                     "available_rooms": 7,
                     "room_sq_footage": null,
                     "ppn_bundle": "HER_RGdPh0xZMejk2zgPNsLDB2hX-XJ0LNtvFwz4Tor4ehEnUnIANPAXXVGjaPpk4JxmgdXrdPKbAAXHTHIx33YbPchwA8n8xPnhYGmB33MR3aWJpv2BE_Lj9KSmJ2U4R1yKiemPy5E0xjZFL9YiOMQvD0qzFdV-ASALTQ-IDxQqUxuHiO3pJhOJo5A3jOFAbbBrfrAxgWSvyIdSM1xeRfy4beD4jkDXEPOyPJRta5jbsh5FYqzu_9PsOAOY7g-8eGFhq92IJQI6JpK_ULl7UVU_bu6cKxvZM-T880thHOE4Ch3PXHF-IxxO7JglMBGste_RNYwCbzc48xy6ZnNav1oUv1HSPhRyhWzgGOWwIg1o4RSSYMZwBm9ZgM8QaCjmoqYmoBbXVE3lMoj8dPd87eZrRZ6fdeRWh4x4gkhH42hF-EfAoSbuEtNJc6Ie6L79lSZdemZrPKcPy1Ki_d3DEmIADjllNkzTsaAYCBEYNAcOlQCP5wlyQWlMkfje0OAz9Cb2pcwtcesjh_clRTkHI2vlwtnIL9JfAXZevEh24WX7OnFPFpk6jWgUhphkQWWehj3QeN5bmYnpbeaDsBh2WwiarGGPWSGVPKN0hpBtK4ebmhvneqBNGhAT9EBYqCU7mJYU-6Xn6vh3JNLlcCG7SyMrqWewPgGhoxv_WvKPgRLFqa4xORsseYvRE3VCiH8SahCOb9F5x11xMOQ6qnMnSuEURwVzAf9YttMcWfoePGOR0B6FvJQ6ZJNZzXQMF49AEoohvHqu5p7vVfqff12OoDDSV59j88-UAgoxTmpnGLKmA5J6wJd5OfJ6CA0rlUcOOq6-Cx9GViw1_ESAlHY83CnaRw11kRwCmhhDHsMl7HnFRRrRKbv9ZavUq9AwrvpSEd384W0hhf22HosOLuoh6-o_ECht0gzfty2sKqOWNGbrenKQe6zqxCtaav3GVK8feffSWP48L03gzVW959FIIUZk0w21Y_1OP8h7ufR3E25WzfJMhVaacOIap-tFSFyPl8bBmEmq8Sb59UJQ4BJJycOLSYUsjs87RSnuyqKLt7KIKifI3C5SifLT6Ly_X004wHFgNZd0tVyA-BX6c3-clMqZQ1T2IDdXjkLyuaUMyMNpI37ZyJ2V17nZjswBs2Hd4woptQX0uzYnAfmsB06umdPolP4yr94UpGsEtvXQGjpCf4KNWp4Qm46S0FufI2UGRxc6sFvX3Zco-TIek5E1cOloQ3V6o8fxSGGRd0ldObLbFS67K4DIZBHq2TgkGHqjW08W1gK562XNQtCYDmUaQD6YSVECf6o28IzEEmQVKLj8JRSezBdP62DHZ-SU5TJu5fw816bdsmtcnvy5X2pCy0mmpzmkGYD-hRFzgywJHD2u6HA",
                     "rate_plan_code": "2997811_MERCHANT_MERCHANT__d0a8affa-f189-d820-8a8b-ad25212efc30",
                     "rate_tracking_id": "00DE7B47D433C31E5E1B46968339540990BDAAC35806529F48FFEB47E2F5D0BFB28894DB54B2D92101568CC06053583B852C1191FF93A428A64EB1400C8D913F0420066CDC347BD7D1212B741DD61ADFD96F5C23497F0251",
                     "all_inclusive": "false",
                     "bed_choice_available": false,
                     "rate_source_code": 9,
                     "bedding_data": null,
                     "benchmark_price_details": {
                        "saving_percentage": 9.6999999999999993,
                        "baseline_currency": "USD",
                        "baseline_price": 194,
                        "source_currency": "USD",
                        "source_price": 194,
                        "display_currency": "USD",
                        "display_price": 194
                     },
                     "property_fee_details": null,
                     "price_details": {
                        "baseline_currency": "USD",
                        "baseline_price": 175.18000000000001,
                        "baseline_symbol": "$",
                        "baseline_processing_fee": 0,
                        "baseline_insurance_fee": 0,
                        "baseline_sub_total": 175.18000000000001,
                        "baseline_taxes": 21.690000000000001,
                        "baseline_total": 196.87,
                        "source_currency": "USD",
                        "source_price": 175.18000000000001,
                        "source_symbol": "$",
                        "source_processing_fee": 0,
                        "source_insurance_fee": 0,
                        "source_sub_total": 175.18000000000001,
                        "source_taxes": 21.690000000000001,
                        "source_total": 196.87,
                        "display_currency": "USD",
                        "display_price": 175.18000000000001,
                        "display_symbol": "$",
                        "display_processing_fee": 0,
                        "display_insurance_fee": 0,
                        "display_sub_total": 175.18000000000001,
                        "display_taxes": 21.690000000000001,
                        "display_total": 196.87,
                        "mandatory_fee_details": null,
                        "night_price_data": {
                           "night_price_0": {
                              "source_night_price": "175.18",
                              "display_night_price": "175.18",
                              "baseline_night_price": "175.18"
                           }
                        }
                     },
                     "cancellation_details": null,
                     "policy_data": {
                        "cancel_policy_description": "Any cancellation received within 1 day prior to arrival date will incur the first night charge. Failure to arrive at your hotel or property will be treated as a No-Show and will incur the first night charge (Property policy).",
                        "is_cancellable": "true",
                        "POLICY_LOYALTY_POINTS_ELIGIBILITY": "The rate selected may be eligible for loyalty point accrual."
                     },
                     "plugin_data": null,
                     "promo_data": [],
                     "upsell_data": null,
                     "is_cancellable": "true",
                     "cvc_required": true
                  },
                  "rate_1": {
                     "source": "PPN",
                     "rate_type": "MER",
                     "commission_type": "COMMISSION",
                     "distribution_type": "FLEXIBLE_BENCHMARK",
                     "payment_type": "PREPAID",
                     "board_type": "BREAKFAST",
                     "inventory_type": "PCLN",
                     "program_types": [],
                     "title": "1 King Bed, Various Views, Non-Smoking",
                     "description": "1 King Bed, Various Views, Non-Smoking.",
                     "occupancy_limit": 4,
                     "available_rooms": 7,
                     "room_sq_footage": null,
                     "ppn_bundle": "HER_lw7QXNZOEn4XWE4iqokny_hiyNBgirmgLvUhPlrzPOBEw3ughA5_90ANbV6HigE8Pkb3K4XQOBDLb95asNRI8SxyC-HFSYgWwzNDQo8YNDZeOLy9t2aDVVttmjx0bUOvu2D_la4in0gf9YUASbQXo4OOAuCzqnLzar5ZM1cDk-xTwFS8-IsbP5txxB2R5hkPWog7eWjxAsgYTDEofCbU6X68sal7JHOdclb9MrjWbcvsp3bWksP52lLEtHbnuf9gxbAexnDxMgovLawBQoIsk5D3IucHg3xpD5SH7OqHFVSJuCJUHUEpf5sNhg8ovvRc0Ii0RGPqFsLi1zVNBxQ6hT5i77kq69B7F8IHZVmgBKnsNyA4rGyAcSafxZ6CifyDcwi8E5BAWFF3wVTKduVSr5L85M1HTI9W1nncLxSCVnIpQ1VQN_j-5k6y5WVUc6BUAwjrTt4IBhEWy2Bsrk4dU_me9D2IYkzDbjdHX0ZqStMwiUxMQ5l5PVPvTbo-zN4CfStP6tFMOtNjS-fDDu0PpJMCB3VjP1DOi2cIcjq3CPZcObcIBYpkw8sFuUlA5d2IkPdiaL3u1TSPy6zkwRmFVydBMtotk4BhKAHeQJpQ5WPfdxxV-BlRxuUncBOzEuQ25LXMf6w9_XEZCH8PJJ_g0tk3ZBVnUZYdbh_D3R2kZJ8gHxNYnqU0GO40dnZMdAI58kAIo3oLe9j85qJ2pAhrmBXpD9Vgps_sL-YzNk68SxQ2BY0Y6obemGdel9lE9GNH746j0OgXZPAwMQtW-ySnWa-6w6V2Xg8oQrlg5uxSbdJWYx4IarKKeH6l8vFKl8RDdOO98qoktSn-mFB4Y8z0v-TIFAq1gnNw3DeBy3eB_gOR3Cr3A9OUGeHz73VxvM1urmHE9CQnPAyrNsEZcc2KDf3xMF2WqOFJULoq1FI80wox5SRtAhKhENhpds-h9VpWamXGTrk5DnGhpAp-PL_qseyKKRGpM90jvur-qxdR2nZWcX0CYd2Nlsr0YS_rW6cCyJo_qvbb_hbTPL30eBQByanq8MKPkRh-uwPp-T8dTW5WbjW-fKPvPcsuqbXfMVEHWPZG0GN44Y7N1kwl6Dia_ZldkvLdaJzuIo2HH0WgmGkCvttgrujNYqJo9qCV06gA7KYI5OOmQ9cyWEg4217kciwtrmFJSa6mIQgT8DvvG21kNewSmNun5fNxy0JdXfqqY2bqjMRuoRxgIHnDfZWNOBHV6tgbtaZJAQQauudLC5BpUrwhpDNXEk-z3VORSlnf",
                     "rate_plan_code": "2997811_MERCHANT_MERCHANT__f8c309ed-d916-dc22-c4e8-cf4fea26d9ef",
                     "rate_tracking_id": "A99CAA6EDFF2724CD9A153E4A2EA4E61149E3722ADBE6C989978BF90ABE332189EEA28D005B6D9F101568CC06053583B852C1191FF93A428A64EB1400C8D913F81BF98869197CC6FAA76A9FCF47EA6C9D96F5C23497F0251",
                     "all_inclusive": "false",
                     "bed_choice_available": false,
                     "rate_source_code": 9,
                     "bedding_data": null,
                     "benchmark_price_details": {
                        "saving_percentage": 9.6999999999999993,
                        "baseline_currency": "USD",
                        "baseline_price": 204,
                        "source_currency": "USD",
                        "source_price": 204,
                        "display_currency": "USD",
                        "display_price": 204
                     },
                     "property_fee_details": null,
                     "price_details": {
                        "baseline_currency": "USD",
                        "baseline_price": 184.21000000000001,
                        "baseline_symbol": "$",
                        "baseline_processing_fee": 0,
                        "baseline_insurance_fee": 0,
                        "baseline_sub_total": 184.21000000000001,
                        "baseline_taxes": 22.809999999999999,
                        "baseline_total": 207.02000000000001,
                        "source_currency": "USD",
                        "source_price": 184.21000000000001,
                        "source_symbol": "$",
                        "source_processing_fee": 0,
                        "source_insurance_fee": 0,
                        "source_sub_total": 184.21000000000001,
                        "source_taxes": 22.809999999999999,
                        "source_total": 207.02000000000001,
                        "display_currency": "USD",
                        "display_price": 184.21000000000001,
                        "display_symbol": "$",
                        "display_processing_fee": 0,
                        "display_insurance_fee": 0,
                        "display_sub_total": 184.21000000000001,
                        "display_taxes": 22.809999999999999,
                        "display_total": 207.02000000000001,
                        "mandatory_fee_details": null,
                        "night_price_data": {
                           "night_price_0": {
                              "source_night_price": "184.21",
                              "display_night_price": "184.21",
                              "baseline_night_price": "184.21"
                           }
                        }
                     },
                     "cancellation_details": null,
                     "policy_data": {
                        "cancel_policy_description": "Any cancellation received within 1 day prior to arrival date will incur the first night charge. Failure to arrive at your hotel or property will be treated as a No-Show and will incur the first night charge (Property policy).",
                        "is_cancellable": "true",
                           "POLICY_LOYALTY_POINTS_ELIGIBILITY": "The rate selected may be eligible for loyalty point accrual."
                     },
                     "plugin_data": null,
                     "promo_data": [],
                     "upsell_data": null,
                     "is_cancellable": "true",
                     "cvc_required": true
                  }
               }
            },
            ...
         },
         ...
      }
      ...
   }
}
```


*Please note:*

The parameter `rate_limit` is not in effect when room grouping is activated.
Also, room grouping is not available for partners using an earlier version of the UEP API [output](#Output-Version).