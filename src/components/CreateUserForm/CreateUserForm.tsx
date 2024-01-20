import React from 'react';
import styled from 'styled-components';
import { Field, FieldArray, Form, Formik } from 'formik';
import createUser from '../../createUserData';
import { COLORS, GENDERS } from '../../contants';
import Button from '../button';
import { validationSchema } from './validationSchema';
import { TInitialValues } from './types';

const StyledForm = styled(Form)`
  width: 60%;
  padding: 20px;
  background-color: #f4babcc9;
  font-family: arial;
  margin: auto;
  border-radius: 5px;

  h1 {
    text-align: center;
  }
`;

const TextField = styled(Field)<{
  error?: string;
}>`
  color: #404040;
  padding: 8px;
  border-width: 1px;
  border-style: groove;
  border-radius: 5px;
  font-size: 16px;
  background-color: #fdf2e7;
  border-color: rgba(253, 163, 92, 0.45);

  // change border color when field contains error
  border: ${({ error }) => `1px solid ${error && 'red'}  `};

  &:hover {
    background-color: #fde7d1;
    border-color: rgba(252, 135, 42, 0.45);
    color: #2a2a2a;
  }
`;

const Label = styled.label`
  display: block;
`;

const StyledFieldContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  label {
    margin: 10px 0 5px;
  }

  input:not(#hobbies),
  select,
  div {
    margin-bottom: 5px;
  }
`;

const StyledLabel = styled.label`
  display: flex;
  align-items: center;
  flex-basis: 25%;
  box-sizing: border-box;
  margin-bottom: 15px;
  display: inline-block;
  position: relative;
  padding-left: 30px;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;

    &:checked ~ div {
      &:after {
        opacity: 1;
      }
    }
  }

  div {
    background-color: ${({ color }) => color};
    position: absolute;
    top: 1px;
    left: 0;
    height: 17px;
    width: 17px;
    transition: background-color 0.25s ease;
    border-radius: 11px;
    border-radius: 50%;

    &:after {
      content: '';
      position: absolute;
      left: 7px;
      top: 2px;
      width: 3px;
      height: 8px;

      // create white checkmark sign if color value is black.
      border: ${({ color }) =>
        `1px solid ${color === '#000000' ? 'white' : 'black'}  `};
      border-width: 0 2px 2px 0;
      transform: rotate(45deg);
      opacity: 0;
      transition: opacity 0.25s ease;
    }
  }

  // for responsive checkboxes
  @media (max-width: 1333px) {
    flex-basis: 33.33%;
  }

  @media (max-width: 1073px) {
    flex-basis: 33.33%;
  }

  @media (max-width: 815px) {
    flex-basis: 50%;
  }
`;

const StyledCheckboxContainer = styled.div<{ error?: string }>`
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
  padding: 10px;
  border-radius: 5px;
  border: ${({ error }) => `1px solid ${error && 'red'}  `};
`;

const StyledHobbiesContainer = styled.div`
  display: flex;
  input {
    width: 100%;
  }
  button {
    margin: 0 10px;

    &:last-child {
      margin: 0px;
    }
  }
`;

const Error = styled.span`
  color: red;
  font-size: 12px;
`;

const StyledFooter = styled.div`
  margin-top: 20px;

  div {
    display: flex;
    justify-content: space-around;
    margin-top: 30px;
  }
`;

const initialValues = {
  firstName: '',
  lastName: '',
  phone: '',
  gender: 'Female',
  colors: [],
  hobbies: ['']
} as TInitialValues;

const CreateUserForm: React.FC = () => {
  const submitForm = (
    values: TInitialValues,
    { resetForm }: { resetForm: () => void }
  ) => {
    resetForm();
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      validateOnChange={false}
      validateOnBlur={false} // removes validation which occures on "leaving field"
      onSubmit={submitForm}
    >
      {({ values, errors, dirty, handleReset, handleChange, isSubmitting }) => {
        return (
          <StyledForm>
            <h1>Create user form</h1>
            <StyledFieldContainer>
              <Label htmlFor={createUser.data.firstName.name}>
                {createUser.data.firstName.label}
              </Label>
              <TextField
                id={createUser.data.firstName.name}
                name={createUser.data.firstName.name}
                placeholder={createUser.data.firstName.placeholder}
              />
              {errors.firstName && <Error>{errors.firstName}</Error>}
            </StyledFieldContainer>

            <StyledFieldContainer>
              <Label htmlFor={createUser.data.lastName.name}>
                {createUser.data.lastName.label}
              </Label>
              <TextField
                id={createUser.data.lastName.name}
                name={createUser.data.lastName.name}
                placeholder={createUser.data.lastName.placeholder}
              />
              {errors.lastName && <Error>{errors.lastName}</Error>}
            </StyledFieldContainer>

            <StyledFieldContainer>
              <Label htmlFor={createUser.data.phone.name}>
                {createUser.data.phone.label}
              </Label>
              <TextField
                id={createUser.data.phone.name}
                name={createUser.data.phone.name}
                placeholder={createUser.data.phone.placeholder}
              />
              {errors.phone && <Error>{errors.phone}</Error>}
            </StyledFieldContainer>

            <StyledFieldContainer>
              <Label htmlFor={createUser.data.gender.name}>
                {createUser.data.gender.label}
              </Label>
              <TextField
                as="select"
                id={createUser.data.gender.name}
                name={createUser.data.gender.name}
                placeholder={createUser.data.gender.placeholder}
                onChange={handleChange}
              >
                {GENDERS.map((gender) => (
                  <option value={gender}>{gender}</option>
                ))}
              </TextField>
              {errors.gender && <Error>{errors.gender}</Error>}
            </StyledFieldContainer>

            <StyledCheckboxContainer role="group">
              {Object.entries(COLORS).map(([key, value]) => (
                <StyledLabel color={value}>
                  <Field
                    type="checkbox"
                    name={createUser.data.colors.name}
                    value={key}
                  />
                  <div color={value.toString()}></div>
                  <span>{key}</span>
                </StyledLabel>
              ))}

              {errors.colors && <Error>{errors.colors}</Error>}
            </StyledCheckboxContainer>

            <StyledFieldContainer>
              <Label htmlFor="name">{createUser.data.hobbies.label}</Label>
              <FieldArray
                name={createUser.data.hobbies.name}
                render={(arrayHelpers) => {
                  return (
                    <>
                      {values.hobbies &&
                        values.hobbies.length > 0 &&
                        values.hobbies.map((hobby, index) => (
                          <StyledHobbiesContainer>
                            <TextField
                              id={createUser.data.hobbies.name}
                              name={`hobbies.${index}`}
                              placeholder={createUser.data.hobbies.placeholder}
                              key={index}
                            />
                            <Button
                              small="sm"
                              onClick={() => {
                                index > 0 && arrayHelpers.remove(index);
                              }}
                            >
                              -
                            </Button>
                            <Button
                              small="sm"
                              onClick={() => arrayHelpers.insert(index, '')}
                            >
                              +
                            </Button>
                          </StyledHobbiesContainer>
                        ))}
                    </>
                  );
                }}
              />
              {errors.hobbies && <Error>error</Error>}{' '}
            </StyledFieldContainer>

            <StyledFooter>
              <div>
                <Button
                  color="#b3a7a7"
                  onClick={handleReset}
                  // disable button if form contains errors or isSubmitting
                  disabled={!dirty || isSubmitting}
                >
                  Reset
                </Button>
                <Button color="#fdf7eb" disabled={isSubmitting}>
                  Submit form
                </Button>
              </div>
            </StyledFooter>
          </StyledForm>
        );
      }}
    </Formik>
  );
};

export default CreateUserForm;
