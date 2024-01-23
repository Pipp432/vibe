import React from "react";

function BigButton({ displayText, onClick }: { displayText: string, onClick:()=>void}) {
	return (
		<button className=' bg-secondary w-[600px] h-[50px] rounded-2xl' onClick={onClick}>
			{displayText}
		</button>
	);
}

export default BigButton;
