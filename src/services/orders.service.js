const createOrder = (body) => {
  const validObject = validateOrder(body);
  const { total } = validObject;

  if (total > 0) {
    const response = createResponse(validObject);

    return response;
  }
};

const validateOrder = (body) => {
  const { customerId, items } = body;

  if (!customerId) {
    return {
      status: "failed",
      message: "CustomerId inexistente.",
      total: null,
    };
  }

  if (!Array.isArray(items)) {
    return {
      status: "failed",
      message: "A variável 'items' tem que ser um array.",
      total: null,
    };
  }

  if (items.length === 0) {
    return {
      status: "failed",
      message: "A variável 'items' está vazia",
      total: null,
    };
  }

  let total = 0;
  for (const item of items) {
    if (!item.productId) {
      return {
        status: "failed",
        message: "ProductId inválido.",
        total: null,
      };
    }

    if (item.quantity <= 0) {
      return {
        status: "failed",
        message: "Quantidade inválida",
        total: null,
      };
    }

    if (item.price <= 0) {
      return {
        status: "failed",
        message: "Preço inválido",
        total: null,
      };
    }

    total += item.quantity * item.price;
  }

  return { valid: true, total };
};

const createResponse = (object) => {
  const { valid, total } = object;  

  const status = valid ? "created" : "failed";
  const message = valid
    ? "Pedido criado com sucesso!"
    : "Falha na criação do pedido.";
  const response = {
    status,
    message,
    total,
  };
  return response;
};

module.exports = {
  createOrder,
};
