import Image from 'next/image'
import image from '../../assets/image-avatar.png'

function Avatar() {
  return (
    <div className="rounded w-10">
      <Image src={image} alt="avatar" width={600} height={600} />
    </div>
  )
}

export default Avatar
