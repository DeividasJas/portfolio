import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ImageType } from "@/types/projectTypes";

import { WebsiteProjectType } from "@/types/projectTypes";

export default function SingleProjectCard(project: WebsiteProjectType) {
  console.log(project);

  return (
    <>
      <section>
        <h3>{project.title}</h3>
        <Carousel className="w-2/3 mx-auto">
          <CarouselContent>
            {project.images.map((image: ImageType, index: number) => {
              return (
                <CarouselItem key={index}>
                  <img src={image.src} alt={image.alt} />
                </CarouselItem>
              );
            })}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
        <p>{project.description}</p>
      </section>
    </>
  );
}
