import { model } from 'mongoose';
import productDAO from '../dao/products.dao.js'

//Nos muestra todos los elementos disponibles en la BD
export const getAll = (req, res) => {
    productDAO.getAll()
    .then((result) => {
        res.json(result);
    })
    .catch((err) => {
        res.json(err);
    });
};


export const getOne = (req, res) => {
    productDAO.getOne(req.params.barcode)
    .then((result) => {
        if (result) {
            res.json(result);
        } else {
            res.json({
                status: "product not found",
            });
        }
    })
    .catch((err) => {
        res.json({
            status: "server failed",
        });
    });
};

//Nos muestra todos los elementos disponibles en la BD
export const insertProduct = (req, res) => {
    productDAO.insertProduct(req.body)
    .then((result) => {
        if (result) {
            res.json({
                status: "product saved",
            });
        }
    })
    .catch((err) => {
        res.json({
            status: "server failed",
        });
    });
};


export const updateProduct = (req, res) => {
    productDAO.updateProduct(req.params.barcode, req.body)
    .then((result) => {
        if (result) {
            res.json({
                status: "product updated",
            });
        } else {
            res.json({
                status: "product not found",
            });
        }
    })
    .catch((err) => {
        res.json({
            status: "Server failed",
        });
    });
};


export const deleteProduct = (req, res) => {
    productDAO.delteProduct(req.params.barcode)
    .then((result) => {
        if (result) {
            res.json({
                status: "ticket deleted",
            });
        } else {
            res.json({
                status: "ticket not found",
            });
        }
    })
    .catch((err) => {
        res.json({
            status: "server failed",
        });
    });
};

