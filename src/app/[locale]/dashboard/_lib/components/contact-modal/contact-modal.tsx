import { Modal, Grid, GridCol, Text } from "@mantine/core";
import { FormProvider, useForm } from "react-hook-form";
import PortfolioSelect from "@/core/ui/components/inputs/portfolio-select/portfolio-select";
import PortfolioTextInput from "@/core/ui/components/inputs/portfolio-text/portfolio-text";
import { IContactFormInput } from "@dashboard/validations/contact-modal-validation/models/contact-modal-validation.interface";
import { contactFormResolver } from "@dashboard/validations/contact-modal-validation/contact-modal-validation";
import PortfolioButton from "@/core/ui/components/button/portfolio-button";
import PortfolioTextarea from "@/core/ui/components/inputs/portfolio-textarea/portfolio-textarea";
import InputRenderer from "@/core/ui/components/inputs-renderer/portfolio-inputs-renderer";

const ContactModal: React.FC<IContactModalProps> = ({ opened, onClose }) => {
  [
    /*  const {
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<IContactFormInput>({ resolver: contactFormResolver });
 */
  ];

  const onSubmit = (data: IContactFormInput) => {
    console.log(data);
    onClose();
  };

  const methods = useForm<IContactFormInput>();

  return (
    <Modal
      opened={opened}
      onClose={onClose}
      title="Please enter your information:"
    >
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <Grid mb="lg">
            <GridCol>
              <InputRenderer
                schema={{
                  label: "Name",
                  name: "username",
                  inputType: "text",
                  required: true,
                }}
              />
            </GridCol>

            <GridCol>
              <InputRenderer
                schema={{
                  label: "Message",
                  inputType: "textarea",
                  name: "message",
                  required: true,
                  placeholder: "Write your message here",
                  autosize: true,
                  minRows: 5,
                  maxRows: 10,
                }}
              />
            </GridCol>

            {/**<GridCol>
              <PortfolioSelect
                schema={{
                  options: ["Option 1", "Option 2", "Option 3"],
                  multiple: false,
                  searchable: true,
                  clearable: true,
                  creatable: true,
                  placeholder: "Select an option",
                }}
                onChange={(values) => console.log("Selected values:", values)}
              />
            </GridCol> */}
            
          </Grid>

          <PortfolioButton
            schema={{
              label: "Send Message",
              type: "submit",
              variant: "outline",
              fullWidth: true,
              size: "md",
            }}
          />
        </form>
      </FormProvider>
    </Modal>
  );
};

export default ContactModal;
