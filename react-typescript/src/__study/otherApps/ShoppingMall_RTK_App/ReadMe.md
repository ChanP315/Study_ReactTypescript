 + project: SHoppingMall_RTK_App
 + redux : store 잘 연결 되어있는지 확인하기.
 + redux-toolkit : npm install @reduxjs/toolkit react-redux
     + reducers의 초기 state init객체명을 반드시 'initialState'로 해야함 (ex: 기존에 'initproduct'식으로 안됨.)
     + configureStore() : 기존의 index.ts에서 applyMiddleware(),combineReducers({})하는 부분이 내장됨.
         + 기존 index.ts에서 "export type RootState = ReturnType<typeof obj>" 부분을 제외하고는 필요 없어짐. (index.ts 파일 삭제)
     + PayloadAction<type> : <type>에는 아래 코드처럼 action.payload를 통해 전달하고자 하는 type을 설정
         +  reducers: {
               getProductSuccess: (state, action: PayloadAction<productState[]>) => {
                  state.productList = action.payload;
               },
               get_ProductDetailSuccess: (state, action: PayloadAction<productState>) => {
                  state.productList = [action.payload];
               }
            }


 + Redux-toolkit studying ver 2
     + project: ShoppingMall_RTK_App Ver 2
     + create customError Type (ex. tryCatch에서 사용)

     + createAsyncThunk()
         + extraReducers(builder) 추가
             + addCase를 통해 pending, fulfilled, rejected 케이스 구현가능.
         + tryCatch문에서 createAsyncThunk함수의 타입을 아주 정확하게 상시해야 에러문 반환 가능.
         