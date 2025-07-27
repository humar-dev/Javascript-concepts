
//<------------------- SetTimeOut and SetInterval Concept------------>


//Syntax
// SetTimeout(function , timeInterval)
 
  const sum = (a,b)=>{
    console.log("sum of a and b " + (a+b))
    
  }
   
  setTimeout(sum, 1000 , 1, 2)

 

   console.log("Starts")
 
   setTimeout(()=>{
     console.log("This code Will run after Two seconds")
   }, 2000)

    console.log("End")

    //OUTPUT
    //1-Start  => 2-End => 3- This code will run after 2 seconds




    //----------SetInterval-------


    let counter = 0 ;

     const setCounterValue = setInterval(()=>{
        counter = counter+1;
         console.log(counter)

         if(counter === 5){
            clearInterval(setCounterValue);
         }
     } , 1000)

     /// one more example with settimeout and of SetInterval
  
     let countdown = 4;

      const countDownInterval = setInterval(()=>{
            console.log("countodown " + countdown--);
      })

     setTimeout(()=>{
         clearInterval(countDownInterval)
         console.log('CountDown End')
     },20)