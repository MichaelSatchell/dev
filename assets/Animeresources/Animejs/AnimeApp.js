// Your application should meet the requirements listed below:
// 1. Selects from a pool of at least ten names of your classmates.
// 2. A 'Generate Random Names' button that initiates the selection of 4 random names.
// 3. The selected random names are displayed to the browser.
// 4. Each time the Generate Random Names button is pressed, a new set of names appears 
//    (replacing the previous set of 4 random names)

// 5. A button named 'Clear' that removes the populated list from the screen
// 6. The application should be designed to be visually pleasing. 
// Note: Do not spend too much time on design. Focus primarily on functionality(i.e. steps 1-5).


/* list of names that will be randomized */
let firName = [
    'Rock Lee', 'Light Yagami', 'Edward Elric', 'Spike Spiegel', 'Roronoa Zoro', 'Eren Yeager', 'Saitama', 'Itachi Uchiha', 'Satoru Gojo', 'Izuku Midoriya', 'Guts', 
    'Tanjiro Kamado', 'Killua Zoldyck', 'All Might', 'Might Guy', 'Gon Freecss', 'Roy Mustang', 'Hisoka', 'Dio Brando', 'Mikasa Ackerman', 'Kenshin Himura', 'Ken Kaneki', 'Alucard', 'Isaac Netero', 'Katsuki Bakugo', 'Meliodas', 'Motoko Kusanagi', 'Levi Ackerman', 'Arsene Lupin', 'Chika Fujiwara',
    'Shoto Todoroki', 'Violet Evergarden', 'Shigeo Kageyama', 'Kakashi Hatake', 'Afro Samurai', 'Ninja Ninja', 'Jinno', 'Esdeath', 'Akame', 'Susanoo', 'Ryuko Matoi',
    'Satsuki Kiryuin', 'Lelouch Lamperouge', 'Luffy', 'Goku', 'Vegeta', 'Picalo', 'Darth Vader', 'One Punch Man', 'He-man', 'Sasuke Uchiha', 
    'Naruto Uzamaki', 'Ichigo Kurosaki', 'Yoruichi Shihouin', 'Majin Buu', 'Yusuke Urameshi', 'Jotaro Kujo',];
/*
eneter name prompt that returns a message to the user.
*/
enterName = () => {
    let character = prompt('enter your name');
    if (character != null) {
        document.getElementById('enterYourName').innerHTML = `Awww the brave warrior, ${character} click character select to see the rest of your team. Good luck!`;
    }

};



//Change the Anime Team Randomizer title if clicked.
changeMe = () =>{
 document.getElementById('helloWorld').innerHTML ="Yo, you got this!";
 };

//random name generator function to return random names of anime and cartoon characters. 
randomName = () => {
document.getElementById('ranBtn').innerHTML = `${firName [Math.floor(Math.random() * firName.length)]},  ${firName [Math.floor(Math.random() * firName.length)]},  ${firName [Math.floor(Math.random() * firName.length)]},  ${firName [Math.floor(Math.random() * firName.length)]}`; 
    
           
};


resetForm = () => {
document.getElementById('resetBtn').innerHTML = `${resetButton}`;
};





/*
addName = () => {
    document.getElementById('characterName').innerHTML = ` new name added ${firName.push()}`;
};  

document.getElementByID('characterName').oninput = randomName.push();
*/

/* object.oninput = function(){myScript}; */
/*
randomName = (firName, lasName) =>{
    let ranBtn = document.getElementById('ranBtn').innerHTML = firName[0]; 
    console.log(ranFirstName.innerHTML);
       
   }; */


/*
newLastName = document.getElementById('lastName').innerHTML = " ";


document.getElementByID("lastName").value = "Last Name";
const randomName = () => { document.getElementById("ranBtn");
*/
/*
randomName = (firstName, lastName) => {
   let ranBtn = document.getElementById('ranBtn').innerHTML = randomName;
    
   
   _names: [
   {firstName: 'Rock', lastName: 'Lee'},
   {firstName: 'Sasuke', lastName: 'Uchiha'},
   {firstName: 'Naruto', lastName: 'Uzumaki'},
   {firstName: 'Killer', lastName: 'Bee'}
   ]
   get names(){
      return this._names;
   },

 
};
*/

