import { Router } from "express";
import { getAll, insertProduct, getOne, updateProduct, deleteProduct } from '../controllers/products.controller.js';

const router = Router();



// Rutas sin un prefijo específico
router.get('/', getAll);
router.get('/:barcode', getOne);
router.post('/', insertProduct);
router.put('/:barcode', updateProduct);
router.delete('/De/:barcode', deleteProduct);

export default router;