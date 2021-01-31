import React, {useRef, useState} from 'react';

interface Props{
    text:string;
    /* le ? c'est optionnel */
    ok?: boolean;
    i:number;
    // eslint-disable-next-line max-len
    handleChange?:(any?:null) => void | string
}


export const Test: React.FC <Props> = ()=>{
  const [count, setCount] = useState <string>('sdf');
  const inputRef = useRef<HTMLInputElement>(null);
  const divRef = useRef<HTMLDivElement>(null);
  const handleChangeText= (event:any)=>{
    setCount(event.target.value);
  };
  return (
    <>
      <div ref={divRef} >
        <input ref={inputRef} onChange={handleChangeText} value={count} />

      </div>
    </>
  );
};
