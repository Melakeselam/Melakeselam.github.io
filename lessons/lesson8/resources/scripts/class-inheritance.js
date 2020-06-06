/*Melakeselam Moges Mengistu (611124)
CS472 Web Application Programming
submission date: June 3, 2020

Task: 

associated html file:  
associated css files: 
*/


(function(){
    "use strict";
    const loader = function(){
        class BicyclePrototype {
            constructor(speed){
                this.speed = speed;
            }
            applyBrake(reduceBy){
                if(this.speed - reduceBy >= 0){
                    this.speed -= reduceBy;
                }else{
                    this.speed = 0;
                }
            }
            speedUp(increaseBy){
                this.speed += increaseBy;
            }
    
            getSpeed() {
                return this.speed;
            }
        }
    
        class MountainBikePrototype extends BicyclePrototype {
            constructor(speed,gear){
                super(speed);
                this.gear = gear;
            }
            
            setGear(newGear){
                let currGear = this.gear;
                this.gear = newGear;
                this.speed = this.speed / currGear * newGear;
            }
            getGear(){
                return this.gear;
            }
        }
    
        
    
        const regBike = new BicyclePrototype(1);
        const mntnBike = new MountainBikePrototype(1,1);
        
     //////////////////////////////// extra start ///////////////////////////////////////////////
    
        const regSpeedInput = document.getElementById("regSpeed");
        const regSpeedIncr = document.getElementById("regSpeedIncr");
        const regSpeedDecr = document.getElementById("regSpeedDecr");
    
        const mntnSpeedInput = document.getElementById("mntnSpeed");
        const mntnSpeedIncr = document.getElementById("mntnSpeedIncr");
        const mntnSpeedDecr = document.getElementById("mntnSpeedDecr");
        const mntnGearInput = document.getElementById("mntnGear");
        const mntnGearIncr = document.getElementById("mntnGearIncr");
        const mntnGearDecr = document.getElementById("mntnGearDecr");
    
        const regBikeImg = document.getElementById("regBike");
        const mntnBikeImg = document.getElementById("mntnBike");
    
        regBikeImg.style.left=mntnBikeImg.style.left="0.1vw";
        const speedChange = 1;
        let startInterval = 250;
        let regBikeTimer, mntnBikeTimer;
    
        regSpeedInput.value = regBike.getSpeed();
        mntnSpeedInput.value = mntnBike .getSpeed();
        
    
            
    
        const animate = function(bike,frames){
            let bikeType;
            let imgLoc;
            const imgExt = ".png";
            let currImg;
            let currFrm = 1;
    
            switch(bike){
                case regBike:
                    imgLoc = "/resources/images/regBike/";
                    bikeType = "regBike";
                    break;
                case mntnBike:
                    imgLoc ="/resources/images/mntnBike/";
                    bikeType = "mntnBike";
                    break;
                default: return;
            }
    
            const theBike = document.getElementById(bikeType);
            
            
            const render = function(){
                currImg = imgLoc+bikeType+currFrm+imgExt;
                currFrm++;
                if(currFrm>frames){
                    currFrm = 1;//reset
                }
                
                theBike.style.left = (parseFloat(theBike.style.left) + (bike.getSpeed() / 10)) + "vw";
                theBike.src = currImg;
            };
    
            
            return setInterval(render,startInterval-bike.getSpeed()*20);
        };
    
        const stopTimer = function(timer){
            clearInterval(timer);
        };
    
        /// event handlers ///
    
        regSpeedIncr.onclick = function(){
            regBike.speedUp(speedChange);
            regSpeedInput.value = regBike.getSpeed();
            stopTimer(regBikeTimer);
            regBikeTimer = animate(regBike,6);
        };
        regSpeedDecr.onclick = function(){
            regBike.applyBrake(speedChange);
            regSpeedInput.value = regBike.getSpeed();
            stopTimer(regBikeTimer);
            regBikeTimer = animate(regBike,6);
        };
        
        mntnSpeedIncr.onclick = function(){
            mntnBike.speedUp(speedChange);
            mntnSpeedInput.value = mntnBike.getSpeed();
            stopTimer(mntnBikeTimer);
            mntnBikeTimer = animate(mntnBike,8);
        };
        mntnSpeedDecr.onclick = function(){
            mntnBike.applyBrake(speedChange);
            mntnSpeedInput.value = mntnBike.getSpeed();
            stopTimer(mntnBikeTimer);
            mntnBikeTimer = animate(mntnBike,8);
        };
        mntnGearIncr.onclick = function(){
            mntnBike.setGear(mntnBike.getGear() + 1);
            mntnGearInput.value = mntnBike.getGear();
            mntnSpeedInput.value = mntnBike.getSpeed();
            stopTimer(mntnBikeTimer);
            mntnBikeTimer = animate(mntnBike,8);
        };
        mntnGearDecr.onclick = function(){
            mntnBike.setGear(mntnBike.getGear() - 1);
            mntnGearInput.value = mntnBike.getGear();
            mntnSpeedInput.value = mntnBike.getSpeed();
            stopTimer(mntnBikeTimer);
            mntnBikeTimer = animate(mntnBike,8);
        };
     
    
     /////////////////////////////////// extra end /////////////////////////////////////////
    
        function start(){
            regBikeTimer = animate(regBike,6);
            mntnBikeTimer = animate(mntnBike,8);
        }
    
        start();
    };
    
    window.onload = loader;
    }
    )();