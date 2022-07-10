import { Router } from "express";

import { AuthMiddleware } from "./middleware/AuthMiddleware";

import { CreateUserController } from "./controllers/CreateUserController";
import { CreatePageController } from "./controllers/CreatePageController";
import { CreateLinkController } from "./controllers/CreateLinkController";

import { GetUsersController } from "./controllers/GetUsersController";
import { GetUserController } from "./controllers/GetUserController";
import { GetPageController } from "./controllers/GetPageController";
import { GetLinkController } from "./controllers/GetLinkController";

import { UpdateUserController } from "./controllers/UpdateUserController";
import { UpdatePageController } from "./controllers/UpdatePageController";
import { UpdateLinkController } from "./controllers/UpdateLinkController";

import { LoginAuthenticationController } from "./controllers/LoginAuthenticationController";
import { ValidateTokenController } from "./controllers/ValidateTokenController";

const router = Router();

const CreateUser = new CreateUserController();
const CreatePage = new CreatePageController();
const CreateLink = new CreateLinkController();

const GetUsers = new GetUsersController();
const GetUser = new GetUserController();
const GetPage = new GetPageController();
const GetLink = new GetLinkController();

const UpdateUser = new UpdateUserController();
const UpdatePage = new UpdatePageController();
const UpdateLink = new UpdateLinkController();

const LoginAuthentication = new LoginAuthenticationController();

const ValidateToken = new ValidateTokenController();

router.post("/register", CreateUser.handle);
router.post("/page", CreatePage.handle);
router.post("/link", CreateLink.handle);

router.get("/users", GetUsers.handle);
router.get("/user/:id", GetUser.handle);
router.get("/page/:id", GetPage.handle);
router.get("/link/:id", GetLink.handle);

router.put("/user/:id", UpdateUser.handle);
router.put("/page/:id", UpdatePage.handle);
router.put("/link/:id", UpdateLink.handle);

router.post("/authentication", LoginAuthentication.handle);
router.post("/validatetoken", ValidateToken.handle);

export default router;
