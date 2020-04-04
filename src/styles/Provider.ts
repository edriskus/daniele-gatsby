import { jssPreset, StylesProviderProps } from "@material-ui/styles";
import { create } from "jss";

const stylesProviderProps: Partial<StylesProviderProps> = {
  jss: create({
    ...jssPreset(),
    insertionPoint: `mui-inject-first`,
    id: { minify: false }
  })
};

export default stylesProviderProps;
