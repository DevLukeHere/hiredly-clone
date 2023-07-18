import Image from "next/image";

export default function AboutUs() {
  const blurDataURL = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCACmAKYDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAQIAA//EABcQAQEBAQAAAAAAAAAAAAAAAAABEQL/xAAXAQEBAQEAAAAAAAAAAAAAAAABAgAE/8QAFREBAQAAAAAAAAAAAAAAAAAAAAH/2gAMAwEAAhEDEQA/AEKGOhygKGBSWIRVRmYhTRUEVICYY0hkLMWJSAoKCRVCxkpoVicYBjjMysbFY2KZGDF4MTTEY2LwYmricOHDiVCQyGRUjESKkaRUhAxsVhwhODF4MIRYLF4LClzsGOlgxgjGVjMF4MXjYSjBi8GCmIxsXgxNXE42Kw4lUEhkMipARIZFSGQsMbFYcUEY2LxsKXPBY6Ymxkudgx0wYyUYy8ZmVgxeDFFODF4MTTEY2KxsTVxONisOJVBIZDIqRiJFSGQyFhhxWNhCcGOmDCmueCx0wWFNc7Bi7BjJRjLxmBwYrGJTgxQBicbCyauDDjFK40ipBFSMTIqQSKkZmw4cOKSnBi8GFNRYLF2JsZNRYMXYMZKMZWMwZiFEAgGBmZK4xBiVwxcTFRiqKgioWY4xIAUGTU0VVTSipoNDJDMzBgzKIoIoIYMlUJiTAuLiomKgUuKiYqFlEQkMKRWTU1NVU0pqaKamshmZmYBgoNRWooLAa2pVCqI0yhcdIuOcXGU6RURFxmVCISGFKawoqaamsmpqaamsksnWYMGFUGqbTU1ma0a1GhUVpiNVAuOkXHOLjKdIuIi4zKhELMwrCsBUVVRWTU1NpqayW1hrMGBFUkVNNTWIoasDCqIioFx0i+XOOnLKdIuOfLpGKoRCWYUprBNRV1FCaippqayQwZgpqzKSmprMxTQzAwqjMyouL5Zgt05XGZiuFmLMmszBFRWYJqKiszJDMzB//9k="

  return (
    <main className="grid grid-cols-1 justify-items-center tablet:grid-cols-4 tablet:p-6 laptop:grid-cols-6 laptop:p-8 gap-2 min-h-screen p-4">
      <div className="relative">
        <Image className="rounded-lg" alt="Hiro Luke image" src={"https://assets.wobbjobs.com/images/about_us/hiroes-2022/luke.jpg"} priority placeholder="blur" blurDataURL={blurDataURL} width={220} height={220} loading="eager" quality={10} />
        <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-primary bg-fixed rounded-lg opacity-0 transition duration-300 ease-in-out hover:opacity-50">
          <p className="text-tertiary text-sm opacity-100 text-center">Engineer turned programmer. 10% movie addict, 20% matcha devotee, 15% anime fanatic, 5% gym buff, 50% gaming nerd & a 100% tech enthusiast!</p>
        </div>
      </div>
      
      <div className="relative">
        <Image className="rounded-lg" alt="Hiro Luke image" src={"https://assets.wobbjobs.com/images/about_us/hiroes-2022/luke.jpg"} priority placeholder="blur" blurDataURL={blurDataURL} width={220} height={220} loading="eager" quality={10} />
        <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-primary bg-fixed rounded-lg opacity-0 transition duration-300 ease-in-out hover:opacity-50">
          <p className="text-tertiary text-sm opacity-100 text-center">Engineer turned programmer. 10% movie addict, 20% matcha devotee, 15% anime fanatic, 5% gym buff, 50% gaming nerd, & a 100% tech enthusiast!</p>
        </div>
      </div>

      <div className="relative">
        <Image className="rounded-lg" alt="Hiro Luke image" src={"https://assets.wobbjobs.com/images/about_us/hiroes-2022/luke.jpg"} priority placeholder="blur" blurDataURL={blurDataURL} width={220} height={220} loading="eager" quality={10} />
        <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-primary bg-fixed rounded-lg opacity-0 transition duration-300 ease-in-out hover:opacity-50">
          <p className="text-tertiary text-sm opacity-100 text-center">Engineer turned programmer. 10% movie addict, 20% matcha devotee, 15% anime fanatic, 5% gym buff, 50% gaming nerd, & a 100% tech enthusiast!</p>
        </div>
      </div>

      <div className="relative">
        <Image className="rounded-lg" alt="Hiro Luke image" src={"https://assets.wobbjobs.com/images/about_us/hiroes-2022/luke.jpg"} priority placeholder="blur" blurDataURL={blurDataURL} width={220} height={220} loading="eager" quality={10} />
        <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-primary bg-fixed rounded-lg opacity-0 transition duration-300 ease-in-out hover:opacity-50">
          <p className="text-tertiary text-sm opacity-100 text-center">Engineer turned programmer. 10% movie addict, 20% matcha devotee, 15% anime fanatic, 5% gym buff, 50% gaming nerd, & a 100% tech enthusiast!</p>
        </div>
      </div>

      <div className="relative">
        <Image className="rounded-lg" alt="Hiro Luke image" src={"https://assets.wobbjobs.com/images/about_us/hiroes-2022/luke.jpg"} priority placeholder="blur" blurDataURL={blurDataURL} width={220} height={220} loading="eager" quality={10} />
        <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-primary bg-fixed rounded-lg opacity-0 transition duration-300 ease-in-out hover:opacity-50">
          <p className="text-tertiary text-sm opacity-100 text-center">Engineer turned programmer. 10% movie addict, 20% matcha devotee, 15% anime fanatic, 5% gym buff, 50% gaming nerd, & a 100% tech enthusiast!</p>
        </div>
      </div>

      <div className="relative">
        <Image className="rounded-lg" alt="Hiro Luke image" src={"https://assets.wobbjobs.com/images/about_us/hiroes-2022/luke.jpg"} priority placeholder="blur" blurDataURL={blurDataURL} width={220} height={220} loading="eager" quality={10} />
        <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-primary bg-fixed rounded-lg opacity-0 transition duration-300 ease-in-out hover:opacity-50">
          <p className="text-tertiary text-sm opacity-100 text-center">Engineer turned programmer. 10% movie addict, 20% matcha devotee, 15% anime fanatic, 5% gym buff, 50% gaming nerd, & a 100% tech enthusiast!</p>
        </div>
      </div>

      <div className="relative">
        <Image className="rounded-lg" alt="Hiro Luke image" src={"https://assets.wobbjobs.com/images/about_us/hiroes-2022/luke.jpg"} priority placeholder="blur" blurDataURL={blurDataURL} width={220} height={220} loading="eager" quality={10} />
        <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-primary bg-fixed rounded-lg opacity-0 transition duration-300 ease-in-out hover:opacity-50">
          <p className="text-tertiary text-sm opacity-100 text-center">Engineer turned programmer. 10% movie addict, 20% matcha devotee, 15% anime fanatic, 5% gym buff, 50% gaming nerd, & a 100% tech enthusiast!</p>
        </div>
      </div>

      <div className="relative">
        <Image className="rounded-lg" alt="Hiro Luke image" src={"https://assets.wobbjobs.com/images/about_us/hiroes-2022/luke.jpg"} priority placeholder="blur" blurDataURL={blurDataURL} width={220} height={220} loading="eager" quality={10} />
        <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-primary bg-fixed rounded-lg opacity-0 transition duration-300 ease-in-out hover:opacity-50">
          <p className="text-tertiary text-sm opacity-100 text-center">Engineer turned programmer. 10% movie addict, 20% matcha devotee, 15% anime fanatic, 5% gym buff, 50% gaming nerd, & a 100% tech enthusiast!</p>
        </div>
      </div>

      <div className="relative">
        <Image className="rounded-lg" alt="Hiro Luke image" src={"https://assets.wobbjobs.com/images/about_us/hiroes-2022/luke.jpg"} priority placeholder="blur" blurDataURL={blurDataURL} width={220} height={220} loading="eager" quality={10} />
        <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-primary bg-fixed rounded-lg opacity-0 transition duration-300 ease-in-out hover:opacity-50">
          <p className="text-tertiary text-sm opacity-100 text-center">Engineer turned programmer. 10% movie addict, 20% matcha devotee, 15% anime fanatic, 5% gym buff, 50% gaming nerd, & a 100% tech enthusiast!</p>
        </div>
      </div>

      <div className="relative">
        <Image className="rounded-lg" alt="Hiro Luke image" src={"https://assets.wobbjobs.com/images/about_us/hiroes-2022/luke.jpg"} priority placeholder="blur" blurDataURL={blurDataURL} width={220} height={220} loading="eager" quality={10} />
        <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-primary bg-fixed rounded-lg opacity-0 transition duration-300 ease-in-out hover:opacity-50">
          <p className="text-tertiary text-sm opacity-100 text-center">Engineer turned programmer. 10% movie addict, 20% matcha devotee, 15% anime fanatic, 5% gym buff, 50% gaming nerd, & a 100% tech enthusiast!</p>
        </div>
      </div>

      <div className="relative">
        <Image className="rounded-lg" alt="Hiro Luke image" src={"https://assets.wobbjobs.com/images/about_us/hiroes-2022/luke.jpg"} priority placeholder="blur" blurDataURL={blurDataURL} width={220} height={220} loading="eager" quality={10} />
        <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-primary bg-fixed rounded-lg opacity-0 transition duration-300 ease-in-out hover:opacity-50">
          <p className="text-tertiary text-sm opacity-100 text-center">Engineer turned programmer. 10% movie addict, 20% matcha devotee, 15% anime fanatic, 5% gym buff, 50% gaming nerd, & a 100% tech enthusiast!</p>
        </div>
      </div>

      <div className="relative">
        <Image className="rounded-lg" alt="Hiro Luke image" src={"https://assets.wobbjobs.com/images/about_us/hiroes-2022/luke.jpg"} priority placeholder="blur" blurDataURL={blurDataURL} width={220} height={220} loading="eager" quality={10} />
        <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-primary bg-fixed rounded-lg opacity-0 transition duration-300 ease-in-out hover:opacity-50">
          <p className="text-tertiary text-sm opacity-100 text-center">Engineer turned programmer. 10% movie addict, 20% matcha devotee, 15% anime fanatic, 5% gym buff, 50% gaming nerd, & a 100% tech enthusiast!</p>
        </div>
      </div>

      <div className="relative">
        <Image className="rounded-lg" alt="Hiro Luke image" src={"https://assets.wobbjobs.com/images/about_us/hiroes-2022/luke.jpg"} priority placeholder="blur" blurDataURL={blurDataURL} width={220} height={220} loading="eager" quality={10} />
        <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-primary bg-fixed rounded-lg opacity-0 transition duration-300 ease-in-out hover:opacity-50">
          <p className="text-tertiary text-sm opacity-100 text-center">Engineer turned programmer. 10% movie addict, 20% matcha devotee, 15% anime fanatic, 5% gym buff, 50% gaming nerd, & a 100% tech enthusiast!</p>
        </div>
      </div>

      <div className="relative">
        <Image className="rounded-lg" alt="Hiro Luke image" src={"https://assets.wobbjobs.com/images/about_us/hiroes-2022/luke.jpg"} priority placeholder="blur" blurDataURL={blurDataURL} width={220} height={220} loading="eager" quality={10} />
        <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-primary bg-fixed rounded-lg opacity-0 transition duration-300 ease-in-out hover:opacity-50">
          <p className="text-tertiary text-sm opacity-100 text-center">Engineer turned programmer. 10% movie addict, 20% matcha devotee, 15% anime fanatic, 5% gym buff, 50% gaming nerd, & a 100% tech enthusiast!</p>
        </div>
      </div>

      <div className="relative">
        <Image className="rounded-lg" alt="Hiro Luke image" src={"https://assets.wobbjobs.com/images/about_us/hiroes-2022/luke.jpg"} priority placeholder="blur" blurDataURL={blurDataURL} width={220} height={220} loading="eager" quality={10} />
        <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-primary bg-fixed rounded-lg opacity-0 transition duration-300 ease-in-out hover:opacity-50">
          <p className="text-tertiary text-sm opacity-100 text-center">Engineer turned programmer. 10% movie addict, 20% matcha devotee, 15% anime fanatic, 5% gym buff, 50% gaming nerd, & a 100% tech enthusiast!</p>
        </div>
      </div>

      <div className="relative">
        <Image className="rounded-lg" alt="Hiro Luke image" src={"https://assets.wobbjobs.com/images/about_us/hiroes-2022/luke.jpg"} priority placeholder="blur" blurDataURL={blurDataURL} width={220} height={220} loading="eager" quality={10} />
        <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-primary bg-fixed rounded-lg opacity-0 transition duration-300 ease-in-out hover:opacity-50">
          <p className="text-tertiary text-sm opacity-100 text-center">Engineer turned programmer. 10% movie addict, 20% matcha devotee, 15% anime fanatic, 5% gym buff, 50% gaming nerd, & a 100% tech enthusiast!</p>
        </div>
      </div>

      <div className="relative">
        <Image className="rounded-lg" alt="Hiro Luke image" src={"https://assets.wobbjobs.com/images/about_us/hiroes-2022/luke.jpg"} priority placeholder="blur" blurDataURL={blurDataURL} width={220} height={220} loading="eager" quality={10} />
        <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-primary bg-fixed rounded-lg opacity-0 transition duration-300 ease-in-out hover:opacity-50">
          <p className="text-tertiary text-sm opacity-100 text-center">Engineer turned programmer. 10% movie addict, 20% matcha devotee, 15% anime fanatic, 5% gym buff, 50% gaming nerd, & a 100% tech enthusiast!</p>
        </div>
      </div>

      <div className="relative">
        <Image className="rounded-lg" alt="Hiro Luke image" src={"https://assets.wobbjobs.com/images/about_us/hiroes-2022/luke.jpg"} priority placeholder="blur" blurDataURL={blurDataURL} width={220} height={220} loading="eager" quality={10} />
        <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-primary bg-fixed rounded-lg opacity-0 transition duration-300 ease-in-out hover:opacity-50">
          <p className="text-tertiary text-sm opacity-100 text-center">Engineer turned programmer. 10% movie addict, 20% matcha devotee, 15% anime fanatic, 5% gym buff, 50% gaming nerd, & a 100% tech enthusiast!</p>
        </div>
      </div>

      <div className="relative">
        <Image className="rounded-lg" alt="Hiro Luke image" src={"https://assets.wobbjobs.com/images/about_us/hiroes-2022/luke.jpg"} priority placeholder="blur" blurDataURL={blurDataURL} width={220} height={220} loading="eager" quality={10} />
        <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-primary bg-fixed rounded-lg opacity-0 transition duration-300 ease-in-out hover:opacity-50">
          <p className="text-tertiary text-sm opacity-100 text-center">Engineer turned programmer. 10% movie addict, 20% matcha devotee, 15% anime fanatic, 5% gym buff, 50% gaming nerd, & a 100% tech enthusiast!</p>
        </div>
      </div>

      <div className="relative">
        <Image className="rounded-lg" alt="Hiro Luke image" src={"https://assets.wobbjobs.com/images/about_us/hiroes-2022/luke.jpg"} priority placeholder="blur" blurDataURL={blurDataURL} width={220} height={220} loading="eager" quality={10} />
        <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-primary bg-fixed rounded-lg opacity-0 transition duration-300 ease-in-out hover:opacity-50">
          <p className="text-tertiary text-sm opacity-100 text-center">Engineer turned programmer. 10% movie addict, 20% matcha devotee, 15% anime fanatic, 5% gym buff, 50% gaming nerd, & a 100% tech enthusiast!</p>
        </div>
      </div>

      <div className="relative">
        <Image className="rounded-lg" alt="Hiro Luke image" src={"https://assets.wobbjobs.com/images/about_us/hiroes-2022/luke.jpg"} priority placeholder="blur" blurDataURL={blurDataURL} width={220} height={220} loading="eager" quality={10} />
        <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-primary bg-fixed rounded-lg opacity-0 transition duration-300 ease-in-out hover:opacity-50">
          <p className="text-tertiary text-sm opacity-100 text-center">Engineer turned programmer. 10% movie addict, 20% matcha devotee, 15% anime fanatic, 5% gym buff, 50% gaming nerd, & a 100% tech enthusiast!</p>
        </div>
      </div>

      <div className="relative">
        <Image className="rounded-lg" alt="Hiro Luke image" src={"https://assets.wobbjobs.com/images/about_us/hiroes-2022/luke.jpg"} priority placeholder="blur" blurDataURL={blurDataURL} width={220} height={220} loading="eager" quality={10} />
        <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-primary bg-fixed rounded-lg opacity-0 transition duration-300 ease-in-out hover:opacity-50">
          <p className="text-tertiary text-sm opacity-100 text-center">Engineer turned programmer. 10% movie addict, 20% matcha devotee, 15% anime fanatic, 5% gym buff, 50% gaming nerd, & a 100% tech enthusiast!</p>
        </div>
      </div>

      <div className="relative">
        <Image className="rounded-lg" alt="Hiro Luke image" src={"https://assets.wobbjobs.com/images/about_us/hiroes-2022/luke.jpg"} priority placeholder="blur" blurDataURL={blurDataURL} width={220} height={220} loading="eager" quality={10} />
        <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-primary bg-fixed rounded-lg opacity-0 transition duration-300 ease-in-out hover:opacity-50">
          <p className="text-tertiary text-sm opacity-100 text-center">Engineer turned programmer. 10% movie addict, 20% matcha devotee, 15% anime fanatic, 5% gym buff, 50% gaming nerd, & a 100% tech enthusiast!</p>
        </div>
      </div>

      <div className="relative">
        <Image className="rounded-lg" alt="Hiro Luke image" src={"https://assets.wobbjobs.com/images/about_us/hiroes-2022/luke.jpg"} priority placeholder="blur" blurDataURL={blurDataURL} width={220} height={220} loading="eager" quality={10} />
        <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-primary bg-fixed rounded-lg opacity-0 transition duration-300 ease-in-out hover:opacity-50">
          <p className="text-tertiary text-sm opacity-100 text-center">Engineer turned programmer. 10% movie addict, 20% matcha devotee, 15% anime fanatic, 5% gym buff, 50% gaming nerd, & a 100% tech enthusiast!</p>
        </div>
      </div>

      <div className="relative">
        <Image className="rounded-lg" alt="Hiro Luke image" src={"https://assets.wobbjobs.com/images/about_us/hiroes-2022/luke.jpg"} priority placeholder="blur" blurDataURL={blurDataURL} width={220} height={220} loading="eager" quality={10} />
        <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-primary bg-fixed rounded-lg opacity-0 transition duration-300 ease-in-out hover:opacity-50">
          <p className="text-tertiary text-sm opacity-100 text-center">Engineer turned programmer. 10% movie addict, 20% matcha devotee, 15% anime fanatic, 5% gym buff, 50% gaming nerd, & a 100% tech enthusiast!</p>
        </div>
      </div>

      <div className="relative">
        <Image className="rounded-lg" alt="Hiro Luke image" src={"https://assets.wobbjobs.com/images/about_us/hiroes-2022/luke.jpg"} priority placeholder="blur" blurDataURL={blurDataURL} width={220} height={220} loading="eager" quality={10} />
        <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-primary bg-fixed rounded-lg opacity-0 transition duration-300 ease-in-out hover:opacity-50">
          <p className="text-tertiary text-sm opacity-100 text-center">Engineer turned programmer. 10% movie addict, 20% matcha devotee, 15% anime fanatic, 5% gym buff, 50% gaming nerd, & a 100% tech enthusiast!</p>
        </div>
      </div>

      <div className="relative">
        <Image className="rounded-lg" alt="Hiro Luke image" src={"https://assets.wobbjobs.com/images/about_us/hiroes-2022/luke.jpg"} priority placeholder="blur" blurDataURL={blurDataURL} width={220} height={220} loading="eager" quality={10} />
        <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-primary bg-fixed rounded-lg opacity-0 transition duration-300 ease-in-out hover:opacity-50">
          <p className="text-tertiary text-sm opacity-100 text-center">Engineer turned programmer. 10% movie addict, 20% matcha devotee, 15% anime fanatic, 5% gym buff, 50% gaming nerd, & a 100% tech enthusiast!</p>
        </div>
      </div>

      <div className="relative">
        <Image className="rounded-lg" alt="Hiro Luke image" src={"https://assets.wobbjobs.com/images/about_us/hiroes-2022/luke.jpg"} priority placeholder="blur" blurDataURL={blurDataURL} width={220} height={220} loading="eager" quality={10} />
        <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-primary bg-fixed rounded-lg opacity-0 transition duration-300 ease-in-out hover:opacity-50">
          <p className="text-tertiary text-sm opacity-100 text-center">Engineer turned programmer. 10% movie addict, 20% matcha devotee, 15% anime fanatic, 5% gym buff, 50% gaming nerd, & a 100% tech enthusiast!</p>
        </div>
      </div>

      <div className="relative">
        <Image className="rounded-lg" alt="Hiro Luke image" src={"https://assets.wobbjobs.com/images/about_us/hiroes-2022/luke.jpg"} priority placeholder="blur" blurDataURL={blurDataURL} width={220} height={220} loading="eager" quality={10} />
        <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-primary bg-fixed rounded-lg opacity-0 transition duration-300 ease-in-out hover:opacity-50">
          <p className="text-tertiary text-sm opacity-100 text-center">Engineer turned programmer. 10% movie addict, 20% matcha devotee, 15% anime fanatic, 5% gym buff, 50% gaming nerd, & a 100% tech enthusiast!</p>
        </div>
      </div>

      <div className="relative">
        <Image className="rounded-lg" alt="Hiro Luke image" src={"https://assets.wobbjobs.com/images/about_us/hiroes-2022/luke.jpg"} priority placeholder="blur" blurDataURL={blurDataURL} width={220} height={220} loading="eager" quality={10} />
        <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-primary bg-fixed rounded-lg opacity-0 transition duration-300 ease-in-out hover:opacity-50">
          <p className="text-tertiary text-sm opacity-100 text-center">Engineer turned programmer. 10% movie addict, 20% matcha devotee, 15% anime fanatic, 5% gym buff, 50% gaming nerd, & a 100% tech enthusiast!</p>
        </div>
      </div>

      <div className="relative">
        <Image className="rounded-lg" alt="Hiro Luke image" src={"https://assets.wobbjobs.com/images/about_us/hiroes-2022/luke.jpg"} priority placeholder="blur" blurDataURL={blurDataURL} width={220} height={220} loading="eager" quality={10} />
        <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-primary bg-fixed rounded-lg opacity-0 transition duration-300 ease-in-out hover:opacity-50">
          <p className="text-tertiary text-sm opacity-100 text-center">Engineer turned programmer. 10% movie addict, 20% matcha devotee, 15% anime fanatic, 5% gym buff, 50% gaming nerd, & a 100% tech enthusiast!</p>
        </div>
      </div>

      <div className="relative">
        <Image className="rounded-lg" alt="Hiro Luke image" src={"https://assets.wobbjobs.com/images/about_us/hiroes-2022/luke.jpg"} priority placeholder="blur" blurDataURL={blurDataURL} width={220} height={220} loading="eager" quality={10} />
        <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-primary bg-fixed rounded-lg opacity-0 transition duration-300 ease-in-out hover:opacity-50">
          <p className="text-tertiary text-sm opacity-100 text-center">Engineer turned programmer. 10% movie addict, 20% matcha devotee, 15% anime fanatic, 5% gym buff, 50% gaming nerd, & a 100% tech enthusiast!</p>
        </div>
      </div>

      <div className="relative">
        <Image className="rounded-lg" alt="Hiro Luke image" src={"https://assets.wobbjobs.com/images/about_us/hiroes-2022/luke.jpg"} priority placeholder="blur" blurDataURL={blurDataURL} width={220} height={220} loading="eager" quality={10} />
        <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-primary bg-fixed rounded-lg opacity-0 transition duration-300 ease-in-out hover:opacity-50">
          <p className="text-tertiary text-sm opacity-100 text-center">Engineer turned programmer. 10% movie addict, 20% matcha devotee, 15% anime fanatic, 5% gym buff, 50% gaming nerd, & a 100% tech enthusiast!</p>
        </div>
      </div>

      <div className="relative">
        <Image className="rounded-lg" alt="Hiro Luke image" src={"https://assets.wobbjobs.com/images/about_us/hiroes-2022/luke.jpg"} priority placeholder="blur" blurDataURL={blurDataURL} width={220} height={220} loading="eager" quality={10} />
        <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-primary bg-fixed rounded-lg opacity-0 transition duration-300 ease-in-out hover:opacity-50">
          <p className="text-tertiary text-sm opacity-100 text-center">Engineer turned programmer. 10% movie addict, 20% matcha devotee, 15% anime fanatic, 5% gym buff, 50% gaming nerd, & a 100% tech enthusiast!</p>
        </div>
      </div>

      <div className="relative">
        <Image className="rounded-lg" alt="Hiro Luke image" src={"https://assets.wobbjobs.com/images/about_us/hiroes-2022/luke.jpg"} priority placeholder="blur" blurDataURL={blurDataURL} width={220} height={220} loading="eager" quality={10} />
        <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-primary bg-fixed rounded-lg opacity-0 transition duration-300 ease-in-out hover:opacity-50">
          <p className="text-tertiary text-sm opacity-100 text-center">Engineer turned programmer. 10% movie addict, 20% matcha devotee, 15% anime fanatic, 5% gym buff, 50% gaming nerd, & a 100% tech enthusiast!</p>
        </div>
      </div>

      <div className="relative">
        <Image className="rounded-lg" alt="Hiro Luke image" src={"https://assets.wobbjobs.com/images/about_us/hiroes-2022/luke.jpg"} priority placeholder="blur" blurDataURL={blurDataURL} width={220} height={220} loading="eager" quality={10} />
        <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-primary bg-fixed rounded-lg opacity-0 transition duration-300 ease-in-out hover:opacity-50">
          <p className="text-tertiary text-sm opacity-100 text-center">Engineer turned programmer. 10% movie addict, 20% matcha devotee, 15% anime fanatic, 5% gym buff, 50% gaming nerd, & a 100% tech enthusiast!</p>
        </div>
      </div>

      <div className="relative">
        <Image className="rounded-lg" alt="Hiro Luke image" src={"https://assets.wobbjobs.com/images/about_us/hiroes-2022/luke.jpg"} priority placeholder="blur" blurDataURL={blurDataURL} width={220} height={220} loading="eager" quality={10} />
        <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-primary bg-fixed rounded-lg opacity-0 transition duration-300 ease-in-out hover:opacity-50">
          <p className="text-tertiary text-sm opacity-100 text-center">Engineer turned programmer. 10% movie addict, 20% matcha devotee, 15% anime fanatic, 5% gym buff, 50% gaming nerd, & a 100% tech enthusiast!</p>
        </div>
      </div>

      <div className="relative">
        <Image className="rounded-lg" alt="Hiro Luke image" src={"https://assets.wobbjobs.com/images/about_us/hiroes-2022/luke.jpg"} priority placeholder="blur" blurDataURL={blurDataURL} width={220} height={220} loading="eager" quality={10} />
        <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-primary bg-fixed rounded-lg opacity-0 transition duration-300 ease-in-out hover:opacity-50">
          <p className="text-tertiary text-sm opacity-100 text-center">Engineer turned programmer. 10% movie addict, 20% matcha devotee, 15% anime fanatic, 5% gym buff, 50% gaming nerd, & a 100% tech enthusiast!</p>
        </div>
      </div>

      <div className="relative">
        <Image className="rounded-lg" alt="Hiro Luke image" src={"https://assets.wobbjobs.com/images/about_us/hiroes-2022/luke.jpg"} priority placeholder="blur" blurDataURL={blurDataURL} width={220} height={220} loading="eager" quality={10} />
        <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-primary bg-fixed rounded-lg opacity-0 transition duration-300 ease-in-out hover:opacity-50">
          <p className="text-tertiary text-sm opacity-100 text-center">Engineer turned programmer. 10% movie addict, 20% matcha devotee, 15% anime fanatic, 5% gym buff, 50% gaming nerd, & a 100% tech enthusiast!</p>
        </div>
      </div>

      <div className="relative">
        <Image className="rounded-lg" alt="Hiro Luke image" src={"https://assets.wobbjobs.com/images/about_us/hiroes-2022/luke.jpg"} priority placeholder="blur" blurDataURL={blurDataURL} width={220} height={220} loading="eager" quality={10} />
        <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-primary bg-fixed rounded-lg opacity-0 transition duration-300 ease-in-out hover:opacity-50">
          <p className="text-tertiary text-sm opacity-100 text-center">Engineer turned programmer. 10% movie addict, 20% matcha devotee, 15% anime fanatic, 5% gym buff, 50% gaming nerd, & a 100% tech enthusiast!</p>
        </div>
      </div>

      <div className="relative">
        <Image className="rounded-lg" alt="Hiro Luke image" src={"https://assets.wobbjobs.com/images/about_us/hiroes-2022/luke.jpg"} priority placeholder="blur" blurDataURL={blurDataURL} width={220} height={220} loading="eager" quality={10} />
        <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-primary bg-fixed rounded-lg opacity-0 transition duration-300 ease-in-out hover:opacity-50">
          <p className="text-tertiary text-sm opacity-100 text-center">Engineer turned programmer. 10% movie addict, 20% matcha devotee, 15% anime fanatic, 5% gym buff, 50% gaming nerd, & a 100% tech enthusiast!</p>
        </div>
      </div>

      <div className="relative">
        <Image className="rounded-lg" alt="Hiro Luke image" src={"https://assets.wobbjobs.com/images/about_us/hiroes-2022/luke.jpg"} priority placeholder="blur" blurDataURL={blurDataURL} width={220} height={220} loading="eager" quality={10} />
        <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-primary bg-fixed rounded-lg opacity-0 transition duration-300 ease-in-out hover:opacity-50">
          <p className="text-tertiary text-sm opacity-100 text-center">Engineer turned programmer. 10% movie addict, 20% matcha devotee, 15% anime fanatic, 5% gym buff, 50% gaming nerd, & a 100% tech enthusiast!</p>
        </div>
      </div>

      <div className="relative">
        <Image className="rounded-lg" alt="Hiro Luke image" src={"https://assets.wobbjobs.com/images/about_us/hiroes-2022/luke.jpg"} priority placeholder="blur" blurDataURL={blurDataURL} width={220} height={220} loading="eager" quality={10} />
        <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-primary bg-fixed rounded-lg opacity-0 transition duration-300 ease-in-out hover:opacity-50">
          <p className="text-tertiary text-sm opacity-100 text-center">Engineer turned programmer. 10% movie addict, 20% matcha devotee, 15% anime fanatic, 5% gym buff, 50% gaming nerd, & a 100% tech enthusiast!</p>
        </div>
      </div>

      <div className="relative">
        <Image className="rounded-lg" alt="Hiro Luke image" src={"https://assets.wobbjobs.com/images/about_us/hiroes-2022/luke.jpg"} priority placeholder="blur" blurDataURL={blurDataURL} width={220} height={220} loading="eager" quality={10} />
        <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-primary bg-fixed rounded-lg opacity-0 transition duration-300 ease-in-out hover:opacity-50">
          <p className="text-tertiary text-sm opacity-100 text-center">Engineer turned programmer. 10% movie addict, 20% matcha devotee, 15% anime fanatic, 5% gym buff, 50% gaming nerd, & a 100% tech enthusiast!</p>
        </div>
      </div>

      <div className="relative">
        <Image className="rounded-lg" alt="Hiro Luke image" src={"https://assets.wobbjobs.com/images/about_us/hiroes-2022/luke.jpg"} priority placeholder="blur" blurDataURL={blurDataURL} width={220} height={220} loading="eager" quality={10} />
        <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-primary bg-fixed rounded-lg opacity-0 transition duration-300 ease-in-out hover:opacity-50">
          <p className="text-tertiary text-sm opacity-100 text-center">Engineer turned programmer. 10% movie addict, 20% matcha devotee, 15% anime fanatic, 5% gym buff, 50% gaming nerd, & a 100% tech enthusiast!</p>
        </div>
      </div>

      <div className="relative">
        <Image className="rounded-lg" alt="Hiro Luke image" src={"https://assets.wobbjobs.com/images/about_us/hiroes-2022/luke.jpg"} priority placeholder="blur" blurDataURL={blurDataURL} width={220} height={220} loading="eager" quality={10} />
        <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-primary bg-fixed rounded-lg opacity-0 transition duration-300 ease-in-out hover:opacity-50">
          <p className="text-tertiary text-sm opacity-100 text-center">Engineer turned programmer. 10% movie addict, 20% matcha devotee, 15% anime fanatic, 5% gym buff, 50% gaming nerd, & a 100% tech enthusiast!</p>
        </div>
      </div>

      <div className="relative">
        <Image className="rounded-lg" alt="Hiro Luke image" src={"https://assets.wobbjobs.com/images/about_us/hiroes-2022/luke.jpg"} priority placeholder="blur" blurDataURL={blurDataURL} width={220} height={220} loading="eager" quality={10} />
        <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-primary bg-fixed rounded-lg opacity-0 transition duration-300 ease-in-out hover:opacity-50">
          <p className="text-tertiary text-sm opacity-100 text-center">Engineer turned programmer. 10% movie addict, 20% matcha devotee, 15% anime fanatic, 5% gym buff, 50% gaming nerd, & a 100% tech enthusiast!</p>
        </div>
      </div>

      <div className="relative">
        <Image className="rounded-lg" alt="Hiro Luke image" src={"https://assets.wobbjobs.com/images/about_us/hiroes-2022/luke.jpg"} priority placeholder="blur" blurDataURL={blurDataURL} width={220} height={220} loading="eager" quality={10} />
        <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-primary bg-fixed rounded-lg opacity-0 transition duration-300 ease-in-out hover:opacity-50">
          <p className="text-tertiary text-sm opacity-100 text-center">Engineer turned programmer. 10% movie addict, 20% matcha devotee, 15% anime fanatic, 5% gym buff, 50% gaming nerd, & a 100% tech enthusiast!</p>
        </div>
      </div>

      <div className="relative">
        <Image className="rounded-lg" alt="Hiro Luke image" src={"https://assets.wobbjobs.com/images/about_us/hiroes-2022/luke.jpg"} priority placeholder="blur" blurDataURL={blurDataURL} width={220} height={220} loading="eager" quality={10} />
        <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-primary bg-fixed rounded-lg opacity-0 transition duration-300 ease-in-out hover:opacity-50">
          <p className="text-tertiary text-sm opacity-100 text-center">Engineer turned programmer. 10% movie addict, 20% matcha devotee, 15% anime fanatic, 5% gym buff, 50% gaming nerd, & a 100% tech enthusiast!</p>
        </div>
      </div>

      <div className="relative">
        <Image className="rounded-lg" alt="Hiro Luke image" src={"https://assets.wobbjobs.com/images/about_us/hiroes-2022/luke.jpg"} priority placeholder="blur" blurDataURL={blurDataURL} width={220} height={220} loading="eager" quality={10} />
        <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-primary bg-fixed rounded-lg opacity-0 transition duration-300 ease-in-out hover:opacity-50">
          <p className="text-tertiary text-sm opacity-100 text-center">Engineer turned programmer. 10% movie addict, 20% matcha devotee, 15% anime fanatic, 5% gym buff, 50% gaming nerd, & a 100% tech enthusiast!</p>
        </div>
      </div>

      <div className="relative">
        <Image className="rounded-lg" alt="Hiro Luke image" src={"https://assets.wobbjobs.com/images/about_us/hiroes-2022/luke.jpg"} priority placeholder="blur" blurDataURL={blurDataURL} width={220} height={220} loading="eager" quality={10} />
        <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-primary bg-fixed rounded-lg opacity-0 transition duration-300 ease-in-out hover:opacity-50">
          <p className="text-tertiary text-sm opacity-100 text-center">Engineer turned programmer. 10% movie addict, 20% matcha devotee, 15% anime fanatic, 5% gym buff, 50% gaming nerd, & a 100% tech enthusiast!</p>
        </div>
      </div>

      <div className="relative">
        <Image className="rounded-lg" alt="Hiro Luke image" src={"https://assets.wobbjobs.com/images/about_us/hiroes-2022/luke.jpg"} priority placeholder="blur" blurDataURL={blurDataURL} width={220} height={220} loading="eager" quality={10} />
        <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-primary bg-fixed rounded-lg opacity-0 transition duration-300 ease-in-out hover:opacity-50">
          <p className="text-tertiary text-sm opacity-100 text-center">Engineer turned programmer. 10% movie addict, 20% matcha devotee, 15% anime fanatic, 5% gym buff, 50% gaming nerd, & a 100% tech enthusiast!</p>
        </div>
      </div>

      <div className="relative">
        <Image className="rounded-lg" alt="Hiro Luke image" src={"https://assets.wobbjobs.com/images/about_us/hiroes-2022/luke.jpg"} priority placeholder="blur" blurDataURL={blurDataURL} width={220} height={220} loading="eager" quality={10} />
        <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-primary bg-fixed rounded-lg opacity-0 transition duration-300 ease-in-out hover:opacity-50">
          <p className="text-tertiary text-sm opacity-100 text-center">Engineer turned programmer. 10% movie addict, 20% matcha devotee, 15% anime fanatic, 5% gym buff, 50% gaming nerd, & a 100% tech enthusiast!</p>
        </div>
      </div>

      <div className="relative">
        <Image className="rounded-lg" alt="Hiro Luke image" src={"https://assets.wobbjobs.com/images/about_us/hiroes-2022/luke.jpg"} priority placeholder="blur" blurDataURL={blurDataURL} width={220} height={220} loading="eager" quality={10} />
        <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-primary bg-fixed rounded-lg opacity-0 transition duration-300 ease-in-out hover:opacity-50">
          <p className="text-tertiary text-sm opacity-100 text-center">Engineer turned programmer. 10% movie addict, 20% matcha devotee, 15% anime fanatic, 5% gym buff, 50% gaming nerd, & a 100% tech enthusiast!</p>
        </div>
      </div>

      <div className="relative">
        <Image className="rounded-lg" alt="Hiro Luke image" src={"https://assets.wobbjobs.com/images/about_us/hiroes-2022/luke.jpg"} priority placeholder="blur" blurDataURL={blurDataURL} width={220} height={220} loading="eager" quality={10} />
        <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-primary bg-fixed rounded-lg opacity-0 transition duration-300 ease-in-out hover:opacity-50">
          <p className="text-tertiary text-sm opacity-100 text-center">Engineer turned programmer. 10% movie addict, 20% matcha devotee, 15% anime fanatic, 5% gym buff, 50% gaming nerd, & a 100% tech enthusiast!</p>
        </div>
      </div>

      <div className="relative">
        <Image className="rounded-lg" alt="Hiro Luke image" src={"https://assets.wobbjobs.com/images/about_us/hiroes-2022/luke.jpg"} priority placeholder="blur" blurDataURL={blurDataURL} width={220} height={220} loading="eager" quality={10} />
        <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-primary bg-fixed rounded-lg opacity-0 transition duration-300 ease-in-out hover:opacity-50">
          <p className="text-tertiary text-sm opacity-100 text-center">Engineer turned programmer. 10% movie addict, 20% matcha devotee, 15% anime fanatic, 5% gym buff, 50% gaming nerd, & a 100% tech enthusiast!</p>
        </div>
      </div>

      <div className="relative">
        <Image className="rounded-lg" alt="Hiro Luke image" src={"https://assets.wobbjobs.com/images/about_us/hiroes-2022/luke.jpg"} priority placeholder="blur" blurDataURL={blurDataURL} width={220} height={220} loading="eager" quality={10} />
        <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-primary bg-fixed rounded-lg opacity-0 transition duration-300 ease-in-out hover:opacity-50">
          <p className="text-tertiary text-sm opacity-100 text-center">Engineer turned programmer. 10% movie addict, 20% matcha devotee, 15% anime fanatic, 5% gym buff, 50% gaming nerd, & a 100% tech enthusiast!</p>
        </div>
      </div>

      <div className="relative">
        <Image className="rounded-lg" alt="Hiro Luke image" src={"https://assets.wobbjobs.com/images/about_us/hiroes-2022/luke.jpg"} priority placeholder="blur" blurDataURL={blurDataURL} width={220} height={220} loading="eager" quality={10} />
        <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-primary bg-fixed rounded-lg opacity-0 transition duration-300 ease-in-out hover:opacity-50">
          <p className="text-tertiary text-sm opacity-100 text-center">Engineer turned programmer. 10% movie addict, 20% matcha devotee, 15% anime fanatic, 5% gym buff, 50% gaming nerd, & a 100% tech enthusiast!</p>
        </div>
      </div>

      <div className="relative">
        <Image className="rounded-lg" alt="Hiro Luke image" src={"https://assets.wobbjobs.com/images/about_us/hiroes-2022/luke.jpg"} priority placeholder="blur" blurDataURL={blurDataURL} width={220} height={220} loading="eager" quality={10} />
        <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-primary bg-fixed rounded-lg opacity-0 transition duration-300 ease-in-out hover:opacity-50">
          <p className="text-tertiary text-sm opacity-100 text-center">Engineer turned programmer. 10% movie addict, 20% matcha devotee, 15% anime fanatic, 5% gym buff, 50% gaming nerd, & a 100% tech enthusiast!</p>
        </div>
      </div>

    </main>
  );
}
