function status(request, response) {
    response.status(200).json({"test": "test"});
}

export default status;