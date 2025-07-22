const InputValidateEnum = {
  Name: 1,
  BirthDate: 2,
  Cpf: 3,
  Email: 4,
  Phone: 5,
} as const

Object.freeze(InputValidateEnum)

export { InputValidateEnum }
