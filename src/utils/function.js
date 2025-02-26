const getImagePath = (image) => {
    // Joins the upload directory path with the image file name to create a full path
    return path.join("uploads", image)
}
export { getImagePath }

