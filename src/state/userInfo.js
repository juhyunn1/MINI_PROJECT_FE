import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist'

const { persistAtom } = recoilPersist();

export const userInfo = atom({
  key: 'userInfo',
  default: {
    id: -1,
    name: '',
    email: '',
    password: ''
  },
  effects_UNSTABLE: [persistAtom],
});