import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';

const Indicator = () => {
   const timerStart = useSelector((state:any) => state.login?.startTimer);
  const timerDuration = useSelector((state:any) => state.login?.timeDuration);
  const productNedd= useSelector((state:any) => state.login?.productNeed);
   const [timeLeft, setTimeLeft] = useState(0);
console.log("Redux state", timerStart, timerDuration)

   useEffect(() => {
    //Stop timer when reached 0
  if (!timerStart || !timerDuration) return;
  // convert time string in to miliseconds
  const startTime = new Date(timerStart).getTime();
  // convert TimeDuration seconds to miliseconds and when the timer will reach 0
  const endTime = startTime + timerDuration * 1000;
  //set intialRemainingTime
  setTimeLeft(Math.max(0,Math.floor((endTime - Date.now())/1000)));
   //Creates a timer that runs every 1 second
   //prerv= previous value time left
  const interval = setInterval(() => {
    setTimeLeft(prev => {
      if (prev <= 1) {
        //stops the interval to avoid unnecessary
        clearInterval(interval);
        //stops the interval to avoid unnecessary
        return 0;
      }
      //otherwise, decrease timer by 1 second.
      return prev - 1;
    });
  }, 1000);
  // clean that fn that stop interval
  return () => clearInterval(interval);
}, [timerStart,timerDuration]);

  
    // Convert seconds → mm:ss
const formatTime = (seconds: number) => {
  // Minute check
  const m = Math.floor(seconds / 60);
  //remaining seconds
  const s = seconds % 60;
  //adds leading zero if needed. ex.65 seconds into "1:05"
  return `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
};
  return (
    <View style={styles.container}>
      <Text 
      style={styles.textsize}
      >UserId</Text>
      <View style={styles.columnwise}>
        <Text style={styles.textsize}>{formatTime(timeLeft)}</Text>
         <View style={[styles.TimerIndicator,{backgroundColor:"green"}]}></View>
      </View>
      {/* <View style={styles.columnwise}>
        <Text style={styles.textsize}>Fullfledge</Text>
         <View style={[styles.fullfledgeIndicator,{backgroundColor:"yellow"}]}></View>
      </View> */}
      <View style={styles.columnwise}>
        <Text style={styles.textsize}>{productNedd}</Text>
         <View style={[styles.PremiumIndicator,{backgroundColor:"red"}]}></View>
      </View>
    </View>
  )
}

export default Indicator

const styles = StyleSheet.create({
    container:{
        display:"flex",
        justifyContent:"center",
        flexDirection:"row",
        gap:15
    },
    textsize:{
    fontSize:14,
    fontWeight:"600"
    },
    columnwise:{
      alignItems:"center"
    },
    TimerIndicator:{
        height:5,
        width:5,
        marginTop:5,
        borderRadius:10,
        overflow:"hidden",
        justifyContent:"center",
        alignItems:"center",
        shadowColor: "#000",
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.2,shadowRadius: 3,
          elevation: 5,
    },
    fullfledgeIndicator:{
        height:5,
        width:5,
          marginTop:5,
        borderRadius:10,
        overflow:"hidden",
        justifyContent:"center",
        alignItems:"center",
        shadowColor: "#000",
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.2,shadowRadius: 3,
          elevation: 5,
    },
    PremiumIndicator:{
        height:5,
        width:5,
        borderRadius:10,
        marginTop:5,
        overflow:"hidden",
        justifyContent:"center",
        alignItems:"center",
        shadowColor: "#000",
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.2,shadowRadius: 3,
          elevation: 5,
    }
})