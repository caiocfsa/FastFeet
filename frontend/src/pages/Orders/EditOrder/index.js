import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import * as Yup from 'yup';

import OrderForm from '~/components/OrderForm';
import { updateOrderRequest } from '~/store/modules/order/actions';

export default function EditOrder() {
  const schema = Yup.object().shape({
    recipient_id: Yup.number().required('Informe o Detinatário'),
    deliveryman_id: Yup.number().required('Informe o Entregador'),
    product: Yup.number().required('O produto é Obrigatório'),
  });
  const details = useSelector(state => state.order.details);

  const dispatch = useDispatch();

  function handleSubmit(data) {
    dispatch(updateOrderRequest(details.id, data));
  }

  return (
    <OrderForm
      title="Edição de Encomendas"
      onSubmit={handleSubmit}
      schema={schema}
      initialData={details}
    />
  );
}
