import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import Cookies from 'js-cookie';

interface NewsOpenState {
  openNewsId: number | null;
}

const initialState: NewsOpenState = {
  openNewsId: Cookies.get('openNewsId') ? Number(Cookies.get('openNewsId')) : null,
};

const newsOpenSlice = createSlice({
  name: 'newsOpen',
  initialState,
  reducers: {
    setOpenNewsId(state, action: PayloadAction<number | null>) {
      state.openNewsId = action.payload;
      if (action.payload !== null) {
        Cookies.set('openNewsId', action.payload.toString(), { expires: 7 }); // Сохраняем в куки на 7 дней
      } else {
        Cookies.remove('openNewsId'); // Удаляем из куки
      }
    },
    resetOpenNewsId(state) {
      state.openNewsId = null; 
      Cookies.remove('openNewsId'); // Удаляем из куки
    },
  },
});

export const { setOpenNewsId, resetOpenNewsId } = newsOpenSlice.actions;
export default newsOpenSlice.reducer;