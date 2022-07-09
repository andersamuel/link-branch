import { Router } from "express";

import { AuthMiddleware } from "./middleware/AuthMiddleware";

import { CreateNewUserController } from "./controllers/CreateNewUserController";
import { CreatePageController } from "./controllers/CreatePageController";

import { UpdatePageController } from "./controllers/UpdatePageController";
import { UpdateUserController } from "./controllers/UpdateUserController";

import { GetUsersController } from "./controllers/GetUsersController";

import { LoginAuthenticationController } from "./controllers/LoginAuthenticationController";
import { ValidateTokenController } from "./controllers/ValidateTokenController";

const router = Router();

const CreateNewUser = new CreateNewUserController();
const CreatePage = new CreatePageController();

const UpdatePage = new UpdatePageController();
const UpdateUser = new UpdateUserController();

const GetUsers = new GetUsersController();

const LoginAuthentication = new LoginAuthenticationController();

const ValidateToken = new ValidateTokenController();

router.post("/register", CreateNewUser.handle);
router.post("/page", CreatePage.handle);

router.put("/page/:id", UpdatePage.handle);
router.put("/user/:id", UpdateUser.handle);

router.post("/authentication", LoginAuthentication.handle);

router.post("/validatetoken", ValidateToken.handle);

router.get("/users", GetUsers.handle);

export default router;
