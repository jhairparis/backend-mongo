import Client from "../models/Client.js";

export async function getAllClients(req, res) {
  try {
    const customer = await Client.find();

    return res.json(customer);
  } catch (error) {
    console.error(error);
    return res.status(500).send("We have an error");
  }
}

export async function addClient(req, res) {
  try {
    const customer = new Client(req.body);
    await customer.save();

    return res.send(customer);
  } catch (error) {
    console.error(error);
    return res.status(500).send("We have an error");
  }
}

export async function getClientById(req, res) {
  const { id } = req.params;
  try {
    const customer = await Client.findById(id);

    if (!customer)
      return res.status(404).json({ msg: `Not found customer with ${id}` });

    return res.send(customer);
  } catch (error) {
    console.error(error);
    return res.status(500).send("We have an error");
  }
}

export async function deleteClient(req, res) {
  const { id } = req.params;
  try {
    const customer = await Client.findById(id);

    if (!customer)
      return res.status(404).json({ msg: `Not found customer with ${id}` });

    await Client.findOneAndDelete({ _id: req.params.id });

    return res.json({ msg: `id: ${id} deleted` });
  } catch (error) {
    console.error(error);
    return res.status(500).send("We have an error");
  }
}

export async function updateClient(req, res) {
  const { id_ } = req.params;
  try {
    const { name, lastName, id, email, phone, address } = req.body;
    const customer = await Client.findById(id_);

    if (!customer)
      return res.status(404).json({ msg: `Not found customer with ${id_}` });

    customer.name = name;
    customer.lastName = lastName;
    customer.id = id;
    customer.email = email;
    customer.phone = phone;
    customer.address = address;

    const res = await Client.findOneAndUpdate({ _id: id_ }, customer, {
      new: true,
    });

    return res.json(res);
  } catch (error) {
    console.error(error);
    return res.status(500).send("We have an error");
  }
}

// Made by Jhair Paris (jhairparis.com)
