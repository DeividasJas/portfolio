import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import type { StaticImageData } from 'next/image'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getImageSrc(image: string | StaticImageData): string {
  return typeof image === 'string' ? image : image.src
}
