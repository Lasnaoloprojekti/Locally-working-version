/**
 * Registration Schema
 * 
 * This Yup schema is used for validating registration form inputs. It defines the shape of the object
 * with 'username', 'email', and 'password' properties and specifies the validation rules for each property.
 * 
 * @module registerSchema
 * @createdBy Matias on 2/11/2023
 * 
 * @requires Yup
 */

import * as Yup from 'yup';

// Defines the registration schema using Yup
export const registerSchema = Yup.object().shape({
    // Validates the 'username' property: must be a non-empty string and is required
    username: Yup.string().required('Required'),

    // Validates the 'email' property: must be a valid email address and is required
    email: Yup.string().email('Invalid email').required('Required'),

    // Validates the 'password' property: must be at least 6 characters long and is required
    password: Yup.string().min(6, 'Password must be at least 6 characters').required('Required'),
});
