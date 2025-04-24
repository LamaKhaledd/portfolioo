import { INPUT_TYPE } from "@/core/constants/input-renderer-constants";
import { IBaseInputSchema } from "@/core/models/input-base.interface";
import { InputSchema } from "@/core/models/input-base.type";
import { z, ZodNumber, ZodString, ZodTypeAny, ZodObject } from "zod";

/**
 * @param field - The input schema to create the validation schema for.
 * @returns {ZodTypeAny} - The validation schema.
 */
const createValidationSchema = (field: IBaseInputSchema): ZodTypeAny => {
  let schema = CreateBaseSchema(field);

  if (field.validations) {
    schema = ApplyValidations(schema, field);
  } else {
    schema = schema.optional();
  }

  return schema;
};

const CreateBaseSchema = (field: IBaseInputSchema): ZodTypeAny => {
  const defaultMessages = {
    required_error: "required_validation",
    invalid_type_error: "invalid_type_validation",
    max_length_error: (textLimit: number) =>
      `this_field_must_be_between_${textLimit}_characters`,
  };

  const textLimit = field.textLimit || TEXT_LIMIT;

  switch (field.inputType) {
    case INPUT_TYPE.TEXT:
      return z
        .string({ required_error: defaultMessages.required_error })
        .trim()
        .max(textLimit, {
          message: defaultMessages.max_length_error(textLimit),
        });

    case INPUT_TYPE.TEXT_AREA:
    case INPUT_TYPE.PASSWORD:
      return z.string({ required_error: defaultMessages.required_error });

    case INPUT_TYPE.CHECKBOX:
      return z.array(z.string(), {
        required_error: defaultMessages.required_error,
      });

    case INPUT_TYPE.RADIO:
      return z.string({ required_error: defaultMessages.required_error });

    default:
      return z.any();
  }
};

export function createZodSchema({
  inputSchema,
}: {
  inputSchema: IBaseInputSchema[];
}): ZodTypeAny {
  const shape: Record<string, ZodTypeAny> = {};
  const validateDependencyFields = true; 
  inputSchema?.forEach((input) => {
    const keys = input.name.split(".");
    const validationSchema = createValidationSchema(input);
    shape[keys[0]] = validationSchema;
  });

  let zodObject: ZodObject<Record<string, ZodTypeAny>> = z.object(shape); 

  if (validateDependencyFields) {
    inputSchema?.forEach((input) => {
      if (input?.children?.length) {
        input.children.forEach((child) => {
          zodObject = checkIfShouldAddValidation({
            zodObject,
            input: child,
            compositeName: `${input.name}`,
          });
        });
      }
    });
  }

  return zodObject; 
}

const ApplyValidations = (
  schema: ZodTypeAny,
  field: IBaseInputSchema
): ZodTypeAny => {
  field?.validations?.forEach((validation) => {
    const rule = validationMethods[validation.rule];
    type schemaType = z.infer<typeof schema>;
    const message = validation.message; 

    if (rule && typeof (schema as schemaType)[rule] === "function") {
      if (validation.value !== undefined) {
        schema = (schema as schemaType)[rule](validation.value, { message });
      }
    } else {
      schema = (schema as schemaType)[rule]({ message });
    }
  });

  return schema;
};

const validationMethods: Record<string, any> = {
  minLength: (value: number, options: { message: string }) => (schema: ZodString) =>
    schema.min(value, options),
  maxLength: (value: number, options: { message: string }) => (schema: ZodString) =>
    schema.max(value, options),
  min: (value: number, options: { message: string }) => (schema: ZodNumber) =>
    schema.min(value, options),
  max: (value: number, options: { message: string }) => (schema: ZodNumber) =>
    schema.max(value, options),
  required: (options: { message: string }) => (schema: ZodString) =>
    schema.nonempty(options),
  email: (options: { message: string }) => (schema: ZodString) =>
    schema.email(options),
};

const checkIfShouldAddValidation = ({
  zodObject,
}: {
  zodObject: ZodObject<Record<string, ZodTypeAny>>; 
  input: IBaseInputSchema;
  compositeName: string;
}) => {
  return zodObject;
};

const TEXT_LIMIT = 255; 
