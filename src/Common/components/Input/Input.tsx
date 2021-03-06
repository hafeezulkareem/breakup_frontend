import React, { Component, ReactNode } from "react";

import { colors, shapes, sizes } from "./constants";
import {
   EndIconContainer,
   Icon,
   InputContainer,
   InputHint,
   InputLabel,
   LabelAndInputContainer,
   StartIconContainer,
   TextArea,
   TextInput,
} from "./styledComponents";

interface InputProps {
   label: string;
   error: boolean;
   disabled: boolean;
   size: string;
   color: string;
   shape: string;
   fullWidth: boolean;
   multiline: boolean;
   rows: number;
   startIcon: string;
   endIcon: string;
   onChange: (event: React.FormEvent<HTMLInputElement>) => void;
   value: string;
   hint: string;
   type: string;
   placeholder: string;
   className: string;
   iconColor: string;
}

class Input extends Component<InputProps> {
   state = {
      hasFocused: false,
   };

   static defaultProps = {
      label: "",
      error: false,
      disabled: false,
      size: sizes.medium,
      color: colors.primary,
      shape: shapes.square,
      fullWidth: false,
      multiline: false,
      rows: 0,
      startIcon: "",
      endIcon: "",
      placeholder: "Enter text",
      onChange: () => {},
      value: "",
      hint: "",
      type: "text",
      className: "",
      iconColor: "black",
   };

   static sizes = sizes;
   static colors = colors;
   static shapes = shapes;

   renderStartIcon = (): ReactNode => {
      const { startIcon, multiline, iconColor } = this.props;
      return startIcon && !multiline ? (
         <StartIconContainer>
            <Icon className="material-icons" iconColor={iconColor}>
               {startIcon}
            </Icon>
         </StartIconContainer>
      ) : null;
   };

   renderEndIcon = (): ReactNode => {
      const { endIcon, multiline, iconColor } = this.props;
      return endIcon && !multiline ? (
         <EndIconContainer>
            <Icon className="material-icons" iconColor={iconColor}>
               {endIcon}
            </Icon>
         </EndIconContainer>
      ) : null;
   };

   onFocus = (): void => {
      this.setState({ hasFocused: true });
   };

   onBlur = (): void => {
      this.setState({ hasFocused: false });
   };

   renderInputOrTextArea = (): ReactNode => {
      const {
         type,
         value,
         placeholder,
         onChange,
         label,
         hint,
         size,
         shape,
         fullWidth,
         color,
         disabled,
         error,
         multiline,
         rows,
         startIcon,
         endIcon,
         className,
         ...other
      } = this.props;
      return multiline ? (
         <TextArea
            type={type}
            value={value}
            placeholder={placeholder}
            onChange={onChange}
            size={size}
            shape={shape}
            color={color}
            error={error}
            disabled={disabled}
            fullWidth={fullWidth}
            onFocus={this.onFocus}
            onBlur={this.onBlur}
            rows={rows}
            className={className}
            startIcon={startIcon}
            endIcon={endIcon}
            {...other}
         />
      ) : (
         <TextInput
            type={type}
            value={value}
            placeholder={placeholder}
            onChange={onChange}
            size={size}
            shape={shape}
            color={color}
            error={error}
            disabled={disabled}
            fullWidth={fullWidth}
            onFocus={this.onFocus}
            onBlur={this.onBlur}
            className={className}
            startIcon={startIcon}
            endIcon={endIcon}
            {...other}
         />
      );
   };

   render() {
      const { label, hint, color, error } = this.props;
      const { hasFocused } = this.state;
      return (
         <LabelAndInputContainer>
            <InputLabel error={error} color={color} hasFocused={hasFocused}>
               {label}
            </InputLabel>
            <InputContainer>
               {this.renderStartIcon()}
               {this.renderInputOrTextArea()}
               {this.renderEndIcon()}
            </InputContainer>
            <InputHint error={error} color={color} hasFocused={hasFocused}>
               {hint}
            </InputHint>
         </LabelAndInputContainer>
      );
   }
}

export default Input;
