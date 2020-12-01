## Nigerian Phone Validator
Validate and format Nigerian phone numbers

### Installation
```
$ npm install nigerian-phone-validator --save
```

### Usage

This module accepts a regular `11-digits` Nigerian phone number, validate it and then format it using the country code. Example, a phone number given as `08024672344` will be validated and formated to look like this `+2348024672344`

The function accepts the phone number as a `string` returns an `object` containing information regarding the phone number given like so:

```js
// Return value
{
    success: true
    phone: "+2348024672344"
    msg: "Phone number validated and formated"
}
```

Always keep your eyes on the `success` property of the return value. Is is a `Boolean` that tells you how successful the validation went

### Example

```js
const validateNumber = require('nigerian-phone-validator');

let phoneObject = validateNumber("08024672344")
console.log(phoneObject)

// Output
{
    success: true
    phone: "+2348024672344"
    msg: "Phone number validated and formated"
}

// The operation may also error out
let invalidNumber = validateNumber("+8024672344")
console.log(invalidNumber)

// Output
{   
    success: false, 
    phone: "+8024672345", 
    msg: "Remove country code symbol from phone number"
}

```

### Contributions

Pull Requests are welcomed, feel free to make the web a better place

### License

MIT