import React, { useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Form } from '@unform/web';
import * as Yup from 'yup';

import RecipientForm from '~/components/RecipientForm';
import { updateRecipientRequest } from '~/store/modules/recipient/actions';

export default function EditRecipient() {
  const profile = useSelector(state => state.recipient.profile);
  const dispatch = useDispatch();

  const formRef = useRef();

  async function handleSubmit(data) {
    const schema = Yup.object().shape({
      name: Yup.string().required('O nome é Obrigatório'),
      street: Yup.string().required('A rua é Obrigatória'),
      number: Yup.string().required('O número é Obrigatório'),
      city: Yup.string().required('A cidade é Obrigatória'),
      region: Yup.string().required('O estado é Obrigatório'),
      zipcode: Yup.string().required('O CEP é Obrigatório'),
    });

    try {
      await schema.validate(data, {
        abortEarly: false,
      });

      dispatch(updateRecipientRequest(profile.id, data));
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const errorMesseges = {};

        err.inner.forEach(error => {
          errorMesseges[error.path] = error.message;
        });

        formRef.current.setErrors(errorMesseges);
      }
    }
  }

  return (
    <Form ref={formRef} onSubmit={handleSubmit} initialData={profile}>
      <RecipientForm title="Edição de destinatários" />
    </Form>
  );
}
