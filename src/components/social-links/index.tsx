import Image from "next/image";

export const SocialLinks = () => {
  return (
    <div className="flex items-center gap-3">
      <div className="hover:cursor-pointer">
        <Image
          alt="Logo Discord"
          src={"/icons-svgs/discord.svg"}
          width={23}
          height={23}
        />
      </div>
      <div className="hover:cursor-pointer">
        <Image
          alt="Logo Facebook"
          src={"/icons-svgs/facebook.svg"}
          width={20}
          height={20}
        />
      </div>
    </div>
  );
};
