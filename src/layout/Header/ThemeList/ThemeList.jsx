import { HalfCircle } from "@/common/utils";
import { memo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateTheme } from "@/slices/themeReducer";
import style from "@/assets/styles/exports.module.scss";
import classNames from "classnames";

const ThemeList = memo(() => {
  const dispatch = useDispatch();
  const storeTheme = useSelector((store) => store.theme.storedTheme);

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
          className={classNames({
            ThemeList: true,
            [`theme${i + 1}`]: true,
            "ThemeList--selected": i === storeTheme,
          })}
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
