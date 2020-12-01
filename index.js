/**
 * Validate and format phone number
 * @param  {string}  phone
 * @return {object}
 */
module.exports = function validate(phone) {

    if (!phone || typeof phone !== "string") {
        return {
            success: false,
            phone: phone,
            msg: "Invalid argument type"
        }
    }
    
    // Ensure `phone` length is 11
    if (phone.length !== 11 ) {
        return {
            success: false,
            phone: phone,
            msg: "Phone number must be 11 digits"
        }
    }

    // Remove country code from number
    if (phone.indexOf("+") !== -1) {
        return {
            success: false,
            phone: phone,
            msg: "Remove country code symbol from phone number"
        }
    }

    // Check if all characters in `phone` are valid number types
    let phoneArray = phone.split("")
    let tempPhoneNumber = []

    phoneArray.forEach((currentNumber) => {
        let number = parseInt(currentNumber, 10)
        tempPhoneNumber.push(number)
    })

    tempPhoneNumber = tempPhoneNumber.toString()

    if (tempPhoneNumber.includes("NaN")) {
        return {
            success: false,
            phone: phone,
            msg: "All phone number fields must be of numeric type"
        }
    }

    // We have a clean phone phone here. Prefix with international code
    phone = phone.substr(1, phone.length)
    phone = `+234${phone}`

    return {
        success: true,
        phone: phone,
        msg: "Phone number validated and formated"
    }
}