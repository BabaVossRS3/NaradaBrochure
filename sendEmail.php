<?php
$headers .= "Content-type: text/html; charset=UTF-8";
if (isset($_SERVER["REQUEST_METHOD"]) && $_SERVER["REQUEST_METHOD"] === "POST") {
    if ($_SERVER["REQUEST_METHOD"] === "POST") {
        // Retrieve values from the form
        $firstName = $_POST["firstName"];
        $lastName = $_POST["lastName"];
        $phoneNumber = $_POST["phoneNumber"];
        $email = $_POST["email"];
        $specialRequest = $_POST["specialRequest"];

        // Additional reservation details
        $reservationDate = $_POST["date"];
        $reservationTime = $_POST["time"];
        $numberOfGuests = $_POST["partySize"];

        // Construct the email message
        $subject = "Reservation Confirmation - Thank You for Choosing N A R A D A ";
        $message = "Dear $firstName $lastName,\n\n";
        $message .= "Thank you for choosing N A R A D A! We are delighted to confirm your reservation for [specific service/event] on $reservationDate at $reservationTime.\n\n";
        $message .= "Details of your reservation:\n";
        $message .= "Reservation Date: $reservationDate\n";
        $message .= "Reservation Time: $reservationTime\n";
        $message .= "Number of Guests: $numberOfGuests\n\n";
        $message .= "We are honored that you have selected N A R A D A for your [event/dining/experience] needs. Rest assured, our team is dedicated to ensuring you have a memorable and enjoyable time with us.\n\n";
        $message .= "If you have any special requests or requirements, please feel free to let us know in advance, and we will do our utmost to accommodate them. Our team is here to make your experience exceptional.\n\n";
        $message .= "We look forward to welcoming you on $reservationDate and providing you with outstanding service. If there are any changes to your plans or if you have additional questions, please don't hesitate to contact us.\n\n";
        $message .= "Once again, thank you for choosing [Your Business Name]. We can't wait to serve you and make your visit remarkable.\n\n";
        $message .= "Best regards,\n\n";
        $message .= "N A R A D A Reservations Team";

        $to = $email;
        $headers = "From: jrsdevelopment@hotmail.com"; // Replace with your actual email
        $headers .= "\r\nContent-type: text/plain"; // Set content type as plain text

        // Send the email
        if (mail($to, $subject, $message, $headers)) {
            http_response_code(200);
            echo "Email sent successfully.";
        } else {
            error_log("Error sending email", 0);
            
            http_response_code(500);
            echo "Error sending email.";
        }
    } else {
        http_response_code(400);
        echo "Invalid request.";
    }
}else {
    http_response_code(400);
    echo "Invalid request.";
}
?>

