// ...On scroll slide in from the left..
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }else {
            entry.target.classList.remove('show');
        }
    });
});
const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));


const hamburgerBtn = document.getElementsByClassName('hamburger-menu')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

hamburgerBtn.addEventListener('click', () => {
    navbarLinks.classList.toggle('active')})

// ...On scroll slide in from the right..

const observer2 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }else {
            entry.target.classList.remove('show');
        }
    });
});
const hiddenElements2 = document.querySelectorAll('.hidden2');
hiddenElements2.forEach((el) => observer.observe(el));


//....changes the color of the CTA Scroll....//

document.getElementById("pulse").style.color = "greenyellow";

//............Add easterEgg..............//
let easterEggNote = ['You found my Easter Egg.']
/* jokes and quotes that will be randomized */
let wisdom = [
    'What do you call a fish wearing a bowtie?   Sofishticated', 'Why did the golfer bring two pairs of pants?  In case she got a hole in one', 'What did the digital clock say to its mom?  Look Mom, no hands',
'How many programmers does it take to change a light bulb?  None, its a hardware problem', 'I just saw my life flash before my eyes and all I could see was a close tag', 'Why did the orange lose the race? It ran out of juice', 'Why are fish so smart? They live in schools',
'Stop looking for a perfect match instead use a lighter', 'Its okay if you dont like me, not everyone has good taste', 'Life is too short, smile while you have teeth', 
'Those arent gray hairs, there just highlights', 'What do you call an angry carrot?  A steamed vegetable', 'Why did the bicycle fall over?  Because it was too tired', 
'I ordered a chicken and an egg online. I will let you know what comes first', 'Why do mushrooms get invited to all the parties?  Because they are such fungis', 'If the fence needs to be painted then paint the fence',
'Why couldnt the sailor learn the alphabet?  He got lost at C' ];
/*
enter name prompt that returns a message to the user.
*/
randomWisdom = () => {
    let character = alert(`You found my Easter Egg: ${wisdom [Math.floor(Math.random() * wisdom.length)]}`);
};





//random quote generator function to return a random quote or Dad joke. 
// randomWisdom = () => {
//     document.getElementById("easterEgg").innerHTML = `${[easterEggNote]}`;
//     document.getElementById("returnQuote").innerHTML = `${wisdom [Math.floor(Math.random() * wisdom.length)]},`; 
    
 
           
// };



// document.body.style.backgroundColor = 'red';
function quoteReset() {
    document.getElementsById("hellowWorld").reset();
  }



 
 
  function timedText() {
    const x = document.getElementById("text").innerHTML;
    setTimeout(() => { x.value = "DEVELOPER" }, 2000);
    setTimeout(() => { x.value = "DESIGNER" }, 4000);
    setTimeout(() => { x.value = "ARTIST" }, 6000);
}

const cursor1 = document.querySelector('.cursor1');
const cursor2 = document.querySelector('.cursor2');
document.addEventListener("mousemove",function(cursor){
    cursor.style.cssText = cursor2.style.cssText = "left:" + cursor.clientX
    + "px; top: " + cursor.clientY + "px;";
});



// function hoverQuote() {
//     document.getElementsByClassName(".endQuote").innerHTML.style.fontSize = "20%";
//  };


