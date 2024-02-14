
interface buttonStylesType{
  [key:string]:string,
  "view":string
  "delete":string
  "upload":string
} 
const buttonStyles:buttonStylesType={
  "view": "h-10 w-52 bg-neutral rounded-full text-white text-[24px] hover:bg-neutral-hover",
  "delete":"h-10 w-52 bg-error rounded-full text-white text-[24px] hover:bg-error-hover",
  "upload":"h-10 w-52 bg-success rounded-full text-white text-[24px] hover:bg-success-hover",


}
function Button({ type, onClickHandler }: { type: string, onClickHandler: () => void }) {
  const createText = (text:string)=>{
    return text.charAt(0).toUpperCase() + text.substring(1)

  }
  return (
    <button 
      className={buttonStyles[type]}
      onClick={() => { onClickHandler(); }}>{createText(type)}</button>


  )
}

export default Button
