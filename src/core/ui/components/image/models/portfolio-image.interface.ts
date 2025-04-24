import { MantineRadius } from "@mantine/core";
import { ImageFit, ImageLoading } from "@ui/components/image/models/portfolio-image.type";

interface IPortfolioImageInterface {
    src: string;
    height?: number;
    width?: number;
    fit?: ImageFit;
    loading?: ImageLoading;
    fill?: boolean;
    priority?: boolean;
    withBorder?: boolean;
    radius?: number | MantineRadius;
    alt?: string;
    padding?: number | string;
}

export default IPortfolioImageInterface;
