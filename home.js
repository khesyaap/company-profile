// Ini untuk menyambungkan ke gmail lewat emailjs (cuman belum bisa terjalani)

// function sendMessage(){
//     (function(){
//         emailjs.init("tYTwkC6LKP3HqG-PB"); // Account Public Key
//     })();

//     var serviceID = "service_6uztmk6"; // Email Service ID
//     var templateID = "template_ga7bxa2"; // Email Template ID

//     var params = {
//         sendername: document.querySelector("#name").value,
//         senderemail: document.querySelector("#email").value,
//         message: document.querySelector("#message").value
//     };

//     emailjs.send(serviceID, templateID, params)
//     .then( Response => {
//         alert('Thank You,' + params['sendername'] + '! Your message has been sent.');
//     })
//     .catch();
// }