import { atom} from "recoil";
import { recoilPersist } from 'recoil-persist';


const { persistAtom } = recoilPersist();

export const cartCountState = atom({
  key: "cartCountState",
  default: 0,
  effects_UNSTABLE: [persistAtom],
})