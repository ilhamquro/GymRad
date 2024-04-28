import express from 'express';
import adminController from '../controllers/adminController.js';
import adminMiddleware from '../middlewares/adminMiddleware.js';

const router = express.Router();

router.post('/create/admin', adminMiddleware.create, adminController.create);
router.post('/login/admin', adminMiddleware.login, adminController.login);

const authRoute = router;

export default authRoute;
