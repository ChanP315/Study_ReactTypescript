 + project: SHoppingMall_Redux_App
 + jsx, tsx에서 map,filter등 배열함수로 HTML태그 생성시 key값으로 인덱스를 넘겨줌.
 + redux : combineReducers()
 + redux-middleware : redux-thunk
    + action Func에 async함수 넘겨주는 방법.
    + data type 정의 빡세게 해야함
    + creatStore()에 combinReducers({})를 이용하여 reducer를 집어넣으면 Error
        : redux-thunk version 차이일 확률이 높음. 이유는 공식 문서나 커뮤니티 자료는 그대로 사용 가능.
 + redux-devtools/extension : redux에서 action을 통해 state 수정이 잘 되었는지 실시간으로 확인할 수 있는 tool
    + chrome확장 옵션 설정해주고 npm install @redux-devtools/extension