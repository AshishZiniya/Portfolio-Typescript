'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import { Formik, Form, Field, ErrorMessage, FormikHelpers } from 'formik';
import * as Yup from 'yup';
import emailjs from '@emailjs/browser';

// Initialize EmailJS with public key
emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || process.env.EMAILJS_PUBLIC_KEY!);

// Form values interface
interface ContactFormValues {
  firstname: string;
  lastname: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

// Form status interface
interface FormStatus {
  loading?: boolean;
  success?: boolean;
  error?: string;
}

const info = [
  {
    icon: <FaPhoneAlt />,
    title: 'Phone',
    description: '(+91) 9510310683',
  },
  {
    icon: <FaEnvelope />,
    title: 'Email',
    description: 'ashishziniya1234@gmail.com',
  },
];

export default function Contact() {
  // Validation schema
  const validationSchema = Yup.object({
    firstname: Yup.string().required('First name is required'),
    lastname: Yup.string().required('Last name is required'),
    email: Yup.string()
      .email('Invalid email address')
      .required('Email is required'),
    phone: Yup.string().required('Phone number is required'),
    service: Yup.string().required('Please select a service'),
    message: Yup.string().required('Message is required'),
  });

  // Initial form values
  const initialValues = {
    firstname: '',
    lastname: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  };

  // EmailJS configuration using environment variables
  const EMAILJS_SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!;
  const EMAILJS_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!;
  const EMAILJS_PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!;

  const handleSubmit = async (
    values: ContactFormValues,
    {
      setSubmitting,
      resetForm,
      setStatus,
    }: FormikHelpers<ContactFormValues & { status?: FormStatus }>
  ) => {
    try {
      setStatus({ loading: true });

      const emailData = {
        from_name: `${values.firstname} ${values.lastname}`,
        from_email: values.email,
        phone: values.phone,
        service: values.service,
        message: values.message,
        to_email: 'ashishziniya1234@gmail.com', // Your email address
      };

      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        emailData,
        EMAILJS_PUBLIC_KEY
      );

      setStatus({ success: true, loading: false });
      resetForm();

      // Reset success message after 5 seconds
      setTimeout(() => {
        setStatus({});
      }, 5000);
    } catch (error) {
      console.error('Email send failed:', error);
      setStatus({
        error: 'Failed to send message. Please try again.',
        loading: false,
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="py-12 bg-white">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-8 xl:gap-[60px]">
          <div className="xl:w-[54%] order-2 xl:order-none">
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              {({
                values,
                errors,
                touched,
                setFieldValue,
                status,
                isSubmitting,
              }) => (
                <Form className="flex flex-col gap-8 p-8 sm:p-12 bg-[#d1d1d1]/90 rounded-xl shadow-lg relative z-10">
                  <h3 className="text-4xl text-black font-semibold">
                    Let&#39;s Work together
                  </h3>

                  {/* Success/Error Messages */}
                  {status?.success && (
                    <div className="bg-green-500/10 border border-green-500 text-green-400 px-4 py-3 rounded-md">
                      Message sent successfully! I&#39;ll get back to you soon.
                    </div>
                  )}
                  {status?.error && (
                    <div className="bg-red-500/10 border border-red-500 text-red-400 px-4 py-3 rounded-md">
                      {status.error}
                    </div>
                  )}

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Field name="firstname">
                        {({
                          field,
                        }: {
                          field: {
                            name: string;
                            value: string;
                            onChange: (
                              e: React.ChangeEvent<HTMLInputElement>
                            ) => void;
                            onBlur: (
                              e: React.FocusEvent<HTMLInputElement>
                            ) => void;
                          };
                        }) => (
                          <Input
                            {...field}
                            type="text"
                            placeholder="Firstname"
                            className={`bg-white border text-black placeholder:text-black/60 focus-visible:ring-1 focus-visible:ring-[#6366f1] hover:border-[#6366f1]/50 transition-colors ${
                              errors.firstname && touched.firstname
                                ? 'border-red-500'
                                : 'border-[#cccccc]'
                            }`}
                          />
                        )}
                      </Field>
                      <ErrorMessage
                        name="firstname"
                        component="div"
                        className="text-red-400 text-sm mt-1"
                      />
                    </div>

                    <div>
                      <Field name="lastname">
                        {({
                          field,
                        }: {
                          field: {
                            name: string;
                            value: string;
                            onChange: (
                              e: React.ChangeEvent<HTMLInputElement>
                            ) => void;
                            onBlur: (
                              e: React.FocusEvent<HTMLInputElement>
                            ) => void;
                          };
                        }) => (
                          <Input
                            {...field}
                            type="text"
                            placeholder="Lastname"
                            className={`bg-white border text-black placeholder:text-black/60 focus-visible:ring-1 focus-visible:ring-[#6366f1] hover:border-[#6366f1]/50 transition-colors ${
                              errors.lastname && touched.lastname
                                ? 'border-red-500'
                                : 'border-[#cccccc]'
                            }`}
                          />
                        )}
                      </Field>
                      <ErrorMessage
                        name="lastname"
                        component="div"
                        className="text-red-400 text-sm mt-1"
                      />
                    </div>

                    <div>
                      <Field name="email">
                        {({
                          field,
                        }: {
                          field: {
                            name: string;
                            value: string;
                            onChange: (
                              e: React.ChangeEvent<HTMLInputElement>
                            ) => void;
                            onBlur: (
                              e: React.FocusEvent<HTMLInputElement>
                            ) => void;
                          };
                        }) => (
                          <Input
                            {...field}
                            type="email"
                            placeholder="Email address"
                            className={`bg-white border text-black placeholder:text-black/60 focus-visible:ring-1 focus-visible:ring-[#6366f1] hover:border-[#6366f1]/50 transition-colors ${
                              errors.email && touched.email
                                ? 'border-red-500'
                                : 'border-[#cccccc]'
                            }`}
                          />
                        )}
                      </Field>
                      <ErrorMessage
                        name="email"
                        component="div"
                        className="text-red-400 text-sm mt-1"
                      />
                    </div>

                    <div>
                      <Field name="phone">
                        {({
                          field,
                        }: {
                          field: {
                            name: string;
                            value: string;
                            onChange: (
                              e: React.ChangeEvent<HTMLInputElement>
                            ) => void;
                            onBlur: (
                              e: React.FocusEvent<HTMLInputElement>
                            ) => void;
                          };
                        }) => (
                          <Input
                            {...field}
                            type="tel"
                            placeholder="Phone number"
                            className={`bg-white border text-black placeholder:text-black/60 focus-visible:ring-1 focus-visible:ring-[#6366f1] hover:border-[#6366f1]/50 transition-colors ${
                              errors.phone && touched.phone
                                ? 'border-red-500'
                                : 'border-[#cccccc]'
                            }`}
                          />
                        )}
                      </Field>
                      <ErrorMessage
                        name="phone"
                        component="div"
                        className="text-red-400 text-sm mt-1"
                      />
                    </div>
                  </div>

                  <div>
                    <Field name="service">
                      {() => (
                        <Select
                          value={values.service}
                          onValueChange={(value) =>
                            setFieldValue('service', value)
                          }
                        >
                          <SelectTrigger
                            className={`w-full bg-white border text-black focus:ring-1 focus:ring-[#6366f1] hover:border-[#6366f1]/50 transition-colors ${
                              errors.service && touched.service
                                ? 'border-red-500'
                                : 'border-[#cccccc]'
                            }`}
                          >
                            <SelectValue placeholder="Select a Service" />
                          </SelectTrigger>
                          <SelectContent className="bg-white border border-[#cccccc] shadow-xl">
                            <SelectGroup>
                              <SelectLabel className="text-black bg-white font-medium">
                                Select a Service
                              </SelectLabel>
                              <SelectItem
                                value="web-dev"
                                className="text-black focus:bg-[#6366f1] focus:text-white hover:bg-[#f3f3f3] cursor-pointer"
                              >
                                Web Development
                              </SelectItem>
                              <SelectItem
                                value="frontend"
                                className="text-black focus:bg-[#6366f1] focus:text-white hover:bg-[#f3f3f3] cursor-pointer"
                              >
                                Frontend Development
                              </SelectItem>
                              <SelectItem
                                value="android"
                                className="text-black focus:bg-[#6366f1] focus:text-white hover:bg-[#f3f3f3] cursor-pointer"
                              >
                                Android App Development
                              </SelectItem>
                            </SelectGroup>
                          </SelectContent>
                        </Select>
                      )}
                    </Field>
                    <ErrorMessage
                      name="service"
                      component="div"
                      className="text-red-400 text-sm mt-1"
                    />
                  </div>

                  <div>
                    <Field name="message">
                      {({
                        field,
                      }: {
                        field: {
                          name: string;
                          value: string;
                          onChange: (
                            e: React.ChangeEvent<HTMLTextAreaElement>
                          ) => void;
                          onBlur: (
                            e: React.FocusEvent<HTMLTextAreaElement>
                          ) => void;
                        };
                      }) => (
                        <Textarea
                          {...field}
                          className={`h-[200px] bg-white border text-black placeholder:text-black/60 focus-visible:ring-1 focus-visible:ring-[#6366f1] resize-none hover:border-[#6366f1]/50 transition-colors ${
                            errors.message && touched.message
                              ? 'border-red-500'
                              : 'border-[#cccccc]'
                          }`}
                          placeholder="Type your message here."
                        />
                      )}
                    </Field>
                    <ErrorMessage
                      name="message"
                      component="div"
                      className="text-red-400 text-sm mt-1"
                    />
                  </div>

                  <Button
                    type="submit"
                    size="default"
                    disabled={isSubmitting || status?.loading}
                    className="max-w-40 bg-[#6366f1] hover:bg-[#6366f1]/90 text-white font-medium border border-[#6366f1] hover:border-[#6366f1]/80 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {status?.loading ? 'Sending...' : 'Send message'}
                  </Button>
                </Form>
              )}
            </Formik>
          </div>
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => {
                return (
                  <li key={index} className="flex items-center gap-6">
                    <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#d1d1d1] text-[#6366f1] rounded-md flex items-center justify-center shadow-sm">
                      <div className="text-[28px]">{item.icon}</div>
                    </div>
                    <div className="flex-1">
                      <p className="text-black/70 font-medium">{item.title}</p>
                      <h3 className="text-xl text-black font-semibold">
                        {item.description}
                      </h3>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
