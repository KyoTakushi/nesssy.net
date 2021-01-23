---
slug: "how-to-override-material-ui-style"
date: "2021-01-12"
title: "ThemeProviderとcreateMuiThemeでMaterial-UIのスタイルを上書きした"
language: "ja"
---

関数のなどは省略しています。  

```javascript
import React from "react";
import DayjsUtils from "@date-io/dayjs";
import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider,
} from "@material-ui/pickers";
import { createMuiTheme } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/styles";

const materialTheme = createMuiTheme({
  overrides: {
    //overrideで既存スタイルを上書き
    MuiInputBase: {
      root: {
        width: "220px",
      },
      input: {
        background: "#eeeeee",
        textAlign: "center",
        padding: "5px",
        height: "30px",
        borderRadius: "8px",
      },
    },
    MuiOutlinedInput: {
      input: {
        padding: "5px",
      },
      notchedOutline: {
        border: "none",
      },
    },
    MuiIconButton: {
      root: {
        padding: "10px",
        width: "40px",
      },
    },
    MuiPickersDay: {
      daySelected: {
        backgroundColor: "#00a0e9",
        "&:hover": {
          backgroundColor: "#00a0e9",
        },
      },
    },
  },
});

return (
  <div className="custom-picker">
    <MuiPickersUtilsProvider utils={DayjsUtils}>
      <ThemeProvider theme={materialTheme}>
        <KeyboardDatePicker
          autoOk
          value={selectedDate}
          placeholder="2020/11/2"
          onChange={date => handleDateChange(date)}
          format="YYYY/MM/DD"
          inputVariant="outlined"
          variant="inline"
          open={isOpen}
          onOpen={() => setIsOpen(true)}
          onClose={() => setIsOpen(false)}
          keyboardIcon={<CustomIcon />}
          disableToolbar
        />
      </ThemeProvider>
    </MuiPickersUtilsProvider>
  </div>
)
```

結果  
![](./blog-images/custom_material_picker_1.png)  
![](./blog-images/custom_material_picker_2.png)