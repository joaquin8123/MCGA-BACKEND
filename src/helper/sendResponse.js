const productMessages = {
    GET_PRODUCTS_SUCCESS: 'Products successfully obtained.',
    GET_PRODUCTS_ERROR: `There was an error getting the products.`,
    GET_PRODUCT_UNEXIST: 'The product does not exist',
    GET_PRODUCT_SUCCESS: 'Product successfully obtained.',
    CREATE_PRODUCT_SUCCESS: 'Product created successfully.',
    CREATE_PRODUCT_ERROR: 'An error occurred while creating the product',
    UPDATE_PRODUCT_ERROR: 'An error occurred while updating the product',
    UPDATE_PRODUCT_SUCCESS: 'the product was successfully upgraded',
    DELETE_PRODUCT_SUCCESS: 'the product was successfully deleted',
    DELETE_PRODUCT_ERROR: 'An error occurred while deleted the product'
};

const supplierMessages = {
    GET_SUPPLIERS_SUCCESS: 'Suppliers successfully obtained.',
    GET_SUPPLIERS_ERROR: `There was an error getting the suppliers.`,
    GET_SUPPLIER_UNEXIST: 'The supplier does not exist',
    CREATE_SUPPLIER_SUCCESS: 'supplier created successfully.',
    CREATE_SUPPLIER_ERROR: 'An error occurred while creating the supplier',
    CREATE_SUPPLIER_COLOUR_ERROR: "It is not allowed to paint products gray",
    UPDATE_SUPPLIER_ERROR: 'An error occurred while updating the product',
    UPDATE_SUPPLIER_SUCCESS: 'the supplier was successfully upgraded',
    DELETE_SUPPLIER_SUCCESS: 'the supplier was successfully deleted',
    DELETE_SUPPLIER_ERROR: 'An error occurred while deleted the supplier',
    DELETE_SUPPLIER_ACTIVE: 'Provider is active',
    ACTIVATE_SUPPLIER_SUCCESS: 'the supplier was successfully activate',
};

const authMessages = {
    HASH_ERROR: 'An error ocurred saving password.',
    REGISTER_SUCCESS: 'User registered successfully.',
    REGISTER_ERROR: 'An error ocurred creating user.',
    USER_EXISTS: 'User with this email already exists.',
    LOGIN_SUCCESS: 'User authenticated successfully.',
    LOGIN_ERROR: 'An error ocurred authenticating user.',
    INACTIVE_USER: 'User is not active.',
    INCORRECT_PASSWORD: 'Incorrect password.',
    UNEXISTENT_USER: 'User not found.'
};

const responseMessages = {
    ...productMessages,
    ...supplierMessages,
    ...authMessages
};

const sendResponse = (res, msgKey, code, data = {}, error = false) => {
    return res.status(code).json({
        msg: responseMessages[msgKey],
        data: data,
        error
    });
};

module.exports = sendResponse;