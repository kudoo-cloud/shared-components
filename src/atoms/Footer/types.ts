export interface IComponentProps<T extends string> {
  classes?: { [K in T]?: string };
  theme?: ITheme;
}

export interface ITheme {
  drawer: {
    closedWidth: number;
    openWidth: number;
  };
  palette: {
    blueGrey: { "100": string; "50": string };
    grey: {
      "100": string;
      "200": string;
      "300": string;
      "400": string;
      "50": string;
      "500": string;
      "600": string;
      "700": string;
    };
    primary: {
      color1: string;
      color2: string;
      color3: string;
    };
    secondary: { color1: string; color2: string };
    shadow: {
      color1: string;
      color2: string;
      color3: string;
    };
  };
  typography: { font: { family1: string; family2: string } };
  breakpoints: {
    keys: Array<string>;
    values: { [k: string]: number };
    up: Function;
    down: Function;
    between: Function;
    only: Function;
    width: Function;
  };
}
