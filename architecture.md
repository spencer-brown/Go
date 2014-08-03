User
+ Generated from FB login

Trip
+ has_many requests
* start_date
* end_date
* destination

Request
+ belongs_to trip
+ has_one requester
+ has_one host
* status (awaiting_requester_approval, awaiting_host_approval)
