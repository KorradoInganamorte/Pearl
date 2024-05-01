import localFont from "next/font/local";

const nunitoRegularNC = localFont({ src: './Nunito-Regular.ttf'})
const nunitoMediumNC = localFont({ src: './Nunito-Medium.ttf'})

export const nunitoRegular = nunitoRegularNC.className
export const nunitoMedium = nunitoMediumNC.className