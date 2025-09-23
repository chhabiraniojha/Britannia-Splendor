import React, { useContext, useEffect, useRef, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet,Image, Dimensions, KeyboardAvoidingView, ActivityIndicator, StatusBar, ScrollView } from 'react-native';
import { MaterialIcons, Feather } from '@expo/vector-icons';
import Svg, { Path } from 'react-native-svg';
// import { useRouter } from 'expo-router';
import Checkbox from 'expo-checkbox';
import { ThemeContext } from './ThemeContext';
import { Colors } from './Colors';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { clearCredentials, login,setafterLoginUser,setCredentials, setIsAuthenticate } from '../Redux/loginSlice';
// import { setwalletAmount } from '@/components/Redux/contactSlice';
import { scale } from "react-native-size-matters";
import { HelloWave } from './HelloWave';
import { useNavigation } from '@react-navigation/native';
import { scale as _scaleInt } from "react-native-size-matters";

export const scaleInt = (size: number) => Math.round(scale(size));

// import Constants from "expo-constants";
// import { t } from 'i18next';
 const  Login =()=> {
    const dispatch = useDispatch()
        const inputRef = useRef(null);
   const navigation = useNavigation()
  const {currentTheme} = useContext(ThemeContext)
   const HEIGHT = scaleInt(250);
    const height = scaleInt(70); // current SVG height
      const { width } = Dimensions.get('window');
        const { email: savedEmail, password: savedPassword, rememberMe } = useSelector((state:any)=>state.login);
      const controlPointY = height * 1; // you can tweak this
      useEffect(() => {
        if (rememberMe) {
          setEmail(savedEmail);
          setPassword(savedPassword);
          setRemember(true);
        }
      }, []);
  
     const backgroundColor = currentTheme === 'dark' ? Colors.designblack : '';
          const textColor = currentTheme === 'dark' ? Colors.white : Colors.Appcolor;
        const inputBorderColor = currentTheme === 'dark' ? Colors.white : '#000000';
    
          const [email, setEmail] = useState('');
          const [password, setPassword] = useState('');
          const [emailError, setEmailError] = useState('');
          const [passwordError, setPasswordError] = useState('');
          const [loading, setLoading] = useState(false);
          const [feedback, setFeedback] = useState<{ message: string; type: 'success' | 'error' } | null>(null);
          const [isButtonDisabled, setIsButtonDisabled] = useState(true);
          const [showPassword, setShowPassword] = useState(false);
          const [remember, setRemember] = useState(false);
           useEffect(() => {
                  const isEmailValid = email && !emailError;
                  const isPasswordValid = password && !passwordError;
                  const isFormValid = isEmailValid && isPasswordValid;
                  setIsButtonDisabled(!isFormValid);
                   }, [email, password, emailError, passwordError]);
            const validateEmail = (text: string) => {
              const lowercase = text.toLowerCase();
              setEmail(lowercase);
              if(text.length ===0){
                setEmailError('');
                return ;
              }
              const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
             if (!emailRegex.test(lowercase)) {
                setEmailError('Please enter a valid email address');
              } else {
                setEmailError('');
              }
            };
              const validatePassword = (text: string) => {
              setPassword(text);
              if(text.length === 0){
                setPasswordError('');
              }
              else if (text.length < 6) {
                setPasswordError('Password must be  6 digits');
              } else {
                setPasswordError('');
              }
            };
             useEffect(() => {
                const timer = setTimeout(() => {
                  inputRef.current?.focus(); // Auto-focus after small delay
                }, 100); // 100ms delay to ensure component is mounted
            
                return () => clearTimeout(timer);
              }, []);
      
          const loginUser = async () => {
        if (isButtonDisabled) {
          setFeedback({ message: 'Please correct the errors before submitting', type: 'error' });
          return;
        }
        if (remember) {
          dispatch(setCredentials({ email, password, rememberMe: true }));
        } else {
          dispatch(clearCredentials());
        }
        setLoading(true);
        try {
          const response = await axios.post(`${process.env.EXPO_PUBLIC_BASE_URL}/user/login`, {
            email,
            password
          });
          console.log("response",response.data)
          if (response.data.statusCode === 1) {
            setLoading(false)
            setFeedback({ message: response.data.message, type: 'success' });
            const token = response.data?.token;
            const user = response.data;
            // dispatch(setafterLoginUser(user))
            setRemember(false)
            dispatch(login(token));
               dispatch(setIsAuthenticate(true))
            setEmail('');
            setPassword('');
              setFeedback(null);
          } else {
            setFeedback({ message: response.data.message, type: 'error' });
            console.log("error")
            setEmail('');
            setRemember(false)
            setPassword('');
            dispatch(setIsAuthenticate(false))
            setTimeout(() => {
              setFeedback(null);
            }, 3000);
          }
        } catch (error) {
          setFeedback({ message: 'An error occurred, please try again.', type: 'error' });
          console.log('loginpage',error)
            setEmail('');
            setRemember(false)
            setPassword('');
            dispatch(setIsAuthenticate(false))
          setTimeout(() => {
            setFeedback(null);
          }, 3000);
        } finally {
          setLoading(false);
        }
      };
                      useEffect(() => {
                        if (rememberMe) {
                          setEmail(savedEmail);
                          setPassword(savedPassword);
                          setRemember(true);
                        }
                      }, []);
                    useEffect(() => {
              const isEmailValid = email && !emailError;
              const isPasswordValid = password && !passwordError;
              const isFormValid = isEmailValid && isPasswordValid;
              setIsButtonDisabled(!isFormValid);
               }, [email, password, emailError, passwordError]); 
                useEffect(() => {
                   const timer = setTimeout(() => {
                     inputRef.current?.focus(); // Auto-focus after small delay
                   }, 100); // 100ms delay to ensure component is mounted
               
                   return () => clearTimeout(timer);
                 }, []);
                 const handleRememberToggle = () => {
                   setRemember(!remember);
                   if (remember) {
                     // User unchecked remember me
                     dispatch(clearCredentials());
                   }
                 };       
  return (
 <KeyboardAvoidingView
     style={{
      flex:1,
      // padding:20,
      height:"100%",
       backgroundColor: currentTheme === "dark" ? Colors.black : Colors.naturalwhite,
      }}
     >
     <StatusBar
            backgroundColor={Colors.Appcolor}
            barStyle="light-content"
            translucent={false}
            hidden={false}
          />
     <ScrollView showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false}>
      {/* Header */}
      <View style={[styles.headerContainer,{height:HEIGHT,backgroundColor:"#217306"}]}>
      <View style={styles.circleBackground}>
        <View style={{display:"flex",flexDirection:"row",justifyContent:"center",gap:20,alignItems:"center",marginBottom:scaleInt(15)}}>   
        <Image
          source={require('../../assets/Startlogo.png')} // Replace with your logo path
          style={styles.logo}
          resizeMode='contain'
          />
          <View style={{display:"flex",flexDirection:"row",alignItems:"center",}}>
        <Text style={styles.title2}>MyP</Text>
        <View style={{ position: 'relative', width: scaleInt(25) }}>
    <Text style={{
      position: 'absolute',
      top: scaleInt(-9),
      left: scaleInt(1),
      color: '#fdb913',
      fontSize: scaleInt(60),
      zIndex: scaleInt(1),
    }}>
      ´
    </Text>
    <Text style={styles.title2}>a</Text>
  </View>
        <Text style={[styles.title2,{marginLeft:scaleInt(4)}]}>y</Text>
          </View>
          </View>
        <Text style={styles.title}>
          MyPay
          </Text>
        <Text style={styles.subtitle}>
          {/* {t("rechargeDiscount")} */}
          Get upto 3% discount on every recharge.
        </Text>
      </View>
    <Svg
  width={width}
  height={height}
  viewBox={`0 0 ${width} ${height}`}
  style={{ width: '100%',position:"absolute",top:scaleInt(200) }}
>
  <Path
    d={`M0,0 Q${width / 2},${controlPointY} ${width},0 L${width},${height} L0,${height} Z`}
    fill={currentTheme === "dark" ? Colors.black : Colors.naturalwhite}
  />
</Svg>
      </View>
      {/* Input Fields */}
      <Text style={{ fontSize: scaleInt(26), fontWeight: 'bold', color: textColor, marginBottom: scaleInt(10),marginTop:scaleInt(5),marginLeft:scaleInt(10)}}>
      {/* {t('Hi')} {t("welcome")} */}
       Hi, Welcome 
       <HelloWave />
       </Text>
      <View style={styles.inputContainer}>
        <View style={{display:"flex",flexDirection:"row",alignItems:"center",gap:scaleInt(10)}}>
          <MaterialIcons name="email" size={scaleInt(24)} color={currentTheme ==="dark"?Colors.white:Colors.Appcolor} />
        <View style={[styles.inputBox,{borderBottomColor:currentTheme ==="dark"?Colors.white:Colors.Appcolor}]}>
          <TextInput
              placeholder="Email"
              ref={inputRef}
              style={[styles.input, { color: textColor }]}
               placeholderTextColor={textColor}
            value={email}
            onChangeText={validateEmail}
            keyboardType='email-address'
            autoCapitalize="none"
          />
        </View>
        </View>
       {/* <Text style={{width:"80%",margin:"auto"}}> */}
         {emailError ? <Text style={styles.errorMessage}>{emailError}</Text> : null}
         {/* </Text> */}
        <View style={{display:"flex",flexDirection:"row",alignItems:"center",gap:10}}>
          <Feather name="lock" size={scaleInt(24)} color={currentTheme ==="dark"?Colors.white:Colors.Appcolor} />
        <View style={[styles.inputBox,{borderBottomColor:currentTheme ==="dark"?Colors.white:Colors.Appcolor}]}>
          <TextInput
    style={[styles.input, { color: textColor}]}
     placeholderTextColor={textColor} 
          placeholder="Password"
            secureTextEntry={!showPassword}
            value={password}
            onChangeText={validatePassword}
            keyboardType='numeric'
            />
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <Feather name={showPassword ? 'eye-off' : 'eye'} size={scaleInt(20)} color={currentTheme ==="dark"?Colors.white:Colors.Appcolor} style={{bottom:2}} />
          </TouchableOpacity>
        </View>
            </View>
           {/* <Text style={{width:"80%",margin:"auto"}}> */}
            {passwordError ? <Text style={styles.errorMessage}>{passwordError}</Text> : null}
            {/* </Text>  */}
        {/* Remember Password */}
        <View style={styles.checkboxContainer}>
          <Checkbox
          color={remember ?Colors.Appcolor:""}
            value={remember}
            onValueChange={handleRememberToggle}
            style={{ width: scaleInt(20), height: scaleInt(20) }}
          />
          <Text style={[styles.checkboxLabel,{color:currentTheme ==="dark"?Colors.white:Colors.Appcolor}]}>
            {/* {t("rememberPassword")} */}
            rememberPassword
            </Text>
        </View>
        <Text style={{textAlign:"center",marginTop:scaleInt(10)}}>
                   {feedback && (
            <Text style={[styles.feedbackText, feedback.type === 'error' ? styles.errorText : styles.successText]}>
              {feedback.message}
            </Text>
          )}
          </Text>
        {/* Login Button */}
       <TouchableOpacity 
       onPress={loginUser}
        style={[styles.loginButton, { opacity: isButtonDisabled ? 0.5 : 1 }]} disabled={isButtonDisabled}>
        {loading ? (
              <>
                <ActivityIndicator animating={true} size="small" color="#fff" />
              </>
            ) : (
              <Text style={styles.loginText}>
                            {/* {t("Login")} */}
                Log in
                </Text>
            )}
        </TouchableOpacity>

        {/* Links */}
        <TouchableOpacity 
        // onPress={()=>router.replace('/forgotpassword')}
        >
        <Text style={[styles.linkText2,{color:currentTheme ==="dark"?Colors.white:"black"}]}>
         {/* {t("forgotPassword")} */}
         forgetPassword
          <Text style={styles.link}>
            {/* {t("clickHere")} */}
            clickHere
            </Text>
        </Text>
        </TouchableOpacity>
       <TouchableOpacity 
    //    onPress={()=>router.replace('/signup')}
       >
        <Text style={[styles.linkText,{color:currentTheme ==="dark"?Colors.white:"black"}]}>
          {/* {t("dontHaveAccount")} */}
          dontHaveAccount
           <Text style={styles.link}>
            {/* {t('clickHere')}*/}
            clickHere
            </Text>
        </Text>
       </TouchableOpacity>
      </View>
      <View style={styles.versionContainer}>
    {/* <Text style={[styles.versionText,{color:currentTheme ==="dark"?Colors.white:"black"}]}>MyPay {t('version')} {currentVesrion}</Text> */}
  </View>
  </ScrollView>
      </KeyboardAvoidingView>
  );
}
export default Login;
// 🔧 Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    // position:"relative"
  },
  feedbackText: {
        textAlign: "center",
        borderRadius: scaleInt(10),
        fontWeight: 'bold',
        fontSize: scaleInt(15),
      },
      successText: {
        color: '#217306',
      },
      errorText: {
        color: 'red',
      },
  errorMessage: {
        color: 'red',
        fontSize: scaleInt(14),
        textAlign:"center"
      },
  versionContainer: {
    flex:1,
    //  position: 'absolute',
     justifyContent:"flex-end",
    width: '100%',
    alignItems:'center',
  },
  svg: {
    position: 'absolute',
    bottom: scaleInt(-5),
  },
  inputContainer: {
    paddingHorizontal: scaleInt(20),
    paddingBottom:"16%"
  },
  inputBox: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: scaleInt(1),
    marginVertical: scaleInt(15),
    // paddingHorizontal: 5,
      width:"85%",
    // alignSelf:"center"
  },
  input: {
    flex: 1,
    // paddingLeft: 10,
    marginBottom:scaleInt(2),
   fontSize:scaleInt(14),
   color:Colors.Appcolor
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: scaleInt(10),
    marginLeft:scaleInt(4)
  },
  checkboxLabel: {
    marginLeft: scaleInt(10),
    fontSize:scaleInt(14)
  },
  loginButton: {
    backgroundColor: '#217306',
    paddingVertical: scaleInt(12),
    borderRadius: scaleInt(8),
    marginTop: scaleInt(20),
    alignItems: 'center',
    marginHorizontal:scaleInt(15)
  },
  loginText: {
    color: '#fff',
    fontWeight: '600',
    fontSize:scaleInt(15)
  },
  linkText: {
    marginTop: scaleInt(15),
    textAlign: 'center',
    fontSize:scaleInt(14),
    fontWeight:"500",
    color:"black"
  },
  linkText2: {
    marginTop: scaleInt(15),
    textAlign: 'right',
    marginBottom:scaleInt(10),
    fontSize:scaleInt(14),
    fontWeight:"600",
    color:"black"
  },
  link: {
    color: '#217306',
    fontWeight: 'bold',
  },
  versionText: {
    textAlign: 'center',
    color: 'black',
      fontSize:scaleInt(15),
    fontWeight:"500"
  },
    headerContainer: {
      backgroundColor: '#008184',
      alignItems: 'center',
      justifyContent: 'center',
  },
  circleBackground: {
    // marginTop: 10,
    alignItems: 'center',
  },
  logo: {
    width: scaleInt(60),
    height: scaleInt(60),
    // marginBottom: 10,
    borderRadius: scaleInt(30),
    backgroundColor: 'white',
  },
  title: {
    fontSize: scaleInt(25),
    fontWeight: 'bold',
    color: '#fff',
    // marginBottom: 5,
  },
  title2: {
    fontSize: scaleInt(50),
    fontWeight: '400',
    color: '#e9feff',
    // marginBottom: 5,
  },
  subtitle: {
    color: '#c7f2f4',
    textAlign: 'center',
    fontSize: scaleInt(14),
    fontWeight:"500",
    // marginBottom:scaleInt(20)
  },
});
