import React from "react";

function LoginInput({
	title,
	isPassword,
}: {
	title: string;
	isPassword: boolean;
}) {
	return (
		<div className='flex flex-col text-xl gap-2'>
			<div className=' text-text-white'>{title}</div>
			<input
				type={isPassword ? "password" : ""}
				className='p-2 w-[600px] h-[50px] rounded-2xl bg-background '
			/>
		</div>
	);
}

export default LoginInput;
