import * as Yup from 'yup';
import Product from '../models/Product.js';
import Category from '../models/Category.js';
import Order from '../schemas/Order.js';
class OrderController {
  async store(request, response) {
    // Logic to create a new order

    const schema = Yup.object({
      products: Yup.array()
        .required()
        .of(
          Yup.object({
            id: Yup.number().required(),
            quantity: Yup.number().required(),
          }),
        ),
    });
    try {
      schema.validateSync(request.body, {
        abortEarly: false,
        strict: true,
      });
    } catch (err) {
      return response.status(400).json({ error: err.errors });
    }

    const { userId, userName } = request;
    const { products } = request.body;
    const productIds = products.map((product) => product.id);
    const findedProducts = await Product.findAll({
      where: {
        id: productIds,
      },
      include: {
        model: Category,
        as: 'category',
        attributes: ['name'],
      },
    });
    const mapedProducts = findedProducts.map((product) => {
      const quantity = products.find((p) => p.id === product.id).quantity;
      const newProduct = {
        id: product.id,
        name: product.name,
        price: product.price,
        url: product.url,
        category: product.category.name,
        quantity,
      };
      return newProduct;
    });

    const order = {
      user: {
        id: userId,
        name: userName,
      },
      products: mapedProducts,
      status: 'Pedido Realizado',
    };

    const newOrder = await Order.create(order);
    return response
      .status(201)
      .json({ newOrder, message: 'Order created successfully' });
  }

  async update(request, response) {
    const schema = Yup.object({
      status: Yup.string().required(),
    });
    try {
      schema.validateSync(request.body, {
        abortEarly: false,
        strict: true,
      });
    } catch (err) {
      return response.status(400).json({ error: err.errors });
    }
    const { status } = request.body;
    const { id } = request.params;
    await Order.updateOne({ _id: id }, { status });
    return response.status(200).json({ message: ` ${status}!!` });
  }
  async index(_request, response){
    const orders = await Order.find();
    return response.status(200).json(orders);
  }
}

export default new OrderController();
