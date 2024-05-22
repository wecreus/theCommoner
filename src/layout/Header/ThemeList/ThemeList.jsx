import { HalfCircle } from "@/common/utils";
import { memo } from "react";
import { useDispatch } from "react-redux";
import { updateTheme } from "@/slices/themeReducer";
import style from "@/assets/styles/exports.module.scss";

const ThemeList = memo(() => {
  const dispatch = useDispatch();

  const updateStore = (theme) => {
    dispatch(
      updateTheme({
        theme: theme,
      })
    );
  };

  return Array(Number(style.totalThemes))
    .fill()
    .map((el, i) => {
      return (
        <div
          className={`ThemeList theme${i + 1}`}
          key={"theme" + i}
          onClick={() => updateStore(i)}
        >
          <HalfCircle className="ThemeList__theme ThemeList__theme--primary" />
          <HalfCircle className="ThemeList__theme ThemeList__theme--secondary" />
        </div>
      );
    });
});

export default ThemeList;
