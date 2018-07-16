// Load your images on page-load
function preloader() 
{
    const imagesList = [
        "./img/solar-panel.jpg",
        "./img/wind-energy.jpg",
        "./img/water.jpg"
        ];
        const images = [];
        for (let i = 0; i < imagesList.length; i++) 
        {
            images[i] = new Image();
            images[i].src = imagesList[i];
        }

        // Images ready to be used:
        console.log(`Preloaded images:\n\t${images[0].src}\n\t${images[1].src}\n\t${images[2].src}`);
};    

window.addEventListener("load", preloader);

    /* 
    Get all buttons in a NODE LIST of buttons (array like structure) */
    let btns = document.querySelectorAll("button");
    let content = document.querySelector(".content");
    /* 
    Complete your resource-object that will store the dynamic content.
    Resource object should 3 sub-objects. Give your sub-objects
    meaningful names. Every sub-object should have the following
    properties headingContent, bodyText, imgUrl and imgAlt. */
let contents = 
{
    solarEnergy: 
    {
        headingContent: "Solar Energy",
        bodyText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec nisl sit amet lectus fringilla consectetur. In hac habitasse platea dictumst. Etiam ultricies dictum lobortis. Duis aliquam sed urna eget placerat. Mauris eros dolor, egestas vel velit in, facilisis auctor sem. Interdum et malesuada fames ac ante ipsum primis in faucibus. In fermentum velit non enim cursus, et auctor sem dignissim. Sed eu orci mauris. Morbi viverra tempor lectus, vel lacinia mi mattis quis. Aenean faucibus gravida quam, in aliquet nulla laoreet vitae. Proin et elementum nunc. Nam vitae suscipit felis. Praesent a porttitor mi. Nunc eget eleifend orci.",
        imgUrl: "./img/solar-panel.jpg",
        imgAlt: "solar-panel"
    },
    windEnergy: 
    {
        headingContent: "Wind Energy",
        bodyText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec nisl sit amet lectus fringilla consectetur. In hac habitasse platea dictumst. Etiam ultricies dictum lobortis. Duis aliquam sed urna eget placerat. Mauris eros dolor, egestas vel velit in, facilisis auctor sem. Interdum et malesuada fames ac ante ipsum primis in faucibus. In fermentum velit non enim cursus, et auctor sem dignissim. Sed eu orci mauris. Morbi viverra tempor lectus, vel lacinia mi mattis quis. Aenean faucibus gravida quam, in aliquet nulla laoreet vitae. Proin et elementum nunc. Nam vitae suscipit felis. Praesent a porttitor mi. Nunc eget eleifend orci..",
        imgUrl: "./img/wind-energy.jpg",
        imgAlt: "wind-turbine"
    },
    rainwater: 
    {
        headingContent: "Rainwater",
        bodyText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec nisl sit amet lectus fringilla consectetur. In hac habitasse platea dictumst. Etiam ultricies dictum lobortis. Duis aliquam sed urna eget placerat. Mauris eros dolor, egestas vel velit in, facilisis auctor sem. Interdum et malesuada fames ac ante ipsum primis in faucibus. In fermentum velit non enim cursus, et auctor sem dignissim. Sed eu orci mauris. Morbi viverra tempor lectus, vel lacinia mi mattis quis. Aenean faucibus gravida quam, in aliquet nulla laoreet vitae. Proin et elementum nunc. Nam vitae suscipit felis. Praesent a porttitor mi. Nunc eget eleifend orci.",
        imgUrl: "./img/water.jpg",
        imgAlt: "water-buckets"
    }
    };

    /* 
    Get the reference to your HTML-container
    that will be dynamically loaded from the resource-object. */
let container = document.querySelector(".content");
    
    /* 
    The first button in a NODE LIST of buttons will initially 
    have the id: active-button - this will uniquely style 
    the active button (CSS rule). 
    
    The first content from the
    resource-object will be loaded on the page load:
    `<h1>${headingContent}</h1>
     <img src="${imgUrl}" alt="${imgAlt}">
     <p>${bodyText}</p>` */
    
    /* 
    Start your handleSelection function here. */ 
function handleSelection(e)
{
    /* 
    Remove the id active-button from the element that
    contains it prior to the click-event. 

    This will require the loop throught the NODE LIST of buttons. 
    Inside the loop, use conditional and the element object method
    hasAttribute() to check if the current button in the loop containes the id.
    If it does, use element-object property removeAttribute()
    to remove the id. */
    for (let i = 0; i < btns.length; i++) 
    {
        
        if (btns[i].firstChild.hasAttribute("id")) 
        {
            btns[i].firstChild.removeAttribute("id");
        }
    }
 
    /*
    Use the element-object method setAttribute() to set the id active-button 
    to the currently clicked button. */
    e.target.setAttribute("id", "active-btn");
    
        /* 
        Use conditional and event-object to check which button is clicked
        and based on that, create HTML with the data inside the backticks:
        `<h1>${headingContent}</h1>
         <img src="${imgUrl}" alt="${imgAlt}">
         <p>${bodyText}</p>`
        Assign this content to to your HTML-container that will 
        be dynamically loaded (you already got the reference to 
        this container before you started the function handleSelection) */
    if(e.target.parentNode.getAttribute("class") == "solar-btn")
        {
            console.log("Hit solar-btn");
            
            content.innerHTML = `<h2>${contents.solarEnergy.headingContent}</h2>
         <img src="${contents.solarEnergy.imgUrl}" alt="${contents.solarEnergy.imgAlt}">
         <p>${contents.solarEnergy.bodyText}</p>`;

        }
    if(e.target.parentNode.getAttribute("class") == "wind-btn")
        {
            console.log("Hit wind-btn");
            
            content.innerHTML = `<h2>${contents.windEnergy.headingContent}</h2>
         <img src="${contents.windEnergy.imgUrl}" alt="${contents.windEnergy.imgAlt}">
         <p>${contents.windEnergy.bodyText}</p>`;

        }
    if(e.target.parentNode.getAttribute("class") == "rain-btn")
        {
            console.log("Hit rain-btn");
            
            content.innerHTML = `<h2>${contents.rainwater.headingContent}</h2>
         <img src="${contents.rainwater.imgUrl}" alt="${contents.rainwater.imgAlt}">
         <p>${contents.rainwater.bodyText}</p>`;

        }
    
   
}
    /* 
    Close your handleSelection function here. */  
    
    /* 
    Register all buttons to click event. The event-handler handleSelection will listen 
    for this event to happen. */ 
for (let i = 0; i < btns.length; i++) 
{   
    btns[i].addEventListener("click", handleSelection);
}
