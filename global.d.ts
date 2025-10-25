import * as DKFDS from "dkfds";

declare global {
  interface Window {
    DKFDS?: typeof DKFDS;
  }
}
