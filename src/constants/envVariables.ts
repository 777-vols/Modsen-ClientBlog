export const envVariables = {
  emailJSPublicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!,
  emailJSServiceId: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
  emailJSFormTemplate: process.env.NEXT_PUBLIC_EMAILJS_FORM_TEMPLATE!,
} as const;
