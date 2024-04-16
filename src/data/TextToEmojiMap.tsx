import Image from "next/image";
const textToEmojiMap = ({ text }: { text: string }) => {
  const height = "24"
  const width = "24"
  switch (text) {
    case "joy":
      return <Image alt={"joy"} height={height} width={width} src="/images/joy.jpg" />
    case "neutrality":
      return <Image height={height} width={width} alt="neutrality" src="/images/neutrality.jpg" />
    case "anger":
      return <Image alt={"anger"} height={height} width={width} src="/images/anger.jpg" />
    case "disapproval":
      return <Image height={"26"} width={"26"} alt="disapproval" src="/images/disapproval.jpg" />
    case "disappointment":
      return <Image alt={"disappointment"} height={height} width={width} src="/images/disappointment.jpg" />
    case "approval":
      return <Image height={"31"} width={"31"} alt="approval" src="/images/approval.jpg" />
    case "gratitude":
      return <Image alt={"graditude"} height={height} width={width} src="/images/gratitude.jpg" />
    case "admiration":
      return <Image height={height} width={width} alt="admiration" src="/images/admiration.jpg" />
    case "confusion":
      return <Image height={"26"} width={"26"} alt='confusion' src="/images/confusion.jpg"/>
    default:
      break;
  }
}
export default textToEmojiMap
