import React from "react";

function LoginInput({
	title,
  style,
  isPassword,
  onChangeHandler
}: {
	title: string;
  style:string;
	isPassword: boolean;
    onChangeHandler:(event: React.FormEvent<HTMLInputElement>)=>void
}) {
	return (
		<div className='flex flex-col text-xl gap-2'>
			<div className=' text-text-white'>{title}</div>
			<input
        onChange={onChangeHandler}
				type={isPassword ? "password" : ""}
				className={style}
			/>
		</div>
	);
}

export default LoginInput;
