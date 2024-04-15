import { InputProps, ReadOnlyProps, SharedProps } from "@smastrom/react-rating";
import { RefAttributes } from "react";

export type CustomRatingProps = SharedProps & ReadOnlyProps & InputProps & RefAttributes<HTMLDivElement>