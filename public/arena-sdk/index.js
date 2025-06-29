import { a7 as ArenaAppStoreSdk } from "./index-D26b8tYY.js";
export {
  ArenaAppStoreSdk
};
// Patch for browser global usage
if (typeof window !== 'undefined') {
  window.ArenaAppStoreSdk = ArenaAppStoreSdk;
}
