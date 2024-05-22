import { memo, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { updateTheme } from "@/slices/themeReducer";
import { useSelector } from "react-redux";

const ThemeProvider = memo(({ children }) => {
  const storeTheme = useSelector((store) => store.theme.storedTheme);
  const [currentTheme, setCurrentTheme] = useState(0);
  const dispatch = useDispatch();

  //TODO: this useEffect runs after first render wich causes blinking
  useEffect(() => {
    const localTheme = JSON.parse(localStorage.getItem("theme"));

    // if it exists in localstorage
    if (localTheme || localTheme === 0) {
      dispatch(
        updateTheme({
          theme: localTheme,
        })
      );
    } else {
      localStorage.setItem("theme", "0");
    }
  }, []);

  // when redux value changes update state
  useEffect(() => {
    setCurrentTheme(storeTheme);
    localStorage.setItem("theme", storeTheme);
  }, [storeTheme]);


  console.log("themeprovider ran", storeTheme, currentTheme)

  return <main className={`theme${currentTheme + 1}`}>{children}</main>;
});

export default ThemeProvider;
