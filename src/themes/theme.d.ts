export interface ThemeColors {
  primary: string;
  background: string;
  card: string;
  text: string;
  border: string;
  notification: string;
}

export interface Theme {
  dark: boolean;
  colors: ThemeColors;
}
