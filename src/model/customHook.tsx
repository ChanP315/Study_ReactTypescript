import React, {useEffect, useRef} from 'react'

const customHook = () => {
    console.log("아무일도...없었다...")
    return (<React.Fragment/>)
}
export default customHook;

export const useEffectCustom = (func:()=>void, deps:any[]) => {
    const Mount = useRef(false);

    useEffect(()=> {
        Mount.current? func() : Mount.current = true; 
    },[deps])
}

