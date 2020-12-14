import React, { Component } from "react";

export const input = ({
  input,
  type,
  placeholder,
  id,
  meta: { touched, error },
  ...rest
}) => {

  return (
	 <div>
      <input {...input} type={type} placeholder={placeholder} id={id} />
      {touched && error && (
       <span style={{ fontSize: "10px", color: "red" }}>{error}</span>
      )}
    </div>
  );
};