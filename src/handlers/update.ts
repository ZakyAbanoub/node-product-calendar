import prisma from "../db";

export const getUpdates = async (req, res) => {
  const products = await prisma.product.findMany({
    where: {
      belongsToId: req.user.id,
    },
    include: {
      updates: true,
    },
  });
  const updates = products.reduce((allUpdated, product) => {
    return [...allUpdated, ...product.updates];
  }, []);

  res.json({ data: updates });
};
export const getUpdateById = async (req, res) => {
  const update = await prisma.update.findFirst({
    where: {
      id: req.params.id,
    },
  });
  res.json({ data: update });
};
export const createUpdate = async (req, res) => {
  const product = await prisma.product.findUnique({
    where: {
      id: req.body.productId,
    },
  });
  if (!product) {
    res.status(401);
    res.json({ message: "Unauthorized" });
    return;
  }

  const update = await prisma.update.create({
    data: {
      title: req.body.title,
      body: req.body.body,
      product: {
        connect: {
          id: product.id,
        },
      },
    },
  });

  res.json({ data: update });
};
export const updateUpdate = async (req, res) => {
  const products = await prisma.product.findMany({
    where: {
      belongsToId: req.user.id,
    },
    include: {
      updates: true,
    },
  });

  const updates = products.reduce((allUpdated, product) => {
    return [...allUpdated, ...product.updates];
  }, []);

  const match = updates.find((update) => update.id === req.params.id);

  if (!match) {
    res.status(401);
    res.json({ message: "Unauthorized" });
    return;
  }

  const updatedUpdate = await prisma.update.update({
    where: {
      id: req.params.id,
    },
    data: req.body,
  });

  res.json({ data: updatedUpdate });
};
export const deleteUpdate = async (req, res) => {
  const products = await prisma.product.findMany({
    where: {
      belongsToId: req.user.id,
    },
    include: {
      updates: true,
    },
  });

  const updates = products.reduce((allUpdated, product) => {
    return [...allUpdated, ...product.updates];
  }, []);

  const match = updates.find((update) => update.id === req.params.id);

  if (!match) {
    res.status(401);
    res.json({ message: "Unauthorized" });
    return;
  }

  const deleted = await prisma.update.delete({
    where: {
      id: req.params.id,
    },
  });

  res.json({ data: deleted });
};
