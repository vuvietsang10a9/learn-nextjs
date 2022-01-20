import { NextPage } from "next";
import { AppProps } from "next/dist/shared/lib/router/router";
import { ReactElement, ReactNode } from "react";

export interface LayoutProps{
    children:ReactElement
}
export type NextPageWithLayout = NextPage & {
    Layout?: (props: LayoutProps) => ReactElement
  }
  
export type AppPropsWithLayout = AppProps & {
    Component: NextPageWithLayout
  }