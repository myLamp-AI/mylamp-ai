import Image from "next/image";

interface SliderProp {
    imageUrl: string
}

const SliderCard: React.FC<SliderProp> = ({ imageUrl }) => {
    return (
        <>
            <Image src={imageUrl} alt="slider" height={100} width={100} />
        </>
    )
}

export default SliderCard;