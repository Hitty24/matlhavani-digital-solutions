function openChat(){

let question = prompt(
"Hi 👋 Welcome to Matlhavani Digital Solutions.\n\nAsk us about websites, business setup or security company services:"
);


let answer = "";


question = question.toLowerCase();



if(question.includes("website")){

answer =
"Our websites start from R3,500. We create professional websites for businesses. WhatsApp us for a free consultation.";

}


else if(question.includes("cipc") || question.includes("business")){

answer =
"Yes, we assist entrepreneurs with business setup support and digital solutions. Contact us on WhatsApp for assistance.";

}


else if(question.includes("security")){

answer =
"We help security businesses with website development, branding and digital setup.";

}


else{

answer =
"We can help with websites, business setup, branding and digital solutions. Chat with us on WhatsApp for more details.";

}



alert(answer);


}
