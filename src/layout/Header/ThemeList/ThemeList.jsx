import { HalfCircle } from "@/common/utils";
import { memo } from "react";
import { useDispatch } from "react-redux";
import { updateTheme } from "@/slices/themeReducer";

const ThemeList = memo(() => {
  const dispatch = useDispatch();

  const updateStore = (theme) => {
    dispatch(
      updateTheme({
        theme: theme,
      })
    );
  };

  return Array(3)
    .fill()
    .map((el, i) => {
      return (
        <div
          className="ThemeList"
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
