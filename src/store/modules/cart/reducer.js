import produce from 'immer';

import { toast } from 'react-toastify';

export default function cart(state = [], action) {
  switch (action.type) {
    case '@cart/ADD_SUCCESS': {
      toast.success('Produto adicionado ao carrinho!');

      return produce(state, draft => {
        const { product } = action;

        draft.push(product);
      });
    }

    case '@cart/REMOVE': {
      toast.success('Produto removido do carrinho!');

      return produce(state, draft => {
        const productIndex = draft.findIndex(p => p.id === action.id);

        if (productIndex >= 0) {
          draft.splice(productIndex, 1);
        }
      });
    }

    case '@cart/UPDATE_AMOUNT_SUCCESS': {
      toast.success('Quantidade atualizada!');

      return produce(state, draft => {
        const productIndex = draft.findIndex(p => p.id === action.id);

        if (productIndex >= 0) {
          draft[productIndex].amount = Number(action.amount);
        }
      });
    }

    default:
      return state;
  }
}
