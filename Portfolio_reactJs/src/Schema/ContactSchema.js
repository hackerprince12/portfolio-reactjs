import * as Yup from 'yup';

export const ContactSchema=Yup.object({
  from_name:Yup.string().min(2).max(25).required("Please enter your name!"),
  from_email:Yup.string().email().required("please enter email!"),
   message:Yup.string().min(6).max(200).required("Please enter msg..!")
})