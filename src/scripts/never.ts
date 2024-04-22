const generateError = (message: string, code: number) : never => {
    throw { message, code };

    // while (true) {}  // This will also return a 'never' type.
};

generateError('An error occurred!', 500);
// This function will never return anything because it throws an error.
// The return type is 'never' because the function will never finish its execution.
