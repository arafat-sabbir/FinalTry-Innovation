import {
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
  } from "@/components/ui/form";
  import { Input } from "./ui/input";
  import { Control } from "react-hook-form";
  import { ReactNode } from "react";
  import Image from "next/image";
  import { E164Number } from "libphoneNumber-js/core";
  import "react-phone-number-input/style.css";
  import PhoneInput from "react-phone-number-input";
import { FormFieldType } from "./form/ContactForm";
import { Textarea } from "./ui/textarea";
import { Select, SelectContent, SelectTrigger, SelectValue } from "./ui/select";
import { cn } from "@/lib/utils";
  
  interface CustomProps {
    control: Control<any>;
    fieldType: FormFieldType;
    name: string;
    label?: string;
    placeholder: string;
    iconSrc?: string;
    disabled?: boolean;
    dateFormat?: string;
    showTimeSelect?: boolean;
    children?: ReactNode;
    iconAlt?: string;
    className?:string
    renderSkeleton?: (filed: any) => ReactNode;
  }
  
  const RenderIField = ({ field, props }: { field: any; props: CustomProps }) => {
    const { iconSrc, iconAlt, fieldType, placeholder,className } = props;
    switch (fieldType) {
      case FormFieldType.INPUT:
        return (
          <div className={cn("flex rounded-md border",className)}>
            {iconSrc && (
              <Image
                src={iconSrc}
                alt={iconAlt!}
                height={24}
                width={24}
                className="mx-3 border-0"
              ></Image>
            )}
            <FormControl>
              <Input
                placeholder={placeholder}
                {...field}
                className={cn("border-0 focus:ring-0 focus:outline-none",className)}
              />
            </FormControl>
          </div>
        );
      case FormFieldType.PHONE_INPUT:
        return (
          <FormControl>
            <PhoneInput
              onChange={field.onChange}
              defaultCountry="BD"
              placeholder={placeholder}
              international
              withCountryCallingCode
              value={field.value as E164Number | undefined}
              className={cn("input-phone",className)}
              numberInputProps={{
                className: 'rounded-md px-4 focus:outline-none w-1/2 bg-transparent dark:bg-transparent text-xl text-gray-500' // my Tailwind classes
              }}
            />
          </FormControl>
        );
        case FormFieldType.TEXTAREA:
          return (
            <FormControl>
              <Textarea
                placeholder={props.placeholder}
                {...field}
                className={cn("border focus:ring-0 focus:outline-none",className)}
                disabled={props.disabled}
              />
            </FormControl>
          );
          case FormFieldType.SELECT:
            return (
              <FormControl >
                <Select  onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger className="shad-select-trigger">
                      <SelectValue placeholder={props.placeholder} />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent className="shad-select-content">
                    {props.children}
                  </SelectContent>
                </Select>
              </FormControl>
            );
    }
    return <h1>hi</h1>;
  };
  
  const CustomFormField = (props: CustomProps) => {
    const { control, fieldType, label, name} = props;
    return (
      <FormField
        control={control}
        name={name}
        render={({ field }) => (
          <FormItem>
            { label && (
              <FormLabel>{label}</FormLabel>
            )}
            <RenderIField field={field} props={props} />
            <FormMessage className="shad-error"></FormMessage>
          </FormItem>
        )}
      />
    );
  };
  
  export default CustomFormField;
  