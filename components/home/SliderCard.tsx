import Image from "next/image";

interface SliderProp {
    imageUrl: string
}

const SliderCard: React.FC<SliderProp> = ({ imageUrl }) => {
    return (
        <>
            <div>
                <Image src={imageUrl} alt="slider" />
            </div>
        </>
    )
}

export default SliderCard;