/**
 * Login Schema
 * 
 * This Yup schema is used for validating login form inputs. It defines the shape of the object
 * with 'email' and 'password' properties and specifies the validation rules for each property.
 * 
 * @module loginSchema
 * @createdBy Matias on 2/11/2023
 * 
 * @requires Yup
 */

import * as Yup from 'yup';

// Defines the login schema using Yup
export const loginSchema = Yup.object().shape({
    // Validates the 'email' property: must be a valid email address and is required
    email: Yup.string().email('Invalid email').required('Required'),

    // Validates the 'password' property: must be a non-empty string and is required
    password: Yup.string().required('Required'),
});
