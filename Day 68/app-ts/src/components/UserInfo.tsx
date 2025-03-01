// import { FC } from "react";
import React, { useState } from 'react';

interface UserProps {
  name: string;
  age: number;
  email: string;
}

const UserInfo: React.FC<UserProps> = ({ name, age, email }) => {
  const [count, setCount] = useState<number>(0);

  function handleOnClick(event: React.MouseEvent<HTMLButtonElement>) {
    console.log(event);
  }

  function handleOnChange(event: React.ChangeEvent<HTMLInputElement>) {
    console.log(event);
  }

  return (
    <div>
      <h2>User Name: {name}</h2>
      <p>User Email: {email}</p>
      <p>User Age: {age}</p>
      <p>Count: {count}</p>
      <button onClick={handleOnClick}>Click Me</button>
      <input type="text" onChange={handleOnChange} />
    </div>
  );
};

export default UserInfo;
