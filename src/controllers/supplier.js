const Supplier = require('../models/Supplier')
const sendResponse = require('../helper/sendResponse')

const create = async (req, res) => {
    try {
        const  { name, description } = req.body;
        const supplier = new Supplier({
            name,
            description
        })
        return supplier
            .save()
            .then((supplier) => {
                return sendResponse(res,'CREATE_SUPPLIER_SUCCESS',201, supplier)
            })
            .catch((error) => {
                return sendResponse(res,'CREATE_SUPPLIER_ERROR',400, error.message, true) 
            });
    } catch (error) {
        console.error(error);
        return sendResponse(res,'CREATE_SUPPLIER_ERROR',500, error, true)
    }
};

const getAll = async (req, res) => {
    try {
        const suppliers = await Supplier.find({ active: true })
        .exec()
        return sendResponse(res,'GET_SUPPLIERS_SUCCESS',200, suppliers)
    } catch (error) {
        console.error(error);
        return sendResponse(res,'GET_SUPPLIERS_ERROR',500, error.message, true)
    }};


const getById = async (req, res) => {
    try {
        const supplierId  = req.params.id
        const supplier = await Supplier.findById(supplierId)
        .exec()
        if (!supplier) sendResponse(res,'GET_SUPPLIER_UNEXIST',404)
        return sendResponse(res,'GET_SUPPLIERS_SUCCESS',200, supplier)
    } catch (error) {
        console.error(error);
        return sendResponse(res,'GET_SUPPLIERS_ERROR',500, error.message, true)
    }
};

const edit = async(req, res) => {
    try {
        const body = req.body;
        const supplierId = req.params.id
        const supplier = await Supplier.findById(supplierId);

        if (!supplier) return sendResponse(res,'GET_SUPPLIER_UNEXIST',404)

        const supplierUpdated = await Supplier.findByIdAndUpdate(supplier, body, { new: true });
        if (!supplierUpdated) sendResponse(res,'UPDATE_SUPPLIER_ERROR',400)
        return sendResponse(res,'UPDATE_SUPPLIER_SUCCESS', 200, supplierUpdated)

    } catch (error) {
        console.error(error);
        return sendResponse(res,'UPDATE_SUPPLIER_ERROR', 500, error.message, true)
    }
    
};

const deleteSupplier = async(req, res) => {
    try {
        const supplierId = req.params.id
        // await Supplier.findByIdAndDelete(supplierId);
        await Supplier.findByIdAndUpdate(supplierId, {active: false}, { new: true });
        return sendResponse(res,'DELETE_SUPPLIER_SUCCESS', 204)
    } catch (error) {
        console.error(error);
        return sendResponse(res,'DELETE_SUPPLIER_ERROR', 500, error.message, true)
    }
};

const activeSupplier = async(req, res) => {
    try {
        const supplierId = req.params.id
        const supplier = await Supplier.findById(supplierId);
        if(supplier.active) return sendResponse(res,'DELETE_SUPPLIER_ACTIVE', 409, null, true)
        const supplierActivated = await Supplier.findByIdAndUpdate(supplierId, {active: true}, { new: true });
        return sendResponse(res,'ACTIVATE_SUPPLIER_SUCCESS', 200, supplierActivated)
    } catch (error) {
        console.error(error);
        return sendResponse(res,'DELETE_SUPPLIER_ERROR', 500, error.message, true)
    }
};

module.exports = {  
    create,
    deleteSupplier,
    edit,
    getById,
    getAll,
    activeSupplier
};