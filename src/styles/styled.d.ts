import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    color: {
      main: string;
      sub: string;
      blue: string;
      textMain: string;
      textSub: string;
    };
  }
}
