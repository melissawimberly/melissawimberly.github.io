var warrior = {
	name: "Ragnar",
	background: "viking",
	skill_level: "beginner" 

}



var hitRound1 = Math.floor(Math.random()*2)
var hitRound2 = Math.floor(Math.random()*2.5)
var hitRound3 = Math.floor(Math.random()*2.75)

var damage = hitRound1 + hitRound2 + hitRound3
var totalDamage = 0

alert("Are you ready to face your first dragon?")
    if(true){
        var slaying = true
    }

while(slaying){
    if(hitRound1){
        console.log("Congrats! You hit the dragon!");
    	alert("Well done young warrior! Strike again...if you dare!"); 
    		if(hitRound2){
         		console.log("Great hit! Keep it up, you just need one more!");
         		alert("Young warrior you have impressed me! Strike again for victory...");
    		
    			if(hitRound3){
         			alert("YOU'VE DONE IT!!! THE DRAGON HAS BEEN SLAYED!!! CONGRATULATIONS");
            	}
    			else{
    				alert("So close, yet so far. You are not ready to face a Dragon yet young warrior...");
    			}
    		}	

    		else{
    			alert("You were strong, and now you are weak, you must practice more young warrior.")
    		}	
    }
    else{
    	alert("Sorry Charlie...This dragon ate you in one bite!");
    }
    	          
 slaying = false
        }

//need something that triggers each round
