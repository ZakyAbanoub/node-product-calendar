import prisma from "../db";
import { comparePasswords, createJWT, hashPassword } from "../modules/auth";

export const createNewUser = async (req, res, next) => {
  try {
    const hashedPassword = await hashPassword(req.body.password);
    const user = await prisma.user.create({
      data: {
        username: req.body.username,
        password: hashedPassword,
      },
    });

    const token = createJWT(user);
    res.json({ token });
  } catch (e) {
    e.type = "auth";
    next(e);
  }
};

export const signin = async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  const user = await prisma.user.findUnique({
    where: {
      username,
    },
  });

  const isValid = await comparePasswords(password, user.password);

  if (!isValid) {
    res.status(401);
    res.json({ message: "Not authorized" });
    return;
  }

  const token = createJWT(user);
  res.json({ token });
};
