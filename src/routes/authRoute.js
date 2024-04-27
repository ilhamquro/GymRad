import express from 'express';
import adminController from '../controllers/adminController';
import adminMiddleware from '../middlewares/adminMiddleware';

const router = express.Router();

router.post('/create/admin', adminMiddleware.create, adminController.create);
router.post('/login/admin', adminMiddleware.login, adminController.login);

const authRoute = router;

export default authRoute;
