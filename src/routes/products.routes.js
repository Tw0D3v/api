import { Router } from 'express';
const router = Router()
import * as productCtrl from '../controllers/products.controller'

router.post('/', productCtrl.createProducts)
router.get('/', productCtrl.getProducts)
router.get('/:productId', productCtrl.getProductsById)
router.put('/:productId', productCtrl.updateProdutsById)
router.delete('//:productId', productCtrl.deleteProductsById)

export default router;