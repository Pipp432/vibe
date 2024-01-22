import React from "react";

function BigButton({ displayText }: { displayText: string }) {
	return (
		<button className=' bg-secondary w-[600px] h-[50px] rounded-2xl'>
			{displayText}
		</button>
	);
}

export default BigButton;
