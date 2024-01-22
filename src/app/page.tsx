import Image from "next/image";
import LoginInput from "../components/login/LoginInput";

export default function Home() {
	return (
		<div className='bg-black p-10'>
			<LoginInput isPassword={false} title='Username' />
		</div>
	);
}
