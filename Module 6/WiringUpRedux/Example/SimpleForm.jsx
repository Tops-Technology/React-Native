import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import { input } from "./InputControl";
import { formValidatorHelper } from "./FormValidator.js";

class SimpleForm extends Component {

  render() {
   const { handleSubmit, reset, pristine, submitting, valid } = this.props;

    return (
      <div>
        <form onSubmit={handleSubmit(values => console.log(values))}>
          <table>
            <tr>
             <td>
                <label>First Name :</label>
              </td>
              <td>
                <Field
                  name="firstName"
                  type="text"
                   component={input}
                  id="first-name"
                  placeholder="enter your first name"
                />
              </td>
            </tr>
            <tr>
               <td>
                <label>Last Name :</label>
              </td>
              <td>
                <Field
                  name="lastName"
                  type="text"
                  component={input}
                  id="last-name"
                  placeholder="enter your last name"
                />
              </td>
            </tr>
            <tr>
              <td>
                <label>Email Address :</label>
              </td>
              <td>
                <Field
                  name="email"
                  type="text"
                  component={input}
                  id="email"
                  placeholder="enter your email"
                />
              </td>
            </tr>
            <tr>
              <td>
                <button
                  type="submit"
                  disabled={!valid || pristine || submitting}>
                  Submit
                </button>
              </td>
              <td>
                <button type="button" onClick={reset}>
                  reset
                </button>
              </td>
            </tr>
          </table>
        </form>
      </div>
    );
  }
} 

export default reduxForm({
  form: "SimpleForm",
  validate: formValidatorHelper
})(SimpleForm);