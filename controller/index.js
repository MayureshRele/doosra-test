

var user;

exports.registerUser = (req, res) => {
    user = req.body.user
    res.json({ data: "user saved successfully" })
}

exports.bookCab = (req, res) => {
    let threshold = req.body.threshold
    console.log(req.body, "body");

    let bookingDetails = {
        userLocationx: 1,
        userLocationy: 2,
        riderLocationx: 2,
        riderLocationy: 4,
    }

    function distanceBetween(x1, x2, y1, y2) {
        let pb1 = Math.sqrt(x2 - x1);
        let pb2 = Math.sqrt(y2 - y1);
        let result = pb1 + pb2
        return result;
    }


    function bookCab(bookingDetails, threshold) {
        let distance = distanceBetween(
            bookingDetails.userLocationx,
            bookingDetails.riderLocationx,
            bookingDetails.userLocationy,
            bookingDetails.riderLocationy
        )
        if (distance <= threshold) {
            console.log("cab booked", distance);
            res.status(200).send("passed")
        } else {
            res.status(400).send("failed")
            console.log("failed", distance);
        }
    }

    bookCab(bookingDetails, threshold);
}





