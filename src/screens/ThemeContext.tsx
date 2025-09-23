// import { createContext,ReactNode, useEffect, useState } from "react";
// import AsyncStorage from "@react-native-async-storage/async-storage";
// import { useColorScheme } from "react-native";
//   export type ThemeContextType = {
//     isSystemTheme:boolean,
//    currentTheme:string,
//    toggleTheme:(newTheme:string)=> void;
//    useSystemTheme:()=> void;
//  }
// export const ThemeContext = createContext<ThemeContextType>({
//     isSystemTheme:false,
//     currentTheme:"light",
//     toggleTheme:()=>{},
//     useSystemTheme: ()=>{}
// });

// const ThemeProvider = ({children}:{children:ReactNode})=>{
//     const colorScheme = useColorScheme();
//     const [theme,setTheme] = useState<string>('light')
//     const [systemTheme , setSystemTheme] = useState<boolean>(false)
//     useEffect(()=>{
//     const getTheme = async()=>{
//         try {
//            const savedThemeObject = await AsyncStorage.getItem('theme');
//            const savedThemeObjectData = JSON.parse(savedThemeObject!)
//            if(savedThemeObjectData){
//             setTheme(savedThemeObjectData.mode)
//             setSystemTheme(savedThemeObjectData.system)
//            } 
//         } catch (error) {
//             ////console.log("Error in loading theme",error); 
//         }
//     }
//     getTheme();
//     },[])
//     useEffect(()=>{
//     if(colorScheme && systemTheme){
//         const themeObject = {
//             mode:colorScheme,
//             system:true
//         }
//         AsyncStorage.setItem('theme',JSON.stringify(themeObject))
//         setTheme(colorScheme)   
//         setSystemTheme(true)
//     }
//     },[colorScheme])
//     const toggleTheme = (newTheme:string)=>{
//         const themeObject = {
//             mode:newTheme,
//             system:false
//         }
//    AsyncStorage.setItem('theme',JSON.stringify(themeObject))
//     setTheme(newTheme);
//     setSystemTheme(false)
//     }
//     const useSystemTheme = () =>{
//         if(colorScheme){
//             const themeObject = {
//                 mode:colorScheme,
//                 system:true
//             }
//             AsyncStorage.setItem('theme',JSON.stringify(themeObject))
//             setTheme(colorScheme)
//             setSystemTheme(true)
//         }
//     }
//  return(
//     <ThemeContext.Provider value={{currentTheme:theme,toggleTheme,useSystemTheme,isSystemTheme:systemTheme}}>
//         {children}
//     </ThemeContext.Provider>
//  )
// }

// export default ThemeProvider;
// ThemeProvider.tsx
import React, { ReactNode, createContext, useEffect } from 'react';
import { useColorScheme } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { setSystemTheme, setTheme, enableSystemTheme } from '../Redux/themeSlice';

export const ThemeContext = createContext({
  currentTheme: 'light',
  isSystemTheme: false,
  toggleTheme: (_: string) => {},
  useSystemTheme: () => {},
});

const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const colorScheme = useColorScheme();
  const dispatch = useDispatch();

  const currentTheme = useSelector((state: any) => state.theme.currentTheme);
  const isSystemTheme = useSelector((state: any) => state.theme.isSystemTheme);

  // Sync theme with system only if system theme is enabled
  useEffect(() => {
    if (colorScheme && isSystemTheme) {
      dispatch(setSystemTheme(colorScheme));
    }
  }, [colorScheme, isSystemTheme]);

  const toggleTheme = (newTheme: string) => {
    dispatch(setTheme(newTheme));
  };

  const useSystemThemeHandler = () => {
    dispatch(enableSystemTheme());
    if (colorScheme) {
      dispatch(setSystemTheme(colorScheme));
    }
  };

  return (
    <ThemeContext.Provider
      value={{
        currentTheme,
        isSystemTheme,
        toggleTheme,
        useSystemTheme: useSystemThemeHandler,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
