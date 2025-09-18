export const sizeMap: { [key: string]: string } = {
  lg: "h-[clamp(48px,4.7vh,88px)] w-[clamp(242px,26.7vw,672px)] md:w-[clamp(320px,26.7vw,672px)] text-[18px] max-w-full",
  md: "h-[clamp(44px,4.7vh,72px)] w-[clamp(164px,12.6vw,236px)] text-[16px] max-w-full",
  sm: "h-[clamp(44px,4.7vh,60px)] w-[clamp(100px,8.2vw,144px)] text-[14px] max-w-full",
};
export const variantMap: { [key: string]: string } = {
  primary:
    "bg-primary text-white hover:text-primary hover:border hover:border-primary hover:bg-white",
  secondary:
    "bg-secondary text-white hover:text-secondary hover:border hover:border-secondary hover:bg-white",
  outline:
    " bg-transparent text-secondary border border-secondary hover:bg-secondary hover:text-white",
  primaryOutline:
    " bg-transparent text-primary border border-primary hover:bg-primary hover:text-white",
};
