//start functions

console.log('Hello')


 let submit= document.getElementById('submit')

console.log(submit,zodiacHere)

    

document.querySelector('#submit').addEventListener('click',whatAreU)

function whatAreU() { 
     //Event Listener when button is clicked
    let month = document.querySelector('#month').value
    let day = parseInt(document.querySelector('#day').value)

console.log(month,day)
    


//Aquarius
if (month === 'Jan' && day >= 20 || month === 'Feb' && day <= 19) {
    document.querySelector('#zodiacHere').innerText ="AQUARIUS (Jan20-Feb18)  I and Me are always too deep in conversation, BREATHE aquarius "
    document.querySelector('#talkToMe').innerText = "As the saying goes, if you have one foot in the past and the other in the future, all you/’re doing is pissing on the present. The first half of 2022 wants you to live in The Now. Stay steady, do your work, and, most important, celebrate your successes. After you/’ve checked everything off your to-do list, you can start planning ahead. —JR"
    document.getElementById('hereImage')
    .src= "Himage/aquarius.png";
   
    
    
    
//Pisces
} else if (month === 'Feb' && day >= 20, month === 'Feb' && day <= 29 || month === 'Mar' && day <= 20) {
    document.querySelector('#zodiacHere').innerText = "PISCES (Feb 19-March20) I love you as passionately as my emotions-dulling medications will allow, EVALUATE pisces"
    document.querySelector('#talkToMe').innerText = "The people you surround yourself with say a lot about who you are, Pisces, and your squad isn/’t looking too hot.The beginning of 2022 is a game of musical chairs with friends sliding in and out of your circle, but by the end of spring, you/’ll have found your true crew—and your life will be much better for it. —JR"
    document.getElementById('hereImage')
        .src = "Himage/Pisces.png";



    //Aries
    } else if (month === 'Mar' && day >= 21 || month === 'Apr' && day <= 20) {
    document.querySelector('#zodiacHere').innerText = "ARIES (March21-April19): Life is TOO short to be living somebody elses dream, so im listening, but already know i dont agree. PAY ATTENTION Aries!!"
    document.querySelector('#talkToMe').innerText = "Think of this year as a test run for Future You—like, 20-years-from-now Future You. Jupiter, planet of growth, is in your sign from May through October, so anything you start now will have major significance in your life trajectory. Just one thing: You/’ll have to get rid of past baggage to make room for all of this very, very exciting stuff. —JR"
    document.getElementById('hereImage')
            .src = "Himage/aries.png";



     //Taurus
    } else if (month === 'Apr' && day >= 21, month==='Apr' && day <=30 || month === 'May' && day <= 20) {
    document.querySelector('#zodiacHere').innerText = "TAURUS(Apr20-Mar20) Comfort zones are called comfort zones for a reason!! Get comfortable with being uncomfortable Taurus"
    document.querySelector('#talkToMe').innerText = "So, you have a reputation for being just a liiittle bit stubborn. But 2022 is your year to show that you/’re *also* determined to make shit happen. Fresh connections, big travel plans, and a total shift in perspective are in the stars for you. By January 1, 2023, you/’ll be a whole new Taurus. —JR "
    document.getElementById('hereImage')
        .src = "Himage/taurus.png";




    //Gemini
    } else if (month === 'May' && day >= 21 || month === 'Jun' && day <= 20) {
    document.querySelector('#zodiacHere').innerText = "GEMINI (May21-June20) Of course i talk to myself sometimes i need expert advice .Two heads are better then one  , open up Gemini "
    document.querySelector('#talkToMe').innerText = "Teamwork makes the dream work! The first half of the year is all about longevity and committing to what you/’re doing now—two things you/’re not really a fan of, but just think progress (and cash!). The second half of the year is all about introducing new commitments and intimate relationships. *wiggles eyebrows* —JR "
    document.getElementById('hereImage')
        .src = "Himage/gemini.png";





    //Cancer  
} else if (month === 'Jun' && day >= 21 ,month === 'Jun' && day <= 30|| month === 'Jul' && day <= 22) {
        document.querySelector('#zodiacHere').innerText = "CANCER (Jun21-Jul22) Sorry I had to cancel last minute but it took me forever to think of an excuse i hadn/'t used before!!"
    document.querySelector('#talkToMe').innerText = "Get ready to come out of your crab shell to take in tons of information about things you didn/’t even know that you didn/’t know—and readjust your professional, personal, and relationship goals to fit what you/’ve learned. Be flexible! It won/’t be easy, bb, but the stars are telling you now is the time to grow. —JR"
        document.getElementById('hereImage')
            .src = "Himage/Cancer.png";




     //Leo
    } else if (month === 'Jul' && day >= 23 || month === 'Aug' && day <= 22) {
    document.querySelector('#zodiacHere').innerText = "LEO(Jul23-Aug22)I/'m not gonna change who I am , so you'/re going to have to deal with it. Lighten up leo!!"
       document.querySelector('#talkToMe').innerText = "Work hard now, play harder later. At the start of the year, you’ll be buried in work projects, personal projects, project projects, etc. But after Jupiter enters Aries in May, you’ll start to see the results of all your efforts. The sense of pride is gonna feel amazing, and all the money you’ll make is even better! —JR"
        document.getElementById('hereImage')    
            .src = "Himage/Leo.png";






    //Virgo   
} else if (month === 'Aug' && day >= 23 || month === 'Sep' && day <= 22) {
        document.querySelector('#zodiacHere').innerText = "VIRGO (Aug23-Sep22) I don't have the energy to pretend I like you today. Be nice virgo"
        document.querySelector('#talkToMe').innerText = "As the always hardest-working sign of the zodiac, you deserve a break, Virgo. And it’s here: The first chunk of 2022 is about having fun, feeling frisky, and flirting TF up. You and your boo (either a longtime love or a new cutie) are growing together, and by the end of the year, you’ll be (a) thisclose and (b) a total power couple. —JR"
        document.getElementById('hereImage')
            .src = "Himage/virgo.png";

 
 
 
 
 
 
    //Libra  
   
    } else if (month === 'Sep' && day >= 23 , month === 'Sep' && day <= 30 || month === 'Oct' && day <= 22) {
        document.querySelector('#zodiacHere').innerText = "LIBRA (Sep23-Oct22) How to say fuck you in a nice way , matter fact Fuck it.Relax libra"
    document.querySelector('#talkToMe').innerText = "Time to get to work—on yourself. It/’s not like you/’ve been staying up till 2 a.m. playing The Sims every night for two years, but…now is the moment to set some healthy habits. Do this now, because from May through October, Jupiter in Aries is the best transit of the decade for your love life, and you/’ll want to be prepared. Trust. —JR"
        document.getElementById('hereImage')
            .src = "Himage/libra.jpeg";





     //Scorpio    
    
    } else if (month === 'Oct' && day >= 23 || month === 'Nov' && day <= 22) {
        document.querySelector('#zodiacHere').innerText = "SCORPIO (Oct23-Nov21) I dont hold grudges, I hold memories that keep me better prepared for next encounter . Go beyond your horizons scorpio!"
    document.querySelector('#talkToMe').innerText = "Remember when you were a little kid and absolutely obsessed with American Girl dolls, Pokémon, whatever? That’s called passion, and it’s something you haven’t felt in a while. Until now. This is your year to fall in love—with a person, a hobby, maybe even yourself—and then share that passion with the world. —JR"
        document.getElementById('hereImage')
            .src = "Himage/scorpio.png";





    //Sagitarius
    } else if (month === 'Nov' && day >= 23 ,month === 'Nov' && day <= 30|| month === 'Dec' && day <= 21) {
        document.querySelector('#zodiacHere').innerText = "SAGITAURIUS (Nov22-Dec21) You know that little thing in you head that tell you things you shoulnt DO! Yeah i dont have one of those!! "
    document.querySelector('#talkToMe').innerText = "Hi, sweetie, it’s time to come back to earth. This year, you/’ll be getting in touch with your roots, revisiting your younger self (cue that TikTok sound: “Every now and then…”), and thinking about who you want to become. Schedule alone time and plenty of naps. It’s all about learning to feel “at home” with yourself. —JR"
        document.getElementById('hereImage')
            .src = "Himage/sagit.png";
    
 
 
 
 
    //Capicorn
 
    } else if (month === 'Dec' && day >= 22 || month === 'Jan' && day <= 19) {
        document.querySelector('#zodiacHere').innerText = "CAPICORN (Dec 22-Jan19) I dont have EX's i have Y's, like Y the HELL did I date you!!"
    document.querySelector('#talkToMe').innerText = "The year starts off with a bang thanks to fiery Mars in your sign inspiring you to set bold goals and work your ass off to reach them. As independent as you are, though, things just aren’t going to work unless you start including other people. It’s time to open yourself up to the idea of a plus-one (or three or four). —JR"
        document.getElementById('hereImage')
            .src = "Himage/capicorn.png";
        
    
    
    
    
    //Days that dont Exist
    
    } else if (month === 'Feb' && day >= 30  ) {  
    document.querySelector('#zodiacHere').innerText = "UUUUMMMMMMMMMMM sleep is a must!!!!"
    document.querySelector('#talkToMe').innerText="Invalid Date"
    document.getElementById('hereImage')
        .src = "Himage/Date31.jpeg";


    } else if (month === 'Apr', 'Jun' ,'Sep' , 'Nov' && day >= 31) {
    document.querySelector('#zodiacHere').innerText = "You Cool? I think you should check the date!!! "
    document.querySelector('#talkToMe').innerText = "Invalid Date"
    document.getElementById('hereImage')
        .src = "Himage/Kevin.jpeg";
   
    
}
}


//OTHER DAY NO VALID IN THE MONTHS

    
