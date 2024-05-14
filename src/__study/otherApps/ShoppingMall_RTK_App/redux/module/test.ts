import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

interface UserData {
  id: number;
  name: string;
}

// 비동기 통신을 위한 Thunk 정의
const fetchUserById = createAsyncThunk<
  UserData,           // 반환 타입
  number,             // 첫 번째 인자의 타입 (payload)
  {
    rejectValue: string  // 거부될 때 반환될 값의 타입
  }
>(
  'users/fetchByIdStatus',
  async (userId, { rejectWithValue }) => {
    try {
      const response = await fetch(`https://reqres.in/api/users/${userId}`);
      if (!response.ok) {
        throw new Error('Server error!');
      }
      const data = await response.json();
      return data.data as UserData;
    } catch (error) {
      return rejectWithValue('Failed to fetch user');
    }
  }
);

// Slice 정의
const usersSlice = createSlice({
  name: 'users',
  initialState: {
    entities: [] as UserData[],
    loading: 'idle',
    error: null as string | null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUserById.fulfilled, (state, action) => {
      state.entities.push(action.payload);
    });
    builder.addCase(fetchUserById.rejected, (state, action) => {
      if (action.payload) {
        state.error = action.payload; // 사용자 정의 오류 메시지 설정
      } else {
        state.error = action.error.message || 'Unknown error';
      }
    });
  },
});

export const { reducer: usersReducer } = usersSlice;