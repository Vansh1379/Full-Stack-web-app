import zod from "zod";

const signupValidation = zod.object({
  name: zod.string(),
  email: zod.string().email(),
  phone_no: zod.string().regex(/^\d{10}$/),
  address: zod.string().optional(),
  password: zod.string().min(3),
});

const loginValidation = zod.object({
  email: zod.string().email(),
  password: zod.string().min(3),
});

const productValidation = zod.object({
  name: zod.string(),
  description: zod.string(),
  catageory: zod.string(),
  price: zod.number(),
  orignalPrice: zod.number(),
  quanity: zod.string(),
  discount: zod.number(),
  img: zod.string().optional(),
});

export { signupValidation, loginValidation, productValidation };
