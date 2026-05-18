// const express = require("express");
// const cors = require("cors");
// const prisma = require("./prismaClient");
// const bcrypt = require("bcrypt");
// const app = express();

// app.use(cors());
// app.use(express.json());

// app.get("/", (req, res) => {
//   res.send("GETFIT Backend Running 🚀");
// });


// app.post("/subscription", async (req, res) => {
//   try {
//     const { userId, planId, planName, price } = req.body;

//     const sub = await prisma.subscription.create({
//       data: {
//         userId,
//         planId,
//         planName,
//         price,
//       },
//     });

//     res.json({
//       message: "Subscription created successfully",
//       sub,
//     });

//   } catch (error) {
//     console.log(error);
//     res.status(500).json({ message: "Error creating subscription" });
//   }
// });



// app.get("/subscription/:userId", async (req, res) => {
//   try {
//     const { userId } = req.params;

//     const sub = await prisma.subscription.findMany({
//       where: { userId },
//     });

//     res.json(sub);

//   } catch (error) {
//     console.log(error);
//     res.status(500).json({ message: "Error fetching subscription" });
//   }
// });


// app.delete("/subscription/:id", async (req, res) => {
//   try {
//     const { id } = req.params;

//     await prisma.subscription.delete({
//       where: { id },
//     });

//     res.json({ message: "Subscription cancelled" });
//   } catch (err) {
//     console.log(err);
//     res.status(500).json({ message: "Error cancelling plan" });
//   }
// });

// app.post("/register", async (req, res) => {

//   try {

//     const { name, email, password } = req.body;

//     // HASH PASSWORD
//     const hashedPassword = await bcrypt.hash(password, 10);

//     const user = await prisma.user.create({
//       data: {
//         name,
//         email,
//         password: hashedPassword,
//       },
//     });

//     res.json(user);

//   } catch (error) {

//     console.log(error);

//     res.status(500).json({
//       message: "Something went wrong",
//     });
//   }
// });





// app.post("/login", async (req, res) => {

//   try {

//     const { email, password } = req.body;

//     const user = await prisma.user.findUnique({
//       where: {
//         email,
//       },
//     });

//     // CHECK USER EXISTS
//     if (!user) {
//       return res.status(404).json({
//         message: "User not found",
//       });
//     }

//     // CHECK PASSWORD
//    const isMatch = await bcrypt.compare(password, user.password);

// if (!isMatch) {
//   return res.status(400).json({
//     message: "Invalid password",
//   });
// }

//     res.json({
//       message: "Login successful",
//       user,
//     });

//   } catch (error) {

//     console.log(error);

//     res.status(500).json({
//       message: "Something went wrong",
//     });
//   }
// });



// app.get("/users", async (req, res) => {

//   try {

//     const users = await prisma.user.findMany();

//     res.json(users);

//   } catch (error) {

//     console.log(error);

//     res.status(500).json({
//       message: "Error fetching users",
//     });
//   }
// });





// app.listen(5000, () => {
//   console.log("Server running on port 5000");
// });










const express = require("express");
const cors = require("cors");
const prisma = require("./prismaClient");
const bcrypt = require("bcrypt");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("GETFIT Backend Running 🚀");
});

/* ===================================================
   SUBSCRIPTION ROUTES
=================================================== */

// CREATE SUBSCRIPTION
app.post("/subscription", async (req, res) => {

  try {

    const {
      userId,
      planId,
      planName,
      price,
    } = req.body;

    const sub = await prisma.subscription.create({

      data: {

        userId: parseInt(userId),

        planId,
        planName,
        price,

      },

    });

    res.json({
      message: "Subscription created successfully",
      sub,
    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      message: "Error creating subscription",
    });

  }

});

// GET USER SUBSCRIPTION
app.get("/subscription/:userId", async (req, res) => {

  try {

    const { userId } = req.params;

    const sub = await prisma.subscription.findMany({

      where: {
        userId: parseInt(userId),
      },

    });

    res.json(sub);

  } catch (error) {

    console.log(error);

    res.status(500).json({
      message: "Error fetching subscription",
    });

  }

});

// DELETE SUBSCRIPTION
app.delete("/subscription/:id", async (req, res) => {

  try {

    const { id } = req.params;

    await prisma.subscription.delete({

      where: {
        id: parseInt(id),
      },

    });

    res.json({
      message: "Subscription cancelled",
    });

  } catch (err) {

    console.log(err);

    res.status(500).json({
      message: "Error cancelling plan",
    });

  }

});

/* ===================================================
   AUTH ROUTES
=================================================== */

// REGISTER
app.post("/register", async (req, res) => {

  try {

    const { name, email, password } = req.body;

    const hashedPassword =
      await bcrypt.hash(password, 10);

    const user = await prisma.user.create({

      data: {
        name,
        email,
        password: hashedPassword,
      },

    });

    res.json(user);

  } catch (error) {

    console.log(error);

    res.status(500).json({
      message: "Something went wrong",
    });

  }

});

// LOGIN
app.post("/login", async (req, res) => {

  try {

    const { email, password } = req.body;

    const user = await prisma.user.findUnique({

      where: {
        email,
      },

    });

    if (!user) {

      return res.status(404).json({
        message: "User not found",
      });

    }

    const isMatch =
      await bcrypt.compare(
        password,
        user.password
      );

    if (!isMatch) {

      return res.status(400).json({
        message: "Invalid password",
      });

    }

    res.json({
      message: "Login successful",
      user,
    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      message: "Something went wrong",
    });

  }

});

// GET USERS
app.get("/users", async (req, res) => {

  try {

    const users =
      await prisma.user.findMany();

    res.json(users);

  } catch (error) {

    console.log(error);

    res.status(500).json({
      message: "Error fetching users",
    });

  }

});

/* ===================================================
   SERVER
=================================================== */

app.listen(5000, () => {
  console.log("Server running on port 5000");
});